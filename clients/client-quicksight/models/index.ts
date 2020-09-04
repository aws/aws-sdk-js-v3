import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct access keys.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;

  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>The customizations associated with your AWS account for QuickSight.</p>
 */
export interface AccountCustomization {
  /**
   * <p>The default theme for this QuickSight subscription.</p>
   */
  DefaultTheme?: string;
}

export namespace AccountCustomization {
  export const filterSensitiveLog = (obj: AccountCustomization): any => ({
    ...obj,
  });
}

/**
 * <p>The QuickSight settings associated with your AWS account.</p>
 */
export interface AccountSettings {
  /**
   * <p>The name associated with the QuickSight subscription in your AWS account.</p>
   */
  AccountName?: string;

  /**
   * <p>The main notification email for your QuickSight subscription.</p>
   */
  NotificationEmail?: string;

  /**
   * <p>The default QuickSight namespace for your AWS account.</p>
   */
  DefaultNamespace?: string;

  /**
   * <p>The edition of QuickSight that you're currently subscribed to.</p>
   */
  Edition?: Edition | string;
}

export namespace AccountSettings {
  export const filterSensitiveLog = (obj: AccountSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The active AWS Identity and Access Management (IAM) policy assignment.</p>
 */
export interface ActiveIAMPolicyAssignment {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  PolicyArn?: string;

  /**
   * <p>A name for the IAM policy assignment.</p>
   */
  AssignmentName?: string;
}

export namespace ActiveIAMPolicyAssignment {
  export const filterSensitiveLog = (obj: ActiveIAMPolicyAssignment): any => ({
    ...obj,
  });
}

/**
 * <p>Ad hoc (one-time) filtering option.</p>
 */
export interface AdHocFilteringOption {
  /**
   * <p>Availability status.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

export namespace AdHocFilteringOption {
  export const filterSensitiveLog = (obj: AdHocFilteringOption): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Elasticsearch Service parameters.</p>
 */
export interface AmazonElasticsearchParameters {
  /**
   * <p>The Amazon Elasticsearch Service domain.</p>
   */
  Domain: string | undefined;
}

export namespace AmazonElasticsearchParameters {
  export const filterSensitiveLog = (obj: AmazonElasticsearchParameters): any => ({
    ...obj,
  });
}

export enum AssignmentStatus {
  DISABLED = "DISABLED",
  DRAFT = "DRAFT",
  ENABLED = "ENABLED",
}

/**
 * <p>Amazon Athena parameters.</p>
 */
export interface AthenaParameters {
  /**
   * <p>The workgroup that Amazon Athena uses.</p>
   */
  WorkGroup?: string;
}

export namespace AthenaParameters {
  export const filterSensitiveLog = (obj: AthenaParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Aurora parameters.</p>
 */
export interface AuroraParameters {
  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * <p>Host.</p>
   */
  Host: string | undefined;
}

export namespace AuroraParameters {
  export const filterSensitiveLog = (obj: AuroraParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Aurora with PostgreSQL compatibility parameters.</p>
 */
export interface AuroraPostgreSqlParameters {
  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   */
  Database: string | undefined;
}

export namespace AuroraPostgreSqlParameters {
  export const filterSensitiveLog = (obj: AuroraPostgreSqlParameters): any => ({
    ...obj,
  });
}

/**
 * <p>AWS IoT Analytics parameters.</p>
 */
export interface AwsIotAnalyticsParameters {
  /**
   * <p>Dataset name.</p>
   */
  DataSetName: string | undefined;
}

export namespace AwsIotAnalyticsParameters {
  export const filterSensitiveLog = (obj: AwsIotAnalyticsParameters): any => ({
    ...obj,
  });
}

/**
 * <p>The display options for tile borders for visuals.</p>
 */
export interface BorderStyle {
  /**
   * <p>The option to enable display of borders for visuals.</p>
   */
  Show?: boolean;
}

export namespace BorderStyle {
  export const filterSensitiveLog = (obj: BorderStyle): any => ({
    ...obj,
  });
}

/**
 * <p>A calculated column for a dataset.</p>
 */
export interface CalculatedColumn {
  /**
   * <p>A unique ID to identify a calculated column. During a dataset update, if the column ID
   *             of a calculated column matches that of an existing calculated column, Amazon QuickSight
   *             preserves the existing calculated column.</p>
   */
  ColumnId: string | undefined;

  /**
   * <p>Column name.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>An expression that defines the calculated column.</p>
   */
  Expression: string | undefined;
}

export namespace CalculatedColumn {
  export const filterSensitiveLog = (obj: CalculatedColumn): any => ({
    ...obj,
  });
}

export interface CancelIngestionRequest {
  /**
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the ingestion.</p>
   */
  IngestionId: string | undefined;
}

export namespace CancelIngestionRequest {
  export const filterSensitiveLog = (obj: CancelIngestionRequest): any => ({
    ...obj,
  });
}

export interface CancelIngestionResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>An ID for the ingestion.</p>
   */
  IngestionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the data ingestion.</p>
   */
  Arn?: string;
}

export namespace CancelIngestionResponse {
  export const filterSensitiveLog = (obj: CancelIngestionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A transform operation that casts a column to a different type.</p>
 */
export interface CastColumnTypeOperation {
  /**
   * <p>When casting a column from string to datetime type, you can supply a string in a
   *             format supported by Amazon QuickSight to denote the source data format.</p>
   */
  Format?: string;

  /**
   * <p>Column name.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>New column data type.</p>
   */
  NewColumnType: ColumnDataType | string | undefined;
}

export namespace CastColumnTypeOperation {
  export const filterSensitiveLog = (obj: CastColumnTypeOperation): any => ({
    ...obj,
  });
}

export enum ColumnDataType {
  DATETIME = "DATETIME",
  DECIMAL = "DECIMAL",
  INTEGER = "INTEGER",
  STRING = "STRING",
}

/**
 * <p>Groupings of columns that work together in certain Amazon QuickSight features. This is
 *             a variant type structure. For this structure to be valid, only one of the attributes can
 *             be non-null.</p>
 */
export interface ColumnGroup {
  /**
   * <p>Geospatial column group that denotes a hierarchy.</p>
   */
  GeoSpatialColumnGroup?: GeoSpatialColumnGroup;
}

export namespace ColumnGroup {
  export const filterSensitiveLog = (obj: ColumnGroup): any => ({
    ...obj,
  });
}

/**
 * <p>A structure describing the name, data type, and geographic role of the columns.</p>
 */
export interface ColumnGroupColumnSchema {
  /**
   * <p>The name of the column group's column schema.</p>
   */
  Name?: string;
}

export namespace ColumnGroupColumnSchema {
  export const filterSensitiveLog = (obj: ColumnGroupColumnSchema): any => ({
    ...obj,
  });
}

/**
 * <p>The column group schema.</p>
 */
export interface ColumnGroupSchema {
  /**
   * <p>A structure containing the list of schemas for column group columns.</p>
   */
  ColumnGroupColumnSchemaList?: ColumnGroupColumnSchema[];

  /**
   * <p>The name of the column group schema.</p>
   */
  Name?: string;
}

export namespace ColumnGroupSchema {
  export const filterSensitiveLog = (obj: ColumnGroupSchema): any => ({
    ...obj,
  });
}

/**
 * <p>The column schema.</p>
 */
export interface ColumnSchema {
  /**
   * <p>The data type of the column schema.</p>
   */
  DataType?: string;

  /**
   * <p>The geographic role of the column schema.</p>
   */
  GeographicRole?: string;

  /**
   * <p>The name of the column schema.</p>
   */
  Name?: string;
}

export namespace ColumnSchema {
  export const filterSensitiveLog = (obj: ColumnSchema): any => ({
    ...obj,
  });
}

/**
 * <p>A tag for a column in a <a>TagColumnOperation</a> structure. This is a
 *             variant type structure. For this structure to be valid, only one of the attributes can
 *             be non-null.</p>
 */
export interface ColumnTag {
  /**
   * <p>A geospatial role for a column.</p>
   */
  ColumnGeographicRole?: GeoSpatialDataRole | string;
}

export namespace ColumnTag {
  export const filterSensitiveLog = (obj: ColumnTag): any => ({
    ...obj,
  });
}

/**
 * <p>A resource is already in a state that indicates an action is happening that must complete
 * 			before a new update can be applied.</p>
 */
export interface ConcurrentUpdatingException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentUpdatingException";
  $fault: "server";
  Message?: string;
  RequestId?: string;
}

export namespace ConcurrentUpdatingException {
  export const filterSensitiveLog = (obj: ConcurrentUpdatingException): any => ({
    ...obj,
  });
}

/**
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;

  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export interface CreateAccountCustomizationRequest {
  /**
   * <p>The namespace associated with the customization that you're creating.</p>
   */
  Namespace?: string;

  /**
   * <p>The customizations you're adding to the QuickSight subscription for the AWS account.
   * 	  For example, you could add a default theme by setting <code>AccountCustomization</code> to
   * 	      the midnight theme (<code>DefaultTheme="arn:aws:quicksight::aws:theme/MIDNIGHT"</code>) or to a custom theme (<code>DefaultTheme="arn:aws:quicksight:us-west-2:111122223333:theme/bdb844d0-0fe9-4d9d-b520-0fe602d93639"</code>).</p>
   */
  AccountCustomization: AccountCustomization | undefined;

  /**
   * <p>The ID for the AWS account that you want to customize QuickSight for.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace CreateAccountCustomizationRequest {
  export const filterSensitiveLog = (obj: CreateAccountCustomizationRequest): any => ({
    ...obj,
  });
}

export interface CreateAccountCustomizationResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The customizations you're adding to the QuickSight subscription for the AWS account.</p>
   */
  AccountCustomization?: AccountCustomization;

  /**
   * <p>The namespace associated with the customization you're creating. </p>
   */
  Namespace?: string;

  /**
   * <p>The ID for the AWS account that you want to customize QuickSight for.</p>
   */
  AwsAccountId?: string;
}

export namespace CreateAccountCustomizationResponse {
  export const filterSensitiveLog = (obj: CreateAccountCustomizationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A transform operation that creates calculated columns. Columns created in one such
 *             operation form a lexical closure.</p>
 */
export interface CreateColumnsOperation {
  /**
   * <p>Calculated columns to create.</p>
   */
  Columns: CalculatedColumn[] | undefined;
}

export namespace CreateColumnsOperation {
  export const filterSensitiveLog = (obj: CreateColumnsOperation): any => ({
    ...obj,
  });
}

export interface CreateDashboardRequest {
  /**
   * <p>A structure that contains the permissions of the dashboard. You can use this structure for
   * 			granting permissions with principal and action information.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The display name of the dashboard.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description for the first version of the dashboard being created.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The ID of the AWS account where you want to create the dashboard.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dashboard.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value
   * 			for this field, it overrides the value that is used in the source entity. The theme ARN must exist
   * 			in the same AWS account where you create the dashboard.</p>
   */
  ThemeArn?: string;

  /**
   * <p>The parameters for the creation of the dashboard, which you want to use to override the default settings.
   * 			A dashboard can have any type of parameters, and some parameters might
   * 			accept multiple values.
   * 		</p>
   */
  Parameters?: _Parameters;

  /**
   * <p>The entity that you are using as a source when you create the dashboard. In
   * 			<code>SourceEntity</code>, you specify the type of object you're using as source. You
   * 			can only create a dashboard from a template, so you use a <code>SourceTemplate</code>
   * 			entity. If you need to create a dashboard from an analysis, first convert the analysis
   * 			to a template by using the <a>CreateTemplate</a> API operation. For
   * 			<code>SourceTemplate</code>, specify the Amazon Resource Name (ARN) of the source
   * 			template. The <code>SourceTemplate</code>ARN can contain any AWS Account and any QuickSight-supported
   * 			AWS Region. </p>
   * 		       <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code>
   * 			to list the replacement datasets for the placeholders listed
   * 			in the original. The schema in each dataset must match its placeholder. </p>
   */
  SourceEntity: DashboardSourceEntity | undefined;

  /**
   * <p>Options for publishing the dashboard when you create it:</p>
   * 		       <ul>
   *             <li>
   * 					          <p>
   *                   <code>AvailabilityStatus</code> for <code>AdHocFilteringOption</code> - This status can
   * 					be either <code>ENABLED</code> or <code>DISABLED</code>. When this is set to
   * 						<code>DISABLED</code>, QuickSight disables the left filter pane on the
   * 					published dashboard, which can be used for ad hoc (one-time) filtering. This
   * 					option is <code>ENABLED</code> by default. </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>AvailabilityStatus</code> for <code>ExportToCSVOption</code> - This status can be
   * 					either <code>ENABLED</code> or <code>DISABLED</code>. The visual option to
   * 					export data to .csv format isn't enabled when this is set to
   * 						<code>DISABLED</code>. This option is <code>ENABLED</code> by default. </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>VisibilityState</code> for <code>SheetControlsOption</code> - This visibility state
   * 					can be either <code>COLLAPSED</code> or <code>EXPANDED</code>. This option is
   * 						<code>COLLAPSED</code> by default. </p>
   * 			         </li>
   *          </ul>
   */
  DashboardPublishOptions?: DashboardPublishOptions;
}

export namespace CreateDashboardRequest {
  export const filterSensitiveLog = (obj: CreateDashboardRequest): any => ({
    ...obj,
  });
}

export interface CreateDashboardResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The status of the dashboard creation request.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The ARN of the dashboard, including the version number
   * 			of the first version that is created.</p>
   */
  VersionArn?: string;

  /**
   * <p>The ARN of the dashboard.</p>
   */
  Arn?: string;
}

export namespace CreateDashboardResponse {
  export const filterSensitiveLog = (obj: CreateDashboardResponse): any => ({
    ...obj,
  });
}

export interface CreateDataSetRequest {
  /**
   * <p>The row-level security configuration for the data that you want to create.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * <p>An ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>A list of resource permissions on the dataset.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>Configures the combination and transformation of the data from the physical tables.</p>
   */
  LogicalTableMap?: { [key: string]: LogicalTable };

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode: DataSetImportMode | string | undefined;

  /**
   * <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap: { [key: string]: PhysicalTable } | undefined;

  /**
   * <p>The display name for the dataset.</p>
   */
  Name: string | undefined;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace CreateDataSetRequest {
  export const filterSensitiveLog = (obj: CreateDataSetRequest): any => ({
    ...obj,
  });
}

export interface CreateDataSetResponse {
  /**
   * <p>The ID of the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ARN for the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionArn?: string;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSetId?: string;
}

export namespace CreateDataSetResponse {
  export const filterSensitiveLog = (obj: CreateDataSetResponse): any => ({
    ...obj,
  });
}

export interface CreateDataSourceRequest {
  /**
   * <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying source.</p>
   */
  SslProperties?: SslProperties;

  /**
   * <p>A display name for the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of resource permissions on the data source.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The parameters that QuickSight uses to connect to your underlying source.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The credentials QuickSight that uses to connect to your underlying source. Currently, only
   * 			credentials based on user name and password are supported.</p>
   */
  Credentials?: DataSourceCredentials;

  /**
   * <p>An ID for the data source. This ID is unique per AWS Region for each AWS account. </p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The type of the data source. Currently, the supported types for this operation are:
   * 			<code>ATHENA, AURORA, AURORA_POSTGRESQL, MARIADB, MYSQL, POSTGRESQL, PRESTO, REDSHIFT, S3,
   * 			SNOWFLAKE, SPARK, SQLSERVER, TERADATA</code>.
   * 			Use <code>ListDataSources</code> to return a
   * 			list of all data sources.</p>
   */
  Type: DataSourceType | string | undefined;

  /**
   * <p>Use this parameter only when you want QuickSight to use a VPC connection when connecting to
   * 			your underlying source.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;
}

export namespace CreateDataSourceRequest {
  export const filterSensitiveLog = (obj: CreateDataSourceRequest): any => ({
    ...obj,
    ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
  });
}

export interface CreateDataSourceResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;

  /**
   * <p>The status of creating the data source.</p>
   */
  CreationStatus?: ResourceStatus | string;
}

export namespace CreateDataSourceResponse {
  export const filterSensitiveLog = (obj: CreateDataSourceResponse): any => ({
    ...obj,
  });
}

export interface CreateGroupMembershipRequest {
  /**
   * <p>The name of the group that you want to add the user to.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the user that you want to add to the group membership.</p>
   */
  MemberName: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace CreateGroupMembershipRequest {
  export const filterSensitiveLog = (obj: CreateGroupMembershipRequest): any => ({
    ...obj,
  });
}

export interface CreateGroupMembershipResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The group member.</p>
   */
  GroupMember?: GroupMember;
}

export namespace CreateGroupMembershipResponse {
  export const filterSensitiveLog = (obj: CreateGroupMembershipResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request object for this operation. </p>
 */
export interface CreateGroupRequest {
  /**
   * <p>A description for the group that you want to create.</p>
   */
  Description?: string;

  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A name for the group that you want to create.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace CreateGroupRequest {
  export const filterSensitiveLog = (obj: CreateGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response object for this operation.</p>
 */
export interface CreateGroupResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The name of the group.</p>
   */
  Group?: Group;
}

export namespace CreateGroupResponse {
  export const filterSensitiveLog = (obj: CreateGroupResponse): any => ({
    ...obj,
  });
}

export interface CreateIAMPolicyAssignmentRequest {
  /**
   * <p>The ID of the AWS account where you want to assign an IAM policy to QuickSight users or
   * 			groups.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when creating the data
   * 					source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the
   * 					data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus: AssignmentStatus | string | undefined;

  /**
   * <p>The QuickSight users, groups, or both that you want to assign the policy to.</p>
   */
  Identities?: { [key: string]: string[] };

  /**
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The ARN for the IAM policy to apply to the QuickSight users and groups
   * 			specified in this assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The name of the assignment. It must be unique within an AWS account.</p>
   */
  AssignmentName: string | undefined;
}

export namespace CreateIAMPolicyAssignmentRequest {
  export const filterSensitiveLog = (obj: CreateIAMPolicyAssignmentRequest): any => ({
    ...obj,
  });
}

export interface CreateIAMPolicyAssignmentResponse {
  /**
   * <p>The ARN for the IAM policy that is applied to the QuickSight users and groups specified in this assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when creating the data
   * 				source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the
   * 				data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>The name of the assignment. This name must be unique within the AWS account.</p>
   */
  AssignmentName?: string;

  /**
   * <p>The ID for the assignment.</p>
   */
  AssignmentId?: string;

  /**
   * <p>The QuickSight users, groups, or both that the IAM policy is assigned to.</p>
   */
  Identities?: { [key: string]: string[] };

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace CreateIAMPolicyAssignmentResponse {
  export const filterSensitiveLog = (obj: CreateIAMPolicyAssignmentResponse): any => ({
    ...obj,
  });
}

export interface CreateIngestionRequest {
  /**
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>An ID for the ingestion.</p>
   */
  IngestionId: string | undefined;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace CreateIngestionRequest {
  export const filterSensitiveLog = (obj: CreateIngestionRequest): any => ({
    ...obj,
  });
}

export interface CreateIngestionResponse {
  /**
   * <p>An ID for the ingestion.</p>
   */
  IngestionId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ingestion status.</p>
   */
  IngestionStatus?: IngestionStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the data ingestion.</p>
   */
  Arn?: string;
}

export namespace CreateIngestionResponse {
  export const filterSensitiveLog = (obj: CreateIngestionResponse): any => ({
    ...obj,
  });
}

export interface CreateNamespaceRequest {
  /**
   * <p>The ID for the AWS account that you want to create the QuickSight namespace in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The tags that you want to associate with the namespace that you're creating.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name that you want to use to describe the new namespace.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>Specifies the type of your user identity directory. Currently, this supports users
   *             with an identity type of <code>QUICKSIGHT</code>.</p>
   */
  IdentityStore: IdentityStore | string | undefined;
}

export namespace CreateNamespaceRequest {
  export const filterSensitiveLog = (obj: CreateNamespaceRequest): any => ({
    ...obj,
  });
}

export interface CreateNamespaceResponse {
  /**
   * <p>The status of the creation of the namespace. This is an asynchronous process. A status
   *             of <code>CREATED</code> means that your namespace is ready to use. If an error occurs,
   *             it indicates if the process is <code>retryable</code> or <code>non-retryable</code>. In
   *             the case of a non-retryable error, refer to the error message for follow-up
   *             actions.</p>
   */
  CreationStatus?: NamespaceStatus | string;

  /**
   * <p>The name of the new namespace that you created.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the type of your user identity directory. Currently, this supports users
   *             with an identity type of <code>QUICKSIGHT</code>.</p>
   */
  IdentityStore?: IdentityStore | string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The AWS Region that you want to use for the free SPICE capacity for the new namespace.
   *             This is set to the region that you run CreateNamespace in. </p>
   */
  CapacityRegion?: string;

  /**
   * <p>The ARN of the QuickSight namespace you created. </p>
   */
  Arn?: string;
}

export namespace CreateNamespaceResponse {
  export const filterSensitiveLog = (obj: CreateNamespaceResponse): any => ({
    ...obj,
  });
}

export interface CreateTemplateAliasRequest {
  /**
   * <p>The version number of the template.</p>
   */
  TemplateVersionNumber: number | undefined;

  /**
   * <p>The name that you want to give to the template alias that you're creating. Don't start the
   * 			alias name with the <code>$</code> character. Alias names that start with <code>$</code>
   * 			are reserved by QuickSight. </p>
   */
  AliasName: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the template that you creating an alias for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template.</p>
   */
  TemplateId: string | undefined;
}

export namespace CreateTemplateAliasRequest {
  export const filterSensitiveLog = (obj: CreateTemplateAliasRequest): any => ({
    ...obj,
  });
}

export interface CreateTemplateAliasResponse {
  /**
   * <p>Information about the template alias.</p>
   */
  TemplateAlias?: TemplateAlias;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace CreateTemplateAliasResponse {
  export const filterSensitiveLog = (obj: CreateTemplateAliasResponse): any => ({
    ...obj,
  });
}

export interface CreateTemplateRequest {
  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A display name for the template.</p>
   */
  Name?: string;

  /**
   * <p>The entity that you are using as a source when you create the template. In
   * 			<code>SourceEntity</code>, you specify the type of object you're using as source:
   * 			<code>SourceTemplate</code> for a template or <code>SourceAnalysis</code> for an
   * 			analysis. Both of these require an Amazon Resource Name (ARN). For
   * 			<code>SourceTemplate</code>, specify the ARN of the source template. For
   * 			<code>SourceAnalysis</code>, specify the ARN of the source analysis. The <code>SourceTemplate</code>
   * 			ARN can contain any AWS Account and any QuickSight-supported AWS Region. </p>
   * 		       <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> or
   * 			<code>SourceAnalysis</code> to list the replacement datasets for the placeholders listed
   * 			in the original. The schema in each dataset must match its placeholder. </p>
   */
  SourceEntity: TemplateSourceEntity | undefined;

  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template that you want to create. This template is unique per AWS Region in
   * 			each AWS account.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>A list of resource permissions to be set on the template. </p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>A description of the current template version being created. This API operation creates the
   * 			first version of the template. Every time <code>UpdateTemplate</code> is called, a new
   * 			version is created. Each version of the template maintains a description of the version
   * 			in the <code>VersionDescription</code> field.</p>
   */
  VersionDescription?: string;
}

export namespace CreateTemplateRequest {
  export const filterSensitiveLog = (obj: CreateTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreateTemplateResponse {
  /**
   * <p>The template creation status.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The ID of the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ARN for the template, including the version information of
   * 			the first version.</p>
   */
  VersionArn?: string;

  /**
   * <p>The ARN for the template.</p>
   */
  Arn?: string;
}

export namespace CreateTemplateResponse {
  export const filterSensitiveLog = (obj: CreateTemplateResponse): any => ({
    ...obj,
  });
}

export interface CreateThemeAliasRequest {
  /**
   * <p>The ID of the AWS account that contains the theme for the new theme alias.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme alias.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The version number of the theme.</p>
   */
  ThemeVersionNumber: number | undefined;

  /**
   * <p>The name that you want to give to the theme alias that you are creating. The
   * 			alias name can't begin with a <code>$</code>. Alias names that start with <code>$</code>
   * 			are reserved by Amazon QuickSight. </p>
   */
  AliasName: string | undefined;
}

export namespace CreateThemeAliasRequest {
  export const filterSensitiveLog = (obj: CreateThemeAliasRequest): any => ({
    ...obj,
  });
}

export interface CreateThemeAliasResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>Information about the theme alias.</p>
   */
  ThemeAlias?: ThemeAlias;
}

export namespace CreateThemeAliasResponse {
  export const filterSensitiveLog = (obj: CreateThemeAliasResponse): any => ({
    ...obj,
  });
}

export interface CreateThemeRequest {
  /**
   * <p>An ID for the theme that you want to create. The theme ID is unique per AWS Region in
   * 			each AWS account.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The ID of the theme that a custom theme will inherit from. All themes inherit from one of
   * 			the starting themes defined by Amazon QuickSight. For a list of the starting themes, use
   * 				<code>ListThemes</code> or choose <b>Themes</b> from
   * 			within a QuickSight analysis. </p>
   */
  BaseThemeId: string | undefined;

  /**
   * <p>A map of the key-value pairs for the resource tag or tags that you want to add to the
   * 			resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the AWS account where you want to store the new theme. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A valid grouping of resource permissions to apply to the new theme.
   * 			</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The theme configuration, which contains the theme display properties.</p>
   */
  Configuration: ThemeConfiguration | undefined;

  /**
   * <p>A display name for the theme.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the first version of the theme that you're creating. Every time
   * 				<code>UpdateTheme</code> is called, a new version is created. Each version of the
   * 			theme has a description of the version in the <code>VersionDescription</code>
   * 			field.</p>
   */
  VersionDescription?: string;
}

export namespace CreateThemeRequest {
  export const filterSensitiveLog = (obj: CreateThemeRequest): any => ({
    ...obj,
  });
}

export interface CreateThemeResponse {
  /**
   * <p>The ID of the theme.</p>
   */
  ThemeId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the theme.</p>
   */
  Arn?: string;

  /**
   * <p>The theme creation status.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the new theme.</p>
   */
  VersionArn?: string;
}

export namespace CreateThemeResponse {
  export const filterSensitiveLog = (obj: CreateThemeResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The combination of user name and password that are used as credentials.</p>
 */
export interface CredentialPair {
  /**
   * <p>A set of alternate data source parameters that you want to share for these
   *             credentials. The credentials are applied in tandem with the data source parameters when
   *             you copy a data source by using a create or update request. The API compares the
   *             <code>DataSourceParameters</code> structure that's in the request with the structures in
   *             the <code>AlternateDataSourceParameters</code> allowlist. If the structures are an exact
   *             match, the request is allowed to use the new data source with the existing credentials.
   *             If the <code>AlternateDataSourceParameters</code> list is null, the
   *             <code>DataSourceParameters</code> originally used with these <code>Credentials</code> is
   *             automatically allowed.</p>
   */
  AlternateDataSourceParameters?: DataSourceParameters[];

  /**
   * <p>Password.</p>
   */
  Password: string | undefined;

  /**
   * <p>User name.</p>
   */
  Username: string | undefined;
}

export namespace CredentialPair {
  export const filterSensitiveLog = (obj: CredentialPair): any => ({
    ...obj,
  });
}

/**
 * <p>A physical table type built from the results of the custom SQL query.</p>
 */
export interface CustomSql {
  /**
   * <p>A display name for the SQL query result.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn: string | undefined;

  /**
   * <p>The column schema from the SQL query result set.</p>
   */
  Columns?: InputColumn[];

  /**
   * <p>The SQL query.</p>
   */
  SqlQuery: string | undefined;
}

export namespace CustomSql {
  export const filterSensitiveLog = (obj: CustomSql): any => ({
    ...obj,
  });
}

/**
 * <p>Dashboard.</p>
 */
export interface Dashboard {
  /**
   * <p>Dashboard ID.</p>
   */
  DashboardId?: string;

  /**
   * <p>Version.</p>
   */
  Version?: DashboardVersion;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>A display name for the dashboard.</p>
   */
  Name?: string;

  /**
   * <p>The last time that this dataset was published.</p>
   */
  LastPublishedTime?: Date;

  /**
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace Dashboard {
  export const filterSensitiveLog = (obj: Dashboard): any => ({
    ...obj,
  });
}

export enum DashboardBehavior {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Dashboard error.</p>
 */
export interface DashboardError {
  /**
   * <p>Type.</p>
   */
  Type?: DashboardErrorType | string;

  /**
   * <p>Message.</p>
   */
  Message?: string;
}

export namespace DashboardError {
  export const filterSensitiveLog = (obj: DashboardError): any => ({
    ...obj,
  });
}

export enum DashboardErrorType {
  ACCESS_DENIED = "ACCESS_DENIED",
  COLUMN_GEOGRAPHIC_ROLE_MISMATCH = "COLUMN_GEOGRAPHIC_ROLE_MISMATCH",
  COLUMN_REPLACEMENT_MISSING = "COLUMN_REPLACEMENT_MISSING",
  COLUMN_TYPE_MISMATCH = "COLUMN_TYPE_MISMATCH",
  DATA_SET_NOT_FOUND = "DATA_SET_NOT_FOUND",
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
  PARAMETER_NOT_FOUND = "PARAMETER_NOT_FOUND",
  PARAMETER_TYPE_INVALID = "PARAMETER_TYPE_INVALID",
  PARAMETER_VALUE_INCOMPATIBLE = "PARAMETER_VALUE_INCOMPATIBLE",
  SOURCE_NOT_FOUND = "SOURCE_NOT_FOUND",
}

export enum DashboardFilterAttribute {
  QUICKSIGHT_USER = "QUICKSIGHT_USER",
}

/**
 * <p>Dashboard publish options.</p>
 */
export interface DashboardPublishOptions {
  /**
   * <p>Export to .csv option.</p>
   */
  ExportToCSVOption?: ExportToCSVOption;

  /**
   * <p>Ad hoc (one-time) filtering option.</p>
   */
  AdHocFilteringOption?: AdHocFilteringOption;

  /**
   * <p>Sheet controls option.</p>
   */
  SheetControlsOption?: SheetControlsOption;
}

export namespace DashboardPublishOptions {
  export const filterSensitiveLog = (obj: DashboardPublishOptions): any => ({
    ...obj,
  });
}

/**
 * <p>A filter that you apply when searching for dashboards. </p>
 */
export interface DashboardSearchFilter {
  /**
   * <p>The name of the value that you want to use as a filter, for example, <code>"Name":
   *             "QUICKSIGHT_USER"</code>. </p>
   */
  Name?: DashboardFilterAttribute | string;

  /**
   * <p>The value of the named item, in this case <code>QUICKSIGHT_USER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>. </p>
   */
  Value?: string;

  /**
   * <p>The comparison operator that you want to use as a filter, for example,
   *             <code>"Operator": "StringEquals"</code>.</p>
   */
  Operator: FilterOperator | string | undefined;
}

export namespace DashboardSearchFilter {
  export const filterSensitiveLog = (obj: DashboardSearchFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Dashboard source entity.</p>
 */
export interface DashboardSourceEntity {
  /**
   * <p>Source template.</p>
   */
  SourceTemplate?: DashboardSourceTemplate;
}

export namespace DashboardSourceEntity {
  export const filterSensitiveLog = (obj: DashboardSourceEntity): any => ({
    ...obj,
  });
}

/**
 * <p>Dashboard source template.</p>
 */
export interface DashboardSourceTemplate {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Dataset references.</p>
   */
  DataSetReferences: DataSetReference[] | undefined;
}

export namespace DashboardSourceTemplate {
  export const filterSensitiveLog = (obj: DashboardSourceTemplate): any => ({
    ...obj,
  });
}

/**
 * <p>Dashboard summary.</p>
 */
export interface DashboardSummary {
  /**
   * <p>The time that this dashboard was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>Dashboard ID.</p>
   */
  DashboardId?: string;

  /**
   * <p>Published version number.</p>
   */
  PublishedVersionNumber?: number;

  /**
   * <p>The last time that this dashboard was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A display name for the dashboard.</p>
   */
  Name?: string;

  /**
   * <p>The last time that this dashboard was published.</p>
   */
  LastPublishedTime?: Date;
}

export namespace DashboardSummary {
  export const filterSensitiveLog = (obj: DashboardSummary): any => ({
    ...obj,
  });
}

export enum DashboardUIState {
  COLLAPSED = "COLLAPSED",
  EXPANDED = "EXPANDED",
}

/**
 * <p>Dashboard version.</p>
 */
export interface DashboardVersion {
  /**
   * <p>Version number.</p>
   */
  VersionNumber?: number;

  /**
   * <p>Errors.</p>
   */
  Errors?: DashboardError[];

  /**
   * <p>The Amazon Resource Numbers (ARNs) for the datasets that are associated with a version
   *             of the dashboard.</p>
   */
  DataSetArns?: string[];

  /**
   * <p>The time that this dashboard version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Description.</p>
   */
  Description?: string;

  /**
   * <p>Source entity ARN.</p>
   */
  SourceEntityArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;
}

export namespace DashboardVersion {
  export const filterSensitiveLog = (obj: DashboardVersion): any => ({
    ...obj,
  });
}

/**
 * <p>Dashboard version summary.</p>
 */
export interface DashboardVersionSummary {
  /**
   * <p>Description.</p>
   */
  Description?: string;

  /**
   * <p>The time that this dashboard version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>Version number.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>Source entity ARN.</p>
   */
  SourceEntityArn?: string;
}

export namespace DashboardVersionSummary {
  export const filterSensitiveLog = (obj: DashboardVersionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The theme colors that are used for data colors in charts. The colors description is a
 *             hexidecimal color code that consists of six alphanumerical characters, prefixed with
 *             <code>#</code>, for example #37BFF5. </p>
 */
export interface DataColorPalette {
  /**
   * <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>
   */
  MinMaxGradient?: string[];

  /**
   * <p>The hexadecimal codes for the colors.</p>
   */
  Colors?: string[];

  /**
   * <p>The hexadecimal code of a color that applies to charts where a lack of data is
   *             highlighted.</p>
   */
  EmptyFillColor?: string;
}

export namespace DataColorPalette {
  export const filterSensitiveLog = (obj: DataColorPalette): any => ({
    ...obj,
  });
}

/**
 * <p>Dataset.</p>
 */
export interface DataSet {
  /**
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
   *             imported into SPICE.</p>
   */
  ConsumedSpiceCapacityInBytes?: number;

  /**
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * <p>The list of columns after all transforms. These columns are available in templates,
   *             analyses, and dashboards.</p>
   */
  OutputColumns?: OutputColumn[];

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode?: DataSetImportMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The row-level security configuration for the dataset.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * <p>The ID of the dataset.</p>
   */
  DataSetId?: string;

  /**
   * <p>Groupings of columns that work together in certain Amazon QuickSight features.
   *             Currently, only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap?: { [key: string]: PhysicalTable };

  /**
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Configures the combination and transformation of the data from the physical
   *             tables.</p>
   */
  LogicalTableMap?: { [key: string]: LogicalTable };
}

export namespace DataSet {
  export const filterSensitiveLog = (obj: DataSet): any => ({
    ...obj,
  });
}

/**
 * <p>Dataset configuration.</p>
 */
export interface DataSetConfiguration {
  /**
   * <p>Dataset schema.</p>
   */
  DataSetSchema?: DataSetSchema;

  /**
   * <p>A structure containing the list of column group schemas.</p>
   */
  ColumnGroupSchemaList?: ColumnGroupSchema[];

  /**
   * <p>Placeholder.</p>
   */
  Placeholder?: string;
}

export namespace DataSetConfiguration {
  export const filterSensitiveLog = (obj: DataSetConfiguration): any => ({
    ...obj,
  });
}

export enum DataSetImportMode {
  DIRECT_QUERY = "DIRECT_QUERY",
  SPICE = "SPICE",
}

/**
 * <p>Dataset reference.</p>
 */
export interface DataSetReference {
  /**
   * <p>Dataset Amazon Resource Name (ARN).</p>
   */
  DataSetArn: string | undefined;

  /**
   * <p>Dataset placeholder.</p>
   */
  DataSetPlaceholder: string | undefined;
}

export namespace DataSetReference {
  export const filterSensitiveLog = (obj: DataSetReference): any => ({
    ...obj,
  });
}

/**
 * <p>Dataset schema.</p>
 */
export interface DataSetSchema {
  /**
   * <p>A structure containing the list of column schemas.</p>
   */
  ColumnSchemaList?: ColumnSchema[];
}

export namespace DataSetSchema {
  export const filterSensitiveLog = (obj: DataSetSchema): any => ({
    ...obj,
  });
}

/**
 * <p>Dataset summary.</p>
 */
export interface DataSetSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * <p>The row-level security configuration for the dataset.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode?: DataSetImportMode | string;

  /**
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the dataset.</p>
   */
  DataSetId?: string;

  /**
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace DataSetSummary {
  export const filterSensitiveLog = (obj: DataSetSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The structure of a data source.</p>
 */
export interface DataSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;

  /**
   * <p>The last time that this data source was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A display name for the data source.</p>
   */
  Name?: string;

  /**
   * <p>A set of alternate data source parameters that you want to share for the credentials
   *             stored with this data source. The credentials are applied in tandem with the data source
   *             parameters when you copy a data source by using a create or update request. The API
   *             compares the <code>DataSourceParameters</code> structure that's in the request with the
   *             structures in the <code>AlternateDataSourceParameters</code> allowlist. If the
   *             structures are an exact match, the request is allowed to use the credentials from this
   *             existing data source. If the <code>AlternateDataSourceParameters</code> list is null,
   *             the <code>Credentials</code> originally used with this <code>DataSourceParameters</code>
   *             are automatically allowed.</p>
   */
  AlternateDataSourceParameters?: DataSourceParameters[];

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your
   *             underlying source.</p>
   */
  SslProperties?: SslProperties;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS
   *             account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The VPC connection information. You need to use this parameter only when you want
   *             QuickSight to use a VPC connection when connecting to your underlying source.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;

  /**
   * <p>The type of the data source. This type indicates which database engine the data source
   *             connects to.</p>
   */
  Type?: DataSourceType | string;

  /**
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying source. This
   *             is a variant type structure. For this structure to be valid, only one of the attributes
   *             can be non-null.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The time that this data source was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Error information from the last update or the creation of the data source.</p>
   */
  ErrorInfo?: DataSourceErrorInfo;
}

export namespace DataSource {
  export const filterSensitiveLog = (obj: DataSource): any => ({
    ...obj,
  });
}

/**
 * <p>Data source credentials. This is a variant type structure. For this structure to be
 *             valid, only one of the attributes can be non-null.</p>
 */
export interface DataSourceCredentials {
  /**
   * <p>The Amazon Resource Name (ARN) of a data source that has the credential pair that you
   *             want to use. When <code>CopySourceArn</code> is not null, the credential pair from the
   *             data source in the ARN is used as the credentials for the
   *             <code>DataSourceCredentials</code> structure.</p>
   */
  CopySourceArn?: string;

  /**
   * <p>Credential pair. For more information, see <a>CredentialPair</a>.</p>
   */
  CredentialPair?: CredentialPair;
}

export namespace DataSourceCredentials {
  export const filterSensitiveLog = (obj: DataSourceCredentials): any => ({
    ...obj,
  });
}

/**
 * <p>Error information for the data source creation or update.</p>
 */
export interface DataSourceErrorInfo {
  /**
   * <p>Error type.</p>
   */
  Type?: DataSourceErrorInfoType | string;

  /**
   * <p>Error message.</p>
   */
  Message?: string;
}

export namespace DataSourceErrorInfo {
  export const filterSensitiveLog = (obj: DataSourceErrorInfo): any => ({
    ...obj,
  });
}

export enum DataSourceErrorInfoType {
  ACCESS_DENIED = "ACCESS_DENIED",
  CONFLICT = "CONFLICT",
  COPY_SOURCE_NOT_FOUND = "COPY_SOURCE_NOT_FOUND",
  ENGINE_VERSION_NOT_SUPPORTED = "ENGINE_VERSION_NOT_SUPPORTED",
  GENERIC_SQL_FAILURE = "GENERIC_SQL_FAILURE",
  TIMEOUT = "TIMEOUT",
  UNKNOWN = "UNKNOWN",
  UNKNOWN_HOST = "UNKNOWN_HOST",
}

/**
 * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source.
 *             This is a variant type structure. For this structure to be valid, only one of the
 *             attributes can be non-null.</p>
 */
export interface DataSourceParameters {
  /**
   * <p>Presto parameters.</p>
   */
  PrestoParameters?: PrestoParameters;

  /**
   * <p>ServiceNow parameters.</p>
   */
  ServiceNowParameters?: ServiceNowParameters;

  /**
   * <p>S3 parameters.</p>
   */
  S3Parameters?: S3Parameters;

  /**
   * <p>Amazon Aurora MySQL parameters.</p>
   */
  AuroraParameters?: AuroraParameters;

  /**
   * <p>Twitter parameters.</p>
   */
  TwitterParameters?: TwitterParameters;

  /**
   * <p>Aurora PostgreSQL parameters.</p>
   */
  AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters;

  /**
   * <p>Amazon Redshift parameters.</p>
   */
  RedshiftParameters?: RedshiftParameters;

  /**
   * <p>Amazon Athena parameters.</p>
   */
  AthenaParameters?: AthenaParameters;

  /**
   * <p>Spark parameters.</p>
   */
  SparkParameters?: SparkParameters;

  /**
   * <p>MariaDB parameters.</p>
   */
  MariaDbParameters?: MariaDbParameters;

  /**
   * <p>AWS IoT Analytics parameters.</p>
   */
  AwsIotAnalyticsParameters?: AwsIotAnalyticsParameters;

  /**
   * <p>Amazon RDS parameters.</p>
   */
  RdsParameters?: RdsParameters;

  /**
   * <p>MySQL parameters.</p>
   */
  MySqlParameters?: MySqlParameters;

  /**
   * <p>Amazon Elasticsearch Service parameters.</p>
   */
  AmazonElasticsearchParameters?: AmazonElasticsearchParameters;

  /**
   * <p>Snowflake parameters.</p>
   */
  SnowflakeParameters?: SnowflakeParameters;

  /**
   * <p>Jira parameters.</p>
   */
  JiraParameters?: JiraParameters;

  /**
   * <p>Teradata parameters.</p>
   */
  TeradataParameters?: TeradataParameters;

  /**
   * <p>SQL Server parameters.</p>
   */
  SqlServerParameters?: SqlServerParameters;

  /**
   * <p>PostgreSQL parameters.</p>
   */
  PostgreSqlParameters?: PostgreSqlParameters;
}

export namespace DataSourceParameters {
  export const filterSensitiveLog = (obj: DataSourceParameters): any => ({
    ...obj,
  });
}

export enum DataSourceType {
  ADOBE_ANALYTICS = "ADOBE_ANALYTICS",
  AMAZON_ELASTICSEARCH = "AMAZON_ELASTICSEARCH",
  ATHENA = "ATHENA",
  AURORA = "AURORA",
  AURORA_POSTGRESQL = "AURORA_POSTGRESQL",
  AWS_IOT_ANALYTICS = "AWS_IOT_ANALYTICS",
  GITHUB = "GITHUB",
  JIRA = "JIRA",
  MARIADB = "MARIADB",
  MYSQL = "MYSQL",
  POSTGRESQL = "POSTGRESQL",
  PRESTO = "PRESTO",
  REDSHIFT = "REDSHIFT",
  S3 = "S3",
  SALESFORCE = "SALESFORCE",
  SERVICENOW = "SERVICENOW",
  SNOWFLAKE = "SNOWFLAKE",
  SPARK = "SPARK",
  SQLSERVER = "SQLSERVER",
  TERADATA = "TERADATA",
  TWITTER = "TWITTER",
}

/**
 * <p>Date time parameter.</p>
 */
export interface DateTimeParameter {
  /**
   * <p>Values.</p>
   */
  Values: Date[] | undefined;

  /**
   * <p>A display name for the dataset.</p>
   */
  Name: string | undefined;
}

export namespace DateTimeParameter {
  export const filterSensitiveLog = (obj: DateTimeParameter): any => ({
    ...obj,
  });
}

/**
 * <p>Decimal parameter.</p>
 */
export interface DecimalParameter {
  /**
   * <p>A display name for the dataset.</p>
   */
  Name: string | undefined;

  /**
   * <p>Values.</p>
   */
  Values: number[] | undefined;
}

export namespace DecimalParameter {
  export const filterSensitiveLog = (obj: DecimalParameter): any => ({
    ...obj,
  });
}

export interface DeleteAccountCustomizationRequest {
  /**
   * <p>The ID for the AWS account that you want to delete QuickSight customizations from.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace associated with the customization that you're deleting.</p>
   */
  Namespace?: string;
}

export namespace DeleteAccountCustomizationRequest {
  export const filterSensitiveLog = (obj: DeleteAccountCustomizationRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccountCustomizationResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteAccountCustomizationResponse {
  export const filterSensitiveLog = (obj: DeleteAccountCustomizationResponse): any => ({
    ...obj,
  });
}

export interface DeleteDashboardRequest {
  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the dashboard that you're deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The version number of the dashboard. If the version number property is provided, only the
   * 			specified version of the dashboard is deleted.</p>
   */
  VersionNumber?: number;
}

export namespace DeleteDashboardRequest {
  export const filterSensitiveLog = (obj: DeleteDashboardRequest): any => ({
    ...obj,
  });
}

export interface DeleteDashboardResponse {
  /**
   * <p>The Secure Socket Layer (SSL) properties that apply for the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ID of the dashboard.</p>
   */
  DashboardId?: string;
}

export namespace DeleteDashboardResponse {
  export const filterSensitiveLog = (obj: DeleteDashboardResponse): any => ({
    ...obj,
  });
}

export interface DeleteDataSetRequest {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSetId: string | undefined;
}

export namespace DeleteDataSetRequest {
  export const filterSensitiveLog = (obj: DeleteDataSetRequest): any => ({
    ...obj,
  });
}

export interface DeleteDataSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSetId?: string;
}

export namespace DeleteDataSetResponse {
  export const filterSensitiveLog = (obj: DeleteDataSetResponse): any => ({
    ...obj,
  });
}

export interface DeleteDataSourceRequest {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId: string | undefined;
}

export namespace DeleteDataSourceRequest {
  export const filterSensitiveLog = (obj: DeleteDataSourceRequest): any => ({
    ...obj,
  });
}

export interface DeleteDataSourceResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the data source that you deleted.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId?: string;
}

export namespace DeleteDataSourceResponse {
  export const filterSensitiveLog = (obj: DeleteDataSourceResponse): any => ({
    ...obj,
  });
}

export interface DeleteGroupMembershipRequest {
  /**
   * <p>The name of the group that you want to delete the user from.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the user that you want to delete from the group membership.</p>
   */
  MemberName: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace DeleteGroupMembershipRequest {
  export const filterSensitiveLog = (obj: DeleteGroupMembershipRequest): any => ({
    ...obj,
  });
}

export interface DeleteGroupMembershipResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteGroupMembershipResponse {
  export const filterSensitiveLog = (obj: DeleteGroupMembershipResponse): any => ({
    ...obj,
  });
}

export interface DeleteGroupRequest {
  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the group that you want to delete.</p>
   */
  GroupName: string | undefined;
}

export namespace DeleteGroupRequest {
  export const filterSensitiveLog = (obj: DeleteGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteGroupResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteGroupResponse {
  export const filterSensitiveLog = (obj: DeleteGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteIAMPolicyAssignmentRequest {
  /**
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the assignment. </p>
   */
  AssignmentName: string | undefined;

  /**
   * <p>The AWS account ID where you want to delete the IAM policy assignment.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace DeleteIAMPolicyAssignmentRequest {
  export const filterSensitiveLog = (obj: DeleteIAMPolicyAssignmentRequest): any => ({
    ...obj,
  });
}

export interface DeleteIAMPolicyAssignmentResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The name of the assignment. </p>
   */
  AssignmentName?: string;
}

export namespace DeleteIAMPolicyAssignmentResponse {
  export const filterSensitiveLog = (obj: DeleteIAMPolicyAssignmentResponse): any => ({
    ...obj,
  });
}

export interface DeleteNamespaceRequest {
  /**
   * <p>The namespace that you want to delete.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The ID for the AWS account that you want to delete the QuickSight namespace from.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace DeleteNamespaceRequest {
  export const filterSensitiveLog = (obj: DeleteNamespaceRequest): any => ({
    ...obj,
  });
}

export interface DeleteNamespaceResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteNamespaceResponse {
  export const filterSensitiveLog = (obj: DeleteNamespaceResponse): any => ({
    ...obj,
  });
}

export interface DeleteTemplateAliasRequest {
  /**
   * <p>The name for the template alias. To delete a specific alias, you delete the version that the
   * 			alias points to. You can specify the alias name, or specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. </p>
   */
  AliasName: string | undefined;

  /**
   * <p>The ID for the template that the specified alias is for.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the item to delete.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace DeleteTemplateAliasRequest {
  export const filterSensitiveLog = (obj: DeleteTemplateAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteTemplateAliasResponse {
  /**
   * <p>The name for the template alias.</p>
   */
  AliasName?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template you want to delete.</p>
   */
  Arn?: string;

  /**
   * <p>An ID for the template associated with the deletion.</p>
   */
  TemplateId?: string;
}

export namespace DeleteTemplateAliasResponse {
  export const filterSensitiveLog = (obj: DeleteTemplateAliasResponse): any => ({
    ...obj,
  });
}

export interface DeleteTemplateRequest {
  /**
   * <p>Specifies the version of the template that you want to delete.
   * 			If you don't provide a version number, <code>DeleteTemplate</code> deletes all versions of the template.
   * 	 </p>
   */
  VersionNumber?: number;

  /**
   * <p>The ID of the AWS account that contains the template that you're deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template you want to delete.</p>
   */
  TemplateId: string | undefined;
}

export namespace DeleteTemplateRequest {
  export const filterSensitiveLog = (obj: DeleteTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>An ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteTemplateResponse {
  export const filterSensitiveLog = (obj: DeleteTemplateResponse): any => ({
    ...obj,
  });
}

export interface DeleteThemeAliasRequest {
  /**
   * <p>The ID of the AWS account that contains the theme alias to delete.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme that the specified alias is for.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The unique name for the theme alias to delete.</p>
   */
  AliasName: string | undefined;
}

export namespace DeleteThemeAliasRequest {
  export const filterSensitiveLog = (obj: DeleteThemeAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteThemeAliasResponse {
  /**
   * <p>An ID for the theme associated with the deletion.</p>
   */
  ThemeId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme resource using the deleted alias.</p>
   */
  Arn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The name for the theme alias.</p>
   */
  AliasName?: string;
}

export namespace DeleteThemeAliasResponse {
  export const filterSensitiveLog = (obj: DeleteThemeAliasResponse): any => ({
    ...obj,
  });
}

export interface DeleteThemeRequest {
  /**
   * <p>The version of the theme that you want to delete. </p>
   * 		       <p>
   *             <b>Note:</b> If you don't provide a version number, you're
   * 			using this call to <code>DeleteTheme</code> to delete all versions of the theme.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The ID of the AWS account that contains the theme that you're deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme that you want to delete.</p>
   */
  ThemeId: string | undefined;
}

export namespace DeleteThemeRequest {
  export const filterSensitiveLog = (obj: DeleteThemeRequest): any => ({
    ...obj,
  });
}

export interface DeleteThemeResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>An ID for the theme.</p>
   */
  ThemeId?: string;
}

export namespace DeleteThemeResponse {
  export const filterSensitiveLog = (obj: DeleteThemeResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteUserByPrincipalIdRequest {
  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The principal ID of the user.</p>
   */
  PrincipalId: string | undefined;
}

export namespace DeleteUserByPrincipalIdRequest {
  export const filterSensitiveLog = (obj: DeleteUserByPrincipalIdRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserByPrincipalIdResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteUserByPrincipalIdResponse {
  export const filterSensitiveLog = (obj: DeleteUserByPrincipalIdResponse): any => ({
    ...obj,
  });
}

export interface DeleteUserRequest {
  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the user that you want to delete.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace DeleteUserRequest {
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteUserResponse {
  export const filterSensitiveLog = (obj: DeleteUserResponse): any => ({
    ...obj,
  });
}

export interface DescribeAccountCustomizationRequest {
  /**
   * <p>The ID for the AWS account that you want to describe QuickSight customizations for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The status of the creation of the customization. This is an asynchronous process. A status
   *             of <code>CREATED</code> means that your customization is ready to use.</p>
   */
  Resolved?: boolean;

  /**
   * <p>The namespace associated with the customization that you're describing.</p>
   */
  Namespace?: string;
}

export namespace DescribeAccountCustomizationRequest {
  export const filterSensitiveLog = (obj: DescribeAccountCustomizationRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountCustomizationResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The namespace associated with the customization that you're describing.</p>
   */
  Namespace?: string;

  /**
   * <p>The ID for the AWS account that you want to describe QuickSight customizations for.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The customizations associated with QuickSight.</p>
   */
  AccountCustomization?: AccountCustomization;
}

export namespace DescribeAccountCustomizationResponse {
  export const filterSensitiveLog = (obj: DescribeAccountCustomizationResponse): any => ({
    ...obj,
  });
}

export interface DescribeAccountSettingsRequest {
  /**
   * <p>The ID for the AWS account that contains the QuickSight namespaces that you want to list.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace DescribeAccountSettingsRequest {
  export const filterSensitiveLog = (obj: DescribeAccountSettingsRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountSettingsResponse {
  /**
   * <p>The settings associated with the QuickSight subscription associated with this AWS account. This information includes the
   *             edition of Amazon QuickSight that you subscribed to (Standard or Enterprise) and the
   *             notification email for the QuickSight subscription. The QuickSight console, the
   *             QuickSight subscription is sometimes referred to as a QuickSight "account" even though
   *             it is technically not an account, but a subscription in your AWS account.</p>
   */
  AccountSettings?: AccountSettings;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeAccountSettingsResponse {
  export const filterSensitiveLog = (obj: DescribeAccountSettingsResponse): any => ({
    ...obj,
  });
}

export interface DescribeDashboardPermissionsRequest {
  /**
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the dashboard that you're describing
   * 			permissions for.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace DescribeDashboardPermissionsRequest {
  export const filterSensitiveLog = (obj: DescribeDashboardPermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeDashboardPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>A structure that contains the permissions for the dashboard.</p>
   */
  Permissions?: ResourcePermission[];
}

export namespace DescribeDashboardPermissionsResponse {
  export const filterSensitiveLog = (obj: DescribeDashboardPermissionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeDashboardRequest {
  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The alias name.</p>
   */
  AliasName?: string;

  /**
   * <p>The ID of the AWS account that contains the dashboard that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The version number for the dashboard. If a version number isn't passed, the latest
   * 			published dashboard version is described. </p>
   */
  VersionNumber?: number;
}

export namespace DescribeDashboardRequest {
  export const filterSensitiveLog = (obj: DescribeDashboardRequest): any => ({
    ...obj,
  });
}

export interface DescribeDashboardResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>Information about the dashboard.</p>
   */
  Dashboard?: Dashboard;
}

export namespace DescribeDashboardResponse {
  export const filterSensitiveLog = (obj: DescribeDashboardResponse): any => ({
    ...obj,
  });
}

export interface DescribeDataSetPermissionsRequest {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSetId: string | undefined;
}

export namespace DescribeDataSetPermissionsRequest {
  export const filterSensitiveLog = (obj: DescribeDataSetPermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeDataSetPermissionsResponse {
  /**
   * <p>A list of resource permissions on the dataset.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DataSetArn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSetId?: string;
}

export namespace DescribeDataSetPermissionsResponse {
  export const filterSensitiveLog = (obj: DescribeDataSetPermissionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeDataSetRequest {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSetId: string | undefined;
}

export namespace DescribeDataSetRequest {
  export const filterSensitiveLog = (obj: DescribeDataSetRequest): any => ({
    ...obj,
  });
}

export interface DescribeDataSetResponse {
  /**
   * <p>Information on the dataset.</p>
   */
  DataSet?: DataSet;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeDataSetResponse {
  export const filterSensitiveLog = (obj: DescribeDataSetResponse): any => ({
    ...obj,
  });
}

export interface DescribeDataSourcePermissionsRequest {
  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace DescribeDataSourcePermissionsRequest {
  export const filterSensitiveLog = (obj: DescribeDataSourcePermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeDataSourcePermissionsResponse {
  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn?: string;

  /**
   * <p>A list of resource permissions on the data source.</p>
   */
  Permissions?: ResourcePermission[];
}

export namespace DescribeDataSourcePermissionsResponse {
  export const filterSensitiveLog = (obj: DescribeDataSourcePermissionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeDataSourceRequest {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId: string | undefined;
}

export namespace DescribeDataSourceRequest {
  export const filterSensitiveLog = (obj: DescribeDataSourceRequest): any => ({
    ...obj,
  });
}

export interface DescribeDataSourceResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The information on the data source.</p>
   */
  DataSource?: DataSource;
}

export namespace DescribeDataSourceResponse {
  export const filterSensitiveLog = (obj: DescribeDataSourceResponse): any => ({
    ...obj,
  });
}

export interface DescribeGroupRequest {
  /**
   * <p>The name of the group that you want to describe.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace DescribeGroupRequest {
  export const filterSensitiveLog = (obj: DescribeGroupRequest): any => ({
    ...obj,
  });
}

export interface DescribeGroupResponse {
  /**
   * <p>The name of the group.</p>
   */
  Group?: Group;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeGroupResponse {
  export const filterSensitiveLog = (obj: DescribeGroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeIAMPolicyAssignmentRequest {
  /**
   * <p>The ID of the AWS account that contains the assignment that you want to describe.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the assignment. </p>
   */
  AssignmentName: string | undefined;
}

export namespace DescribeIAMPolicyAssignmentRequest {
  export const filterSensitiveLog = (obj: DescribeIAMPolicyAssignmentRequest): any => ({
    ...obj,
  });
}

export interface DescribeIAMPolicyAssignmentResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>Information describing the IAM policy assignment.</p>
   */
  IAMPolicyAssignment?: IAMPolicyAssignment;
}

export namespace DescribeIAMPolicyAssignmentResponse {
  export const filterSensitiveLog = (obj: DescribeIAMPolicyAssignmentResponse): any => ({
    ...obj,
  });
}

export interface DescribeIngestionRequest {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the ingestion.</p>
   */
  IngestionId: string | undefined;

  /**
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;
}

export namespace DescribeIngestionRequest {
  export const filterSensitiveLog = (obj: DescribeIngestionRequest): any => ({
    ...obj,
  });
}

export interface DescribeIngestionResponse {
  /**
   * <p>Information about the ingestion.</p>
   */
  Ingestion?: Ingestion;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeIngestionResponse {
  export const filterSensitiveLog = (obj: DescribeIngestionResponse): any => ({
    ...obj,
  });
}

export interface DescribeNamespaceRequest {
  /**
   * <p>The namespace that you want to describe.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The ID for the AWS account that contains the QuickSight namespace that you want to describe.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace DescribeNamespaceRequest {
  export const filterSensitiveLog = (obj: DescribeNamespaceRequest): any => ({
    ...obj,
  });
}

export interface DescribeNamespaceResponse {
  /**
   * <p>The information about the namespace that you're describing. The response includes
   *         the namespace ARN, name, AWS Region, creation status, and identity store. <code>DescribeNamespace</code> also
   *         works for namespaces that are in the process of being created. For incomplete namespaces,
   *         this API lists the namespace error types and messages associated with the creation process.</p>
   */
  Namespace?: NamespaceInfoV2;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeNamespaceResponse {
  export const filterSensitiveLog = (obj: DescribeNamespaceResponse): any => ({
    ...obj,
  });
}

export interface DescribeTemplateAliasRequest {
  /**
   * <p>The name of the template alias that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the template alias that you're
   * 			describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;
}

export namespace DescribeTemplateAliasRequest {
  export const filterSensitiveLog = (obj: DescribeTemplateAliasRequest): any => ({
    ...obj,
  });
}

export interface DescribeTemplateAliasResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>Information about the template alias.</p>
   */
  TemplateAlias?: TemplateAlias;
}

export namespace DescribeTemplateAliasResponse {
  export const filterSensitiveLog = (obj: DescribeTemplateAliasResponse): any => ({
    ...obj,
  });
}

export interface DescribeTemplatePermissionsRequest {
  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the template that you're describing.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace DescribeTemplatePermissionsRequest {
  export const filterSensitiveLog = (obj: DescribeTemplatePermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTemplatePermissionsResponse {
  /**
   * <p>A list of resource permissions to be set on the template. </p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  TemplateArn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeTemplatePermissionsResponse {
  export const filterSensitiveLog = (obj: DescribeTemplatePermissionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeTemplateRequest {
  /**
   * <p>The ID of the AWS account that contains the template that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The alias of the template that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName?: string;

  /**
   * <p>(Optional) The number for the version to describe. If a <code>VersionNumber</code> parameter
   * 			value isn't provided, the latest version of the template is described.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;
}

export namespace DescribeTemplateRequest {
  export const filterSensitiveLog = (obj: DescribeTemplateRequest): any => ({
    ...obj,
  });
}

export interface DescribeTemplateResponse {
  /**
   * <p>The template structure for the object you want to describe.</p>
   */
  Template?: Template;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeTemplateResponse {
  export const filterSensitiveLog = (obj: DescribeTemplateResponse): any => ({
    ...obj,
  });
}

export interface DescribeThemeAliasRequest {
  /**
   * <p>The ID of the AWS account that contains the theme alias that you're
   * 			describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The name of the theme alias that you want to describe.</p>
   */
  AliasName: string | undefined;
}

export namespace DescribeThemeAliasRequest {
  export const filterSensitiveLog = (obj: DescribeThemeAliasRequest): any => ({
    ...obj,
  });
}

export interface DescribeThemeAliasResponse {
  /**
   * <p>Information about the theme alias.</p>
   */
  ThemeAlias?: ThemeAlias;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeThemeAliasResponse {
  export const filterSensitiveLog = (obj: DescribeThemeAliasResponse): any => ({
    ...obj,
  });
}

export interface DescribeThemePermissionsRequest {
  /**
   * <p>The ID of the AWS account that contains the theme that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme that you want to describe permissions for.</p>
   */
  ThemeId: string | undefined;
}

export namespace DescribeThemePermissionsRequest {
  export const filterSensitiveLog = (obj: DescribeThemePermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeThemePermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   */
  ThemeArn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>A list of resource permissions set on the theme. </p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId?: string;
}

export namespace DescribeThemePermissionsResponse {
  export const filterSensitiveLog = (obj: DescribeThemePermissionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeThemeRequest {
  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The alias of the theme that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			theme by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to themes.</p>
   */
  AliasName?: string;

  /**
   * <p>The ID of the AWS account that contains the theme that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The version number for the version to describe. If a <code>VersionNumber</code> parameter
   * 			value isn't provided, the latest version of the theme is described.</p>
   */
  VersionNumber?: number;
}

export namespace DescribeThemeRequest {
  export const filterSensitiveLog = (obj: DescribeThemeRequest): any => ({
    ...obj,
  });
}

export interface DescribeThemeResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The information about the theme that you are describing.</p>
   */
  Theme?: Theme;
}

export namespace DescribeThemeResponse {
  export const filterSensitiveLog = (obj: DescribeThemeResponse): any => ({
    ...obj,
  });
}

export interface DescribeUserRequest {
  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the user that you want to describe.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace DescribeUserRequest {
  export const filterSensitiveLog = (obj: DescribeUserRequest): any => ({
    ...obj,
  });
}

export interface DescribeUserResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The user name.</p>
   */
  User?: User;
}

export namespace DescribeUserResponse {
  export const filterSensitiveLog = (obj: DescribeUserResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The domain specified isn't on the allow list. All domains for embedded dashboards must be
 * 			added to the approved list by an Amazon QuickSight admin.</p>
 */
export interface DomainNotWhitelistedException extends __SmithyException, $MetadataBearer {
  name: "DomainNotWhitelistedException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace DomainNotWhitelistedException {
  export const filterSensitiveLog = (obj: DomainNotWhitelistedException): any => ({
    ...obj,
  });
}

export enum Edition {
  ENTERPRISE = "ENTERPRISE",
  STANDARD = "STANDARD",
}

/**
 * <p>Error information for the SPICE ingestion of a dataset.</p>
 */
export interface ErrorInfo {
  /**
   * <p>Error type.</p>
   */
  Type?: IngestionErrorType | string;

  /**
   * <p>Error message.</p>
   */
  Message?: string;
}

export namespace ErrorInfo {
  export const filterSensitiveLog = (obj: ErrorInfo): any => ({
    ...obj,
  });
}

export enum ExceptionResourceType {
  ACCOUNT_SETTINGS = "ACCOUNT_SETTINGS",
  DATA_SET = "DATA_SET",
  DATA_SOURCE = "DATA_SOURCE",
  GROUP = "GROUP",
  IAMPOLICY_ASSIGNMENT = "IAMPOLICY_ASSIGNMENT",
  INGESTION = "INGESTION",
  NAMESPACE = "NAMESPACE",
  USER = "USER",
  VPC_CONNECTION = "VPC_CONNECTION",
}

/**
 * <p>Export to .csv option.</p>
 */
export interface ExportToCSVOption {
  /**
   * <p>Availability status.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

export namespace ExportToCSVOption {
  export const filterSensitiveLog = (obj: ExportToCSVOption): any => ({
    ...obj,
  });
}

export enum FileFormat {
  CLF = "CLF",
  CSV = "CSV",
  ELF = "ELF",
  JSON = "JSON",
  TSV = "TSV",
  XLSX = "XLSX",
}

/**
 * <p>A transform operation that filters rows based on a condition.</p>
 */
export interface FilterOperation {
  /**
   * <p>An expression that must evaluate to a Boolean value. Rows for which the expression
   *             evaluates to true are kept in the dataset.</p>
   */
  ConditionExpression: string | undefined;
}

export namespace FilterOperation {
  export const filterSensitiveLog = (obj: FilterOperation): any => ({
    ...obj,
  });
}

export enum FilterOperator {
  StringEquals = "StringEquals",
}

/**
 * <p>Geospatial column group that denotes a hierarchy.</p>
 */
export interface GeoSpatialColumnGroup {
  /**
   * <p>A display name for the hierarchy.</p>
   */
  Name: string | undefined;

  /**
   * <p>Columns in this hierarchy.</p>
   */
  Columns: string[] | undefined;

  /**
   * <p>Country code.</p>
   */
  CountryCode: GeoSpatialCountryCode | string | undefined;
}

export namespace GeoSpatialColumnGroup {
  export const filterSensitiveLog = (obj: GeoSpatialColumnGroup): any => ({
    ...obj,
  });
}

export enum GeoSpatialCountryCode {
  US = "US",
}

export enum GeoSpatialDataRole {
  CITY = "CITY",
  COUNTRY = "COUNTRY",
  COUNTY = "COUNTY",
  LATITUDE = "LATITUDE",
  LONGITUDE = "LONGITUDE",
  POSTCODE = "POSTCODE",
  STATE = "STATE",
}

export interface GetDashboardEmbedUrlRequest {
  /**
   * <p>Remove the reset button on the embedded dashboard. The default is FALSE, which enables the
   * 			reset button.</p>
   */
  ResetDisabled?: boolean;

  /**
   * <p>How many minutes the session is valid. The session lifetime must be 15-600 minutes.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * <p>The ID for the AWS account that contains the dashboard that you're embedding.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The authentication method that the user uses to sign in.</p>
   */
  IdentityType: IdentityType | string | undefined;

  /**
   * <p>Remove the undo/redo button on the embedded dashboard. The default is FALSE, which enables
   * 			the undo/redo button.</p>
   */
  UndoRedoDisabled?: boolean;

  /**
   * <p>The Amazon QuickSight user's Amazon Resource Name (ARN), for use with <code>QUICKSIGHT</code> identity type.
   * 			You can use this for any Amazon QuickSight users in your account (readers, authors, or
   * 			admins) authenticated as one of the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Active Directory (AD) users or group members</p>
   * 			         </li>
   *             <li>
   * 				           <p>Invited nonfederated users</p>
   * 			         </li>
   *             <li>
   * 				           <p>IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using
   * 					SAML, OpenID Connect, or IAM federation.</p>
   * 			         </li>
   *          </ul>
   */
  UserArn?: string;

  /**
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   */
  DashboardId: string | undefined;
}

export namespace GetDashboardEmbedUrlRequest {
  export const filterSensitiveLog = (obj: GetDashboardEmbedUrlRequest): any => ({
    ...obj,
  });
}

export interface GetDashboardEmbedUrlResponse {
  /**
   * <p>A single-use URL that you can put into your server-side webpage to embed your
   * 			dashboard. This URL is valid for 5 minutes. The API provides the URL with an
   * 			<code>auth_code</code> value that enables one (and only one) sign-on to a user session
   * 			that is valid for 10 hours. </p>
   */
  EmbedUrl?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace GetDashboardEmbedUrlResponse {
  export const filterSensitiveLog = (obj: GetDashboardEmbedUrlResponse): any => ({
    ...obj,
    ...(obj.EmbedUrl && { EmbedUrl: SENSITIVE_STRING }),
  });
}

export interface GetSessionEmbedUrlRequest {
  /**
   * <p>How many minutes the session is valid. The session lifetime must be 15-600 minutes.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * <p>The ID for the AWS account that contains the QuickSight session that you're embedding.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon QuickSight user's Amazon Resource Name (ARN), for use with <code>QUICKSIGHT</code> identity type.
   * 			You can use this for any Amazon QuickSight users in your account (readers, authors, or
   * 			admins) authenticated as one of the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Active Directory (AD) users or group members</p>
   * 			         </li>
   *             <li>
   * 				           <p>Invited nonfederated users</p>
   * 			         </li>
   *             <li>
   * 				           <p>IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using
   * 					SAML, OpenID Connect, or IAM federation.</p>
   * 			         </li>
   *          </ul>
   */
  UserArn?: string;

  /**
   * <p>The entry point for the embedded session.</p>
   */
  EntryPoint?: string;
}

export namespace GetSessionEmbedUrlRequest {
  export const filterSensitiveLog = (obj: GetSessionEmbedUrlRequest): any => ({
    ...obj,
  });
}

export interface GetSessionEmbedUrlResponse {
  /**
   * <p>A single-use URL that you can put into your server-side web page to embed your
   * 			QuickSight session. This URL is valid for 5 minutes. The API provides the URL with an
   * 			<code>auth_code</code> value that enables one (and only one) sign-on to a user session
   * 			that is valid for 10 hours. </p>
   */
  EmbedUrl?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace GetSessionEmbedUrlResponse {
  export const filterSensitiveLog = (obj: GetSessionEmbedUrlResponse): any => ({
    ...obj,
    ...(obj.EmbedUrl && { EmbedUrl: SENSITIVE_STRING }),
  });
}

/**
 * <p>A <i>group</i> in Amazon QuickSight consists of a set of users. You can
 *             use groups to make it easier to manage access and security. Currently, an Amazon
 *             QuickSight subscription can't contain more than 500 Amazon QuickSight groups.</p>
 */
export interface Group {
  /**
   * <p>The name of the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The principal ID of the group.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The group description.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the group.</p>
   */
  Arn?: string;
}

export namespace Group {
  export const filterSensitiveLog = (obj: Group): any => ({
    ...obj,
  });
}

/**
 * <p>A member of an Amazon QuickSight group. Currently, group members must be users. Groups
 *             can't be members of another group. .</p>
 */
export interface GroupMember {
  /**
   * <p>The name of the group member (user).</p>
   */
  MemberName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the group member (user).</p>
   */
  Arn?: string;
}

export namespace GroupMember {
  export const filterSensitiveLog = (obj: GroupMember): any => ({
    ...obj,
  });
}

/**
 * <p>The display options for gutter spacing between tiles on a sheet.</p>
 */
export interface GutterStyle {
  /**
   * <p>This Boolean value controls whether to display a gutter space between sheet tiles.
   *         </p>
   */
  Show?: boolean;
}

export namespace GutterStyle {
  export const filterSensitiveLog = (obj: GutterStyle): any => ({
    ...obj,
  });
}

/**
 * <p>An AWS Identity and Access Management (IAM) policy assignment.</p>
 */
export interface IAMPolicyAssignment {
  /**
   * <p>Assignment name.</p>
   */
  AssignmentName?: string;

  /**
   * <p>Assignment ID.</p>
   */
  AssignmentId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM policy.</p>
   */
  PolicyArn?: string;

  /**
   * <p>Identities.</p>
   */
  Identities?: { [key: string]: string[] };

  /**
   * <p>Assignment status.</p>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId?: string;
}

export namespace IAMPolicyAssignment {
  export const filterSensitiveLog = (obj: IAMPolicyAssignment): any => ({
    ...obj,
  });
}

/**
 * <p>IAM policy assignment summary.</p>
 */
export interface IAMPolicyAssignmentSummary {
  /**
   * <p>Assignment status.</p>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>Assignment name.</p>
   */
  AssignmentName?: string;
}

export namespace IAMPolicyAssignmentSummary {
  export const filterSensitiveLog = (obj: IAMPolicyAssignmentSummary): any => ({
    ...obj,
  });
}

export enum IdentityStore {
  QUICKSIGHT = "QUICKSIGHT",
}

export enum IdentityType {
  IAM = "IAM",
  QUICKSIGHT = "QUICKSIGHT",
}

/**
 * <p>The identity type specified isn't supported. Supported identity types include
 * 				<code>IAM</code> and <code>QUICKSIGHT</code>.</p>
 */
export interface IdentityTypeNotSupportedException extends __SmithyException, $MetadataBearer {
  name: "IdentityTypeNotSupportedException";
  $fault: "client";
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;

  Message?: string;
}

export namespace IdentityTypeNotSupportedException {
  export const filterSensitiveLog = (obj: IdentityTypeNotSupportedException): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the SPICE ingestion for a dataset.</p>
 */
export interface Ingestion {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Information about rows for a data set SPICE ingestion.</p>
   */
  RowInfo?: RowInfo;

  /**
   * <p>The size of the data ingested, in bytes.</p>
   */
  IngestionSizeInBytes?: number;

  /**
   * <p>Ingestion status.</p>
   */
  IngestionStatus: IngestionStatus | string | undefined;

  /**
   * <p>Type of this ingestion.</p>
   */
  RequestType?: IngestionRequestType | string;

  /**
   * <p>Error information for this ingestion.</p>
   */
  ErrorInfo?: ErrorInfo;

  /**
   * <p>Information about a queued dataset SPICE ingestion.</p>
   */
  QueueInfo?: QueueInfo;

  /**
   * <p>Ingestion ID.</p>
   */
  IngestionId?: string;

  /**
   * <p>The time that this ingestion took, measured in seconds.</p>
   */
  IngestionTimeInSeconds?: number;

  /**
   * <p>The time that this ingestion started.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>Event source for this ingestion.</p>
   */
  RequestSource?: IngestionRequestSource | string;
}

export namespace Ingestion {
  export const filterSensitiveLog = (obj: Ingestion): any => ({
    ...obj,
  });
}

export enum IngestionErrorType {
  ACCOUNT_CAPACITY_LIMIT_EXCEEDED = "ACCOUNT_CAPACITY_LIMIT_EXCEEDED",
  CONNECTION_FAILURE = "CONNECTION_FAILURE",
  CUSTOMER_ERROR = "CUSTOMER_ERROR",
  DATA_SET_DELETED = "DATA_SET_DELETED",
  DATA_SET_NOT_SPICE = "DATA_SET_NOT_SPICE",
  DATA_SET_SIZE_LIMIT_EXCEEDED = "DATA_SET_SIZE_LIMIT_EXCEEDED",
  DATA_SOURCE_AUTH_FAILED = "DATA_SOURCE_AUTH_FAILED",
  DATA_SOURCE_CONNECTION_FAILED = "DATA_SOURCE_CONNECTION_FAILED",
  DATA_SOURCE_NOT_FOUND = "DATA_SOURCE_NOT_FOUND",
  DATA_TOLERANCE_EXCEPTION = "DATA_TOLERANCE_EXCEPTION",
  FAILURE_TO_ASSUME_ROLE = "FAILURE_TO_ASSUME_ROLE",
  FAILURE_TO_PROCESS_JSON_FILE = "FAILURE_TO_PROCESS_JSON_FILE",
  IAM_ROLE_NOT_AVAILABLE = "IAM_ROLE_NOT_AVAILABLE",
  INGESTION_CANCELED = "INGESTION_CANCELED",
  INGESTION_SUPERSEDED = "INGESTION_SUPERSEDED",
  INTERNAL_SERVICE_ERROR = "INTERNAL_SERVICE_ERROR",
  INVALID_DATAPREP_SYNTAX = "INVALID_DATAPREP_SYNTAX",
  INVALID_DATA_SOURCE_CONFIG = "INVALID_DATA_SOURCE_CONFIG",
  INVALID_DATE_FORMAT = "INVALID_DATE_FORMAT",
  IOT_DATA_SET_FILE_EMPTY = "IOT_DATA_SET_FILE_EMPTY",
  IOT_FILE_NOT_FOUND = "IOT_FILE_NOT_FOUND",
  OAUTH_TOKEN_FAILURE = "OAUTH_TOKEN_FAILURE",
  PASSWORD_AUTHENTICATION_FAILURE = "PASSWORD_AUTHENTICATION_FAILURE",
  PERMISSION_DENIED = "PERMISSION_DENIED",
  QUERY_TIMEOUT = "QUERY_TIMEOUT",
  ROW_SIZE_LIMIT_EXCEEDED = "ROW_SIZE_LIMIT_EXCEEDED",
  S3_FILE_INACCESSIBLE = "S3_FILE_INACCESSIBLE",
  S3_MANIFEST_ERROR = "S3_MANIFEST_ERROR",
  S3_UPLOADED_FILE_DELETED = "S3_UPLOADED_FILE_DELETED",
  SOURCE_API_LIMIT_EXCEEDED_FAILURE = "SOURCE_API_LIMIT_EXCEEDED_FAILURE",
  SOURCE_RESOURCE_LIMIT_EXCEEDED = "SOURCE_RESOURCE_LIMIT_EXCEEDED",
  SPICE_TABLE_NOT_FOUND = "SPICE_TABLE_NOT_FOUND",
  SQL_EXCEPTION = "SQL_EXCEPTION",
  SQL_INVALID_PARAMETER_VALUE = "SQL_INVALID_PARAMETER_VALUE",
  SQL_NUMERIC_OVERFLOW = "SQL_NUMERIC_OVERFLOW",
  SQL_SCHEMA_MISMATCH_ERROR = "SQL_SCHEMA_MISMATCH_ERROR",
  SQL_TABLE_NOT_FOUND = "SQL_TABLE_NOT_FOUND",
  SSL_CERTIFICATE_VALIDATION_FAILURE = "SSL_CERTIFICATE_VALIDATION_FAILURE",
  UNRESOLVABLE_HOST = "UNRESOLVABLE_HOST",
  UNROUTABLE_HOST = "UNROUTABLE_HOST",
}

export enum IngestionRequestSource {
  MANUAL = "MANUAL",
  SCHEDULED = "SCHEDULED",
}

export enum IngestionRequestType {
  EDIT = "EDIT",
  FULL_REFRESH = "FULL_REFRESH",
  INCREMENTAL_REFRESH = "INCREMENTAL_REFRESH",
  INITIAL_INGESTION = "INITIAL_INGESTION",
}

export enum IngestionStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  INITIALIZED = "INITIALIZED",
  QUEUED = "QUEUED",
  RUNNING = "RUNNING",
}

/**
 * <p>Metadata for a column that is used as the input of a transform operation.</p>
 */
export interface InputColumn {
  /**
   * <p>The name of this column in the underlying data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data type of the column.</p>
   */
  Type: InputColumnDataType | string | undefined;
}

export namespace InputColumn {
  export const filterSensitiveLog = (obj: InputColumn): any => ({
    ...obj,
  });
}

export enum InputColumnDataType {
  BIT = "BIT",
  BOOLEAN = "BOOLEAN",
  DATETIME = "DATETIME",
  DECIMAL = "DECIMAL",
  INTEGER = "INTEGER",
  JSON = "JSON",
  STRING = "STRING",
}

/**
 * <p>Integer parameter.</p>
 */
export interface IntegerParameter {
  /**
   * <p>A display name for the dataset.</p>
   */
  Name: string | undefined;

  /**
   * <p>Values.</p>
   */
  Values: number[] | undefined;
}

export namespace IntegerParameter {
  export const filterSensitiveLog = (obj: IntegerParameter): any => ({
    ...obj,
  });
}

/**
 * <p>An internal failure occurred.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>NextToken</code> value isn't valid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;

  Message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more parameters has a value that isn't valid.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;

  Message?: string;
}

export namespace InvalidParameterValueException {
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
    ...obj,
  });
}

/**
 * <p>Jira parameters.</p>
 */
export interface JiraParameters {
  /**
   * <p>The base URL of the Jira site.</p>
   */
  SiteBaseUrl: string | undefined;
}

export namespace JiraParameters {
  export const filterSensitiveLog = (obj: JiraParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Join instruction.</p>
 */
export interface JoinInstruction {
  /**
   * <p>Type.</p>
   */
  Type: JoinType | string | undefined;

  /**
   * <p>Left operand.</p>
   */
  LeftOperand: string | undefined;

  /**
   * <p>On Clause.</p>
   */
  OnClause: string | undefined;

  /**
   * <p>Right operand.</p>
   */
  RightOperand: string | undefined;
}

export namespace JoinInstruction {
  export const filterSensitiveLog = (obj: JoinInstruction): any => ({
    ...obj,
  });
}

export enum JoinType {
  INNER = "INNER",
  LEFT = "LEFT",
  OUTER = "OUTER",
  RIGHT = "RIGHT",
}

/**
 * <p>A limit is exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;

  Message?: string;
  /**
   * <p>Limit exceeded.</p>
   */
  ResourceType?: ExceptionResourceType | string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export interface ListDashboardsRequest {
  /**
   * <p>The ID of the AWS account that contains the dashboards that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

export namespace ListDashboardsRequest {
  export const filterSensitiveLog = (obj: ListDashboardsRequest): any => ({
    ...obj,
  });
}

export interface ListDashboardsResponse {
  /**
   * <p>A structure that contains all of the dashboards in your AWS account. This structure
   * 			provides basic information about the dashboards.</p>
   */
  DashboardSummaryList?: DashboardSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace ListDashboardsResponse {
  export const filterSensitiveLog = (obj: ListDashboardsResponse): any => ({
    ...obj,
  });
}

export interface ListDashboardVersionsRequest {
  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the AWS account that contains the dashboard that you're listing versions
   * 			for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;
}

export namespace ListDashboardVersionsRequest {
  export const filterSensitiveLog = (obj: ListDashboardVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListDashboardVersionsResponse {
  /**
   * <p>A structure that contains information about each version of the dashboard.</p>
   */
  DashboardVersionSummaryList?: DashboardVersionSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace ListDashboardVersionsResponse {
  export const filterSensitiveLog = (obj: ListDashboardVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListDataSetsRequest {
  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListDataSetsRequest {
  export const filterSensitiveLog = (obj: ListDataSetsRequest): any => ({
    ...obj,
  });
}

export interface ListDataSetsResponse {
  /**
   * <p>The list of dataset summaries.</p>
   */
  DataSetSummaries?: DataSetSummary[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListDataSetsResponse {
  export const filterSensitiveLog = (obj: ListDataSetsResponse): any => ({
    ...obj,
  });
}

export interface ListDataSourcesRequest {
  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace ListDataSourcesRequest {
  export const filterSensitiveLog = (obj: ListDataSourcesRequest): any => ({
    ...obj,
  });
}

export interface ListDataSourcesResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>A list of data sources.</p>
   */
  DataSources?: DataSource[];
}

export namespace ListDataSourcesResponse {
  export const filterSensitiveLog = (obj: ListDataSourcesResponse): any => ({
    ...obj,
  });
}

export interface ListGroupMembershipsRequest {
  /**
   * <p>The maximum number of results to return from this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the group that you want to see a membership list of.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace ListGroupMembershipsRequest {
  export const filterSensitiveLog = (obj: ListGroupMembershipsRequest): any => ({
    ...obj,
  });
}

export interface ListGroupMembershipsResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of the members of the group.</p>
   */
  GroupMemberList?: GroupMember[];
}

export namespace ListGroupMembershipsResponse {
  export const filterSensitiveLog = (obj: ListGroupMembershipsResponse): any => ({
    ...obj,
  });
}

export interface ListGroupsRequest {
  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace ListGroupsRequest {
  export const filterSensitiveLog = (obj: ListGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListGroupsResponse {
  /**
   * <p>The list of the groups.</p>
   */
  GroupList?: Group[];

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace ListGroupsResponse {
  export const filterSensitiveLog = (obj: ListGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListIAMPolicyAssignmentsForUserRequest {
  /**
   * <p>The ID of the AWS account that contains the assignments.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace of the assignment.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the user.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

export namespace ListIAMPolicyAssignmentsForUserRequest {
  export const filterSensitiveLog = (obj: ListIAMPolicyAssignmentsForUserRequest): any => ({
    ...obj,
  });
}

export interface ListIAMPolicyAssignmentsForUserResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The active assignments for this user.</p>
   */
  ActiveAssignments?: ActiveIAMPolicyAssignment[];
}

export namespace ListIAMPolicyAssignmentsForUserResponse {
  export const filterSensitiveLog = (obj: ListIAMPolicyAssignmentsForUserResponse): any => ({
    ...obj,
  });
}

export interface ListIAMPolicyAssignmentsRequest {
  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The status of the assignments.</p>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>The ID of the AWS account that contains these IAM policy assignments.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace for the assignments.</p>
   */
  Namespace: string | undefined;
}

export namespace ListIAMPolicyAssignmentsRequest {
  export const filterSensitiveLog = (obj: ListIAMPolicyAssignmentsRequest): any => ({
    ...obj,
  });
}

export interface ListIAMPolicyAssignmentsResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information describing the IAM policy assignments.</p>
   */
  IAMPolicyAssignments?: IAMPolicyAssignmentSummary[];
}

export namespace ListIAMPolicyAssignmentsResponse {
  export const filterSensitiveLog = (obj: ListIAMPolicyAssignmentsResponse): any => ({
    ...obj,
  });
}

export interface ListIngestionsRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

export namespace ListIngestionsRequest {
  export const filterSensitiveLog = (obj: ListIngestionsRequest): any => ({
    ...obj,
  });
}

export interface ListIngestionsResponse {
  /**
   * <p>A list of the ingestions.</p>
   */
  Ingestions?: Ingestion[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListIngestionsResponse {
  export const filterSensitiveLog = (obj: ListIngestionsResponse): any => ({
    ...obj,
  });
}

export interface ListNamespacesRequest {
  /**
   * <p>The ID for the AWS account that contains the QuickSight namespaces that you want to list.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListNamespacesRequest {
  export const filterSensitiveLog = (obj: ListNamespacesRequest): any => ({
    ...obj,
  });
}

export interface ListNamespacesResponse {
  /**
   * <p>The information about the namespaces in this AWS account. The response includes
   *         the namespace ARN, name, AWS Region, notification email address, creation status, and
   *         identity store.</p>
   */
  Namespaces?: NamespaceInfoV2[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListNamespacesResponse {
  export const filterSensitiveLog = (obj: ListNamespacesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want a list of tags for.</p>
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
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   * 			resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListTemplateAliasesRequest {
  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the template aliases that you're listing.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace ListTemplateAliasesRequest {
  export const filterSensitiveLog = (obj: ListTemplateAliasesRequest): any => ({
    ...obj,
  });
}

export interface ListTemplateAliasesResponse {
  /**
   * <p>A structure containing the list of the template's aliases.</p>
   */
  TemplateAliasList?: TemplateAlias[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace ListTemplateAliasesResponse {
  export const filterSensitiveLog = (obj: ListTemplateAliasesResponse): any => ({
    ...obj,
  });
}

export interface ListTemplatesRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the AWS account that contains the templates that you're listing.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace ListTemplatesRequest {
  export const filterSensitiveLog = (obj: ListTemplatesRequest): any => ({
    ...obj,
  });
}

export interface ListTemplatesResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>A structure containing information about the templates in the list.</p>
   */
  TemplateSummaryList?: TemplateSummary[];
}

export namespace ListTemplatesResponse {
  export const filterSensitiveLog = (obj: ListTemplatesResponse): any => ({
    ...obj,
  });
}

export interface ListTemplateVersionsRequest {
  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the AWS account that contains the templates that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListTemplateVersionsRequest {
  export const filterSensitiveLog = (obj: ListTemplateVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListTemplateVersionsResponse {
  /**
   * <p>A structure containing a list of all the versions of the specified template.</p>
   */
  TemplateVersionSummaryList?: TemplateVersionSummary[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListTemplateVersionsResponse {
  export const filterSensitiveLog = (obj: ListTemplateVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListThemeAliasesRequest {
  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the AWS account that contains the theme aliases that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;
}

export namespace ListThemeAliasesRequest {
  export const filterSensitiveLog = (obj: ListThemeAliasesRequest): any => ({
    ...obj,
  });
}

export interface ListThemeAliasesResponse {
  /**
   * <p>A structure containing the list of the theme's aliases.</p>
   */
  ThemeAliasList?: ThemeAlias[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace ListThemeAliasesResponse {
  export const filterSensitiveLog = (obj: ListThemeAliasesResponse): any => ({
    ...obj,
  });
}

export interface ListThemesRequest {
  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the AWS account that contains the themes that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The type of themes that you want to list. Valid options include the following:</p>
   *     	    <ul>
   *             <li>
   *                <p>
   *                   <code>ALL (default)</code>- Display all existing themes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM</code> - Display only the themes created by people using Amazon QuickSight.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT</code> - Display only the starting themes defined by QuickSight.</p>
   *             </li>
   *          </ul>
   */
  Type?: ThemeType | string;
}

export namespace ListThemesRequest {
  export const filterSensitiveLog = (obj: ListThemesRequest): any => ({
    ...obj,
  });
}

export interface ListThemesResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>Information about the themes in the list.</p>
   */
  ThemeSummaryList?: ThemeSummary[];
}

export namespace ListThemesResponse {
  export const filterSensitiveLog = (obj: ListThemesResponse): any => ({
    ...obj,
  });
}

export interface ListThemeVersionsRequest {
  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the AWS account that contains the themes that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListThemeVersionsRequest {
  export const filterSensitiveLog = (obj: ListThemeVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListThemeVersionsResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>A structure containing a list of all the versions of the specified theme.</p>
   */
  ThemeVersionSummaryList?: ThemeVersionSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListThemeVersionsResponse {
  export const filterSensitiveLog = (obj: ListThemeVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListUserGroupsRequest {
  /**
   * <p>The maximum number of results to return from this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS account ID that the user is in. Currently, you use the ID for the AWS account
   * 			that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon QuickSight user name that you want to list group memberships for.</p>
   */
  UserName: string | undefined;
}

export namespace ListUserGroupsRequest {
  export const filterSensitiveLog = (obj: ListUserGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListUserGroupsResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The list of groups the user is a member of.</p>
   */
  GroupList?: Group[];

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListUserGroupsResponse {
  export const filterSensitiveLog = (obj: ListUserGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListUsersRequest {
  /**
   * <p>The maximum number of results to return from this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace ListUsersRequest {
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj,
  });
}

export interface ListUsersResponse {
  /**
   * <p>The list of users.</p>
   */
  UserList?: User[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListUsersResponse {
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A <i>logical table</i> is a unit that joins and that data
 *             transformations operate on. A logical table has a source, which can be either a physical
 *             table or result of a join. When a logical table points to a physical table, the logical
 *             table acts as a mutable copy of that physical table through transform operations.</p>
 */
export interface LogicalTable {
  /**
   * <p>Source of this logical table.</p>
   */
  Source: LogicalTableSource | undefined;

  /**
   * <p>Transform operations that act on this logical table.</p>
   */
  DataTransforms?: TransformOperation[];

  /**
   * <p>A display name for the logical table.</p>
   */
  Alias: string | undefined;
}

export namespace LogicalTable {
  export const filterSensitiveLog = (obj: LogicalTable): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the source of a logical table. This is a variant type structure. For
 *             this structure to be valid, only one of the attributes can be non-null.</p>
 */
export interface LogicalTableSource {
  /**
   * <p>Physical table ID.</p>
   */
  PhysicalTableId?: string;

  /**
   * <p>Specifies the result of a join of two logical tables.</p>
   */
  JoinInstruction?: JoinInstruction;
}

export namespace LogicalTableSource {
  export const filterSensitiveLog = (obj: LogicalTableSource): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon S3 manifest file location.</p>
 */
export interface ManifestFileLocation {
  /**
   * <p>Amazon S3 bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Amazon S3 key that identifies an object.</p>
   */
  Key: string | undefined;
}

export namespace ManifestFileLocation {
  export const filterSensitiveLog = (obj: ManifestFileLocation): any => ({
    ...obj,
  });
}

/**
 * <p>The display options for margins around the outside edge of sheets.</p>
 */
export interface MarginStyle {
  /**
   * <p>This Boolean value controls whether to display sheet margins.</p>
   */
  Show?: boolean;
}

export namespace MarginStyle {
  export const filterSensitiveLog = (obj: MarginStyle): any => ({
    ...obj,
  });
}

/**
 * <p>MariaDB parameters.</p>
 */
export interface MariaDbParameters {
  /**
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Host.</p>
   */
  Host: string | undefined;
}

export namespace MariaDbParameters {
  export const filterSensitiveLog = (obj: MariaDbParameters): any => ({
    ...obj,
  });
}

/**
 * <p>MySQL parameters.</p>
 */
export interface MySqlParameters {
  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * <p>Host.</p>
   */
  Host: string | undefined;
}

export namespace MySqlParameters {
  export const filterSensitiveLog = (obj: MySqlParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Errors that occur during namespace creation.</p>
 */
export interface NamespaceError {
  /**
   * <p>The error type.</p>
   */
  Type?: NamespaceErrorType | string;

  /**
   * <p>The message for the error.</p>
   */
  Message?: string;
}

export namespace NamespaceError {
  export const filterSensitiveLog = (obj: NamespaceError): any => ({
    ...obj,
  });
}

export enum NamespaceErrorType {
  INTERNAL_SERVICE_ERROR = "INTERNAL_SERVICE_ERROR",
  PERMISSION_DENIED = "PERMISSION_DENIED",
}

/**
 * <p>The error type.</p>
 */
export interface NamespaceInfoV2 {
  /**
   * <p>The namespace ARN.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the error.</p>
   */
  Name?: string;

  /**
   * <p>The identity store used for the namespace.</p>
   */
  IdentityStore?: IdentityStore | string;

  /**
   * <p>The namespace AWS Region.</p>
   */
  CapacityRegion?: string;

  /**
   * <p>An error that occured when the namespace was created.</p>
   */
  NamespaceError?: NamespaceError;

  /**
   * <p>The creation status of a namespace that is not yet completely created.</p>
   */
  CreationStatus?: NamespaceStatus | string;
}

export namespace NamespaceInfoV2 {
  export const filterSensitiveLog = (obj: NamespaceInfoV2): any => ({
    ...obj,
  });
}

export enum NamespaceStatus {
  CREATED = "CREATED",
  CREATING = "CREATING",
  DELETING = "DELETING",
  NON_RETRYABLE_FAILURE = "NON_RETRYABLE_FAILURE",
  RETRYABLE_FAILURE = "RETRYABLE_FAILURE",
}

/**
 * <p>Output column.</p>
 */
export interface OutputColumn {
  /**
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * <p>Type.</p>
   */
  Type?: ColumnDataType | string;
}

export namespace OutputColumn {
  export const filterSensitiveLog = (obj: OutputColumn): any => ({
    ...obj,
  });
}

/**
 * <p>Parameters.</p>
 */
export interface _Parameters {
  /**
   * <p>String parameters.</p>
   */
  StringParameters?: StringParameter[];

  /**
   * <p>Decimal parameters.</p>
   */
  DecimalParameters?: DecimalParameter[];

  /**
   * <p>DateTime parameters.</p>
   */
  DateTimeParameters?: DateTimeParameter[];

  /**
   * <p>Integer parameters.</p>
   */
  IntegerParameters?: IntegerParameter[];
}

export namespace _Parameters {
  export const filterSensitiveLog = (obj: _Parameters): any => ({
    ...obj,
  });
}

/**
 * <p>A view of a data source that contains information about the shape of the data in the
 *             underlying source. This is a variant type structure. For this structure to be valid,
 *             only one of the attributes can be non-null.</p>
 */
export interface PhysicalTable {
  /**
   * <p>A physical table type for relational data sources.</p>
   */
  RelationalTable?: RelationalTable;

  /**
   * <p>A physical table type built from the results of the custom SQL query.</p>
   */
  CustomSql?: CustomSql;

  /**
   * <p>A physical table type for as S3 data source.</p>
   */
  S3Source?: S3Source;
}

export namespace PhysicalTable {
  export const filterSensitiveLog = (obj: PhysicalTable): any => ({
    ...obj,
  });
}

/**
 * <p>PostgreSQL parameters.</p>
 */
export interface PostgreSqlParameters {
  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   */
  Database: string | undefined;
}

export namespace PostgreSqlParameters {
  export const filterSensitiveLog = (obj: PostgreSqlParameters): any => ({
    ...obj,
  });
}

/**
 * <p>One or more preconditions aren't met.</p>
 */
export interface PreconditionNotMetException extends __SmithyException, $MetadataBearer {
  name: "PreconditionNotMetException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace PreconditionNotMetException {
  export const filterSensitiveLog = (obj: PreconditionNotMetException): any => ({
    ...obj,
  });
}

/**
 * <p>Presto parameters.</p>
 */
export interface PrestoParameters {
  /**
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * <p>Catalog.</p>
   */
  Catalog: string | undefined;

  /**
   * <p>Host.</p>
   */
  Host: string | undefined;
}

export namespace PrestoParameters {
  export const filterSensitiveLog = (obj: PrestoParameters): any => ({
    ...obj,
  });
}

/**
 * <p>A transform operation that projects columns. Operations that come after a projection
 *             can only refer to projected columns.</p>
 */
export interface ProjectOperation {
  /**
   * <p>Projected columns.</p>
   */
  ProjectedColumns: string[] | undefined;
}

export namespace ProjectOperation {
  export const filterSensitiveLog = (obj: ProjectOperation): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a queued dataset SPICE ingestion.</p>
 */
export interface QueueInfo {
  /**
   * <p>The ID of the ongoing ingestion. The queued ingestion is waiting for the ongoing
   *             ingestion to complete.</p>
   */
  QueuedIngestion: string | undefined;

  /**
   * <p>The ID of the queued ingestion.</p>
   */
  WaitingOnIngestion: string | undefined;
}

export namespace QueueInfo {
  export const filterSensitiveLog = (obj: QueueInfo): any => ({
    ...obj,
  });
}

/**
 * <p>The user with the provided name isn't found. This error can happen in any operation
 * 			that requires finding a user based on a provided user name, such as
 * 				<code>DeleteUser</code>, <code>DescribeUser</code>, and so on.</p>
 */
export interface QuickSightUserNotFoundException extends __SmithyException, $MetadataBearer {
  name: "QuickSightUserNotFoundException";
  $fault: "client";
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;

  Message?: string;
}

export namespace QuickSightUserNotFoundException {
  export const filterSensitiveLog = (obj: QuickSightUserNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon RDS parameters.</p>
 */
export interface RdsParameters {
  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Instance ID.</p>
   */
  InstanceId: string | undefined;
}

export namespace RdsParameters {
  export const filterSensitiveLog = (obj: RdsParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if
 *             <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and
 *             <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
 */
export interface RedshiftParameters {
  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
   */
  Host?: string;

  /**
   * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
   */
  Port?: number;

  /**
   * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
   *             provided.</p>
   */
  ClusterId?: string;
}

export namespace RedshiftParameters {
  export const filterSensitiveLog = (obj: RedshiftParameters): any => ({
    ...obj,
  });
}

export interface RegisterUserRequest {
  /**
   * <p>Amazon QuickSight supports several ways of managing the identity of users. This
   * 			parameter accepts two values:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>IAM</code>: A user whose identity maps to an existing IAM user or role.
   * 				</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>QUICKSIGHT</code>: A user whose identity is owned and managed internally by
   * 					Amazon QuickSight. </p>
   * 			         </li>
   *          </ul>
   */
  IdentityType: IdentityType | string | undefined;

  /**
   * <p>You need to use this parameter only when you register one or more users using an assumed
   * 			IAM role. You don't need to provide the session name for other scenarios, for example when
   * 			you are registering an IAM user or an Amazon QuickSight user. You can register multiple
   * 			users using the same IAM role if each user has a different session name. For more
   * 			information on assuming IAM roles, see <a href="https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sts/assume-role.html">
   *                <code>assume-role</code>
   *             </a> in the <i>AWS CLI Reference.</i>
   *          </p>
   */
  SessionName?: string;

  /**
   * <p>The ARN of the IAM user or role that you are registering with Amazon QuickSight. </p>
   */
  IamArn?: string;

  /**
   * <p>The Amazon QuickSight role for the user. The user role can be one of the
   * 			following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>READER</code>: A user who has read-only access to dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and
   * 					dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight
   * 					settings.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>RESTRICTED_READER</code>: This role isn't currently available for
   * 					use.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>RESTRICTED_AUTHOR</code>: This role isn't currently available for
   * 					use.</p>
   * 			         </li>
   *          </ul>
   */
  UserRole: UserRole | string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>(Enterprise edition only) The name of the custom permissions profile that you want to assign to this user.
   *         Currently, custom permissions profile names are assigned to permissions profiles in the
   *         QuickSight console. You use this API to assign the named set of permissions to a
   *         QuickSight user. </p>
   *
   *         <p>Customizing permissions in the QuickSight UI allows you to control a user's access
   *             to the following operations:</p>
   *         <ul>
   *             <li>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p></p>
   *             </li>
   *          </ul>
   *         <p>QuickSight custom permissions are applied through IAM policies. Therefore, they
   *             override the permissions typically granted by assigning QuickSight users to
   *             one of the default security cohorts (admin, author, reader) in QuickSight.</p>
   *         <p>This feature is available only to QuickSight Enterprise edition subscriptions that
   *             use SAML 2.0-Based Federation for Single Sign-On (SSO).</p>
   */
  CustomPermissionsName?: string;

  /**
   * <p>The email address of the user that you want to register.</p>
   */
  Email: string | undefined;

  /**
   * <p>The Amazon QuickSight user name that you want to create for the user you are
   * 			registering.</p>
   */
  UserName?: string;
}

export namespace RegisterUserRequest {
  export const filterSensitiveLog = (obj: RegisterUserRequest): any => ({
    ...obj,
  });
}

export interface RegisterUserResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The URL the user visits to complete registration and provide a password. This is
   * 			returned only for users with an identity type of <code>QUICKSIGHT</code>.</p>
   */
  UserInvitationUrl?: string;

  /**
   * <p>The user name.</p>
   */
  User?: User;
}

export namespace RegisterUserResponse {
  export const filterSensitiveLog = (obj: RegisterUserResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A physical table type for relational data sources.</p>
 */
export interface RelationalTable {
  /**
   * <p>The schema name. This name applies to certain relational database engines.</p>
   */
  Schema?: string;

  /**
   * <p>The name of the relational table.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string | undefined;

  /**
   * <p>The column schema of the table.</p>
   */
  InputColumns: InputColumn[] | undefined;
}

export namespace RelationalTable {
  export const filterSensitiveLog = (obj: RelationalTable): any => ({
    ...obj,
  });
}

/**
 * <p>A transform operation that renames a column.</p>
 */
export interface RenameColumnOperation {
  /**
   * <p>The name of the column to be renamed.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>The new name for the column.</p>
   */
  NewColumnName: string | undefined;
}

export namespace RenameColumnOperation {
  export const filterSensitiveLog = (obj: RenameColumnOperation): any => ({
    ...obj,
  });
}

/**
 * <p>The resource specified already exists. </p>
 */
export interface ResourceExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceExistsException";
  $fault: "client";
  /**
   * <p>The resource type for this request.</p>
   */
  ResourceType?: ExceptionResourceType | string;

  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace ResourceExistsException {
  export const filterSensitiveLog = (obj: ResourceExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more resources can't be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;

  Message?: string;
  /**
   * <p>The resource type for this request.</p>
   */
  ResourceType?: ExceptionResourceType | string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Permission for the resource.</p>
 */
export interface ResourcePermission {
  /**
   * <p>The action to grant or revoke permissions on, for example
   *             <code>"quicksight:DescribeDashboard"</code>.</p>
   */
  Actions: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>The ARN of an Amazon QuickSight user, group, or namespace. (This is most
   *                     common.)</p>
   *             </li>
   *             <li>
   *                 <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
   *                     ARN. Use this option only to share resources (templates) across AWS accounts.
   *                     (This is less common.) </p>
   *             </li>
   *          </ul>
   */
  Principal: string | undefined;
}

export namespace ResourcePermission {
  export const filterSensitiveLog = (obj: ResourcePermission): any => ({
    ...obj,
  });
}

export enum ResourceStatus {
  CREATION_FAILED = "CREATION_FAILED",
  CREATION_IN_PROGRESS = "CREATION_IN_PROGRESS",
  CREATION_SUCCESSFUL = "CREATION_SUCCESSFUL",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL",
}

/**
 * <p>This resource is currently unavailable.</p>
 */
export interface ResourceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ResourceUnavailableException";
  $fault: "server";
  /**
   * <p>The resource type for this request.</p>
   */
  ResourceType?: ExceptionResourceType | string;

  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace ResourceUnavailableException {
  export const filterSensitiveLog = (obj: ResourceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>Information about rows for a data set SPICE ingestion.</p>
 */
export interface RowInfo {
  /**
   * <p>The number of rows that were ingested.</p>
   */
  RowsIngested?: number;

  /**
   * <p>The number of rows that were not ingested.</p>
   */
  RowsDropped?: number;
}

export namespace RowInfo {
  export const filterSensitiveLog = (obj: RowInfo): any => ({
    ...obj,
  });
}

/**
 * <p>The row-level security configuration for the dataset.</p>
 */
export interface RowLevelPermissionDataSet {
  /**
   * <p>The namespace associated with the row-level permissions dataset.</p>
   */
  Namespace?: string;

  /**
   * <p>Permission policy.</p>
   */
  PermissionPolicy: RowLevelPermissionPolicy | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the permission dataset.</p>
   */
  Arn: string | undefined;
}

export namespace RowLevelPermissionDataSet {
  export const filterSensitiveLog = (obj: RowLevelPermissionDataSet): any => ({
    ...obj,
  });
}

export enum RowLevelPermissionPolicy {
  DENY_ACCESS = "DENY_ACCESS",
  GRANT_ACCESS = "GRANT_ACCESS",
}

/**
 * <p>S3 parameters.</p>
 */
export interface S3Parameters {
  /**
   * <p>Location of the Amazon S3 manifest file. This is NULL if the manifest file was
   *             uploaded in the console.</p>
   */
  ManifestFileLocation: ManifestFileLocation | undefined;
}

export namespace S3Parameters {
  export const filterSensitiveLog = (obj: S3Parameters): any => ({
    ...obj,
  });
}

/**
 * <p>A physical table type for as S3 data source.</p>
 */
export interface S3Source {
  /**
   * <p>Information about the format for the S3 source file or files.</p>
   */
  UploadSettings?: UploadSettings;

  /**
   * <p>A physical table type for as S3 data source.</p>
   */
  InputColumns: InputColumn[] | undefined;

  /**
   * <p>The amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string | undefined;
}

export namespace S3Source {
  export const filterSensitiveLog = (obj: S3Source): any => ({
    ...obj,
  });
}

export interface SearchDashboardsRequest {
  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the AWS account that contains the user whose dashboards you're searching for.
   * 		</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters to apply to the search. Currently, you can search only by user name,
   * 			for example, <code>"Filters": [
   * 				{
   * 				"Name": "QUICKSIGHT_USER",
   * 				"Operator": "StringEquals",
   * 				"Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"
   * 				}
   * 				]</code>
   *          </p>
   */
  Filters: DashboardSearchFilter[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace SearchDashboardsRequest {
  export const filterSensitiveLog = (obj: SearchDashboardsRequest): any => ({
    ...obj,
  });
}

export interface SearchDashboardsResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The list of dashboards owned by the user specified in <code>Filters</code> in your request.</p>
   */
  DashboardSummaryList?: DashboardSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace SearchDashboardsResponse {
  export const filterSensitiveLog = (obj: SearchDashboardsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>ServiceNow parameters.</p>
 */
export interface ServiceNowParameters {
  /**
   * <p>URL of the base site.</p>
   */
  SiteBaseUrl: string | undefined;
}

export namespace ServiceNowParameters {
  export const filterSensitiveLog = (obj: ServiceNowParameters): any => ({
    ...obj,
  });
}

/**
 * <p>The number of minutes specified for the lifetime of a session isn't valid. The session
 * 			lifetime must be 15-600 minutes.</p>
 */
export interface SessionLifetimeInMinutesInvalidException extends __SmithyException, $MetadataBearer {
  name: "SessionLifetimeInMinutesInvalidException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace SessionLifetimeInMinutesInvalidException {
  export const filterSensitiveLog = (obj: SessionLifetimeInMinutesInvalidException): any => ({
    ...obj,
  });
}

/**
 * <p>Sheet controls option.</p>
 */
export interface SheetControlsOption {
  /**
   * <p>Visibility state.</p>
   */
  VisibilityState?: DashboardUIState | string;
}

export namespace SheetControlsOption {
  export const filterSensitiveLog = (obj: SheetControlsOption): any => ({
    ...obj,
  });
}

/**
 * <p>The theme display options for sheets. </p>
 */
export interface SheetStyle {
  /**
   * <p>The display options for tiles.</p>
   */
  Tile?: TileStyle;

  /**
   * <p>The layout options for tiles.</p>
   */
  TileLayout?: TileLayoutStyle;
}

export namespace SheetStyle {
  export const filterSensitiveLog = (obj: SheetStyle): any => ({
    ...obj,
  });
}

/**
 * <p>Snowflake parameters.</p>
 */
export interface SnowflakeParameters {
  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Warehouse.</p>
   */
  Warehouse: string | undefined;

  /**
   * <p>Database.</p>
   */
  Database: string | undefined;
}

export namespace SnowflakeParameters {
  export const filterSensitiveLog = (obj: SnowflakeParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Spark parameters.</p>
 */
export interface SparkParameters {
  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;
}

export namespace SparkParameters {
  export const filterSensitiveLog = (obj: SparkParameters): any => ({
    ...obj,
  });
}

/**
 * <p>SQL Server parameters.</p>
 */
export interface SqlServerParameters {
  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;
}

export namespace SqlServerParameters {
  export const filterSensitiveLog = (obj: SqlServerParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your
 *             underlying data source.</p>
 */
export interface SslProperties {
  /**
   * <p>A Boolean option to control whether SSL should be disabled.</p>
   */
  DisableSsl?: boolean;
}

export namespace SslProperties {
  export const filterSensitiveLog = (obj: SslProperties): any => ({
    ...obj,
  });
}

/**
 * <p>String parameter.</p>
 */
export interface StringParameter {
  /**
   * <p>Values.</p>
   */
  Values: string[] | undefined;

  /**
   * <p>A display name for the dataset.</p>
   */
  Name: string | undefined;
}

export namespace StringParameter {
  export const filterSensitiveLog = (obj: StringParameter): any => ({
    ...obj,
  });
}

/**
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
 *             resource.</p>
 */
export interface Tag {
  /**
   * <p>Tag key.</p>
   */
  Key: string | undefined;

  /**
   * <p>Tag value.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>A transform operation that tags a column with additional information.</p>
 */
export interface TagColumnOperation {
  /**
   * <p>The dataset column tag, currently only used for geospatial type tagging. .</p>
   *         <note>
   *             <p>This is not tags for the AWS tagging feature. .</p>
   *         </note>
   */
  Tags: ColumnTag[] | undefined;

  /**
   * <p>The column that this operation acts on.</p>
   */
  ColumnName: string | undefined;
}

export namespace TagColumnOperation {
  export const filterSensitiveLog = (obj: TagColumnOperation): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A template object. A <i>template</i> is an entity in QuickSight that
 *             encapsulates the metadata required to create an analysis and that you can use to create
 *             a dashboard. A template adds a layer of abstraction by using placeholders to replace the
 *             dataset associated with the analysis. You can use templates to create dashboards by
 *             replacing dataset placeholders with datasets that follow the same schema that was used
 *             to create the source analysis and template.</p>
 *         <p>You can share templates across AWS accounts by allowing users in other AWS accounts to
 *             create a template or a dashboard from an existing template.</p>
 */
export interface Template {
  /**
   * <p>Time when this was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  Arn?: string;

  /**
   * <p>The ID for the template. This is unique per AWS Region for each AWS account.</p>
   */
  TemplateId?: string;

  /**
   * <p>The display name of the template.</p>
   */
  Name?: string;

  /**
   * <p>Time when this was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A structure describing the versions of the template.</p>
   */
  Version?: TemplateVersion;
}

export namespace Template {
  export const filterSensitiveLog = (obj: Template): any => ({
    ...obj,
  });
}

/**
 * <p>The template alias.</p>
 */
export interface TemplateAlias {
  /**
   * <p>The version number of the template alias.</p>
   */
  TemplateVersionNumber?: number;

  /**
   * <p>The display name of the template alias.</p>
   */
  AliasName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template alias.</p>
   */
  Arn?: string;
}

export namespace TemplateAlias {
  export const filterSensitiveLog = (obj: TemplateAlias): any => ({
    ...obj,
  });
}

/**
 * <p>List of errors that occurred when the template version creation failed.</p>
 */
export interface TemplateError {
  /**
   * <p>Type of error.</p>
   */
  Type?: TemplateErrorType | string;

  /**
   * <p>Description of the error type.</p>
   */
  Message?: string;
}

export namespace TemplateError {
  export const filterSensitiveLog = (obj: TemplateError): any => ({
    ...obj,
  });
}

export enum TemplateErrorType {
  DATA_SET_NOT_FOUND = "DATA_SET_NOT_FOUND",
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
  SOURCE_NOT_FOUND = "SOURCE_NOT_FOUND",
}

/**
 * <p>The source analysis of the template.</p>
 */
export interface TemplateSourceAnalysis {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>A structure containing information about the dataset references used as placeholders
   *             in the template.</p>
   */
  DataSetReferences: DataSetReference[] | undefined;
}

export namespace TemplateSourceAnalysis {
  export const filterSensitiveLog = (obj: TemplateSourceAnalysis): any => ({
    ...obj,
  });
}

/**
 * <p>The source entity of the template.</p>
 */
export interface TemplateSourceEntity {
  /**
   * <p>The source analysis, if it is based on an analysis.</p>
   */
  SourceAnalysis?: TemplateSourceAnalysis;

  /**
   * <p>The source template, if it is based on an template.</p>
   */
  SourceTemplate?: TemplateSourceTemplate;
}

export namespace TemplateSourceEntity {
  export const filterSensitiveLog = (obj: TemplateSourceEntity): any => ({
    ...obj,
  });
}

/**
 * <p>The source template of the template.</p>
 */
export interface TemplateSourceTemplate {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;
}

export namespace TemplateSourceTemplate {
  export const filterSensitiveLog = (obj: TemplateSourceTemplate): any => ({
    ...obj,
  });
}

/**
 * <p>The template summary.</p>
 */
export interface TemplateSummary {
  /**
   * <p>The last time that this template was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The ID of the template. This ID is unique per AWS Region for each AWS account.</p>
   */
  TemplateId?: string;

  /**
   * <p>A summary of a template.</p>
   */
  Arn?: string;

  /**
   * <p>The last time that this template was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A display name for the template.</p>
   */
  Name?: string;

  /**
   * <p>A structure containing a list of version numbers for the template summary.</p>
   */
  LatestVersionNumber?: number;
}

export namespace TemplateSummary {
  export const filterSensitiveLog = (obj: TemplateSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A version of a template.</p>
 */
export interface TemplateVersion {
  /**
   * <p>The version number of the template.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>Errors associated with the template.</p>
   */
  Errors?: TemplateError[];

  /**
   * <p>The Amazon Resource Name (ARN) of the analysis or template which was used to create
   *             this template.</p>
   */
  SourceEntityArn?: string;

  /**
   * <p>Schema of the dataset identified by the placeholder. The idea is that any dashboard
   *             created from the template should be bound to new datasets matching the same schema
   *             described through this API. .</p>
   */
  DataSetConfigurations?: DataSetConfiguration[];

  /**
   * <p>The description of the template.</p>
   */
  Description?: string;

  /**
   * <p>The time that this template version was created.</p>
   */
  CreatedTime?: Date;
}

export namespace TemplateVersion {
  export const filterSensitiveLog = (obj: TemplateVersion): any => ({
    ...obj,
  });
}

/**
 * <p>The template version.</p>
 */
export interface TemplateVersionSummary {
  /**
   * <p>The version number of the template version.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the template version.</p>
   */
  Arn?: string;

  /**
   * <p>The status of the template version.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The time that this template version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The description of the template version.</p>
   */
  Description?: string;
}

export namespace TemplateVersionSummary {
  export const filterSensitiveLog = (obj: TemplateVersionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Teradata parameters.</p>
 */
export interface TeradataParameters {
  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   */
  Database: string | undefined;
}

export namespace TeradataParameters {
  export const filterSensitiveLog = (obj: TeradataParameters): any => ({
    ...obj,
  });
}

export enum TextQualifier {
  DOUBLE_QUOTE = "DOUBLE_QUOTE",
  SINGLE_QUOTE = "SINGLE_QUOTE",
}

/**
 * <p></p>
 */
export interface Theme {
  /**
   * <p>The name that the user gives to the theme.</p>
   */
  Name?: string;

  /**
   * <p>The type of theme, based on how it was created. Valid values include:
   *             <code>QUICKSIGHT</code> and <code>CUSTOM</code>.</p>
   */
  Type?: ThemeType | string;

  /**
   * <p>The date and time that the theme was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   */
  Arn?: string;

  /**
   * <p>A version of a theme.</p>
   */
  Version?: ThemeVersion;

  /**
   * <p>The date and time that the theme was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The identifier that the user gives to the theme.</p>
   */
  ThemeId?: string;
}

export namespace Theme {
  export const filterSensitiveLog = (obj: Theme): any => ({
    ...obj,
  });
}

/**
 * <p>An alias for a theme.</p>
 */
export interface ThemeAlias {
  /**
   * <p>The version number of the theme alias.</p>
   */
  ThemeVersionNumber?: number;

  /**
   * <p>The display name of the theme alias.</p>
   */
  AliasName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme alias.</p>
   */
  Arn?: string;
}

export namespace ThemeAlias {
  export const filterSensitiveLog = (obj: ThemeAlias): any => ({
    ...obj,
  });
}

/**
 * <p>The theme configuration. This configuration contains all of the display properties for
 *             a theme.</p>
 */
export interface ThemeConfiguration {
  /**
   * <p>Display options related to sheets.</p>
   */
  Sheet?: SheetStyle;

  /**
   * <p>Color properties that apply to chart data colors.</p>
   */
  DataColorPalette?: DataColorPalette;

  /**
   * <p>Color properties that apply to the UI and to charts, excluding the colors that apply
   *             to data. </p>
   */
  UIColorPalette?: UIColorPalette;
}

export namespace ThemeConfiguration {
  export const filterSensitiveLog = (obj: ThemeConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Theme error.</p>
 */
export interface ThemeError {
  /**
   * <p>The error message.</p>
   */
  Message?: string;

  /**
   * <p>The type of error.</p>
   */
  Type?: ThemeErrorType | string;
}

export namespace ThemeError {
  export const filterSensitiveLog = (obj: ThemeError): any => ({
    ...obj,
  });
}

export enum ThemeErrorType {
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
}

/**
 * <p>The theme summary.</p>
 */
export interface ThemeSummary {
  /**
   * <p>the display name for the theme.</p>
   */
  Name?: string;

  /**
   * <p>The date and time that this theme was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The ID of the theme. This ID is unique per AWS Region for each AWS account.</p>
   */
  ThemeId?: string;

  /**
   * <p>The latest version number for the theme. </p>
   */
  LatestVersionNumber?: number;

  /**
   * <p>The last date and time that this theme was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;
}

export namespace ThemeSummary {
  export const filterSensitiveLog = (obj: ThemeSummary): any => ({
    ...obj,
  });
}

export enum ThemeType {
  ALL = "ALL",
  CUSTOM = "CUSTOM",
  QUICKSIGHT = "QUICKSIGHT",
}

/**
 * <p>A version of a theme.</p>
 */
export interface ThemeVersion {
  /**
   * <p>The description of the theme.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The version number of the theme.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The date and time that this theme version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The theme configuration, which contains all the theme display properties.</p>
   */
  Configuration?: ThemeConfiguration;

  /**
   * <p>The status of the theme version.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The Amazon QuickSight-defined ID of the theme that a custom theme inherits from. All
   *             themes initially inherit from a default QuickSight theme.</p>
   */
  BaseThemeId?: string;

  /**
   * <p>Errors associated with the theme.</p>
   */
  Errors?: ThemeError[];
}

export namespace ThemeVersion {
  export const filterSensitiveLog = (obj: ThemeVersion): any => ({
    ...obj,
  });
}

/**
 * <p>The theme version.</p>
 */
export interface ThemeVersionSummary {
  /**
   * <p>The version number of the theme version.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The status of the theme version.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The date and time that this theme version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The description of the theme version.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme version.</p>
   */
  Arn?: string;
}

export namespace ThemeVersionSummary {
  export const filterSensitiveLog = (obj: ThemeVersionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Access is throttled.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;

  Message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>The display options for the layout of tiles on a sheet.</p>
 */
export interface TileLayoutStyle {
  /**
   * <p>The margin settings that apply around the outside edge of sheets.</p>
   */
  Margin?: MarginStyle;

  /**
   * <p>The gutter settings that apply between tiles. </p>
   */
  Gutter?: GutterStyle;
}

export namespace TileLayoutStyle {
  export const filterSensitiveLog = (obj: TileLayoutStyle): any => ({
    ...obj,
  });
}

/**
 * <p>Display options related to tiles on a sheet.</p>
 */
export interface TileStyle {
  /**
   * <p>The border around a tile.</p>
   */
  Border?: BorderStyle;
}

export namespace TileStyle {
  export const filterSensitiveLog = (obj: TileStyle): any => ({
    ...obj,
  });
}

/**
 * <p>A data transformation on a logical table. This is a variant type structure. For this
 *             structure to be valid, only one of the attributes can be non-null.</p>
 */
export interface TransformOperation {
  /**
   * <p>An operation that renames a column.</p>
   */
  RenameColumnOperation?: RenameColumnOperation;

  /**
   * <p>A transform operation that casts a column to a different type.</p>
   */
  CastColumnTypeOperation?: CastColumnTypeOperation;

  /**
   * <p>An operation that tags a column with additional information.</p>
   */
  TagColumnOperation?: TagColumnOperation;

  /**
   * <p>An operation that projects columns. Operations that come after a projection can only
   *             refer to projected columns.</p>
   */
  ProjectOperation?: ProjectOperation;

  /**
   * <p>An operation that creates calculated columns. Columns created in one such operation
   *             form a lexical closure.</p>
   */
  CreateColumnsOperation?: CreateColumnsOperation;

  /**
   * <p>An operation that filters rows based on some condition.</p>
   */
  FilterOperation?: FilterOperation;
}

export namespace TransformOperation {
  export const filterSensitiveLog = (obj: TransformOperation): any => ({
    ...obj,
  });
}

/**
 * <p>Twitter parameters.</p>
 */
export interface TwitterParameters {
  /**
   * <p>Maximum number of rows to query Twitter.</p>
   */
  MaxRows: number | undefined;

  /**
   * <p>Twitter query string.</p>
   */
  Query: string | undefined;
}

export namespace TwitterParameters {
  export const filterSensitiveLog = (obj: TwitterParameters): any => ({
    ...obj,
  });
}

/**
 * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
 *             description is a hexidecimal color code that consists of six alphanumerical characters,
 *             prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using
 *             Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide.</i>
 *         </p>
 */
export interface UIColorPalette {
  /**
   * <p>This color that applies to warning and informational messages.</p>
   */
  Warning?: string;

  /**
   * <p>The foreground color that applies to any sheet title, sheet control text, or UI that
   *             appears over the secondary background.</p>
   */
  SecondaryForeground?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             measure color.</p>
   */
  MeasureForeground?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             dimension color.</p>
   */
  DimensionForeground?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             error color.</p>
   */
  DangerForeground?: string;

  /**
   * <p>The color that applies to the names of fields that are identified as
   *             dimensions.</p>
   */
  Dimension?: string;

  /**
   * <p>The color that applies to success messages, for example the check mark for a
   *             successful download.</p>
   */
  Success?: string;

  /**
   * <p>The color of text and other foreground elements that appear over the primary
   *             background regions, such as grid lines, borders, table banding, icons, and so on.</p>
   */
  PrimaryForeground?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             accent color.</p>
   */
  AccentForeground?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             success color.</p>
   */
  SuccessForeground?: string;

  /**
   * <p>This color is that applies to selected states and buttons.</p>
   */
  Accent?: string;

  /**
   * <p>The color that applies to error messages.</p>
   */
  Danger?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             warning color.</p>
   */
  WarningForeground?: string;

  /**
   * <p>The background color that applies to visuals and other high emphasis UI.</p>
   */
  PrimaryBackground?: string;

  /**
   * <p>The color that applies to the names of fields that are identified as measures.</p>
   */
  Measure?: string;

  /**
   * <p>The background color that applies to the sheet background and sheet controls.</p>
   */
  SecondaryBackground?: string;
}

export namespace UIColorPalette {
  export const filterSensitiveLog = (obj: UIColorPalette): any => ({
    ...obj,
  });
}

/**
 * <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 */
export interface UnsupportedUserEditionException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedUserEditionException";
  $fault: "client";
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;

  Message?: string;
}

export namespace UnsupportedUserEditionException {
  export const filterSensitiveLog = (obj: UnsupportedUserEditionException): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The keys of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   */
  ResourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateAccountCustomizationRequest {
  /**
   * <p>The ID for the AWS account that you want to update QuickSight customizations for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace associated with the customization that you're updating.</p>
   */
  Namespace?: string;

  /**
   * <p>The customizations you want to update in QuickSight.</p>
   */
  AccountCustomization: AccountCustomization | undefined;
}

export namespace UpdateAccountCustomizationRequest {
  export const filterSensitiveLog = (obj: UpdateAccountCustomizationRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountCustomizationResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The customizations associated with your QuickSight subscription.</p>
   */
  AccountCustomization?: AccountCustomization;

  /**
   * <p>The ID for the AWS account that you want to update QuickSight customizations for.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The namespace associated with the customization that you're updating.</p>
   */
  Namespace?: string;
}

export namespace UpdateAccountCustomizationResponse {
  export const filterSensitiveLog = (obj: UpdateAccountCustomizationResponse): any => ({
    ...obj,
  });
}

export interface UpdateAccountSettingsRequest {
  /**
   * <p>The ID for the AWS account that contains the QuickSight namespaces that you want to list.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>Email address used to send notifications regarding administration of QuickSight.</p>
   */
  NotificationEmail?: string;

  /**
   * <p>The default namespace for this AWS Account. Currently, the default is <code>default</code>. IAM users who register for the first time with QuickSight provide an email that becomes associated with the default namespace.</p>
   */
  DefaultNamespace: string | undefined;
}

export namespace UpdateAccountSettingsRequest {
  export const filterSensitiveLog = (obj: UpdateAccountSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountSettingsResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateAccountSettingsResponse {
  export const filterSensitiveLog = (obj: UpdateAccountSettingsResponse): any => ({
    ...obj,
  });
}

export interface UpdateDashboardPermissionsRequest {
  /**
   * <p>The ID of the AWS account that contains the dashboard whose permissions you're
   * 			updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The permissions that you want to grant on this resource.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>The permissions that you want to revoke from this resource.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

export namespace UpdateDashboardPermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateDashboardPermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateDashboardPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>Information about the permissions on the dashboard.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateDashboardPermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateDashboardPermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateDashboardPublishedVersionRequest {
  /**
   * <p>The version number of the dashboard.</p>
   */
  VersionNumber: number | undefined;

  /**
   * <p>The ID of the AWS account that contains the dashboard that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;
}

export namespace UpdateDashboardPublishedVersionRequest {
  export const filterSensitiveLog = (obj: UpdateDashboardPublishedVersionRequest): any => ({
    ...obj,
  });
}

export interface UpdateDashboardPublishedVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateDashboardPublishedVersionResponse {
  export const filterSensitiveLog = (obj: UpdateDashboardPublishedVersionResponse): any => ({
    ...obj,
  });
}

export interface UpdateDashboardRequest {
  /**
   * <p>The entity that you are using as a source when you update the dashboard. In
   * 			<code>SourceEntity</code>, you specify the type of object you're using as source. You
   * 			can only update a dashboard from a template, so you use a <code>SourceTemplate</code>
   * 			entity. If you need to update a dashboard from an analysis, first convert the analysis
   * 			to a template by using the <a>CreateTemplate</a> API operation. For
   * 			<code>SourceTemplate</code>, specify the Amazon Resource Name (ARN) of the source
   * 			template. The <code>SourceTemplate</code> ARN can contain any AWS Account and any QuickSight-supported
   * 			AWS Region. </p>
   * 		       <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code>
   * 			to list the replacement datasets for the placeholders listed
   * 			in the original. The schema in each dataset must match its placeholder. </p>
   */
  SourceEntity: DashboardSourceEntity | undefined;

  /**
   * <p>Options for publishing the dashboard when you create it:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>AvailabilityStatus</code> for <code>AdHocFilteringOption</code> - This status can be
   * 					either <code>ENABLED</code> or <code>DISABLED</code>. When this is set to
   * 						<code>DISABLED</code>, QuickSight disables the left filter pane on the
   * 					published dashboard, which can be used for ad hoc (one-time) filtering. This
   * 					option is <code>ENABLED</code> by default. </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>AvailabilityStatus</code> for <code>ExportToCSVOption</code> - This status can be
   * 					either <code>ENABLED</code> or <code>DISABLED</code>. The visual option to
   * 					export data to .csv format isn't enabled when this is set to
   * 						<code>DISABLED</code>. This option is <code>ENABLED</code> by default. </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>VisibilityState</code> for <code>SheetControlsOption</code> - This visibility state
   * 					can be either <code>COLLAPSED</code> or <code>EXPANDED</code>. This option is
   * 					<code>COLLAPSED</code> by default. </p>
   * 			         </li>
   *          </ul>
   */
  DashboardPublishOptions?: DashboardPublishOptions;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value
   * 			for this field, it overrides the value that was originally associated with the entity. The theme ARN must
   * 			exist in the same AWS account where you create the dashboard.</p>
   */
  ThemeArn?: string;

  /**
   * <p>A structure that contains the parameters of the dashboard. These are parameter overrides for
   * 			a dashboard. A dashboard can have any type of parameters, and some parameters might
   * 			accept multiple values.</p>
   */
  Parameters?: _Parameters;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>A description for the first version of the dashboard being created.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The ID of the AWS account that contains the dashboard that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The display name of the dashboard.</p>
   */
  Name: string | undefined;
}

export namespace UpdateDashboardRequest {
  export const filterSensitiveLog = (obj: UpdateDashboardRequest): any => ({
    ...obj,
  });
}

export interface UpdateDashboardResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN of the dashboard, including the version number.</p>
   */
  VersionArn?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The creation status of the request.</p>
   */
  CreationStatus?: ResourceStatus | string;
}

export namespace UpdateDashboardResponse {
  export const filterSensitiveLog = (obj: UpdateDashboardResponse): any => ({
    ...obj,
  });
}

export interface UpdateDataSetPermissionsRequest {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset whose permissions you want to update. This ID is unique per AWS
   * 			Region for each AWS account.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The resource permissions that you want to grant to the dataset.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>The resource permissions that you want to revoke from the dataset.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

export namespace UpdateDataSetPermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateDataSetPermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateDataSetPermissionsResponse {
  /**
   * <p>The ID for the dataset whose permissions you want to update. This ID is unique per AWS
   * 			Region for each AWS account.</p>
   */
  DataSetId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DataSetArn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateDataSetPermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateDataSetPermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateDataSetRequest {
  /**
   * <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode: DataSetImportMode | string | undefined;

  /**
   * <p>The row-level security configuration for the data you want to create.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap: { [key: string]: PhysicalTable } | undefined;

  /**
   * <p>The display name for the dataset.</p>
   */
  Name: string | undefined;

  /**
   * <p>Configures the combination and transformation of the data from the physical tables.</p>
   */
  LogicalTableMap?: { [key: string]: LogicalTable };

  /**
   * <p>The ID for the dataset that you want to update. This ID is unique per AWS Region for each
   * 			AWS account.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace UpdateDataSetRequest {
  export const filterSensitiveLog = (obj: UpdateDataSetRequest): any => ({
    ...obj,
  });
}

export interface UpdateDataSetResponse {
  /**
   * <p>The ID of the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSetId?: string;

  /**
   * <p>The ARN for the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionArn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateDataSetResponse {
  export const filterSensitiveLog = (obj: UpdateDataSetResponse): any => ({
    ...obj,
  });
}

export interface UpdateDataSourcePermissionsRequest {
  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account. </p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>A list of resource permissions that you want to grant on the data source.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A list of resource permissions that you want to revoke on the data source.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

export namespace UpdateDataSourcePermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateDataSourcePermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateDataSourcePermissionsResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn?: string;
}

export namespace UpdateDataSourcePermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateDataSourcePermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateDataSourceRequest {
  /**
   * <p>A display name for the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The credentials that QuickSight that uses to connect to your underlying source. Currently,
   * 			only credentials based on user name and password are supported.</p>
   */
  Credentials?: DataSourceCredentials;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account. </p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The parameters that QuickSight uses to connect to your underlying source.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying
   * 			source.</p>
   */
  SslProperties?: SslProperties;

  /**
   * <p>Use this parameter only when you want QuickSight to use a VPC connection when connecting to
   * 			your underlying source.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;
}

export namespace UpdateDataSourceRequest {
  export const filterSensitiveLog = (obj: UpdateDataSourceRequest): any => ({
    ...obj,
    ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
  });
}

export interface UpdateDataSourceResponse {
  /**
   * <p>The update status of the data source's last update.</p>
   */
  UpdateStatus?: ResourceStatus | string;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;
}

export namespace UpdateDataSourceResponse {
  export const filterSensitiveLog = (obj: UpdateDataSourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateGroupRequest {
  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The description for the group that you want to update.</p>
   */
  Description?: string;

  /**
   * <p>The name of the group that you want to update.</p>
   */
  GroupName: string | undefined;
}

export namespace UpdateGroupRequest {
  export const filterSensitiveLog = (obj: UpdateGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateGroupResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The name of the group.</p>
   */
  Group?: Group;
}

export namespace UpdateGroupResponse {
  export const filterSensitiveLog = (obj: UpdateGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateIAMPolicyAssignmentRequest {
  /**
   * <p>The ARN for the IAM policy to apply to the QuickSight users and groups
   * 			specified in this assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when creating the data
   * 				source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the
   * 				data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>The name of the assignment. This name must be unique within an AWS account.</p>
   */
  AssignmentName: string | undefined;

  /**
   * <p>The QuickSight users, groups, or both that you want to assign the policy to.</p>
   */
  Identities?: { [key: string]: string[] };

  /**
   * <p>The ID of the AWS account that contains the IAM policy assignment.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace of the assignment.</p>
   */
  Namespace: string | undefined;
}

export namespace UpdateIAMPolicyAssignmentRequest {
  export const filterSensitiveLog = (obj: UpdateIAMPolicyAssignmentRequest): any => ({
    ...obj,
  });
}

export interface UpdateIAMPolicyAssignmentResponse {
  /**
   * <p>The ARN for the IAM policy applied to the QuickSight users and groups specified in this
   * 			assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when creating the data
   * 				source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the
   * 				data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>The name of the assignment. </p>
   */
  AssignmentName?: string;

  /**
   * <p>The QuickSight users, groups, or both that the IAM policy is assigned to.</p>
   */
  Identities?: { [key: string]: string[] };

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ID of the assignment.</p>
   */
  AssignmentId?: string;
}

export namespace UpdateIAMPolicyAssignmentResponse {
  export const filterSensitiveLog = (obj: UpdateIAMPolicyAssignmentResponse): any => ({
    ...obj,
  });
}

export interface UpdateTemplateAliasRequest {
  /**
   * <p>The ID of the AWS account that contains the template alias that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The version number of the template.</p>
   */
  TemplateVersionNumber: number | undefined;

  /**
   * <p>The alias of the template that you want to update. If you name a specific alias, you update
   * 			the version that the alias points to. You can specify the latest version of the template
   * 			by providing the keyword <code>$LATEST</code> in the <code>AliasName</code> parameter.
   * 			The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;
}

export namespace UpdateTemplateAliasRequest {
  export const filterSensitiveLog = (obj: UpdateTemplateAliasRequest): any => ({
    ...obj,
  });
}

export interface UpdateTemplateAliasResponse {
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The template alias.</p>
   */
  TemplateAlias?: TemplateAlias;
}

export namespace UpdateTemplateAliasResponse {
  export const filterSensitiveLog = (obj: UpdateTemplateAliasResponse): any => ({
    ...obj,
  });
}

export interface UpdateTemplatePermissionsRequest {
  /**
   * <p>A list of resource permissions to be revoked from the template. </p>
   */
  RevokePermissions?: ResourcePermission[];

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>A list of resource permissions to be granted on the template. </p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>The ID of the AWS account that contains the template.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace UpdateTemplatePermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateTemplatePermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateTemplatePermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  TemplateArn?: string;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>A list of resource permissions to be set on the template.</p>
   */
  Permissions?: ResourcePermission[];
}

export namespace UpdateTemplatePermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateTemplatePermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateTemplateRequest {
  /**
   * <p>The entity that you are using as a source when you update the template. In
   * 			<code>SourceEntity</code>, you specify the type of object you're using as source:
   * 			<code>SourceTemplate</code> for a template or <code>SourceAnalysis</code> for an
   * 			analysis. Both of these require an Amazon Resource Name (ARN). For
   * 			<code>SourceTemplate</code>, specify the ARN of the source template. For
   * 			<code>SourceAnalysis</code>, specify the ARN of the source analysis. The <code>SourceTemplate</code>
   * 			ARN can contain any AWS Account and any QuickSight-supported AWS Region. </p>
   * 		       <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> or
   * 			<code>SourceAnalysis</code> to list the replacement datasets for the placeholders listed
   * 			in the original. The schema in each dataset must match its placeholder. </p>
   */
  SourceEntity: TemplateSourceEntity | undefined;

  /**
   * <p>A description of the current template version that is being updated. Every time you call
   * 				<code>UpdateTemplate</code>, you create a new version of the template. Each version
   * 			of the template maintains a description of the version in the
   * 				<code>VersionDescription</code> field.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the template that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name for the template.</p>
   */
  Name?: string;
}

export namespace UpdateTemplateRequest {
  export const filterSensitiveLog = (obj: UpdateTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdateTemplateResponse {
  /**
   * <p>The creation status of the template.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the template.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN for the template, including the version information of the first version.</p>
   */
  VersionArn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;
}

export namespace UpdateTemplateResponse {
  export const filterSensitiveLog = (obj: UpdateTemplateResponse): any => ({
    ...obj,
  });
}

export interface UpdateThemeAliasRequest {
  /**
   * <p>The version number of the theme that the alias should reference.</p>
   */
  ThemeVersionNumber: number | undefined;

  /**
   * <p>The name of the theme alias that you want to update.</p>
   */
  AliasName: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the theme alias that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;
}

export namespace UpdateThemeAliasRequest {
  export const filterSensitiveLog = (obj: UpdateThemeAliasRequest): any => ({
    ...obj,
  });
}

export interface UpdateThemeAliasResponse {
  /**
   * <p>Information about the theme alias.</p>
   */
  ThemeAlias?: ThemeAlias;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateThemeAliasResponse {
  export const filterSensitiveLog = (obj: UpdateThemeAliasResponse): any => ({
    ...obj,
  });
}

export interface UpdateThemePermissionsRequest {
  /**
   * <p>A list of resource permissions to be revoked from the theme.</p>
   */
  RevokePermissions?: ResourcePermission[];

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the theme.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A list of resource permissions to be granted for the theme.</p>
   */
  GrantPermissions?: ResourcePermission[];
}

export namespace UpdateThemePermissionsRequest {
  export const filterSensitiveLog = (obj: UpdateThemePermissionsRequest): any => ({
    ...obj,
  });
}

export interface UpdateThemePermissionsResponse {
  /**
   * <p>The resulting list of resource permissions for the theme.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   */
  ThemeArn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateThemePermissionsResponse {
  export const filterSensitiveLog = (obj: UpdateThemePermissionsResponse): any => ({
    ...obj,
  });
}

export interface UpdateThemeRequest {
  /**
   * <p>The theme configuration, which contains the theme display properties.</p>
   */
  Configuration?: ThemeConfiguration;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The theme ID, defined by Amazon QuickSight, that a custom theme inherits from.
   * 		All themes initially inherit from a default QuickSight theme.</p>
   */
  BaseThemeId: string | undefined;

  /**
   * <p>A description of the theme version that you're updating Every time that you call
   * 				<code>UpdateTheme</code>, you create a new version of the theme. Each version of the
   * 			theme maintains a description of the version in <code>VersionDescription</code>.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The name for the theme.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the AWS account that contains the theme that you're updating.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace UpdateThemeRequest {
  export const filterSensitiveLog = (obj: UpdateThemeRequest): any => ({
    ...obj,
  });
}

export interface UpdateThemeResponse {
  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the new version of the theme.</p>
   */
  VersionArn?: string;

  /**
   * <p>The creation status of the theme.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the theme.</p>
   */
  Arn?: string;
}

export namespace UpdateThemeResponse {
  export const filterSensitiveLog = (obj: UpdateThemeResponse): any => ({
    ...obj,
  });
}

export interface UpdateUserRequest {
  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the custom permissions profile that you want to assign to this user.
   *         Currently, custom permissions profile names are assigned to permissions profiles in the
   *         QuickSight console. You use this API to assign the named set of permissions to a
   *         QuickSight user. </p>
   */
  CustomPermissionsName?: string;

  /**
   * <p>The email address of the user that you want to update.</p>
   */
  Email: string | undefined;

  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon QuickSight user name that you want to update.</p>
   */
  UserName: string | undefined;

  /**
   * <p>A flag that you use to indicate that you want to remove all custom permissions
   *             from this user. Using this parameter resets the user to the state
   *             it was in before a custom permissions profile was applied. This parameter defaults to
   *             NULL and it doesn't accept any other value.</p>
   */
  UnapplyCustomPermissions?: boolean;

  /**
   * <p>The Amazon QuickSight role of the user. The user role can be one of the
   * 			following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>READER</code>: A user who has read-only access to dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and
   * 					dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight
   * 					settings.</p>
   * 			         </li>
   *          </ul>
   */
  Role: UserRole | string | undefined;
}

export namespace UpdateUserRequest {
  export const filterSensitiveLog = (obj: UpdateUserRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserResponse {
  /**
   * <p>The Amazon QuickSight user.</p>
   */
  User?: User;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateUserResponse {
  export const filterSensitiveLog = (obj: UpdateUserResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the format for a source file or files.</p>
 */
export interface UploadSettings {
  /**
   * <p>File format.</p>
   */
  Format?: FileFormat | string;

  /**
   * <p>A row number to start reading data from.</p>
   */
  StartFromRow?: number;

  /**
   * <p>Text qualifier.</p>
   */
  TextQualifier?: TextQualifier | string;

  /**
   * <p>The delimiter between values in the file.</p>
   */
  Delimiter?: string;

  /**
   * <p>Whether the file has a header row, or the files each have a header row.</p>
   */
  ContainsHeader?: boolean;
}

export namespace UploadSettings {
  export const filterSensitiveLog = (obj: UploadSettings): any => ({
    ...obj,
  });
}

/**
 * <p>A registered user of Amazon QuickSight. Currently, an Amazon QuickSight subscription
 *             can't contain more than 20 million users.</p>
 */
export interface User {
  /**
   * <p>The custom permissions profile associated with this user.</p>
   */
  CustomPermissionsName?: string;

  /**
   * <p>The user's user name.</p>
   */
  UserName?: string;

  /**
   * <p>The Amazon QuickSight role for the user. The user role can be one of the
   *             following:.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>READER</code>: A user who has read-only access to dashboards.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AUTHOR</code>: A user who can create data sources, datasets, analyses,
   *                     and dashboards.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ADMIN</code>: A user who is an author, who can also manage Amazon
   *                     QuickSight settings.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RESTRICTED_READER</code>: This role isn't currently available for
   *                     use.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RESTRICTED_AUTHOR</code>: This role isn't currently available for
   *                     use.</p>
   *             </li>
   *          </ul>
   */
  Role?: UserRole | string;

  /**
   * <p>The active status of user. When you create an Amazon QuickSight user that’s not an IAM
   *             user or an Active Directory user, that user is inactive until they sign in and provide a
   *             password.</p>
   */
  Active?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) for the user.</p>
   */
  Arn?: string;

  /**
   * <p>The principal ID of the user.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The user's email address.</p>
   */
  Email?: string;

  /**
   * <p>The type of identity authentication used by the user.</p>
   */
  IdentityType?: IdentityType | string;
}

export namespace User {
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj,
  });
}

export enum UserRole {
  ADMIN = "ADMIN",
  AUTHOR = "AUTHOR",
  READER = "READER",
  RESTRICTED_AUTHOR = "RESTRICTED_AUTHOR",
  RESTRICTED_READER = "RESTRICTED_READER",
}

/**
 * <p>VPC connection properties.</p>
 */
export interface VpcConnectionProperties {
  /**
   * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
   */
  VpcConnectionArn: string | undefined;
}

export namespace VpcConnectionProperties {
  export const filterSensitiveLog = (obj: VpcConnectionProperties): any => ({
    ...obj,
  });
}
