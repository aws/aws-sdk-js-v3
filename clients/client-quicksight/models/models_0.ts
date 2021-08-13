import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct access keys.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon QuickSight customizations associated with your Amazon Web Services account; or a QuickSight namespace in a specific Amazon Web Services Region;.</p>
 */
export interface AccountCustomization {
  /**
   * <p>The default theme for this QuickSight subscription.</p>
   */
  DefaultTheme?: string;
}

export namespace AccountCustomization {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountCustomization): any => ({
    ...obj,
  });
}

export enum Edition {
  ENTERPRISE = "ENTERPRISE",
  STANDARD = "STANDARD",
}

/**
 * <p>The QuickSight settings associated with your Amazon Web Services account;.</p>
 */
export interface AccountSettings {
  /**
   * <p>The "account name" you provided for the QuickSight subscription in your Amazon Web Services account;.
   *             You create this name when you sign up for QuickSight. It is unique in all of Amazon Web Services and
   *             it appears only when users sign in.</p>
   */
  AccountName?: string;

  /**
   * <p>The edition of QuickSight that you're currently subscribed to:
   *         Enterprise edition or Standard edition.</p>
   */
  Edition?: Edition | string;

  /**
   * <p>The default QuickSight namespace for your Amazon Web Services account;. </p>
   */
  DefaultNamespace?: string;

  /**
   * <p>The main notification email for your QuickSight subscription.</p>
   */
  NotificationEmail?: string;
}

export namespace AccountSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The active Identity and Access Management (IAM) policy assignment.</p>
 */
export interface ActiveIAMPolicyAssignment {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActiveIAMPolicyAssignment): any => ({
    ...obj,
  });
}

export enum DashboardBehavior {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AmazonElasticsearchParameters): any => ({
    ...obj,
  });
}

export enum AnalysisErrorType {
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

/**
 * <p>A metadata error structure for an analysis.</p>
 */
export interface AnalysisError {
  /**
   * <p>The type of the analysis error.</p>
   */
  Type?: AnalysisErrorType | string;

  /**
   * <p>The message associated with the analysis error.</p>
   */
  Message?: string;
}

export namespace AnalysisError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisError): any => ({
    ...obj,
  });
}

/**
 * <p>A <i>sheet</i>, which is an object that contains a set of visuals that
 *             are viewed together on one page in Amazon QuickSight. Every analysis and dashboard
 *             contains at least one sheet. Each sheet contains at least one visualization widget, for
 *             example a chart, pivot table, or narrative insight. Sheets can be associated with other
 *             components, such as controls, filters, and so on.</p>
 */
export interface Sheet {
  /**
   * <p>The unique identifier associated with a sheet.</p>
   */
  SheetId?: string;

  /**
   * <p>The name of a sheet. This name is displayed on the sheet's tab in the QuickSight
   *             console.</p>
   */
  Name?: string;
}

export namespace Sheet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Sheet): any => ({
    ...obj,
  });
}

export enum ResourceStatus {
  CREATION_FAILED = "CREATION_FAILED",
  CREATION_IN_PROGRESS = "CREATION_IN_PROGRESS",
  CREATION_SUCCESSFUL = "CREATION_SUCCESSFUL",
  DELETED = "DELETED",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL",
}

/**
 * <p>Metadata structure for an analysis in Amazon QuickSight</p>
 */
export interface Analysis {
  /**
   * <p>The ID of the analysis.</p>
   */
  AnalysisId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the analysis.</p>
   */
  Arn?: string;

  /**
   * <p>The descriptive name of the analysis.</p>
   */
  Name?: string;

  /**
   * <p>Status associated with the analysis.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>Errors associated with the analysis.</p>
   */
  Errors?: AnalysisError[];

  /**
   * <p>The ARNs of the datasets of the analysis.</p>
   */
  DataSetArns?: string[];

  /**
   * <p>The ARN of the theme of the analysis.</p>
   */
  ThemeArn?: string;

  /**
   * <p>The time that the analysis was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The time that the analysis was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   */
  Sheets?: Sheet[];
}

export namespace Analysis {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Analysis): any => ({
    ...obj,
  });
}

export enum AnalysisFilterAttribute {
  QUICKSIGHT_USER = "QUICKSIGHT_USER",
}

export enum FilterOperator {
  StringEquals = "StringEquals",
}

/**
 * <p>A filter that you apply when searching for one or more analyses.</p>
 */
export interface AnalysisSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example
   *                 <code>"Operator": "StringEquals"</code>.</p>
   */
  Operator?: FilterOperator | string;

  /**
   * <p>The name of the value that you want to use as a filter, for example <code>"Name":
   *                 "QUICKSIGHT_USER"</code>.</p>
   */
  Name?: AnalysisFilterAttribute | string;

  /**
   * <p>The value of the named item, in this case <code>QUICKSIGHT_USER</code>, that you want
   *             to use as a filter, for example <code>"Value"</code>. An example is
   *                 <code>"arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   */
  Value?: string;
}

export namespace AnalysisSearchFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisSearchFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Dataset reference.</p>
 */
export interface DataSetReference {
  /**
   * <p>Dataset placeholder.</p>
   */
  DataSetPlaceholder: string | undefined;

  /**
   * <p>Dataset Amazon Resource Name (ARN).</p>
   */
  DataSetArn: string | undefined;
}

export namespace DataSetReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSetReference): any => ({
    ...obj,
  });
}

/**
 * <p>The source template of an analysis.</p>
 */
export interface AnalysisSourceTemplate {
  /**
   * <p>The dataset references of the source template of an analysis.</p>
   */
  DataSetReferences: DataSetReference[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source template of an analysis.</p>
   */
  Arn: string | undefined;
}

export namespace AnalysisSourceTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisSourceTemplate): any => ({
    ...obj,
  });
}

/**
 * <p>The source entity of an analysis.</p>
 */
export interface AnalysisSourceEntity {
  /**
   * <p>The source template for the source entity of the analysis.</p>
   */
  SourceTemplate?: AnalysisSourceTemplate;
}

export namespace AnalysisSourceEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisSourceEntity): any => ({
    ...obj,
  });
}

/**
 * <p>The summary metadata that describes an analysis.</p>
 */
export interface AnalysisSummary {
  /**
   * <p>The Amazon Resource Name (ARN) for the analysis.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the analysis. This ID displays in the URL.</p>
   */
  AnalysisId?: string;

  /**
   * <p>The name of the analysis. This name is displayed in the QuickSight console.</p>
   */
  Name?: string;

  /**
   * <p>The last known status for the analysis.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The time that the analysis was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The time that the analysis was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace AnalysisSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the dashboard that you want to embed.</p>
 */
export interface AnonymousUserDashboardEmbeddingConfiguration {
  /**
   * <p>The dashboard ID for the dashboard that you want the user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this dashboard.</p>
   *         <p>The Amazon Resource Name (ARN) of this dashboard must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with <code>InvalidParameterValueException</code>.</p>
   */
  InitialDashboardId: string | undefined;
}

export namespace AnonymousUserDashboardEmbeddingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnonymousUserDashboardEmbeddingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The type of experience you want to embed. For anonymous users, you can embed an Amazon QuickSight dashboard.</p>
 */
export interface AnonymousUserEmbeddingExperienceConfiguration {
  /**
   * <p>The type of embedding experience. In this case, an Amazon QuickSight dashboard.</p>
   */
  Dashboard?: AnonymousUserDashboardEmbeddingConfiguration;
}

export namespace AnonymousUserEmbeddingExperienceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnonymousUserEmbeddingExperienceConfiguration): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AthenaParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Aurora parameters.</p>
 */
export interface AuroraParameters {
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

export namespace AuroraParameters {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuroraPostgreSqlParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Web Services IoT Analytics parameters.</p>
 */
export interface AwsIotAnalyticsParameters {
  /**
   * <p>Dataset name.</p>
   */
  DataSetName: string | undefined;
}

export namespace AwsIotAnalyticsParameters {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BorderStyle): any => ({
    ...obj,
  });
}

/**
 * <p>A calculated column for a dataset.</p>
 */
export interface CalculatedColumn {
  /**
   * <p>Column name.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>A unique ID to identify a calculated column. During a dataset update, if the column ID
   *             of a calculated column matches that of an existing calculated column, Amazon QuickSight
   *             preserves the existing calculated column.</p>
   */
  ColumnId: string | undefined;

  /**
   * <p>An expression that defines the calculated column.</p>
   */
  Expression: string | undefined;
}

export namespace CalculatedColumn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CalculatedColumn): any => ({
    ...obj,
  });
}

export interface CancelIngestionRequest {
  /**
   * <p>The Amazon Web Services account; ID.</p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelIngestionRequest): any => ({
    ...obj,
  });
}

export interface CancelIngestionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the data ingestion.</p>
   */
  Arn?: string;

  /**
   * <p>An ID for the ingestion.</p>
   */
  IngestionId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace CancelIngestionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelIngestionResponse): any => ({
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
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace InternalFailureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more parameters has a value that isn't valid.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace InvalidParameterValueException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
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
 * <p>The resource specified already exists. </p>
 */
export interface ResourceExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceExistsException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The resource type for this request.</p>
   */
  ResourceType?: ExceptionResourceType | string;

  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace ResourceExistsException {
  /**
   * @internal
   */
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
  Message?: string;
  /**
   * <p>The resource type for this request.</p>
   */
  ResourceType?: ExceptionResourceType | string;

  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Access is throttled.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
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
 * <p>A transform operation that casts a column to a different type.</p>
 */
export interface CastColumnTypeOperation {
  /**
   * <p>Column name.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>New column data type.</p>
   */
  NewColumnType: ColumnDataType | string | undefined;

  /**
   * <p>When casting a column from string to datetime type, you can supply a string in a
   *             format supported by Amazon QuickSight to denote the source data format.</p>
   */
  Format?: string;
}

export namespace CastColumnTypeOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CastColumnTypeOperation): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata that contains a description for a column.</p>
 */
export interface ColumnDescription {
  /**
   * <p>The text of a description for a column.</p>
   */
  Text?: string;
}

export namespace ColumnDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnDescription): any => ({
    ...obj,
  });
}

export enum GeoSpatialCountryCode {
  US = "US",
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
   * <p>Country code.</p>
   */
  CountryCode: GeoSpatialCountryCode | string | undefined;

  /**
   * <p>Columns in this hierarchy.</p>
   */
  Columns: string[] | undefined;
}

export namespace GeoSpatialColumnGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GeoSpatialColumnGroup): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnGroupColumnSchema): any => ({
    ...obj,
  });
}

/**
 * <p>The column group schema.</p>
 */
export interface ColumnGroupSchema {
  /**
   * <p>The name of the column group schema.</p>
   */
  Name?: string;

  /**
   * <p>A structure containing the list of schemas for column group columns.</p>
   */
  ColumnGroupColumnSchemaList?: ColumnGroupColumnSchema[];
}

export namespace ColumnGroupSchema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnGroupSchema): any => ({
    ...obj,
  });
}

/**
 * <p>A rule defined to grant access on one or more restricted columns.
 *             Each dataset can have multiple rules.
 *             To create a restricted column, you add it to one or more rules.
 *             Each rule must contain at least one column and at least one user or group.
 *             To be able to see a restricted column, a user or group needs to be added
 *             to a rule for that column.</p>
 */
export interface ColumnLevelPermissionRule {
  /**
   * <p>An array of Amazon Resource Names (ARNs) for QuickSight users or groups.</p>
   */
  Principals?: string[];

  /**
   * <p>An array of column names.</p>
   */
  ColumnNames?: string[];
}

export namespace ColumnLevelPermissionRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnLevelPermissionRule): any => ({
    ...obj,
  });
}

/**
 * <p>The column schema.</p>
 */
export interface ColumnSchema {
  /**
   * <p>The name of the column schema.</p>
   */
  Name?: string;

  /**
   * <p>The data type of the column schema.</p>
   */
  DataType?: string;

  /**
   * <p>The geographic role of the column schema.</p>
   */
  GeographicRole?: string;
}

export namespace ColumnSchema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnSchema): any => ({
    ...obj,
  });
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

  /**
   * <p>A description for a column.</p>
   */
  ColumnDescription?: ColumnDescription;
}

export namespace ColumnTag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnTag): any => ({
    ...obj,
  });
}

/**
 * <p>A resource is already in a state that indicates an operation is happening that must complete
 * 			before a new update can be applied.</p>
 */
export interface ConcurrentUpdatingException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentUpdatingException";
  $fault: "server";
  Message?: string;
  RequestId?: string;
}

export namespace ConcurrentUpdatingException {
  /**
   * @internal
   */
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
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateAccountCustomizationRequest {
  /**
   * <p>The ID for the Amazon Web Services account; that you want to customize QuickSight for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The QuickSight namespace that you want to add customizations to.</p>
   */
  Namespace?: string;

  /**
   * <p>The QuickSight customizations you're adding in the current Amazon Web Services Region;. You can add
   *             these to an Amazon Web Services account; and a QuickSight namespace. </p>
   *         <p>For example, you can add a default theme by setting <code>AccountCustomization</code>
   *             to the midnight theme: <code>"AccountCustomization": { "DefaultTheme":
   *                 "arn:aws:quicksight::aws:theme/MIDNIGHT" }</code>. Or, you can add a custom theme by
   *             specifying <code>"AccountCustomization": { "DefaultTheme":
   *                 "arn:aws:quicksight:us-west-2:111122223333:theme/bdb844d0-0fe9-4d9d-b520-0fe602d93639"
   *                 }</code>. </p>
   */
  AccountCustomization: AccountCustomization | undefined;

  /**
   * <p>A list of the tags that you want to attach to this resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAccountCustomizationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAccountCustomizationRequest): any => ({
    ...obj,
  });
}

export interface CreateAccountCustomizationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the customization that you created for this Amazon Web Services account;.</p>
   */
  Arn?: string;

  /**
   * <p>The ID for the Amazon Web Services account; that you want to customize QuickSight for.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The namespace associated with the customization you're creating. </p>
   */
  Namespace?: string;

  /**
   * <p>The QuickSight customizations you're adding in the current Amazon Web Services Region;. </p>
   */
  AccountCustomization?: AccountCustomization;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace CreateAccountCustomizationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAccountCustomizationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This resource is currently unavailable.</p>
 */
export interface ResourceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ResourceUnavailableException";
  $fault: "server";
  Message?: string;
  /**
   * <p>The resource type for this request.</p>
   */
  ResourceType?: ExceptionResourceType | string;

  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace ResourceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>A date-time parameter.</p>
 */
export interface DateTimeParameter {
  /**
   * <p>A display name for the date-time parameter.</p>
   */
  Name: string | undefined;

  /**
   * <p>The values for the date-time parameter.</p>
   */
  Values: Date[] | undefined;
}

export namespace DateTimeParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DateTimeParameter): any => ({
    ...obj,
  });
}

