// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccountCustomization,
  AdHocFilteringOption,
  AmazonElasticsearchParameters,
  AmazonOpenSearchParameters,
  AnalysisDefaults,
  AssetOptions,
  CalculatedField,
  CalculatedFieldFilterSensitiveLog,
  ColumnConfiguration,
  ColumnConfigurationFilterSensitiveLog,
  DashboardBehavior,
  DataSetIdentifierDeclaration,
  Edition,
  FilterGroup,
  NumberScale,
  ParameterDeclaration,
  ParameterDeclarationFilterSensitiveLog,
  ResourceStatus,
  TimeGranularity,
  VisualMenuOption,
} from "./models_0";

import { AnalysisDefinition, AnalysisFilterAttribute, FilterOperator, SheetDefinition } from "./models_1";

import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

/**
 * <p>A filter that you apply when searching for one or more analyses.</p>
 * @public
 */
export interface AnalysisSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example  <code>"Operator": "StringEquals"</code>. Valid values are  <code>"StringEquals"</code>  and  <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose folders you want to search in the <code>"Value"</code> field. For example,  <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the folders you are searching for. For example, <code>"Name":"ANALYSIS_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>ANALYSIS_NAME</code>.</p>
   * @public
   */
  Operator?: FilterOperator;

  /**
   * <p>The name of the value that you want to use as a filter, for example <code>"Name":
   *                 "QUICKSIGHT_OWNER"</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the analysis' owners or viewers are returned. Implicit permissions from folders or groups are considered. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners of the analyses are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_SOLE_OWNER</code>: Provide an ARN of a user or group, and any analyses with that ARN listed as the only owner of the analysis are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners of the analyses are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners or viewers of the analyses are returned. Implicit permissions from folders or groups are not considered. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ANALYSIS_NAME</code>: Any analyses whose names have a substring match to this value will be returned.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Name?: AnalysisFilterAttribute;

  /**
   * <p>The value of the named item, in this case <code>QUICKSIGHT_USER</code>, that you want
   *             to use as a filter, for example <code>"Value"</code>. An example is
   *                 <code>"arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   * @public
   */
  Value?: string;
}

/**
 * <p>Dataset reference.</p>
 * @public
 */
export interface DataSetReference {
  /**
   * <p>Dataset placeholder.</p>
   * @public
   */
  DataSetPlaceholder: string | undefined;

  /**
   * <p>Dataset Amazon Resource Name (ARN).</p>
   * @public
   */
  DataSetArn: string | undefined;
}

/**
 * <p>The source template of an analysis.</p>
 * @public
 */
