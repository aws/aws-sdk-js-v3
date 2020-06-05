import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct access keys.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessDeniedException =>
    __isa(o, "AccessDeniedException");
}

/**
 * <p>The active AWS Identity and Access Management (IAM) policy assignment.</p>
 */
export interface ActiveIAMPolicyAssignment {
  __type?: "ActiveIAMPolicyAssignment";
  /**
   * <p>A name for the IAM policy assignment.</p>
   */
  AssignmentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  PolicyArn?: string;
}

export namespace ActiveIAMPolicyAssignment {
  export const filterSensitiveLog = (obj: ActiveIAMPolicyAssignment): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActiveIAMPolicyAssignment =>
    __isa(o, "ActiveIAMPolicyAssignment");
}

/**
 * <p>Ad hoc (one-time) filtering option.</p>
 */
export interface AdHocFilteringOption {
  __type?: "AdHocFilteringOption";
  /**
   * <p>Availability status.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

export namespace AdHocFilteringOption {
  export const filterSensitiveLog = (obj: AdHocFilteringOption): any => ({
    ...obj
  });
  export const isa = (o: any): o is AdHocFilteringOption =>
    __isa(o, "AdHocFilteringOption");
}

/**
 * <p>Amazon Elasticsearch Service parameters.</p>
 */
export interface AmazonElasticsearchParameters {
  __type?: "AmazonElasticsearchParameters";
  /**
   * <p>The Amazon Elasticsearch Service domain.</p>
   */
  Domain: string | undefined;
}

export namespace AmazonElasticsearchParameters {
  export const filterSensitiveLog = (
    obj: AmazonElasticsearchParameters
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AmazonElasticsearchParameters =>
    __isa(o, "AmazonElasticsearchParameters");
}

export enum AssignmentStatus {
  DISABLED = "DISABLED",
  DRAFT = "DRAFT",
  ENABLED = "ENABLED"
}

/**
 * <p>Amazon Athena parameters.</p>
 */
export interface AthenaParameters {
  __type?: "AthenaParameters";
  /**
   * <p>The workgroup that Amazon Athena uses.</p>
   */
  WorkGroup?: string;
}

export namespace AthenaParameters {
  export const filterSensitiveLog = (obj: AthenaParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is AthenaParameters =>
    __isa(o, "AthenaParameters");
}

/**
 * <p>Amazon Aurora parameters.</p>
 */
export interface AuroraParameters {
  __type?: "AuroraParameters";
  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;
}

export namespace AuroraParameters {
  export const filterSensitiveLog = (obj: AuroraParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuroraParameters =>
    __isa(o, "AuroraParameters");
}

/**
 * <p>Amazon Aurora with PostgreSQL compatibility parameters.</p>
 */
export interface AuroraPostgreSqlParameters {
  __type?: "AuroraPostgreSqlParameters";
  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;
}

export namespace AuroraPostgreSqlParameters {
  export const filterSensitiveLog = (obj: AuroraPostgreSqlParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuroraPostgreSqlParameters =>
    __isa(o, "AuroraPostgreSqlParameters");
}

/**
 * <p>AWS IoT Analytics parameters.</p>
 */
export interface AwsIotAnalyticsParameters {
  __type?: "AwsIotAnalyticsParameters";
  /**
   * <p>Dataset name.</p>
   */
  DataSetName: string | undefined;
}

export namespace AwsIotAnalyticsParameters {
  export const filterSensitiveLog = (obj: AwsIotAnalyticsParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsIotAnalyticsParameters =>
    __isa(o, "AwsIotAnalyticsParameters");
}

/**
 * <p>A calculated column for a dataset.</p>
 */
export interface CalculatedColumn {
  __type?: "CalculatedColumn";
  /**
   * <p>A unique ID to identify a calculated column. During a dataset update, if the column ID of a
   * 			calculated column matches that of an existing calculated column, Amazon QuickSight
   * 			preserves the existing calculated column.</p>
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
    ...obj
  });
  export const isa = (o: any): o is CalculatedColumn =>
    __isa(o, "CalculatedColumn");
}

export interface CancelIngestionRequest {
  __type?: "CancelIngestionRequest";
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>An ID for the ingestion.</p>
   */
  IngestionId: string | undefined;
}

export namespace CancelIngestionRequest {
  export const filterSensitiveLog = (obj: CancelIngestionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelIngestionRequest =>
    __isa(o, "CancelIngestionRequest");
}

export interface CancelIngestionResponse {
  __type?: "CancelIngestionResponse";
  /**
   * <p>The Amazon Resource Name (ARN) for the data ingestion.</p>
   */
  Arn?: string;

  /**
   * <p>An ID for the ingestion.</p>
   */
  IngestionId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace CancelIngestionResponse {
  export const filterSensitiveLog = (obj: CancelIngestionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelIngestionResponse =>
    __isa(o, "CancelIngestionResponse");
}

/**
 * <p>A transform operation that casts a column to a different type.</p>
 */
export interface CastColumnTypeOperation {
  __type?: "CastColumnTypeOperation";
  /**
   * <p>Column name.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>When casting a column from string to datetime type, you can supply a string in a format
   * 			supported by Amazon QuickSight to denote the source data format.</p>
   */
  Format?: string;

  /**
   * <p>New column data type.</p>
   */
  NewColumnType: ColumnDataType | string | undefined;
}

export namespace CastColumnTypeOperation {
  export const filterSensitiveLog = (obj: CastColumnTypeOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is CastColumnTypeOperation =>
    __isa(o, "CastColumnTypeOperation");
}

export enum ColumnDataType {
  DATETIME = "DATETIME",
  DECIMAL = "DECIMAL",
  INTEGER = "INTEGER",
  STRING = "STRING"
}

/**
 * <p>Groupings of columns that work together in certain Amazon QuickSight features. This is a
 * 			variant type structure. For this structure to be valid, only one of the attributes can
 * 			be non-null.</p>
 */
export interface ColumnGroup {
  __type?: "ColumnGroup";
  /**
   * <p>Geospatial column group that denotes a hierarchy.</p>
   */
  GeoSpatialColumnGroup?: GeoSpatialColumnGroup;
}

export namespace ColumnGroup {
  export const filterSensitiveLog = (obj: ColumnGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is ColumnGroup => __isa(o, "ColumnGroup");
}

/**
 * <p>A structure describing the name, data type, and geographic role of the columns.</p>
 */
export interface ColumnGroupColumnSchema {
  __type?: "ColumnGroupColumnSchema";
  /**
   * <p>The name of the column group's column schema.</p>
   */
  Name?: string;
}

export namespace ColumnGroupColumnSchema {
  export const filterSensitiveLog = (obj: ColumnGroupColumnSchema): any => ({
    ...obj
  });
  export const isa = (o: any): o is ColumnGroupColumnSchema =>
    __isa(o, "ColumnGroupColumnSchema");
}

/**
 * <p>The column group schema.</p>
 */
export interface ColumnGroupSchema {
  __type?: "ColumnGroupSchema";
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
    ...obj
  });
  export const isa = (o: any): o is ColumnGroupSchema =>
    __isa(o, "ColumnGroupSchema");
}

/**
 * <p>The column schema.</p>
 */
export interface ColumnSchema {
  __type?: "ColumnSchema";
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
    ...obj
  });
  export const isa = (o: any): o is ColumnSchema => __isa(o, "ColumnSchema");
}

/**
 * <p>A tag for a column in a <code>TagColumnOperation</code> structure. This is a variant type
 * 			structure. For this structure to be valid, only one of the attributes can be
 * 			non-null.</p>
 */
export interface ColumnTag {
  __type?: "ColumnTag";
  /**
   * <p>A geospatial role for a column.</p>
   */
  ColumnGeographicRole?: GeoSpatialDataRole | string;
}

export namespace ColumnTag {
  export const filterSensitiveLog = (obj: ColumnTag): any => ({
    ...obj
  });
  export const isa = (o: any): o is ColumnTag => __isa(o, "ColumnTag");
}

/**
 * <p>A resource is already in a state that indicates an action is happening that must complete
 * 			before a new update can be applied.</p>
 */
export interface ConcurrentUpdatingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentUpdatingException";
  $fault: "server";
  Message?: string;
  RequestId?: string;
}

export namespace ConcurrentUpdatingException {
  export const filterSensitiveLog = (
    obj: ConcurrentUpdatingException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConcurrentUpdatingException =>
    __isa(o, "ConcurrentUpdatingException");
}

/**
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictException =>
    __isa(o, "ConflictException");
}

/**
 * <p>A transform operation that creates calculated columns. Columns created in one such
 * 			operation form a lexical closure.</p>
 */
export interface CreateColumnsOperation {
  __type?: "CreateColumnsOperation";
  /**
   * <p>Calculated columns to create.</p>
   */
  Columns: CalculatedColumn[] | undefined;
}

export namespace CreateColumnsOperation {
  export const filterSensitiveLog = (obj: CreateColumnsOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateColumnsOperation =>
    __isa(o, "CreateColumnsOperation");
}

export interface CreateDashboardRequest {
  __type?: "CreateDashboardRequest";
  /**
   * <p>The ID of the AWS account where you want to create the dashboard.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   */
  DashboardId: string | undefined;

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
   * 					can be either <code>COLLAPSED</code> or <code>EXPANDED</code>. The sheet
   * 					controls pane is collapsed by default when set to true. This option is
   * 						<code>COLLAPSED</code> by default. </p>
   * 			         </li>
   *          </ul>
   */
  DashboardPublishOptions?: DashboardPublishOptions;

  /**
   * <p>The display name of the dashboard.</p>
   */
  Name: string | undefined;

  /**
   * <p>A structure that contains the parameters of the dashboard. These are parameter overrides for
   * 			a dashboard. A dashboard can have any type of parameters, and some parameters might
   * 			accept multiple values. You can use the dashboard permissions structure described following to override two string
   * 			parameters that accept multiple values.
   *
   * 		</p>
   */
  Parameters?: _Parameters;

  /**
   * <p>A structure that contains the permissions of the dashboard. You can use this structure for
   * 			granting permissions with principal and action information.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The source entity from which the dashboard is created. The source entity accepts the Amazon
   * 			Resource Name (ARN) of the source template or analysis and also references the
   * 			replacement datasets for the placeholders set when creating the template. The
   * 			replacement datasets need to follow the same schema as the datasets for which
   * 			placeholders were created when creating the template. </p>
   * 		       <p>If you are creating a dashboard from a source entity in a different AWS account, use the
   * 			ARN of the source template.</p>
   */
  SourceEntity: DashboardSourceEntity | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dashboard.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A description for the first version of the dashboard being created.</p>
   */
  VersionDescription?: string;
}

export namespace CreateDashboardRequest {
  export const filterSensitiveLog = (obj: CreateDashboardRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDashboardRequest =>
    __isa(o, "CreateDashboardRequest");
}

export interface CreateDashboardResponse {
  __type?: "CreateDashboardResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  Arn?: string;

  /**
   * <p>The status of the dashboard creation request.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ARN of the dashboard, including the version number
   * 			of the first version that is created.</p>
   */
  VersionArn?: string;
}

export namespace CreateDashboardResponse {
  export const filterSensitiveLog = (obj: CreateDashboardResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDashboardResponse =>
    __isa(o, "CreateDashboardResponse");
}

export interface CreateDataSetRequest {
  __type?: "CreateDataSetRequest";
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * <p>An ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode: DataSetImportMode | string | undefined;

  /**
   * <p>Configures the combination and transformation of the data from the physical tables.</p>
   */
  LogicalTableMap?: { [key: string]: LogicalTable };