/**
 * <p>A decimal parameter.</p>
 */
export interface DecimalParameter {
  /**
   * <p>A display name for the decimal parameter.</p>
   */
  Name: string | undefined;

  /**
   * <p>The values for the decimal parameter.</p>
   */
  Values: number[] | undefined;
}

export namespace DecimalParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DecimalParameter): any => ({
    ...obj,
  });
}

/**
 * <p>An integer parameter.</p>
 */
export interface IntegerParameter {
  /**
   * <p>The name of the integer parameter.</p>
   */
  Name: string | undefined;

  /**
   * <p>The values for the integer parameter.</p>
   */
  Values: number[] | undefined;
}

export namespace IntegerParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntegerParameter): any => ({
    ...obj,
  });
}

/**
 * <p>A string parameter.</p>
 */
export interface StringParameter {
  /**
   * <p>A display name for a string parameter.</p>
   */
  Name: string | undefined;

  /**
   * <p>The values of a string parameter.</p>
   */
  Values: string[] | undefined;
}

export namespace StringParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StringParameter): any => ({
    ...obj,
  });
}

/**
 * <p>A list of QuickSight parameters and the list's override values.</p>
 */
export interface _Parameters {
  /**
   * <p>String parameters.</p>
   */
  StringParameters?: StringParameter[];

  /**
   * <p>Integer parameters.</p>
   */
  IntegerParameters?: IntegerParameter[];

  /**
   * <p>Decimal parameters.</p>
   */
  DecimalParameters?: DecimalParameter[];

  /**
   * <p>Date-time parameters.</p>
   */
  DateTimeParameters?: DateTimeParameter[];
}

export namespace _Parameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: _Parameters): any => ({
    ...obj,
  });
}

/**
 * <p>Permission for the resource.</p>
 */
export interface ResourcePermission {
  /**
   * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
   *             </li>
   *             <li>
   *                 <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
   *             </li>
   *             <li>
   *                 <p>The ARN of an Amazon Web Services account; root: This is an IAM ARN rather than a QuickSight
   *                     ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
   *                     (This is less common.) </p>
   *             </li>
   *          </ul>
   */
  Principal: string | undefined;

  /**
   * <p>The IAM action to grant or revoke permissions on.</p>
   */
  Actions: string[] | undefined;
}

export namespace ResourcePermission {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourcePermission): any => ({
    ...obj,
  });
}

export interface CreateAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account; where you are creating an analysis.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the analysis that you're creating. This ID displays in the URL of the
   *             analysis.</p>
   */
  AnalysisId: string | undefined;

  /**
   * <p>A descriptive name for the analysis that you're creating. This name displays for the
   *             analysis in the QuickSight console. </p>
   */
  Name: string | undefined;

  /**
   * <p>The parameter names and override values that you want to use. An analysis can have
   *             any parameter type, and some parameters might accept multiple values. </p>
   */
  Parameters?: _Parameters;

  /**
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis. You can use the <code>Permissions</code> structure to grant permissions by
   *             providing a list of Identity and Access Management (IAM) action information for each
   *             principal listed by Amazon Resource Name (ARN). </p>
   *
   *         <p>To specify no permissions, omit <code>Permissions</code>.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>A source entity to use for the analysis that you're creating. This metadata structure
   *             contains details that describe a source template and one or more datasets.</p>
   */
  SourceEntity: AnalysisSourceEntity | undefined;

  /**
   * <p>The ARN for the theme to apply to the analysis that you're creating. To see the theme
   *             in the QuickSight console, make sure that you have access to it.</p>
   */
  ThemeArn?: string;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   *             analysis.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAnalysisRequest): any => ({
    ...obj,
  });
}

export interface CreateAnalysisResponse {
  /**
   * <p>The ARN for the analysis.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the analysis.</p>
   */
  AnalysisId?: string;

  /**
   * <p>The status of the creation of the analysis. </p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace CreateAnalysisResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAnalysisResponse): any => ({
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
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace UnsupportedUserEditionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedUserEditionException): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateColumnsOperation): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportToCSVOption): any => ({
    ...obj,
  });
}

export enum DashboardUIState {
  COLLAPSED = "COLLAPSED",
  EXPANDED = "EXPANDED",
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SheetControlsOption): any => ({
    ...obj,
  });
}

/**
 * <p>Dashboard publish options.</p>
 */
export interface DashboardPublishOptions {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashboardPublishOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Dashboard source template.</p>
 */
export interface DashboardSourceTemplate {
  /**
   * <p>Dataset references.</p>
   */
  DataSetReferences: DataSetReference[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;
}

export namespace DashboardSourceTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashboardSourceTemplate): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashboardSourceEntity): any => ({
    ...obj,
  });
}

export interface CreateDashboardRequest {
  /**
   * <p>The ID of the Amazon Web Services account; where you want to create the dashboard.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The display name of the dashboard.</p>
   */
  Name: string | undefined;

  /**
   * <p>The parameters for the creation of the dashboard, which you want to use to override
   *             the default settings. A dashboard can have any type of parameters, and some parameters
   *             might accept multiple values. </p>
   */
  Parameters?: _Parameters;

  /**
   * <p>A structure that contains the permissions of the dashboard. You can use this structure
   *             for granting permissions by providing a list of IAM action information for each
   *             principal ARN. </p>
   *
   *         <p>To specify no permissions, omit the permissions list.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The entity that you are using as a source when you create the dashboard. In
   *             <code>SourceEntity</code>, you specify the type of object you're using as source. You
   *             can only create a dashboard from a template, so you use a <code>SourceTemplate</code>
   *             entity. If you need to create a dashboard from an analysis, first convert the analysis
   *             to a template by using the <a>CreateTemplate</a> API operation. For
   *             <code>SourceTemplate</code>, specify the Amazon Resource Name (ARN) of the source
   *             template. The <code>SourceTemplate</code>ARN can contain any Amazon Web Services account; and any
   *             QuickSight-supported Amazon Web Services Region;. </p>
   *         <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> to
   *             list the replacement datasets for the placeholders listed in the original. The schema in
   *             each dataset must match its placeholder. </p>
   */
  SourceEntity: DashboardSourceEntity | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   *             dashboard.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A description for the first version of the dashboard being created.</p>
   */
  VersionDescription?: string;

  /**
   * <p>Options for publishing the dashboard when you create it:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>AvailabilityStatus</code> for <code>AdHocFilteringOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. When this is
   *                     set to <code>DISABLED</code>, QuickSight disables the left filter pane on the
   *                     published dashboard, which can be used for ad hoc (one-time) filtering. This
   *                     option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AvailabilityStatus</code> for <code>ExportToCSVOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. The visual
   *                     option to export data to .CSV format isn't enabled when this is set to
   *                     <code>DISABLED</code>. This option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>VisibilityState</code> for <code>SheetControlsOption</code> - This
   *                     visibility state can be either <code>COLLAPSED</code> or <code>EXPANDED</code>.
   *                     This option is <code>COLLAPSED</code> by default. </p>
   *             </li>
   *          </ul>
   */
  DashboardPublishOptions?: DashboardPublishOptions;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If
   *             you add a value for this field, it overrides the value that is used in the source
   *             entity. The theme ARN must exist in the same Amazon Web Services account; where you create the
   *             dashboard.</p>
   */
  ThemeArn?: string;
}

export namespace CreateDashboardRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDashboardRequest): any => ({
    ...obj,
  });
}

export interface CreateDashboardResponse {
  /**
   * <p>The ARN of the dashboard.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN of the dashboard, including the version number of the first version that is
   *             created.</p>
   */
  VersionArn?: string;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The status of the dashboard creation request.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace CreateDashboardResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDashboardResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A FieldFolder element is a folder that contains fields and nested subfolders.</p>
 */
export interface FieldFolder {
  /**
   * <p>The description for a field folder.</p>
   */
  description?: string;

  /**
   * <p>A folder has a list of columns. A column can only be in one folder.</p>
   */
  columns?: string[];
}

export namespace FieldFolder {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FieldFolder): any => ({
    ...obj,
  });
}

export enum DataSetImportMode {
  DIRECT_QUERY = "DIRECT_QUERY",
  SPICE = "SPICE",
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FilterOperation): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProjectOperation): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenameColumnOperation): any => ({
    ...obj,
  });
}

/**
 * <p>A transform operation that tags a column with additional information.</p>
 */
export interface TagColumnOperation {
  /**
   * <p>The column that this operation acts on.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>The dataset column tag, currently only used for geospatial type tagging.</p>
   *         <note>
   *             <p>This is not tags for the Amazon Web Services tagging feature.</p>
   *         </note>
   */
  Tags: ColumnTag[] | undefined;
}

export namespace TagColumnOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagColumnOperation): any => ({
    ...obj,
  });
}

/**
 * <p>A data transformation on a logical table. This is a variant type structure. For this
 *             structure to be valid, only one of the attributes can be non-null.</p>
 */
export type TransformOperation =
  | TransformOperation.CastColumnTypeOperationMember
  | TransformOperation.CreateColumnsOperationMember
  | TransformOperation.FilterOperationMember
  | TransformOperation.ProjectOperationMember
  | TransformOperation.RenameColumnOperationMember
  | TransformOperation.TagColumnOperationMember
  | TransformOperation.$UnknownMember;

export namespace TransformOperation {
  /**
   * <p>An operation that projects columns. Operations that come after a projection can only
   *             refer to projected columns.</p>
   */
  export interface ProjectOperationMember {
    ProjectOperation: ProjectOperation;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that filters rows based on some condition.</p>
   */
  export interface FilterOperationMember {
    ProjectOperation?: never;
    FilterOperation: FilterOperation;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that creates calculated columns. Columns created in one such operation
   *             form a lexical closure.</p>
   */
  export interface CreateColumnsOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation: CreateColumnsOperation;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that renames a column.</p>
   */
  export interface RenameColumnOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation: RenameColumnOperation;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>A transform operation that casts a column to a different type.</p>
   */
  export interface CastColumnTypeOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation: CastColumnTypeOperation;
    TagColumnOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that tags a column with additional information.</p>
   */
  export interface TagColumnOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation: TagColumnOperation;
    $unknown?: never;
  }

  export interface $UnknownMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ProjectOperation: (value: ProjectOperation) => T;
    FilterOperation: (value: FilterOperation) => T;
    CreateColumnsOperation: (value: CreateColumnsOperation) => T;
    RenameColumnOperation: (value: RenameColumnOperation) => T;
    CastColumnTypeOperation: (value: CastColumnTypeOperation) => T;
    TagColumnOperation: (value: TagColumnOperation) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TransformOperation, visitor: Visitor<T>): T => {
    if (value.ProjectOperation !== undefined) return visitor.ProjectOperation(value.ProjectOperation);
    if (value.FilterOperation !== undefined) return visitor.FilterOperation(value.FilterOperation);
    if (value.CreateColumnsOperation !== undefined) return visitor.CreateColumnsOperation(value.CreateColumnsOperation);
    if (value.RenameColumnOperation !== undefined) return visitor.RenameColumnOperation(value.RenameColumnOperation);
    if (value.CastColumnTypeOperation !== undefined)
      return visitor.CastColumnTypeOperation(value.CastColumnTypeOperation);
    if (value.TagColumnOperation !== undefined) return visitor.TagColumnOperation(value.TagColumnOperation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformOperation): any => {
    if (obj.ProjectOperation !== undefined)
      return { ProjectOperation: ProjectOperation.filterSensitiveLog(obj.ProjectOperation) };
    if (obj.FilterOperation !== undefined)
      return { FilterOperation: FilterOperation.filterSensitiveLog(obj.FilterOperation) };
    if (obj.CreateColumnsOperation !== undefined)
      return { CreateColumnsOperation: CreateColumnsOperation.filterSensitiveLog(obj.CreateColumnsOperation) };
    if (obj.RenameColumnOperation !== undefined)
      return { RenameColumnOperation: RenameColumnOperation.filterSensitiveLog(obj.RenameColumnOperation) };
    if (obj.CastColumnTypeOperation !== undefined)
      return { CastColumnTypeOperation: CastColumnTypeOperation.filterSensitiveLog(obj.CastColumnTypeOperation) };
    if (obj.TagColumnOperation !== undefined)
      return { TagColumnOperation: TagColumnOperation.filterSensitiveLog(obj.TagColumnOperation) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>Properties associated with the columns participating in a join.</p>
 */
export interface JoinKeyProperties {
  /**
   * <p>A value that indicates that a row in a table is uniquely identified by the columns in
   *             a join key. This is used by QuickSight to optimize query performance.</p>
   */
  UniqueKey?: boolean;
}

export namespace JoinKeyProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JoinKeyProperties): any => ({
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
 * <p>The instructions associated with a join. </p>
 */
export interface JoinInstruction {
  /**
   * <p>The operand on the left side of a join.</p>
   */
  LeftOperand: string | undefined;

  /**
   * <p>The operand on the right side of a join.</p>
   */
  RightOperand: string | undefined;

  /**
   * <p>Join key properties of the left operand.</p>
   */
  LeftJoinKeyProperties?: JoinKeyProperties;

  /**
   * <p>Join key properties of the right operand.</p>
   */
  RightJoinKeyProperties?: JoinKeyProperties;

  /**
   * <p>The type of join that it is.</p>
   */
  Type: JoinType | string | undefined;

  /**
   * <p>The join instructions provided in the <code>ON</code> clause of a join.</p>
   */
  OnClause: string | undefined;
}

export namespace JoinInstruction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JoinInstruction): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the source of a logical table. This is a variant type structure. For
 *             this structure to be valid, only one of the attributes can be non-null.</p>
 */
export interface LogicalTableSource {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogicalTableSource): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogicalTable): any => ({
    ...obj,
    ...(obj.DataTransforms && {
      DataTransforms: obj.DataTransforms.map((item) => TransformOperation.filterSensitiveLog(item)),
    }),
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputColumn): any => ({
    ...obj,
  });
}

/**
 * <p>A physical table type built from the results of the custom SQL query.</p>
 */
export interface CustomSql {
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

  /**
   * <p>The column schema from the SQL query result set.</p>
   */
  Columns?: InputColumn[];
}

export namespace CustomSql {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomSql): any => ({
    ...obj,
  });
}

/**
 * <p>A physical table type for relational data sources.</p>
 */
export interface RelationalTable {
  /**
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string | undefined;

  /**
   * <p>The catalog associated with a table.</p>
   */
  Catalog?: string;

  /**
   * <p>The schema name. This name applies to certain relational database engines.</p>
   */
  Schema?: string;

  /**
   * <p>The name of the relational table.</p>
   */
  Name: string | undefined;

  /**
   * <p>The column schema of the table.</p>
   */
  InputColumns: InputColumn[] | undefined;
}

export namespace RelationalTable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelationalTable): any => ({
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

export enum TextQualifier {
  DOUBLE_QUOTE = "DOUBLE_QUOTE",
  SINGLE_QUOTE = "SINGLE_QUOTE",
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
   * <p>Whether the file has a header row, or the files each have a header row.</p>
   */
  ContainsHeader?: boolean;

  /**
   * <p>Text qualifier.</p>
   */
  TextQualifier?: TextQualifier | string;

  /**
   * <p>The delimiter between values in the file.</p>
   */
  Delimiter?: string;
}

export namespace UploadSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UploadSettings): any => ({
    ...obj,
  });
}

/**
 * <p>A physical table type for an S3 data source.</p>
 */
export interface S3Source {
  /**
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string | undefined;

  /**
   * <p>Information about the format for the S3 source file or files.</p>
   */
  UploadSettings?: UploadSettings;

