import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
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
}

/**
 * <p>Describes automated discovery.</p>
 */
export interface AutomatedDiscoveryInformation {
  /**
   * <p>Time that automated discovery last ran.</p>
   */
  LastRunTime?: Date;
}

export namespace AutomatedDiscoveryInformation {
  export const filterSensitiveLog = (obj: AutomatedDiscoveryInformation): any => ({
    ...obj,
  });
}

export enum LicenseCountingType {
  CORE = "Core",
  INSTANCE = "Instance",
  SOCKET = "Socket",
  VCPU = "vCPU",
}

/**
 * <p>Describes product information filters.</p>
 */
export interface ProductInformationFilter {
  /**
   * <p>Filter value.</p>
   */
  ProductInformationFilterValue: string[] | undefined;

  /**
   * <p>Logical operator.</p>
   */
  ProductInformationFilterComparator: string | undefined;

  /**
   * <p>Filter name.</p>
   */
  ProductInformationFilterName: string | undefined;
}

export namespace ProductInformationFilter {
  export const filterSensitiveLog = (obj: ProductInformationFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Describes product information for a license configuration.</p>
 */
export interface ProductInformation {
  /**
   * <p>Resource type. The possible values are <code>SSM_MANAGED</code> | <code>RDS</code>.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>Product information filters.</p>
   *          <p>The following filters and logical operators are supported when the resource type
   *          is <code>SSM_MANAGED</code>:</p>
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
   *                Possible values are: <code>sql-server-enterprise</code> |
   *                <code>sql-server-standard</code> |
   *                <code>sql-server-web</code> |
   *                <code>windows-server-datacenter</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The following filters and logical operators are supported when the resource type
   *          is <code>RDS</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Engine Edition</code> - The edition of the database engine.
   *                Logical operator is <code>EQUALS</code>.
   *                Possible values are: <code>oracle-ee</code> | <code>oracle-se</code> | <code>oracle-se1</code> | <code>oracle-se2</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>License Pack</code> - The license pack.
   *                Logical operator is <code>EQUALS</code>.
   *                Possible values are: <code>data guard</code> |
   *                <code>diagnostic pack sqlt</code> |
   *                <code>tuning pack sqlt</code> |
   *                <code>ols</code> |
   *                <code>olap</code>.</p>
   *             </li>
   *          </ul>
   */
  ProductInformationFilterList: ProductInformationFilter[] | undefined;
}

export namespace ProductInformation {
  export const filterSensitiveLog = (obj: ProductInformation): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a tag for a license configuration.</p>
 */
export interface Tag {
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
}

export interface CreateLicenseConfigurationRequest {
  /**
   * <p>Description of the license configuration.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether hard or soft license enforcement is used. Exceeding a hard limit
   *          blocks the launch of new instances.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>Product information.</p>
   */
  ProductInformationList?: ProductInformation[];

  /**
   * <p>Dimension used to track the license inventory.</p>
   */
  LicenseCountingType: LicenseCountingType | string | undefined;

  /**
   * <p>Number of licenses managed by the license configuration.</p>
   */
  LicenseCount?: number;

  /**
   * <p>Name of the license configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>Tags to add to the license configuration.</p>
   */
  Tags?: Tag[];

  /**
   * <p>License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost). The available rules
   *          vary by dimension, as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Cores</code> dimension: <code>allowedTenancy</code> |
   *                <code>licenseAffinityToHost</code> |
   *                <code>maximumCores</code> | <code>minimumCores</code>
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
   *                   <code>Sockets</code> dimension: <code>allowedTenancy</code> |
   *                <code>licenseAffinityToHost</code> |
   *                <code>maximumSockets</code> | <code>minimumSockets</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vCPUs</code> dimension: <code>allowedTenancy</code> |
   *                <code>honorVcpuOptimization</code> |
   *                <code>maximumVcpus</code> | <code>minimumVcpus</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The unit for <code>licenseAffinityToHost</code> is days and the range is 1 to 180. The possible
   *          values for <code>allowedTenancy</code> are <code>EC2-Default</code>, <code>EC2-DedicatedHost</code>, and
   *          <code>EC2-DedicatedInstance</code>. The possible values for <code>honorVcpuOptimization</code> are
   *          <code>True</code> and <code>False</code>.</p>
   */
  LicenseRules?: string[];
}

export namespace CreateLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: CreateLicenseConfigurationRequest): any => ({
    ...obj,
  });
}

export interface CreateLicenseConfigurationResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace CreateLicenseConfigurationResponse {
  export const filterSensitiveLog = (obj: CreateLicenseConfigurationResponse): any => ({
    ...obj,
  });
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
}

export interface DeleteLicenseConfigurationRequest {
  /**
   * <p>ID of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;
}

export namespace DeleteLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteLicenseConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteLicenseConfigurationResponse {}

export namespace DeleteLicenseConfigurationResponse {
  export const filterSensitiveLog = (obj: DeleteLicenseConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetLicenseConfigurationRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;
}

export namespace GetLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: GetLicenseConfigurationRequest): any => ({
    ...obj,
  });
}

export enum ResourceType {
  EC2_AMI = "EC2_AMI",
  EC2_HOST = "EC2_HOST",
  EC2_INSTANCE = "EC2_INSTANCE",
  RDS = "RDS",
  SYSTEMS_MANAGER_MANAGED_INSTANCE = "SYSTEMS_MANAGER_MANAGED_INSTANCE",
}

/**
 * <p>Details about license consumption.</p>
 */
export interface ConsumedLicenseSummary {
  /**
   * <p>Resource type of the resource consuming a license.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Number of licenses consumed by the resource.</p>
   */
  ConsumedLicenses?: number;
}

export namespace ConsumedLicenseSummary {
  export const filterSensitiveLog = (obj: ConsumedLicenseSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about a managed resource.</p>
 */
export interface ManagedResourceSummary {
  /**
   * <p>Type of resource associated with a license.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Number of resources associated with licenses.</p>
   */
  AssociationCount?: number;
}

export namespace ManagedResourceSummary {
  export const filterSensitiveLog = (obj: ManagedResourceSummary): any => ({
    ...obj,
  });
}

export interface GetLicenseConfigurationResponse {
  /**
   * <p>Product information.</p>
   */
  ProductInformationList?: ProductInformation[];

  /**
   * <p>Account ID of the owner of the license configuration.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>Unique ID for the license configuration.</p>
   */
  LicenseConfigurationId?: string;

  /**
   * <p>Name of the license configuration.</p>
   */
  Name?: string;

  /**
   * <p>Summaries of the managed resources.</p>
   */
  ManagedResourceSummaryList?: ManagedResourceSummary[];

  /**
   * <p>Dimension on which the licenses are counted.</p>
   */
  LicenseCountingType?: LicenseCountingType | string;

  /**
   * <p>Tags for the license configuration.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Automated discovery information.</p>
   */
  AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;

  /**
   * <p>Number of available licenses.</p>
   */
  LicenseCount?: number;

  /**
   * <p>License rules.</p>
   */
  LicenseRules?: string[];

  /**
   * <p>Sets the number of available licenses as a hard limit.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>Description of the license configuration.</p>
   */
  Description?: string;

  /**
   * <p>License configuration status.</p>
   */
  Status?: string;

  /**
   * <p>Number of licenses assigned to resources.</p>
   */
  ConsumedLicenses?: number;

  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;

  /**
   * <p>Summaries of the licenses consumed by resources.</p>
   */
  ConsumedLicenseSummaryList?: ConsumedLicenseSummary[];
}

export namespace GetLicenseConfigurationResponse {
  export const filterSensitiveLog = (obj: GetLicenseConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetServiceSettingsRequest {}

export namespace GetServiceSettingsRequest {
  export const filterSensitiveLog = (obj: GetServiceSettingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for AWS Organizations.</p>
 */
export interface OrganizationConfiguration {
  /**
   * <p>Enables AWS Organization integration.</p>
   */
  EnableIntegration: boolean | undefined;
}

export namespace OrganizationConfiguration {
  export const filterSensitiveLog = (obj: OrganizationConfiguration): any => ({
    ...obj,
  });
}

export interface GetServiceSettingsResponse {
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
   * <p>Amazon Resource Name (ARN) of the AWS resource share. The License Manager master account will provide member
   *          accounts with access to this share.</p>
   */
  LicenseManagerResourceShareArn?: string;

  /**
   * <p>Indicates whether cross-account discovery has been enabled.</p>
   */
  EnableCrossAccountsDiscovery?: boolean;

  /**
   * <p>SNS topic configured to receive notifications from License Manager.</p>
   */
  SnsTopicArn?: string;
}

export namespace GetServiceSettingsResponse {
  export const filterSensitiveLog = (obj: GetServiceSettingsResponse): any => ({
    ...obj,
  });
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
}

export interface ListAssociationsForLicenseConfigurationRequest {
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
}

/**
 * <p>Describes an association with a license configuration.</p>
 */
export interface LicenseConfigurationAssociation {
  /**
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>ID of the AWS account that owns the resource consuming licenses.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>Time when the license configuration was associated with the resource.</p>
   */
  AssociationTime?: Date;

  /**
   * <p>Type of server resource.</p>
   */
  ResourceType?: ResourceType | string;
}

export namespace LicenseConfigurationAssociation {
  export const filterSensitiveLog = (obj: LicenseConfigurationAssociation): any => ({
    ...obj,
  });
}

export interface ListAssociationsForLicenseConfigurationResponse {
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
}

export interface ListFailuresForLicenseConfigurationOperationsRequest {
  /**
   * <p>Amazon Resource Name of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export namespace ListFailuresForLicenseConfigurationOperationsRequest {
  export const filterSensitiveLog = (obj: ListFailuresForLicenseConfigurationOperationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Reserved.</p>
 */
export interface Metadata {
  /**
   * <p>Reserved.</p>
   */
  Value?: string;

  /**
   * <p>Reserved.</p>
   */
  Name?: string;
}

export namespace Metadata {
  export const filterSensitiveLog = (obj: Metadata): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the failure of a license operation.</p>
 */
export interface LicenseOperationFailure {
  /**
   * <p>Resource type.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Name of the operation.</p>
   */
  OperationName?: string;

  /**
   * <p>The requester is "License Manager Automated Discovery".</p>
   */
  OperationRequestedBy?: string;

  /**
   * <p>Error message.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>Reserved.</p>
   */
  MetadataList?: Metadata[];

  /**
   * <p>Failure time.</p>
   */
  FailureTime?: Date;

  /**
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>ID of the AWS account that owns the resource.</p>
   */
  ResourceOwnerId?: string;
}

export namespace LicenseOperationFailure {
  export const filterSensitiveLog = (obj: LicenseOperationFailure): any => ({
    ...obj,
  });
}

export interface ListFailuresForLicenseConfigurationOperationsResponse {
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
}

/**
 * <p>A filter name and value pair that is used to return more specific results from a
 *          describe operation. Filters can be used to match a set of resources by specific criteria,
 *          such as tags, attributes, or IDs.</p>
 */
export interface Filter {
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
}

export interface ListLicenseConfigurationsRequest {
  /**
   * <p>Filters to scope the results. The following filters and logical operators
   *         are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>licenseCountingType</code> - The dimension on which licenses are counted.
   *                Possible values are <code>vCPU</code> | <code>Instance</code> | <code>Core</code> | <code>Socket</code>.
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
}

/**
 * <p>A license configuration is an abstraction of a customer license agreement that can be
 *          consumed and enforced by License Manager. Components include specifications for the license
 *          type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
 *          Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM
 *          must be associated with a host), and the number of licenses purchased and used.</p>
 */
export interface LicenseConfiguration {
  /**
   * <p>Number of licenses managed by the license configuration.</p>
   */
  LicenseCount?: number;

  /**
   * <p>Automated discovery information.</p>
   */
  AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;

  /**
   * <p>Status of the license configuration.</p>
   */
  Status?: string;

  /**
   * <p>Number of available licenses as a hard limit.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>Product information.</p>
   */
  ProductInformationList?: ProductInformation[];

  /**
   * <p>License rules.</p>
   */
  LicenseRules?: string[];

  /**
   * <p>Unique ID of the license configuration.</p>
   */
  LicenseConfigurationId?: string;

  /**
   * <p>Account ID of the license configuration's owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>Summaries for managed resources.</p>
   */
  ManagedResourceSummaryList?: ManagedResourceSummary[];

  /**
   * <p>Name of the license configuration.</p>
   */
  Name?: string;

  /**
   * <p>Dimension to use to track the license inventory.</p>
   */
  LicenseCountingType?: LicenseCountingType | string;

  /**
   * <p>Number of licenses consumed. </p>
   */
  ConsumedLicenses?: number;

  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;

  /**
   * <p>Summaries for licenses consumed by various resources.</p>
   */
  ConsumedLicenseSummaryList?: ConsumedLicenseSummary[];

  /**
   * <p>Description of the license configuration.</p>
   */
  Description?: string;
}

export namespace LicenseConfiguration {
  export const filterSensitiveLog = (obj: LicenseConfiguration): any => ({
    ...obj,
  });
}

export interface ListLicenseConfigurationsResponse {
  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the license configurations.</p>
   */
  LicenseConfigurations?: LicenseConfiguration[];
}

export namespace ListLicenseConfigurationsResponse {
  export const filterSensitiveLog = (obj: ListLicenseConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface ListLicenseSpecificationsForResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) of a resource that has an associated license configuration.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListLicenseSpecificationsForResourceRequest {
  export const filterSensitiveLog = (obj: ListLicenseSpecificationsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details for associating a license configuration with a resource.</p>
 */
export interface LicenseSpecification {
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;
}

export namespace LicenseSpecification {
  export const filterSensitiveLog = (obj: LicenseSpecification): any => ({
    ...obj,
  });
}

export interface ListLicenseSpecificationsForResourceResponse {
  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>License configurations associated with a resource.</p>
   */
  LicenseSpecifications?: LicenseSpecification[];
}

export namespace ListLicenseSpecificationsForResourceResponse {
  export const filterSensitiveLog = (obj: ListLicenseSpecificationsForResourceResponse): any => ({
    ...obj,
  });
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
}

export enum InventoryFilterCondition {
  BEGINS_WITH = "BEGINS_WITH",
  CONTAINS = "CONTAINS",
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
}

/**
 * <p>An inventory filter.</p>
 */
export interface InventoryFilter {
  /**
   * <p>Value of the filter.</p>
   */
  Value?: string;

  /**
   * <p>Condition of the filter.</p>
   */
  Condition: InventoryFilterCondition | string | undefined;

  /**
   * <p>Name of the filter.</p>
   */
  Name: string | undefined;
}

export namespace InventoryFilter {
  export const filterSensitiveLog = (obj: InventoryFilter): any => ({
    ...obj,
  });
}

export interface ListResourceInventoryRequest {
  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

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
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListResourceInventoryRequest {
  export const filterSensitiveLog = (obj: ListResourceInventoryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a resource.</p>
 */
export interface ResourceInventory {
  /**
   * <p>Type of resource.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>Platform of the resource.</p>
   */
  Platform?: string;

  /**
   * <p>ID of the account that owns the resource.</p>
   */
  ResourceOwningAccountId?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Platform version of the resource in the inventory.</p>
   */
  PlatformVersion?: string;
}

export namespace ResourceInventory {
  export const filterSensitiveLog = (obj: ResourceInventory): any => ({
    ...obj,
  });
}

export interface ListResourceInventoryResponse {
  /**
   * <p>Information about the resources.</p>
   */
  ResourceInventoryList?: ResourceInventory[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListResourceInventoryResponse {
  export const filterSensitiveLog = (obj: ListResourceInventoryResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListUsageForLicenseConfigurationRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

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
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export namespace ListUsageForLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: ListUsageForLicenseConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the usage of a resource associated with a license configuration.</p>
 */
export interface LicenseConfigurationUsage {
  /**
   * <p>Time when the license configuration was initially associated with the resource.</p>
   */
  AssociationTime?: Date;

  /**
   * <p>Number of licenses consumed by the resource.</p>
   */
  ConsumedLicenses?: number;

  /**
   * <p>ID of the account that owns the resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Type of resource.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Status of the resource.</p>
   */
  ResourceStatus?: string;
}

export namespace LicenseConfigurationUsage {
  export const filterSensitiveLog = (obj: LicenseConfigurationUsage): any => ({
    ...obj,
  });
}

export interface ListUsageForLicenseConfigurationResponse {
  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the license configurations.</p>
   */
  LicenseConfigurationUsageList?: LicenseConfigurationUsage[];
}

export namespace ListUsageForLicenseConfigurationResponse {
  export const filterSensitiveLog = (obj: ListUsageForLicenseConfigurationResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
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
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>Keys identifying the tags to remove.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  ResourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export enum LicenseConfigurationStatus {
  AVAILABLE = "AVAILABLE",
  DISABLED = "DISABLED",
}

export interface UpdateLicenseConfigurationRequest {
  /**
   * <p>New description of the license configuration.</p>
   */
  Description?: string;

  /**
   * <p>New hard limit of the number of available licenses.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>New product information.</p>
   */
  ProductInformationList?: ProductInformation[];

  /**
   * <p>New license rule. The only rule that you can add after you create a license
   *           configuration is licenseAffinityToHost.</p>
   */
  LicenseRules?: string[];

  /**
   * <p>New number of licenses managed by the license configuration.</p>
   */
  LicenseCount?: number;

  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * <p>New status of the license configuration.</p>
   */
  LicenseConfigurationStatus?: LicenseConfigurationStatus | string;

  /**
   * <p>New name of the license configuration.</p>
   */
  Name?: string;
}

export namespace UpdateLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateLicenseConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateLicenseConfigurationResponse {}

export namespace UpdateLicenseConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateLicenseConfigurationResponse): any => ({
    ...obj,
  });
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
}

export interface UpdateLicenseSpecificationsForResourceRequest {
  /**
   * <p>ARNs of the license configurations to add.</p>
   */
  AddLicenseSpecifications?: LicenseSpecification[];

  /**
   * <p>Amazon Resource Name (ARN) of the AWS resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>ARNs of the license configurations to remove.</p>
   */
  RemoveLicenseSpecifications?: LicenseSpecification[];
}

export namespace UpdateLicenseSpecificationsForResourceRequest {
  export const filterSensitiveLog = (obj: UpdateLicenseSpecificationsForResourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateLicenseSpecificationsForResourceResponse {}

export namespace UpdateLicenseSpecificationsForResourceResponse {
  export const filterSensitiveLog = (obj: UpdateLicenseSpecificationsForResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateServiceSettingsRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon S3 bucket where the License Manager information is stored.</p>
   */
  S3BucketArn?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the Amazon SNS topic used for License Manager alerts.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>Enables integration with AWS Organizations for cross-account discovery.</p>
   */
  OrganizationConfiguration?: OrganizationConfiguration;

  /**
   * <p>Activates cross-account discovery.</p>
   */
  EnableCrossAccountsDiscovery?: boolean;
}

export namespace UpdateServiceSettingsRequest {
  export const filterSensitiveLog = (obj: UpdateServiceSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateServiceSettingsResponse {}

export namespace UpdateServiceSettingsResponse {
  export const filterSensitiveLog = (obj: UpdateServiceSettingsResponse): any => ({
    ...obj,
  });
}