export interface AnalysisSourceTemplate {
  /**
   * <p>The dataset references of the source template of an analysis.</p>
   * @public
   */
  DataSetReferences: DataSetReference[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source template of an analysis.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>The source entity of an analysis.</p>
 * @public
 */
export interface AnalysisSourceEntity {
  /**
   * <p>The source template for the source entity of the analysis.</p>
   * @public
   */
  SourceTemplate?: AnalysisSourceTemplate;
}

/**
 * <p>The summary metadata that describes an analysis.</p>
 * @public
 */
export interface AnalysisSummary {
  /**
   * <p>The Amazon Resource Name (ARN) for the analysis.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID of the analysis. This ID displays in the URL.</p>
   * @public
   */
  AnalysisId?: string;

  /**
   * <p>The name of the analysis. This name is displayed in the Amazon QuickSight console.
   *             </p>
   * @public
   */
  Name?: string;

  /**
   * <p>The last known status for the analysis.</p>
   * @public
   */
  Status?: ResourceStatus;

  /**
   * <p>The time that the analysis was created.</p>
   * @public
   */
  CreatedTime?: Date;

  /**
   * <p>The time that the analysis was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date;
}

/**
 * <p>Information about the dashboard that you want to embed.</p>
 * @public
 */
export interface AnonymousUserDashboardEmbeddingConfiguration {
  /**
   * <p>The dashboard ID for the dashboard that you want the user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this dashboard.</p>
   *          <p>The Amazon Resource Name (ARN) of this dashboard must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with <code>InvalidParameterValueException</code>.</p>
   * @public
   */
  InitialDashboardId: string | undefined;
}

/**
 * <p>A structure that contains the following elements:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>DashboardId</code> of the dashboard that has the visual that you want to embed.</p>
 *             </li>
 *             <li>
 *                <p>The <code>SheetId</code> of the sheet that has the visual that you want to embed.</p>
 *             </li>
 *             <li>
 *                <p>The <code>VisualId</code> of the visual that you want to embed.</p>
 *             </li>
 *          </ul>
 *          <p>The <code>DashboardId</code>, <code>SheetId</code>, and <code>VisualId</code> can be found in the <code>IDs for developers</code> section of the <code>Embed visual</code> pane of the visual's on-visual menu of the Amazon QuickSight console. You can also get the <code>DashboardId</code> with a <code>ListDashboards</code> API operation.</p>
 * @public
 */
export interface DashboardVisualId {
  /**
   * <p>The ID of the dashboard that has the visual that you want to embed. The <code>DashboardId</code> can be found in the <code>IDs for developers</code> section of the <code>Embed visual</code> pane of the visual's on-visual menu of the Amazon QuickSight console. You can also get the <code>DashboardId</code> with a <code>ListDashboards</code> API operation.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The ID of the sheet that the has visual that you want to embed. The <code>SheetId</code> can be found in the <code>IDs for developers</code> section of the <code>Embed visual</code> pane of the visual's on-visual menu of the Amazon QuickSight console.</p>
   * @public
   */
  SheetId: string | undefined;

  /**
   * <p>The ID of the visual that you want to embed. The <code>VisualID</code> can be found in the <code>IDs for developers</code> section of the <code>Embed visual</code> pane of the visual's on-visual menu of the Amazon QuickSight console.</p>
   * @public
   */
  VisualId: string | undefined;
}

/**
 * <p>The experience that you are embedding. You can use this object to generate a url that embeds a visual into your application.</p>
 * @public
 */
export interface AnonymousUserDashboardVisualEmbeddingConfiguration {
  /**
   * <p>The visual ID for the visual that you want the user to see. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this visual.</p>
   *          <p>The Amazon Resource Name (ARN) of the dashboard that the visual belongs to must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with <code>InvalidParameterValueException</code>.</p>
   * @public
   */
  InitialDashboardVisualId: DashboardVisualId | undefined;
}

/**
 * <p>The settings that you want to use with the Q search bar.</p>
 * @public
 */
export interface AnonymousUserQSearchBarEmbeddingConfiguration {
  /**
   * <p>The QuickSight Q topic ID of the topic that you want the anonymous user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders the Q search bar with this topic pre-selected.</p>
   *          <p>The Amazon Resource Name (ARN) of this Q topic must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with <code>InvalidParameterValueException</code>.</p>
   * @public
   */
  InitialTopicId: string | undefined;
}

/**
 * <p>The type of experience you want to embed. For anonymous users, you can embed Amazon QuickSight dashboards.</p>
 * @public
 */
export interface AnonymousUserEmbeddingExperienceConfiguration {
  /**
   * <p>The type of embedding experience. In this case, Amazon QuickSight dashboards.</p>
   * @public
   */
  Dashboard?: AnonymousUserDashboardEmbeddingConfiguration;

  /**
   * <p>The type of embedding experience. In this case, Amazon QuickSight visuals.</p>
   * @public
   */
  DashboardVisual?: AnonymousUserDashboardVisualEmbeddingConfiguration;

  /**
   * <p>The Q search bar that you want to use for anonymous user embedding.</p>
   * @public
   */
  QSearchBar?: AnonymousUserQSearchBarEmbeddingConfiguration;
}

/**
 * @public
 * @enum
 */
export const SnapshotFileFormatType = {
  CSV: "CSV",
  EXCEL: "EXCEL",
  PDF: "PDF",
} as const;

/**
 * @public
 */
export type SnapshotFileFormatType = (typeof SnapshotFileFormatType)[keyof typeof SnapshotFileFormatType];

/**
 * @public
 * @enum
 */
export const SnapshotFileSheetSelectionScope = {
  ALL_VISUALS: "ALL_VISUALS",
  SELECTED_VISUALS: "SELECTED_VISUALS",
} as const;

/**
 * @public
 */
export type SnapshotFileSheetSelectionScope =
  (typeof SnapshotFileSheetSelectionScope)[keyof typeof SnapshotFileSheetSelectionScope];

/**
 * <p>A structure that contains information that identifies the snapshot that needs to be generated.</p>
 * @public
 */
export interface SnapshotFileSheetSelection {
  /**
   * <p>The sheet ID of the dashboard to generate the snapshot artifact from. This value is required for CSV, Excel, and PDF format types.</p>
   * @public
   */
  SheetId: string | undefined;

  /**
   * <p>The selection scope of the visuals on a sheet of a dashboard that you are generating a snapthot of. You can choose one of the following options.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_VISUALS</code> - Selects all visuals that are on the sheet. This value is required if the snapshot is a PDF.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SELECTED_VISUALS</code> - Select the visual that you want to add to the snapshot. This value is required if the snapshot is a CSV or Excel workbook.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SelectionScope: SnapshotFileSheetSelectionScope | undefined;

  /**
   * <p>
   *             A structure that lists the IDs of the visuals in the selected sheet. Supported visual types are table, pivot table visuals. This value is required if you are generating a CSV or Excel workbook. This value supports a maximum of 1 visual ID for CSV and 5 visual IDs across up to 5 sheet selections for Excel. If you are generating an Excel workbook, the order of the visual IDs provided in this structure determines the order of the worksheets in the Excel file.
   *         </p>
   * @public
   */
  VisualIds?: string[];
}

/**
 * <p>A structure that contains the information for the snapshot that you want to generate. This information is provided by you when you start a new snapshot job.</p>
 * @public
 */
export interface SnapshotFile {
  /**
   * <p>A list of <code>SnapshotFileSheetSelection</code> objects that contain information on the dashboard sheet that is exported. These objects provide information about the snapshot artifacts that are generated during the job. This structure can hold a maximum of 5 CSV configurations, 5 Excel configurations, or 1 configuration for PDF.</p>
   * @public
   */
  SheetSelections: SnapshotFileSheetSelection[] | undefined;

  /**
   * <p>The format of the snapshot file to be generated. You can choose between <code>CSV</code>, <code>Excel</code>, or <code>PDF</code>.</p>
   * @public
   */
  FormatType: SnapshotFileFormatType | undefined;
}

/**
 * <p>Information on the error that caused the snapshot job to fail.</p>
 * @public
 */
export interface SnapshotJobResultErrorInfo {
  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string;

  /**
   * <p>The error type.</p>
   * @public
   */
  ErrorType?: string;
}

/**
 * <p>An optional structure that contains the Amazon S3 bucket configuration that the generated snapshots are stored in. If you don't provide this information, generated snapshots are stored in the default Amazon QuickSight bucket.</p>
 * @public
 */
export interface S3BucketConfiguration {
  /**
   * <p>The name of an existing Amazon S3 bucket where the generated snapshot artifacts are sent.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>The prefix of the Amazon S3 bucket that the generated snapshots are stored in.</p>
   * @public
   */
  BucketPrefix: string | undefined;

  /**
   * <p>The region that the Amazon S3 bucket is located in. The bucket must be located in the same region that the <code>StartDashboardSnapshotJob</code> API call is made.</p>
   * @public
   */
  BucketRegion: string | undefined;
}

/**
 * <p>A structure that describes the Amazon S3 settings to use to save the generated dashboard snapshot.</p>
 * @public
 */
export interface SnapshotS3DestinationConfiguration {
  /**
   * <p>A structure that contains details about the Amazon S3 bucket that the generated dashboard snapshot is saved in.</p>
   * @public
   */
  BucketConfiguration: S3BucketConfiguration | undefined;
}

/**
 * <p>The Amazon S3 result from the snapshot job. The result includes the <code>DestinationConfiguration</code> and the Amazon S3 Uri. If an error occured during the job, the result returns information on the error.</p>
 * @public
 */
export interface SnapshotJobS3Result {
  /**
   * <p>A list of Amazon S3 bucket configurations that are provided when you make a <code>StartDashboardSnapshotJob</code> API call.
   *         </p>
   * @public
   */
  S3DestinationConfiguration?: SnapshotS3DestinationConfiguration;

  /**
   * <p>The Amazon S3 Uri.</p>
   * @public
   */
  S3Uri?: string;

  /**
   * <p>An array of error records that describe any failures that occur while the dashboard snapshot job runs.</p>
   * @public
   */
  ErrorInfo?: SnapshotJobResultErrorInfo[];
}

/**
 * <p>A structure that contains information on the generated snapshot file groups.</p>
 * @public
 */
export interface SnapshotJobResultFileGroup {
  /**
   * <p> A list of <code>SnapshotFile</code> objects.</p>
   * @public
   */
  Files?: SnapshotFile[];

  /**
   * <p> A list of <code>SnapshotJobS3Result</code> objects.</p>
   * @public
   */
  S3Results?: SnapshotJobS3Result[];
}

/**
 * <p>A structure that contains the file groups that are requested for the artifact generation in a <code>StartDashboardSnapshotJob</code> API call.
 *         </p>
 * @public
 */
export interface AnonymousUserSnapshotJobResult {
  /**
   * <p>A list of <code>SnapshotJobResultFileGroup</code> objects that contain information on the files that are requested during a <code>StartDashboardSnapshotJob</code> API call. If the job succeeds, these objects contain the location where the snapshot artifacts are stored. If the job fails, the objects contain information about the error that caused the job to fail.</p>
   * @public
   */
  FileGroups?: SnapshotJobResultFileGroup[];
}

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobAnalysisPropertyToOverride = {
  NAME: "Name",
} as const;

/**
 * @public
 */
export type AssetBundleExportJobAnalysisPropertyToOverride =
  (typeof AssetBundleExportJobAnalysisPropertyToOverride)[keyof typeof AssetBundleExportJobAnalysisPropertyToOverride];

/**
 * <p>Controls how a specific <code>Analysis</code> resource is parameterized in the returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobAnalysisOverrideProperties {
  /**
   * <p>The ARN of the specific <code>Analysis</code> resource whose override properties are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>Analysis</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobAnalysisPropertyToOverride[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobDashboardPropertyToOverride = {
  NAME: "Name",
} as const;

/**
 * @public
 */
export type AssetBundleExportJobDashboardPropertyToOverride =
  (typeof AssetBundleExportJobDashboardPropertyToOverride)[keyof typeof AssetBundleExportJobDashboardPropertyToOverride];

/**
 * <p>Controls how a specific <code>Dashboard</code> resource is parameterized in the returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobDashboardOverrideProperties {
  /**
   * <p>The ARN of the specific <code>Dashboard</code> resource whose override properties are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>Dashboard</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobDashboardPropertyToOverride[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobDataSetPropertyToOverride = {
  NAME: "Name",
} as const;

/**
 * @public
 */
export type AssetBundleExportJobDataSetPropertyToOverride =
  (typeof AssetBundleExportJobDataSetPropertyToOverride)[keyof typeof AssetBundleExportJobDataSetPropertyToOverride];

/**
 * <p>Controls how a specific <code>DataSet</code> resource is parameterized in the returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobDataSetOverrideProperties {
  /**
   * <p>The ARN of the specific <code>DataSet</code> resource whose override properties are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>DataSet</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobDataSetPropertyToOverride[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobDataSourcePropertyToOverride = {
  CATALOG: "Catalog",
  CLUSTER_ID: "ClusterId",
  DATABASE: "Database",
  DATA_SET_NAME: "DataSetName",
  DISABLE_SSL: "DisableSsl",
  DOMAIN: "Domain",
  HOST: "Host",
  INSTANCE_ID: "InstanceId",
  MANIFEST_FILE_LOCATION: "ManifestFileLocation",
  NAME: "Name",
  PASSWORD: "Password",
  PORT: "Port",
  ROLE_ARN: "RoleArn",
  SECRET_ARN: "SecretArn",
  USERNAME: "Username",
  WAREHOUSE: "Warehouse",
  WORK_GROUP: "WorkGroup",
} as const;

/**
 * @public
 */
export type AssetBundleExportJobDataSourcePropertyToOverride =
  (typeof AssetBundleExportJobDataSourcePropertyToOverride)[keyof typeof AssetBundleExportJobDataSourcePropertyToOverride];

/**
 * <p>Controls how a specific <code>DataSource</code> resource is parameterized in the returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobDataSourceOverrideProperties {
  /**
   * <p>The ARN of the specific <code>DataSource</code> resource whose override properties are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>DataSource</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobDataSourcePropertyToOverride[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobRefreshSchedulePropertyToOverride = {
  START_AFTER_DATE_TIME: "StartAfterDateTime",
} as const;

/**
 * @public
 */
export type AssetBundleExportJobRefreshSchedulePropertyToOverride =
  (typeof AssetBundleExportJobRefreshSchedulePropertyToOverride)[keyof typeof AssetBundleExportJobRefreshSchedulePropertyToOverride];

/**
 * <p>Controls how a specific <code>RefreshSchedule</code> resource is parameterized in the returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobRefreshScheduleOverrideProperties {
  /**
   * <p>The ARN of the specific <code>RefreshSchedule</code> resource whose override properties are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>RefreshSchedule</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobRefreshSchedulePropertyToOverride[] | undefined;
}

/**
 * <p>An optional structure that configures resource ID overrides for the export job.</p>
 * @public
 */
export interface AssetBundleExportJobResourceIdOverrideConfiguration {
  /**
   * <p>An option to request a CloudFormation variable for a prefix to be prepended to each resource's ID before import. The prefix is only added to the asset IDs and does not change the name of the asset.</p>
   * @public
   */
  PrefixForAllResources?: boolean;
}

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobThemePropertyToOverride = {
  NAME: "Name",
} as const;

/**
 * @public
 */
export type AssetBundleExportJobThemePropertyToOverride =
  (typeof AssetBundleExportJobThemePropertyToOverride)[keyof typeof AssetBundleExportJobThemePropertyToOverride];

/**
 * <p>Controls how a specific <code>Theme</code> resource is parameterized in the returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobThemeOverrideProperties {
  /**
   * <p>The ARN of the specific <code>Theme</code> resource whose override properties are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>Theme</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobThemePropertyToOverride[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobVPCConnectionPropertyToOverride = {
  DNS_RESOLVERS: "DnsResolvers",
  NAME: "Name",
  ROLE_ARN: "RoleArn",
} as const;

/**
 * @public
 */
export type AssetBundleExportJobVPCConnectionPropertyToOverride =
  (typeof AssetBundleExportJobVPCConnectionPropertyToOverride)[keyof typeof AssetBundleExportJobVPCConnectionPropertyToOverride];

/**
 * <p>Controls how a specific <code>VPCConnection</code> resource is parameterized in the outputted CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobVPCConnectionOverrideProperties {
  /**
   * <p>The ARN of the specific <code>VPCConnection</code> resource whose override properties are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>VPCConnection</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobVPCConnectionPropertyToOverride[] | undefined;
}

/**
 * <p>An optional collection of CloudFormation property configurations that control how the export job is generated.</p>
 * @public
 */
export interface AssetBundleCloudFormationOverridePropertyConfiguration {
  /**
   * <p>An optional list of structures that control how resource IDs are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  ResourceIdOverrideConfiguration?: AssetBundleExportJobResourceIdOverrideConfiguration;

  /**
   * <p>An optional list of structures that control how <code>VPCConnection</code> resources are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  VPCConnections?: AssetBundleExportJobVPCConnectionOverrideProperties[];

  /**
   * <p>An optional list of structures that control how <code>RefreshSchedule</code> resources are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  RefreshSchedules?: AssetBundleExportJobRefreshScheduleOverrideProperties[];

  /**
   * <p>An optional list of structures that control how <code>DataSource</code> resources are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  DataSources?: AssetBundleExportJobDataSourceOverrideProperties[];

  /**
   * <p>An optional list of structures that control how <code>DataSet</code> resources are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  DataSets?: AssetBundleExportJobDataSetOverrideProperties[];

  /**
   * <p>An optional list of structures that control how <code>Theme</code> resources are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  Themes?: AssetBundleExportJobThemeOverrideProperties[];

  /**
   * <p>An optional list of structures that control how <code>Analysis</code> resources are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  Analyses?: AssetBundleExportJobAnalysisOverrideProperties[];

  /**
   * <p>An optional list of structures that control how <code>Dashboard</code> resources are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  Dashboards?: AssetBundleExportJobDashboardOverrideProperties[];
}

/**
 * @public
 * @enum
 */
export const AssetBundleExportFormat = {
  CLOUDFORMATION_JSON: "CLOUDFORMATION_JSON",
  QUICKSIGHT_JSON: "QUICKSIGHT_JSON",
} as const;

/**
 * @public
 */
export type AssetBundleExportFormat = (typeof AssetBundleExportFormat)[keyof typeof AssetBundleExportFormat];

/**
 * <p>Describes an error that occurred during an Asset Bundle export job.</p>
 * @public
 */
export interface AssetBundleExportJobError {
  /**
   * <p>The ARN of the resource whose processing caused an error.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The specific error type of the error that occurred.</p>
   * @public
   */
  Type?: string;

  /**
   * <p>A description of the error.</p>
   * @public
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED_FOR_IMMEDIATE_EXECUTION: "QUEUED_FOR_IMMEDIATE_EXECUTION",
  SUCCESSFUL: "SUCCESSFUL",
} as const;

/**
 * @public
 */
export type AssetBundleExportJobStatus = (typeof AssetBundleExportJobStatus)[keyof typeof AssetBundleExportJobStatus];

/**
 * <p>A summary of the export job that includes details of the job's configuration and its current status.</p>
 * @public
 */
export interface AssetBundleExportJobSummary {
  /**
   * <p>The current status of the export job.</p>
   * @public
   */
  JobStatus?: AssetBundleExportJobStatus;

  /**
   * <p>The ARN of the export job.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The time that the export job was created.</p>
   * @public
   */
  CreatedTime?: Date;

  /**
   * <p>The ID of the export job.</p>
   * @public
   */
  AssetBundleExportJobId?: string;

  /**
   * <p>The flag that determines the inclusion of resource dependencies in the returned asset bundle.</p>
   * @public
   */
  IncludeAllDependencies?: boolean;

  /**
   * <p>The format for the export job.</p>
   * @public
   */
  ExportFormat?: AssetBundleExportFormat;

  /**
   * <p>The flag that determines the inclusion of permissions associated with each resource ARN.</p>
   * @public
   */
  IncludePermissions?: boolean;

  /**
   * <p>The flag that determines the inclusion of tags associated with each resource ARN.</p>
   * @public
   */
  IncludeTags?: boolean;
}

/**
 * <p>The option to relax the validation that is required to export each asset. When <code>StrictModeForAllResource</code> is set to true, validation is skipped for specific UI errors.</p>
 * @public
 */
export interface AssetBundleExportJobValidationStrategy {
  /**
   * <p>A Boolean value that indicates whether to export resources under strict or lenient mode.</p>
   * @public
   */
  StrictModeForAllResources?: boolean;
}

/**
 * <p>Describes a warning that occurred during an Asset Bundle export job.</p>
 * @public
 */
export interface AssetBundleExportJobWarning {
  /**
   * <p>The ARN of the resource whose processing caused a warning.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>A description of the warning.</p>
   * @public
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const AssetBundleImportFailureAction = {
  DO_NOTHING: "DO_NOTHING",
  ROLLBACK: "ROLLBACK",
} as const;

/**
 * @public
 */
export type AssetBundleImportFailureAction =
  (typeof AssetBundleImportFailureAction)[keyof typeof AssetBundleImportFailureAction];

/**
 * <p>The override parameters for a single analysis that is being imported.</p>
 * @public
 */
export interface AssetBundleImportJobAnalysisOverrideParameters {
  /**
   * <p>The ID of the analysis that you ant to apply overrides to.</p>
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * <p>A new name for the analysis.</p>
   * @public
   */
  Name?: string;
}

/**
 * <p>A structure that contains the permissions for the resource that you want to override in an asset bundle import job.</p>
 * @public
 */
export interface AssetBundleResourcePermissions {
  /**
   * <p>A list of principals to grant permissions on.</p>
   * @public
   */
  Principals: string[] | undefined;

  /**
   * <p>A list of IAM actions to grant permissions on.</p>
   * @public
   */
  Actions: string[] | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of analysis IDs.</p>
 * @public
 */
export interface AssetBundleImportJobAnalysisOverridePermissions {
  /**
   * <p>A list of analysis IDs that you want to apply overrides to. You can use <code>*</code> to override all analyses in this asset bundle.</p>
   * @public
   */
  AnalysisIds: string[] | undefined;

  /**
   * <p>A list of permissions for the analyses that you want to apply overrides to.</p>
   * @public
   */
  Permissions: AssetBundleResourcePermissions | undefined;
}

/**
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
 *             resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>Tag key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Tag value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of analysis IDs.</p>
 * @public
 */
export interface AssetBundleImportJobAnalysisOverrideTags {
  /**
   * <p>A list of analysis IDs that you want to apply overrides to. You can use <code>*</code> to override all analyses in this asset bundle.</p>
   * @public
   */
  AnalysisIds: string[] | undefined;

  /**
   * <p>A list of tags for the analyses that you want to apply overrides to.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>The override parameters for a single dashboard that is being imported.</p>
 * @public
 */
export interface AssetBundleImportJobDashboardOverrideParameters {
  /**
   * <p>The ID of the dashboard that you want to apply overrides to.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>A new name for the dashboard.</p>
   * @public
   */
  Name?: string;
}

/**
 * <p>A structure that contains the configuration of a shared link to an Amazon QuickSight dashboard.</p>
 * @public
 */
export interface AssetBundleResourceLinkSharingConfiguration {
  /**
   * <p>A list of link sharing permissions for the dashboards that you want to apply overrides to.</p>
   * @public
   */
  Permissions?: AssetBundleResourcePermissions;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of dashboard IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDashboardOverridePermissions {
  /**
   * <p>A list of dashboard IDs that you want to apply overrides to. You can use <code>*</code> to override all dashboards in this asset bundle.</p>
   * @public
   */
  DashboardIds: string[] | undefined;

  /**
   * <p>A list of permissions for the dashboards that you want to apply overrides to.</p>
   * @public
   */
  Permissions?: AssetBundleResourcePermissions;

  /**
   * <p>A structure that contains the link sharing configurations that you want to apply overrides to.</p>
   * @public
   */
  LinkSharingConfiguration?: AssetBundleResourceLinkSharingConfiguration;
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of dashboard IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDashboardOverrideTags {
  /**
   * <p>A list of dashboard IDs that you want to apply overrides to. You can use <code>*</code> to override all dashboards in this asset bundle.</p>
   * @public
   */
  DashboardIds: string[] | undefined;

  /**
   * <p>A list of tags for the dashboards that you want to apply overrides to.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>The override parameters for a single dataset that is being imported.</p>
 * @public
 */
export interface AssetBundleImportJobDataSetOverrideParameters {
  /**
   * <p>The ID of the dataset to apply overrides to.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>A new name for the dataset.</p>
   * @public
   */
  Name?: string;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of dataset IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDataSetOverridePermissions {
  /**
   * <p>A list of dataset IDs that you want to apply overrides to. You can use <code>*</code> to override all datasets in this asset bundle.</p>
   * @public
   */
  DataSetIds: string[] | undefined;

  /**
   * <p>A list of permissions for the datasets that you want to apply overrides to.</p>
   * @public
   */
  Permissions: AssetBundleResourcePermissions | undefined;
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of dataset IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDataSetOverrideTags {
  /**
   * <p>A list of dataset IDs that you want to apply overrides to. You can use <code>*</code> to override all datasets in this asset bundle.</p>
   * @public
   */
  DataSetIds: string[] | undefined;

  /**
   * <p>A list of tags for the datasets that you want to apply overrides to.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>A username and password credential pair to use to import a data source resource.</p>
 * @public
 */
export interface AssetBundleImportJobDataSourceCredentialPair {
  /**
   * <p>The username for the data source connection.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The password for the data source connection.</p>
   * @public
   */
  Password: string | undefined;
}

/**
 * <p>The login credentials to use to import a data source resource.</p>
 * @public
 */
export interface AssetBundleImportJobDataSourceCredentials {
  /**
   * <p>A username and password credential pair to be used to create the imported data source. Keep this field blank if you are using a Secrets Manager secret to provide credentials.</p>
   * @public
   */
  CredentialPair?: AssetBundleImportJobDataSourceCredentialPair;

  /**
   * <p>The ARN of the Secrets Manager secret that's used to create the imported data source. Keep this field blank, unless you are using a secret in place of a credential pair.</p>
   * @public
   */
  SecretArn?: string;
}

/**
 * <p>Parameters for Amazon Athena.</p>
 * @public
 */
export interface AthenaParameters {
  /**
   * <p>The workgroup that Amazon Athena uses.</p>
   * @public
   */
  WorkGroup?: string;

  /**
   * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.</p>
   * @public
   */
  RoleArn?: string;
}

/**
 * <p>Parameters for Amazon Aurora.</p>
 * @public
 */
export interface AuroraParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * <p>Parameters for Amazon Aurora PostgreSQL-Compatible Edition.</p>
 * @public
 */
export interface AuroraPostgreSqlParameters {
  /**
   * <p>The Amazon Aurora PostgreSQL-Compatible host to connect to.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The port that Amazon Aurora PostgreSQL is listening on.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The Amazon Aurora PostgreSQL database to connect to.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * <p>The parameters for IoT Analytics.</p>
 * @public
 */
export interface AwsIotAnalyticsParameters {
  /**
   * <p>Dataset name.</p>
   * @public
   */
  DataSetName: string | undefined;
}

/**
 * <p>The parameters that are required to connect to a Google BigQuery data source.</p>
 * @public
 */
export interface BigQueryParameters {
  /**
   * <p>The Google Cloud Platform project ID where your datasource was created.</p>
   * @public
   */
  ProjectId: string | undefined;

  /**
   * <p>The storage location where you create a Google BigQuery data source.</p>
   * @public
   */
  DataSetRegion?: string;
}

/**
 * <p>The parameters that are required to connect to a Databricks data source.</p>
 * @public
 */
export interface DatabricksParameters {
  /**
   * <p>The host name of the Databricks data source.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The port for the Databricks data source.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The HTTP path of the Databricks data source.</p>
   * @public
   */
  SqlEndpointPath: string | undefined;
}

/**
 * <p>The required parameters for connecting to an Exasol data source.</p>
 * @public
 */
export interface ExasolParameters {
  /**
   * <p>The hostname or IP address of the Exasol data source.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The port for the Exasol data source.</p>
   * @public
   */
  Port: number | undefined;
}

/**
 * <p>The parameters for Jira.</p>
 * @public
 */
export interface JiraParameters {
  /**
   * <p>The base URL of the Jira site.</p>
   * @public
   */
  SiteBaseUrl: string | undefined;
}

/**
 * <p>The parameters for MariaDB.</p>
 * @public
 */
export interface MariaDbParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * <p>The parameters for MySQL.</p>
 * @public
 */
export interface MySqlParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * <p>The parameters for Oracle.</p>
 * @public
 */
export interface OracleParameters {
  /**
   * <p>An Oracle host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The database.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * <p>The parameters for PostgreSQL.</p>
 * @public
 */
export interface PostgreSqlParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * <p>The parameters for Presto.</p>
 * @public
 */
export interface PrestoParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>Catalog.</p>
   * @public
   */
  Catalog: string | undefined;
}

/**
 * <p>The parameters for Amazon RDS.</p>
 * @public
 */
export interface RdsParameters {
  /**
   * <p>Instance ID.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * <p>A structure that grants Amazon QuickSight access to your cluster and make a call to the <code>redshift:GetClusterCredentials</code> API. For more information on the <code>redshift:GetClusterCredentials</code> API, see <a href="https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html">
 *                <code>GetClusterCredentials</code>
 *             </a>.</p>
 * @public
 */
export interface RedshiftIAMParameters {
  /**
   * <p>Use the <code>RoleArn</code> structure to allow Amazon QuickSight to call <code>redshift:GetClusterCredentials</code> on your cluster. The calling principal must have <code>iam:PassRole</code> access to pass the role to Amazon QuickSight. The role's trust policy must allow the Amazon QuickSight service principal to assume the role.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The user whose permissions and group memberships will be used by Amazon QuickSight to access the cluster. If this user already exists in your database, Amazon QuickSight is granted the same permissions that the user has. If the user doesn't exist, set the value of <code>AutoCreateDatabaseUser</code> to <code>True</code> to create a new user with PUBLIC permissions.</p>
   * @public
   */
  DatabaseUser: string | undefined;

  /**
   * <p>A list of groups whose permissions will be granted to Amazon QuickSight to access the cluster. These permissions are combined with the permissions granted to Amazon QuickSight by the <code>DatabaseUser</code>. If you choose to include this parameter, the <code>RoleArn</code> must grant access to <code>redshift:JoinGroup</code>.</p>
   * @public
   */
  DatabaseGroups?: string[];

  /**
   * <p>Automatically creates a database user. If your database doesn't have a <code>DatabaseUser</code>, set this parameter to <code>True</code>. If there is no <code>DatabaseUser</code>, Amazon QuickSight can't connect to your cluster. The <code>RoleArn</code> that you use for this operation must grant access to <code>redshift:CreateClusterUser</code> to successfully create the user.</p>
   * @public
   */
  AutoCreateDatabaseUser?: boolean;
}

/**
 * <p>The parameters for an IAM Identity Center configuration.</p>
 * @public
 */
export interface IdentityCenterConfiguration {
  /**
   * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
   * @public
   */
  EnableIdentityPropagation?: boolean;
}

/**
 * <p>The parameters for Amazon Redshift. The <code>ClusterId</code> field can be blank if
 *             <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
 * @public
 */
export interface RedshiftParameters {
  /**
   * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
   * @public
   */
  Host?: string;

  /**
   * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
   * @public
   */
  Port?: number;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
   *             provided.</p>
   * @public
   */
  ClusterId?: string;

  /**
   * <p>An optional parameter that uses IAM authentication to grant Amazon QuickSight access to your cluster. This parameter can be used instead of <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DataSourceCredentials.html">DataSourceCredentials</a>.</p>
   * @public
   */
  IAMParameters?: RedshiftIAMParameters;

  /**
   * <p>An optional parameter that configures IAM Identity Center authentication to grant Amazon QuickSight access to your cluster.</p>
   *          <p>This parameter can only be specified if your Amazon QuickSight account is configured with IAM Identity Center.</p>
   * @public
   */
  IdentityCenterConfiguration?: IdentityCenterConfiguration;
}

/**
 * <p>Amazon S3 manifest file location.</p>
 * @public
 */
export interface ManifestFileLocation {
  /**
   * <p>Amazon S3 bucket.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Amazon S3 key that identifies an object.</p>
   * @public
   */
  Key: string | undefined;
}

/**
 * <p>The parameters for S3.</p>
 * @public
 */
export interface S3Parameters {
  /**
   * <p>Location of the Amazon S3 manifest file. This is NULL if the manifest file was
   *             uploaded into Amazon QuickSight.</p>
   * @public
   */
  ManifestFileLocation: ManifestFileLocation | undefined;

  /**
   * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific S3 data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow S3 access for the single S3 data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>
   * @public
   */
  RoleArn?: string;
}

/**
 * <p>The parameters for ServiceNow.</p>
 * @public
 */
export interface ServiceNowParameters {
  /**
   * <p>URL of the base site.</p>
   * @public
   */
  SiteBaseUrl: string | undefined;
}

/**
 * <p>The parameters for Snowflake.</p>
 * @public
 */
export interface SnowflakeParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>Warehouse.</p>
   * @public
   */
  Warehouse: string | undefined;
}

/**
 * <p>The parameters for Spark.</p>
 * @public
 */
export interface SparkParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;
}

/**
 * <p>The parameters for SQL Server.</p>
 * @public
 */
export interface SqlServerParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StarburstProductType = {
  ENTERPRISE: "ENTERPRISE",
  GALAXY: "GALAXY",
} as const;

/**
 * @public
 */
export type StarburstProductType = (typeof StarburstProductType)[keyof typeof StarburstProductType];

/**
 * <p>The parameters that are required to connect to a Starburst data source.</p>
 * @public
 */
export interface StarburstParameters {
  /**
   * <p>The host name of the Starburst data source.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The port for the Starburst data source.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The catalog name for the Starburst data source.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The product type for the Starburst data source.</p>
   * @public
   */
  ProductType?: StarburstProductType;
}

/**
 * <p>The parameters for Teradata.</p>
 * @public
 */
export interface TeradataParameters {
  /**
   * <p>Host.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   * @public
   */
  Database: string | undefined;
}

/**
 * <p>The parameters that are required to connect to a Trino data source.</p>
 * @public
 */
export interface TrinoParameters {
  /**
   * <p>The host name of the Trino data source.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The port for the Trino data source.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The catalog name for the Trino data source.</p>
   * @public
   */
  Catalog: string | undefined;
}

/**
 * <p>The parameters for Twitter.</p>
 * @public
 */
export interface TwitterParameters {
  /**
   * <p>Twitter query string.</p>
   * @public
   */
  Query: string | undefined;

  /**
   * <p>Maximum number of rows to query Twitter.</p>
   * @public
   */
  MaxRows: number | undefined;
}

/**
 * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source.
 *             This is a variant type structure. For this structure to be valid, only one of the
 *             attributes can be non-null.</p>
 * @public
 */
export type DataSourceParameters =
  | DataSourceParameters.AmazonElasticsearchParametersMember
  | DataSourceParameters.AmazonOpenSearchParametersMember
  | DataSourceParameters.AthenaParametersMember
  | DataSourceParameters.AuroraParametersMember
  | DataSourceParameters.AuroraPostgreSqlParametersMember
  | DataSourceParameters.AwsIotAnalyticsParametersMember
  | DataSourceParameters.BigQueryParametersMember
  | DataSourceParameters.DatabricksParametersMember
  | DataSourceParameters.ExasolParametersMember
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
  | DataSourceParameters.StarburstParametersMember
  | DataSourceParameters.TeradataParametersMember
  | DataSourceParameters.TrinoParametersMember
  | DataSourceParameters.TwitterParametersMember
  | DataSourceParameters.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceParameters {
  /**
   * <p>The parameters for OpenSearch.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon Athena.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon Aurora MySQL.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon Aurora.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for IoT Analytics.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Jira.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for MariaDB.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for MySQL.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Oracle.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for PostgreSQL.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Presto.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon RDS.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon Redshift.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for S3.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for ServiceNow.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Snowflake.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Spark.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for SQL Server.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Teradata.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Twitter.</p>
   * @public
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for OpenSearch.</p>
   * @public
   */
  export interface AmazonOpenSearchParametersMember {
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
    AmazonOpenSearchParameters: AmazonOpenSearchParameters;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Exasol.</p>
   * @public
   */
  export interface ExasolParametersMember {
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters: ExasolParameters;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters that are required to connect to a Databricks data source.</p>
   * @public
   */
  export interface DatabricksParametersMember {
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters: DatabricksParameters;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters that are required to connect to a Starburst data source.</p>
   * @public
   */
  export interface StarburstParametersMember {
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters: StarburstParameters;
    TrinoParameters?: never;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters that are required to connect to a Trino data source.</p>
   * @public
   */
  export interface TrinoParametersMember {
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters: TrinoParameters;
    BigQueryParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters that are required to connect to a Google BigQuery data source.</p>
   * @public
   */
  export interface BigQueryParametersMember {
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters: BigQueryParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
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
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    StarburstParameters?: never;
    TrinoParameters?: never;
    BigQueryParameters?: never;
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
    AmazonOpenSearchParameters: (value: AmazonOpenSearchParameters) => T;
    ExasolParameters: (value: ExasolParameters) => T;
    DatabricksParameters: (value: DatabricksParameters) => T;
    StarburstParameters: (value: StarburstParameters) => T;
    TrinoParameters: (value: TrinoParameters) => T;
    BigQueryParameters: (value: BigQueryParameters) => T;
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
    if (value.AmazonOpenSearchParameters !== undefined)
      return visitor.AmazonOpenSearchParameters(value.AmazonOpenSearchParameters);
    if (value.ExasolParameters !== undefined) return visitor.ExasolParameters(value.ExasolParameters);
    if (value.DatabricksParameters !== undefined) return visitor.DatabricksParameters(value.DatabricksParameters);
    if (value.StarburstParameters !== undefined) return visitor.StarburstParameters(value.StarburstParameters);
    if (value.TrinoParameters !== undefined) return visitor.TrinoParameters(value.TrinoParameters);
    if (value.BigQueryParameters !== undefined) return visitor.BigQueryParameters(value.BigQueryParameters);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
 *             underlying data source.</p>
 * @public
 */
export interface SslProperties {
  /**
   * <p>A Boolean option to control whether SSL should be disabled.</p>
   * @public
   */
  DisableSsl?: boolean;
}

/**
 * <p>VPC connection properties.</p>
 * @public
 */
export interface VpcConnectionProperties {
  /**
   * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
   * @public
   */
  VpcConnectionArn: string | undefined;
}

/**
 * <p>The override parameters for a single data source that is being imported.</p>
 * @public
 */
export interface AssetBundleImportJobDataSourceOverrideParameters {
  /**
   * <p>The ID of the data source to apply overrides to.</p>
   * @public
   */
  DataSourceId: string | undefined;

  /**
   * <p>A new name for the data source.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source.
   *             This is a variant type structure. For this structure to be valid, only one of the
   *             attributes can be non-null.</p>
   * @public
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * <p>VPC connection properties.</p>
   * @public
   */
  VpcConnectionProperties?: VpcConnectionProperties;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
   *             underlying data source.</p>
   * @public
   */
  SslProperties?: SslProperties;

  /**
   * <p>An optional structure that provides the credentials to be used to create the imported data source.</p>
   * @public
   */
  Credentials?: AssetBundleImportJobDataSourceCredentials;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of data source IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDataSourceOverridePermissions {
  /**
   * <p>A list of data source IDs that you want to apply overrides to. You can use <code>*</code> to override all data sources in this asset bundle.</p>
   * @public
   */
  DataSourceIds: string[] | undefined;

  /**
   * <p>A list of permissions for the data source that you want to apply overrides to.</p>
   * @public
   */
  Permissions: AssetBundleResourcePermissions | undefined;
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of data source IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDataSourceOverrideTags {
  /**
   * <p>A list of data source IDs that you want to apply overrides to. You can use <code>*</code> to override all data sources in this asset bundle.</p>
   * @public
   */
  DataSourceIds: string[] | undefined;

  /**
   * <p>A list of tags for the data source that you want to apply overrides to.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>Describes an error that occurred within an Asset Bundle import execution.</p>
 * @public
 */
export interface AssetBundleImportJobError {
  /**
   * <p>The ARN of the resource whose processing caused an error.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The specific error type or the error that occurred.</p>
   * @public
   */
  Type?: string;

  /**
   * <p>A description of the error.</p>
   * @public
   */
  Message?: string;
}

/**
 * <p>A list of overrides for a specific <code>RefreshsSchedule</code> resource that is present in the asset bundle that is imported.</p>
 * @public
 */
export interface AssetBundleImportJobRefreshScheduleOverrideParameters {
  /**
   * <p>A partial identifier for the specific <code>RefreshSchedule</code> resource that is being overridden. This structure is used together with the <code>ScheduleID</code> structure.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>A partial identifier for the specific <code>RefreshSchedule</code> resource being overridden. This structure is used together with the <code>DataSetId</code> structure.</p>
   * @public
   */
  ScheduleId: string | undefined;

  /**
   * <p>An override for the <code>StartAfterDateTime</code> of a <code>RefreshSchedule</code>. Make
   *          sure that the <code>StartAfterDateTime</code> is set to a time that takes
   *          place in the future.</p>
   * @public
   */
  StartAfterDateTime?: Date;
}

/**
 * <p>An optional structure that configures resource ID overrides for the import job.</p>
 * @public
 */
export interface AssetBundleImportJobResourceIdOverrideConfiguration {
  /**
   * <p>An option to request a CloudFormation variable for a prefix to be prepended to each resource's ID before import. The prefix is only added to the asset IDs and does not change the name of the asset.</p>
   * @public
   */
  PrefixForAllResources?: string;
}

/**
 * <p>The override parameters for a single theme that is imported.</p>
 * @public
 */
export interface AssetBundleImportJobThemeOverrideParameters {
  /**
   * <p>The ID of the theme to apply overrides to.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>A new name for the theme.</p>
   * @public
   */
  Name?: string;
}

/**
 * <p>The override parameters for a single VPC connection that is imported.</p>
 * @public
 */
export interface AssetBundleImportJobVPCConnectionOverrideParameters {
  /**
   * <p>The ID of the VPC Connection to apply overrides to.</p>
   * @public
   */
  VPCConnectionId: string | undefined;

  /**
   * <p>A new name for the VPC connection.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A list of new subnet IDs for the VPC connection you are importing. This field is
   *          required if you are importing the VPC connection from another Amazon Web Services account or Region.</p>
   * @public
   */
  SubnetIds?: string[];

  /**
   * <p>A new security group ID for the VPC connection you are importing. This field is required
   *          if you are importing the VPC connection from another Amazon Web Services account or Region.</p>
   * @public
   */
  SecurityGroupIds?: string[];

  /**
   * <p>An optional override of DNS resolvers to be used by the VPC connection.</p>
   * @public
   */
  DnsResolvers?: string[];

  /**
   * <p>An optional override of the role ARN to be used by the VPC connection.</p>
   * @public
   */
  RoleArn?: string;
}

/**
 * <p>A list of overrides that modify the asset bundle resource configuration before the resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverrideParameters {
  /**
   * <p>An optional structure that configures resource ID overrides to be applied within the import job.</p>
   * @public
   */
  ResourceIdOverrideConfiguration?: AssetBundleImportJobResourceIdOverrideConfiguration;

  /**
   * <p>A list of overrides for any <code>VPCConnection</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  VPCConnections?: AssetBundleImportJobVPCConnectionOverrideParameters[];

  /**
   * <p>A list of overrides for any <code>RefreshSchedule</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  RefreshSchedules?: AssetBundleImportJobRefreshScheduleOverrideParameters[];

  /**
   * <p> A list of overrides for any <code>DataSource</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  DataSources?: AssetBundleImportJobDataSourceOverrideParameters[];

  /**
   * <p>A list of overrides for any <code>DataSet</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  DataSets?: AssetBundleImportJobDataSetOverrideParameters[];

  /**
   * <p>A list of overrides for any <code>Theme</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Themes?: AssetBundleImportJobThemeOverrideParameters[];

  /**
   * <p>A list of overrides for any <code>Analysis</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Analyses?: AssetBundleImportJobAnalysisOverrideParameters[];

  /**
   * <p>A list of overrides for any <code>Dashboard</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Dashboards?: AssetBundleImportJobDashboardOverrideParameters[];
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of theme IDs.</p>
 * @public
 */
export interface AssetBundleImportJobThemeOverridePermissions {
  /**
   * <p>A list of theme IDs that you want to apply overrides to. You can use <code>*</code> to override all themes in this asset bundle.</p>
   * @public
   */
  ThemeIds: string[] | undefined;

  /**
   * <p>A list of permissions for the themes that you want to apply overrides to.</p>
   * @public
   */
  Permissions: AssetBundleResourcePermissions | undefined;
}

/**
 * <p>A structure that contains the override permission configurations that modify the permissions for specified resources before the resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverridePermissions {
  /**
   * <p>A list of permissions overrides for any <code>DataSource</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  DataSources?: AssetBundleImportJobDataSourceOverridePermissions[];

  /**
   * <p>A list of permissions overrides for any <code>DataSet</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  DataSets?: AssetBundleImportJobDataSetOverridePermissions[];

  /**
   * <p>A list of permissions overrides for any <code>Theme</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Themes?: AssetBundleImportJobThemeOverridePermissions[];

  /**
   * <p>A list of permissions overrides for any <code>Analysis</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Analyses?: AssetBundleImportJobAnalysisOverridePermissions[];

  /**
   * <p>A list of permissions overrides for any <code>Dashboard</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Dashboards?: AssetBundleImportJobDashboardOverridePermissions[];
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of theme IDs.</p>
 * @public
 */
export interface AssetBundleImportJobThemeOverrideTags {
  /**
   * <p>A list of theme IDs that you want to apply overrides to. You can use <code>*</code> to override all themes in this asset bundle.</p>
   * @public
   */
  ThemeIds: string[] | undefined;

  /**
   * <p>A list of tags for the themes that you want to apply overrides to.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of VPC connection IDs.</p>
 * @public
 */
export interface AssetBundleImportJobVPCConnectionOverrideTags {
  /**
   * <p>A list of VPC connection IDs that you want to apply overrides to. You can use <code>*</code> to override all VPC connections in this asset bundle.</p>
   * @public
   */
  VPCConnectionIds: string[] | undefined;

  /**
   * <p>A list of tags for the VPC connections that you want to apply overrides to.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>A structure that contains the override tag configuration that modify the tags that are assigned to specified resources before the resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverrideTags {
  /**
   * <p>A list of tag overrides for any <code>VPCConnection</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  VPCConnections?: AssetBundleImportJobVPCConnectionOverrideTags[];

  /**
   * <p>A list of tag overrides for any <code>DataSource</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  DataSources?: AssetBundleImportJobDataSourceOverrideTags[];

  /**
   * <p>A list of tag overrides for any <code>DataSet</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  DataSets?: AssetBundleImportJobDataSetOverrideTags[];

  /**
   * <p>A list of tag overrides for any <code>Theme</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Themes?: AssetBundleImportJobThemeOverrideTags[];

  /**
   * <p>A list of tag overrides for any <code>Analysis</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Analyses?: AssetBundleImportJobAnalysisOverrideTags[];

  /**
   * <p>A list of tag overrides for any <code>Dashboard</code> resources that are present in the asset bundle that is imported.</p>
   * @public
   */
  Dashboards?: AssetBundleImportJobDashboardOverrideTags[];
}

/**
 * <p>An optional parameter that overrides the validation strategy for all analyses and dashboards before the resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverrideValidationStrategy {
  /**
   * <p>A Boolean value that indicates whether to import all analyses and dashboards under strict or lenient mode.</p>
   * @public
   */
  StrictModeForAllResources?: boolean;
}

/**
 * @public
 * @enum
 */
export const AssetBundleImportJobStatus = {
  FAILED: "FAILED",
  FAILED_ROLLBACK_COMPLETED: "FAILED_ROLLBACK_COMPLETED",
  FAILED_ROLLBACK_ERROR: "FAILED_ROLLBACK_ERROR",
  FAILED_ROLLBACK_IN_PROGRESS: "FAILED_ROLLBACK_IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED_FOR_IMMEDIATE_EXECUTION: "QUEUED_FOR_IMMEDIATE_EXECUTION",
  SUCCESSFUL: "SUCCESSFUL",
} as const;

/**
 * @public
 */
export type AssetBundleImportJobStatus = (typeof AssetBundleImportJobStatus)[keyof typeof AssetBundleImportJobStatus];

/**
 * <p>A summary of the import job that includes details of the requested job's configuration and its current status.</p>
 * @public
 */
export interface AssetBundleImportJobSummary {
  /**
   * <p>The current status of the import job.</p>
   * @public
   */
  JobStatus?: AssetBundleImportJobStatus;

  /**
   * <p>The ARN of the import job.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The time that the import job was created.</p>
   * @public
   */
  CreatedTime?: Date;

  /**
   * <p>The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.</p>
   * @public
   */
  AssetBundleImportJobId?: string;

  /**
   * <p>The failure action for the import job.</p>
   * @public
   */
  FailureAction?: AssetBundleImportFailureAction;
}

/**
 * <p>The source of the asset bundle zip file that contains the data that you want to import. The file must be in <code>QUICKSIGHT_JSON</code> format.</p>
 * @public
 */
export interface AssetBundleImportSource {
  /**
   * <p>The bytes of the base64 encoded asset bundle import zip file. This file can't exceed 20 MB.</p>
   *          <p>If you are calling the API operations from the Amazon Web Services SDK for Java, JavaScript, Python, or
   *          PHP, the SDK encodes base64 automatically to allow the direct setting of the zip file's bytes. If you are using
   *          an SDK for a different language or receiving related errors, try to base64 encode your data.</p>
   * @public
   */
  Body?: Uint8Array;

  /**
   * <p>The Amazon S3 URI for an asset bundle import file that exists in an Amazon S3 bucket that the caller
   *          has read access to. The file must be a zip format file and can't exceed 20 MB.</p>
   * @public
   */
  S3Uri?: string;
}

/**
 * <p>A description of the import source that you provide at the start of an import job. This value is set to either <code>Body</code> or <code>S3Uri</code>, depending on how the <code>StartAssetBundleImportJobRequest</code> is configured.</p>
 * @public
 */
export interface AssetBundleImportSourceDescription {
  /**
   * <p>An HTTPS download URL for the provided asset bundle that you optionally provided at the start of the import job. This URL is valid for five minutes after issuance. Call <code>DescribeAssetBundleExportJob</code> again for a fresh URL if needed. The downloaded asset bundle is a <code>.qs</code> zip file.</p>
   * @public
   */
  Body?: string;

  /**
   * <p>The Amazon S3 URI that you provided at the start of the import job.</p>
   * @public
   */
  S3Uri?: string;
}

/**
 * @public
 * @enum
 */
export const AssignmentStatus = {
  DISABLED: "DISABLED",
  DRAFT: "DRAFT",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus];

/**
 * @public
 * @enum
 */
export const AuthenticationMethodOption = {
  ACTIVE_DIRECTORY: "ACTIVE_DIRECTORY",
  IAM_AND_QUICKSIGHT: "IAM_AND_QUICKSIGHT",
  IAM_IDENTITY_CENTER: "IAM_IDENTITY_CENTER",
  IAM_ONLY: "IAM_ONLY",
} as const;

/**
 * @public
 */
export type AuthenticationMethodOption = (typeof AuthenticationMethodOption)[keyof typeof AuthenticationMethodOption];

/**
 * @public
 * @enum
 */
export const ServiceType = {
  REDSHIFT: "REDSHIFT",
} as const;

/**
 * @public
 */
export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

/**
 * <p>The authorized targets that are associated with a service.</p>
 * @public
 */
export interface AuthorizedTargetsByService {
  /**
   * <p>The name of the Amazon Web Services service.</p>
   * @public
   */
  Service?: ServiceType;

  /**
   * <p>Aist of authorized targets that are represented by IAM Identity Center application ARNs.</p>
   * @public
   */
  AuthorizedTargets?: string[];
}

/**
 * @public
 * @enum
 */
export const AuthorSpecifiedAggregation = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  DISTINCT_COUNT: "DISTINCT_COUNT",
  MAX: "MAX",
  MEDIAN: "MEDIAN",
  MIN: "MIN",
  PERCENTILE: "PERCENTILE",
  STDEV: "STDEV",
  STDEVP: "STDEVP",
  SUM: "SUM",
  VAR: "VAR",
  VARP: "VARP",
} as const;

/**
 * @public
 */
export type AuthorSpecifiedAggregation = (typeof AuthorSpecifiedAggregation)[keyof typeof AuthorSpecifiedAggregation];

/**
 * <p>The bookmarks configuration of an embedded dashboard.</p>
 * @public
 */
export interface BookmarksConfigurations {
  /**
   * <p>A Boolean value that determines whether a user
   *             can bookmark an embedded dashboard.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>The display options for tile borders for visuals.</p>
 * @public
 */
export interface BorderStyle {
  /**
   * <p>The option to enable display of borders for visuals.</p>
   * @public
   */
  Show?: boolean;
}

/**
 * <p>A calculated column for a dataset.</p>
 * @public
 */
export interface CalculatedColumn {
  /**
   * <p>Column name.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>A unique ID to identify a calculated column. During a dataset update, if the column ID
   *             of a calculated column matches that of an existing calculated column, Amazon QuickSight
   *             preserves the existing calculated column.</p>
   * @public
   */
  ColumnId: string | undefined;

  /**
   * <p>An expression that defines the calculated column.</p>
   * @public
   */
  Expression: string | undefined;
}

/**
 * @public
 */
export interface CancelIngestionRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dataset used in the ingestion.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>An ID for the ingestion.</p>
   * @public
   */
  IngestionId: string | undefined;
}

/**
 * @public
 */
export interface CancelIngestionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the data ingestion.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>An ID for the ingestion.</p>
   * @public
   */
  IngestionId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;
}

/**
 * <p>An internal failure occurred.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>One or more parameters has a value that isn't valid.</p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * @enum
 */
export const ExceptionResourceType = {
  ACCOUNT_SETTINGS: "ACCOUNT_SETTINGS",
  DATA_SET: "DATA_SET",
  DATA_SOURCE: "DATA_SOURCE",
  GROUP: "GROUP",
  IAMPOLICY_ASSIGNMENT: "IAMPOLICY_ASSIGNMENT",
  INGESTION: "INGESTION",
  NAMESPACE: "NAMESPACE",
  USER: "USER",
  VPC_CONNECTION: "VPC_CONNECTION",
} as const;

/**
 * @public
 */
export type ExceptionResourceType = (typeof ExceptionResourceType)[keyof typeof ExceptionResourceType];

/**
 * <p>The resource specified already exists. </p>
 * @public
 */
export class ResourceExistsException extends __BaseException {
  readonly name: "ResourceExistsException" = "ResourceExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The resource type for this request.</p>
   * @public
   */
  ResourceType?: ExceptionResourceType;

  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceExistsException, __BaseException>) {
    super({
      name: "ResourceExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceExistsException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>One or more resources can't be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The resource type for this request.</p>
   * @public
   */
  ResourceType?: ExceptionResourceType;

  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>Access is throttled.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * @enum
 */
export const ColumnDataType = {
  DATETIME: "DATETIME",
  DECIMAL: "DECIMAL",
  INTEGER: "INTEGER",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type ColumnDataType = (typeof ColumnDataType)[keyof typeof ColumnDataType];

/**
 * @public
 * @enum
 */
export const ColumnDataSubType = {
  FIXED: "FIXED",
  FLOAT: "FLOAT",
} as const;

/**
 * @public
 */
export type ColumnDataSubType = (typeof ColumnDataSubType)[keyof typeof ColumnDataSubType];

/**
 * <p>A transform operation that casts a column to a different type.</p>
 * @public
 */
export interface CastColumnTypeOperation {
  /**
   * <p>Column name.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>New column data type.</p>
   * @public
   */
  NewColumnType: ColumnDataType | undefined;

  /**
   * <p>The sub data type of the new column. Sub types are only available for decimal columns that are part of a SPICE dataset.</p>
   * @public
   */
  SubType?: ColumnDataSubType;

  /**
   * <p>When casting a column from string to datetime type, you can supply a string in a
   *             format supported by Amazon QuickSight to denote the source data format.</p>
   * @public
   */
  Format?: string;
}

/**
 * @public
 * @enum
 */
export const CategoryFilterFunction = {
  CONTAINS: "CONTAINS",
  EXACT: "EXACT",
} as const;

/**
 * @public
 */
export type CategoryFilterFunction = (typeof CategoryFilterFunction)[keyof typeof CategoryFilterFunction];

/**
 * @public
 * @enum
 */
export const CategoryFilterType = {
  CUSTOM_FILTER: "CUSTOM_FILTER",
  CUSTOM_FILTER_LIST: "CUSTOM_FILTER_LIST",
  FILTER_LIST: "FILTER_LIST",
} as const;

/**
 * @public
 */
export type CategoryFilterType = (typeof CategoryFilterType)[keyof typeof CategoryFilterType];

/**
 * <p>A structure that represents the cell value synonym.</p>
 * @public
 */
export interface CellValueSynonym {
  /**
   * <p>The cell value.</p>
   * @public
   */
  CellValue?: string;

  /**
   * <p>Other names or aliases for the cell value.</p>
   * @public
   */
  Synonyms?: string[];
}

/**
 * <p>A structure that represents a collective constant.</p>
 * @public
 */
export interface CollectiveConstant {
  /**
   * <p>A list of values for the collective constant.</p>
   * @public
   */
  ValueList?: string[];
}

/**
 * @public
 * @enum
 */
export const ColumnDataRole = {
  DIMENSION: "DIMENSION",
  MEASURE: "MEASURE",
} as const;

/**
 * @public
 */
export type ColumnDataRole = (typeof ColumnDataRole)[keyof typeof ColumnDataRole];

/**
 * <p>Metadata that contains a description for a column.</p>
 * @public
 */
export interface ColumnDescription {
  /**
   * <p>The text of a description for a column.</p>
   * @public
   */
  Text?: string;
}

/**
 * @public
 * @enum
 */
export const GeoSpatialCountryCode = {
  US: "US",
} as const;

/**
 * @public
 */
export type GeoSpatialCountryCode = (typeof GeoSpatialCountryCode)[keyof typeof GeoSpatialCountryCode];

/**
 * <p>Geospatial column group that denotes a hierarchy.</p>
 * @public
 */
export interface GeoSpatialColumnGroup {
  /**
   * <p>A display name for the hierarchy.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Country code.</p>
   * @public
   */
  CountryCode?: GeoSpatialCountryCode;

  /**
   * <p>Columns in this hierarchy.</p>
   * @public
   */
  Columns: string[] | undefined;
}

/**
 * <p>Groupings of columns that work together in certain Amazon QuickSight features. This is
 *             a variant type structure. For this structure to be valid, only one of the attributes can
 *             be non-null.</p>
 * @public
 */
export interface ColumnGroup {
  /**
   * <p>Geospatial column group that denotes a hierarchy.</p>
   * @public
   */
  GeoSpatialColumnGroup?: GeoSpatialColumnGroup;
}

/**
 * <p>A structure describing the name, data type, and geographic role of the columns.</p>
 * @public
 */
export interface ColumnGroupColumnSchema {
  /**
   * <p>The name of the column group's column schema.</p>
   * @public
   */
  Name?: string;
}

/**
 * <p>The column group schema.</p>
 * @public
 */
export interface ColumnGroupSchema {
  /**
   * <p>The name of the column group schema.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A structure containing the list of schemas for column group columns.</p>
   * @public
   */
  ColumnGroupColumnSchemaList?: ColumnGroupColumnSchema[];
}

/**
 * <p>A rule defined to grant access on one or more restricted columns.
 *             Each dataset can have multiple rules.
 *             To create a restricted column, you add it to one or more rules.
 *             Each rule must contain at least one column and at least one user or group.
 *             To be able to see a restricted column, a user or group needs to be added
 *             to a rule for that column.</p>
 * @public
 */
export interface ColumnLevelPermissionRule {
  /**
   * <p>An array of Amazon Resource Names (ARNs) for Amazon QuickSight users or groups.</p>
   * @public
   */
  Principals?: string[];

  /**
   * <p>An array of column names.</p>
   * @public
   */
  ColumnNames?: string[];
}

/**
 * @public
 * @enum
 */
export const ColumnOrderingType = {
  GREATER_IS_BETTER: "GREATER_IS_BETTER",
  LESSER_IS_BETTER: "LESSER_IS_BETTER",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type ColumnOrderingType = (typeof ColumnOrderingType)[keyof typeof ColumnOrderingType];

/**
 * <p>The column schema.</p>
 * @public
 */
export interface ColumnSchema {
  /**
   * <p>The name of the column schema.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The data type of the column schema.</p>
   * @public
   */
  DataType?: string;

  /**
   * <p>The geographic role of the column schema.</p>
   * @public
   */
  GeographicRole?: string;
}

/**
 * @public
 * @enum
 */
export const GeoSpatialDataRole = {
  CITY: "CITY",
  COUNTRY: "COUNTRY",
  COUNTY: "COUNTY",
  LATITUDE: "LATITUDE",
  LONGITUDE: "LONGITUDE",
  POSTCODE: "POSTCODE",
  STATE: "STATE",
} as const;

/**
 * @public
 */
export type GeoSpatialDataRole = (typeof GeoSpatialDataRole)[keyof typeof GeoSpatialDataRole];

/**
 * <p>A tag for a column in a
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_TagColumnOperation.html">TagColumnOperation</a>
 *             </code>
 *             structure. This is a
 *             variant type structure. For this structure to be valid, only one of the attributes can
 *             be non-null.</p>
 * @public
 */
export interface ColumnTag {
  /**
   * <p>A geospatial role for a column.</p>
   * @public
   */
  ColumnGeographicRole?: GeoSpatialDataRole;

  /**
   * <p>A description for a column.</p>
   * @public
   */
  ColumnDescription?: ColumnDescription;
}

/**
 * @public
 * @enum
 */
export const ColumnTagName = {
  COLUMN_DESCRIPTION: "COLUMN_DESCRIPTION",
  COLUMN_GEOGRAPHIC_ROLE: "COLUMN_GEOGRAPHIC_ROLE",
} as const;

/**
 * @public
 */
export type ColumnTagName = (typeof ColumnTagName)[keyof typeof ColumnTagName];

/**
 * @public
 * @enum
 */
export const UndefinedSpecifiedValueType = {
  LEAST: "LEAST",
  MOST: "MOST",
} as const;

/**
 * @public
 */
export type UndefinedSpecifiedValueType =
  (typeof UndefinedSpecifiedValueType)[keyof typeof UndefinedSpecifiedValueType];

/**
 * <p>A structure that represents a comparative order.</p>
 * @public
 */
export interface ComparativeOrder {
  /**
   * <p>The ordering type for a column. Valid values for this structure are <code>GREATER_IS_BETTER</code>, <code>LESSER_IS_BETTER</code> and <code>SPECIFIED</code>.</p>
   * @public
   */
  UseOrdering?: ColumnOrderingType;

  /**
   * <p>The list of columns to be used in the ordering.</p>
   * @public
   */
  SpecifedOrder?: string[];

  /**
   * <p>The treat of undefined specified values. Valid values for this structure are <code>LEAST</code> and <code>MOST</code>.</p>
   * @public
   */
  TreatUndefinedSpecifiedValues?: UndefinedSpecifiedValueType;
}

/**
 * <p>A resource is already in a state that indicates an operation is happening that must complete
 * 			before a new update can be applied.</p>
 * @public
 */
export class ConcurrentUpdatingException extends __BaseException {
  readonly name: "ConcurrentUpdatingException" = "ConcurrentUpdatingException";
  readonly $fault: "server" = "server";
  Message?: string;
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentUpdatingException, __BaseException>) {
    super({
      name: "ConcurrentUpdatingException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentUpdatingException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * @enum
 */
export const ConstantType = {
  COLLECTIVE: "COLLECTIVE",
  RANGE: "RANGE",
  SINGULAR: "SINGULAR",
} as const;

/**
 * @public
 */
export type ConstantType = (typeof ConstantType)[keyof typeof ConstantType];

/**
 * @public
 */
export interface CreateAccountCustomizationRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to customize Amazon QuickSight for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon QuickSight namespace that you want to add customizations to.</p>
   * @public
   */
  Namespace?: string;

  /**
   * <p>The Amazon QuickSight customizations you're adding in the current Amazon Web Services Region. You can add
   *             these to an Amazon Web Services account and a QuickSight namespace. </p>
   *          <p>For example, you can add a default theme by setting <code>AccountCustomization</code>
   *             to the midnight theme: <code>"AccountCustomization": \{ "DefaultTheme":
   *                 "arn:aws:quicksight::aws:theme/MIDNIGHT" \}</code>. Or, you can add a custom theme by
   *             specifying <code>"AccountCustomization": \{ "DefaultTheme":
   *                 "arn:aws:quicksight:us-west-2:111122223333:theme/bdb844d0-0fe9-4d9d-b520-0fe602d93639"
   *                 \}</code>. </p>
   * @public
   */
  AccountCustomization: AccountCustomization | undefined;

  /**
   * <p>A list of the tags that you want to attach to this resource.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateAccountCustomizationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the customization that you created for this Amazon Web Services account.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID for the Amazon Web Services account that you want to customize Amazon QuickSight for.</p>
   * @public
   */
  AwsAccountId?: string;

  /**
   * <p>The namespace associated with the customization you're creating. </p>
   * @public
   */
  Namespace?: string;

  /**
   * <p>The Amazon QuickSight customizations you're adding in the current Amazon Web Services Region. </p>
   * @public
   */
  AccountCustomization?: AccountCustomization;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;
}

/**
 * <p>This resource is currently unavailable.</p>
 * @public
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * <p>The resource type for this request.</p>
   * @public
   */
  ResourceType?: ExceptionResourceType;

  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 */
export interface CreateAccountSubscriptionRequest {
  /**
   * <p>The edition of Amazon QuickSight that you want your account to have. Currently, you can
   *             choose from <code>ENTERPRISE</code> or
   *                 <code>ENTERPRISE_AND_Q</code>.</p>
   *          <p>If you choose <code>ENTERPRISE_AND_Q</code>, the following parameters are
   *             required:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FirstName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EmailAddress</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ContactNumber</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Edition: Edition | undefined;

  /**
   * <p>The method that you want to use to authenticate your Amazon QuickSight account.</p>
   *          <p>If you choose <code>ACTIVE_DIRECTORY</code>, provide an <code>ActiveDirectoryName</code>
   *             and an <code>AdminGroup</code> associated with your Active Directory.</p>
   *          <p>If you choose <code>IAM_IDENTITY_CENTER</code>, provide an <code>AdminGroup</code> associated with your IAM Identity Center account.</p>
   * @public
   */
  AuthenticationMethod: AuthenticationMethodOption | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account that you're using to create your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of your Amazon QuickSight account. This name is unique over all of Amazon Web Services, and it appears only when users sign in. You can't change
   *                 <code>AccountName</code> value after the Amazon QuickSight account is
   *             created.</p>
   * @public
   */
  AccountName: string | undefined;

  /**
   * <p>The email address that you want Amazon QuickSight to send notifications to regarding your Amazon QuickSight account or Amazon QuickSight subscription.</p>
   * @public
   */
  NotificationEmail: string | undefined;

  /**
   * <p>The name of your Active Directory. This field is required if <code>ACTIVE_DIRECTORY</code> is the selected authentication method of the new Amazon QuickSight account.</p>
   * @public
   */
  ActiveDirectoryName?: string;

  /**
   * <p>The realm of the Active Directory that is associated with your Amazon QuickSight account. This field is required if <code>ACTIVE_DIRECTORY</code> is the selected authentication method of the new Amazon QuickSight account.</p>
   * @public
   */
  Realm?: string;

  /**
   * <p>The ID of the Active Directory that is associated with your Amazon QuickSight account.</p>
   * @public
   */
  DirectoryId?: string;

  /**
   * <p>The admin group associated with your Active Directory or IAM Identity Center account. This field is required if <code>ACTIVE_DIRECTORY</code> or <code>IAM_IDENTITY_CENTER</code> is the selected authentication method of the new Amazon QuickSight account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide. For more information about using Active Directory in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide.</p>
   * @public
   */
  AdminGroup?: string[];

  /**
   * <p>The author group associated with your Active Directory or IAM Identity Center account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide. For more information about using Active Directory in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide.</p>
   * @public
   */
  AuthorGroup?: string[];

  /**
   * <p>The reader group associated with your Active Directory or IAM Identity Center account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide. For more information about using Active Directory in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight User Guide.</p>
   * @public
   */
  ReaderGroup?: string[];

  /**
   * <p>The first name of the author of the Amazon QuickSight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon QuickSight account.</p>
   * @public
   */
  FirstName?: string;

  /**
   * <p>The last name of the author of the Amazon QuickSight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon QuickSight account.</p>
   * @public
   */
  LastName?: string;

  /**
   * <p>The email address of the author of the Amazon QuickSight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon QuickSight account.</p>
   * @public
   */
  EmailAddress?: string;

  /**
   * <p>A 10-digit phone number for the author of the Amazon QuickSight account to use for
   *             future communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the
   *             selected edition of the new Amazon QuickSight account.</p>
   * @public
   */
  ContactNumber?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM Identity Center instance.</p>
   * @public
   */
  IAMIdentityCenterInstanceArn?: string;
}

/**
 * <p>A <code>SignupResponse</code> object that contains a summary of a newly created account.</p>
 * @public
 */
export interface SignupResponse {
  /**
   * <p>A Boolean that is <code>TRUE</code> if the Amazon QuickSight uses IAM as an
   *             authentication method.</p>
   * @public
   */
  IAMUser?: boolean;

  /**
   * <p>The user login name for your Amazon QuickSight account.</p>
   * @public
   */
  userLoginName?: string;

  /**
   * <p>The name of your Amazon QuickSight account.</p>
   * @public
   */
  accountName?: string;

  /**
   * <p>The type of Active Directory that is being used to authenticate the Amazon QuickSight
   *             account. Valid values are <code>SIMPLE_AD</code>, <code>AD_CONNECTOR</code>, and
   *                 <code>MICROSOFT_AD</code>.</p>
   * @public
   */
  directoryType?: string;
}

/**
 * @public
 */
export interface CreateAccountSubscriptionResponse {
  /**
   * <p>A <code>SignupResponse</code> object that returns information about a newly created Amazon QuickSight account.</p>
   * @public
   */
  SignupResponse?: SignupResponse;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;
}

/**
 * <p>One or more preconditions aren't met.</p>
 * @public
 */
export class PreconditionNotMetException extends __BaseException {
  readonly name: "PreconditionNotMetException" = "PreconditionNotMetException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionNotMetException, __BaseException>) {
    super({
      name: "PreconditionNotMetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionNotMetException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>A date-time parameter.</p>
 * @public
 */
export interface DateTimeParameter {
  /**
   * <p>A display name for the date-time parameter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The values for the date-time parameter.</p>
   * @public
   */
  Values: Date[] | undefined;
}

/**
 * <p>A decimal parameter.</p>
 * @public
 */
export interface DecimalParameter {
  /**
   * <p>A display name for the decimal parameter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The values for the decimal parameter.</p>
   * @public
   */
  Values: number[] | undefined;
}

/**
 * <p>An integer parameter.</p>
 * @public
 */
export interface IntegerParameter {
  /**
   * <p>The name of the integer parameter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The values for the integer parameter.</p>
   * @public
   */
  Values: number[] | undefined;
}

/**
 * <p>A string parameter.</p>
 * @public
 */
export interface StringParameter {
  /**
   * <p>A display name for a string parameter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The values of a string parameter.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>A list of Amazon QuickSight parameters and the list's override values.</p>
 * @public
 */
export interface _Parameters {
  /**
   * <p>The parameters that have a data type of string.</p>
   * @public
   */
  StringParameters?: StringParameter[];

  /**
   * <p>The parameters that have a data type of integer.</p>
   * @public
   */
  IntegerParameters?: IntegerParameter[];

  /**
   * <p>The parameters that have a data type of decimal.</p>
   * @public
   */
  DecimalParameters?: DecimalParameter[];

  /**
   * <p>The parameters that have a data type of date-time.</p>
   * @public
   */
  DateTimeParameters?: DateTimeParameter[];
}

/**
 * <p>Permission for the resource.</p>
 * @public
 */
export interface ResourcePermission {
  /**
   * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
   *             </li>
   *             <li>
   *                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
   *             </li>
   *             <li>
   *                <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
   *                     ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
   *                     (This is less common.) </p>
   *             </li>
   *          </ul>
   * @public
   */
  Principal: string | undefined;

  /**
   * <p>The IAM action to grant or revoke permissions on.</p>
   * @public
   */
  Actions: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationStrategyMode = {
  LENIENT: "LENIENT",
  STRICT: "STRICT",
} as const;

/**
 * @public
 */
export type ValidationStrategyMode = (typeof ValidationStrategyMode)[keyof typeof ValidationStrategyMode];

/**
 * <p>The option to relax the validation that is required to create and update analyses, dashboards, and templates with definition objects. When you set this value to <code>LENIENT</code>, validation is skipped for specific errors.</p>
 * @public
 */
export interface ValidationStrategy {
  /**
   * <p>The mode of validation for the asset to be created or updated. When you set this value to <code>STRICT</code>, strict validation for every error is enforced. When you set this value to <code>LENIENT</code>, validation is skipped for specific UI errors.</p>
   * @public
   */
  Mode: ValidationStrategyMode | undefined;
}

/**
 * @public
 */
export interface CreateAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you are creating an analysis.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the analysis that you're creating. This ID displays in the URL of the
   *             analysis.</p>
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * <p>A descriptive name for the analysis that you're creating. This name displays for the
   *             analysis in the Amazon QuickSight console. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The parameter names and override values that you want to use. An analysis can have
   *             any parameter type, and some parameters might accept multiple values. </p>
   * @public
   */
  Parameters?: _Parameters;

  /**
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis. You can use the <code>Permissions</code> structure to grant permissions by
   *             providing a list of Identity and Access Management (IAM) action information for each
   *             principal listed by Amazon Resource Name (ARN). </p>
   *          <p>To specify no permissions, omit <code>Permissions</code>.</p>
   * @public
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>A source entity to use for the analysis that you're creating. This metadata structure
   *             contains details that describe a source template and one or more datasets.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   * @public
   */
  SourceEntity?: AnalysisSourceEntity;

  /**
   * <p>The ARN for the theme to apply to the analysis that you're creating. To see the theme
   *             in the Amazon QuickSight console, make sure that you have access to it.</p>
   * @public
   */
  ThemeArn?: string;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   *             analysis.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The definition of an analysis.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   * @public
   */
  Definition?: AnalysisDefinition;

  /**
   * <p>The option to relax the validation needed to create an analysis with definition objects. This skips the validation step for specific errors.</p>
   * @public
   */
  ValidationStrategy?: ValidationStrategy;

  /**
   * <p>When you create the analysis, Amazon QuickSight adds the analysis to these folders.</p>
   * @public
   */
  FolderArns?: string[];
}

/**
 * @public
 */
export interface CreateAnalysisResponse {
  /**
   * <p>The ARN for the analysis.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID of the analysis.</p>
   * @public
   */
  AnalysisId?: string;

  /**
   * <p>The status of the creation of the analysis. </p>
   * @public
   */
  CreationStatus?: ResourceStatus;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;
}

/**
 * <p>A limit is exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>Limit exceeded.</p>
   * @public
   */
  ResourceType?: ExceptionResourceType;

  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 * @public
 */
export class UnsupportedUserEditionException extends __BaseException {
  readonly name: "UnsupportedUserEditionException" = "UnsupportedUserEditionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   * @public
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedUserEditionException, __BaseException>) {
    super({
      name: "UnsupportedUserEditionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedUserEditionException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>A transform operation that creates calculated columns. Columns created in one such
 *             operation form a lexical closure.</p>
 * @public
 */
export interface CreateColumnsOperation {
  /**
   * <p>Calculated columns to create.</p>
   * @public
   */
  Columns: CalculatedColumn[] | undefined;
}

/**
 * <p>The drill down options for data points in a dashbaord.</p>
 * @public
 */
export interface DataPointDrillUpDownOption {
  /**
   * <p>The status of the drill down options of data points.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior;
}

/**
 * <p>The data point menu options of a dashboard.</p>
 * @public
 */
export interface DataPointMenuLabelOption {
  /**
   * <p>The status of the data point menu options.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior;
}

/**
 * <p>The data point tooltip options.</p>
 * @public
 */
export interface DataPointTooltipOption {
  /**
   * <p>The status of the data point tool tip options.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior;
}

/**
 * <p>Export to .csv option.</p>
 * @public
 */
export interface ExportToCSVOption {
  /**
   * <p>Availability status.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior;
}

/**
 * <p>Determines whether or not hidden fields are visible on exported dashbaords.</p>
 * @public
 */
export interface ExportWithHiddenFieldsOption {
  /**
   * <p>The status of the export with hidden fields options.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior;
}

/**
 * @public
 * @enum
 */
export const DashboardUIState = {
  COLLAPSED: "COLLAPSED",
  EXPANDED: "EXPANDED",
} as const;

/**
 * @public
 */
export type DashboardUIState = (typeof DashboardUIState)[keyof typeof DashboardUIState];

/**
 * <p>Sheet controls option.</p>
 * @public
 */
export interface SheetControlsOption {
  /**
   * <p>Visibility state.</p>
   * @public
   */
  VisibilityState?: DashboardUIState;
}

/**
 * <p>The sheet layout maximization options of a dashbaord.</p>
 * @public
 */
export interface SheetLayoutElementMaximizationOption {
  /**
   * <p>The status of the sheet layout maximization options of a dashbaord.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior;
}

/**
 * <p>The axis sort options for a visual.</p>
 * @public
 */
export interface VisualAxisSortOption {
  /**
   * <p>The availaiblity status of a visual's axis sort options.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior;
}

/**
 * <p>Determines if hidden fields are included in an exported dashboard.</p>
 * @public
 */
export interface ExportHiddenFieldsOption {
  /**
   * <p>The status of the export hidden fields options of a dashbaord.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior;
}

/**
 * <p>The visual publish options of a visual in a dashboard</p>
 * @public
 */
export interface DashboardVisualPublishOptions {
  /**
   * <p>Determines if hidden fields are included in an exported dashboard.</p>
   * @public
   */
  ExportHiddenFieldsOption?: ExportHiddenFieldsOption;
}

/**
 * <p>Dashboard publish options.</p>
 * @public
 */
export interface DashboardPublishOptions {
  /**
   * <p>Ad hoc (one-time) filtering option.</p>
   * @public
   */
  AdHocFilteringOption?: AdHocFilteringOption;

  /**
   * <p>Export to .csv option.</p>
   * @public
   */
  ExportToCSVOption?: ExportToCSVOption;

  /**
   * <p>Sheet controls option.</p>
   * @public
   */
  SheetControlsOption?: SheetControlsOption;

  /**
   * @deprecated
   *
   * <p>The visual publish options of a visual in a dashboard.</p>
   * @public
   */
  VisualPublishOptions?: DashboardVisualPublishOptions;

  /**
   * <p>The sheet layout maximization options of a dashbaord.</p>
   * @public
   */
  SheetLayoutElementMaximizationOption?: SheetLayoutElementMaximizationOption;

  /**
   * <p>The menu options of a visual in a dashboard.</p>
   * @public
   */
  VisualMenuOption?: VisualMenuOption;

  /**
   * <p>The axis sort options of a dashboard.</p>
   * @public
   */
  VisualAxisSortOption?: VisualAxisSortOption;

  /**
   * <p>Determines if hidden fields are exported with a dashboard.</p>
   * @public
   */
  ExportWithHiddenFieldsOption?: ExportWithHiddenFieldsOption;

  /**
   * <p>The drill-down options of data points in a dashboard.</p>
   * @public
   */
  DataPointDrillUpDownOption?: DataPointDrillUpDownOption;

  /**
   * <p>The data point menu label options of a dashboard.</p>
   * @public
   */
  DataPointMenuLabelOption?: DataPointMenuLabelOption;

  /**
   * <p>The data point tool tip options of a dashboard.</p>
   * @public
   */
  DataPointTooltipOption?: DataPointTooltipOption;
}

/**
 * <p>The contents of a dashboard.</p>
 * @public
 */
export interface DashboardVersionDefinition {
  /**
   * <p>An array of dataset identifier declarations. With
   *             this mapping,you can use dataset identifiers instead of dataset Amazon Resource Names (ARNs) throughout the dashboard's sub-structures.</p>
   * @public
   */
  DataSetIdentifierDeclarations: DataSetIdentifierDeclaration[] | undefined;

  /**
   * <p>An array of sheet definitions for a dashboard.</p>
   * @public
   */
  Sheets?: SheetDefinition[];

  /**
   * <p>An array of calculated field definitions for the dashboard.</p>
   * @public
   */
  CalculatedFields?: CalculatedField[];

  /**
   * <p>The parameter declarations for a dashboard. Parameters are named variables that can transfer a value for use by an action or an object.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  ParameterDeclarations?: ParameterDeclaration[];

  /**
   * <p>The filter definitions for a dashboard.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html">Filtering Data in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  FilterGroups?: FilterGroup[];

  /**
   * <p>An array of dashboard-level column configurations. Column configurations
   *             are used to set the default formatting for a column that
   *             is used throughout a dashboard. </p>
   * @public
   */
  ColumnConfigurations?: ColumnConfiguration[];

  /**
   * <p>The configuration for default analysis settings.</p>
   * @public
   */
  AnalysisDefaults?: AnalysisDefaults;

  /**
   * <p>An array of option definitions for a dashboard.</p>
   * @public
   */
  Options?: AssetOptions;
}

/**
 * <p>A structure that contains the configuration of a shareable link to the dashboard.</p>
 * @public
 */
export interface LinkSharingConfiguration {
  /**
   * <p>A structure that contains the permissions of a shareable link.</p>
   * @public
   */
  Permissions?: ResourcePermission[];
}

/**
 * <p>Dashboard source template.</p>
 * @public
 */
export interface DashboardSourceTemplate {
  /**
   * <p>Dataset references.</p>
   * @public
   */
  DataSetReferences: DataSetReference[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>Dashboard source entity.</p>
 * @public
 */
export interface DashboardSourceEntity {
  /**
   * <p>Source template.</p>
   * @public
   */
  SourceTemplate?: DashboardSourceTemplate;
}

/**
 * @public
 */
export interface CreateDashboardRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you want to create the dashboard.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The display name of the dashboard.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The parameters for the creation of the dashboard, which you want to use to override
   *             the default settings. A dashboard can have any type of parameters, and some parameters
   *             might accept multiple values. </p>
   * @public
   */
  Parameters?: _Parameters;

  /**
   * <p>A structure that contains the permissions of the dashboard. You can use this structure
   *             for granting permissions by providing a list of IAM action information for each
   *             principal ARN. </p>
   *          <p>To specify no permissions, omit the permissions list.</p>
   * @public
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The entity that you are using as a source when you create the dashboard. In
   *             <code>SourceEntity</code>, you specify the type of object you're using as source. You
   *             can only create a dashboard from a template, so you use a <code>SourceTemplate</code>
   *             entity. If you need to create a dashboard from an analysis, first convert the analysis
   *             to a template by using the <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>
   *             </code>
   *             API operation. For
   *             <code>SourceTemplate</code>, specify the Amazon Resource Name (ARN) of the source
   *             template. The <code>SourceTemplate</code>ARN can contain any Amazon Web Services account and any
   *             Amazon QuickSight-supported Amazon Web Services Region. </p>
   *          <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> to
   *             list the replacement datasets for the placeholders listed in the original. The schema in
   *             each dataset must match its placeholder. </p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   * @public
   */
  SourceEntity?: DashboardSourceEntity;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   *             dashboard.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>A description for the first version of the dashboard being created.</p>
   * @public
   */
  VersionDescription?: string;

  /**
   * <p>Options for publishing the dashboard when you create it:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>AdHocFilteringOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. When this is
   *                     set to <code>DISABLED</code>, Amazon QuickSight disables the left filter pane on the
   *                     published dashboard, which can be used for ad hoc (one-time) filtering. This
   *                     option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>ExportToCSVOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. The visual
   *                     option to export data to .CSV format isn't enabled when this is set to
   *                     <code>DISABLED</code>. This option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VisibilityState</code> for <code>SheetControlsOption</code> - This
   *                     visibility state can be either <code>COLLAPSED</code> or <code>EXPANDED</code>.
   *                     This option is <code>COLLAPSED</code> by default. </p>
   *             </li>
   *          </ul>
   * @public
   */
  DashboardPublishOptions?: DashboardPublishOptions;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If
   *             you add a value for this field, it overrides the value that is used in the source
   *             entity. The theme ARN must exist in the same Amazon Web Services account where you create the
   *             dashboard.</p>
   * @public
   */
  ThemeArn?: string;

  /**
   * <p>The definition of a dashboard.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   * @public
   */
  Definition?: DashboardVersionDefinition;

  /**
   * <p>The option to relax the validation needed to create a dashboard with definition objects. This option skips the validation step for specific errors.</p>
   * @public
   */
  ValidationStrategy?: ValidationStrategy;

  /**
   * <p>When you create the dashboard, Amazon QuickSight adds the dashboard to these folders.</p>
   * @public
   */
  FolderArns?: string[];

  /**
   * <p>A structure that contains the permissions of a shareable link to the dashboard.</p>
   * @public
   */
  LinkSharingConfiguration?: LinkSharingConfiguration;

  /**
   * <p>A list of analysis Amazon Resource Names (ARNs) to be linked to the dashboard.</p>
   * @public
   */
  LinkEntities?: string[];
}

/**
 * @public
 */
export interface CreateDashboardResponse {
  /**
   * <p>The ARN of the dashboard.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ARN of the dashboard, including the version number of the first version that is
   *             created.</p>
   * @public
   */
  VersionArn?: string;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId?: string;

  /**
   * <p>The status of the dashboard creation request.</p>
   * @public
   */
  CreationStatus?: ResourceStatus;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;
}

/**
 * <p>The default values of a date time parameter.</p>
 * @public
 */
export interface DateTimeDatasetParameterDefaultValues {
  /**
   * <p>A list of static default values for a given date time parameter.</p>
   * @public
   */
  StaticValues?: Date[];
}

/**
 * @public
 * @enum
 */
export const DatasetParameterValueType = {
  MULTI_VALUED: "MULTI_VALUED",
  SINGLE_VALUED: "SINGLE_VALUED",
} as const;

/**
 * @public
 */
export type DatasetParameterValueType = (typeof DatasetParameterValueType)[keyof typeof DatasetParameterValueType];

/**
 * <p>A date time parameter for a dataset.</p>
 * @public
 */
export interface DateTimeDatasetParameter {
  /**
   * <p>An identifier for the parameter that is created in the dataset.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the date time parameter that is created in the dataset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value type of the dataset parameter. Valid values are <code>single value</code> or <code>multi value</code>.</p>
   * @public
   */
  ValueType: DatasetParameterValueType | undefined;

  /**
   * <p>The time granularity of the date time parameter.</p>
   * @public
   */
  TimeGranularity?: TimeGranularity;

  /**
   * <p>A list of default values for a given date time parameter. This structure only accepts static values.</p>
   * @public
   */
  DefaultValues?: DateTimeDatasetParameterDefaultValues;
}

/**
 * <p>The default values of a decimal parameter.</p>
 * @public
 */
export interface DecimalDatasetParameterDefaultValues {
  /**
   * <p>A list of static default values for a given decimal parameter.</p>
   * @public
   */
  StaticValues?: number[];
}

/**
 * <p>A decimal parameter for a dataset.</p>
 * @public
 */
export interface DecimalDatasetParameter {
  /**
   * <p>An identifier for the decimal parameter created in the dataset.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the decimal parameter that is created in the dataset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value type of the dataset parameter. Valid values are <code>single value</code> or <code>multi value</code>.</p>
   * @public
   */
  ValueType: DatasetParameterValueType | undefined;

  /**
   * <p>A list of default values for a given decimal parameter. This structure only accepts static values.</p>
   * @public
   */
  DefaultValues?: DecimalDatasetParameterDefaultValues;
}

/**
 * <p>The default values of an integer parameter.</p>
 * @public
 */
export interface IntegerDatasetParameterDefaultValues {
  /**
   * <p>A list of static default values for a given integer parameter.</p>
   * @public
   */
  StaticValues?: number[];
}

/**
 * <p>An integer parameter for a dataset.</p>
 * @public
 */
export interface IntegerDatasetParameter {
  /**
   * <p>An identifier for the integer parameter created in the dataset.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the integer parameter that is created in the dataset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value type of the dataset parameter. Valid values are <code>single value</code> or <code>multi value</code>.</p>
   * @public
   */
  ValueType: DatasetParameterValueType | undefined;

  /**
   * <p>A list of default values for a given integer parameter. This structure only accepts static values.</p>
   * @public
   */
  DefaultValues?: IntegerDatasetParameterDefaultValues;
}

/**
 * <p>The default values of a string parameter.</p>
 * @public
 */
export interface StringDatasetParameterDefaultValues {
  /**
   * <p>A list of static default values for a given string parameter.</p>
   * @public
   */
  StaticValues?: string[];
}

/**
 * <p>A string parameter for a dataset.</p>
 * @public
 */
export interface StringDatasetParameter {
  /**
   * <p>An identifier for the string parameter that is created in the dataset.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the string parameter that is created in the dataset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value type of the dataset parameter. Valid values are <code>single value</code> or <code>multi value</code>.</p>
   * @public
   */
  ValueType: DatasetParameterValueType | undefined;

  /**
   * <p>A list of default values for a given string dataset parameter type. This structure only accepts static values.</p>
   * @public
   */
  DefaultValues?: StringDatasetParameterDefaultValues;
}

/**
 * <p>A parameter that is created in a dataset. The parameter can be a string, integer, decimal, or datetime data type.</p>
 * @public
 */
export interface DatasetParameter {
  /**
   * <p>A string parameter that is created in the dataset.</p>
   * @public
   */
  StringDatasetParameter?: StringDatasetParameter;

  /**
   * <p>A decimal parameter that is created in the dataset.</p>
   * @public
   */
  DecimalDatasetParameter?: DecimalDatasetParameter;

  /**
   * <p>An integer parameter that is created in the dataset.</p>
   * @public
   */
  IntegerDatasetParameter?: IntegerDatasetParameter;

  /**
   * <p>A date time parameter that is created in the dataset.</p>
   * @public
   */
  DateTimeDatasetParameter?: DateTimeDatasetParameter;
}

/**
 * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
 * @public
 */
export interface DataSetUsageConfiguration {
  /**
   * <p>An option that controls whether a child dataset of a direct query can use this dataset as a source.</p>
   * @public
   */
  DisableUseAsDirectQuerySource?: boolean;

  /**
   * <p>An option that controls whether a child dataset that's stored in QuickSight can use this dataset as a source.</p>
   * @public
   */
  DisableUseAsImportedSource?: boolean;
}

/**
 * <p>A FieldFolder element is a folder that contains fields and nested subfolders.</p>
 * @public
 */
export interface FieldFolder {
  /**
   * <p>The description for a field folder.</p>
   * @public
   */
  description?: string;

  /**
   * <p>A folder has a list of columns. A column can only be in one folder.</p>
   * @public
   */
  columns?: string[];
}

/**
 * @public
 * @enum
 */
export const DataSetImportMode = {
  DIRECT_QUERY: "DIRECT_QUERY",
  SPICE: "SPICE",
} as const;

/**
 * @public
 */
export type DataSetImportMode = (typeof DataSetImportMode)[keyof typeof DataSetImportMode];

/**
 * <p>A transform operation that filters rows based on a condition.</p>
 * @public
 */
export interface FilterOperation {
  /**
   * <p>An expression that must evaluate to a Boolean value. Rows for which the expression
   *             evaluates to true are kept in the dataset.</p>
   * @public
   */
  ConditionExpression: string | undefined;
}

/**
 * <p>The configuration that overrides the existing default values for a dataset parameter that is inherited from another dataset.</p>
 * @public
 */
export interface NewDefaultValues {
  /**
   * <p>A list of static default values for a given string parameter.</p>
   * @public
   */
  StringStaticValues?: string[];

  /**
   * <p>A list of static default values for a given decimal parameter.</p>
   * @public
   */
  DecimalStaticValues?: number[];

  /**
   * <p>A list of static default values for a given date time parameter.</p>
   * @public
   */
  DateTimeStaticValues?: Date[];

  /**
   * <p>A list of static default values for a given integer parameter.</p>
   * @public
   */
  IntegerStaticValues?: number[];
}

/**
 * <p>A transform operation that overrides the dataset parameter values that are defined in another dataset.</p>
 * @public
 */
export interface OverrideDatasetParameterOperation {
  /**
   * <p>The name of the parameter to be overridden with different values.</p>
   * @public
   */
  ParameterName: string | undefined;

  /**
   * <p>The new name for the parameter.</p>
   * @public
   */
  NewParameterName?: string;

  /**
   * <p>The new default values for the parameter.</p>
   * @public
   */
  NewDefaultValues?: NewDefaultValues;
}

/**
 * <p>A transform operation that projects columns. Operations that come after a projection
 *             can only refer to projected columns.</p>
 * @public
 */
export interface ProjectOperation {
  /**
   * <p>Projected columns.</p>
   * @public
   */
  ProjectedColumns: string[] | undefined;
}

/**
 * <p>A transform operation that renames a column.</p>
 * @public
 */
export interface RenameColumnOperation {
  /**
   * <p>The name of the column to be renamed.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>The new name for the column.</p>
   * @public
   */
  NewColumnName: string | undefined;
}

/**
 * <p>A transform operation that tags a column with additional information.</p>
 * @public
 */
export interface TagColumnOperation {
  /**
   * <p>The column that this operation acts on.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>The dataset column tag, currently only used for geospatial type tagging.</p>
   *          <note>
   *             <p>This is not tags for the Amazon Web Services tagging feature.</p>
   *          </note>
   * @public
   */
  Tags: ColumnTag[] | undefined;
}

/**
 * <p>A transform operation that removes tags associated with a column.</p>
 * @public
 */
export interface UntagColumnOperation {
  /**
   * <p>The column that this operation acts on.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>The column tags to remove from this column.</p>
   * @public
   */
  TagNames: ColumnTagName[] | undefined;
}

/**
 * <p>A data transformation on a logical table. This is a variant type structure. For this
 *             structure to be valid, only one of the attributes can be non-null.</p>
 * @public
 */
export type TransformOperation =
  | TransformOperation.CastColumnTypeOperationMember
  | TransformOperation.CreateColumnsOperationMember
  | TransformOperation.FilterOperationMember
  | TransformOperation.OverrideDatasetParameterOperationMember
  | TransformOperation.ProjectOperationMember
  | TransformOperation.RenameColumnOperationMember
  | TransformOperation.TagColumnOperationMember
  | TransformOperation.UntagColumnOperationMember
  | TransformOperation.$UnknownMember;

/**
 * @public
 */
export namespace TransformOperation {
  /**
   * <p>An operation that projects columns. Operations that come after a projection can only
   *             refer to projected columns.</p>
   * @public
   */
  export interface ProjectOperationMember {
    ProjectOperation: ProjectOperation;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that filters rows based on some condition.</p>
   * @public
   */
  export interface FilterOperationMember {
    ProjectOperation?: never;
    FilterOperation: FilterOperation;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that creates calculated columns. Columns created in one such operation
   *             form a lexical closure.</p>
   * @public
   */
  export interface CreateColumnsOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation: CreateColumnsOperation;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that renames a column.</p>
   * @public
   */
  export interface RenameColumnOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation: RenameColumnOperation;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>A transform operation that casts a column to a different type.</p>
   * @public
   */
  export interface CastColumnTypeOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation: CastColumnTypeOperation;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that tags a column with additional information.</p>
   * @public
   */
  export interface TagColumnOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation: TagColumnOperation;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>A transform operation that removes tags associated with a column.</p>
   * @public
   */
  export interface UntagColumnOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation: UntagColumnOperation;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>A transform operation that overrides the dataset parameter values that are defined in another dataset.</p>
   * @public
   */
  export interface OverrideDatasetParameterOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation: OverrideDatasetParameterOperation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ProjectOperation: (value: ProjectOperation) => T;
    FilterOperation: (value: FilterOperation) => T;
    CreateColumnsOperation: (value: CreateColumnsOperation) => T;
    RenameColumnOperation: (value: RenameColumnOperation) => T;
    CastColumnTypeOperation: (value: CastColumnTypeOperation) => T;
    TagColumnOperation: (value: TagColumnOperation) => T;
    UntagColumnOperation: (value: UntagColumnOperation) => T;
    OverrideDatasetParameterOperation: (value: OverrideDatasetParameterOperation) => T;
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
    if (value.UntagColumnOperation !== undefined) return visitor.UntagColumnOperation(value.UntagColumnOperation);
    if (value.OverrideDatasetParameterOperation !== undefined)
      return visitor.OverrideDatasetParameterOperation(value.OverrideDatasetParameterOperation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Properties associated with the columns participating in a join.</p>
 * @public
 */
export interface JoinKeyProperties {
  /**
   * <p>A value that indicates that a row in a table is uniquely identified by the columns in
   *             a join key. This is used by Amazon QuickSight to optimize query performance.</p>
   * @public
   */
  UniqueKey?: boolean;
}

/**
 * @public
 * @enum
 */
export const JoinType = {
  INNER: "INNER",
  LEFT: "LEFT",
  OUTER: "OUTER",
  RIGHT: "RIGHT",
} as const;

/**
 * @public
 */
export type JoinType = (typeof JoinType)[keyof typeof JoinType];

/**
 * <p>The instructions associated with a join. </p>
 * @public
 */
export interface JoinInstruction {
  /**
   * <p>The operand on the left side of a join.</p>
   * @public
   */
  LeftOperand: string | undefined;

  /**
   * <p>The operand on the right side of a join.</p>
   * @public
   */
  RightOperand: string | undefined;

  /**
   * <p>Join key properties of the left operand.</p>
   * @public
   */
  LeftJoinKeyProperties?: JoinKeyProperties;

  /**
   * <p>Join key properties of the right operand.</p>
   * @public
   */
  RightJoinKeyProperties?: JoinKeyProperties;

  /**
   * <p>The type of join that it is.</p>
   * @public
   */
  Type: JoinType | undefined;

  /**
   * <p>The join instructions provided in the <code>ON</code> clause of a join.</p>
   * @public
   */
  OnClause: string | undefined;
}

/**
 * <p>Information about the source of a logical table. This is a variant type structure. For
 *             this structure to be valid, only one of the attributes can be non-null.</p>
 * @public
 */
export interface LogicalTableSource {
  /**
   * <p>Specifies the result of a join of two logical tables.</p>
   * @public
   */
  JoinInstruction?: JoinInstruction;

  /**
   * <p>Physical table ID.</p>
   * @public
   */
  PhysicalTableId?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the parent dataset.</p>
   * @public
   */
  DataSetArn?: string;
}

/**
 * <p>A <i>logical table</i> is a unit that joins and that data
 *             transformations operate on. A logical table has a source, which can be either a physical
 *             table or result of a join. When a logical table points to a physical table, the logical
 *             table acts as a mutable copy of that physical table through transform operations.</p>
 * @public
 */
export interface LogicalTable {
  /**
   * <p>A display name for the logical table.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>Transform operations that act on this logical table. For this structure to be valid, only one of the attributes can be non-null. </p>
   * @public
   */
  DataTransforms?: TransformOperation[];

  /**
   * <p>Source of this logical table.</p>
   * @public
   */
  Source: LogicalTableSource | undefined;
}

/**
 * @public
 * @enum
 */
export const InputColumnDataType = {
  BIT: "BIT",
  BOOLEAN: "BOOLEAN",
  DATETIME: "DATETIME",
  DECIMAL: "DECIMAL",
  INTEGER: "INTEGER",
  JSON: "JSON",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type InputColumnDataType = (typeof InputColumnDataType)[keyof typeof InputColumnDataType];

/**
 * <p>Metadata for a column that is used as the input of a transform operation.</p>
 * @public
 */
export interface InputColumn {
  /**
   * <p>The name of this column in the underlying data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The data type of the column.</p>
   * @public
   */
  Type: InputColumnDataType | undefined;

  /**
   * <p>The sub data type of the column. Sub types are only available for decimal columns that are part of a SPICE dataset.</p>
   * @public
   */
  SubType?: ColumnDataSubType;
}

/**
 * <p>A physical table type built from the results of the custom SQL query.</p>
 * @public
 */
export interface CustomSql {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * <p>A display name for the SQL query result.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The SQL query.</p>
   * @public
   */
  SqlQuery: string | undefined;

  /**
   * <p>The column schema from the SQL query result set.</p>
   * @public
   */
  Columns?: InputColumn[];
}

/**
 * <p>A physical table type for relational data sources.</p>
 * @public
 */
export interface RelationalTable {
  /**
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * <p>The catalog associated with a table.</p>
   * @public
   */
  Catalog?: string;

  /**
   * <p>The schema name. This name applies to certain relational database engines.</p>
   * @public
   */
  Schema?: string;

  /**
   * <p>The name of the relational table.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The column schema of the table.</p>
   * @public
   */
  InputColumns: InputColumn[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FileFormat = {
  CLF: "CLF",
  CSV: "CSV",
  ELF: "ELF",
  JSON: "JSON",
  TSV: "TSV",
  XLSX: "XLSX",
} as const;

/**
 * @public
 */
export type FileFormat = (typeof FileFormat)[keyof typeof FileFormat];

/**
 * @public
 * @enum
 */
export const TextQualifier = {
  DOUBLE_QUOTE: "DOUBLE_QUOTE",
  SINGLE_QUOTE: "SINGLE_QUOTE",
} as const;

/**
 * @public
 */
export type TextQualifier = (typeof TextQualifier)[keyof typeof TextQualifier];

/**
 * <p>Information about the format for a source file or files.</p>
 * @public
 */
export interface UploadSettings {
  /**
   * <p>File format.</p>
   * @public
   */
  Format?: FileFormat;

  /**
   * <p>A row number to start reading data from.</p>
   * @public
   */
  StartFromRow?: number;

  /**
   * <p>Whether the file has a header row, or the files each have a header row.</p>
   * @public
   */
  ContainsHeader?: boolean;

  /**
   * <p>Text qualifier.</p>
   * @public
   */
  TextQualifier?: TextQualifier;

  /**
   * <p>The delimiter between values in the file.</p>
   * @public
   */
  Delimiter?: string;
}

/**
 * <p>A physical table type for an S3 data source.</p>
 * @public
 */
export interface S3Source {
  /**
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * <p>Information about the format for the S3 source file or files.</p>
   * @public
   */
  UploadSettings?: UploadSettings;

  /**
   * <p>A physical table type for an S3 data source.</p>
   *          <note>
   *             <p>For files that aren't JSON, only <code>STRING</code> data types are supported in input columns.</p>
   *          </note>
   * @public
   */
  InputColumns: InputColumn[] | undefined;
}

/**
 * <p>A view of a data source that contains information about the shape of the data in the
 *             underlying source. This is a variant type structure. For this structure to be valid,
 *             only one of the attributes can be non-null.</p>
 * @public
 */
export type PhysicalTable =
  | PhysicalTable.CustomSqlMember
  | PhysicalTable.RelationalTableMember
  | PhysicalTable.S3SourceMember
  | PhysicalTable.$UnknownMember;

/**
 * @public
 */
export namespace PhysicalTable {
  /**
   * <p>A physical table type for relational data sources.</p>
   * @public
   */
  export interface RelationalTableMember {
    RelationalTable: RelationalTable;
    CustomSql?: never;
    S3Source?: never;
    $unknown?: never;
  }

  /**
   * <p>A physical table type built from the results of the custom SQL query.</p>
   * @public
   */
  export interface CustomSqlMember {
    RelationalTable?: never;
    CustomSql: CustomSql;
    S3Source?: never;
    $unknown?: never;
  }

  /**
   * <p>A physical table type for as S3 data source.</p>
   * @public
   */
  export interface S3SourceMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source: S3Source;
    $unknown?: never;
  }

  /**
   * @public
   */
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
}

/**
 * @public
 * @enum
 */
export const RowLevelPermissionFormatVersion = {
  VERSION_1: "VERSION_1",
  VERSION_2: "VERSION_2",
} as const;

/**
 * @public
 */
export type RowLevelPermissionFormatVersion =
  (typeof RowLevelPermissionFormatVersion)[keyof typeof RowLevelPermissionFormatVersion];

/**
 * @public
 * @enum
 */
export const RowLevelPermissionPolicy = {
  DENY_ACCESS: "DENY_ACCESS",
  GRANT_ACCESS: "GRANT_ACCESS",
} as const;

/**
 * @public
 */
export type RowLevelPermissionPolicy = (typeof RowLevelPermissionPolicy)[keyof typeof RowLevelPermissionPolicy];

/**
 * @public
 * @enum
 */
export const Status = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * <p>Information about a dataset that contains permissions for row-level security (RLS).
 *             The permissions dataset maps fields to users or groups. For more information, see
 *             <a href="https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html">Using Row-Level Security (RLS) to Restrict Access to a Dataset</a> in the <i>Amazon QuickSight User
 *                 Guide</i>.</p>
 *          <p>The option to deny permissions by setting <code>PermissionPolicy</code> to <code>DENY_ACCESS</code> is
 *             not supported for new RLS datasets.</p>
 * @public
 */
export interface RowLevelPermissionDataSet {
  /**
   * <p>The namespace associated with the dataset that contains permissions for RLS.</p>
   * @public
   */
  Namespace?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The type of permissions to use when interpreting the permissions for RLS. <code>DENY_ACCESS</code>
   *         is included for backward compatibility only.</p>
   * @public
   */
  PermissionPolicy: RowLevelPermissionPolicy | undefined;

  /**
   * <p>The user or group rules associated with the dataset that contains permissions for RLS.</p>
   *          <p>By default, <code>FormatVersion</code> is <code>VERSION_1</code>. When <code>FormatVersion</code> is <code>VERSION_1</code>, <code>UserName</code> and <code>GroupName</code> are required. When <code>FormatVersion</code> is <code>VERSION_2</code>, <code>UserARN</code> and <code>GroupARN</code> are required, and <code>Namespace</code> must not exist.</p>
   * @public
   */
  FormatVersion?: RowLevelPermissionFormatVersion;

  /**
   * <p>The status of the row-level security permission dataset. If enabled, the status is <code>ENABLED</code>. If disabled, the status is <code>DISABLED</code>.</p>
   * @public
   */
  Status?: Status;
}

/**
 * <p>A set of rules associated with a tag.</p>
 * @public
 */
export interface RowLevelPermissionTagRule {
  /**
   * <p>The unique key for a tag.</p>
   * @public
   */
  TagKey: string | undefined;

  /**
   * <p>The column name that a tag key is assigned to.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>A string that you want to use to delimit the values when you pass the values at run time. For example, you can delimit the values with a comma.</p>
   * @public
   */
  TagMultiValueDelimiter?: string;

  /**
   * <p>A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one. For example, you can use an asterisk as your match all value.</p>
   * @public
   */
  MatchAllValue?: string;
}

/**
 * <p>The configuration of tags on a dataset to set row-level security. </p>
 * @public
 */
export interface RowLevelPermissionTagConfiguration {
  /**
   * <p>The status of row-level security tags. If enabled, the status is <code>ENABLED</code>. If disabled, the status is <code>DISABLED</code>.</p>
   * @public
   */
  Status?: Status;

  /**
   * <p>A set of rules associated with row-level security, such as the tag names and columns that they are assigned to.</p>
   * @public
   */
  TagRules: RowLevelPermissionTagRule[] | undefined;

  /**
   * <p>A list of tag configuration rules to apply to a dataset. All tag configurations have the OR condition. Tags within each tile will be joined (AND). At least one rule in this structure must have all tag values assigned to it to apply Row-level security (RLS) to the dataset.</p>
   * @public
   */
  TagRuleConfigurations?: string[][];
}

/**
 * @public
 */
export interface CreateDataSetRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The display name for the dataset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   * @public
   */
  PhysicalTableMap: Record<string, PhysicalTable> | undefined;

  /**
   * <p>Configures the combination and transformation of the data from the physical tables.</p>
   * @public
   */
  LogicalTableMap?: Record<string, LogicalTable>;

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   * @public
   */
  ImportMode: DataSetImportMode | undefined;

  /**
   * <p>Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   * @public
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   * @public
   */
  FieldFolders?: Record<string, FieldFolder>;

  /**
   * <p>A list of resource permissions on the dataset.</p>
   * @public
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The row-level security configuration for the data that you want to create.</p>
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * <p>The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only.</p>
   * @public
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;

  /**
   * <p>A set of one or more definitions of a <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html">ColumnLevelPermissionRule</a>
   *             </code>.</p>
   * @public
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[];

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
   * @public
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration;

  /**
   * <p>The parameter declarations of the dataset.</p>
   * @public
   */
  DatasetParameters?: DatasetParameter[];

  /**
   * <p>When you create the dataset, Amazon QuickSight adds the dataset to these folders.</p>
   * @public
   */
  FolderArns?: string[];
}

/**
 * @public
 */
export interface CreateDataSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId?: string;

  /**
   * <p>The ARN for the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   * @public
   */
  IngestionArn?: string;

  /**
   * <p>The ID of the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   * @public
   */
  IngestionId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;
}

/**
 * <p>The combination of user name and password that are used as credentials.</p>
 * @public
 */
export interface CredentialPair {
  /**
   * <p>User name.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>Password.</p>
   * @public
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
   * @public
   */
  AlternateDataSourceParameters?: DataSourceParameters[];
}

/**
 * <p>Data source credentials. This is a variant type structure. For this structure to be
 *             valid, only one of the attributes can be non-null.</p>
 * @public
 */
export interface DataSourceCredentials {
  /**
   * <p>Credential pair. For more information, see
   *             <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CredentialPair.html">CredentialPair</a>
   *             </code>.</p>
   * @public
   */
  CredentialPair?: CredentialPair;

  /**
   * <p>The Amazon Resource Name (ARN) of a data source that has the credential pair that you
   *             want to use. When <code>CopySourceArn</code> is not null, the credential pair from the
   *             data source in the ARN is used as the credentials for the
   *             <code>DataSourceCredentials</code> structure.</p>
   * @public
   */
  CopySourceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>
   * @public
   */
  SecretArn?: string;
}

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  ADOBE_ANALYTICS: "ADOBE_ANALYTICS",
  AMAZON_ELASTICSEARCH: "AMAZON_ELASTICSEARCH",
  AMAZON_OPENSEARCH: "AMAZON_OPENSEARCH",
  ATHENA: "ATHENA",
  AURORA: "AURORA",
  AURORA_POSTGRESQL: "AURORA_POSTGRESQL",
  AWS_IOT_ANALYTICS: "AWS_IOT_ANALYTICS",
  BIGQUERY: "BIGQUERY",
  DATABRICKS: "DATABRICKS",
  EXASOL: "EXASOL",
  GITHUB: "GITHUB",
  JIRA: "JIRA",
  MARIADB: "MARIADB",
  MYSQL: "MYSQL",
  ORACLE: "ORACLE",
  POSTGRESQL: "POSTGRESQL",
  PRESTO: "PRESTO",
  REDSHIFT: "REDSHIFT",
  S3: "S3",
  SALESFORCE: "SALESFORCE",
  SERVICENOW: "SERVICENOW",
  SNOWFLAKE: "SNOWFLAKE",
  SPARK: "SPARK",
  SQLSERVER: "SQLSERVER",
  STARBURST: "STARBURST",
  TERADATA: "TERADATA",
  TIMESTREAM: "TIMESTREAM",
  TRINO: "TRINO",
  TWITTER: "TWITTER",
} as const;

/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

/**
 * @public
 */
export interface CreateDataSourceRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. </p>
   * @public
   */
  DataSourceId: string | undefined;

  /**
   * <p>A display name for the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of the data source. To return a
   * 			list of all data sources, use <code>ListDataSources</code>.</p>
   *          <p>Use <code>AMAZON_ELASTICSEARCH</code> for Amazon OpenSearch Service.</p>
   * @public
   */
  Type: DataSourceType | undefined;

  /**
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying source.</p>
   * @public
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * <p>The credentials Amazon QuickSight that uses to connect to your underlying source. Currently, only
   * 			credentials based on user name and password are supported.</p>
   * @public
   */
  Credentials?: DataSourceCredentials;

  /**
   * <p>A list of resource permissions on the data source.</p>
   * @public
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>Use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to
   * 			your underlying source.</p>
   * @public
   */
  VpcConnectionProperties?: VpcConnectionProperties;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying source.</p>
   * @public
   */
  SslProperties?: SslProperties;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>When you create the data source, Amazon QuickSight adds the data source to these folders.</p>
   * @public
   */
  FolderArns?: string[];
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSourceId?: string;

  /**
   * <p>The status of creating the data source.</p>
   * @public
   */
  CreationStatus?: ResourceStatus;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;
}

/**
 * @public
 * @enum
 */
export const FolderType = {
  RESTRICTED: "RESTRICTED",
  SHARED: "SHARED",
} as const;

/**
 * @public
 */
export type FolderType = (typeof FolderType)[keyof typeof FolderType];

/**
 * @public
 * @enum
 */
export const SharingModel = {
  ACCOUNT: "ACCOUNT",
  NAMESPACE: "NAMESPACE",
} as const;

/**
 * @public
 */
export type SharingModel = (typeof SharingModel)[keyof typeof SharingModel];

/**
 * @public
 */
export interface CreateFolderRequest {
  /**
   * <p>The ID for the Amazon Web Services account where you want to create the folder.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>The name of the folder.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The type of folder. By default, <code>folderType</code> is <code>SHARED</code>.</p>
   * @public
   */
  FolderType?: FolderType;

  /**
   * <p>The Amazon Resource Name (ARN) for the parent folder.</p>
   *          <p>
   *             <code>ParentFolderArn</code> can be null. An empty <code>parentFolderArn</code> creates a root-level folder.</p>
   * @public
   */
  ParentFolderArn?: string;

  /**
   * <p>A structure that describes the principals and the resource-level permissions of a folder.</p>
   *          <p>To specify no permissions, omit <code>Permissions</code>.</p>
   * @public
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>Tags for the folder.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>An optional parameter that determines the sharing scope of the folder. The default value for this parameter is <code>ACCOUNT</code>.</p>
   * @public
   */
  SharingModel?: SharingModel;
}

/**
 * @public
 */
export interface CreateFolderResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the newly created folder.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The folder ID for the newly created folder.</p>
   * @public
   */
  FolderId?: string;

  /**
   * <p>The request ID for the newly created folder.</p>
   * @public
   */
  RequestId?: string;
}

/**
 * @public
 * @enum
 */
export const MemberType = {
  ANALYSIS: "ANALYSIS",
  DASHBOARD: "DASHBOARD",
  DATASET: "DATASET",
  DATASOURCE: "DATASOURCE",
  TOPIC: "TOPIC",
} as const;

/**
 * @public
 */
export type MemberType = (typeof MemberType)[keyof typeof MemberType];

/**
 * @public
 */
export interface CreateFolderMembershipRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>The ID of the asset that you want to add to the folder.</p>
   * @public
   */
  MemberId: string | undefined;

  /**
   * <p>The member type of the asset that you want to add to a folder.</p>
   * @public
   */
  MemberType: MemberType | undefined;
}

/**
 * <p>An asset in a Amazon QuickSight folder, such as a dashboard, analysis, or dataset.</p>
 * @public
 */
export interface FolderMember {
  /**
   * <p>The ID of an asset in the folder.</p>
   * @public
   */
  MemberId?: string;

  /**
   * <p>The type of asset that it is.</p>
   * @public
   */
  MemberType?: MemberType;
}

/**
 * @public
 */
export interface CreateFolderMembershipResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;

  /**
   * <p>Information about the member in the folder.</p>
   * @public
   */
  FolderMember?: FolderMember;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;
}

/**
 * <p>The request object for this operation. </p>
 * @public
 */
export interface CreateGroupRequest {
  /**
   * <p>A name for the group that you want to create.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>A description for the group that you want to create.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want the group to be a part of.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * <p>A <i>group</i> in Amazon QuickSight consists of a set of users. You can
 *             use groups to make it easier to manage access and security. </p>
 * @public
 */
export interface Group {
  /**
   * <p>The Amazon Resource Name (ARN) for the group.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  GroupName?: string;

  /**
   * <p>The group description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The principal ID of the group.</p>
   * @public
   */
  PrincipalId?: string;
}

/**
 * <p>The response object for this operation.</p>
 * @public
 */
export interface CreateGroupResponse {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  Group?: Group;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;
}

/**
 * @public
 */
export interface CreateGroupMembershipRequest {
  /**
   * <p>The name of the user that you want to add to the group membership.</p>
   * @public
   */
  MemberName: string | undefined;

  /**
   * <p>The name of the group that you want to add the user to.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want the user to be a part of.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * <p>A member of an Amazon QuickSight group. Currently, group members must be users. Groups
 *             can't be members of another group. .</p>
 * @public
 */
export interface GroupMember {
  /**
   * <p>The Amazon Resource Name (ARN) for the group member (user).</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the group member (user).</p>
   * @public
   */
  MemberName?: string;
}

/**
 * @public
 */
export interface CreateGroupMembershipResponse {
  /**
   * <p>The group member.</p>
   * @public
   */
  GroupMember?: GroupMember;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;
}

/**
 * @public
 */
export interface CreateIAMPolicyAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you want to assign an IAM policy to Amazon QuickSight users or groups.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment, also called a rule.
   * 			The
   * 			name
   * 			must be unique within the
   * 			Amazon Web Services account.</p>
   * @public
   */
  AssignmentName: string | undefined;

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when
   * 					creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data
   * 					source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used
   * 					when creating the data source.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AssignmentStatus: AssignmentStatus | undefined;

  /**
   * <p>The ARN for the IAM policy to apply to the Amazon QuickSight users and
   * 			groups specified in this assignment.</p>
   * @public
   */
  PolicyArn?: string;

  /**
   * <p>The Amazon QuickSight users, groups, or both that you want to assign the policy
   * 			to.</p>
   * @public
   */
  Identities?: Record<string, string[]>;

  /**
   * <p>The namespace that contains the assignment.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface CreateIAMPolicyAssignmentResponse {
  /**
   * <p>The name of the assignment.
   * 			The
   * 			name must be unique within the Amazon Web Services account.</p>
   * @public
   */
  AssignmentName?: string;

  /**
   * <p>The ID for the assignment.</p>
   * @public
   */
  AssignmentId?: string;

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when
   * 					creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data
   * 					source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used
   * 					when creating the data source.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AssignmentStatus?: AssignmentStatus;

  /**
   * <p>The ARN for the IAM policy that is applied to the Amazon QuickSight
   * 			users and groups specified in this assignment.</p>
   * @public
   */
  PolicyArn?: string;

  /**
   * <p>The Amazon QuickSight users, groups, or both that the IAM policy is
   * 			assigned to.</p>
   * @public
   */
  Identities?: Record<string, string[]>;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;
}

/**
 * @public
 * @enum
 */
export const IngestionType = {
  FULL_REFRESH: "FULL_REFRESH",
  INCREMENTAL_REFRESH: "INCREMENTAL_REFRESH",
} as const;

/**
 * @public
 */
export type IngestionType = (typeof IngestionType)[keyof typeof IngestionType];

/**
 * @public
 */
export interface CreateIngestionRequest {
  /**
   * <p>The ID of the dataset used in the ingestion.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>An ID for the ingestion.</p>
   * @public
   */
  IngestionId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The type of ingestion that you want to create.</p>
   * @public
   */
  IngestionType?: IngestionType;
}

/**
 * @public
 * @enum
 */
export const IngestionStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INITIALIZED: "INITIALIZED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type IngestionStatus = (typeof IngestionStatus)[keyof typeof IngestionStatus];

/**
 * @public
 */
export interface CreateIngestionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the data ingestion.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>An ID for the ingestion.</p>
   * @public
   */
  IngestionId?: string;

  /**
   * <p>The ingestion status.</p>
   * @public
   */
  IngestionStatus?: IngestionStatus;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;
}

/**
 * @public
 * @enum
 */
export const IdentityStore = {
  QUICKSIGHT: "QUICKSIGHT",
} as const;

/**
 * @public
 */
export type IdentityStore = (typeof IdentityStore)[keyof typeof IdentityStore];

/**
 * @public
 */
export interface CreateNamespaceRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to create the Amazon QuickSight namespace in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name that you want to use to describe the new namespace.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>Specifies the type of your user identity directory. Currently, this supports users
   *             with an identity type of <code>QUICKSIGHT</code>.</p>
   * @public
   */
  IdentityStore: IdentityStore | undefined;

  /**
   * <p>The tags that you want to associate with the namespace that you're creating.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const NamespaceStatus = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  NON_RETRYABLE_FAILURE: "NON_RETRYABLE_FAILURE",
  RETRYABLE_FAILURE: "RETRYABLE_FAILURE",
} as const;

/**
 * @public
 */
export type NamespaceStatus = (typeof NamespaceStatus)[keyof typeof NamespaceStatus];

/**
 * @public
 */
export interface CreateNamespaceResponse {
  /**
   * <p>The ARN of the Amazon QuickSight namespace you created. </p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the new namespace that you created.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The Amazon Web Services Region; that you want to use for the free SPICE capacity for the new namespace.
   *             This is set to the region that you run CreateNamespace in. </p>
   * @public
   */
  CapacityRegion?: string;

  /**
   * <p>The status of the creation of the namespace. This is an asynchronous process. A status
   *             of <code>CREATED</code> means that your namespace is ready to use. If an error occurs,
   *             it indicates if the process is <code>retryable</code> or <code>non-retryable</code>. In
   *             the case of a non-retryable error, refer to the error message for follow-up
   *             tasks.</p>
   * @public
   */
  CreationStatus?: NamespaceStatus;

  /**
   * <p>Specifies the type of your user identity directory. Currently, this supports users
   *             with an identity type of <code>QUICKSIGHT</code>.</p>
   * @public
   */
  IdentityStore?: IdentityStore;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;
}

/**
 * @public
 * @enum
 */
export const RefreshInterval = {
  DAILY: "DAILY",
  HOURLY: "HOURLY",
  MINUTE15: "MINUTE15",
  MINUTE30: "MINUTE30",
  MONTHLY: "MONTHLY",
  WEEKLY: "WEEKLY",
} as const;

/**
 * @public
 */
export type RefreshInterval = (typeof RefreshInterval)[keyof typeof RefreshInterval];

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;

/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * <p>The refresh on entity for weekly or monthly schedules.</p>
 * @public
 */
export interface ScheduleRefreshOnEntity {
  /**
   * <p>The day of the week that you want to schedule a refresh on.</p>
   * @public
   */
  DayOfWeek?: DayOfWeek;

  /**
   * <p>The day of the month that you want to schedule refresh on.</p>
   * @public
   */
  DayOfMonth?: string;
}

/**
 * <p>Specifies the interval between each scheduled refresh of a dataset.</p>
 * @public
 */
export interface RefreshFrequency {
  /**
   * <p>The interval between scheduled refreshes. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MINUTE15</code>: The dataset refreshes every 15 minutes. This value is only supported for incremental refreshes. This interval can only be used for one schedule per dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MINUTE30</code>:The dataset refreshes every 30 minutes. This value is only supported for incremental refreshes. This interval can only be used for one schedule per dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOURLY</code>: The dataset refreshes every hour. This interval can only be used for one schedule per dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DAILY</code>: The dataset refreshes every day.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WEEKLY</code>: The dataset refreshes every week.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MONTHLY</code>: The dataset refreshes every month.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Interval: RefreshInterval | undefined;

  /**
   * <p>The day of the week that you want to schedule the refresh on. This value is required for weekly and monthly refresh intervals.</p>
   * @public
   */
  RefreshOnDay?: ScheduleRefreshOnEntity;

  /**
   * <p>The timezone that you want the refresh schedule to use. The timezone ID must match a corresponding ID found on <code>java.util.time.getAvailableIDs()</code>.</p>
   * @public
   */
  Timezone?: string;

  /**
   * <p>The time of day that you want the datset to refresh. This value is expressed in HH:MM format. This field is not required for schedules that refresh hourly.</p>
   * @public
   */
  TimeOfTheDay?: string;
}

/**
 * <p>The refresh schedule of a dataset.</p>
 * @public
 */
export interface RefreshSchedule {
  /**
   * <p>An identifier for the refresh schedule.</p>
   * @public
   */
  ScheduleId: string | undefined;

  /**
   * <p>The frequency for the refresh schedule.</p>
   * @public
   */
  ScheduleFrequency: RefreshFrequency | undefined;

  /**
   * <p>Time after which the refresh schedule can be started, expressed in <code>YYYY-MM-DDTHH:MM:SS</code> format.</p>
   * @public
   */
  StartAfterDateTime?: Date;

  /**
   * <p>The type of refresh that a datset undergoes. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FULL_REFRESH</code>: A complete refresh of a dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INCREMENTAL_REFRESH</code>: A partial refresh of some rows of a dataset, based on the time window specified.</p>
   *             </li>
   *          </ul>
   *          <p>For more information on full and incremental refreshes, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/refreshing-imported-data.html">Refreshing SPICE data</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  RefreshType: IngestionType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the refresh schedule.</p>
   * @public
   */
  Arn?: string;
}

/**
 * @public
 */
export interface CreateRefreshScheduleRequest {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The refresh schedule.</p>
   * @public
   */
  Schedule: RefreshSchedule | undefined;
}

/**
 * @public
 */
export interface CreateRefreshScheduleResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;

  /**
   * <p>The ID of the refresh schedule.</p>
   * @public
   */
  ScheduleId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the refresh schedule.</p>
   * @public
   */
  Arn?: string;
}

/**
 * @public
 * @enum
 */
export const Role = {
  ADMIN: "ADMIN",
  AUTHOR: "AUTHOR",
  READER: "READER",
} as const;

/**
 * @public
 */
export type Role = (typeof Role)[keyof typeof Role];

/**
 * @public
 */
export interface CreateRoleMembershipRequest {
  /**
   * <p>The name of the group that you want to add to the role.</p>
   * @public
   */
  MemberName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that the role belongs to.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>The role that you want to add a group to.</p>
   * @public
   */
  Role: Role | undefined;
}

/**
 * @public
 */
export interface CreateRoleMembershipResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;
}

/**
 * <p>Dataset schema.</p>
 * @public
 */
export interface DataSetSchema {
  /**
   * <p>A structure containing the list of column schemas.</p>
   * @public
   */
  ColumnSchemaList?: ColumnSchema[];
}

/**
 * <p>Dataset configuration.</p>
 * @public
 */
export interface DataSetConfiguration {
  /**
   * <p>Placeholder.</p>
   * @public
   */
  Placeholder?: string;

  /**
   * <p>Dataset schema.</p>
   * @public
   */
  DataSetSchema?: DataSetSchema;

  /**
   * <p>A structure containing the list of column group schemas.</p>
   * @public
   */
  ColumnGroupSchemaList?: ColumnGroupSchema[];
}

/**
 * <p>The detailed definition of a template.</p>
 * @public
 */
export interface TemplateVersionDefinition {
  /**
   * <p>An array of dataset configurations. These configurations define the required columns for each dataset used within a template.</p>
   * @public
   */
  DataSetConfigurations: DataSetConfiguration[] | undefined;

  /**
   * <p>An array of sheet definitions for a template.</p>
   * @public
   */
  Sheets?: SheetDefinition[];

  /**
   * <p>An array of calculated field definitions for the template.</p>
   * @public
   */
  CalculatedFields?: CalculatedField[];

  /**
   * <p>An array of parameter declarations for a template.</p>
   *          <p>
   *             <i>Parameters</i> are named variables that can transfer a value for use by an action or an object.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon QuickSight</a> in the
   *             <i>Amazon QuickSight User Guide</i>.
   *         </p>
   * @public
   */
  ParameterDeclarations?: ParameterDeclaration[];

  /**
   * <p>Filter definitions for a template.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/filtering-visual-data.html">Filtering Data</a> in the <i>Amazon QuickSight User Guide</i>.
   *         </p>
   * @public
   */
  FilterGroups?: FilterGroup[];

  /**
   * <p> An array of template-level column
   *             configurations. Column configurations are used to set default formatting for a column that's used throughout a template. </p>
   * @public
   */
  ColumnConfigurations?: ColumnConfiguration[];

  /**
   * <p>The configuration for default analysis settings.</p>
   * @public
   */
  AnalysisDefaults?: AnalysisDefaults;

  /**
   * <p>An array of option definitions for a template.</p>
   * @public
   */
  Options?: AssetOptions;
}

/**
 * <p>The source analysis of the template.</p>
 * @public
 */
export interface TemplateSourceAnalysis {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A structure containing information about the dataset references used as placeholders
   *             in the template.</p>
   * @public
   */
  DataSetReferences: DataSetReference[] | undefined;
}

/**
 * <p>The source template of the template.</p>
 * @public
 */
export interface TemplateSourceTemplate {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>The source entity of the template.</p>
 * @public
 */
export interface TemplateSourceEntity {
  /**
   * <p>The source analysis, if it is based on an analysis.</p>
   * @public
   */
  SourceAnalysis?: TemplateSourceAnalysis;

  /**
   * <p>The source template, if it is based on an template.</p>
   * @public
   */
  SourceTemplate?: TemplateSourceTemplate;
}

/**
 * @public
 */
export interface CreateTemplateRequest {
  /**
   * <p>The ID for the Amazon Web Services account that the group is in. You use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template that you want to create. This template is unique per Amazon Web Services Region; in
   * 			each Amazon Web Services account.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>A display name for the template.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A list of resource permissions to be set on the template. </p>
   * @public
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The entity that you are using as a source when you create the template. In
   * 			<code>SourceEntity</code>, you specify the type of object you're using as source:
   * 			<code>SourceTemplate</code> for a template or <code>SourceAnalysis</code> for an
   * 			analysis. Both of these require an Amazon Resource Name (ARN). For
   * 			<code>SourceTemplate</code>, specify the ARN of the source template. For
   * 			<code>SourceAnalysis</code>, specify the ARN of the source analysis. The <code>SourceTemplate</code>
   * 			ARN can contain any Amazon Web Services account and any Amazon QuickSight-supported Amazon Web Services Region. </p>
   *          <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> or
   * 			<code>SourceAnalysis</code> to list the replacement datasets for the placeholders listed
   * 			in the original. The schema in each dataset must match its placeholder. </p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   * 			order for the request to be valid.</p>
   * @public
   */
  SourceEntity?: TemplateSourceEntity;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>A description of the current template version being created. This API operation creates the
   * 			first version of the template. Every time <code>UpdateTemplate</code> is called, a new
   * 			version is created. Each version of the template maintains a description of the version
   * 			in the <code>VersionDescription</code> field.</p>
   * @public
   */
  VersionDescription?: string;

  /**
   * <p>The definition of a template.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   * 			order for the request to be valid.</p>
   * @public
   */
  Definition?: TemplateVersionDefinition;

  /**
   * <p>TThe option to relax the validation needed to create a template with definition objects. This skips the validation step for specific errors.</p>
   * @public
   */
  ValidationStrategy?: ValidationStrategy;
}

/**
 * @public
 */
export interface CreateTemplateResponse {
  /**
   * <p>The ARN for the template.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ARN for the template, including the version information of
   * 			the first version.</p>
   * @public
   */
  VersionArn?: string;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  TemplateId?: string;

  /**
   * <p>The template creation status.</p>
   * @public
   */
  CreationStatus?: ResourceStatus;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface CreateTemplateAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template that you creating an alias for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>The name that you want to give to the template alias that you're creating. Don't start the
   * 			alias name with the <code>$</code> character. Alias names that start with <code>$</code>
   * 			are reserved by Amazon QuickSight. </p>
   * @public
   */
  AliasName: string | undefined;

  /**
   * <p>The version number of the template.</p>
   * @public
   */
  TemplateVersionNumber: number | undefined;
}

/**
 * <p>The template alias.</p>
 * @public
 */
export interface TemplateAlias {
  /**
   * <p>The display name of the template alias.</p>
   * @public
   */
  AliasName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template alias.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The version number of the template alias.</p>
   * @public
   */
  TemplateVersionNumber?: number;
}

/**
 * @public
 */
export interface CreateTemplateAliasResponse {
  /**
   * <p>Information about the template alias.</p>
   * @public
   */
  TemplateAlias?: TemplateAlias;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;
}

/**
 * <p>The theme colors that are used for data colors in charts. The colors description is a
 *             hexadecimal color code that consists of six alphanumerical characters, prefixed with
 *                 <code>#</code>, for example #37BFF5. </p>
 * @public
 */
export interface DataColorPalette {
  /**
   * <p>The hexadecimal codes for the colors.</p>
   * @public
   */
  Colors?: string[];

  /**
   * <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>
   * @public
   */
  MinMaxGradient?: string[];

  /**
   * <p>The hexadecimal code of a color that applies to charts where a lack of data is
   *             highlighted.</p>
   * @public
   */
  EmptyFillColor?: string;
}

/**
 * <p>Display options related to tiles on a sheet.</p>
 * @public
 */
export interface TileStyle {
  /**
   * <p>The border around a tile.</p>
   * @public
   */
  Border?: BorderStyle;
}

/**
 * <p>The display options for gutter spacing between tiles on a sheet.</p>
 * @public
 */
export interface GutterStyle {
  /**
   * <p>This Boolean value controls whether to display a gutter space between sheet tiles.
   *         </p>
   * @public
   */
  Show?: boolean;
}

/**
 * <p>The display options for margins around the outside edge of sheets.</p>
 * @public
 */
export interface MarginStyle {
  /**
   * <p>This Boolean value controls whether to display sheet margins.</p>
   * @public
   */
  Show?: boolean;
}

/**
 * <p>The display options for the layout of tiles on a sheet.</p>
 * @public
 */
export interface TileLayoutStyle {
  /**
   * <p>The gutter settings that apply between tiles. </p>
   * @public
   */
  Gutter?: GutterStyle;

  /**
   * <p>The margin settings that apply around the outside edge of sheets.</p>
   * @public
   */
  Margin?: MarginStyle;
}

/**
 * <p>The theme display options for sheets. </p>
 * @public
 */
export interface SheetStyle {
  /**
   * <p>The display options for tiles.</p>
   * @public
   */
  Tile?: TileStyle;

  /**
   * <p>The layout options for tiles.</p>
   * @public
   */
  TileLayout?: TileLayoutStyle;
}

/**
 * <p>Determines the font settings.</p>
 * @public
 */
export interface Font {
  /**
   * <p>Determines the font family settings.</p>
   * @public
   */
  FontFamily?: string;
}

/**
 * <p>Determines the typography options.</p>
 * @public
 */
export interface Typography {
  /**
   * <p>Determines the list of font families.</p>
   * @public
   */
  FontFamilies?: Font[];
}

/**
 * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
 *             description is a hexadecimal color code that consists of six alphanumerical characters,
 *             prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
 *                 Guide.</i>
 *          </p>
 * @public
 */
export interface UIColorPalette {
  /**
   * <p>The color of text and other foreground elements that appear over the primary
   *             background regions, such as grid lines, borders, table banding, icons, and so on.</p>
   * @public
   */
  PrimaryForeground?: string;

  /**
   * <p>The background color that applies to visuals and other high emphasis UI.</p>
   * @public
   */
  PrimaryBackground?: string;

  /**
   * <p>The foreground color that applies to any sheet title, sheet control text, or UI that
   *             appears over the secondary background.</p>
   * @public
   */
  SecondaryForeground?: string;

  /**
   * <p>The background color that applies to the sheet background and sheet controls.</p>
   * @public
   */
  SecondaryBackground?: string;

  /**
   * <p>This color is that applies to selected states and buttons.</p>
   * @public
   */
  Accent?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             accent color.</p>
   * @public
   */
  AccentForeground?: string;

  /**
   * <p>The color that applies to error messages.</p>
   * @public
   */
  Danger?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             error color.</p>
   * @public
   */
  DangerForeground?: string;

  /**
   * <p>This color that applies to warning and informational messages.</p>
   * @public
   */
  Warning?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             warning color.</p>
   * @public
   */
  WarningForeground?: string;

  /**
   * <p>The color that applies to success messages, for example the check mark for a
   *             successful download.</p>
   * @public
   */
  Success?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             success color.</p>
   * @public
   */
  SuccessForeground?: string;

  /**
   * <p>The color that applies to the names of fields that are identified as
   *             dimensions.</p>
   * @public
   */
  Dimension?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             dimension color.</p>
   * @public
   */
  DimensionForeground?: string;

  /**
   * <p>The color that applies to the names of fields that are identified as measures.</p>
   * @public
   */
  Measure?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             measure color.</p>
   * @public
   */
  MeasureForeground?: string;
}

/**
 * <p>The theme configuration. This configuration contains all of the display properties for
 *             a theme.</p>
 * @public
 */
export interface ThemeConfiguration {
  /**
   * <p>Color properties that apply to chart data colors.</p>
   * @public
   */
  DataColorPalette?: DataColorPalette;

  /**
   * <p>Color properties that apply to the UI and to charts, excluding the colors that apply
   *             to data. </p>
   * @public
   */
  UIColorPalette?: UIColorPalette;

  /**
   * <p>Display options related to sheets.</p>
   * @public
   */
  Sheet?: SheetStyle;

  /**
   * <p>Determines the typography options.</p>
   * @public
   */
  Typography?: Typography;
}

/**
 * @public
 */
export interface CreateThemeRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you want to store the new theme. </p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme that you want to create. The theme ID is unique per Amazon Web Services Region in
   * 			each Amazon Web Services account.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>A display name for the theme.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the theme that a custom theme will inherit from. All themes inherit from one of
   * 			the starting themes defined by Amazon QuickSight. For a list of the starting themes, use
   * 				<code>ListThemes</code> or choose <b>Themes</b> from
   * 			within an analysis. </p>
   * @public
   */
  BaseThemeId: string | undefined;

  /**
   * <p>A description of the first version of the theme that you're creating. Every time
   * 				<code>UpdateTheme</code> is called, a new version is created. Each version of the
   * 			theme has a description of the version in the <code>VersionDescription</code>
   * 			field.</p>
   * @public
   */
  VersionDescription?: string;

  /**
   * <p>The theme configuration, which contains the theme display properties.</p>
   * @public
   */
  Configuration: ThemeConfiguration | undefined;

  /**
   * <p>A valid grouping of resource permissions to apply to the new theme.
   * 			</p>
   * @public
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>A map of the key-value pairs for the resource tag or tags that you want to add to the
   * 			resource.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateThemeResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the theme.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the new theme.</p>
   * @public
   */
  VersionArn?: string;

  /**
   * <p>The ID of the theme.</p>
   * @public
   */
  ThemeId?: string;

  /**
   * <p>The theme creation status.</p>
   * @public
   */
  CreationStatus?: ResourceStatus;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface CreateThemeAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme for the new theme alias.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme alias.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>The name that you want to give to the theme alias that you are creating. The
   * 			alias name can't begin with a <code>$</code>. Alias names that start with <code>$</code>
   * 			are reserved by Amazon QuickSight. </p>
   * @public
   */
  AliasName: string | undefined;

  /**
   * <p>The version number of the theme.</p>
   * @public
   */
  ThemeVersionNumber: number | undefined;
}

/**
 * <p>An alias for a theme.</p>
 * @public
 */
export interface ThemeAlias {
  /**
   * <p>The Amazon Resource Name (ARN) of the theme alias.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The display name of the theme alias.</p>
   * @public
   */
  AliasName?: string;

  /**
   * <p>The version number of the theme alias.</p>
   * @public
   */
  ThemeVersionNumber?: number;
}

/**
 * @public
 */
export interface CreateThemeAliasResponse {
  /**
   * <p>Information about the theme alias.</p>
   * @public
   */
  ThemeAlias?: ThemeAlias;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string;
}

/**
 * @public
 * @enum
 */
export const DefaultAggregation = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  DISTINCT_COUNT: "DISTINCT_COUNT",
  MAX: "MAX",
  MEDIAN: "MEDIAN",
  MIN: "MIN",
  STDEV: "STDEV",
  STDEVP: "STDEVP",
  SUM: "SUM",
  VAR: "VAR",
  VARP: "VARP",
} as const;

/**
 * @public
 */
export type DefaultAggregation = (typeof DefaultAggregation)[keyof typeof DefaultAggregation];

/**
 * @public
 * @enum
 */
export const DisplayFormat = {
  AUTO: "AUTO",
  CURRENCY: "CURRENCY",
  DATE: "DATE",
  NUMBER: "NUMBER",
  PERCENT: "PERCENT",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type DisplayFormat = (typeof DisplayFormat)[keyof typeof DisplayFormat];

/**
 * @public
 * @enum
 */
export const TopicNumericSeparatorSymbol = {
  COMMA: "COMMA",
  DOT: "DOT",
} as const;

/**
 * @public
 */
export type TopicNumericSeparatorSymbol =
  (typeof TopicNumericSeparatorSymbol)[keyof typeof TopicNumericSeparatorSymbol];

/**
 * <p>A structure that represents a negative format.</p>
 * @public
 */
export interface NegativeFormat {
  /**
   * <p>The prefix for a negative format.</p>
   * @public
   */
  Prefix?: string;

  /**
   * <p>The suffix for a negative format.</p>
   * @public
   */
  Suffix?: string;
}

/**
 * <p>A structure that represents additional options for display formatting.</p>
 * @public
 */
export interface DisplayFormatOptions {
  /**
   * <p>A Boolean value that indicates whether to use blank cell format.</p>
   * @public
   */
  UseBlankCellFormat?: boolean;

  /**
   * <p>Determines the blank cell format.</p>
   * @public
   */
  BlankCellFormat?: string;

  /**
   * <p>Determines the <code>DateTime</code> format.</p>
   * @public
   */
  DateFormat?: string;

  /**
   * <p>Determines the decimal separator.</p>
   * @public
   */
  DecimalSeparator?: TopicNumericSeparatorSymbol;

  /**
   * <p>Determines the grouping separator.</p>
   * @public
   */
  GroupingSeparator?: string;

  /**
   * <p>A Boolean value that indicates whether to use grouping.</p>
   * @public
   */
  UseGrouping?: boolean;

  /**
   * <p>Determines the number of fraction digits.</p>
   * @public
   */
  FractionDigits?: number;

  /**
   * <p>The prefix value for a display format.</p>
   * @public
   */
  Prefix?: string;

  /**
   * <p>The suffix value for a display format.</p>
   * @public
   */
  Suffix?: string;

  /**
   * <p>The unit scaler. Valid values for this structure are: <code>NONE</code>,
   *             <code>AUTO</code>, <code>THOUSANDS</code>, <code>MILLIONS</code>,
   *          <code>BILLIONS</code>,
   *          and <code>TRILLIONS</code>.</p>
   * @public
   */
  UnitScaler?: NumberScale;

  /**
   * <p>The negative format.</p>
   * @public
   */
  NegativeFormat?: NegativeFormat;

  /**
   * <p>The currency symbol, such as <code>USD</code>.</p>
   * @public
   */
  CurrencySymbol?: string;
}

/**
 * <p>A structure that represents a default formatting definition.</p>
 * @public
 */
export interface DefaultFormatting {
  /**
   * <p>The display format. Valid values for this structure are <code>AUTO</code>,
   *             <code>PERCENT</code>, <code>CURRENCY</code>, <code>NUMBER</code>, <code>DATE</code>, and
   *             <code>STRING</code>.</p>
   * @public
   */
  DisplayFormat?: DisplayFormat;

  /**
   * <p>The additional options for display formatting.</p>
   * @public
   */
  DisplayFormatOptions?: DisplayFormatOptions;
}

/**
 * @internal
 */
export const SnapshotJobS3ResultFilterSensitiveLog = (obj: SnapshotJobS3Result): any => ({
  ...obj,
  ...(obj.S3Uri && { S3Uri: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SnapshotJobResultFileGroupFilterSensitiveLog = (obj: SnapshotJobResultFileGroup): any => ({
  ...obj,
  ...(obj.S3Results && { S3Results: obj.S3Results.map((item) => SnapshotJobS3ResultFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const AnonymousUserSnapshotJobResultFilterSensitiveLog = (obj: AnonymousUserSnapshotJobResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetBundleImportJobDataSourceCredentialPairFilterSensitiveLog = (
  obj: AssetBundleImportJobDataSourceCredentialPair
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetBundleImportJobDataSourceCredentialsFilterSensitiveLog = (
  obj: AssetBundleImportJobDataSourceCredentials
): any => ({
  ...obj,
  ...(obj.CredentialPair && { CredentialPair: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssetBundleImportJobDataSourceOverrideParametersFilterSensitiveLog = (
  obj: AssetBundleImportJobDataSourceOverrideParameters
): any => ({
  ...obj,
  ...(obj.DataSourceParameters && { DataSourceParameters: obj.DataSourceParameters }),
  ...(obj.Credentials && { Credentials: AssetBundleImportJobDataSourceCredentialsFilterSensitiveLog(obj.Credentials) }),
});

/**
 * @internal
 */
export const AssetBundleImportJobOverrideParametersFilterSensitiveLog = (
  obj: AssetBundleImportJobOverrideParameters
): any => ({
  ...obj,
  ...(obj.DataSources && {
    DataSources: obj.DataSources.map((item) =>
      AssetBundleImportJobDataSourceOverrideParametersFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const AssetBundleImportSourceFilterSensitiveLog = (obj: AssetBundleImportSource): any => ({
  ...obj,
  ...(obj.Body && { Body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssetBundleImportSourceDescriptionFilterSensitiveLog = (obj: AssetBundleImportSourceDescription): any => ({
  ...obj,
  ...(obj.Body && { Body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CalculatedColumnFilterSensitiveLog = (obj: CalculatedColumn): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DateTimeParameterFilterSensitiveLog = (obj: DateTimeParameter): any => ({
  ...obj,
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DecimalParameterFilterSensitiveLog = (obj: DecimalParameter): any => ({
  ...obj,
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IntegerParameterFilterSensitiveLog = (obj: IntegerParameter): any => ({
  ...obj,
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StringParameterFilterSensitiveLog = (obj: StringParameter): any => ({
  ...obj,
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const _ParametersFilterSensitiveLog = (obj: _Parameters): any => ({
  ...obj,
  ...(obj.StringParameters && {
    StringParameters: obj.StringParameters.map((item) => StringParameterFilterSensitiveLog(item)),
  }),
  ...(obj.IntegerParameters && {
    IntegerParameters: obj.IntegerParameters.map((item) => IntegerParameterFilterSensitiveLog(item)),
  }),
  ...(obj.DecimalParameters && {
    DecimalParameters: obj.DecimalParameters.map((item) => DecimalParameterFilterSensitiveLog(item)),
  }),
  ...(obj.DateTimeParameters && {
    DateTimeParameters: obj.DateTimeParameters.map((item) => DateTimeParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateAnalysisRequestFilterSensitiveLog = (obj: CreateAnalysisRequest): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: _ParametersFilterSensitiveLog(obj.Parameters) }),
});

/**
 * @internal
 */
export const CreateColumnsOperationFilterSensitiveLog = (obj: CreateColumnsOperation): any => ({
  ...obj,
  ...(obj.Columns && { Columns: obj.Columns.map((item) => CalculatedColumnFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DashboardVersionDefinitionFilterSensitiveLog = (obj: DashboardVersionDefinition): any => ({
  ...obj,
  ...(obj.CalculatedFields && {
    CalculatedFields: obj.CalculatedFields.map((item) => CalculatedFieldFilterSensitiveLog(item)),
  }),
  ...(obj.ParameterDeclarations && {
    ParameterDeclarations: obj.ParameterDeclarations.map((item) => ParameterDeclarationFilterSensitiveLog(item)),
  }),
  ...(obj.ColumnConfigurations && {
    ColumnConfigurations: obj.ColumnConfigurations.map((item) => ColumnConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateDashboardRequestFilterSensitiveLog = (obj: CreateDashboardRequest): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: _ParametersFilterSensitiveLog(obj.Parameters) }),
});

/**
 * @internal
 */
export const FilterOperationFilterSensitiveLog = (obj: FilterOperation): any => ({
  ...obj,
  ...(obj.ConditionExpression && { ConditionExpression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TransformOperationFilterSensitiveLog = (obj: TransformOperation): any => {
  if (obj.ProjectOperation !== undefined) return { ProjectOperation: obj.ProjectOperation };
  if (obj.FilterOperation !== undefined)
    return { FilterOperation: FilterOperationFilterSensitiveLog(obj.FilterOperation) };
  if (obj.CreateColumnsOperation !== undefined)
    return { CreateColumnsOperation: CreateColumnsOperationFilterSensitiveLog(obj.CreateColumnsOperation) };
  if (obj.RenameColumnOperation !== undefined) return { RenameColumnOperation: obj.RenameColumnOperation };
  if (obj.CastColumnTypeOperation !== undefined) return { CastColumnTypeOperation: obj.CastColumnTypeOperation };
  if (obj.TagColumnOperation !== undefined) return { TagColumnOperation: obj.TagColumnOperation };
  if (obj.UntagColumnOperation !== undefined) return { UntagColumnOperation: obj.UntagColumnOperation };
  if (obj.OverrideDatasetParameterOperation !== undefined)
    return { OverrideDatasetParameterOperation: obj.OverrideDatasetParameterOperation };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const LogicalTableFilterSensitiveLog = (obj: LogicalTable): any => ({
  ...obj,
  ...(obj.DataTransforms && {
    DataTransforms: obj.DataTransforms.map((item) => TransformOperationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const RowLevelPermissionTagRuleFilterSensitiveLog = (obj: RowLevelPermissionTagRule): any => ({
  ...obj,
  ...(obj.MatchAllValue && { MatchAllValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RowLevelPermissionTagConfigurationFilterSensitiveLog = (obj: RowLevelPermissionTagConfiguration): any => ({
  ...obj,
  ...(obj.TagRules && { TagRules: obj.TagRules.map((item) => RowLevelPermissionTagRuleFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateDataSetRequestFilterSensitiveLog = (obj: CreateDataSetRequest): any => ({
  ...obj,
  ...(obj.PhysicalTableMap && {
    PhysicalTableMap: Object.entries(obj.PhysicalTableMap).reduce(
      (acc: any, [key, value]: [string, PhysicalTable]) => ((acc[key] = value), acc),
      {}
    ),
  }),
  ...(obj.LogicalTableMap && {
    LogicalTableMap: Object.entries(obj.LogicalTableMap).reduce(
      (acc: any, [key, value]: [string, LogicalTable]) => ((acc[key] = LogicalTableFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
  ...(obj.RowLevelPermissionTagConfiguration && {
    RowLevelPermissionTagConfiguration: RowLevelPermissionTagConfigurationFilterSensitiveLog(
      obj.RowLevelPermissionTagConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const DataSourceCredentialsFilterSensitiveLog = (obj: DataSourceCredentials): any => ({
  ...obj,
  ...(obj.CredentialPair && { CredentialPair: obj.CredentialPair }),
});

/**
 * @internal
 */
export const CreateDataSourceRequestFilterSensitiveLog = (obj: CreateDataSourceRequest): any => ({
  ...obj,
  ...(obj.DataSourceParameters && { DataSourceParameters: obj.DataSourceParameters }),
  ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TemplateVersionDefinitionFilterSensitiveLog = (obj: TemplateVersionDefinition): any => ({
  ...obj,
  ...(obj.CalculatedFields && {
    CalculatedFields: obj.CalculatedFields.map((item) => CalculatedFieldFilterSensitiveLog(item)),
  }),
  ...(obj.ParameterDeclarations && {
    ParameterDeclarations: obj.ParameterDeclarations.map((item) => ParameterDeclarationFilterSensitiveLog(item)),
  }),
  ...(obj.ColumnConfigurations && {
    ColumnConfigurations: obj.ColumnConfigurations.map((item) => ColumnConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateTemplateRequestFilterSensitiveLog = (obj: CreateTemplateRequest): any => ({
  ...obj,
});