  /**
   * <p>A physical table type for an S3 data source.</p>
   *         <note>
   *             <p>For non-JSON files, only <code>STRING</code> data types are supported in input columns.</p>
   *         </note>
   */
  InputColumns: InputColumn[] | undefined;
}

export namespace S3Source {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Source): any => ({
    ...obj,
  });
}

/**
 * <p>A view of a data source that contains information about the shape of the data in the
 *             underlying source. This is a variant type structure. For this structure to be valid,
 *             only one of the attributes can be non-null.</p>
 */
export type PhysicalTable =
  | PhysicalTable.CustomSqlMember
  | PhysicalTable.RelationalTableMember
  | PhysicalTable.S3SourceMember
  | PhysicalTable.$UnknownMember;

export namespace PhysicalTable {
  /**
   * <p>A physical table type for relational data sources.</p>
   */
  export interface RelationalTableMember {
    RelationalTable: RelationalTable;
    CustomSql?: never;
    S3Source?: never;
    $unknown?: never;
  }

  /**
   * <p>A physical table type built from the results of the custom SQL query.</p>
   */
  export interface CustomSqlMember {
    RelationalTable?: never;
    CustomSql: CustomSql;
    S3Source?: never;
    $unknown?: never;
  }

  /**
   * <p>A physical table type for as S3 data source.</p>
   */
  export interface S3SourceMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source: S3Source;
    $unknown?: never;
  }

  export interface $UnknownMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    RelationalTable: (value: RelationalTable) => T;
    CustomSql: (value: CustomSql) => T;
    S3Source: (value: S3Source) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PhysicalTable, visitor: Visitor<T>): T => {
    if (value.RelationalTable !== undefined) return visitor.RelationalTable(value.RelationalTable);
    if (value.CustomSql !== undefined) return visitor.CustomSql(value.CustomSql);
    if (value.S3Source !== undefined) return visitor.S3Source(value.S3Source);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhysicalTable): any => {
    if (obj.RelationalTable !== undefined)
      return { RelationalTable: RelationalTable.filterSensitiveLog(obj.RelationalTable) };
    if (obj.CustomSql !== undefined) return { CustomSql: CustomSql.filterSensitiveLog(obj.CustomSql) };
    if (obj.S3Source !== undefined) return { S3Source: S3Source.filterSensitiveLog(obj.S3Source) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export enum RowLevelPermissionFormatVersion {
  VERSION_1 = "VERSION_1",
  VERSION_2 = "VERSION_2",
}

export enum RowLevelPermissionPolicy {
  DENY_ACCESS = "DENY_ACCESS",
  GRANT_ACCESS = "GRANT_ACCESS",
}

export enum Status {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Information about a dataset that contains permissions for row-level security (RLS).
 *             The permissions dataset maps fields to users or groups. For more information, see
 *             <a href="https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html">Using Row-Level Security (RLS) to Restrict Access to a Dataset</a> in the <i>Amazon QuickSight User
 *                 Guide</i>.</p>
 *             <p>The option to deny permissions by setting <code>PermissionPolicy</code> to <code>DENY_ACCESS</code> is
 *             not supported for new RLS datasets.</p>
 */
export interface RowLevelPermissionDataSet {
  /**
   * <p>The namespace associated with the dataset that contains permissions for RLS.</p>
   */
  Namespace?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The type of permissions to use when interpretting the permissions for RLS. <code>DENY_ACCESS</code>
   *         is included for backward compatibility only.</p>
   */
  PermissionPolicy: RowLevelPermissionPolicy | string | undefined;

  /**
   * <p>The user or group rules associated with the dataset that contains permissions for RLS.</p>
   *          <p>By default, <code>FormatVersion</code> is <code>VERSION_1</code>. When <code>FormatVersion</code> is <code>VERSION_1</code>, <code>UserName</code> and <code>GroupName</code> are required. When <code>FormatVersion</code> is <code>VERSION_2</code>, <code>UserARN</code> and <code>GroupARN</code> are required, and <code>Namespace</code> must not exist.</p>
   */
  FormatVersion?: RowLevelPermissionFormatVersion | string;

  /**
   * <p>The status of the row-level security permission dataset. If enabled, the status is <code>ENABLED</code>. If disabled, the status is <code>DISABLED</code>.</p>
   */
  Status?: Status | string;
}

export namespace RowLevelPermissionDataSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RowLevelPermissionDataSet): any => ({
    ...obj,
  });
}

/**
 * <p>A set of rules associated with a tag.</p>
 */
export interface RowLevelPermissionTagRule {
  /**
   * <p>The unique key for a tag.</p>
   */
  TagKey: string | undefined;

  /**
   * <p>The column name that a tag key is assigned to.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>A string that you want to use to delimit the values when you pass the values at run time. For example, you can delimit the values with a comma.</p>
   */
  TagMultiValueDelimiter?: string;

  /**
   * <p>A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one. For example, you can use an asterisk as your match all value.</p>
   */
  MatchAllValue?: string;
}

export namespace RowLevelPermissionTagRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RowLevelPermissionTagRule): any => ({
    ...obj,
    ...(obj.MatchAllValue && { MatchAllValue: SENSITIVE_STRING }),
  });
}

/**
 * <p>The configuration of tags on a dataset to set row-level security. </p>
 */
export interface RowLevelPermissionTagConfiguration {
  /**
   * <p>The status of row-level security tags. If enabled, the status is <code>ENABLED</code>. If disabled, the status is <code>DISABLED</code>.</p>
   */
  Status?: Status | string;

  /**
   * <p>A set of rules associated with row-level security, such as the tag names and columns that they are assigned to.</p>
   */
  TagRules: RowLevelPermissionTagRule[] | undefined;
}

export namespace RowLevelPermissionTagConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RowLevelPermissionTagConfiguration): any => ({
    ...obj,
    ...(obj.TagRules && { TagRules: obj.TagRules.map((item) => RowLevelPermissionTagRule.filterSensitiveLog(item)) }),
  });
}

export interface CreateDataSetRequest {
  /**
   * <p>The Amazon Web Services account; ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region; for each Amazon Web Services account;.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The display name for the dataset.</p>
   */
  Name: string | undefined;

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap: { [key: string]: PhysicalTable } | undefined;

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
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   */
  FieldFolders?: { [key: string]: FieldFolder };

  /**
   * <p>A list of resource permissions on the dataset.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The row-level security configuration for the data that you want to create.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * <p>The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only.</p>
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;

  /**
   * <p>A set of one or more definitions of a <code>
   *                <a>ColumnLevelPermissionRule</a>
   *             </code>.</p>
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[];

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDataSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataSetRequest): any => ({
    ...obj,
    ...(obj.PhysicalTableMap && {
      PhysicalTableMap: Object.entries(obj.PhysicalTableMap).reduce(
        (acc: any, [key, value]: [string, PhysicalTable]) => ({
          ...acc,
          [key]: PhysicalTable.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.LogicalTableMap && {
      LogicalTableMap: Object.entries(obj.LogicalTableMap).reduce(
        (acc: any, [key, value]: [string, LogicalTable]) => ({
          ...acc,
          [key]: LogicalTable.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.RowLevelPermissionTagConfiguration && {
      RowLevelPermissionTagConfiguration: RowLevelPermissionTagConfiguration.filterSensitiveLog(
        obj.RowLevelPermissionTagConfiguration
      ),
    }),
  });
}

export interface CreateDataSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region; for each Amazon Web Services account;.</p>
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
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace CreateDataSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataSetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A limit is exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
  /**
   * <p>Limit exceeded.</p>
   */
  ResourceType?: ExceptionResourceType | string;

  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JiraParameters): any => ({
    ...obj,
  });
}

/**
 * <p>MariaDB parameters.</p>
 */
export interface MariaDbParameters {
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

export namespace MariaDbParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MariaDbParameters): any => ({
    ...obj,
  });
}

/**
 * <p>MySQL parameters.</p>
 */
export interface MySqlParameters {
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

export namespace MySqlParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MySqlParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Oracle parameters.</p>
 */
export interface OracleParameters {
  /**
   * <p>An Oracle host.</p>
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

export namespace OracleParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OracleParameters): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PostgreSqlParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Presto parameters.</p>
 */
export interface PrestoParameters {
  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * <p>Catalog.</p>
   */
  Catalog: string | undefined;
}

export namespace PrestoParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrestoParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon RDS parameters.</p>
 */
export interface RdsParameters {
  /**
   * <p>Instance ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Database.</p>
   */
  Database: string | undefined;
}

export namespace RdsParameters {
  /**
   * @internal
   */
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
   * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
   */
  Host?: string;

  /**
   * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
   */
  Port?: number;

  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
   *             provided.</p>
   */
  ClusterId?: string;
}

export namespace RedshiftParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftParameters): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManifestFileLocation): any => ({
    ...obj,
  });
}

/**
 * <p>S3 parameters.</p>
 */
export interface S3Parameters {
  /**
   * <p>Location of the Amazon S3 manifest file. This is NULL if the manifest file was
   *             uploaded into QuickSight.</p>
   */
  ManifestFileLocation: ManifestFileLocation | undefined;
}

export namespace S3Parameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Parameters): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceNowParameters): any => ({
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
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Warehouse.</p>
   */
  Warehouse: string | undefined;
}

export namespace SnowflakeParameters {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   */
  Database: string | undefined;
}

export namespace SqlServerParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SqlServerParameters): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TeradataParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Twitter parameters.</p>
 */
export interface TwitterParameters {
  /**
   * <p>Twitter query string.</p>
   */
  Query: string | undefined;

  /**
   * <p>Maximum number of rows to query Twitter.</p>
   */
  MaxRows: number | undefined;
}

export namespace TwitterParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TwitterParameters): any => ({
    ...obj,
  });
}

/**
 * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source.
 *             This is a variant type structure. For this structure to be valid, only one of the
 *             attributes can be non-null.</p>
 */
export type DataSourceParameters =
  | DataSourceParameters.AmazonElasticsearchParametersMember
  | DataSourceParameters.AthenaParametersMember
  | DataSourceParameters.AuroraParametersMember
  | DataSourceParameters.AuroraPostgreSqlParametersMember
  | DataSourceParameters.AwsIotAnalyticsParametersMember
  | DataSourceParameters.JiraParametersMember
  | DataSourceParameters.MariaDbParametersMember
  | DataSourceParameters.MySqlParametersMember
  | DataSourceParameters.OracleParametersMember
  | DataSourceParameters.PostgreSqlParametersMember
  | DataSourceParameters.PrestoParametersMember
  | DataSourceParameters.RdsParametersMember
  | DataSourceParameters.RedshiftParametersMember
  | DataSourceParameters.S3ParametersMember
  | DataSourceParameters.ServiceNowParametersMember
  | DataSourceParameters.SnowflakeParametersMember
  | DataSourceParameters.SparkParametersMember
  | DataSourceParameters.SqlServerParametersMember
  | DataSourceParameters.TeradataParametersMember
  | DataSourceParameters.TwitterParametersMember
  | DataSourceParameters.$UnknownMember;