  /**
   * <p>The display name for the dataset.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of resource permissions on the dataset.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap: { [key: string]: PhysicalTable } | undefined;

  /**
   * <p>The row-level security configuration for the data that you want to create.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDataSetRequest {
  export const filterSensitiveLog = (obj: CreateDataSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDataSetRequest =>
    __isa(o, "CreateDataSetRequest");
}

export interface CreateDataSetResponse {
  __type?: "CreateDataSetResponse";
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
   * <p>The ID of the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace CreateDataSetResponse {
  export const filterSensitiveLog = (obj: CreateDataSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDataSetResponse =>
    __isa(o, "CreateDataSetResponse");
}

export interface CreateDataSourceRequest {
  __type?: "CreateDataSourceRequest";
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
   * <p>The parameters that QuickSight uses to connect to your underlying source.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * <p>A display name for the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of resource permissions on the data source.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying source.</p>
   */
  SslProperties?: SslProperties;

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
    ...(obj.Credentials && { Credentials: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CreateDataSourceRequest =>
    __isa(o, "CreateDataSourceRequest");
}

export interface CreateDataSourceResponse {
  __type?: "CreateDataSourceResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;

  /**
   * <p>The status of creating the data source.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace CreateDataSourceResponse {
  export const filterSensitiveLog = (obj: CreateDataSourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDataSourceResponse =>
    __isa(o, "CreateDataSourceResponse");
}

export interface CreateGroupMembershipRequest {
  __type?: "CreateGroupMembershipRequest";
  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

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
}

export namespace CreateGroupMembershipRequest {
  export const filterSensitiveLog = (
    obj: CreateGroupMembershipRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGroupMembershipRequest =>
    __isa(o, "CreateGroupMembershipRequest");
}

export interface CreateGroupMembershipResponse {
  __type?: "CreateGroupMembershipResponse";
  /**
   * <p>The group member.</p>
   */
  GroupMember?: GroupMember;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace CreateGroupMembershipResponse {
  export const filterSensitiveLog = (
    obj: CreateGroupMembershipResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGroupMembershipResponse =>
    __isa(o, "CreateGroupMembershipResponse");
}

/**
 * <p>The request object for this operation. </p>
 */
export interface CreateGroupRequest {
  __type?: "CreateGroupRequest";
  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A description for the group that you want to create.</p>
   */
  Description?: string;

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
    ...obj
  });
  export const isa = (o: any): o is CreateGroupRequest =>
    __isa(o, "CreateGroupRequest");
}

/**
 * <p>The response object for this operation.</p>
 */
export interface CreateGroupResponse {
  __type?: "CreateGroupResponse";
  /**
   * <p>The name of the group.</p>
   */
  Group?: Group;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace CreateGroupResponse {
  export const filterSensitiveLog = (obj: CreateGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGroupResponse =>
    __isa(o, "CreateGroupResponse");
}

export interface CreateIAMPolicyAssignmentRequest {
  __type?: "CreateIAMPolicyAssignmentRequest";
  /**
   * <p>The name of the assignment. It must be unique within an AWS account.</p>
   */
  AssignmentName: string | undefined;

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
   * <p>The ID of the AWS account where you want to assign an IAM policy to QuickSight users or
   * 			groups.</p>
   */
  AwsAccountId: string | undefined;

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
}

export namespace CreateIAMPolicyAssignmentRequest {
  export const filterSensitiveLog = (
    obj: CreateIAMPolicyAssignmentRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateIAMPolicyAssignmentRequest =>
    __isa(o, "CreateIAMPolicyAssignmentRequest");
}

export interface CreateIAMPolicyAssignmentResponse {
  __type?: "CreateIAMPolicyAssignmentResponse";
  /**
   * <p>The ID for the assignment.</p>
   */
  AssignmentId?: string;

  /**
   * <p>The name of the assignment. This name must be unique within the AWS account.</p>
   */
  AssignmentName?: string;

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
   * <p>The QuickSight users, groups, or both that the IAM policy is assigned to.</p>
   */
  Identities?: { [key: string]: string[] };

  /**
   * <p>The ARN for the IAM policy that is applied to the QuickSight users and groups specified in this assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace CreateIAMPolicyAssignmentResponse {
  export const filterSensitiveLog = (
    obj: CreateIAMPolicyAssignmentResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateIAMPolicyAssignmentResponse =>
    __isa(o, "CreateIAMPolicyAssignmentResponse");
}

export interface CreateIngestionRequest {
  __type?: "CreateIngestionRequest";
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>An ID for the ingestion.</p>
   */
  IngestionId: string | undefined;
}

export namespace CreateIngestionRequest {
  export const filterSensitiveLog = (obj: CreateIngestionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateIngestionRequest =>
    __isa(o, "CreateIngestionRequest");
}

export interface CreateIngestionResponse {
  __type?: "CreateIngestionResponse";
  /**
   * <p>The Amazon Resource Name (ARN) for the data ingestion.</p>
   */
  Arn?: string;

  /**
   * <p>An ID for the ingestion.</p>
   */
  IngestionId?: string;

  /**
   * <p>The ingestion status.</p>
   */
  IngestionStatus?: IngestionStatus | string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace CreateIngestionResponse {
  export const filterSensitiveLog = (obj: CreateIngestionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateIngestionResponse =>
    __isa(o, "CreateIngestionResponse");
}

export interface CreateTemplateAliasRequest {
  __type?: "CreateTemplateAliasRequest";
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

  /**
   * <p>The version number of the template.</p>
   */
  TemplateVersionNumber: number | undefined;
}

export namespace CreateTemplateAliasRequest {
  export const filterSensitiveLog = (obj: CreateTemplateAliasRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTemplateAliasRequest =>
    __isa(o, "CreateTemplateAliasRequest");
}

export interface CreateTemplateAliasResponse {
  __type?: "CreateTemplateAliasResponse";
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>Information about the template alias.</p>
   */
  TemplateAlias?: TemplateAlias;
}

export namespace CreateTemplateAliasResponse {
  export const filterSensitiveLog = (
    obj: CreateTemplateAliasResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTemplateAliasResponse =>
    __isa(o, "CreateTemplateAliasResponse");
}

export interface CreateTemplateRequest {
  __type?: "CreateTemplateRequest";
  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A display name for the template.</p>
   */
  Name?: string;

  /**
   * <p>A list of resource permissions to be set on the template. </p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Resource Name (ARN) of the source entity from which this template is being
   * 			created. Currently, you can create a template from an analysis or another template. If
   * 			the ARN is for an analysis, include its dataset references. </p>
   */
  SourceEntity: TemplateSourceEntity | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>An ID for the template that you want to create. This template is unique per AWS Region in
   * 			each AWS account.</p>
   */
  TemplateId: string | undefined;

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
    ...obj
  });
  export const isa = (o: any): o is CreateTemplateRequest =>
    __isa(o, "CreateTemplateRequest");
}

export interface CreateTemplateResponse {
  __type?: "CreateTemplateResponse";
  /**
   * <p>The ARN for the template.</p>
   */
  Arn?: string;

  /**
   * <p>The template creation status.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ID of the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The ARN for the template, including the version information of
   * 			the first version.</p>
   */
  VersionArn?: string;
}

export namespace CreateTemplateResponse {
  export const filterSensitiveLog = (obj: CreateTemplateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTemplateResponse =>
    __isa(o, "CreateTemplateResponse");
}

/**
 * <p>The combination of user name and password that are used as credentials.</p>
 */
export interface CredentialPair {
  __type?: "CredentialPair";
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
    ...obj
  });
  export const isa = (o: any): o is CredentialPair =>
    __isa(o, "CredentialPair");
}

/**
 * <p>A physical table type built from the results of the custom SQL query.</p>
 */
export interface CustomSql {
  __type?: "CustomSql";
  /**
   * <p>The column schema from the SQL query result set.</p>
   */
  Columns?: InputColumn[];

  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn: string | undefined;

  /**
   * <p>A display name for the SQL query result.</p>
   */
  Name: string | undefined;

  /**
   * <p>The SQL query.</p>
   */
  SqlQuery: string | undefined;
}

export namespace CustomSql {
  export const filterSensitiveLog = (obj: CustomSql): any => ({
    ...obj
  });
  export const isa = (o: any): o is CustomSql => __isa(o, "CustomSql");
}

/**
 * <p>Dashboard.</p>
 */
export interface Dashboard {
  __type?: "Dashboard";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Dashboard ID.</p>
   */
  DashboardId?: string;

  /**
   * <p>The last time that this dataset was published.</p>
   */
  LastPublishedTime?: Date;

  /**
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * <p>Version.</p>
   */
  Version?: DashboardVersion;
}

export namespace Dashboard {
  export const filterSensitiveLog = (obj: Dashboard): any => ({
    ...obj
  });
  export const isa = (o: any): o is Dashboard => __isa(o, "Dashboard");
}

export enum DashboardBehavior {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * <p>Dashboard error.</p>
 */
export interface DashboardError {
  __type?: "DashboardError";
  /**
   * <p>Message.</p>
   */
  Message?: string;

  /**
   * <p>Type.</p>
   */
  Type?: DashboardErrorType | string;
}

export namespace DashboardError {
  export const filterSensitiveLog = (obj: DashboardError): any => ({
    ...obj
  });
  export const isa = (o: any): o is DashboardError =>
    __isa(o, "DashboardError");
}

export enum DashboardErrorType {
  COLUMN_GEOGRAPHIC_ROLE_MISMATCH = "COLUMN_GEOGRAPHIC_ROLE_MISMATCH",
  COLUMN_REPLACEMENT_MISSING = "COLUMN_REPLACEMENT_MISSING",
  COLUMN_TYPE_MISMATCH = "COLUMN_TYPE_MISMATCH",
  DATA_SET_NOT_FOUND = "DATA_SET_NOT_FOUND",
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
  PARAMETER_NOT_FOUND = "PARAMETER_NOT_FOUND",
  PARAMETER_TYPE_INVALID = "PARAMETER_TYPE_INVALID",
  PARAMETER_VALUE_INCOMPATIBLE = "PARAMETER_VALUE_INCOMPATIBLE"
}

/**
 * <p>Dashboard publish options.</p>
 */
export interface DashboardPublishOptions {
  __type?: "DashboardPublishOptions";
  /**
   * <p>Ad hoc (one-time) filtering option.</p>
   */
  AdHocFilteringOption?: AdHocFilteringOption;

  /**
   * <p>Export to .csv option.</p>
   */
  ExportToCSVOption?: ExportToCSVOption;

  /**
   * <p>Sheet controls option.</p>
   */
  SheetControlsOption?: SheetControlsOption;
}

export namespace DashboardPublishOptions {
  export const filterSensitiveLog = (obj: DashboardPublishOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is DashboardPublishOptions =>
    __isa(o, "DashboardPublishOptions");
}

/**
 * <p>Dashboard source entity.</p>
 */
export interface DashboardSourceEntity {
  __type?: "DashboardSourceEntity";
  /**
   * <p>Source template.</p>
   */
  SourceTemplate?: DashboardSourceTemplate;
}

export namespace DashboardSourceEntity {
  export const filterSensitiveLog = (obj: DashboardSourceEntity): any => ({
    ...obj
  });
  export const isa = (o: any): o is DashboardSourceEntity =>
    __isa(o, "DashboardSourceEntity");
}

/**
 * <p>Dashboard source template.</p>
 */
export interface DashboardSourceTemplate {
  __type?: "DashboardSourceTemplate";
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
    ...obj
  });
  export const isa = (o: any): o is DashboardSourceTemplate =>
    __isa(o, "DashboardSourceTemplate");
}

/**
 * <p>Dashboard summary.</p>
 */
export interface DashboardSummary {
  __type?: "DashboardSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The time that this dashboard was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Dashboard ID.</p>
   */
  DashboardId?: string;

  /**
   * <p>The last time that this dashboard was published.</p>
   */
  LastPublishedTime?: Date;

  /**
   * <p>The last time that this dashboard was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A display name for the dashboard.</p>
   */
  Name?: string;

  /**
   * <p>Published version number.</p>
   */
  PublishedVersionNumber?: number;
}

export namespace DashboardSummary {
  export const filterSensitiveLog = (obj: DashboardSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is DashboardSummary =>
    __isa(o, "DashboardSummary");
}

export enum DashboardUIState {
  COLLAPSED = "COLLAPSED",
  EXPANDED = "EXPANDED"
}

/**
 * <p>Dashboard version.</p>
 */
export interface DashboardVersion {
  __type?: "DashboardVersion";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The time that this dashboard version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Description.</p>
   */
  Description?: string;

  /**
   * <p>Errors.</p>
   */
  Errors?: DashboardError[];

  /**
   * <p>Source entity ARN.</p>
   */
  SourceEntityArn?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>Version number.</p>
   */
  VersionNumber?: number;
}

export namespace DashboardVersion {
  export const filterSensitiveLog = (obj: DashboardVersion): any => ({
    ...obj
  });
  export const isa = (o: any): o is DashboardVersion =>
    __isa(o, "DashboardVersion");
}

/**
 * <p>Dashboard version summary.</p>
 */
export interface DashboardVersionSummary {
  __type?: "DashboardVersionSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

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
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>Version number.</p>
   */
  VersionNumber?: number;
}

export namespace DashboardVersionSummary {
  export const filterSensitiveLog = (obj: DashboardVersionSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is DashboardVersionSummary =>
    __isa(o, "DashboardVersionSummary");
}

/**
 * <p>Dataset.</p>
 */
export interface DataSet {
  __type?: "DataSet";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>Groupings of columns that work together in certain Amazon QuickSight features. Currently,
   * 			only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * <p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
   * 			imported into SPICE.</p>
   */
  ConsumedSpiceCapacityInBytes?: number;

  /**
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The ID of the dataset.</p>
   */
  DataSetId?: string;

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode?: DataSetImportMode | string;

  /**
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>Configures the combination and transformation of the data from the physical
   * 			tables.</p>
   */
  LogicalTableMap?: { [key: string]: LogicalTable };

  /**
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * <p>The list of columns after all transforms. These columns are available in templates,
   * 			analyses, and dashboards.</p>
   */
  OutputColumns?: OutputColumn[];

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap?: { [key: string]: PhysicalTable };

  /**
   * <p>The row-level security configuration for the dataset.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
}

export namespace DataSet {
  export const filterSensitiveLog = (obj: DataSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataSet => __isa(o, "DataSet");
}

/**
 * <p>Dataset configuration.</p>
 */
export interface DataSetConfiguration {
  __type?: "DataSetConfiguration";
  /**
   * <p>A structure containing the list of column group schemas.</p>
   */
  ColumnGroupSchemaList?: ColumnGroupSchema[];

  /**
   * <p>Dataset schema.</p>
   */
  DataSetSchema?: DataSetSchema;

  /**
   * <p>Placeholder.</p>
   */
  Placeholder?: string;
}

export namespace DataSetConfiguration {
  export const filterSensitiveLog = (obj: DataSetConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataSetConfiguration =>
    __isa(o, "DataSetConfiguration");
}

export enum DataSetImportMode {
  DIRECT_QUERY = "DIRECT_QUERY",
  SPICE = "SPICE"
}

/**
 * <p>Dataset reference.</p>
 */
export interface DataSetReference {
  __type?: "DataSetReference";
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
    ...obj
  });
  export const isa = (o: any): o is DataSetReference =>
    __isa(o, "DataSetReference");
}

/**
 * <p>Dataset schema.</p>
 */
export interface DataSetSchema {
  __type?: "DataSetSchema";
  /**
   * <p>A structure containing the list of column schemas.</p>
   */
  ColumnSchemaList?: ColumnSchema[];
}

export namespace DataSetSchema {
  export const filterSensitiveLog = (obj: DataSetSchema): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataSetSchema => __isa(o, "DataSetSchema");
}

/**
 * <p>Dataset summary.</p>
 */
export interface DataSetSummary {
  __type?: "DataSetSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The ID of the dataset.</p>
   */
  DataSetId?: string;

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode?: DataSetImportMode | string;

  /**
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * <p>The row-level security configuration for the dataset.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
}

export namespace DataSetSummary {
  export const filterSensitiveLog = (obj: DataSetSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataSetSummary =>
    __isa(o, "DataSetSummary");
}

/**
 * <p>The structure of a data source.</p>
 */
export interface DataSource {
  __type?: "DataSource";
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;

  /**
   * <p>The time that this data source was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying source. This is a
   * 			variant type structure. For this structure to be valid, only one of the attributes can
   * 			be non-null.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * <p>Error information from the last update or the creation of the data source.</p>
   */
  ErrorInfo?: DataSourceErrorInfo;

  /**
   * <p>The last time that this data source was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A display name for the data source.</p>
   */
  Name?: string;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your
   * 			underlying source.</p>
   */
  SslProperties?: SslProperties;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The type of the data source. This type indicates which database engine the data source
   * 			connects to.</p>
   */
  Type?: DataSourceType | string;

  /**
   * <p>The VPC connection information. You need to use this parameter only when you want
   * 			QuickSight to use a VPC connection when connecting to your underlying source.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;
}

export namespace DataSource {
  export const filterSensitiveLog = (obj: DataSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataSource => __isa(o, "DataSource");
}

/**
 * <p>Data source credentials.</p>
 */
export interface DataSourceCredentials {
  __type?: "DataSourceCredentials";
  /**
   * <p>Credential pair.</p>
   */
  CredentialPair?: CredentialPair;
}

export namespace DataSourceCredentials {
  export const filterSensitiveLog = (obj: DataSourceCredentials): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataSourceCredentials =>
    __isa(o, "DataSourceCredentials");
}

/**
 * <p>Error information for the data source creation or update.</p>
 */
export interface DataSourceErrorInfo {
  __type?: "DataSourceErrorInfo";
  /**
   * <p>Error message.</p>
   */
  Message?: string;

  /**
   * <p>Error type.</p>
   */
  Type?: DataSourceErrorInfoType | string;
}

export namespace DataSourceErrorInfo {
  export const filterSensitiveLog = (obj: DataSourceErrorInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataSourceErrorInfo =>
    __isa(o, "DataSourceErrorInfo");
}

export enum DataSourceErrorInfoType {
  CONFLICT = "CONFLICT",
  ENGINE_VERSION_NOT_SUPPORTED = "ENGINE_VERSION_NOT_SUPPORTED",
  GENERIC_SQL_FAILURE = "GENERIC_SQL_FAILURE",
  TIMEOUT = "TIMEOUT",
  UNKNOWN = "UNKNOWN",
  UNKNOWN_HOST = "UNKNOWN_HOST"
}

/**
 * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source. This
 * 			is a variant type structure. For this structure to be valid, only one of the attributes
 * 			can be non-null.</p>
 */
export interface DataSourceParameters {
  __type?: "DataSourceParameters";
  /**
   * <p>Amazon Elasticsearch Service parameters.</p>
   */
  AmazonElasticsearchParameters?: AmazonElasticsearchParameters;

  /**
   * <p>Amazon Athena parameters.</p>
   */
  AthenaParameters?: AthenaParameters;

  /**
   * <p>Amazon Aurora MySQL parameters.</p>
   */
  AuroraParameters?: AuroraParameters;

  /**
   * <p>Aurora PostgreSQL parameters.</p>
   */
  AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters;

  /**
   * <p>AWS IoT Analytics parameters.</p>
   */
  AwsIotAnalyticsParameters?: AwsIotAnalyticsParameters;

  /**
   * <p>Jira parameters.</p>
   */
  JiraParameters?: JiraParameters;

  /**
   * <p>MariaDB parameters.</p>
   */
  MariaDbParameters?: MariaDbParameters;

  /**
   * <p>MySQL parameters.</p>
   */
  MySqlParameters?: MySqlParameters;

  /**
   * <p>PostgreSQL parameters.</p>
   */
  PostgreSqlParameters?: PostgreSqlParameters;

  /**
   * <p>Presto parameters.</p>
   */
  PrestoParameters?: PrestoParameters;

  /**
   * <p>Amazon RDS parameters.</p>
   */
  RdsParameters?: RdsParameters;

  /**
   * <p>Amazon Redshift parameters.</p>
   */
  RedshiftParameters?: RedshiftParameters;

  /**
   * <p>S3 parameters.</p>
   */
  S3Parameters?: S3Parameters;

  /**
   * <p>ServiceNow parameters.</p>
   */
  ServiceNowParameters?: ServiceNowParameters;

  /**
   * <p>Snowflake parameters.</p>
   */
  SnowflakeParameters?: SnowflakeParameters;

  /**
   * <p>Spark parameters.</p>
   */
  SparkParameters?: SparkParameters;

  /**
   * <p>SQL Server parameters.</p>
   */
  SqlServerParameters?: SqlServerParameters;

  /**
   * <p>Teradata parameters.</p>
   */
  TeradataParameters?: TeradataParameters;

  /**
   * <p>Twitter parameters.</p>
   */
  TwitterParameters?: TwitterParameters;
}

export namespace DataSourceParameters {
  export const filterSensitiveLog = (obj: DataSourceParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataSourceParameters =>
    __isa(o, "DataSourceParameters");
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
  TWITTER = "TWITTER"
}

/**
 * <p>Date time parameter.</p>
 */
export interface DateTimeParameter {
  __type?: "DateTimeParameter";
  /**
   * <p>A display name for the dataset.</p>
   */
  Name: string | undefined;

  /**
   * <p>Values.</p>
   */
  Values: Date[] | undefined;
}

export namespace DateTimeParameter {
  export const filterSensitiveLog = (obj: DateTimeParameter): any => ({
    ...obj
  });
  export const isa = (o: any): o is DateTimeParameter =>
    __isa(o, "DateTimeParameter");
}

/**
 * <p>Decimal parameter.</p>
 */
export interface DecimalParameter {
  __type?: "DecimalParameter";
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
    ...obj
  });
  export const isa = (o: any): o is DecimalParameter =>
    __isa(o, "DecimalParameter");
}

export interface DeleteDashboardRequest {
  __type?: "DeleteDashboardRequest";
  /**
   * <p>The ID of the AWS account that contains the dashboard that you're deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number of the dashboard. If the version number property is provided, only the
   * 			specified version of the dashboard is deleted.</p>
   */
  VersionNumber?: number;
}

export namespace DeleteDashboardRequest {
  export const filterSensitiveLog = (obj: DeleteDashboardRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDashboardRequest =>
    __isa(o, "DeleteDashboardRequest");
}

export interface DeleteDashboardResponse {
  __type?: "DeleteDashboardResponse";
  /**
   * <p>The Secure Socket Layer (SSL) properties that apply for the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteDashboardResponse {
  export const filterSensitiveLog = (obj: DeleteDashboardResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDashboardResponse =>
    __isa(o, "DeleteDashboardResponse");
}

export interface DeleteDataSetRequest {
  __type?: "DeleteDataSetRequest";
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
    ...obj
  });
  export const isa = (o: any): o is DeleteDataSetRequest =>
    __isa(o, "DeleteDataSetRequest");
}

export interface DeleteDataSetResponse {
  __type?: "DeleteDataSetResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSetId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteDataSetResponse {
  export const filterSensitiveLog = (obj: DeleteDataSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDataSetResponse =>
    __isa(o, "DeleteDataSetResponse");
}

export interface DeleteDataSourceRequest {
  __type?: "DeleteDataSourceRequest";
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
    ...obj
  });
  export const isa = (o: any): o is DeleteDataSourceRequest =>
    __isa(o, "DeleteDataSourceRequest");
}

export interface DeleteDataSourceResponse {
  __type?: "DeleteDataSourceResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the data source that you deleted.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteDataSourceResponse {
  export const filterSensitiveLog = (obj: DeleteDataSourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDataSourceResponse =>
    __isa(o, "DeleteDataSourceResponse");
}

export interface DeleteGroupMembershipRequest {
  __type?: "DeleteGroupMembershipRequest";
  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the group that you want to delete the user from.</p>
   */
  GroupName: string | undefined;

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
  export const filterSensitiveLog = (
    obj: DeleteGroupMembershipRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGroupMembershipRequest =>
    __isa(o, "DeleteGroupMembershipRequest");
}

export interface DeleteGroupMembershipResponse {
  __type?: "DeleteGroupMembershipResponse";
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteGroupMembershipResponse {
  export const filterSensitiveLog = (
    obj: DeleteGroupMembershipResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGroupMembershipResponse =>
    __isa(o, "DeleteGroupMembershipResponse");
}

export interface DeleteGroupRequest {
  __type?: "DeleteGroupRequest";
  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the group that you want to delete.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace DeleteGroupRequest {
  export const filterSensitiveLog = (obj: DeleteGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGroupRequest =>
    __isa(o, "DeleteGroupRequest");
}

export interface DeleteGroupResponse {
  __type?: "DeleteGroupResponse";
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteGroupResponse {
  export const filterSensitiveLog = (obj: DeleteGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGroupResponse =>
    __isa(o, "DeleteGroupResponse");
}

export interface DeleteIAMPolicyAssignmentRequest {
  __type?: "DeleteIAMPolicyAssignmentRequest";
  /**
   * <p>The name of the assignment. </p>
   */
  AssignmentName: string | undefined;

  /**
   * <p>The AWS account ID where you want to delete the IAM policy assignment.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;
}

export namespace DeleteIAMPolicyAssignmentRequest {
  export const filterSensitiveLog = (
    obj: DeleteIAMPolicyAssignmentRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteIAMPolicyAssignmentRequest =>
    __isa(o, "DeleteIAMPolicyAssignmentRequest");
}

export interface DeleteIAMPolicyAssignmentResponse {
  __type?: "DeleteIAMPolicyAssignmentResponse";
  /**
   * <p>The name of the assignment. </p>
   */
  AssignmentName?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteIAMPolicyAssignmentResponse {
  export const filterSensitiveLog = (
    obj: DeleteIAMPolicyAssignmentResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteIAMPolicyAssignmentResponse =>
    __isa(o, "DeleteIAMPolicyAssignmentResponse");
}

export interface DeleteTemplateAliasRequest {
  __type?: "DeleteTemplateAliasRequest";
  /**
   * <p>The name for the template alias. If you name a specific alias, you delete the version that
   * 			the alias points to. You can specify the latest version of the template by providing the
   * 			keyword <code>$LATEST</code> in the <code>AliasName</code> parameter.
   * 			</p>
   */
  AliasName: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the item to delete.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template that the specified alias is for.</p>
   */
  TemplateId: string | undefined;
}

export namespace DeleteTemplateAliasRequest {
  export const filterSensitiveLog = (obj: DeleteTemplateAliasRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTemplateAliasRequest =>
    __isa(o, "DeleteTemplateAliasRequest");
}

export interface DeleteTemplateAliasResponse {
  __type?: "DeleteTemplateAliasResponse";
  /**
   * <p>The name for the template alias.</p>
   */
  AliasName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>An ID for the template associated with the deletion.</p>
   */
  TemplateId?: string;
}

export namespace DeleteTemplateAliasResponse {
  export const filterSensitiveLog = (
    obj: DeleteTemplateAliasResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTemplateAliasResponse =>
    __isa(o, "DeleteTemplateAliasResponse");
}

export interface DeleteTemplateRequest {
  __type?: "DeleteTemplateRequest";
  /**
   * <p>The ID of the AWS account that contains the template that you're deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template you want to delete.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>Specifies the version of the template that you want to delete.
   * 			If you don't provide a version number, <code>DeleteTemplate</code> deletes all versions of the template.
   * 	 </p>
   */
  VersionNumber?: number;
}

export namespace DeleteTemplateRequest {
  export const filterSensitiveLog = (obj: DeleteTemplateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTemplateRequest =>
    __isa(o, "DeleteTemplateRequest");
}

export interface DeleteTemplateResponse {
  __type?: "DeleteTemplateResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>An ID for the template.</p>
   */
  TemplateId?: string;
}

export namespace DeleteTemplateResponse {
  export const filterSensitiveLog = (obj: DeleteTemplateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTemplateResponse =>
    __isa(o, "DeleteTemplateResponse");
}

/**
 * <p></p>
 */
export interface DeleteUserByPrincipalIdRequest {
  __type?: "DeleteUserByPrincipalIdRequest";
  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The principal ID of the user.</p>
   */
  PrincipalId: string | undefined;
}

export namespace DeleteUserByPrincipalIdRequest {
  export const filterSensitiveLog = (
    obj: DeleteUserByPrincipalIdRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteUserByPrincipalIdRequest =>
    __isa(o, "DeleteUserByPrincipalIdRequest");
}

export interface DeleteUserByPrincipalIdResponse {
  __type?: "DeleteUserByPrincipalIdResponse";
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteUserByPrincipalIdResponse {
  export const filterSensitiveLog = (
    obj: DeleteUserByPrincipalIdResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteUserByPrincipalIdResponse =>
    __isa(o, "DeleteUserByPrincipalIdResponse");
}

export interface DeleteUserRequest {
  __type?: "DeleteUserRequest";
  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the user that you want to delete.</p>
   */
  UserName: string | undefined;
}

export namespace DeleteUserRequest {
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteUserRequest =>
    __isa(o, "DeleteUserRequest");
}

export interface DeleteUserResponse {
  __type?: "DeleteUserResponse";
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteUserResponse {
  export const filterSensitiveLog = (obj: DeleteUserResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteUserResponse =>
    __isa(o, "DeleteUserResponse");
}

export interface DescribeDashboardPermissionsRequest {
  __type?: "DescribeDashboardPermissionsRequest";
  /**
   * <p>The ID of the AWS account that contains the dashboard that you're describing
   * 			permissions for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   */
  DashboardId: string | undefined;
}

export namespace DescribeDashboardPermissionsRequest {
  export const filterSensitiveLog = (
    obj: DescribeDashboardPermissionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDashboardPermissionsRequest =>
    __isa(o, "DescribeDashboardPermissionsRequest");
}

export interface DescribeDashboardPermissionsResponse {
  __type?: "DescribeDashboardPermissionsResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>A structure that contains the permissions for the dashboard.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeDashboardPermissionsResponse {
  export const filterSensitiveLog = (
    obj: DescribeDashboardPermissionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDashboardPermissionsResponse =>
    __isa(o, "DescribeDashboardPermissionsResponse");
}

export interface DescribeDashboardRequest {
  __type?: "DescribeDashboardRequest";
  /**
   * <p>The alias name.</p>
   */
  AliasName?: string;

  /**
   * <p>The ID of the AWS account that contains the dashboard that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number for the dashboard. If a version number isn't passed, the latest
   * 			published dashboard version is described. </p>
   */
  VersionNumber?: number;
}

export namespace DescribeDashboardRequest {
  export const filterSensitiveLog = (obj: DescribeDashboardRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDashboardRequest =>
    __isa(o, "DescribeDashboardRequest");
}

export interface DescribeDashboardResponse {
  __type?: "DescribeDashboardResponse";
  /**
   * <p>Information about the dashboard.</p>
   */
  Dashboard?: Dashboard;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeDashboardResponse {
  export const filterSensitiveLog = (obj: DescribeDashboardResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDashboardResponse =>
    __isa(o, "DescribeDashboardResponse");
}

export interface DescribeDataSetPermissionsRequest {
  __type?: "DescribeDataSetPermissionsRequest";
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
  export const filterSensitiveLog = (
    obj: DescribeDataSetPermissionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDataSetPermissionsRequest =>
    __isa(o, "DescribeDataSetPermissionsRequest");
}

export interface DescribeDataSetPermissionsResponse {
  __type?: "DescribeDataSetPermissionsResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DataSetArn?: string;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSetId?: string;

  /**
   * <p>A list of resource permissions on the dataset.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeDataSetPermissionsResponse {
  export const filterSensitiveLog = (
    obj: DescribeDataSetPermissionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDataSetPermissionsResponse =>
    __isa(o, "DescribeDataSetPermissionsResponse");
}

export interface DescribeDataSetRequest {
  __type?: "DescribeDataSetRequest";
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
    ...obj
  });
  export const isa = (o: any): o is DescribeDataSetRequest =>
    __isa(o, "DescribeDataSetRequest");
}

export interface DescribeDataSetResponse {
  __type?: "DescribeDataSetResponse";
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
    ...obj
  });
  export const isa = (o: any): o is DescribeDataSetResponse =>
    __isa(o, "DescribeDataSetResponse");
}

export interface DescribeDataSourcePermissionsRequest {
  __type?: "DescribeDataSourcePermissionsRequest";
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId: string | undefined;
}

export namespace DescribeDataSourcePermissionsRequest {
  export const filterSensitiveLog = (
    obj: DescribeDataSourcePermissionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDataSourcePermissionsRequest =>
    __isa(o, "DescribeDataSourcePermissionsRequest");
}

export interface DescribeDataSourcePermissionsResponse {
  __type?: "DescribeDataSourcePermissionsResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>A list of resource permissions on the data source.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeDataSourcePermissionsResponse {
  export const filterSensitiveLog = (
    obj: DescribeDataSourcePermissionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDataSourcePermissionsResponse =>
    __isa(o, "DescribeDataSourcePermissionsResponse");
}

export interface DescribeDataSourceRequest {
  __type?: "DescribeDataSourceRequest";
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
    ...obj
  });
  export const isa = (o: any): o is DescribeDataSourceRequest =>
    __isa(o, "DescribeDataSourceRequest");
}

export interface DescribeDataSourceResponse {
  __type?: "DescribeDataSourceResponse";
  /**
   * <p>The information on the data source.</p>
   */
  DataSource?: DataSource;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeDataSourceResponse {
  export const filterSensitiveLog = (obj: DescribeDataSourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDataSourceResponse =>
    __isa(o, "DescribeDataSourceResponse");
}

export interface DescribeGroupRequest {
  __type?: "DescribeGroupRequest";
  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the group that you want to describe.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace DescribeGroupRequest {
  export const filterSensitiveLog = (obj: DescribeGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeGroupRequest =>
    __isa(o, "DescribeGroupRequest");
}

export interface DescribeGroupResponse {
  __type?: "DescribeGroupResponse";
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
    ...obj
  });
  export const isa = (o: any): o is DescribeGroupResponse =>
    __isa(o, "DescribeGroupResponse");
}

export interface DescribeIAMPolicyAssignmentRequest {
  __type?: "DescribeIAMPolicyAssignmentRequest";
  /**
   * <p>The name of the assignment. </p>
   */
  AssignmentName: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the assignment that you want to describe.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;
}

export namespace DescribeIAMPolicyAssignmentRequest {
  export const filterSensitiveLog = (
    obj: DescribeIAMPolicyAssignmentRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeIAMPolicyAssignmentRequest =>
    __isa(o, "DescribeIAMPolicyAssignmentRequest");
}

export interface DescribeIAMPolicyAssignmentResponse {
  __type?: "DescribeIAMPolicyAssignmentResponse";
  /**
   * <p>Information describing the IAM policy assignment.</p>
   */
  IAMPolicyAssignment?: IAMPolicyAssignment;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeIAMPolicyAssignmentResponse {
  export const filterSensitiveLog = (
    obj: DescribeIAMPolicyAssignmentResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeIAMPolicyAssignmentResponse =>
    __isa(o, "DescribeIAMPolicyAssignmentResponse");
}

export interface DescribeIngestionRequest {
  __type?: "DescribeIngestionRequest";
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>An ID for the ingestion.</p>
   */
  IngestionId: string | undefined;
}

export namespace DescribeIngestionRequest {
  export const filterSensitiveLog = (obj: DescribeIngestionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeIngestionRequest =>
    __isa(o, "DescribeIngestionRequest");
}

export interface DescribeIngestionResponse {
  __type?: "DescribeIngestionResponse";
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
    ...obj
  });
  export const isa = (o: any): o is DescribeIngestionResponse =>
    __isa(o, "DescribeIngestionResponse");
}

export interface DescribeTemplateAliasRequest {
  __type?: "DescribeTemplateAliasRequest";
  /**
   * <p>The name of the template alias that you want to
   * 			describe.
   * 			If you name a specific alias, you describe the version that the alias points to. You can
   * 			specify the latest version of the template by providing the keyword <code>$LATEST</code>
   * 			in the <code>AliasName</code> parameter. The keyword <code>$PUBLISHED</code> doesn't
   * 			apply to templates.</p>
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
  export const filterSensitiveLog = (
    obj: DescribeTemplateAliasRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTemplateAliasRequest =>
    __isa(o, "DescribeTemplateAliasRequest");
}

export interface DescribeTemplateAliasResponse {
  __type?: "DescribeTemplateAliasResponse";
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
  export const filterSensitiveLog = (
    obj: DescribeTemplateAliasResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTemplateAliasResponse =>
    __isa(o, "DescribeTemplateAliasResponse");
}

export interface DescribeTemplatePermissionsRequest {
  __type?: "DescribeTemplatePermissionsRequest";
  /**
   * <p>The ID of the AWS account that contains the template that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;
}

export namespace DescribeTemplatePermissionsRequest {
  export const filterSensitiveLog = (
    obj: DescribeTemplatePermissionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTemplatePermissionsRequest =>
    __isa(o, "DescribeTemplatePermissionsRequest");
}

export interface DescribeTemplatePermissionsResponse {
  __type?: "DescribeTemplatePermissionsResponse";
  /**
   * <p>A list of resource permissions to be set on the template. </p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  TemplateArn?: string;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;
}

export namespace DescribeTemplatePermissionsResponse {
  export const filterSensitiveLog = (
    obj: DescribeTemplatePermissionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTemplatePermissionsResponse =>
    __isa(o, "DescribeTemplatePermissionsResponse");
}

export interface DescribeTemplateRequest {
  __type?: "DescribeTemplateRequest";
  /**
   * <p>The alias of the template that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName?: string;

  /**
   * <p>The ID of the AWS account that contains the template that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>(Optional) The number for the version to describe. If a <code>VersionNumber</code> parameter
   * 			value isn't provided, the latest version of the template is described.</p>
   */
  VersionNumber?: number;
}

export namespace DescribeTemplateRequest {
  export const filterSensitiveLog = (obj: DescribeTemplateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTemplateRequest =>
    __isa(o, "DescribeTemplateRequest");
}

export interface DescribeTemplateResponse {
  __type?: "DescribeTemplateResponse";
  /**
   * <p>The template structure for the object you want to describe.</p>
   */
  Template?: Template;
}

export namespace DescribeTemplateResponse {
  export const filterSensitiveLog = (obj: DescribeTemplateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTemplateResponse =>
    __isa(o, "DescribeTemplateResponse");
}

export interface DescribeUserRequest {
  __type?: "DescribeUserRequest";
  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the user that you want to describe.</p>
   */
  UserName: string | undefined;
}

export namespace DescribeUserRequest {
  export const filterSensitiveLog = (obj: DescribeUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeUserRequest =>
    __isa(o, "DescribeUserRequest");
}

export interface DescribeUserResponse {
  __type?: "DescribeUserResponse";
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
    ...obj
  });
  export const isa = (o: any): o is DescribeUserResponse =>
    __isa(o, "DescribeUserResponse");
}

/**
 * <p>The domain specified isn't on the allow list. All domains for embedded dashboards must be
 * 			added to the approved list by an Amazon QuickSight admin.</p>
 */
export interface DomainNotWhitelistedException
  extends __SmithyException,
    $MetadataBearer {
  name: "DomainNotWhitelistedException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace DomainNotWhitelistedException {
  export const filterSensitiveLog = (
    obj: DomainNotWhitelistedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainNotWhitelistedException =>
    __isa(o, "DomainNotWhitelistedException");
}

/**
 * <p>Error information for the SPICE ingestion of a dataset.</p>
 */
export interface ErrorInfo {
  __type?: "ErrorInfo";
  /**
   * <p>Error message.</p>
   */
  Message?: string;

  /**
   * <p>Error type.</p>
   */
  Type?: IngestionErrorType | string;
}

export namespace ErrorInfo {
  export const filterSensitiveLog = (obj: ErrorInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is ErrorInfo => __isa(o, "ErrorInfo");
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
  VPC_CONNECTION = "VPC_CONNECTION"
}

/**
 * <p>Export to .csv option.</p>
 */
export interface ExportToCSVOption {
  __type?: "ExportToCSVOption";
  /**
   * <p>Availability status.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

export namespace ExportToCSVOption {
  export const filterSensitiveLog = (obj: ExportToCSVOption): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExportToCSVOption =>
    __isa(o, "ExportToCSVOption");
}

export enum FileFormat {
  CLF = "CLF",
  CSV = "CSV",
  ELF = "ELF",
  JSON = "JSON",
  TSV = "TSV",
  XLSX = "XLSX"
}

/**
 * <p>A transform operation that filters rows based on a condition.</p>
 */
export interface FilterOperation {
  __type?: "FilterOperation";
  /**
   * <p>An expression that must evaluate to a Boolean value. Rows for which the expression evaluates
   * 			to true are kept in the dataset.</p>
   */
  ConditionExpression: string | undefined;
}

export namespace FilterOperation {
  export const filterSensitiveLog = (obj: FilterOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is FilterOperation =>
    __isa(o, "FilterOperation");
}

/**
 * <p>Geospatial column group that denotes a hierarchy.</p>
 */
export interface GeoSpatialColumnGroup {
  __type?: "GeoSpatialColumnGroup";
  /**
   * <p>Columns in this hierarchy.</p>
   */
  Columns: string[] | undefined;

  /**
   * <p>Country code.</p>
   */
  CountryCode: GeoSpatialCountryCode | string | undefined;

  /**
   * <p>A display name for the hierarchy.</p>
   */
  Name: string | undefined;
}

export namespace GeoSpatialColumnGroup {
  export const filterSensitiveLog = (obj: GeoSpatialColumnGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is GeoSpatialColumnGroup =>
    __isa(o, "GeoSpatialColumnGroup");
}

export enum GeoSpatialCountryCode {
  US = "US"
}

export enum GeoSpatialDataRole {
  CITY = "CITY",
  COUNTRY = "COUNTRY",
  COUNTY = "COUNTY",
  LATITUDE = "LATITUDE",
  LONGITUDE = "LONGITUDE",
  POSTCODE = "POSTCODE",
  STATE = "STATE"
}

export interface GetDashboardEmbedUrlRequest {
  __type?: "GetDashboardEmbedUrlRequest";
  /**
   * <p>The ID for the AWS account that contains the dashboard that you're embedding.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The authentication method that the user uses to sign in.</p>
   */
  IdentityType: IdentityType | string | undefined;

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
}

export namespace GetDashboardEmbedUrlRequest {
  export const filterSensitiveLog = (
    obj: GetDashboardEmbedUrlRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDashboardEmbedUrlRequest =>
    __isa(o, "GetDashboardEmbedUrlRequest");
}

export interface GetDashboardEmbedUrlResponse {
  __type?: "GetDashboardEmbedUrlResponse";
  /**
   * <p>An URL that you can put into your server-side webpage to embed your dashboard. This URL is
   * 			valid for 5 minutes, and the resulting session is valid for 10 hours. The API provides
   * 			the URL with an <code>auth_code</code> value that enables a single sign-on session. </p>
   */
  EmbedUrl?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace GetDashboardEmbedUrlResponse {
  export const filterSensitiveLog = (
    obj: GetDashboardEmbedUrlResponse
  ): any => ({
    ...obj,
    ...(obj.EmbedUrl && { EmbedUrl: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is GetDashboardEmbedUrlResponse =>
    __isa(o, "GetDashboardEmbedUrlResponse");
}

/**
 * <p>A <i>group</i> in Amazon QuickSight consists of a set of users. You can
 * 			use groups to make it easier to manage access and security. Currently, an Amazon QuickSight
 * 			subscription can't contain more than 500 Amazon QuickSight groups.</p>
 */
export interface Group {
  __type?: "Group";
  /**
   * <p>The Amazon Resource Name (ARN) for the group.</p>
   */
  Arn?: string;

  /**
   * <p>The group description.</p>
   */
  Description?: string;

  /**
   * <p>The name of the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The principal ID of the group.</p>
   */
  PrincipalId?: string;
}

export namespace Group {
  export const filterSensitiveLog = (obj: Group): any => ({
    ...obj
  });
  export const isa = (o: any): o is Group => __isa(o, "Group");
}

/**
 * <p>A member of an Amazon QuickSight group. Currently, group members must be users. Groups
 * 			can't be members of another group. .</p>
 */
export interface GroupMember {
  __type?: "GroupMember";
  /**
   * <p>The Amazon Resource Name (ARN) for the group member (user).</p>
   */
  Arn?: string;

  /**
   * <p>The name of the group member (user).</p>
   */
  MemberName?: string;
}

export namespace GroupMember {
  export const filterSensitiveLog = (obj: GroupMember): any => ({
    ...obj
  });
  export const isa = (o: any): o is GroupMember => __isa(o, "GroupMember");
}

/**
 * <p>An IAM policy assignment.</p>
 */
export interface IAMPolicyAssignment {
  __type?: "IAMPolicyAssignment";
  /**
   * <p>Assignment ID.</p>
   */
  AssignmentId?: string;

  /**
   * <p>Assignment name.</p>
   */
  AssignmentName?: string;

  /**
   * <p>Assignment status.</p>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>Identities.</p>
   */
  Identities?: { [key: string]: string[] };

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM policy.</p>
   */
  PolicyArn?: string;
}

export namespace IAMPolicyAssignment {
  export const filterSensitiveLog = (obj: IAMPolicyAssignment): any => ({
    ...obj
  });
  export const isa = (o: any): o is IAMPolicyAssignment =>
    __isa(o, "IAMPolicyAssignment");
}

/**
 * <p>IAM policy assignment summary.</p>
 */
export interface IAMPolicyAssignmentSummary {
  __type?: "IAMPolicyAssignmentSummary";
  /**
   * <p>Assignment name.</p>
   */
  AssignmentName?: string;

  /**
   * <p>Assignment status.</p>
   */
  AssignmentStatus?: AssignmentStatus | string;
}

export namespace IAMPolicyAssignmentSummary {
  export const filterSensitiveLog = (obj: IAMPolicyAssignmentSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is IAMPolicyAssignmentSummary =>
    __isa(o, "IAMPolicyAssignmentSummary");
}

export enum IdentityType {
  IAM = "IAM",
  QUICKSIGHT = "QUICKSIGHT"
}

/**
 * <p>The identity type specified isn't supported. Supported identity types include
 * 				<code>IAM</code> and <code>QUICKSIGHT</code>.</p>
 */
export interface IdentityTypeNotSupportedException
  extends __SmithyException,
    $MetadataBearer {
  name: "IdentityTypeNotSupportedException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace IdentityTypeNotSupportedException {
  export const filterSensitiveLog = (
    obj: IdentityTypeNotSupportedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is IdentityTypeNotSupportedException =>
    __isa(o, "IdentityTypeNotSupportedException");
}

/**
 * <p>Information about the SPICE ingestion for a dataset.</p>
 */
export interface Ingestion {
  __type?: "Ingestion";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The time that this ingestion started.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>Error information for this ingestion.</p>
   */
  ErrorInfo?: ErrorInfo;

  /**
   * <p>Ingestion ID.</p>
   */
  IngestionId?: string;

  /**
   * <p>The size of the data ingested, in bytes.</p>
   */
  IngestionSizeInBytes?: number;

  /**
   * <p>Ingestion status.</p>
   */
  IngestionStatus: IngestionStatus | string | undefined;

  /**
   * <p>The time that this ingestion took, measured in seconds.</p>
   */
  IngestionTimeInSeconds?: number;

  /**
   * <p>Information about a queued dataset SPICE ingestion.</p>
   */
  QueueInfo?: QueueInfo;

  /**
   * <p>Event source for this ingestion.</p>
   */
  RequestSource?: IngestionRequestSource | string;

  /**
   * <p>Type of this ingestion.</p>
   */
  RequestType?: IngestionRequestType | string;

  /**
   * <p>Information about rows for a data set SPICE ingestion.</p>
   */
  RowInfo?: RowInfo;
}

export namespace Ingestion {
  export const filterSensitiveLog = (obj: Ingestion): any => ({
    ...obj
  });
  export const isa = (o: any): o is Ingestion => __isa(o, "Ingestion");
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
  UNROUTABLE_HOST = "UNROUTABLE_HOST"
}

export enum IngestionRequestSource {
  MANUAL = "MANUAL",
  SCHEDULED = "SCHEDULED"
}

export enum IngestionRequestType {
  EDIT = "EDIT",
  FULL_REFRESH = "FULL_REFRESH",
  INCREMENTAL_REFRESH = "INCREMENTAL_REFRESH",
  INITIAL_INGESTION = "INITIAL_INGESTION"
}

export enum IngestionStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  INITIALIZED = "INITIALIZED",
  QUEUED = "QUEUED",
  RUNNING = "RUNNING"
}

/**
 * <p>Metadata for a column that is used as the input of a transform operation.</p>
 */
export interface InputColumn {
  __type?: "InputColumn";
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
    ...obj
  });
  export const isa = (o: any): o is InputColumn => __isa(o, "InputColumn");
}

export enum InputColumnDataType {
  BIT = "BIT",
  BOOLEAN = "BOOLEAN",
  DATETIME = "DATETIME",
  DECIMAL = "DECIMAL",
  INTEGER = "INTEGER",
  JSON = "JSON",
  STRING = "STRING"
}

/**
 * <p>Integer parameter.</p>
 */
export interface IntegerParameter {
  __type?: "IntegerParameter";
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
    ...obj
  });
  export const isa = (o: any): o is IntegerParameter =>
    __isa(o, "IntegerParameter");
}

/**
 * <p>An internal failure occurred.</p>
 */
export interface InternalFailureException
  extends __SmithyException,
    $MetadataBearer {
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
    ...obj
  });
  export const isa = (o: any): o is InternalFailureException =>
    __isa(o, "InternalFailureException");
}

/**
 * <p>The <code>NextToken</code> value isn't valid.</p>
 */
export interface InvalidNextTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidNextTokenException =>
    __isa(o, "InvalidNextTokenException");
}

/**
 * <p>One or more parameters has a value that isn't valid.</p>
 */
export interface InvalidParameterValueException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace InvalidParameterValueException {
  export const filterSensitiveLog = (
    obj: InvalidParameterValueException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidParameterValueException =>
    __isa(o, "InvalidParameterValueException");
}

/**
 * <p>Jira parameters.</p>
 */
export interface JiraParameters {
  __type?: "JiraParameters";
  /**
   * <p>The base URL of the Jira site.</p>
   */
  SiteBaseUrl: string | undefined;
}

export namespace JiraParameters {
  export const filterSensitiveLog = (obj: JiraParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is JiraParameters =>
    __isa(o, "JiraParameters");
}

/**
 * <p>Join instruction.</p>
 */
export interface JoinInstruction {
  __type?: "JoinInstruction";
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

  /**
   * <p>Type.</p>
   */
  Type: JoinType | string | undefined;
}

export namespace JoinInstruction {
  export const filterSensitiveLog = (obj: JoinInstruction): any => ({
    ...obj
  });
  export const isa = (o: any): o is JoinInstruction =>
    __isa(o, "JoinInstruction");
}

export enum JoinType {
  INNER = "INNER",
  LEFT = "LEFT",
  OUTER = "OUTER",
  RIGHT = "RIGHT"
}

/**
 * <p>A limit is exceeded.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;

  /**
   * <p>Limit exceeded.</p>
   */
  ResourceType?: ExceptionResourceType | string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export interface ListDashboardsRequest {
  __type?: "ListDashboardsRequest";
  /**
   * <p>The ID of the AWS account that contains the dashboards that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListDashboardsRequest {
  export const filterSensitiveLog = (obj: ListDashboardsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDashboardsRequest =>
    __isa(o, "ListDashboardsRequest");
}

export interface ListDashboardsResponse {
  __type?: "ListDashboardsResponse";
  /**
   * <p>A structure that contains all of the dashboards shared with the user. This structure
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
    ...obj
  });
  export const isa = (o: any): o is ListDashboardsResponse =>
    __isa(o, "ListDashboardsResponse");
}

export interface ListDashboardVersionsRequest {
  __type?: "ListDashboardVersionsRequest";
  /**
   * <p>The ID of the AWS account that contains the dashboard that you're listing versions
   * 			for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListDashboardVersionsRequest {
  export const filterSensitiveLog = (
    obj: ListDashboardVersionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDashboardVersionsRequest =>
    __isa(o, "ListDashboardVersionsRequest");
}

export interface ListDashboardVersionsResponse {
  __type?: "ListDashboardVersionsResponse";
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
  export const filterSensitiveLog = (
    obj: ListDashboardVersionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDashboardVersionsResponse =>
    __isa(o, "ListDashboardVersionsResponse");
}

export interface ListDataSetsRequest {
  __type?: "ListDataSetsRequest";
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListDataSetsRequest {
  export const filterSensitiveLog = (obj: ListDataSetsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDataSetsRequest =>
    __isa(o, "ListDataSetsRequest");
}

export interface ListDataSetsResponse {
  __type?: "ListDataSetsResponse";
  /**
   * <p>The list of dataset summaries.</p>
   */
  DataSetSummaries?: DataSetSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace ListDataSetsResponse {
  export const filterSensitiveLog = (obj: ListDataSetsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDataSetsResponse =>
    __isa(o, "ListDataSetsResponse");
}

export interface ListDataSourcesRequest {
  __type?: "ListDataSourcesRequest";
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListDataSourcesRequest {
  export const filterSensitiveLog = (obj: ListDataSourcesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDataSourcesRequest =>
    __isa(o, "ListDataSourcesRequest");
}

export interface ListDataSourcesResponse {
  __type?: "ListDataSourcesResponse";
  /**
   * <p>A list of data sources.</p>
   */
  DataSources?: DataSource[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace ListDataSourcesResponse {
  export const filterSensitiveLog = (obj: ListDataSourcesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDataSourcesResponse =>
    __isa(o, "ListDataSourcesResponse");
}

export interface ListGroupMembershipsRequest {
  __type?: "ListGroupMembershipsRequest";
  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the group that you want to see a membership list of.</p>
   */
  GroupName: string | undefined;

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
}

export namespace ListGroupMembershipsRequest {
  export const filterSensitiveLog = (
    obj: ListGroupMembershipsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGroupMembershipsRequest =>
    __isa(o, "ListGroupMembershipsRequest");
}

export interface ListGroupMembershipsResponse {
  __type?: "ListGroupMembershipsResponse";
  /**
   * <p>The list of the members of the group.</p>
   */
  GroupMemberList?: GroupMember[];

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace ListGroupMembershipsResponse {
  export const filterSensitiveLog = (
    obj: ListGroupMembershipsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGroupMembershipsResponse =>
    __isa(o, "ListGroupMembershipsResponse");
}

export interface ListGroupsRequest {
  __type?: "ListGroupsRequest";
  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
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
}

export namespace ListGroupsRequest {
  export const filterSensitiveLog = (obj: ListGroupsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGroupsRequest =>
    __isa(o, "ListGroupsRequest");
}

export interface ListGroupsResponse {
  __type?: "ListGroupsResponse";
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
    ...obj
  });
  export const isa = (o: any): o is ListGroupsResponse =>
    __isa(o, "ListGroupsResponse");
}

export interface ListIAMPolicyAssignmentsForUserRequest {
  __type?: "ListIAMPolicyAssignmentsForUserRequest";
  /**
   * <p>The ID of the AWS account that contains the assignments.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The namespace of the assignment.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the user.</p>
   */
  UserName: string | undefined;
}

export namespace ListIAMPolicyAssignmentsForUserRequest {
  export const filterSensitiveLog = (
    obj: ListIAMPolicyAssignmentsForUserRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListIAMPolicyAssignmentsForUserRequest =>
    __isa(o, "ListIAMPolicyAssignmentsForUserRequest");
}

export interface ListIAMPolicyAssignmentsForUserResponse {
  __type?: "ListIAMPolicyAssignmentsForUserResponse";
  /**
   * <p>The active assignments for this user.</p>
   */
  ActiveAssignments?: ActiveIAMPolicyAssignment[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace ListIAMPolicyAssignmentsForUserResponse {
  export const filterSensitiveLog = (
    obj: ListIAMPolicyAssignmentsForUserResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListIAMPolicyAssignmentsForUserResponse =>
    __isa(o, "ListIAMPolicyAssignmentsForUserResponse");
}

export interface ListIAMPolicyAssignmentsRequest {
  __type?: "ListIAMPolicyAssignmentsRequest";
  /**
   * <p>The status of the assignments.</p>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>The ID of the AWS account that contains these IAM policy assignments.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The namespace for the assignments.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListIAMPolicyAssignmentsRequest {
  export const filterSensitiveLog = (
    obj: ListIAMPolicyAssignmentsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListIAMPolicyAssignmentsRequest =>
    __isa(o, "ListIAMPolicyAssignmentsRequest");
}

export interface ListIAMPolicyAssignmentsResponse {
  __type?: "ListIAMPolicyAssignmentsResponse";
  /**
   * <p>Information describing the IAM policy assignments.</p>
   */
  IAMPolicyAssignments?: IAMPolicyAssignmentSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace ListIAMPolicyAssignmentsResponse {
  export const filterSensitiveLog = (
    obj: ListIAMPolicyAssignmentsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListIAMPolicyAssignmentsResponse =>
    __isa(o, "ListIAMPolicyAssignmentsResponse");
}

export interface ListIngestionsRequest {
  __type?: "ListIngestionsRequest";
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

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListIngestionsRequest {
  export const filterSensitiveLog = (obj: ListIngestionsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListIngestionsRequest =>
    __isa(o, "ListIngestionsRequest");
}

export interface ListIngestionsResponse {
  __type?: "ListIngestionsResponse";
  /**
   * <p>A list of the ingestions.</p>
   */
  Ingestions?: Ingestion[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace ListIngestionsResponse {
  export const filterSensitiveLog = (obj: ListIngestionsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListIngestionsResponse =>
    __isa(o, "ListIngestionsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want a list of tags for.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
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
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

export interface ListTemplateAliasesRequest {
  __type?: "ListTemplateAliasesRequest";
  /**
   * <p>The ID of the AWS account that contains the template aliases that you're listing.</p>
   */
  AwsAccountId: string | undefined;

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
}

export namespace ListTemplateAliasesRequest {
  export const filterSensitiveLog = (obj: ListTemplateAliasesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTemplateAliasesRequest =>
    __isa(o, "ListTemplateAliasesRequest");
}

export interface ListTemplateAliasesResponse {
  __type?: "ListTemplateAliasesResponse";
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>A structure containing the list of the template's aliases.</p>
   */
  TemplateAliasList?: TemplateAlias[];
}

export namespace ListTemplateAliasesResponse {
  export const filterSensitiveLog = (
    obj: ListTemplateAliasesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTemplateAliasesResponse =>
    __isa(o, "ListTemplateAliasesResponse");
}

export interface ListTemplatesRequest {
  __type?: "ListTemplatesRequest";
  /**
   * <p>The ID of the AWS account that contains the templates that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListTemplatesRequest {
  export const filterSensitiveLog = (obj: ListTemplatesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTemplatesRequest =>
    __isa(o, "ListTemplatesRequest");
}

export interface ListTemplatesResponse {
  __type?: "ListTemplatesResponse";
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
    ...obj
  });
  export const isa = (o: any): o is ListTemplatesResponse =>
    __isa(o, "ListTemplatesResponse");
}

export interface ListTemplateVersionsRequest {
  __type?: "ListTemplateVersionsRequest";
  /**
   * <p>The ID of the AWS account that contains the templates that you're listing.</p>
   */
  AwsAccountId: string | undefined;

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
}

export namespace ListTemplateVersionsRequest {
  export const filterSensitiveLog = (
    obj: ListTemplateVersionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTemplateVersionsRequest =>
    __isa(o, "ListTemplateVersionsRequest");
}

export interface ListTemplateVersionsResponse {
  __type?: "ListTemplateVersionsResponse";
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>A structure containing a list of all the versions of the specified template.</p>
   */
  TemplateVersionSummaryList?: TemplateVersionSummary[];
}

export namespace ListTemplateVersionsResponse {
  export const filterSensitiveLog = (
    obj: ListTemplateVersionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTemplateVersionsResponse =>
    __isa(o, "ListTemplateVersionsResponse");
}

export interface ListUserGroupsRequest {
  __type?: "ListUserGroupsRequest";
  /**
   * <p>The AWS account ID that the user is in. Currently, you use the ID for the AWS account
   * 			that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

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
   * <p>The Amazon QuickSight user name that you want to list group memberships for.</p>
   */
  UserName: string | undefined;
}

export namespace ListUserGroupsRequest {
  export const filterSensitiveLog = (obj: ListUserGroupsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUserGroupsRequest =>
    __isa(o, "ListUserGroupsRequest");
}

export interface ListUserGroupsResponse {
  __type?: "ListUserGroupsResponse";
  /**
   * <p>The list of groups the user is a member of.</p>
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

export namespace ListUserGroupsResponse {
  export const filterSensitiveLog = (obj: ListUserGroupsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUserGroupsResponse =>
    __isa(o, "ListUserGroupsResponse");
}

export interface ListUsersRequest {
  __type?: "ListUsersRequest";
  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

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
}

export namespace ListUsersRequest {
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUsersRequest =>
    __isa(o, "ListUsersRequest");
}

export interface ListUsersResponse {
  __type?: "ListUsersResponse";
  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The list of users.</p>
   */
  UserList?: User[];
}

export namespace ListUsersResponse {
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUsersResponse =>
    __isa(o, "ListUsersResponse");
}

/**
 * <p>A <i>logical table</i> is a unit that joins and that data transformations
 * 			operate on. A logical table has a source, which can be either a physical table or result
 * 			of a join. When a logical table points to a physical table, the logical table acts as a
 * 			mutable copy of that physical table through transform operations.</p>
 */
export interface LogicalTable {
  __type?: "LogicalTable";
  /**
   * <p>A display name for the logical table.</p>
   */
  Alias: string | undefined;

  /**
   * <p>Transform operations that act on this logical table.</p>
   */
  DataTransforms?: TransformOperation[];

  /**
   * <p>Source of this logical table.</p>
   */
  Source: LogicalTableSource | undefined;
}

export namespace LogicalTable {
  export const filterSensitiveLog = (obj: LogicalTable): any => ({
    ...obj
  });
  export const isa = (o: any): o is LogicalTable => __isa(o, "LogicalTable");
}

/**
 * <p>Information about the source of a logical table. This is a variant type structure. For this
 * 			structure to be valid, only one of the attributes can be non-null.</p>
 */
export interface LogicalTableSource {
  __type?: "LogicalTableSource";
  /**
   * <p>Specifies the result of a join of two logical tables.</p>
   */
  JoinInstruction?: JoinInstruction;

  /**
   * <p>Physical table ID.</p>
   */
  PhysicalTableId?: string;
}

export namespace LogicalTableSource {
  export const filterSensitiveLog = (obj: LogicalTableSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is LogicalTableSource =>
    __isa(o, "LogicalTableSource");
}

/**
 * <p>Amazon S3 manifest file location.</p>
 */
export interface ManifestFileLocation {
  __type?: "ManifestFileLocation";
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
    ...obj
  });
  export const isa = (o: any): o is ManifestFileLocation =>
    __isa(o, "ManifestFileLocation");
}

/**
 * <p>MariaDB parameters.</p>
 */
export interface MariaDbParameters {
  __type?: "MariaDbParameters";
  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;
}

export namespace MariaDbParameters {
  export const filterSensitiveLog = (obj: MariaDbParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is MariaDbParameters =>
    __isa(o, "MariaDbParameters");
}

/**
 * <p>MySQL parameters.</p>
 */
export interface MySqlParameters {
  __type?: "MySqlParameters";
  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;
}

export namespace MySqlParameters {
  export const filterSensitiveLog = (obj: MySqlParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is MySqlParameters =>
    __isa(o, "MySqlParameters");
}

/**
 * <p>Output column.</p>
 */
export interface OutputColumn {
  __type?: "OutputColumn";
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
    ...obj
  });
  export const isa = (o: any): o is OutputColumn => __isa(o, "OutputColumn");
}

/**
 * <p>Parameters.</p>
 */
export interface _Parameters {
  __type?: "Parameters";
  /**
   * <p>DateTime parameters.</p>
   */
  DateTimeParameters?: DateTimeParameter[];

  /**
   * <p>Decimal parameters.</p>
   */
  DecimalParameters?: DecimalParameter[];

  /**
   * <p>Integer parameters.</p>
   */
  IntegerParameters?: IntegerParameter[];

  /**
   * <p>String parameters.</p>
   */
  StringParameters?: StringParameter[];
}

export namespace _Parameters {
  export const filterSensitiveLog = (obj: _Parameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is _Parameters => __isa(o, "Parameters");
}

/**
 * <p>A view of a data source that contains information about the shape of the data in the
 * 			underlying source. This is a variant type structure. For this structure to be valid,
 * 			only one of the attributes can be non-null.</p>
 */
export interface PhysicalTable {
  __type?: "PhysicalTable";
  /**
   * <p>A physical table type built from the results of the custom SQL query.</p>
   */
  CustomSql?: CustomSql;

  /**
   * <p>A physical table type for relational data sources.</p>
   */
  RelationalTable?: RelationalTable;

  /**
   * <p>A physical table type for as S3 data source.</p>
   */
  S3Source?: S3Source;
}

export namespace PhysicalTable {
  export const filterSensitiveLog = (obj: PhysicalTable): any => ({
    ...obj
  });
  export const isa = (o: any): o is PhysicalTable => __isa(o, "PhysicalTable");
}

/**
 * <p>PostgreSQL parameters.</p>
 */
export interface PostgreSqlParameters {
  __type?: "PostgreSqlParameters";
  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;
}

export namespace PostgreSqlParameters {
  export const filterSensitiveLog = (obj: PostgreSqlParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is PostgreSqlParameters =>
    __isa(o, "PostgreSqlParameters");
}

/**
 * <p>One or more preconditions aren't met.</p>
 */
export interface PreconditionNotMetException
  extends __SmithyException,
    $MetadataBearer {
  name: "PreconditionNotMetException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace PreconditionNotMetException {
  export const filterSensitiveLog = (
    obj: PreconditionNotMetException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PreconditionNotMetException =>
    __isa(o, "PreconditionNotMetException");
}

/**
 * <p>Presto parameters.</p>
 */
export interface PrestoParameters {
  __type?: "PrestoParameters";
  /**
   * <p>Catalog.</p>
   */
  Catalog: string | undefined;

  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;
}

export namespace PrestoParameters {
  export const filterSensitiveLog = (obj: PrestoParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is PrestoParameters =>
    __isa(o, "PrestoParameters");
}

/**
 * <p>A transform operation that projects columns. Operations that come after a projection can
 * 			only refer to projected columns.</p>
 */
export interface ProjectOperation {
  __type?: "ProjectOperation";
  /**
   * <p>Projected columns.</p>
   */
  ProjectedColumns: string[] | undefined;
}

export namespace ProjectOperation {
  export const filterSensitiveLog = (obj: ProjectOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProjectOperation =>
    __isa(o, "ProjectOperation");
}

/**
 * <p>Information about a queued dataset SPICE ingestion.</p>
 */
export interface QueueInfo {
  __type?: "QueueInfo";
  /**
   * <p>The ID of the ongoing ingestion. The queued ingestion is waiting for the ongoing
   * 			ingestion to complete.</p>
   */
  QueuedIngestion: string | undefined;

  /**
   * <p>The ID of the queued ingestion.</p>
   */
  WaitingOnIngestion: string | undefined;
}

export namespace QueueInfo {
  export const filterSensitiveLog = (obj: QueueInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is QueueInfo => __isa(o, "QueueInfo");
}

/**
 * <p>The user with the provided name isn't found. This error can happen in any operation
 * 			that requires finding a user based on a provided user name, such as
 * 				<code>DeleteUser</code>, <code>DescribeUser</code>, and so on.</p>
 */
export interface QuickSightUserNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "QuickSightUserNotFoundException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace QuickSightUserNotFoundException {
  export const filterSensitiveLog = (
    obj: QuickSightUserNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is QuickSightUserNotFoundException =>
    __isa(o, "QuickSightUserNotFoundException");
}

/**
 * <p>Amazon RDS parameters.</p>
 */
export interface RdsParameters {
  __type?: "RdsParameters";
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
    ...obj
  });
  export const isa = (o: any): o is RdsParameters => __isa(o, "RdsParameters");
}

/**
 * <p>Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if
 * 				<code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and
 * 				<code>Port</code> fields can be blank if the <code>ClusterId</code> field is
 * 			set.</p>
 */
export interface RedshiftParameters {
  __type?: "RedshiftParameters";
  /**
   * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
   * 			provided.</p>
   */
  ClusterId?: string;

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
}

export namespace RedshiftParameters {
  export const filterSensitiveLog = (obj: RedshiftParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is RedshiftParameters =>
    __isa(o, "RedshiftParameters");
}

export interface RegisterUserRequest {
  __type?: "RegisterUserRequest";
  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The email address of the user that you want to register.</p>
   */
  Email: string | undefined;

  /**
   * <p>The ARN of the IAM user or role that you are registering with Amazon QuickSight. </p>
   */
  IamArn?: string;

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
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>You need to use this parameter only when you register one or more users using an assumed
   * 			IAM role. You don't need to provide the session name for other scenarios, for example when
   * 			you are registering an IAM user or an Amazon QuickSight user. You can register multiple
   * 			users using the same IAM role if each user has a different session name. For more
   * 			information on assuming IAM roles, see <a href="https://docs.aws.example.com/cli/latest/reference/sts/assume-role.html">
   *                <code>assume-role</code>
   *             </a> in the <i>AWS CLI Reference.</i>
   *          </p>
   */
  SessionName?: string;

  /**
   * <p>The Amazon QuickSight user name that you want to create for the user you are
   * 			registering.</p>
   */
  UserName?: string;

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
}

export namespace RegisterUserRequest {
  export const filterSensitiveLog = (obj: RegisterUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterUserRequest =>
    __isa(o, "RegisterUserRequest");
}

export interface RegisterUserResponse {
  __type?: "RegisterUserResponse";
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The user name.</p>
   */
  User?: User;

  /**
   * <p>The URL the user visits to complete registration and provide a password. This is
   * 			returned only for users with an identity type of <code>QUICKSIGHT</code>.</p>
   */
  UserInvitationUrl?: string;
}

export namespace RegisterUserResponse {
  export const filterSensitiveLog = (obj: RegisterUserResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterUserResponse =>
    __isa(o, "RegisterUserResponse");
}

/**
 * <p>A physical table type for relational data sources.</p>
 */
export interface RelationalTable {
  __type?: "RelationalTable";
  /**
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string | undefined;

  /**
   * <p>The column schema of the table.</p>
   */
  InputColumns: InputColumn[] | undefined;

  /**
   * <p>The name of the relational table.</p>
   */
  Name: string | undefined;

  /**
   * <p>The schema name. This name applies to certain relational database engines.</p>
   */
  Schema?: string;
}

export namespace RelationalTable {
  export const filterSensitiveLog = (obj: RelationalTable): any => ({
    ...obj
  });
  export const isa = (o: any): o is RelationalTable =>
    __isa(o, "RelationalTable");
}

/**
 * <p>A transform operation that renames a column.</p>
 */
export interface RenameColumnOperation {
  __type?: "RenameColumnOperation";
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
    ...obj
  });
  export const isa = (o: any): o is RenameColumnOperation =>
    __isa(o, "RenameColumnOperation");
}

/**
 * <p>The resource specified already exists. </p>
 */
export interface ResourceExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceExistsException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;

  /**
   * <p>The AWS request ID for this request.</p>
   */
  ResourceType?: ExceptionResourceType | string;
}

export namespace ResourceExistsException {
  export const filterSensitiveLog = (obj: ResourceExistsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceExistsException =>
    __isa(o, "ResourceExistsException");
}

/**
 * <p>One or more resources can't be found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;

  /**
   * <p>The AWS request ID for this request.</p>
   */
  ResourceType?: ExceptionResourceType | string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>Permission for the resource.</p>
 */
export interface ResourcePermission {
  __type?: "ResourcePermission";
  /**
   * <p>The action to grant or revoke permissions on, for example
   * 				<code>"quicksight:DescribeDashboard"</code>.</p>
   */
  Actions: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon QuickSight user or group, or an IAM ARN. If you
   * 			are using cross-account resource sharing, this is the IAM ARN of an account root.
   * 			Otherwise, it is the ARN of a QuickSight user or group. .</p>
   */
  Principal: string | undefined;
}

export namespace ResourcePermission {
  export const filterSensitiveLog = (obj: ResourcePermission): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourcePermission =>
    __isa(o, "ResourcePermission");
}

export enum ResourceStatus {
  CREATION_FAILED = "CREATION_FAILED",
  CREATION_IN_PROGRESS = "CREATION_IN_PROGRESS",
  CREATION_SUCCESSFUL = "CREATION_SUCCESSFUL",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL"
}

/**
 * <p>This resource is currently unavailable.</p>
 */
export interface ResourceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceUnavailableException";
  $fault: "server";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;

  /**
   * <p>The resource type for this request.</p>
   */
  ResourceType?: ExceptionResourceType | string;
}

export namespace ResourceUnavailableException {
  export const filterSensitiveLog = (
    obj: ResourceUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceUnavailableException =>
    __isa(o, "ResourceUnavailableException");
}

/**
 * <p>Information about rows for a data set SPICE ingestion.</p>
 */
export interface RowInfo {
  __type?: "RowInfo";
  /**
   * <p>The number of rows that were not ingested.</p>
   */
  RowsDropped?: number;

  /**
   * <p>The number of rows that were ingested.</p>
   */
  RowsIngested?: number;
}

export namespace RowInfo {
  export const filterSensitiveLog = (obj: RowInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is RowInfo => __isa(o, "RowInfo");
}

/**
 * <p>The row-level security configuration for the dataset.</p>
 */
export interface RowLevelPermissionDataSet {
  __type?: "RowLevelPermissionDataSet";
  /**
   * <p>The Amazon Resource Name (ARN) of the permission dataset.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Permission policy.</p>
   */
  PermissionPolicy: RowLevelPermissionPolicy | string | undefined;
}

export namespace RowLevelPermissionDataSet {
  export const filterSensitiveLog = (obj: RowLevelPermissionDataSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is RowLevelPermissionDataSet =>
    __isa(o, "RowLevelPermissionDataSet");
}

export enum RowLevelPermissionPolicy {
  DENY_ACCESS = "DENY_ACCESS",
  GRANT_ACCESS = "GRANT_ACCESS"
}

/**
 * <p>S3 parameters.</p>
 */
export interface S3Parameters {
  __type?: "S3Parameters";
  /**
   * <p>Location of the Amazon S3 manifest file. This is NULL if the manifest file was uploaded
   * 			in the console.</p>
   */
  ManifestFileLocation: ManifestFileLocation | undefined;
}

export namespace S3Parameters {
  export const filterSensitiveLog = (obj: S3Parameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3Parameters => __isa(o, "S3Parameters");
}

/**
 * <p>A physical table type for as S3 data source.</p>
 */
export interface S3Source {
  __type?: "S3Source";
  /**
   * <p>The amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string | undefined;

  /**
   * <p>A physical table type for as S3 data source.</p>
   */
  InputColumns: InputColumn[] | undefined;

  /**
   * <p>Information about the format for the S3 source file or files.</p>
   */
  UploadSettings?: UploadSettings;
}

export namespace S3Source {
  export const filterSensitiveLog = (obj: S3Source): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3Source => __isa(o, "S3Source");
}

/**
 * <p>ServiceNow parameters.</p>
 */
export interface ServiceNowParameters {
  __type?: "ServiceNowParameters";
  /**
   * <p>URL of the base site.</p>
   */
  SiteBaseUrl: string | undefined;
}

export namespace ServiceNowParameters {
  export const filterSensitiveLog = (obj: ServiceNowParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceNowParameters =>
    __isa(o, "ServiceNowParameters");
}

/**
 * <p>The number of minutes specified for the lifetime of a session isn't valid. The session
 * 			lifetime must be 15-600 minutes.</p>
 */
export interface SessionLifetimeInMinutesInvalidException
  extends __SmithyException,
    $MetadataBearer {
  name: "SessionLifetimeInMinutesInvalidException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace SessionLifetimeInMinutesInvalidException {
  export const filterSensitiveLog = (
    obj: SessionLifetimeInMinutesInvalidException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SessionLifetimeInMinutesInvalidException =>
    __isa(o, "SessionLifetimeInMinutesInvalidException");
}

/**
 * <p>Sheet controls option.</p>
 */
export interface SheetControlsOption {
  __type?: "SheetControlsOption";
  /**
   * <p>Visibility state.</p>
   */
  VisibilityState?: DashboardUIState | string;
}

export namespace SheetControlsOption {
  export const filterSensitiveLog = (obj: SheetControlsOption): any => ({
    ...obj
  });
  export const isa = (o: any): o is SheetControlsOption =>
    __isa(o, "SheetControlsOption");
}

/**
 * <p>Snowflake parameters.</p>
 */
export interface SnowflakeParameters {
  __type?: "SnowflakeParameters";
  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Warehouse.</p>
   */
  Warehouse: string | undefined;
}

export namespace SnowflakeParameters {
  export const filterSensitiveLog = (obj: SnowflakeParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnowflakeParameters =>
    __isa(o, "SnowflakeParameters");
}

/**
 * <p>Spark parameters.</p>
 */
export interface SparkParameters {
  __type?: "SparkParameters";
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
    ...obj
  });
  export const isa = (o: any): o is SparkParameters =>
    __isa(o, "SparkParameters");
}

/**
 * <p>SQL Server parameters.</p>
 */
export interface SqlServerParameters {
  __type?: "SqlServerParameters";
  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;
}

export namespace SqlServerParameters {
  export const filterSensitiveLog = (obj: SqlServerParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is SqlServerParameters =>
    __isa(o, "SqlServerParameters");
}

/**
 * <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your
 * 			underlying data source.</p>
 */
export interface SslProperties {
  __type?: "SslProperties";
  /**
   * <p>A Boolean option to control whether SSL should be disabled.</p>
   */
  DisableSsl?: boolean;
}

export namespace SslProperties {
  export const filterSensitiveLog = (obj: SslProperties): any => ({
    ...obj
  });
  export const isa = (o: any): o is SslProperties => __isa(o, "SslProperties");
}

/**
 * <p>String parameter.</p>
 */
export interface StringParameter {
  __type?: "StringParameter";
  /**
   * <p>A display name for the dataset.</p>
   */
  Name: string | undefined;

  /**
   * <p>Values.</p>
   */
  Values: string[] | undefined;
}

export namespace StringParameter {
  export const filterSensitiveLog = (obj: StringParameter): any => ({
    ...obj
  });
  export const isa = (o: any): o is StringParameter =>
    __isa(o, "StringParameter");
}

/**
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
 * 			resource.</p>
 */
export interface Tag {
  __type?: "Tag";
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
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p>A transform operation that tags a column with additional information.</p>
 */
export interface TagColumnOperation {
  __type?: "TagColumnOperation";
  /**
   * <p>The column that this operation acts on.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>The dataset column tag, currently only used for geospatial type tagging. .</p>
   * 		       <note>
   * 			         <p>This is not tags for the AWS tagging feature. .</p>
   * 		       </note>
   */
  Tags: ColumnTag[] | undefined;
}

export namespace TagColumnOperation {
  export const filterSensitiveLog = (obj: TagColumnOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagColumnOperation =>
    __isa(o, "TagColumnOperation");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
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
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceResponse =>
    __isa(o, "TagResourceResponse");
}

/**
 * <p>A template object. A <i>template</i> is an entity in QuickSight that
 * 			encapsulates the metadata required to create an analysis and that you can use to create
 * 			a dashboard. A template adds a layer of abstraction by using placeholders to replace the
 * 			dataset associated with the analysis. You can use templates to create dashboards by
 * 			replacing dataset placeholders with datasets that follow the same schema that was used
 * 			to create the source analysis and template.</p>
 * 		       <p>You can share templates across AWS accounts by allowing users in other AWS accounts to
 * 			create a template or a dashboard from an existing template.</p>
 */
export interface Template {
  __type?: "Template";
  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  Arn?: string;

  /**
   * <p>Time when this was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Time when this was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The display name of the template.</p>
   */
  Name?: string;

  /**
   * <p>The ID for the template. This is unique per AWS Region for each AWS account.</p>
   */
  TemplateId?: string;

  /**
   * <p>A structure describing the versions of the template.</p>
   */
  Version?: TemplateVersion;
}

export namespace Template {
  export const filterSensitiveLog = (obj: Template): any => ({
    ...obj
  });
  export const isa = (o: any): o is Template => __isa(o, "Template");
}

/**
 * <p>The template alias.</p>
 */
export interface TemplateAlias {
  __type?: "TemplateAlias";
  /**
   * <p>The display name of the template alias.</p>
   */
  AliasName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template alias.</p>
   */
  Arn?: string;

  /**
   * <p>The version number of the template alias.</p>
   */
  TemplateVersionNumber?: number;
}

export namespace TemplateAlias {
  export const filterSensitiveLog = (obj: TemplateAlias): any => ({
    ...obj
  });
  export const isa = (o: any): o is TemplateAlias => __isa(o, "TemplateAlias");
}

/**
 * <p>List of errors that occurred when the template version creation failed.</p>
 */
export interface TemplateError {
  __type?: "TemplateError";
  /**
   * <p>Description of the error type.</p>
   */
  Message?: string;

  /**
   * <p>Type of error.</p>
   */
  Type?: TemplateErrorType | string;
}

export namespace TemplateError {
  export const filterSensitiveLog = (obj: TemplateError): any => ({
    ...obj
  });
  export const isa = (o: any): o is TemplateError => __isa(o, "TemplateError");
}

export enum TemplateErrorType {
  DATA_SET_NOT_FOUND = "DATA_SET_NOT_FOUND",
  INTERNAL_FAILURE = "INTERNAL_FAILURE"
}

/**
 * <p>The source analysis of the template.</p>
 */
export interface TemplateSourceAnalysis {
  __type?: "TemplateSourceAnalysis";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>A structure containing information about the dataset references used as placeholders in
   * 			the template.</p>
   */
  DataSetReferences: DataSetReference[] | undefined;
}

export namespace TemplateSourceAnalysis {
  export const filterSensitiveLog = (obj: TemplateSourceAnalysis): any => ({
    ...obj
  });
  export const isa = (o: any): o is TemplateSourceAnalysis =>
    __isa(o, "TemplateSourceAnalysis");
}

/**
 * <p>The source entity of the template.</p>
 */
export interface TemplateSourceEntity {
  __type?: "TemplateSourceEntity";
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
    ...obj
  });
  export const isa = (o: any): o is TemplateSourceEntity =>
    __isa(o, "TemplateSourceEntity");
}

/**
 * <p>The source template of the template.</p>
 */
export interface TemplateSourceTemplate {
  __type?: "TemplateSourceTemplate";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;
}

export namespace TemplateSourceTemplate {
  export const filterSensitiveLog = (obj: TemplateSourceTemplate): any => ({
    ...obj
  });
  export const isa = (o: any): o is TemplateSourceTemplate =>
    __isa(o, "TemplateSourceTemplate");
}

/**
 * <p>The template summary.</p>
 */
export interface TemplateSummary {
  __type?: "TemplateSummary";
  /**
   * <p>A summary of a template.</p>
   */
  Arn?: string;

  /**
   * <p>The last time that this template was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last time that this template was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A structure containing a list of version numbers for the template summary.</p>
   */
  LatestVersionNumber?: number;

  /**
   * <p>A display name for the template.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the template. This ID is unique per AWS Region for each AWS account.</p>
   */
  TemplateId?: string;
}

export namespace TemplateSummary {
  export const filterSensitiveLog = (obj: TemplateSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is TemplateSummary =>
    __isa(o, "TemplateSummary");
}

/**
 * <p>A version of a template.</p>
 */
export interface TemplateVersion {
  __type?: "TemplateVersion";
  /**
   * <p>The time that this template version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Schema of the dataset identified by the placeholder. The idea is that any dashboard
   * 			created from the template should be bound to new datasets matching the same schema
   * 			described through this API. .</p>
   */
  DataSetConfigurations?: DataSetConfiguration[];

  /**
   * <p>The description of the template.</p>
   */
  Description?: string;

  /**
   * <p>Errors associated with the template.</p>
   */
  Errors?: TemplateError[];

  /**
   * <p>The Amazon Resource Name (ARN) of the analysis or template which was used to create this
   * 			template.</p>
   */
  SourceEntityArn?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The version number of the template.</p>
   */
  VersionNumber?: number;
}

export namespace TemplateVersion {
  export const filterSensitiveLog = (obj: TemplateVersion): any => ({
    ...obj
  });
  export const isa = (o: any): o is TemplateVersion =>
    __isa(o, "TemplateVersion");
}

/**
 * <p>The template version.</p>
 */
export interface TemplateVersionSummary {
  __type?: "TemplateVersionSummary";
  /**
   * <p>The ARN of the template version.</p>
   */
  Arn?: string;

  /**
   * <p>The time that this template version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The description of the template version.</p>
   */
  Description?: string;

  /**
   * <p>The status of the template version.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The version number of the template version.</p>
   */
  VersionNumber?: number;
}

export namespace TemplateVersionSummary {
  export const filterSensitiveLog = (obj: TemplateVersionSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is TemplateVersionSummary =>
    __isa(o, "TemplateVersionSummary");
}

/**
 * <p>Teradata parameters.</p>
 */
export interface TeradataParameters {
  __type?: "TeradataParameters";
  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;
}

export namespace TeradataParameters {
  export const filterSensitiveLog = (obj: TeradataParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is TeradataParameters =>
    __isa(o, "TeradataParameters");
}

export enum TextQualifier {
  DOUBLE_QUOTE = "DOUBLE_QUOTE",
  SINGLE_QUOTE = "SINGLE_QUOTE"
}

/**
 * <p>Access is throttled.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThrottlingException =>
    __isa(o, "ThrottlingException");
}

/**
 * <p>A data transformation on a logical table. This is a variant type structure. For this
 * 			structure to be valid, only one of the attributes can be non-null.</p>
 */
export interface TransformOperation {
  __type?: "TransformOperation";
  /**
   * <p>A transform operation that casts a column to a different type.</p>
   */
  CastColumnTypeOperation?: CastColumnTypeOperation;

  /**
   * <p>An operation that creates calculated columns. Columns created in one such operation form
   * 			a lexical closure.</p>
   */
  CreateColumnsOperation?: CreateColumnsOperation;

  /**
   * <p>An operation that filters rows based on some condition.</p>
   */
  FilterOperation?: FilterOperation;

  /**
   * <p>An operation that projects columns. Operations that come after a projection can only
   * 			refer to projected columns.</p>
   */
  ProjectOperation?: ProjectOperation;

  /**
   * <p>An operation that renames a column.</p>
   */
  RenameColumnOperation?: RenameColumnOperation;

  /**
   * <p>An operation that tags a column with additional information.</p>
   */
  TagColumnOperation?: TagColumnOperation;
}

export namespace TransformOperation {
  export const filterSensitiveLog = (obj: TransformOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransformOperation =>
    __isa(o, "TransformOperation");
}

/**
 * <p>Twitter parameters.</p>
 */
export interface TwitterParameters {
  __type?: "TwitterParameters";
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
    ...obj
  });
  export const isa = (o: any): o is TwitterParameters =>
    __isa(o, "TwitterParameters");
}

/**
 * <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 */
export interface UnsupportedUserEditionException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedUserEditionException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace UnsupportedUserEditionException {
  export const filterSensitiveLog = (
    obj: UnsupportedUserEditionException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedUserEditionException =>
    __isa(o, "UnsupportedUserEditionException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceResponse =>
    __isa(o, "UntagResourceResponse");
}

export interface UpdateDashboardPermissionsRequest {
  __type?: "UpdateDashboardPermissionsRequest";
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
  export const filterSensitiveLog = (
    obj: UpdateDashboardPermissionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDashboardPermissionsRequest =>
    __isa(o, "UpdateDashboardPermissionsRequest");
}

export interface UpdateDashboardPermissionsResponse {
  __type?: "UpdateDashboardPermissionsResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>Information about the permissions on the dashboard.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateDashboardPermissionsResponse {
  export const filterSensitiveLog = (
    obj: UpdateDashboardPermissionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDashboardPermissionsResponse =>
    __isa(o, "UpdateDashboardPermissionsResponse");
}

export interface UpdateDashboardPublishedVersionRequest {
  __type?: "UpdateDashboardPublishedVersionRequest";
  /**
   * <p>The ID of the AWS account that contains the dashboard that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number of the dashboard.</p>
   */
  VersionNumber: number | undefined;
}

export namespace UpdateDashboardPublishedVersionRequest {
  export const filterSensitiveLog = (
    obj: UpdateDashboardPublishedVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDashboardPublishedVersionRequest =>
    __isa(o, "UpdateDashboardPublishedVersionRequest");
}

export interface UpdateDashboardPublishedVersionResponse {
  __type?: "UpdateDashboardPublishedVersionResponse";
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
  export const filterSensitiveLog = (
    obj: UpdateDashboardPublishedVersionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDashboardPublishedVersionResponse =>
    __isa(o, "UpdateDashboardPublishedVersionResponse");
}

export interface UpdateDashboardRequest {
  __type?: "UpdateDashboardRequest";
  /**
   * <p>The ID of the AWS account that contains the dashboard that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

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
   * 					can be either <code>COLLAPSED</code> or <code>EXPANDED</code>. The sheet
   * 					controls pane is collapsed by default when set to true. This option is
   * 					<code>COLLAPSED</code> by default. </p>
   * 			         </li>
   *          </ul>
   */
  DashboardPublishOptions?: DashboardPublishOptions;

  /**
   * <p>The display name of the dashboard.</p>
   */
  Name: string | undefined;

  /**
   * <p>A structure that contains the parameters of the dashboard.</p>
   */
  Parameters?: _Parameters;

  /**
   * <p>The template or analysis from which the dashboard is created. The <code>SouceTemplate</code>
   * 			entity accepts the Amazon Resource Name (ARN) of the template and also references to
   * 			replacement datasets for the placeholders set when creating the template. The
   * 			replacement datasets need to follow the same schema as the datasets for which
   * 			placeholders were created when creating the template.</p>
   */
  SourceEntity: DashboardSourceEntity | undefined;

  /**
   * <p>A description for the first version of the dashboard being created.</p>
   */
  VersionDescription?: string;
}

export namespace UpdateDashboardRequest {
  export const filterSensitiveLog = (obj: UpdateDashboardRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDashboardRequest =>
    __isa(o, "UpdateDashboardRequest");
}

export interface UpdateDashboardResponse {
  __type?: "UpdateDashboardResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The creation status of the request.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The ARN of the dashboard, including the version number.</p>
   */
  VersionArn?: string;
}

export namespace UpdateDashboardResponse {
  export const filterSensitiveLog = (obj: UpdateDashboardResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDashboardResponse =>
    __isa(o, "UpdateDashboardResponse");
}

export interface UpdateDataSetPermissionsRequest {
  __type?: "UpdateDataSetPermissionsRequest";
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
  export const filterSensitiveLog = (
    obj: UpdateDataSetPermissionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDataSetPermissionsRequest =>
    __isa(o, "UpdateDataSetPermissionsRequest");
}

export interface UpdateDataSetPermissionsResponse {
  __type?: "UpdateDataSetPermissionsResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DataSetArn?: string;

  /**
   * <p>The ID for the dataset whose permissions you want to update. This ID is unique per AWS
   * 			Region for each AWS account.</p>
   */
  DataSetId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateDataSetPermissionsResponse {
  export const filterSensitiveLog = (
    obj: UpdateDataSetPermissionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDataSetPermissionsResponse =>
    __isa(o, "UpdateDataSetPermissionsResponse");
}

export interface UpdateDataSetRequest {
  __type?: "UpdateDataSetRequest";
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * <p>The ID for the dataset that you want to update. This ID is unique per AWS Region for each
   * 			AWS account.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode: DataSetImportMode | string | undefined;

  /**
   * <p>Configures the combination and transformation of the data from the physical tables.</p>
   */
  LogicalTableMap?: { [key: string]: LogicalTable };

  /**
   * <p>The display name for the dataset.</p>
   */
  Name: string | undefined;

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap: { [key: string]: PhysicalTable } | undefined;

  /**
   * <p>The row-level security configuration for the data you want to create.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
}

export namespace UpdateDataSetRequest {
  export const filterSensitiveLog = (obj: UpdateDataSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDataSetRequest =>
    __isa(o, "UpdateDataSetRequest");
}

export interface UpdateDataSetResponse {
  __type?: "UpdateDataSetResponse";
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
   * <p>The ID of the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateDataSetResponse {
  export const filterSensitiveLog = (obj: UpdateDataSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDataSetResponse =>
    __isa(o, "UpdateDataSetResponse");
}

export interface UpdateDataSourcePermissionsRequest {
  __type?: "UpdateDataSourcePermissionsRequest";
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account. </p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>A list of resource permissions that you want to grant on the data source.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>A list of resource permissions that you want to revoke on the data source.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

export namespace UpdateDataSourcePermissionsRequest {
  export const filterSensitiveLog = (
    obj: UpdateDataSourcePermissionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDataSourcePermissionsRequest =>
    __isa(o, "UpdateDataSourcePermissionsRequest");
}

export interface UpdateDataSourcePermissionsResponse {
  __type?: "UpdateDataSourcePermissionsResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateDataSourcePermissionsResponse {
  export const filterSensitiveLog = (
    obj: UpdateDataSourcePermissionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDataSourcePermissionsResponse =>
    __isa(o, "UpdateDataSourcePermissionsResponse");
}

export interface UpdateDataSourceRequest {
  __type?: "UpdateDataSourceRequest";
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

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
   * <p>The parameters that QuickSight uses to connect to your underlying source.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * <p>A display name for the data source.</p>
   */
  Name: string | undefined;

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
    ...(obj.Credentials && { Credentials: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is UpdateDataSourceRequest =>
    __isa(o, "UpdateDataSourceRequest");
}

export interface UpdateDataSourceResponse {
  __type?: "UpdateDataSourceResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The update status of the data source's last update.</p>
   */
  UpdateStatus?: ResourceStatus | string;
}

export namespace UpdateDataSourceResponse {
  export const filterSensitiveLog = (obj: UpdateDataSourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDataSourceResponse =>
    __isa(o, "UpdateDataSourceResponse");
}

export interface UpdateGroupRequest {
  __type?: "UpdateGroupRequest";
  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The description for the group that you want to update.</p>
   */
  Description?: string;

  /**
   * <p>The name of the group that you want to update.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace UpdateGroupRequest {
  export const filterSensitiveLog = (obj: UpdateGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGroupRequest =>
    __isa(o, "UpdateGroupRequest");
}

export interface UpdateGroupResponse {
  __type?: "UpdateGroupResponse";
  /**
   * <p>The name of the group.</p>
   */
  Group?: Group;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateGroupResponse {
  export const filterSensitiveLog = (obj: UpdateGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGroupResponse =>
    __isa(o, "UpdateGroupResponse");
}

export interface UpdateIAMPolicyAssignmentRequest {
  __type?: "UpdateIAMPolicyAssignmentRequest";
  /**
   * <p>The name of the assignment. This name must be unique within an AWS account.</p>
   */
  AssignmentName: string | undefined;

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
   * <p>The ID of the AWS account that contains the IAM policy assignment.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The QuickSight users, groups, or both that you want to assign the policy to.</p>
   */
  Identities?: { [key: string]: string[] };

  /**
   * <p>The namespace of the assignment.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The ARN for the IAM policy to apply to the QuickSight users and groups
   * 			specified in this assignment.</p>
   */
  PolicyArn?: string;
}

export namespace UpdateIAMPolicyAssignmentRequest {
  export const filterSensitiveLog = (
    obj: UpdateIAMPolicyAssignmentRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateIAMPolicyAssignmentRequest =>
    __isa(o, "UpdateIAMPolicyAssignmentRequest");
}

export interface UpdateIAMPolicyAssignmentResponse {
  __type?: "UpdateIAMPolicyAssignmentResponse";
  /**
   * <p>The ID of the assignment.</p>
   */
  AssignmentId?: string;

  /**
   * <p>The name of the assignment. </p>
   */
  AssignmentName?: string;

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
   * <p>The QuickSight users, groups, or both that the IAM policy is assigned to.</p>
   */
  Identities?: { [key: string]: string[] };

  /**
   * <p>The ARN for the IAM policy applied to the QuickSight users and groups specified in this
   * 			assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace UpdateIAMPolicyAssignmentResponse {
  export const filterSensitiveLog = (
    obj: UpdateIAMPolicyAssignmentResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateIAMPolicyAssignmentResponse =>
    __isa(o, "UpdateIAMPolicyAssignmentResponse");
}

export interface UpdateTemplateAliasRequest {
  __type?: "UpdateTemplateAliasRequest";
  /**
   * <p>The alias of the template that you want to update. If you name a specific alias, you update
   * 			the version that the alias points to. You can specify the latest version of the template
   * 			by providing the keyword <code>$LATEST</code> in the <code>AliasName</code> parameter.
   * 			The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName: string | undefined;

  /**
   * <p>The ID of the AWS account that contains the template alias that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The version number of the template.</p>
   */
  TemplateVersionNumber: number | undefined;
}

export namespace UpdateTemplateAliasRequest {
  export const filterSensitiveLog = (obj: UpdateTemplateAliasRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTemplateAliasRequest =>
    __isa(o, "UpdateTemplateAliasRequest");
}

export interface UpdateTemplateAliasResponse {
  __type?: "UpdateTemplateAliasResponse";
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
  export const filterSensitiveLog = (
    obj: UpdateTemplateAliasResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTemplateAliasResponse =>
    __isa(o, "UpdateTemplateAliasResponse");
}

export interface UpdateTemplatePermissionsRequest {
  __type?: "UpdateTemplatePermissionsRequest";
  /**
   * <p>The ID of the AWS account that contains the template.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A list of resource permissions to be granted on the template. </p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>A list of resource permissions to be revoked from the template. </p>
   */
  RevokePermissions?: ResourcePermission[];

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;
}

export namespace UpdateTemplatePermissionsRequest {
  export const filterSensitiveLog = (
    obj: UpdateTemplatePermissionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTemplatePermissionsRequest =>
    __isa(o, "UpdateTemplatePermissionsRequest");
}

export interface UpdateTemplatePermissionsResponse {
  __type?: "UpdateTemplatePermissionsResponse";
  /**
   * <p>A list of resource permissions to be set on the template.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  TemplateArn?: string;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;
}

export namespace UpdateTemplatePermissionsResponse {
  export const filterSensitiveLog = (
    obj: UpdateTemplatePermissionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTemplatePermissionsResponse =>
    __isa(o, "UpdateTemplatePermissionsResponse");
}

export interface UpdateTemplateRequest {
  __type?: "UpdateTemplateRequest";
  /**
   * <p>The ID of the AWS account that contains the template that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name for the template.</p>
   */
  Name?: string;

  /**
   * <p>The source QuickSight entity from which this template is being updated. You can currently
   * 			update templates from an Analysis or another template.</p>
   */
  SourceEntity: TemplateSourceEntity | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>A description of the current template version that is being updated. Every time you call
   * 				<code>UpdateTemplate</code>, you create a new version of the template. Each version
   * 			of the template maintains a description of the version in the
   * 				<code>VersionDescription</code> field.</p>
   */
  VersionDescription?: string;
}

export namespace UpdateTemplateRequest {
  export const filterSensitiveLog = (obj: UpdateTemplateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTemplateRequest =>
    __isa(o, "UpdateTemplateRequest");
}

export interface UpdateTemplateResponse {
  __type?: "UpdateTemplateResponse";
  /**
   * <p>The Amazon Resource Name (ARN) for the template.</p>
   */
  Arn?: string;

  /**
   * <p>The creation status of the template.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The ARN for the template, including the version information of the first version.</p>
   */
  VersionArn?: string;
}

export namespace UpdateTemplateResponse {
  export const filterSensitiveLog = (obj: UpdateTemplateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTemplateResponse =>
    __isa(o, "UpdateTemplateResponse");
}

export interface UpdateUserRequest {
  __type?: "UpdateUserRequest";
  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The email address of the user that you want to update.</p>
   */
  Email: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

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

  /**
   * <p>The Amazon QuickSight user name that you want to update.</p>
   */
  UserName: string | undefined;
}

export namespace UpdateUserRequest {
  export const filterSensitiveLog = (obj: UpdateUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateUserRequest =>
    __isa(o, "UpdateUserRequest");
}

export interface UpdateUserResponse {
  __type?: "UpdateUserResponse";
  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon QuickSight user.</p>
   */
  User?: User;
}

export namespace UpdateUserResponse {
  export const filterSensitiveLog = (obj: UpdateUserResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateUserResponse =>
    __isa(o, "UpdateUserResponse");
}

/**
 * <p>Information about the format for a source file or files.</p>
 */
export interface UploadSettings {
  __type?: "UploadSettings";
  /**
   * <p>Whether the file has a header row, or the files each have a header row.</p>
   */
  ContainsHeader?: boolean;

  /**
   * <p>The delimiter between values in the file.</p>
   */
  Delimiter?: string;

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
}

export namespace UploadSettings {
  export const filterSensitiveLog = (obj: UploadSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is UploadSettings =>
    __isa(o, "UploadSettings");
}

/**
 * <p>A registered user of Amazon QuickSight. Currently, an Amazon QuickSight subscription
 * 			can't contain more than 20 million users.</p>
 */
export interface User {
  __type?: "User";
  /**
   * <p>The active status of user. When you create an Amazon QuickSight user that’s not an IAM user
   * 			or an Active Directory user, that user is inactive until they sign in and provide a
   * 			password.</p>
   */
  Active?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) for the user.</p>
   */
  Arn?: string;

  /**
   * <p>The user's email address.</p>
   */
  Email?: string;

  /**
   * <p>The type of identity authentication used by the user.</p>
   */
  IdentityType?: IdentityType | string;

  /**
   * <p>The principal ID of the user.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The Amazon QuickSight role for the user. The user role can be one of the
   * 			following:.</p>
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
  Role?: UserRole | string;

  /**
   * <p>The user's user name.</p>
   */
  UserName?: string;
}

export namespace User {
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj
  });
  export const isa = (o: any): o is User => __isa(o, "User");
}

export enum UserRole {
  ADMIN = "ADMIN",
  AUTHOR = "AUTHOR",
  READER = "READER",
  RESTRICTED_AUTHOR = "RESTRICTED_AUTHOR",
  RESTRICTED_READER = "RESTRICTED_READER"
}

/**
 * <p>VPC connection properties.</p>
 */
export interface VpcConnectionProperties {
  __type?: "VpcConnectionProperties";
  /**
   * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
   */
  VpcConnectionArn: string | undefined;
}

export namespace VpcConnectionProperties {
  export const filterSensitiveLog = (obj: VpcConnectionProperties): any => ({
    ...obj
  });
  export const isa = (o: any): o is VpcConnectionProperties =>
    __isa(o, "VpcConnectionProperties");
}