export namespace DataSourceParameters {
  /**
   * <p>Amazon Elasticsearch Service parameters.</p>
   */
  export interface AmazonElasticsearchParametersMember {
    AmazonElasticsearchParameters: AmazonElasticsearchParameters;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>Amazon Athena parameters.</p>
   */
  export interface AthenaParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters: AthenaParameters;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>Amazon Aurora MySQL parameters.</p>
   */
  export interface AuroraParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters: AuroraParameters;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>Aurora PostgreSQL parameters.</p>
   */
  export interface AuroraPostgreSqlParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters: AuroraPostgreSqlParameters;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>Amazon Web Services IoT Analytics parameters.</p>
   */
  export interface AwsIotAnalyticsParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters: AwsIotAnalyticsParameters;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>Jira parameters.</p>
   */
  export interface JiraParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters: JiraParameters;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>MariaDB parameters.</p>
   */
  export interface MariaDbParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters: MariaDbParameters;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>MySQL parameters.</p>
   */
  export interface MySqlParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters: MySqlParameters;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>Oracle parameters.</p>
   */
  export interface OracleParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters: OracleParameters;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>PostgreSQL parameters.</p>
   */
  export interface PostgreSqlParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters: PostgreSqlParameters;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>Presto parameters.</p>
   */
  export interface PrestoParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters: PrestoParameters;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>Amazon RDS parameters.</p>
   */
  export interface RdsParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters: RdsParameters;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>Amazon Redshift parameters.</p>
   */
  export interface RedshiftParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters: RedshiftParameters;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>S3 parameters.</p>
   */
  export interface S3ParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters: S3Parameters;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>ServiceNow parameters.</p>
   */
  export interface ServiceNowParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters: ServiceNowParameters;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>Snowflake parameters.</p>
   */
  export interface SnowflakeParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters: SnowflakeParameters;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>Spark parameters.</p>
   */
  export interface SparkParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters: SparkParameters;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>SQL Server parameters.</p>
   */
  export interface SqlServerParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters: SqlServerParameters;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>Teradata parameters.</p>
   */
  export interface TeradataParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters: TeradataParameters;
    TwitterParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>Twitter parameters.</p>
   */
  export interface TwitterParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters: TwitterParameters;
    $unknown?: never;
  }

  export interface $UnknownMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    AmazonElasticsearchParameters: (value: AmazonElasticsearchParameters) => T;
    AthenaParameters: (value: AthenaParameters) => T;
    AuroraParameters: (value: AuroraParameters) => T;
    AuroraPostgreSqlParameters: (value: AuroraPostgreSqlParameters) => T;
    AwsIotAnalyticsParameters: (value: AwsIotAnalyticsParameters) => T;
    JiraParameters: (value: JiraParameters) => T;
    MariaDbParameters: (value: MariaDbParameters) => T;
    MySqlParameters: (value: MySqlParameters) => T;
    OracleParameters: (value: OracleParameters) => T;
    PostgreSqlParameters: (value: PostgreSqlParameters) => T;
    PrestoParameters: (value: PrestoParameters) => T;
    RdsParameters: (value: RdsParameters) => T;
    RedshiftParameters: (value: RedshiftParameters) => T;
    S3Parameters: (value: S3Parameters) => T;
    ServiceNowParameters: (value: ServiceNowParameters) => T;
    SnowflakeParameters: (value: SnowflakeParameters) => T;
    SparkParameters: (value: SparkParameters) => T;
    SqlServerParameters: (value: SqlServerParameters) => T;
    TeradataParameters: (value: TeradataParameters) => T;
    TwitterParameters: (value: TwitterParameters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataSourceParameters, visitor: Visitor<T>): T => {
    if (value.AmazonElasticsearchParameters !== undefined)
      return visitor.AmazonElasticsearchParameters(value.AmazonElasticsearchParameters);
    if (value.AthenaParameters !== undefined) return visitor.AthenaParameters(value.AthenaParameters);
    if (value.AuroraParameters !== undefined) return visitor.AuroraParameters(value.AuroraParameters);
    if (value.AuroraPostgreSqlParameters !== undefined)
      return visitor.AuroraPostgreSqlParameters(value.AuroraPostgreSqlParameters);
    if (value.AwsIotAnalyticsParameters !== undefined)
      return visitor.AwsIotAnalyticsParameters(value.AwsIotAnalyticsParameters);
    if (value.JiraParameters !== undefined) return visitor.JiraParameters(value.JiraParameters);
    if (value.MariaDbParameters !== undefined) return visitor.MariaDbParameters(value.MariaDbParameters);
    if (value.MySqlParameters !== undefined) return visitor.MySqlParameters(value.MySqlParameters);
    if (value.OracleParameters !== undefined) return visitor.OracleParameters(value.OracleParameters);
    if (value.PostgreSqlParameters !== undefined) return visitor.PostgreSqlParameters(value.PostgreSqlParameters);
    if (value.PrestoParameters !== undefined) return visitor.PrestoParameters(value.PrestoParameters);
    if (value.RdsParameters !== undefined) return visitor.RdsParameters(value.RdsParameters);
    if (value.RedshiftParameters !== undefined) return visitor.RedshiftParameters(value.RedshiftParameters);
    if (value.S3Parameters !== undefined) return visitor.S3Parameters(value.S3Parameters);
    if (value.ServiceNowParameters !== undefined) return visitor.ServiceNowParameters(value.ServiceNowParameters);
    if (value.SnowflakeParameters !== undefined) return visitor.SnowflakeParameters(value.SnowflakeParameters);
    if (value.SparkParameters !== undefined) return visitor.SparkParameters(value.SparkParameters);
    if (value.SqlServerParameters !== undefined) return visitor.SqlServerParameters(value.SqlServerParameters);
    if (value.TeradataParameters !== undefined) return visitor.TeradataParameters(value.TeradataParameters);
    if (value.TwitterParameters !== undefined) return visitor.TwitterParameters(value.TwitterParameters);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSourceParameters): any => {
    if (obj.AmazonElasticsearchParameters !== undefined)
      return {
        AmazonElasticsearchParameters: AmazonElasticsearchParameters.filterSensitiveLog(
          obj.AmazonElasticsearchParameters
        ),
      };
    if (obj.AthenaParameters !== undefined)
      return { AthenaParameters: AthenaParameters.filterSensitiveLog(obj.AthenaParameters) };
    if (obj.AuroraParameters !== undefined)
      return { AuroraParameters: AuroraParameters.filterSensitiveLog(obj.AuroraParameters) };
    if (obj.AuroraPostgreSqlParameters !== undefined)
      return {
        AuroraPostgreSqlParameters: AuroraPostgreSqlParameters.filterSensitiveLog(obj.AuroraPostgreSqlParameters),
      };
    if (obj.AwsIotAnalyticsParameters !== undefined)
      return { AwsIotAnalyticsParameters: AwsIotAnalyticsParameters.filterSensitiveLog(obj.AwsIotAnalyticsParameters) };
    if (obj.JiraParameters !== undefined)
      return { JiraParameters: JiraParameters.filterSensitiveLog(obj.JiraParameters) };
    if (obj.MariaDbParameters !== undefined)
      return { MariaDbParameters: MariaDbParameters.filterSensitiveLog(obj.MariaDbParameters) };
    if (obj.MySqlParameters !== undefined)
      return { MySqlParameters: MySqlParameters.filterSensitiveLog(obj.MySqlParameters) };
    if (obj.OracleParameters !== undefined)
      return { OracleParameters: OracleParameters.filterSensitiveLog(obj.OracleParameters) };
    if (obj.PostgreSqlParameters !== undefined)
      return { PostgreSqlParameters: PostgreSqlParameters.filterSensitiveLog(obj.PostgreSqlParameters) };
    if (obj.PrestoParameters !== undefined)
      return { PrestoParameters: PrestoParameters.filterSensitiveLog(obj.PrestoParameters) };
    if (obj.RdsParameters !== undefined) return { RdsParameters: RdsParameters.filterSensitiveLog(obj.RdsParameters) };
    if (obj.RedshiftParameters !== undefined)
      return { RedshiftParameters: RedshiftParameters.filterSensitiveLog(obj.RedshiftParameters) };
    if (obj.S3Parameters !== undefined) return { S3Parameters: S3Parameters.filterSensitiveLog(obj.S3Parameters) };
    if (obj.ServiceNowParameters !== undefined)
      return { ServiceNowParameters: ServiceNowParameters.filterSensitiveLog(obj.ServiceNowParameters) };
    if (obj.SnowflakeParameters !== undefined)
      return { SnowflakeParameters: SnowflakeParameters.filterSensitiveLog(obj.SnowflakeParameters) };
    if (obj.SparkParameters !== undefined)
      return { SparkParameters: SparkParameters.filterSensitiveLog(obj.SparkParameters) };
    if (obj.SqlServerParameters !== undefined)
      return { SqlServerParameters: SqlServerParameters.filterSensitiveLog(obj.SqlServerParameters) };
    if (obj.TeradataParameters !== undefined)
      return { TeradataParameters: TeradataParameters.filterSensitiveLog(obj.TeradataParameters) };
    if (obj.TwitterParameters !== undefined)
      return { TwitterParameters: TwitterParameters.filterSensitiveLog(obj.TwitterParameters) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>The combination of user name and password that are used as credentials.</p>
 */
export interface CredentialPair {
  /**
   * <p>User name.</p>
   */
  Username: string | undefined;

  /**
   * <p>Password.</p>
   */
  Password: string | undefined;

  /**
   * <p>A set of alternate data source parameters that you want to share for these
   *             credentials. The credentials are applied in tandem with the data source parameters when
   *             you copy a data source by using a create or update request. The API operation compares
   *             the <code>DataSourceParameters</code> structure that's in the request with the
   *             structures in the <code>AlternateDataSourceParameters</code> allow list. If the
   *             structures are an exact match, the request is allowed to use the new data source with
   *             the existing credentials. If the <code>AlternateDataSourceParameters</code> list is
   *             null, the <code>DataSourceParameters</code> originally used with these
   *                 <code>Credentials</code> is automatically allowed.</p>
   */
  AlternateDataSourceParameters?: DataSourceParameters[];
}

export namespace CredentialPair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CredentialPair): any => ({
    ...obj,
    ...(obj.AlternateDataSourceParameters && {
      AlternateDataSourceParameters: obj.AlternateDataSourceParameters.map((item) =>
        DataSourceParameters.filterSensitiveLog(item)
      ),
    }),
  });
}

/**
 * <p>Data source credentials. This is a variant type structure. For this structure to be
 *             valid, only one of the attributes can be non-null.</p>
 */
export interface DataSourceCredentials {
  /**
   * <p>Credential pair. For more information, see <a>CredentialPair</a>.</p>
   */
  CredentialPair?: CredentialPair;

  /**
   * <p>The Amazon Resource Name (ARN) of a data source that has the credential pair that you
   *             want to use. When <code>CopySourceArn</code> is not null, the credential pair from the
   *             data source in the ARN is used as the credentials for the
   *             <code>DataSourceCredentials</code> structure.</p>
   */
  CopySourceArn?: string;
}

export namespace DataSourceCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSourceCredentials): any => ({
    ...obj,
    ...(obj.CredentialPair && { CredentialPair: CredentialPair.filterSensitiveLog(obj.CredentialPair) }),
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SslProperties): any => ({
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
  ORACLE = "ORACLE",
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
  TIMESTREAM = "TIMESTREAM",
  TWITTER = "TWITTER",
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcConnectionProperties): any => ({
    ...obj,
  });
}

export interface CreateDataSourceRequest {
  /**
   * <p>The Amazon Web Services account; ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the data source. This ID is unique per Amazon Web Services Region; for each Amazon Web Services account;. </p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>A display name for the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of the data source. Currently, the supported types for this operation are:
   * 			<code>ATHENA, AURORA, AURORA_POSTGRESQL, AMAZON_ELASTICSEARCH, MARIADB, MYSQL, POSTGRESQL, PRESTO, REDSHIFT, S3,
   * 			SNOWFLAKE, SPARK, SQLSERVER, TERADATA</code>.
   * 			Use <code>ListDataSources</code> to return a
   * 			list of all data sources.</p>
   * 		       <p>
   *             <code>AMAZON_ELASTICSEARCH</code> is for Amazon managed Elasticsearch Service.</p>
   */
  Type: DataSourceType | string | undefined;

  /**
   * <p>The parameters that QuickSight uses to connect to your underlying source.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * <p>The credentials QuickSight that uses to connect to your underlying source. Currently, only
   * 			credentials based on user name and password are supported.</p>
   */
  Credentials?: DataSourceCredentials;

  /**
   * <p>A list of resource permissions on the data source.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>Use this parameter only when you want QuickSight to use a VPC connection when connecting to
   * 			your underlying source.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying source.</p>
   */
  SslProperties?: SslProperties;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDataSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataSourceRequest): any => ({
    ...obj,
    ...(obj.DataSourceParameters && {
      DataSourceParameters: DataSourceParameters.filterSensitiveLog(obj.DataSourceParameters),
    }),
    ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
  });
}

export interface CreateDataSourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region; for each Amazon Web Services account;.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The status of creating the data source.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace CreateDataSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataSourceResponse): any => ({
    ...obj,
  });
}

export enum FolderType {
  SHARED = "SHARED",
}

export interface CreateFolderRequest {
  /**
   * <p>The AWS Account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The folder ID.</p>
   */
  FolderId: string | undefined;

  /**
   * <p>The name of the folder.</p>
   */
  Name?: string;

  /**
   * <p>The type of folder. By default, <code>folderType</code> is <code>SHARED</code>.</p>
   */
  FolderType?: FolderType | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the parent folder.</p>
   * 	        <p>
   *             <code>ParentFolderArn</code> can be null. An empty <code>parentFolderArn</code> creates a root-level folder.</p>
   */
  ParentFolderArn?: string;

  /**
   * <p>A structure that describes the principals and the resource-level permissions of a folder.</p>
   * 	        <p>To specify no permissions, omit <code>Permissions</code>.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>Tags for the folder.</p>
   */
  Tags?: Tag[];
}

export namespace CreateFolderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFolderRequest): any => ({
    ...obj,
  });
}

export interface CreateFolderResponse {
  /**
   * <p>The status of the newly created folder. If succeeded, the status is <code>SC_OK (200)</code>.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the newly created folder.</p>
   */
  Arn?: string;

  /**
   * <p>The folder ID for the newly created folder.</p>
   */
  FolderId?: string;

  /**
   * <p>The request ID for the newly created folder.</p>
   */
  RequestId?: string;
}

export namespace CreateFolderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFolderResponse): any => ({
    ...obj,
  });
}

export enum MemberType {
  ANALYSIS = "ANALYSIS",
  DASHBOARD = "DASHBOARD",
  DATASET = "DATASET",
}

export interface CreateFolderMembershipRequest {
  /**
   * <p>The AWS Account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The folder ID.</p>
   */
  FolderId: string | undefined;

  /**
   * <p>The ID of the asset (the dashboard, analysis, or dataset).</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The type of the member, including <code>DASHBOARD</code>, <code>ANALYSIS</code>, and <code>DATASET</code>.</p>
   */
  MemberType: MemberType | string | undefined;
}

export namespace CreateFolderMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFolderMembershipRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An asset in a folder, such as a dashboard, analysis, or dataset.</p>
 */
export interface FolderMember {
  /**
   * <p>The ID of the asset.</p>
   */
  MemberId?: string;

  /**
   * <p>The type of the asset.</p>
   */
  MemberType?: MemberType | string;
}

export namespace FolderMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FolderMember): any => ({
    ...obj,
  });
}

export interface CreateFolderMembershipResponse {
  /**
   * <p>The status of the folder membership. If succeeded, the status is <code>SC_OK (200)</code>.</p>
   */
  Status?: number;

  /**
   * <p>Information about the member in the folder.</p>
   */
  FolderMember?: FolderMember;

  /**
   * <p>The request ID.</p>
   */
  RequestId?: string;
}

export namespace CreateFolderMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFolderMembershipResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request object for this operation. </p>
 */
export interface CreateGroupRequest {
  /**
   * <p>A name for the group that you want to create.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>A description for the group that you want to create.</p>
   */
  Description?: string;

  /**
   * <p>The ID for the Amazon Web Services account; that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account; that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace CreateGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A <i>group</i> in Amazon QuickSight consists of a set of users. You can
 *             use groups to make it easier to manage access and security. </p>
 */
export interface Group {
  /**
   * <p>The Amazon Resource Name (ARN) for the group.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The group description.</p>
   */
  Description?: string;

  /**
   * <p>The principal ID of the group.</p>
   */
  PrincipalId?: string;
}

export namespace Group {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Group): any => ({
    ...obj,
  });
}

/**
 * <p>The response object for this operation.</p>
 */
export interface CreateGroupResponse {
  /**
   * <p>The name of the group.</p>
   */
  Group?: Group;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace CreateGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGroupResponse): any => ({
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
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace PreconditionNotMetException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PreconditionNotMetException): any => ({
    ...obj,
  });
}

export interface CreateGroupMembershipRequest {
  /**
   * <p>The name of the user that you want to add to the group membership.</p>
   */
  MemberName: string | undefined;

  /**
   * <p>The name of the group that you want to add the user to.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account; that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account; that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace CreateGroupMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGroupMembershipRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A member of an Amazon QuickSight group. Currently, group members must be users. Groups
 *             can't be members of another group. .</p>
 */
export interface GroupMember {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GroupMember): any => ({
    ...obj,
  });
}

export interface CreateGroupMembershipResponse {
  /**
   * <p>The group member.</p>
   */
  GroupMember?: GroupMember;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace CreateGroupMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGroupMembershipResponse): any => ({
    ...obj,
  });
}

export interface CreateIAMPolicyAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account; where you want to assign an IAM policy to QuickSight users or
   * 			groups.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment, also called a rule. It must be unique within an Amazon Web Services account;.</p>
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
   * <p>The ARN for the IAM policy to apply to the QuickSight users and groups
   * 			specified in this assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The QuickSight users, groups, or both that you want to assign the policy to.</p>
   */
  Identities?: { [key: string]: string[] };

  /**
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;
}

export namespace CreateIAMPolicyAssignmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIAMPolicyAssignmentRequest): any => ({
    ...obj,
  });
}

export interface CreateIAMPolicyAssignmentResponse {
  /**
   * <p>The name of the assignment. This name must be unique within the Amazon Web Services account;.</p>
   */
  AssignmentName?: string;

  /**
   * <p>The ID for the assignment.</p>
   */
  AssignmentId?: string;

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
   * <p>The ARN for the IAM policy that is applied to the QuickSight users and groups specified in this assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The QuickSight users, groups, or both that the IAM policy is assigned to.</p>
   */
  Identities?: { [key: string]: string[] };

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace CreateIAMPolicyAssignmentResponse {
  /**
   * @internal
   */
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
   * <p>The Amazon Web Services account; ID.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace CreateIngestionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIngestionRequest): any => ({
    ...obj,
  });
}

export enum IngestionStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  INITIALIZED = "INITIALIZED",
  QUEUED = "QUEUED",
  RUNNING = "RUNNING",
}

export interface CreateIngestionResponse {
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
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace CreateIngestionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIngestionResponse): any => ({
    ...obj,
  });
}

export enum IdentityStore {
  QUICKSIGHT = "QUICKSIGHT",
}

export interface CreateNamespaceRequest {
  /**
   * <p>The ID for the Amazon Web Services account; that you want to create the QuickSight namespace in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name that you want to use to describe the new namespace.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>Specifies the type of your user identity directory. Currently, this supports users
   *             with an identity type of <code>QUICKSIGHT</code>.</p>
   */
  IdentityStore: IdentityStore | string | undefined;

  /**
   * <p>The tags that you want to associate with the namespace that you're creating.</p>
   */
  Tags?: Tag[];
}

export namespace CreateNamespaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNamespaceRequest): any => ({
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

export interface CreateNamespaceResponse {
  /**
   * <p>The ARN of the QuickSight namespace you created. </p>
   */
  Arn?: string;

  /**
   * <p>The name of the new namespace that you created.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Web Services Region; that you want to use for the free SPICE capacity for the new namespace.
   *             This is set to the region that you run CreateNamespace in. </p>
   */
  CapacityRegion?: string;

  /**
   * <p>The status of the creation of the namespace. This is an asynchronous process. A status
   *             of <code>CREATED</code> means that your namespace is ready to use. If an error occurs,
   *             it indicates if the process is <code>retryable</code> or <code>non-retryable</code>. In
   *             the case of a non-retryable error, refer to the error message for follow-up
   *             tasks.</p>
   */
  CreationStatus?: NamespaceStatus | string;

  /**
   * <p>Specifies the type of your user identity directory. Currently, this supports users
   *             with an identity type of <code>QUICKSIGHT</code>.</p>
   */
  IdentityStore?: IdentityStore | string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace CreateNamespaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNamespaceResponse): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateSourceAnalysis): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateSourceTemplate): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateSourceEntity): any => ({
    ...obj,
  });
}

export interface CreateTemplateRequest {
  /**
   * <p>The ID for the Amazon Web Services account; that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account; that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template that you want to create. This template is unique per Amazon Web Services Region; in
   * 			each Amazon Web Services account;.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>A display name for the template.</p>
   */
  Name?: string;

  /**
   * <p>A list of resource permissions to be set on the template. </p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The entity that you are using as a source when you create the template. In
   * 			<code>SourceEntity</code>, you specify the type of object you're using as source:
   * 			<code>SourceTemplate</code> for a template or <code>SourceAnalysis</code> for an
   * 			analysis. Both of these require an Amazon Resource Name (ARN). For
   * 			<code>SourceTemplate</code>, specify the ARN of the source template. For
   * 			<code>SourceAnalysis</code>, specify the ARN of the source analysis. The <code>SourceTemplate</code>
   * 			ARN can contain any Amazon Web Services account; and any QuickSight-supported Amazon Web Services Region;. </p>
   * 		       <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> or
   * 			<code>SourceAnalysis</code> to list the replacement datasets for the placeholders listed
   * 			in the original. The schema in each dataset must match its placeholder. </p>
   */
  SourceEntity: TemplateSourceEntity | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A description of the current template version being created. This API operation creates the
   * 			first version of the template. Every time <code>UpdateTemplate</code> is called, a new
   * 			version is created. Each version of the template maintains a description of the version
   * 			in the <code>VersionDescription</code> field.</p>
   */
  VersionDescription?: string;
}

export namespace CreateTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreateTemplateResponse {
  /**
   * <p>The ARN for the template.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN for the template, including the version information of
   * 			the first version.</p>
   */
  VersionArn?: string;

  /**
   * <p>The ID of the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The template creation status.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace CreateTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTemplateResponse): any => ({
    ...obj,
  });
}

export interface CreateTemplateAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the template that you creating an alias for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The name that you want to give to the template alias that you're creating. Don't start the
   * 			alias name with the <code>$</code> character. Alias names that start with <code>$</code>
   * 			are reserved by Amazon QuickSight. </p>
   */
  AliasName: string | undefined;

  /**
   * <p>The version number of the template.</p>
   */
  TemplateVersionNumber: number | undefined;
}

export namespace CreateTemplateAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTemplateAliasRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The template alias.</p>
 */
export interface TemplateAlias {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateAlias): any => ({
    ...obj,
  });
}

export interface CreateTemplateAliasResponse {
  /**
   * <p>Information about the template alias.</p>
   */
  TemplateAlias?: TemplateAlias;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace CreateTemplateAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTemplateAliasResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The theme colors that are used for data colors in charts. The colors description is a
 *             hexadecimal color code that consists of six alphanumerical characters, prefixed with
 *                 <code>#</code>, for example #37BFF5. </p>
 */
export interface DataColorPalette {
  /**
   * <p>The hexadecimal codes for the colors.</p>
   */
  Colors?: string[];

  /**
   * <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>
   */
  MinMaxGradient?: string[];

  /**
   * <p>The hexadecimal code of a color that applies to charts where a lack of data is
   *             highlighted.</p>
   */
  EmptyFillColor?: string;
}

export namespace DataColorPalette {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataColorPalette): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TileStyle): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GutterStyle): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MarginStyle): any => ({
    ...obj,
  });
}

/**
 * <p>The display options for the layout of tiles on a sheet.</p>
 */
export interface TileLayoutStyle {
  /**
   * <p>The gutter settings that apply between tiles. </p>
   */
  Gutter?: GutterStyle;

  /**
   * <p>The margin settings that apply around the outside edge of sheets.</p>
   */
  Margin?: MarginStyle;
}

export namespace TileLayoutStyle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TileLayoutStyle): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SheetStyle): any => ({
    ...obj,
  });
}

/**
 * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
 *             description is a hexadecimal color code that consists of six alphanumerical characters,
 *             prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
 *                 Guide.</i>
 *         </p>
 */
export interface UIColorPalette {
  /**
   * <p>The color of text and other foreground elements that appear over the primary
   *             background regions, such as grid lines, borders, table banding, icons, and so on.</p>
   */
  PrimaryForeground?: string;

  /**
   * <p>The background color that applies to visuals and other high emphasis UI.</p>
   */
  PrimaryBackground?: string;

  /**
   * <p>The foreground color that applies to any sheet title, sheet control text, or UI that
   *             appears over the secondary background.</p>
   */
  SecondaryForeground?: string;

  /**
   * <p>The background color that applies to the sheet background and sheet controls.</p>
   */
  SecondaryBackground?: string;

  /**
   * <p>This color is that applies to selected states and buttons.</p>
   */
  Accent?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             accent color.</p>
   */
  AccentForeground?: string;

  /**
   * <p>The color that applies to error messages.</p>
   */
  Danger?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             error color.</p>
   */
  DangerForeground?: string;

  /**
   * <p>This color that applies to warning and informational messages.</p>
   */
  Warning?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             warning color.</p>
   */
  WarningForeground?: string;

  /**
   * <p>The color that applies to success messages, for example the check mark for a
   *             successful download.</p>
   */
  Success?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             success color.</p>
   */
  SuccessForeground?: string;

  /**
   * <p>The color that applies to the names of fields that are identified as
   *             dimensions.</p>
   */
  Dimension?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             dimension color.</p>
   */
  DimensionForeground?: string;

  /**
   * <p>The color that applies to the names of fields that are identified as measures.</p>
   */
  Measure?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             measure color.</p>
   */
  MeasureForeground?: string;
}

export namespace UIColorPalette {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UIColorPalette): any => ({
    ...obj,
  });
}

/**
 * <p>The theme configuration. This configuration contains all of the display properties for
 *             a theme.</p>
 */
export interface ThemeConfiguration {
  /**
   * <p>Color properties that apply to chart data colors.</p>
   */
  DataColorPalette?: DataColorPalette;

  /**
   * <p>Color properties that apply to the UI and to charts, excluding the colors that apply
   *             to data. </p>
   */
  UIColorPalette?: UIColorPalette;

  /**
   * <p>Display options related to sheets.</p>
   */
  Sheet?: SheetStyle;
}

export namespace ThemeConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThemeConfiguration): any => ({
    ...obj,
  });
}

export interface CreateThemeRequest {
  /**
   * <p>The ID of the Amazon Web Services account; where you want to store the new theme. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme that you want to create. The theme ID is unique per Amazon Web Services Region; in
   * 			each Amazon Web Services account;.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>A display name for the theme.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the theme that a custom theme will inherit from. All themes inherit from one of
   * 			the starting themes defined by Amazon QuickSight. For a list of the starting themes, use
   * 				<code>ListThemes</code> or choose <b>Themes</b> from
   * 			within a QuickSight analysis. </p>
   */
  BaseThemeId: string | undefined;

  /**
   * <p>A description of the first version of the theme that you're creating. Every time
   * 				<code>UpdateTheme</code> is called, a new version is created. Each version of the
   * 			theme has a description of the version in the <code>VersionDescription</code>
   * 			field.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The theme configuration, which contains the theme display properties.</p>
   */
  Configuration: ThemeConfiguration | undefined;

  /**
   * <p>A valid grouping of resource permissions to apply to the new theme.
   * 			</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>A map of the key-value pairs for the resource tag or tags that you want to add to the
   * 			resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateThemeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThemeRequest): any => ({
    ...obj,
  });
}

export interface CreateThemeResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the theme.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the new theme.</p>
   */
  VersionArn?: string;

  /**
   * <p>The ID of the theme.</p>
   */
  ThemeId?: string;

  /**
   * <p>The theme creation status.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace CreateThemeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThemeResponse): any => ({
    ...obj,
  });
}

export interface CreateThemeAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the theme for the new theme alias.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme alias.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The name that you want to give to the theme alias that you are creating. The
   * 			alias name can't begin with a <code>$</code>. Alias names that start with <code>$</code>
   * 			are reserved by Amazon QuickSight. </p>
   */
  AliasName: string | undefined;

  /**
   * <p>The version number of the theme.</p>
   */
  ThemeVersionNumber: number | undefined;
}

export namespace CreateThemeAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThemeAliasRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An alias for a theme.</p>
 */
export interface ThemeAlias {
  /**
   * <p>The Amazon Resource Name (ARN) of the theme alias.</p>
   */
  Arn?: string;

  /**
   * <p>The display name of the theme alias.</p>
   */
  AliasName?: string;

  /**
   * <p>The version number of the theme alias.</p>
   */
  ThemeVersionNumber?: number;
}

export namespace ThemeAlias {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThemeAlias): any => ({
    ...obj,
  });
}

export interface CreateThemeAliasResponse {
  /**
   * <p>Information about the theme alias.</p>
   */
  ThemeAlias?: ThemeAlias;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace CreateThemeAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThemeAliasResponse): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashboardError): any => ({
    ...obj,
  });
}

/**
 * <p>Dashboard version.</p>
 */
export interface DashboardVersion {
  /**
   * <p>The time that this dashboard version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Errors associated with this dashboard version.</p>
   */
  Errors?: DashboardError[];

  /**
   * <p>Version number for this version of the dashboard.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>Source entity ARN.</p>
   */
  SourceEntityArn?: string;

  /**
   * <p>The Amazon Resource Numbers (ARNs) for the datasets that are associated with this
   *             version of the dashboard.</p>
   */
  DataSetArns?: string[];

  /**
   * <p>Description.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the theme associated with a version of the dashboard.</p>
   */
  ThemeArn?: string;

  /**
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   */
  Sheets?: Sheet[];
}

export namespace DashboardVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashboardVersion): any => ({
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>A display name for the dashboard.</p>
   */
  Name?: string;

  /**
   * <p>Version.</p>
   */
  Version?: DashboardVersion;

  /**
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last time that this dataset was published.</p>
   */
  LastPublishedTime?: Date;

  /**
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace Dashboard {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Dashboard): any => ({
    ...obj,
  });
}

export enum DashboardFilterAttribute {
  QUICKSIGHT_USER = "QUICKSIGHT_USER",
}

/**
 * <p>A filter that you apply when searching for dashboards. </p>
 */
export interface DashboardSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example,
   *             <code>"Operator": "StringEquals"</code>.</p>
   */
  Operator: FilterOperator | string | undefined;

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
}

export namespace DashboardSearchFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashboardSearchFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Dashboard summary.</p>
 */
export interface DashboardSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>Dashboard ID.</p>
   */
  DashboardId?: string;

  /**
   * <p>A display name for the dashboard.</p>
   */
  Name?: string;

  /**
   * <p>The time that this dashboard was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last time that this dashboard was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>Published version number.</p>
   */
  PublishedVersionNumber?: number;

  /**
   * <p>The last time that this dashboard was published.</p>
   */
  LastPublishedTime?: Date;
}

export namespace DashboardSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashboardSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Dashboard version summary.</p>
 */
export interface DashboardVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The time that this dashboard version was created.</p>
   */
  CreatedTime?: Date;

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

  /**
   * <p>Description.</p>
   */
  Description?: string;
}

export namespace DashboardVersionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashboardVersionSummary): any => ({
    ...obj,
  });
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
   * <p>A description for a column.</p>
   */
  Description?: string;

  /**
   * <p>Type.</p>
   */
  Type?: ColumnDataType | string;
}

export namespace OutputColumn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputColumn): any => ({
    ...obj,
  });
}

/**
 * <p>Dataset.</p>
 */
export interface DataSet {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the dataset.</p>
   */
  DataSetId?: string;

  /**
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap?: { [key: string]: PhysicalTable };

  /**
   * <p>Configures the combination and transformation of the data from the physical
   *             tables.</p>
   */
  LogicalTableMap?: { [key: string]: LogicalTable };

  /**
   * <p>The list of columns after all transforms. These columns are available in templates,
   *             analyses, and dashboards.</p>
   */
  OutputColumns?: OutputColumn[];

  /**
   * <p>A value that indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode?: DataSetImportMode | string;

  /**
   * <p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
   *             imported into SPICE.</p>
   */
  ConsumedSpiceCapacityInBytes?: number;

  /**
   * <p>Groupings of columns that work together in certain Amazon QuickSight features.
   *             Currently, only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   */
  FieldFolders?: { [key: string]: FieldFolder };

  /**
   * <p>The row-level security configuration for the dataset.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * <p>The element you can use to define tags for row-level security.</p>
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;

  /**
   * <p>A set of one or more definitions of a <code>
   *                <a>ColumnLevelPermissionRule</a>
   *             </code>.</p>
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[];
}

export namespace DataSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSet): any => ({
    ...obj,
    ...(obj.PhysicalTableMap && {
      PhysicalTableMap: Object.entries(obj.PhysicalTableMap).reduce(
        (acc: any, [key, value]: [string, PhysicalTable]) => ({
          ...acc,
          [key]: PhysicalTable.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.LogicalTableMap && {
      LogicalTableMap: Object.entries(obj.LogicalTableMap).reduce(
        (acc: any, [key, value]: [string, LogicalTable]) => ({
          ...acc,
          [key]: LogicalTable.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.RowLevelPermissionTagConfiguration && {
      RowLevelPermissionTagConfiguration: RowLevelPermissionTagConfiguration.filterSensitiveLog(
        obj.RowLevelPermissionTagConfiguration
      ),
    }),
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSetSchema): any => ({
    ...obj,
  });
}

/**
 * <p>Dataset configuration.</p>
 */
export interface DataSetConfiguration {
  /**
   * <p>Placeholder.</p>
   */
  Placeholder?: string;

  /**
   * <p>Dataset schema.</p>
   */
  DataSetSchema?: DataSetSchema;

  /**
   * <p>A structure containing the list of column group schemas.</p>
   */
  ColumnGroupSchemaList?: ColumnGroupSchema[];
}

export namespace DataSetConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSetConfiguration): any => ({
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
   * <p>The ID of the dataset.</p>
   */
  DataSetId?: string;

  /**
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A value that indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode?: DataSetImportMode | string;

  /**
   * <p>The row-level security configuration for the dataset.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * <p>Whether or not the row level permission tags are applied.</p>
   */
  RowLevelPermissionTagConfigurationApplied?: boolean;

  /**
   * <p>A value that indicates if the dataset has column level permission configured.</p>
   */
  ColumnLevelPermissionRulesApplied?: boolean;
}

export namespace DataSetSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSetSummary): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSourceErrorInfo): any => ({
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
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region; for each
   *             Amazon Web Services account;.</p>
   */
  DataSourceId?: string;

  /**
   * <p>A display name for the data source.</p>
   */
  Name?: string;

  /**
   * <p>The type of the data source. This type indicates which database engine the data source
   *             connects to.</p>
   */
  Type?: DataSourceType | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The time that this data source was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last time that this data source was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying source. This
   *             is a variant type structure. For this structure to be valid, only one of the attributes
   *             can be non-null.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * <p>A set of alternate data source parameters that you want to share for the credentials
   *             stored with this data source. The credentials are applied in tandem with the data source
   *             parameters when you copy a data source by using a create or update request. The API
   *             operation compares the <code>DataSourceParameters</code> structure that's in the request
   *             with the structures in the <code>AlternateDataSourceParameters</code> allow list. If the
   *             structures are an exact match, the request is allowed to use the credentials from this
   *             existing data source. If the <code>AlternateDataSourceParameters</code> list is null,
   *             the <code>Credentials</code> originally used with this <code>DataSourceParameters</code>
   *             are automatically allowed.</p>
   */
  AlternateDataSourceParameters?: DataSourceParameters[];

  /**
   * <p>The VPC connection information. You need to use this parameter only when you want
   *             QuickSight to use a VPC connection when connecting to your underlying source.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your
   *             underlying source.</p>
   */
  SslProperties?: SslProperties;

  /**
   * <p>Error information from the last update or the creation of the data source.</p>
   */
  ErrorInfo?: DataSourceErrorInfo;
}

export namespace DataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSource): any => ({
    ...obj,
    ...(obj.DataSourceParameters && {
      DataSourceParameters: DataSourceParameters.filterSensitiveLog(obj.DataSourceParameters),
    }),
    ...(obj.AlternateDataSourceParameters && {
      AlternateDataSourceParameters: obj.AlternateDataSourceParameters.map((item) =>
        DataSourceParameters.filterSensitiveLog(item)
      ),
    }),
  });
}

export interface DeleteAccountCustomizationRequest {
  /**
   * <p>The ID for the Amazon Web Services account; that you want to delete QuickSight customizations from in
   *             this Amazon Web Services Region;.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The QuickSight namespace that you're deleting the customizations from.</p>
   */
  Namespace?: string;
}

export namespace DeleteAccountCustomizationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccountCustomizationRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccountCustomizationResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DeleteAccountCustomizationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccountCustomizationResponse): any => ({
    ...obj,
  });
}

export interface DeleteAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account; where you want to delete an analysis.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis that you're deleting.</p>
   */
  AnalysisId: string | undefined;

  /**
   * <p>A value that specifies the number of days that QuickSight waits before it deletes the
   *             analysis. You can't use this parameter with the <code>ForceDeleteWithoutRecovery</code>
   *             option in the same API call. The default value is 30.</p>
   */
  RecoveryWindowInDays?: number;

  /**
   * <p>This option defaults to the value <code>NoForceDeleteWithoutRecovery</code>. To
   *             immediately delete the analysis, add the <code>ForceDeleteWithoutRecovery</code> option.
   *             You can't restore an analysis after it's deleted. </p>
   */
  ForceDeleteWithoutRecovery?: boolean;
}

export namespace DeleteAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAnalysisRequest): any => ({
    ...obj,
  });
}

export interface DeleteAnalysisResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted analysis.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the deleted analysis.</p>
   */
  AnalysisId?: string;

  /**
   * <p>The date and time that the analysis is scheduled to be deleted.</p>
   */
  DeletionTime?: Date;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteAnalysisResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAnalysisResponse): any => ({
    ...obj,
  });
}

export interface DeleteDashboardRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the dashboard that you're
   *             deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number of the dashboard. If the version number property is provided, only
   *             the specified version of the dashboard is deleted.</p>
   */
  VersionNumber?: number;
}

export namespace DeleteDashboardRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDashboardRequest): any => ({
    ...obj,
  });
}

export interface DeleteDashboardResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Secure Socket Layer (SSL) properties that apply for the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteDashboardResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDashboardResponse): any => ({
    ...obj,
  });
}

export interface DeleteDataSetRequest {
  /**
   * <p>The Amazon Web Services account; ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region; for each Amazon Web Services account;.</p>
   */
  DataSetId: string | undefined;
}

export namespace DeleteDataSetRequest {
  /**
   * @internal
   */
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
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region; for each Amazon Web Services account;.</p>
   */
  DataSetId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DeleteDataSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDataSetResponse): any => ({
    ...obj,
  });
}

export interface DeleteDataSourceRequest {
  /**
   * <p>The Amazon Web Services account; ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region; for each Amazon Web Services account;.</p>
   */
  DataSourceId: string | undefined;
}

export namespace DeleteDataSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDataSourceRequest): any => ({
    ...obj,
  });
}

export interface DeleteDataSourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source that you deleted.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region; for each Amazon Web Services account;.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DeleteDataSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDataSourceResponse): any => ({
    ...obj,
  });
}

export interface DeleteFolderRequest {
  /**
   * <p>The AWS Account ID for the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The folder ID.</p>
   */
  FolderId: string | undefined;
}

export namespace DeleteFolderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFolderRequest): any => ({
    ...obj,
  });
}

export interface DeleteFolderResponse {
  /**
   * <p>The status of deleting the folder. If succeeded, the status is <code>SC_OK (200)</code>.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Resource Name of the deleted folder.</p>
   */
  Arn?: string;

  /**
   * <p>The folder ID.</p>
   */
  FolderId?: string;

  /**
   * <p>The request ID.</p>
   */
  RequestId?: string;
}

export namespace DeleteFolderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFolderResponse): any => ({
    ...obj,
  });
}

export interface DeleteFolderMembershipRequest {
  /**
   * <p>The AWS Account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Folder ID.</p>
   */
  FolderId: string | undefined;

  /**
   * <p>The ID of the asset (the dashboard, analysis, or dataset) that you want to delete.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The type of the member, including <code>DASHBOARD</code>, <code>ANALYSIS</code>, and <code>DATASET</code>
   *          </p>
   */
  MemberType: MemberType | string | undefined;
}

export namespace DeleteFolderMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFolderMembershipRequest): any => ({
    ...obj,
  });
}

export interface DeleteFolderMembershipResponse {
  /**
   * <p>The status of deleting the asset. If succeeded, the status is <code>SC_OK (200)</code>.</p>
   */
  Status?: number;

  /**
   * <p>The request ID.</p>
   */
  RequestId?: string;
}

export namespace DeleteFolderMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFolderMembershipResponse): any => ({
    ...obj,
  });
}

export interface DeleteGroupRequest {
  /**
   * <p>The name of the group that you want to delete.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account; that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account; that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace DeleteGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteGroupResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DeleteGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteGroupMembershipRequest {
  /**
   * <p>The name of the user that you want to delete from the group membership.</p>
   */
  MemberName: string | undefined;

  /**
   * <p>The name of the group that you want to delete the user from.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account; that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account; that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace DeleteGroupMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGroupMembershipRequest): any => ({
    ...obj,
  });
}

export interface DeleteGroupMembershipResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DeleteGroupMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGroupMembershipResponse): any => ({
    ...obj,
  });
}

export interface DeleteIAMPolicyAssignmentRequest {
  /**
   * <p>The Amazon Web Services account; ID where you want to delete the IAM policy assignment.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment. </p>
   */
  AssignmentName: string | undefined;

  /**
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;
}

export namespace DeleteIAMPolicyAssignmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIAMPolicyAssignmentRequest): any => ({
    ...obj,
  });
}

export interface DeleteIAMPolicyAssignmentResponse {
  /**
   * <p>The name of the assignment. </p>
   */
  AssignmentName?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DeleteIAMPolicyAssignmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIAMPolicyAssignmentResponse): any => ({
    ...obj,
  });
}

export interface DeleteNamespaceRequest {
  /**
   * <p>The ID for the Amazon Web Services account; that you want to delete the QuickSight namespace from.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want to delete.</p>
   */
  Namespace: string | undefined;
}

export namespace DeleteNamespaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNamespaceRequest): any => ({
    ...obj,
  });
}

export interface DeleteNamespaceResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DeleteNamespaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNamespaceResponse): any => ({
    ...obj,
  });
}

export interface DeleteTemplateRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the template that you're deleting.</p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteTemplateResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>An ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DeleteTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTemplateResponse): any => ({
    ...obj,
  });
}

export interface DeleteTemplateAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the item to delete.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template that the specified alias is for.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The name for the template alias. To delete a specific alias, you delete the version that the
   * 			alias points to. You can specify the alias name, or specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. </p>
   */
  AliasName: string | undefined;
}

export namespace DeleteTemplateAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTemplateAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteTemplateAliasResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>An ID for the template associated with the deletion.</p>
   */
  TemplateId?: string;

  /**
   * <p>The name for the template alias.</p>
   */
  AliasName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template you want to delete.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DeleteTemplateAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTemplateAliasResponse): any => ({
    ...obj,
  });
}

export interface DeleteThemeRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the theme that you're deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme that you want to delete.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The version of the theme that you want to delete. </p>
   * 		       <p>
   *             <b>Note:</b> If you don't provide a version number, you're
   * 			using this call to <code>DeleteTheme</code> to delete all versions of the theme.</p>
   */
  VersionNumber?: number;
}

export namespace DeleteThemeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteThemeRequest): any => ({
    ...obj,
  });
}

export interface DeleteThemeResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>An ID for the theme.</p>
   */
  ThemeId?: string;
}

export namespace DeleteThemeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteThemeResponse): any => ({
    ...obj,
  });
}

export interface DeleteThemeAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the theme alias to delete.</p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteThemeAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteThemeAliasResponse {
  /**
   * <p>The name for the theme alias.</p>
   */
  AliasName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme resource using the deleted alias.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>An ID for the theme associated with the deletion.</p>
   */
  ThemeId?: string;
}

export namespace DeleteThemeAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteThemeAliasResponse): any => ({
    ...obj,
  });
}

export interface DeleteUserRequest {
  /**
   * <p>The name of the user that you want to delete.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account; that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account; that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace DeleteUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DeleteUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteUserByPrincipalIdRequest {
  /**
   * <p>The principal ID of the user.</p>
   */
  PrincipalId: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account; that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account; that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace DeleteUserByPrincipalIdRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserByPrincipalIdRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserByPrincipalIdResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DeleteUserByPrincipalIdResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserByPrincipalIdResponse): any => ({
    ...obj,
  });
}

export interface DescribeAccountCustomizationRequest {
  /**
   * <p>The ID for the Amazon Web Services account; that you want to describe QuickSight customizations
   *             for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The QuickSight namespace that you want to describe QuickSight customizations
   *             for.</p>
   */
  Namespace?: string;

  /**
   * <p>The <code>Resolved</code> flag works with the other parameters to determine which view
   *             of QuickSight customizations is returned. You can add this flag to your command to use
   *             the same view that QuickSight uses to identify which customizations to apply to the
   *             console. Omit this flag, or set it to <code>no-resolved</code>, to reveal customizations
   *             that are configured at different levels. </p>
   */
  Resolved?: boolean;
}

export namespace DescribeAccountCustomizationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountCustomizationRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountCustomizationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the customization that's associated with this Amazon Web Services account;.</p>
   */
  Arn?: string;

  /**
   * <p>The ID for the Amazon Web Services account; that you're describing.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The QuickSight namespace that you're describing. </p>
   */
  Namespace?: string;

  /**
   * <p>The QuickSight customizations that exist in the current Amazon Web Services Region;. </p>
   */
  AccountCustomization?: AccountCustomization;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DescribeAccountCustomizationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountCustomizationResponse): any => ({
    ...obj,
  });
}

export interface DescribeAccountSettingsRequest {
  /**
   * <p>The ID for the Amazon Web Services account; that contains the settings that you want to list.</p>
   */
  AwsAccountId: string | undefined;
}

export namespace DescribeAccountSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountSettingsRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountSettingsResponse {
  /**
   * <p>The QuickSight settings for this Amazon Web Services account;. This information includes the edition of Amazon
   *             QuickSight that you subscribed to (Standard or Enterprise) and the notification email for the
   *             QuickSight subscription. In the QuickSight console, the QuickSight subscription is sometimes
   *             referred to as a QuickSight "account" even though it's technically not an account
   *             by itself. Instead, it's a subscription to the QuickSight service for your Amazon Web Services account;. The
   *             edition that you subscribe to applies to QuickSight in every Amazon Web Services Region; where you use it.</p>
   */
  AccountSettings?: AccountSettings;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DescribeAccountSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountSettingsResponse): any => ({
    ...obj,
  });
}

export interface DescribeAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the analysis. You must be using the
   *             Amazon Web Services account; that the analysis is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis that you're describing. The ID is part of the URL of the
   *             analysis.</p>
   */
  AnalysisId: string | undefined;
}

export namespace DescribeAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAnalysisRequest): any => ({
    ...obj,
  });
}

export interface DescribeAnalysisResponse {
  /**
   * <p>A metadata structure that contains summary information for the analysis that you're
   *             describing.</p>
   */
  Analysis?: Analysis;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeAnalysisResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAnalysisResponse): any => ({
    ...obj,
  });
}

export interface DescribeAnalysisPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the analysis whose permissions you're
   *             describing. You must be using the Amazon Web Services account; that the analysis is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis whose permissions you're describing. The ID is part of the
   *             analysis URL.</p>
   */
  AnalysisId: string | undefined;
}

export namespace DescribeAnalysisPermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAnalysisPermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeAnalysisPermissionsResponse {
  /**
   * <p>The ID of the analysis whose permissions you're describing.</p>
   */
  AnalysisId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the analysis whose permissions you're
   *             describing.</p>
   */
  AnalysisArn?: string;

  /**
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeAnalysisPermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAnalysisPermissionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeDashboardRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the dashboard that you're
   *             describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number for the dashboard. If a version number isn't passed, the
   *             latest published dashboard version is described. </p>
   */
  VersionNumber?: number;

  /**
   * <p>The alias name.</p>
   */
  AliasName?: string;
}

export namespace DescribeDashboardRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDashboardRequest): any => ({
    ...obj,
  });
}

export interface DescribeDashboardResponse {
  /**
   * <p>Information about the dashboard.</p>
   */
  Dashboard?: Dashboard;

  /**
   * <p>The HTTP status of this request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeDashboardResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDashboardResponse): any => ({
    ...obj,
  });
}

export interface DescribeDashboardPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the dashboard that you're describing
   *             permissions for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   */
  DashboardId: string | undefined;
}

export namespace DescribeDashboardPermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDashboardPermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeDashboardPermissionsResponse {
  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>A structure that contains the permissions for the dashboard.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeDashboardPermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDashboardPermissionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeDataSetRequest {
  /**
   * <p>The Amazon Web Services account; ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region; for each Amazon Web Services account;.</p>
   */
  DataSetId: string | undefined;
}

export namespace DescribeDataSetRequest {
  /**
   * @internal
   */
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
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DescribeDataSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataSetResponse): any => ({
    ...obj,
    ...(obj.DataSet && { DataSet: DataSet.filterSensitiveLog(obj.DataSet) }),
  });
}

export interface DescribeDataSetPermissionsRequest {
  /**
   * <p>The Amazon Web Services account; ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region; for each Amazon Web Services account;.</p>
   */
  DataSetId: string | undefined;
}

export namespace DescribeDataSetPermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataSetPermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeDataSetPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DataSetArn?: string;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region; for each Amazon Web Services account;.</p>
   */
  DataSetId?: string;

  /**
   * <p>A list of resource permissions on the dataset.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DescribeDataSetPermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataSetPermissionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeDataSourceRequest {
  /**
   * <p>The Amazon Web Services account; ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region; for each Amazon Web Services account;.</p>
   */
  DataSourceId: string | undefined;
}

export namespace DescribeDataSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataSourceRequest): any => ({
    ...obj,
  });
}

export interface DescribeDataSourceResponse {
  /**
   * <p>The information on the data source.</p>
   */
  DataSource?: DataSource;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DescribeDataSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataSourceResponse): any => ({
    ...obj,
    ...(obj.DataSource && { DataSource: DataSource.filterSensitiveLog(obj.DataSource) }),
  });
}

export interface DescribeDataSourcePermissionsRequest {
  /**
   * <p>The Amazon Web Services account; ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region; for each Amazon Web Services account;.</p>
   */
  DataSourceId: string | undefined;
}

export namespace DescribeDataSourcePermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataSourcePermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeDataSourcePermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region; for each Amazon Web Services account;.</p>
   */
  DataSourceId?: string;

  /**
   * <p>A list of resource permissions on the data source.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DescribeDataSourcePermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataSourcePermissionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeFolderRequest {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The folder ID.</p>
   */
  FolderId: string | undefined;
}

export namespace DescribeFolderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFolderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A folder.</p>
 */
export interface Folder {
  /**
   * <p>The folder ID.</p>
   */
  FolderId?: string;

  /**
   * <p>The folder Amazon Resource Name (ARN).</p>
   */
  Arn?: string;

  /**
   * <p>A display name for the folder.</p>
   */
  Name?: string;

  /**
   * <p>The type of the folder.</p>
   */
  FolderType?: FolderType | string;

  /**
   * <p>An array of ancestor folder ARN strings.</p>
   */
  FolderPath?: string[];

  /**
   * <p>The time that the folder was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The time that the folder was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace Folder {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Folder): any => ({
    ...obj,
  });
}

export interface DescribeFolderResponse {
  /**
   * <p>The status. If succeeded, the status is <code>SC_OK (200)</code>.</p>
   */
  Status?: number;

  /**
   * <p>Information about the folder.</p>
   */
  Folder?: Folder;

  /**
   * <p>The request ID.</p>
   */
  RequestId?: string;
}

export namespace DescribeFolderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFolderResponse): any => ({
    ...obj,
  });
}

export interface DescribeFolderPermissionsRequest {
  /**
   * <p>The AWS Account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The folder ID.</p>
   */
  FolderId: string | undefined;
}

export namespace DescribeFolderPermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFolderPermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeFolderPermissionsResponse {
  /**
   * <p>The status. If succeeded, the status is <code>SC_OK</code>.</p>
   */
  Status?: number;

  /**
   * <p>The folder ID.</p>
   */
  FolderId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the folder.</p>
   */
  Arn?: string;

  /**
   * <p>Information about the permissions on the folder.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The request ID.</p>
   */
  RequestId?: string;
}

export namespace DescribeFolderPermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFolderPermissionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeFolderResolvedPermissionsRequest {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The folder ID.</p>
   */
  FolderId: string | undefined;
}

export namespace DescribeFolderResolvedPermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFolderResolvedPermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeFolderResolvedPermissionsResponse {
  /**
   * <p>The status. If succeeded, the status is <code>SC_OK</code>
   *          </p>
   */
  Status?: number;

  /**
   * <p>The folder ID.</p>
   */
  FolderId?: string;

  /**
   * <p>The Amazon Resource Name (ARN).</p>
   */
  Arn?: string;

  /**
   * <p>Information about the permissions on the dashboard.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The request ID.</p>
   */
  RequestId?: string;
}

export namespace DescribeFolderResolvedPermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFolderResolvedPermissionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeGroupRequest {
  /**
   * <p>The name of the group that you want to describe.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account; that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account; that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace DescribeGroupRequest {
  /**
   * @internal
   */
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
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DescribeGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeIAMPolicyAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the assignment that you want to describe.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment, also called a rule.</p>
   */
  AssignmentName: string | undefined;

  /**
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;
}

export namespace DescribeIAMPolicyAssignmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIAMPolicyAssignmentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An Identity and Access Management (IAM) policy assignment.</p>
 */
export interface IAMPolicyAssignment {
  /**
   * <p>The Amazon Web Services account; ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>Assignment ID.</p>
   */
  AssignmentId?: string;

  /**
   * <p>Assignment name.</p>
   */
  AssignmentName?: string;

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
}

export namespace IAMPolicyAssignment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IAMPolicyAssignment): any => ({
    ...obj,
  });
}

export interface DescribeIAMPolicyAssignmentResponse {
  /**
   * <p>Information describing the IAM policy assignment.</p>
   */
  IAMPolicyAssignment?: IAMPolicyAssignment;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DescribeIAMPolicyAssignmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIAMPolicyAssignmentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>NextToken</code> value isn't valid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace InvalidNextTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

export interface DescribeIngestionRequest {
  /**
   * <p>The Amazon Web Services account; ID.</p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIngestionRequest): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a queued dataset SPICE ingestion.</p>
 */
export interface QueueInfo {
  /**
   * <p>The ID of the queued ingestion.</p>
   */
  WaitingOnIngestion: string | undefined;

  /**
   * <p>The ID of the ongoing ingestion. The queued ingestion is waiting for the ongoing
   *             ingestion to complete.</p>
   */
  QueuedIngestion: string | undefined;
}

export namespace QueueInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueueInfo): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RowInfo): any => ({
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
   * <p>Ingestion ID.</p>
   */
  IngestionId?: string;

  /**
   * <p>Ingestion status.</p>
   */
  IngestionStatus: IngestionStatus | string | undefined;

  /**
   * <p>Error information for this ingestion.</p>
   */
  ErrorInfo?: ErrorInfo;

  /**
   * <p>Information about rows for a data set SPICE ingestion.</p>
   */
  RowInfo?: RowInfo;

  /**
   * <p>Information about a queued dataset SPICE ingestion.</p>
   */
  QueueInfo?: QueueInfo;

  /**
   * <p>The time that this ingestion started.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The time that this ingestion took, measured in seconds.</p>
   */
  IngestionTimeInSeconds?: number;

  /**
   * <p>The size of the data ingested, in bytes.</p>
   */
  IngestionSizeInBytes?: number;

  /**
   * <p>Event source for this ingestion.</p>
   */
  RequestSource?: IngestionRequestSource | string;

  /**
   * <p>Type of this ingestion.</p>
   */
  RequestType?: IngestionRequestType | string;
}

export namespace Ingestion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ingestion): any => ({
    ...obj,
  });
}

export interface DescribeIngestionResponse {
  /**
   * <p>Information about the ingestion.</p>
   */
  Ingestion?: Ingestion;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DescribeIngestionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIngestionResponse): any => ({
    ...obj,
  });
}

export interface DescribeNamespaceRequest {
  /**
   * <p>The ID for the Amazon Web Services account; that contains the QuickSight namespace that you want to describe.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want to describe.</p>
   */
  Namespace: string | undefined;
}

export namespace DescribeNamespaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNamespaceRequest): any => ({
    ...obj,
  });
}

export enum NamespaceErrorType {
  INTERNAL_SERVICE_ERROR = "INTERNAL_SERVICE_ERROR",
  PERMISSION_DENIED = "PERMISSION_DENIED",
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NamespaceError): any => ({
    ...obj,
  });
}

/**
 * <p>The error type.</p>
 */
export interface NamespaceInfoV2 {
  /**
   * <p>The name of the error.</p>
   */
  Name?: string;

  /**
   * <p>The namespace ARN.</p>
   */
  Arn?: string;

  /**
   * <p>The namespace Amazon Web Services Region;.</p>
   */
  CapacityRegion?: string;

  /**
   * <p>The creation status of a namespace that is not yet completely created.</p>
   */
  CreationStatus?: NamespaceStatus | string;

  /**
   * <p>The identity store used for the namespace.</p>
   */
  IdentityStore?: IdentityStore | string;

  /**
   * <p>An error that occurred when the namespace was created.</p>
   */
  NamespaceError?: NamespaceError;
}

export namespace NamespaceInfoV2 {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NamespaceInfoV2): any => ({
    ...obj,
  });
}

export interface DescribeNamespaceResponse {
  /**
   * <p>The information about the namespace that you're describing. The response includes
   *         the namespace ARN, name, Amazon Web Services Region;, creation status, and identity store. <code>DescribeNamespace</code> also
   *         works for namespaces that are in the process of being created. For incomplete namespaces,
   *         this API operation lists the namespace error types and messages associated with the creation process.</p>
   */
  Namespace?: NamespaceInfoV2;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DescribeNamespaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNamespaceResponse): any => ({
    ...obj,
  });
}

export interface DescribeTemplateRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the template that you're describing.</p>
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

  /**
   * <p>The alias of the template that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName?: string;
}

export namespace DescribeTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTemplateRequest): any => ({
    ...obj,
  });
}

export enum TemplateErrorType {
  ACCESS_DENIED = "ACCESS_DENIED",
  DATA_SET_NOT_FOUND = "DATA_SET_NOT_FOUND",
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
  SOURCE_NOT_FOUND = "SOURCE_NOT_FOUND",
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateError): any => ({
    ...obj,
  });
}

/**
 * <p>A version of a template.</p>
 */
export interface TemplateVersion {
  /**
   * <p>The time that this template version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Errors associated with this template version.</p>
   */
  Errors?: TemplateError[];

  /**
   * <p>The version number of the template version.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>Schema of the dataset identified by the placeholder. Any dashboard created from this
   *             template should be bound to new datasets matching the same schema described through this
   *             API operation.</p>
   */
  DataSetConfigurations?: DataSetConfiguration[];

  /**
   * <p>The description of the template.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an analysis or template that was used to create this
   *             template.</p>
   */
  SourceEntityArn?: string;

  /**
   * <p>The ARN of the theme associated with this version of the template.</p>
   */
  ThemeArn?: string;

  /**
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   */
  Sheets?: Sheet[];
}

export namespace TemplateVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateVersion): any => ({
    ...obj,
  });
}

/**
 * <p>A template object. A <i>template</i> is an entity in QuickSight that
 *             encapsulates the metadata required to create an analysis and that you can use to create
 *             a dashboard. A template adds a layer of abstraction by using placeholders to replace the
 *             dataset associated with an analysis. You can use templates to create dashboards by
 *             replacing dataset placeholders with datasets that follow the same schema that was used
 *             to create the source analysis and template.</p>
 *         <p>You can share templates across Amazon Web Services accounts by allowing users in other Amazon Web Services accounts to
 *             create a template or a dashboard from an existing template.</p>
 */
export interface Template {
  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  Arn?: string;

  /**
   * <p>The display name of the template.</p>
   */
  Name?: string;

  /**
   * <p>A structure describing the versions of the template.</p>
   */
  Version?: TemplateVersion;

  /**
   * <p>The ID for the template. This is unique per Amazon Web Services Region; for each Amazon Web Services account;.</p>
   */
  TemplateId?: string;

  /**
   * <p>Time when this was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>Time when this was created.</p>
   */
  CreatedTime?: Date;
}

export namespace Template {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Template): any => ({
    ...obj,
  });
}

export interface DescribeTemplateResponse {
  /**
   * <p>The template structure for the object you want to describe.</p>
   */
  Template?: Template;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTemplateResponse): any => ({
    ...obj,
  });
}

export interface DescribeTemplateAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the template alias that you're
   * 			describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The name of the template alias that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName: string | undefined;
}

export namespace DescribeTemplateAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTemplateAliasRequest): any => ({
    ...obj,
  });
}

export interface DescribeTemplateAliasResponse {
  /**
   * <p>Information about the template alias.</p>
   */
  TemplateAlias?: TemplateAlias;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeTemplateAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTemplateAliasResponse): any => ({
    ...obj,
  });
}

export interface DescribeTemplatePermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the template that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;
}

export namespace DescribeTemplatePermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTemplatePermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTemplatePermissionsResponse {
  /**
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  TemplateArn?: string;

  /**
   * <p>A list of resource permissions to be set on the template. </p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DescribeTemplatePermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTemplatePermissionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeThemeRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the theme that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The version number for the version to describe. If a <code>VersionNumber</code> parameter
   * 			value isn't provided, the latest version of the theme is described.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The alias of the theme that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			theme by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to themes.</p>
   */
  AliasName?: string;
}

export namespace DescribeThemeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeThemeRequest): any => ({
    ...obj,
  });
}

export enum ThemeType {
  ALL = "ALL",
  CUSTOM = "CUSTOM",
  QUICKSIGHT = "QUICKSIGHT",
}

export enum ThemeErrorType {
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
}

/**
 * <p>Theme error.</p>
 */
export interface ThemeError {
  /**
   * <p>The type of error.</p>
   */
  Type?: ThemeErrorType | string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace ThemeError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThemeError): any => ({
    ...obj,
  });
}

/**
 * <p>A version of a theme.</p>
 */
export interface ThemeVersion {
  /**
   * <p>The version number of the theme.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The description of the theme.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon QuickSight-defined ID of the theme that a custom theme inherits from. All
   *             themes initially inherit from a default QuickSight theme.</p>
   */
  BaseThemeId?: string;

  /**
   * <p>The date and time that this theme version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The theme configuration, which contains all the theme display properties.</p>
   */
  Configuration?: ThemeConfiguration;

  /**
   * <p>Errors associated with the theme.</p>
   */
  Errors?: ThemeError[];

  /**
   * <p>The status of the theme version.</p>
   */
  Status?: ResourceStatus | string;
}

export namespace ThemeVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThemeVersion): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about a theme.</p>
 */
export interface Theme {
  /**
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   */
  Arn?: string;

  /**
   * <p>The name that the user gives to the theme.</p>
   */
  Name?: string;

  /**
   * <p>The identifier that the user gives to the theme.</p>
   */
  ThemeId?: string;

  /**
   * <p>A version of a theme.</p>
   */
  Version?: ThemeVersion;

  /**
   * <p>The date and time that the theme was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The date and time that the theme was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The type of theme, based on how it was created. Valid values include:
   *             <code>QUICKSIGHT</code> and <code>CUSTOM</code>.</p>
   */
  Type?: ThemeType | string;
}

export namespace Theme {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Theme): any => ({
    ...obj,
  });
}

export interface DescribeThemeResponse {
  /**
   * <p>The information about the theme that you are describing.</p>
   */
  Theme?: Theme;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeThemeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeThemeResponse): any => ({
    ...obj,
  });
}

export interface DescribeThemeAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the theme alias that you're
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
  /**
   * @internal
   */
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
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export namespace DescribeThemeAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeThemeAliasResponse): any => ({
    ...obj,
  });
}

export interface DescribeThemePermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account; that contains the theme that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme that you want to describe permissions for.</p>
   */
  ThemeId: string | undefined;
}

export namespace DescribeThemePermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeThemePermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeThemePermissionsResponse {
  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   */
  ThemeArn?: string;

  /**
   * <p>A list of resource permissions set on the theme. </p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DescribeThemePermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeThemePermissionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeUserRequest {
  /**
   * <p>The name of the user that you want to describe.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account; that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account; that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export namespace DescribeUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserRequest): any => ({
    ...obj,
  });
}

export enum IdentityType {
  IAM = "IAM",
  QUICKSIGHT = "QUICKSIGHT",
}

export enum UserRole {
  ADMIN = "ADMIN",
  AUTHOR = "AUTHOR",
  READER = "READER",
  RESTRICTED_AUTHOR = "RESTRICTED_AUTHOR",
  RESTRICTED_READER = "RESTRICTED_READER",
}

/**
 * <p>A registered user of Amazon QuickSight. </p>
 */
export interface User {
  /**
   * <p>The Amazon Resource Name (ARN) for the user.</p>
   */
  Arn?: string;

  /**
   * <p>The user's user name.</p>
   */
  UserName?: string;

  /**
   * <p>The user's email address.</p>
   */
  Email?: string;

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
   * <p>The type of identity authentication used by the user.</p>
   */
  IdentityType?: IdentityType | string;

  /**
   * <p>The active status of user. When you create an Amazon QuickSight user that’s not an IAM
   *             user or an Active Directory user, that user is inactive until they sign in and provide a
   *             password.</p>
   */
  Active?: boolean;

  /**
   * <p>The principal ID of the user.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The custom permissions profile associated with this user.</p>
   */
  CustomPermissionsName?: string;

  /**
   * <p>The type of supported external login provider that provides identity to let the user
   *             federate into Amazon QuickSight with an associated IAM role. The type can be one of the following.</p>
   *         <ul>
   *             <li>
   *                     <p>
   *                   <code>COGNITO</code>: Amazon Cognito. The provider URL is cognito-identity.amazonaws.com.</p>
   *                 </li>
   *             <li>
   *                     <p>
   *                   <code>CUSTOM_OIDC</code>: Custom OpenID Connect (OIDC) provider.</p>
   *                 </li>
   *          </ul>
   */
  ExternalLoginFederationProviderType?: string;

  /**
   * <p>The URL of the external login provider.</p>
   */
  ExternalLoginFederationProviderUrl?: string;

  /**
   * <p>The identity ID for the user in the external login provider.</p>
   */
  ExternalLoginId?: string;
}

export namespace User {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj,
  });
}

export interface DescribeUserResponse {
  /**
   * <p>The user name.</p>
   */
  User?: User;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export namespace DescribeUserResponse {
  /**
   * @internal
   */
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
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
}

export namespace DomainNotWhitelistedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainNotWhitelistedException): any => ({
    ...obj,
  });
}

export enum EmbeddingIdentityType {
  ANONYMOUS = "ANONYMOUS",
  IAM = "IAM",
  QUICKSIGHT = "QUICKSIGHT",
}

export enum FolderFilterAttribute {
  PARENT_FOLDER_ARN = "PARENT_FOLDER_ARN",
}

/**
 * <p>An object that consists of the member Amazon Resource Name (ARN) and member ID.</p>
 */
export interface MemberIdArnPair {
  /**
   * <p>The ID of the member.</p>
   */
  MemberId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the member.</p>
   */
  MemberArn?: string;
}

export namespace MemberIdArnPair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MemberIdArnPair): any => ({
    ...obj,
  });
}

/**
 * <p>Searches a folder by a filter.</p>
 */
export interface FolderSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter. For example, <code>"Operator": "StringEquals"</code>.</p>
   */
  Operator?: FilterOperator | string;

  /**
   * <p>The name of the value that you want to use as a filter. For example, <code>"Name": "PARENT_FOLDER_ARN"</code>.</p>
   */
  Name?: FolderFilterAttribute | string;

  /**
   * <p>The value of the named item (in this example, <code>PARENT_FOLDER_ARN</code>), that you want to use as a filter. For example, <code>"Value": "arn:aws:quicksight:us-east-1:1:folder/folderId"</code>.</p>
   */
  Value?: string;
}

export namespace FolderSearchFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FolderSearchFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the folder. </p>
 */
export interface FolderSummary {
  /**
   * <p>The Amazon Resource Name (ARN).</p>
   */
  Arn?: string;

  /**
   * <p>The folder ID.</p>
   */
  FolderId?: string;

  /**
   * <p>The display name of the folder.</p>
   */
  Name?: string;

  /**
   * <p>The type of folder.</p>
   */
  FolderType?: FolderType | string;

  /**
   * <p>The time that the folder was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The time that the folder was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace FolderSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FolderSummary): any => ({
    ...obj,
  });
}
