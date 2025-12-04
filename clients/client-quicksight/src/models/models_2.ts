// smithy-typescript generated code
import {
  ActionConnectorType,
  AggType,
  AnonymousUserDashboardEmbeddingConfigurationDisabledFeature,
  AnonymousUserDashboardEmbeddingConfigurationEnabledFeature,
  AssetBundleExportFormat,
  AssetBundleExportJobAnalysisPropertyToOverride,
  AssetBundleExportJobDashboardPropertyToOverride,
  AssetBundleExportJobDataSetPropertyToOverride,
  AssetBundleExportJobDataSourcePropertyToOverride,
  AssetBundleExportJobFolderPropertyToOverride,
  AssetBundleExportJobRefreshSchedulePropertyToOverride,
  AssetBundleExportJobStatus,
  AssetBundleExportJobThemePropertyToOverride,
  AssetBundleExportJobVPCConnectionPropertyToOverride,
  AssetBundleImportFailureAction,
  AssetBundleImportJobStatus,
  AuthenticationMethodOption,
  AuthenticationType,
  AuthorizationCodeGrantCredentialsSource,
  BrandStatus,
  BrandVersionStatus,
  CapabilityState,
  ClientCredentialsSource,
  ColumnDataSubType,
  ColumnDataType,
  ColumnOrderingType,
  ColumnTagName,
  ComparisonMethodType,
  ConnectionAuthType,
  ConstantType,
  ContributionAnalysisDirection,
  ContributionAnalysisSortType,
  DashboardBehavior,
  DashboardUIState,
  DataSetDateComparisonFilterOperator,
  DataSetImportMode,
  DataSetNumericComparisonFilterOperator,
  DatasetParameterValueType,
  DataSetStringComparisonFilterOperator,
  DataSetStringListFilterOperator,
  DataSetUseAs,
  DisplayFormat,
  Edition,
  FileFormat,
  FilterClass,
  GeoSpatialCountryCode,
  GeoSpatialDataRole,
  InputColumnDataType,
  JoinOperationType,
  JoinType,
  LookbackWindowSizeUnit,
  NullFilterOption,
  NumberScale,
  RefreshFailureAlertStatus,
  ResourceStatus,
  ReviewedAnswerErrorCode,
  RowLevelPermissionFormatVersion,
  RowLevelPermissionPolicy,
  ServiceType,
  SnapshotFileFormatType,
  SnapshotFileSheetSelectionScope,
  StarburstProductType,
  Status,
  TextQualifier,
  TimeGranularity,
  TopicIRFilterFunction,
  TopicIRFilterType,
  TopicNumericSeparatorSymbol,
  TopicSortDirection,
  TopicTimeGranularity,
  UndefinedSpecifiedValueType,
  ValidationStrategyMode,
  WebCrawlerAuthType,
} from "./enums";

import {
  type AccountCustomization,
  type AdHocFilteringOption,
  type AggFunction,
  type AggregateOperation,
  type AnalysisDefaults,
  type AssetOptions,
  type DataPrepAggregationFunction,
  type TransformOperationSource,
  type VisualMenuOption,
  AggregationPartitionBy,
  AmazonElasticsearchParameters,
  AmazonOpenSearchParameters,
  CalculatedField,
  ColumnConfiguration,
  DataSetColumnIdMapping,
  DataSetIdentifierDeclaration,
  FilterGroup,
  ParameterDeclaration,
} from "./models_0";

import {
  type AnalysisDefinition,
  type AnalysisSourceEntity,
  type Anchor,
  type AnonymousUserDashboardFeatureConfigurations,
  DataSetReference,
  SheetDefinition,
  StaticFile,
} from "./models_1";

/**
 * <p>Information about the dashboard that you want to embed.</p>
 * @public
 */
export interface AnonymousUserDashboardEmbeddingConfiguration {
  /**
   * <p>The dashboard ID for the dashboard that you want the user to see first. This ID is
   *             included in the output URL. When the URL in response is accessed, Amazon Quick Sight
   *             renders this dashboard.</p>
   *          <p>The Amazon Resource Name (ARN) of this dashboard must be included in the
   *                 <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with
   *                 <code>InvalidParameterValueException</code>.</p>
   * @public
   */
  InitialDashboardId: string | undefined;

  /**
   * <p>A list of all enabled features of a specified anonymous dashboard.</p>
   * @public
   */
  EnabledFeatures?: AnonymousUserDashboardEmbeddingConfigurationEnabledFeature[] | undefined;

  /**
   * <p>A list of all disabled features of a specified anonymous dashboard.</p>
   * @public
   */
  DisabledFeatures?: AnonymousUserDashboardEmbeddingConfigurationDisabledFeature[] | undefined;

  /**
   * <p>The feature configuration for an embedded dashboard.</p>
   * @public
   */
  FeatureConfigurations?: AnonymousUserDashboardFeatureConfigurations | undefined;
}

/**
 * <p>A structure that contains the following elements:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>DashboardId</code> of the dashboard that has the visual that you
 *                     want to embed.</p>
 *             </li>
 *             <li>
 *                <p>The <code>SheetId</code> of the sheet that has the visual that you want to
 *                     embed.</p>
 *             </li>
 *             <li>
 *                <p>The <code>VisualId</code> of the visual that you want to embed.</p>
 *             </li>
 *          </ul>
 *          <p>The <code>DashboardId</code>, <code>SheetId</code>, and <code>VisualId</code> can be
 *             found in the <code>IDs for developers</code> section of the <code>Embed visual</code>
 *             pane of the visual's on-visual menu of the Amazon Quick Sight console. You can also get
 *             the <code>DashboardId</code> with a <code>ListDashboards</code> API operation.</p>
 * @public
 */
export interface DashboardVisualId {
  /**
   * <p>The ID of the dashboard that has the visual that you want to embed. The
   *                 <code>DashboardId</code> can be found in the <code>IDs for developers</code> section
   *             of the <code>Embed visual</code> pane of the visual's on-visual menu of the Quick Suite console. You can also get the <code>DashboardId</code> with a
   *                 <code>ListDashboards</code> API operation.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The ID of the sheet that the has visual that you want to embed. The
   *                 <code>SheetId</code> can be found in the <code>IDs for developers</code> section of
   *             the <code>Embed visual</code> pane of the visual's on-visual menu of the Quick Suite console.</p>
   * @public
   */
  SheetId: string | undefined;

  /**
   * <p>The ID of the visual that you want to embed. The <code>VisualID</code> can be found in
   *             the <code>IDs for developers</code> section of the <code>Embed visual</code> pane of the
   *             visual's on-visual menu of the Amazon Quick Sight console.</p>
   * @public
   */
  VisualId: string | undefined;
}

/**
 * <p>The experience that you are embedding. You can use this object to generate a url that
 *             embeds a visual into your application.</p>
 * @public
 */
export interface AnonymousUserDashboardVisualEmbeddingConfiguration {
  /**
   * <p>The visual ID for the visual that you want the user to see. This ID is included in the
   *             output URL. When the URL in response is accessed, Amazon Quick Sight renders this
   *             visual.</p>
   *          <p>The Amazon Resource Name (ARN) of the dashboard that the visual belongs to must be
   *             included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request
   *             will fail with <code>InvalidParameterValueException</code>.</p>
   * @public
   */
  InitialDashboardVisualId: DashboardVisualId | undefined;
}

/**
 * <p>The settings that you want to use for the Generative Q&A experience.</p>
 * @public
 */
export interface AnonymousUserGenerativeQnAEmbeddingConfiguration {
  /**
   * <p>The Quick Sight Q topic ID of the new reader experience topic that you want the anonymous user to see first. This ID is included in the output URL. When the URL in response is accessed, Quick Sight renders the Generative Q&A experience with this new reader experience topic pre selected.</p>
   *          <p>The Amazon Resource Name (ARN) of this Q new reader experience topic must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request fails with an <code>InvalidParameterValueException</code> error.</p>
   * @public
   */
  InitialTopicId: string | undefined;
}

/**
 * <p>The settings that you want to use with the Q search bar.</p>
 * @public
 */
export interface AnonymousUserQSearchBarEmbeddingConfiguration {
  /**
   * <p>The Quick Sight Q topic ID of the legacy topic that you want the anonymous user to see first. This ID is included in the output URL. When the URL in response is accessed, Quick Sight renders the Q search bar with this legacy topic pre-selected.</p>
   *          <p>The Amazon Resource Name (ARN) of this Q legacy topic must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request fails with an <code>InvalidParameterValueException</code> error.</p>
   * @public
   */
  InitialTopicId: string | undefined;
}

/**
 * <p>The type of experience you want to embed. For anonymous users, you can embed Quick Suite dashboards.</p>
 * @public
 */
export interface AnonymousUserEmbeddingExperienceConfiguration {
  /**
   * <p>The type of embedding experience. In this case, Amazon Quick Sight dashboards.</p>
   * @public
   */
  Dashboard?: AnonymousUserDashboardEmbeddingConfiguration | undefined;

  /**
   * <p>The type of embedding experience. In this case, Amazon Quick Sight visuals.</p>
   * @public
   */
  DashboardVisual?: AnonymousUserDashboardVisualEmbeddingConfiguration | undefined;

  /**
   * <p>The Q search bar that you want to use for anonymous user embedding.</p>
   * @public
   */
  QSearchBar?: AnonymousUserQSearchBarEmbeddingConfiguration | undefined;

  /**
   * <p>The Generative Q&A experience that you want to use for anonymous user embedding.</p>
   * @public
   */
  GenerativeQnA?: AnonymousUserGenerativeQnAEmbeddingConfiguration | undefined;
}

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
  VisualIds?: string[] | undefined;
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
  ErrorMessage?: string | undefined;

  /**
   * <p>The error type.</p>
   * @public
   */
  ErrorType?: string | undefined;
}

/**
 * <p>An optional structure that contains the Amazon S3 bucket configuration that the generated snapshots are stored in. If you don't provide this information, generated snapshots are stored in the default Amazon Quick Sight bucket.</p>
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
  S3DestinationConfiguration?: SnapshotS3DestinationConfiguration | undefined;

  /**
   * <p>The Amazon S3 Uri.</p>
   * @public
   */
  S3Uri?: string | undefined;

  /**
   * <p>An array of error records that describe any failures that occur while the dashboard snapshot job runs.</p>
   * @public
   */
  ErrorInfo?: SnapshotJobResultErrorInfo[] | undefined;
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
  Files?: SnapshotFile[] | undefined;

  /**
   * <p> A list of <code>SnapshotJobS3Result</code> objects.</p>
   * @public
   */
  S3Results?: SnapshotJobS3Result[] | undefined;
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
  FileGroups?: SnapshotJobResultFileGroup[] | undefined;
}

/**
 * <p>Configuration for API key-based authentication to external services.</p>
 * @public
 */
export interface APIKeyConnectionMetadata {
  /**
   * <p>The base URL endpoint for the external service.</p>
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * <p>The API key used for authentication.</p>
   * @public
   */
  ApiKey: string | undefined;

  /**
   * <p>The email address associated with the API key, if required.</p>
   * @public
   */
  Email?: string | undefined;
}

/**
 * <p>Represents a column that will be included in the result of an append operation, combining data from multiple sources.</p>
 * @public
 */
export interface AppendedColumn {
  /**
   * <p>The name of the column to include in the appended result.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>A unique identifier for the column in the appended result.</p>
   * @public
   */
  NewColumnId: string | undefined;
}

/**
 * <p>A transform operation that combines rows from two data sources by stacking them vertically (union operation).</p>
 * @public
 */
export interface AppendOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The first data source to be included in the append operation.</p>
   * @public
   */
  FirstSource?: TransformOperationSource | undefined;

  /**
   * <p>The second data source to be appended to the first source.</p>
   * @public
   */
  SecondSource?: TransformOperationSource | undefined;

  /**
   * <p>The list of columns to include in the appended result, mapping columns from both sources.</p>
   * @public
   */
  AppendedColumns: AppendedColumn[] | undefined;
}

/**
 * <p>The color palette.</p>
 * @public
 */
export interface Palette {
  /**
   * <p>The foreground color.</p>
   * @public
   */
  Foreground?: string | undefined;

  /**
   * <p>The background color.</p>
   * @public
   */
  Background?: string | undefined;
}

/**
 * <p>The color palette.</p>
 * @public
 */
export interface BrandColorPalette {
  /**
   * <p>The primary color.</p>
   * @public
   */
  Primary?: Palette | undefined;

  /**
   * <p>The secondary color.</p>
   * @public
   */
  Secondary?: Palette | undefined;

  /**
   * <p>The color that is used for accent elements.</p>
   * @public
   */
  Accent?: Palette | undefined;

  /**
   * <p>The color that is used for measure elements.</p>
   * @public
   */
  Measure?: Palette | undefined;

  /**
   * <p>The color that is used for dimension elements.</p>
   * @public
   */
  Dimension?: Palette | undefined;

  /**
   * <p>The color that is used for success elements.</p>
   * @public
   */
  Success?: Palette | undefined;

  /**
   * <p>The color that is used for info elements.</p>
   * @public
   */
  Info?: Palette | undefined;

  /**
   * <p>The color that is used for warning elements.</p>
   * @public
   */
  Warning?: Palette | undefined;

  /**
   * <p>The color that is used for danger elements.</p>
   * @public
   */
  Danger?: Palette | undefined;
}

/**
 * <p>The navigation bar style.</p>
 * @public
 */
export interface NavbarStyle {
  /**
   * <p>The global navigation bar style.</p>
   * @public
   */
  GlobalNavbar?: Palette | undefined;

  /**
   * <p>The contextual navigation bar style.</p>
   * @public
   */
  ContextualNavbar?: Palette | undefined;
}

/**
 * <p>The element style.</p>
 * @public
 */
export interface BrandElementStyle {
  /**
   * <p>The navigation bar style.</p>
   * @public
   */
  NavbarStyle?: NavbarStyle | undefined;
}

/**
 * <p>The contextual accent palette.</p>
 * @public
 */
export interface ContextualAccentPalette {
  /**
   * <p>The color palette.</p>
   * @public
   */
  Connection?: Palette | undefined;

  /**
   * <p>The color palette.</p>
   * @public
   */
  Visualization?: Palette | undefined;

  /**
   * <p>The color palette.</p>
   * @public
   */
  Insight?: Palette | undefined;

  /**
   * <p>The color palette.</p>
   * @public
   */
  Automation?: Palette | undefined;
}

/**
 * <p>The application theme.</p>
 * @public
 */
export interface ApplicationTheme {
  /**
   * <p>The color palette.</p>
   * @public
   */
  BrandColorPalette?: BrandColorPalette | undefined;

  /**
   * <p>The contextual accent palette.</p>
   * @public
   */
  ContextualAccentPalette?: ContextualAccentPalette | undefined;

  /**
   * <p>The element style.</p>
   * @public
   */
  BrandElementStyle?: BrandElementStyle | undefined;
}

/**
 * <p>Controls how a specific <code>Analysis</code> resource is parameterized in the returned
 *             CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobAnalysisOverrideProperties {
  /**
   * <p>The ARN of the specific <code>Analysis</code> resource whose override properties are
   *          configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>Analysis</code> resource properties to generate variables for in the
   *          returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobAnalysisPropertyToOverride[] | undefined;
}

/**
 * <p>Controls how a specific <code>Dashboard</code> resource is parameterized in the returned
 *             CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobDashboardOverrideProperties {
  /**
   * <p>The ARN of the specific <code>Dashboard</code> resource whose override properties are
   *          configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>Dashboard</code> resource properties to generate variables for in the
   *          returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobDashboardPropertyToOverride[] | undefined;
}

/**
 * <p>Controls how a specific <code>DataSet</code> resource is parameterized in the returned
 *             CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobDataSetOverrideProperties {
  /**
   * <p>The ARN of the specific <code>DataSet</code> resource whose override properties are
   *          configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>DataSet</code> resource properties to generate variables for in the
   *          returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobDataSetPropertyToOverride[] | undefined;
}

/**
 * <p>Controls how a specific <code>DataSource</code> resource is parameterized in the
 *          returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobDataSourceOverrideProperties {
  /**
   * <p>The ARN of the specific <code>DataSource</code> resource whose override properties are
   *          configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>DataSource</code> resource properties to generate variables for in the
   *          returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobDataSourcePropertyToOverride[] | undefined;
}

/**
 * <p>Controls how a specific <code>Folder</code> resource is parameterized in the returned
 *             CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobFolderOverrideProperties {
  /**
   * <p>The ARN of the specific <code>Folder</code> resource whose override properties are
   *          configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>Folder</code> resource properties to generate variables for in the
   *          returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobFolderPropertyToOverride[] | undefined;
}

/**
 * <p>Controls how a specific <code>RefreshSchedule</code> resource is parameterized in the
 *          returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobRefreshScheduleOverrideProperties {
  /**
   * <p>The ARN of the specific <code>RefreshSchedule</code> resource whose override properties
   *          are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>RefreshSchedule</code> resource properties to generate variables for in
   *          the returned CloudFormation template.</p>
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
   * <p>An option to request a CloudFormation variable for a prefix to be prepended to each
   *          resource's ID before import. The prefix is only added to the asset IDs and does not
   *          change the name of the asset.</p>
   * @public
   */
  PrefixForAllResources?: boolean | undefined;
}

/**
 * <p>Controls how a specific <code>Theme</code> resource is parameterized in the returned
 *             CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobThemeOverrideProperties {
  /**
   * <p>The ARN of the specific <code>Theme</code> resource whose override properties are
   *          configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>Theme</code> resource properties to generate variables for in the
   *          returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobThemePropertyToOverride[] | undefined;
}

/**
 * <p>Controls how a specific <code>VPCConnection</code> resource is parameterized in the
 *          outputted CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobVPCConnectionOverrideProperties {
  /**
   * <p>The ARN of the specific <code>VPCConnection</code> resource whose override properties
   *          are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>VPCConnection</code> resource properties to generate variables for in
   *          the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobVPCConnectionPropertyToOverride[] | undefined;
}

/**
 * <p>An optional collection of CloudFormation property configurations that control how
 *          the export job is generated.</p>
 * @public
 */
export interface AssetBundleCloudFormationOverridePropertyConfiguration {
  /**
   * <p>An optional list of structures that control how resource IDs are parameterized in the
   *          returned CloudFormation template.</p>
   * @public
   */
  ResourceIdOverrideConfiguration?: AssetBundleExportJobResourceIdOverrideConfiguration | undefined;

  /**
   * <p>An optional list of structures that control how <code>VPCConnection</code> resources are
   *          parameterized in the returned CloudFormation template.</p>
   * @public
   */
  VPCConnections?: AssetBundleExportJobVPCConnectionOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>RefreshSchedule</code> resources
   *          are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  RefreshSchedules?: AssetBundleExportJobRefreshScheduleOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>DataSource</code> resources are
   *          parameterized in the returned CloudFormation template.</p>
   * @public
   */
  DataSources?: AssetBundleExportJobDataSourceOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>DataSet</code> resources are
   *          parameterized in the returned CloudFormation template.</p>
   * @public
   */
  DataSets?: AssetBundleExportJobDataSetOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>Theme</code> resources are
   *          parameterized in the returned CloudFormation template.</p>
   * @public
   */
  Themes?: AssetBundleExportJobThemeOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>Analysis</code> resources are
   *          parameterized in the returned CloudFormation template.</p>
   * @public
   */
  Analyses?: AssetBundleExportJobAnalysisOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>Dashboard</code> resources are
   *          parameterized in the returned CloudFormation template.</p>
   * @public
   */
  Dashboards?: AssetBundleExportJobDashboardOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that controls how <code>Folder</code> resources are
   *          parameterized in the returned CloudFormation template.</p>
   * @public
   */
  Folders?: AssetBundleExportJobFolderOverrideProperties[] | undefined;
}

/**
 * <p>Describes an error that occurred during an Asset Bundle export job.</p>
 * @public
 */
export interface AssetBundleExportJobError {
  /**
   * <p>The ARN of the resource whose processing caused an error.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The specific error type of the error that occurred.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>A description of the error.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>A summary of the export job that includes details of the job's configuration and
 *          its current status.</p>
 * @public
 */
export interface AssetBundleExportJobSummary {
  /**
   * <p>The current status of the export job.</p>
   * @public
   */
  JobStatus?: AssetBundleExportJobStatus | undefined;

  /**
   * <p>The ARN of the export job.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time that the export job was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The ID of the export job.</p>
   * @public
   */
  AssetBundleExportJobId?: string | undefined;

  /**
   * <p>The flag that determines the inclusion of resource dependencies in the returned asset
   *          bundle.</p>
   * @public
   */
  IncludeAllDependencies?: boolean | undefined;

  /**
   * <p>The format for the export job.</p>
   * @public
   */
  ExportFormat?: AssetBundleExportFormat | undefined;

  /**
   * <p>The flag that determines the inclusion of permissions associated with each resource
   *          ARN.</p>
   * @public
   */
  IncludePermissions?: boolean | undefined;

  /**
   * <p>The flag that determines the inclusion of tags associated with each resource ARN.</p>
   * @public
   */
  IncludeTags?: boolean | undefined;
}

/**
 * <p>The option to relax the validation that is required to export each asset. When
 *             <code>StrictModeForAllResource</code> is set to <code>false</code>, validation is
 *          skipped for specific UI errors.</p>
 * @public
 */
export interface AssetBundleExportJobValidationStrategy {
  /**
   * <p>A Boolean value that indicates whether to export resources under strict or lenient
   *          mode.</p>
   * @public
   */
  StrictModeForAllResources?: boolean | undefined;
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
  Arn?: string | undefined;

  /**
   * <p>A description of the warning.</p>
   * @public
   */
  Message?: string | undefined;
}

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
  Name?: string | undefined;
}

/**
 * <p>A structure that contains the permissions for the resource that you want to override in
 *          an asset bundle import job.</p>
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
 * <p>An object that contains a list of permissions to be applied to a list of analysis
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobAnalysisOverridePermissions {
  /**
   * <p>A list of analysis IDs that you want to apply overrides to. You can use <code>*</code>
   *          to override all analyses in this asset bundle.</p>
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
   * <p>A list of analysis IDs that you want to apply overrides to. You can use <code>*</code>
   *          to override all analyses in this asset bundle.</p>
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
  Name?: string | undefined;
}

/**
 * <p>A structure that contains the configuration of a shared link to an Amazon Quick Sight
 *          dashboard.</p>
 * @public
 */
export interface AssetBundleResourceLinkSharingConfiguration {
  /**
   * <p>A list of link sharing permissions for the dashboards that you want to apply overrides
   *          to.</p>
   * @public
   */
  Permissions?: AssetBundleResourcePermissions | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of dashboard
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDashboardOverridePermissions {
  /**
   * <p>A list of dashboard IDs that you want to apply overrides to. You can use <code>*</code>
   *          to override all dashboards in this asset bundle.</p>
   * @public
   */
  DashboardIds: string[] | undefined;

  /**
   * <p>A list of permissions for the dashboards that you want to apply overrides to.</p>
   * @public
   */
  Permissions?: AssetBundleResourcePermissions | undefined;

  /**
   * <p>A structure that contains the link sharing configurations that you want to apply
   *          overrides to.</p>
   * @public
   */
  LinkSharingConfiguration?: AssetBundleResourceLinkSharingConfiguration | undefined;
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of dashboard IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDashboardOverrideTags {
  /**
   * <p>A list of dashboard IDs that you want to apply overrides to. You can use <code>*</code>
   *          to override all dashboards in this asset bundle.</p>
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
 * <p>The configuration settings for the email alerts that are sent when a dataset refresh fails.</p>
 * @public
 */
export interface RefreshFailureEmailAlert {
  /**
   * <p>The status value that determines if email alerts are sent.</p>
   * @public
   */
  AlertStatus?: RefreshFailureAlertStatus | undefined;
}

/**
 * <p>The failure configuration of a dataset.</p>
 * @public
 */
export interface RefreshFailureConfiguration {
  /**
   * <p>The email alert configuration for a dataset refresh failure.</p>
   * @public
   */
  EmailAlert?: RefreshFailureEmailAlert | undefined;
}

/**
 * <p>The lookback window setup of an incremental refresh configuration.</p>
 * @public
 */
export interface LookbackWindow {
  /**
   * <p>The name of the lookback window column.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>The lookback window column size.</p>
   * @public
   */
  Size: number | undefined;

  /**
   * <p>The size unit that is used for the lookback window column. Valid values for this structure are <code>HOUR</code>, <code>DAY</code>, and <code>WEEK</code>.</p>
   * @public
   */
  SizeUnit: LookbackWindowSizeUnit | undefined;
}

/**
 * <p>The incremental refresh configuration for a dataset.</p>
 * @public
 */
export interface IncrementalRefresh {
  /**
   * <p>The lookback window setup for an incremental refresh configuration.</p>
   * @public
   */
  LookbackWindow: LookbackWindow | undefined;
}

/**
 * <p>The refresh configuration of a dataset.</p>
 * @public
 */
export interface RefreshConfiguration {
  /**
   * <p>The incremental refresh for the dataset.</p>
   * @public
   */
  IncrementalRefresh: IncrementalRefresh | undefined;
}

/**
 * <p>The refresh properties of a dataset.</p>
 * @public
 */
export interface DataSetRefreshProperties {
  /**
   * <p>The refresh configuration for a dataset.</p>
   * @public
   */
  RefreshConfiguration?: RefreshConfiguration | undefined;

  /**
   * <p>The failure configuration for a dataset.</p>
   * @public
   */
  FailureConfiguration?: RefreshFailureConfiguration | undefined;
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
  Name?: string | undefined;

  /**
   * <p>The refresh properties of a dataset.</p>
   * @public
   */
  DataSetRefreshProperties?: DataSetRefreshProperties | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of dataset
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDataSetOverridePermissions {
  /**
   * <p>A list of dataset IDs that you want to apply overrides to. You can use <code>*</code> to
   *          override all datasets in this asset bundle.</p>
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
   * <p>A list of dataset IDs that you want to apply overrides to. You can use <code>*</code> to
   *          override all datasets in this asset bundle.</p>
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
   * <p>A username and password credential pair to be used to create the imported data source.
   *          Keep this field blank if you are using a Secrets Manager secret to provide
   *          credentials.</p>
   * @public
   */
  CredentialPair?: AssetBundleImportJobDataSourceCredentialPair | undefined;

  /**
   * <p>The ARN of the Secrets Manager secret that's used to create the imported data source.
   *          Keep this field blank, unless you are using a secret in place of a credential pair.</p>
   * @public
   */
  SecretArn?: string | undefined;
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
  EnableIdentityPropagation?: boolean | undefined;
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
  WorkGroup?: string | undefined;

  /**
   * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>An optional parameter that configures IAM Identity Center authentication to grant Quick Sight access to your workgroup.</p>
   *          <p>This parameter can only be specified if your Quick Sight account is configured with IAM Identity Center.</p>
   * @public
   */
  IdentityCenterConfiguration?: IdentityCenterConfiguration | undefined;
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
  DataSetRegion?: string | undefined;
}

/**
 * <p>The parameters that are required to connect to a Confluence data source</p>
 * @public
 */
export interface ConfluenceParameters {
  /**
   * <p>The URL of the Confluence site to connect to.</p>
   * @public
   */
  ConfluenceUrl: string | undefined;
}

/**
 * <p>The parameters that are required to connect to a custom connection data source.</p>
 * @public
 */
export interface CustomConnectionParameters {
  /**
   * <p>The type of custom connector.</p>
   * @public
   */
  ConnectionType?: string | undefined;
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
 * <p>The parameters that are required to connect to a Impala data source.</p>
 * @public
 */
export interface ImpalaParameters {
  /**
   * <p>The host name of the Impala data source.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The port of the Impala data source.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The database of the Impala data source.</p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>The HTTP path of the Impala data source.</p>
   * @public
   */
  SqlEndpointPath: string | undefined;
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

  /**
   * <p>A Boolean value that indicates whether the <code>Database</code> uses a service name or an SID. If this value is left blank, the default value is <code>SID</code>. If this value is set to <code>false</code>, the value is <code>SID</code>.</p>
   * @public
   */
  UseServiceName?: boolean | undefined;
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
 * <p>The parameters that are required to connect to an Amazon Q Business data source.</p>
 * @public
 */
export interface QBusinessParameters {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Business application.</p>
   * @public
   */
  ApplicationArn: string | undefined;
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
 * <p>A structure that grants Quick Sight access to your cluster and make a call to the <code>redshift:GetClusterCredentials</code> API. For more information on the <code>redshift:GetClusterCredentials</code> API, see <a href="https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html">
 *                <code>GetClusterCredentials</code>
 *             </a>.</p>
 * @public
 */
export interface RedshiftIAMParameters {
  /**
   * <p>Use the <code>RoleArn</code> structure to allow Quick Sight to call <code>redshift:GetClusterCredentials</code> on your cluster. The calling principal must have <code>iam:PassRole</code> access to pass the role to Quick Sight. The role's trust policy must allow the Quick Sight service principal to assume the role.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The user whose permissions and group memberships will be used by Quick Sight to access the cluster. If this user already exists in your database, Amazon Quick Sight is granted the same permissions that the user has. If the user doesn't exist, set the value of <code>AutoCreateDatabaseUser</code> to <code>True</code> to create a new user with PUBLIC permissions.</p>
   * @public
   */
  DatabaseUser?: string | undefined;

  /**
   * <p>A list of groups whose permissions will be granted to Quick Sight to access the cluster. These permissions are combined with the permissions granted to Quick Sight by the <code>DatabaseUser</code>. If you choose to include this parameter, the <code>RoleArn</code> must grant access to <code>redshift:JoinGroup</code>.</p>
   * @public
   */
  DatabaseGroups?: string[] | undefined;

  /**
   * <p>Automatically creates a database user. If your database doesn't have a <code>DatabaseUser</code>, set this parameter to <code>True</code>. If there is no <code>DatabaseUser</code>, Quick Sight can't connect to your cluster. The <code>RoleArn</code> that you use for this operation must grant access to <code>redshift:CreateClusterUser</code> to successfully create the user.</p>
   * @public
   */
  AutoCreateDatabaseUser?: boolean | undefined;
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
  Host?: string | undefined;

  /**
   * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
   * @public
   */
  Port?: number | undefined;

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
  ClusterId?: string | undefined;

  /**
   * <p>An optional parameter that uses IAM authentication to grant Quick Sight access to your cluster. This parameter can be used instead of <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DataSourceCredentials.html">DataSourceCredentials</a>.</p>
   * @public
   */
  IAMParameters?: RedshiftIAMParameters | undefined;

  /**
   * <p>An optional parameter that configures IAM Identity Center authentication to grant Quick Sight access to your cluster.</p>
   *          <p>This parameter can only be specified if your Quick Sight account is configured with IAM Identity Center.</p>
   * @public
   */
  IdentityCenterConfiguration?: IdentityCenterConfiguration | undefined;
}

/**
 * <p>The parameters that are required to connect to a S3 Knowledge Base data source.</p>
 * @public
 */
export interface S3KnowledgeBaseParameters {
  /**
   * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific S3 Knowledge Base data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow S3 access for the single S3 Knowledge Base data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The URL of the S3 bucket that contains the knowledge base data.</p>
   * @public
   */
  BucketUrl: string | undefined;

  /**
   * <p>The location of metadata files within the S3 bucket that describe the structure and content of the knowledge base.</p>
   * @public
   */
  MetadataFilesLocation?: string | undefined;
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
   *             uploaded into Quick Sight.</p>
   * @public
   */
  ManifestFileLocation: ManifestFileLocation | undefined;

  /**
   * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific S3 data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow S3 access for the single S3 data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>
   * @public
   */
  RoleArn?: string | undefined;
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
 * <p>An object that contains information needed to create a data source connection that uses OAuth client credentials. This option is available for data source connections that are made with Snowflake and Starburst.</p>
 * @public
 */
export interface OAuthParameters {
  /**
   * <p>The token endpoint URL of the identity provider.</p>
   * @public
   */
  TokenProviderUrl: string | undefined;

  /**
   * <p>The OAuth scope.</p>
   * @public
   */
  OAuthScope?: string | undefined;

  /**
   * <p>VPC connection properties.</p>
   * @public
   */
  IdentityProviderVpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * <p>The resource uri of the identity provider.</p>
   * @public
   */
  IdentityProviderResourceUri?: string | undefined;
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

  /**
   * <p>The authentication type that you want to use for your connection. This parameter accepts OAuth and non-OAuth authentication types.</p>
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * <p>The database access control role.</p>
   * @public
   */
  DatabaseAccessControlRole?: string | undefined;

  /**
   * <p>An object that contains information needed to create a data source connection between an Quick Sight account and Snowflake.</p>
   * @public
   */
  OAuthParameters?: OAuthParameters | undefined;
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
  ProductType?: StarburstProductType | undefined;

  /**
   * <p>The database access control role.</p>
   * @public
   */
  DatabaseAccessControlRole?: string | undefined;

  /**
   * <p>The authentication type that you want to use for your connection. This parameter accepts OAuth and non-OAuth authentication types.</p>
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * <p>An object that contains information needed to create a data source connection between an Quick Sight account and Starburst.</p>
   * @public
   */
  OAuthParameters?: OAuthParameters | undefined;
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
 * <p>The parameters for a web crawler data source.</p>
 * @public
 */
export interface WebCrawlerParameters {
  /**
   * <p>The authentication type for the web crawler. The type can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NO_AUTH</code>: No authentication required.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASIC_AUTH</code>: Basic authentication using username and password.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAML</code>: SAML-based authentication.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FORM</code>: Form-based authentication.</p>
   *             </li>
   *          </ul>
   * @public
   */
  WebCrawlerAuthType: WebCrawlerAuthType | undefined;

  /**
   * <p>The XPath expression for locating the username field on the login page.</p>
   * @public
   */
  UsernameFieldXpath?: string | undefined;

  /**
   * <p>The XPath expression for locating the password field on the login page.</p>
   * @public
   */
  PasswordFieldXpath?: string | undefined;

  /**
   * <p>The XPath expression for locating the username submit button on the login page.</p>
   * @public
   */
  UsernameButtonXpath?: string | undefined;

  /**
   * <p>The XPath expression for locating the password submit button on the login page.</p>
   * @public
   */
  PasswordButtonXpath?: string | undefined;

  /**
   * <p>The URL of the login page for the web crawler to authenticate.</p>
   * @public
   */
  LoginPageUrl?: string | undefined;

  /**
   * <p>The hostname of the web proxy server for the web crawler.</p>
   * @public
   */
  WebProxyHostName?: string | undefined;

  /**
   * <p>The port number of the web proxy server for the web crawler.</p>
   * @public
   */
  WebProxyPortNumber?: number | undefined;
}

/**
 * <p>The parameters that Quick Sight uses to connect to your underlying data source.
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
  | DataSourceParameters.ConfluenceParametersMember
  | DataSourceParameters.CustomConnectionParametersMember
  | DataSourceParameters.DatabricksParametersMember
  | DataSourceParameters.ExasolParametersMember
  | DataSourceParameters.ImpalaParametersMember
  | DataSourceParameters.JiraParametersMember
  | DataSourceParameters.MariaDbParametersMember
  | DataSourceParameters.MySqlParametersMember
  | DataSourceParameters.OracleParametersMember
  | DataSourceParameters.PostgreSqlParametersMember
  | DataSourceParameters.PrestoParametersMember
  | DataSourceParameters.QBusinessParametersMember
  | DataSourceParameters.RdsParametersMember
  | DataSourceParameters.RedshiftParametersMember
  | DataSourceParameters.S3KnowledgeBaseParametersMember
  | DataSourceParameters.S3ParametersMember
  | DataSourceParameters.ServiceNowParametersMember
  | DataSourceParameters.SnowflakeParametersMember
  | DataSourceParameters.SparkParametersMember
  | DataSourceParameters.SqlServerParametersMember
  | DataSourceParameters.StarburstParametersMember
  | DataSourceParameters.TeradataParametersMember
  | DataSourceParameters.TrinoParametersMember
  | DataSourceParameters.TwitterParametersMember
  | DataSourceParameters.WebCrawlerParametersMember
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for S3 Knowledge Base.</p>
   * @public
   */
  export interface S3KnowledgeBaseParametersMember {
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
    S3KnowledgeBaseParameters: S3KnowledgeBaseParameters;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Impala.</p>
   * @public
   */
  export interface ImpalaParametersMember {
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters: ImpalaParameters;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for custom connectors.</p>
   * @public
   */
  export interface CustomConnectionParametersMember {
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters: CustomConnectionParameters;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Web Crawler.</p>
   * @public
   */
  export interface WebCrawlerParametersMember {
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters: WebCrawlerParameters;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Confluence.</p>
   * @public
   */
  export interface ConfluenceParametersMember {
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters: ConfluenceParameters;
    QBusinessParameters?: never;
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon Q Business.</p>
   * @public
   */
  export interface QBusinessParametersMember {
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters: QBusinessParameters;
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
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
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
    S3KnowledgeBaseParameters: (value: S3KnowledgeBaseParameters) => T;
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
    ImpalaParameters: (value: ImpalaParameters) => T;
    CustomConnectionParameters: (value: CustomConnectionParameters) => T;
    WebCrawlerParameters: (value: WebCrawlerParameters) => T;
    ConfluenceParameters: (value: ConfluenceParameters) => T;
    QBusinessParameters: (value: QBusinessParameters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Secure Socket Layer (SSL) properties that apply when Quick Sight connects to your
 *             underlying data source.</p>
 * @public
 */
export interface SslProperties {
  /**
   * <p>A Boolean option to control whether SSL should be disabled.</p>
   * @public
   */
  DisableSsl?: boolean | undefined;
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
  Name?: string | undefined;

  /**
   * <p>The parameters that Quick Sight uses to connect to your underlying data source.
   *             This is a variant type structure. For this structure to be valid, only one of the
   *             attributes can be non-null.</p>
   * @public
   */
  DataSourceParameters?: DataSourceParameters | undefined;

  /**
   * <p>VPC connection properties.</p>
   * @public
   */
  VpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when Quick Sight connects to your
   *             underlying data source.</p>
   * @public
   */
  SslProperties?: SslProperties | undefined;

  /**
   * <p>An optional structure that provides the credentials to be used to create the imported
   *          data source.</p>
   * @public
   */
  Credentials?: AssetBundleImportJobDataSourceCredentials | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of data source
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDataSourceOverridePermissions {
  /**
   * <p>A list of data source IDs that you want to apply overrides to. You can use
   *             <code>*</code> to override all data sources in this asset bundle.</p>
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
 * <p>An object that contains a list of tags to be assigned to a list of data source
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDataSourceOverrideTags {
  /**
   * <p>A list of data source IDs that you want to apply overrides to. You can use
   *             <code>*</code> to override all data sources in this asset bundle.</p>
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
  Arn?: string | undefined;

  /**
   * <p>The specific error type or the error that occurred.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>A description of the error.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The override parameters for a single folder that is being imported.</p>
 * @public
 */
export interface AssetBundleImportJobFolderOverrideParameters {
  /**
   * <p>The ID of the folder that you want to apply overrides to.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>A new name for the folder.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A new parent folder arn. This change can only be applied if the import creates a brand
   *          new folder. Existing folders cannot be moved.</p>
   * @public
   */
  ParentFolderArn?: string | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of folder
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobFolderOverridePermissions {
  /**
   * <p>A list of folder IDs that you want to apply overrides to. You can use <code>*</code> to
   *          override all folders in this asset bundle.</p>
   * @public
   */
  FolderIds: string[] | undefined;

  /**
   * <p>A structure that contains the permissions for the resource that you want to override in
   *          an asset bundle import job.</p>
   * @public
   */
  Permissions?: AssetBundleResourcePermissions | undefined;
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of folder IDs.</p>
 * @public
 */
export interface AssetBundleImportJobFolderOverrideTags {
  /**
   * <p>A list of folder IDs that you want to apply overrides to. You can use <code>*</code> to
   *          override all folders in this asset bundle.</p>
   * @public
   */
  FolderIds: string[] | undefined;

  /**
   * <p>A list of tags for the folders that you want to apply overrides to.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>A list of overrides for a specific <code>RefreshsSchedule</code> resource that is
 *          present in the asset bundle that is imported.</p>
 * @public
 */
export interface AssetBundleImportJobRefreshScheduleOverrideParameters {
  /**
   * <p>A partial identifier for the specific <code>RefreshSchedule</code> resource that is
   *          being overridden. This structure is used together with the <code>ScheduleID</code>
   *          structure.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>A partial identifier for the specific <code>RefreshSchedule</code> resource being
   *          overridden. This structure is used together with the <code>DataSetId</code>
   *          structure.</p>
   * @public
   */
  ScheduleId: string | undefined;

  /**
   * <p>An override for the <code>StartAfterDateTime</code> of a <code>RefreshSchedule</code>.
   *          Make sure that the <code>StartAfterDateTime</code> is set to a time that takes place in the
   *          future.</p>
   * @public
   */
  StartAfterDateTime?: Date | undefined;
}

/**
 * <p>An optional structure that configures resource ID overrides for the import job.</p>
 * @public
 */
export interface AssetBundleImportJobResourceIdOverrideConfiguration {
  /**
   * <p>An option to request a CloudFormation variable for a prefix to be prepended to each
   *          resource's ID before import. The prefix is only added to the asset IDs and does not
   *          change the name of the asset.</p>
   * @public
   */
  PrefixForAllResources?: string | undefined;
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
  Name?: string | undefined;
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
  Name?: string | undefined;

  /**
   * <p>A list of new subnet IDs for the VPC connection you are importing. This field is
   *          required if you are importing the VPC connection from another Amazon Web Services account or
   *          Region.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>A new security group ID for the VPC connection you are importing. This field is required
   *          if you are importing the VPC connection from another Amazon Web Services account or
   *          Region.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>An optional override of DNS resolvers to be used by the VPC connection.</p>
   * @public
   */
  DnsResolvers?: string[] | undefined;

  /**
   * <p>An optional override of the role ARN to be used by the VPC connection.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * <p>A list of overrides that modify the asset bundle resource configuration before the
 *          resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverrideParameters {
  /**
   * <p>An optional structure that configures resource ID overrides to be applied within the
   *          import job.</p>
   * @public
   */
  ResourceIdOverrideConfiguration?: AssetBundleImportJobResourceIdOverrideConfiguration | undefined;

  /**
   * <p>A list of overrides for any <code>VPCConnection</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  VPCConnections?: AssetBundleImportJobVPCConnectionOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>RefreshSchedule</code> resources that are present in
   *          the asset bundle that is imported.</p>
   * @public
   */
  RefreshSchedules?: AssetBundleImportJobRefreshScheduleOverrideParameters[] | undefined;

  /**
   * <p> A list of overrides for any <code>DataSource</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  DataSources?: AssetBundleImportJobDataSourceOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>DataSet</code> resources that are present in the asset
   *          bundle that is imported.</p>
   * @public
   */
  DataSets?: AssetBundleImportJobDataSetOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>Theme</code> resources that are present in the asset
   *          bundle that is imported.</p>
   * @public
   */
  Themes?: AssetBundleImportJobThemeOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>Analysis</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  Analyses?: AssetBundleImportJobAnalysisOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>Dashboard</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  Dashboards?: AssetBundleImportJobDashboardOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>Folder</code> resources that are present in the asset
   *          bundle that is imported.</p>
   * @public
   */
  Folders?: AssetBundleImportJobFolderOverrideParameters[] | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of theme
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobThemeOverridePermissions {
  /**
   * <p>A list of theme IDs that you want to apply overrides to. You can use <code>*</code> to
   *          override all themes in this asset bundle.</p>
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
 * <p>A structure that contains the override permission configurations that modify the
 *          permissions for specified resources before the resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverridePermissions {
  /**
   * <p>A list of permissions overrides for any <code>DataSource</code> resources that are
   *          present in the asset bundle that is imported.</p>
   * @public
   */
  DataSources?: AssetBundleImportJobDataSourceOverridePermissions[] | undefined;

  /**
   * <p>A list of permissions overrides for any <code>DataSet</code> resources that are present
   *          in the asset bundle that is imported.</p>
   * @public
   */
  DataSets?: AssetBundleImportJobDataSetOverridePermissions[] | undefined;

  /**
   * <p>A list of permissions overrides for any <code>Theme</code> resources that are present in
   *          the asset bundle that is imported.</p>
   * @public
   */
  Themes?: AssetBundleImportJobThemeOverridePermissions[] | undefined;

  /**
   * <p>A list of permissions overrides for any <code>Analysis</code> resources that are present
   *          in the asset bundle that is imported.</p>
   * @public
   */
  Analyses?: AssetBundleImportJobAnalysisOverridePermissions[] | undefined;

  /**
   * <p>A list of permissions overrides for any <code>Dashboard</code> resources that are
   *          present in the asset bundle that is imported.</p>
   * @public
   */
  Dashboards?: AssetBundleImportJobDashboardOverridePermissions[] | undefined;

  /**
   * <p>A list of permissions for the folders that you want to apply overrides to.</p>
   * @public
   */
  Folders?: AssetBundleImportJobFolderOverridePermissions[] | undefined;
}

/**
 * <p>An object that contains a list of tags to be assigned to a list of theme IDs.</p>
 * @public
 */
export interface AssetBundleImportJobThemeOverrideTags {
  /**
   * <p>A list of theme IDs that you want to apply overrides to. You can use <code>*</code> to
   *          override all themes in this asset bundle.</p>
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
 * <p>An object that contains a list of tags to be assigned to a list of VPC connection
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobVPCConnectionOverrideTags {
  /**
   * <p>A list of VPC connection IDs that you want to apply overrides to. You can use
   *             <code>*</code> to override all VPC connections in this asset bundle.</p>
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
 * <p>A structure that contains the override tag configuration that modify the tags that are
 *          assigned to specified resources before the resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverrideTags {
  /**
   * <p>A list of tag overrides for any <code>VPCConnection</code> resources that are present in
   *          the asset bundle that is imported.</p>
   * @public
   */
  VPCConnections?: AssetBundleImportJobVPCConnectionOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>DataSource</code> resources that are present in
   *          the asset bundle that is imported.</p>
   * @public
   */
  DataSources?: AssetBundleImportJobDataSourceOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>DataSet</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  DataSets?: AssetBundleImportJobDataSetOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>Theme</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  Themes?: AssetBundleImportJobThemeOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>Analysis</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  Analyses?: AssetBundleImportJobAnalysisOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>Dashboard</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  Dashboards?: AssetBundleImportJobDashboardOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>Folder</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  Folders?: AssetBundleImportJobFolderOverrideTags[] | undefined;
}

/**
 * <p>An optional parameter that overrides the validation strategy for all analyses and
 *          dashboards before the resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverrideValidationStrategy {
  /**
   * <p>A Boolean value that indicates whether to import all analyses and dashboards under
   *          strict or lenient mode.</p>
   * @public
   */
  StrictModeForAllResources?: boolean | undefined;
}

/**
 * <p>A summary of the import job that includes details of the requested job's
 *          configuration and its current status.</p>
 * @public
 */
export interface AssetBundleImportJobSummary {
  /**
   * <p>The current status of the import job.</p>
   * @public
   */
  JobStatus?: AssetBundleImportJobStatus | undefined;

  /**
   * <p>The ARN of the import job.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time that the import job was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The ID of the job. This ID is unique while the job is running. After the job is
   *          completed, you can reuse this ID for another job.</p>
   * @public
   */
  AssetBundleImportJobId?: string | undefined;

  /**
   * <p>The failure action for the import job.</p>
   * @public
   */
  FailureAction?: AssetBundleImportFailureAction | undefined;
}

/**
 * <p>Describes a warning that occurred during an Asset Bundle import job.</p>
 * @public
 */
export interface AssetBundleImportJobWarning {
  /**
   * <p>The ARN of the resource that the warning occurred for.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A description of the warning that occurred during an Asset Bundle import job.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The source of the asset bundle zip file that contains the data that you want to import.
 *          The file must be in <code>QUICKSIGHT_JSON</code> format.</p>
 * @public
 */
export interface AssetBundleImportSource {
  /**
   * <p>The bytes of the base64 encoded asset bundle import zip file. This file can't
   *          exceed 20 MB. If the size of the file that you want to upload is more than 20 MB, add the
   *          file to your Amazon S3 bucket and use <code>S3Uri</code> of the file for this
   *          operation.</p>
   *          <p>If you are calling the API operations from the Amazon Web Services SDK for Java,
   *          JavaScript, Python, or PHP, the SDK encodes base64 automatically to allow the direct
   *          setting of the zip file's bytes. If you are using an SDK for a different language or
   *          receiving related errors, try to base64 encode your data.</p>
   * @public
   */
  Body?: Uint8Array | undefined;

  /**
   * <p>The Amazon S3 URI for an asset bundle import file that exists in an Amazon S3 bucket that the caller has read access to. The file must be a zip format file
   *          and can't exceed 1 GB.</p>
   * @public
   */
  S3Uri?: string | undefined;
}

/**
 * <p>A description of the import source that you provide at the start of an import job. This
 *          value is set to either <code>Body</code> or <code>S3Uri</code>, depending on how the
 *             <code>StartAssetBundleImportJobRequest</code> is configured.</p>
 * @public
 */
export interface AssetBundleImportSourceDescription {
  /**
   * <p>An HTTPS download URL for the provided asset bundle that you optionally provided at the
   *          start of the import job. This URL is valid for five minutes after issuance. Call
   *             <code>DescribeAssetBundleExportJob</code> again for a fresh URL if needed. The
   *          downloaded asset bundle is a <code>.qs</code> zip file.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The Amazon S3 URI that you provided at the start of the import job.</p>
   * @public
   */
  S3Uri?: string | undefined;
}

/**
 * <p>Configuration details for OAuth 2.0 authorization code grant flow.</p>
 * @public
 */
export interface AuthorizationCodeGrantDetails {
  /**
   * <p>The client ID for the OAuth application.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The client secret for the OAuth application.</p>
   * @public
   */
  ClientSecret: string | undefined;

  /**
   * <p>The token endpoint URL for obtaining access tokens.</p>
   * @public
   */
  TokenEndpoint: string | undefined;

  /**
   * <p>The authorization endpoint URL for the OAuth flow.</p>
   * @public
   */
  AuthorizationEndpoint: string | undefined;
}

/**
 * <p>Details for OAuth 2.0 authorization code grant credentials.</p>
 * @public
 */
export type AuthorizationCodeGrantCredentialsDetails =
  | AuthorizationCodeGrantCredentialsDetails.AuthorizationCodeGrantDetailsMember
  | AuthorizationCodeGrantCredentialsDetails.$UnknownMember;

/**
 * @public
 */
export namespace AuthorizationCodeGrantCredentialsDetails {
  /**
   * <p>The authorization code grant configuration details.</p>
   * @public
   */
  export interface AuthorizationCodeGrantDetailsMember {
    AuthorizationCodeGrantDetails: AuthorizationCodeGrantDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AuthorizationCodeGrantDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AuthorizationCodeGrantDetails: (value: AuthorizationCodeGrantDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Metadata for OAuth 2.0 authorization code grant authentication.</p>
 * @public
 */
export interface AuthorizationCodeGrantMetadata {
  /**
   * <p>The base URL endpoint for the external service.</p>
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * <p>The redirect URL for the OAuth authorization flow.</p>
   * @public
   */
  RedirectUrl: string | undefined;

  /**
   * <p>The source of the authorization code grant credentials.</p>
   * @public
   */
  AuthorizationCodeGrantCredentialsSource?: AuthorizationCodeGrantCredentialsSource | undefined;

  /**
   * <p>The detailed credentials configuration for authorization code grant.</p>
   * @public
   */
  AuthorizationCodeGrantCredentialsDetails?: AuthorizationCodeGrantCredentialsDetails | undefined;
}

/**
 * <p>Metadata for basic authentication using username and password.</p>
 * @public
 */
export interface BasicAuthConnectionMetadata {
  /**
   * <p>The base URL endpoint for the external service.</p>
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * <p>The username for basic authentication.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The password for basic authentication.</p>
   * @public
   */
  Password: string | undefined;
}

/**
 * <p>Configuration details for OAuth2 client credentials grant flow, including client ID, client secret, token endpoint, and optional scopes.</p>
 * @public
 */
export interface ClientCredentialsGrantDetails {
  /**
   * <p>The client identifier issued to the client during the registration process with the authorization server.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The client secret issued to the client during the registration process with the authorization server.</p>
   * @public
   */
  ClientSecret: string | undefined;

  /**
   * <p>The authorization server endpoint used to obtain access tokens via the client credentials grant flow.</p>
   * @public
   */
  TokenEndpoint: string | undefined;
}

/**
 * <p>Details for OAuth 2.0 client credentials grant authentication.</p>
 * @public
 */
export type ClientCredentialsDetails =
  | ClientCredentialsDetails.ClientCredentialsGrantDetailsMember
  | ClientCredentialsDetails.$UnknownMember;

/**
 * @public
 */
export namespace ClientCredentialsDetails {
  /**
   * <p>The OAuth2 client credentials grant configuration details for authentication.</p>
   * @public
   */
  export interface ClientCredentialsGrantDetailsMember {
    ClientCredentialsGrantDetails: ClientCredentialsGrantDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ClientCredentialsGrantDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ClientCredentialsGrantDetails: (value: ClientCredentialsGrantDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Configuration for OAuth 2.0 client credentials grant authentication, including client ID, client secret, token endpoint, and optional scopes.</p>
 * @public
 */
export interface ClientCredentialsGrantMetadata {
  /**
   * <p>The base endpoint URL for the external service.</p>
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * <p>The source of the client credentials configuration.</p>
   * @public
   */
  ClientCredentialsSource?: ClientCredentialsSource | undefined;

  /**
   * <p>The detailed client credentials configuration including client ID, client secret, and token endpoint.</p>
   * @public
   */
  ClientCredentialsDetails?: ClientCredentialsDetails | undefined;
}

/**
 * <p>Authentication metadata for IAM-based connections, used for first-party Amazon Web Services service integrations.</p>
 * @public
 */
export interface IAMConnectionMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to assume for authentication with Amazon Web Services services. This IAM role should be in the same account as Quick Sight.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * <p>Authentication metadata for connections that do not require authentication credentials.</p>
 * @public
 */
export interface NoneConnectionMetadata {
  /**
   * <p>The base endpoint URL for connections that do not require authentication.</p>
   * @public
   */
  BaseEndpoint: string | undefined;
}

/**
 * <p>Union type containing authentication metadata for different authentication methods.</p>
 * @public
 */
export type AuthenticationMetadata =
  | AuthenticationMetadata.ApiKeyConnectionMetadataMember
  | AuthenticationMetadata.AuthorizationCodeGrantMetadataMember
  | AuthenticationMetadata.BasicAuthConnectionMetadataMember
  | AuthenticationMetadata.ClientCredentialsGrantMetadataMember
  | AuthenticationMetadata.IamConnectionMetadataMember
  | AuthenticationMetadata.NoneConnectionMetadataMember
  | AuthenticationMetadata.$UnknownMember;

/**
 * @public
 */
export namespace AuthenticationMetadata {
  /**
   * <p>OAuth 2.0 authorization code grant authentication metadata.</p>
   * @public
   */
  export interface AuthorizationCodeGrantMetadataMember {
    AuthorizationCodeGrantMetadata: AuthorizationCodeGrantMetadata;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>OAuth 2.0 client credentials grant authentication metadata.</p>
   * @public
   */
  export interface ClientCredentialsGrantMetadataMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata: ClientCredentialsGrantMetadata;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>Basic authentication metadata using username and password.</p>
   * @public
   */
  export interface BasicAuthConnectionMetadataMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata: BasicAuthConnectionMetadata;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>API key authentication metadata.</p>
   * @public
   */
  export interface ApiKeyConnectionMetadataMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata: APIKeyConnectionMetadata;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>No authentication metadata for services that don't require authentication.</p>
   * @public
   */
  export interface NoneConnectionMetadataMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata: NoneConnectionMetadata;
    IamConnectionMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>IAM role-based authentication metadata for Amazon Web Services services.</p>
   * @public
   */
  export interface IamConnectionMetadataMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata: IAMConnectionMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AuthorizationCodeGrantMetadata: (value: AuthorizationCodeGrantMetadata) => T;
    ClientCredentialsGrantMetadata: (value: ClientCredentialsGrantMetadata) => T;
    BasicAuthConnectionMetadata: (value: BasicAuthConnectionMetadata) => T;
    ApiKeyConnectionMetadata: (value: APIKeyConnectionMetadata) => T;
    NoneConnectionMetadata: (value: NoneConnectionMetadata) => T;
    IamConnectionMetadata: (value: IAMConnectionMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Authentication configuration for connecting to external services.</p>
 * @public
 */
export interface AuthConfig {
  /**
   * <p>The type of authentication method.</p>
   * @public
   */
  AuthenticationType: ConnectionAuthType | undefined;

  /**
   * <p>The authentication metadata containing the specific configuration for the chosen authentication type.</p>
   * @public
   */
  AuthenticationMetadata: AuthenticationMetadata | undefined;
}

/**
 * <p>The authorized targets that are associated with a service.</p>
 * @public
 */
export interface AuthorizedTargetsByService {
  /**
   * <p>The name of the Amazon Web Services service.</p>
   * @public
   */
  Service?: ServiceType | undefined;

  /**
   * <p>Aist of authorized targets that are represented by IAM Identity Center application ARNs.</p>
   * @public
   */
  AuthorizedTargets?: string[] | undefined;
}

/**
 * <p>The definition for the <code>ContributionAnalysisFactor</code>.</p>
 * @public
 */
export interface ContributionAnalysisFactor {
  /**
   * <p>The field name of the <code>ContributionAnalysisFactor</code>.</p>
   * @public
   */
  FieldName?: string | undefined;
}

/**
 * <p>The definition for the identifier.</p>
 * @public
 */
export interface Identifier {
  /**
   * <p>The identity of the identifier.</p>
   * @public
   */
  Identity: string | undefined;
}

/**
 * <p>The definition for the <code>FilterAggMetrics</code>.</p>
 * @public
 */
export interface FilterAggMetrics {
  /**
   * <p>The metric operand of the <code>FilterAggMetrics</code>.</p>
   * @public
   */
  MetricOperand?: Identifier | undefined;

  /**
   * <p>The function for the <code>FilterAggMetrics</code>.</p>
   * @public
   */
  Function?: AggType | undefined;

  /**
   * <p>The sort direction for <code>FilterAggMetrics</code>.</p>
   * @public
   */
  SortDirection?: TopicSortDirection | undefined;
}

/**
 * <p>The definition for a <code>CollectiveConstantEntry</code>.</p>
 * @public
 */
export interface CollectiveConstantEntry {
  /**
   * <p>The <code>ConstantType</code> of a <code>CollectiveConstantEntry</code>.</p>
   * @public
   */
  ConstantType?: ConstantType | undefined;

  /**
   * <p>The value of a <code>CollectiveConstantEntry</code>.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The definition for a <code>TopicConstantValue</code>.</p>
 * @public
 */
export interface TopicConstantValue {
  /**
   * <p>The constant type of a <code>TopicConstantValue</code>.</p>
   * @public
   */
  ConstantType?: ConstantType | undefined;

  /**
   * <p>The value of the <code>TopicConstantValue</code>.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The minimum for the <code>TopicConstantValue</code>.</p>
   * @public
   */
  Minimum?: string | undefined;

  /**
   * <p>The maximum for the <code>TopicConstantValue</code>.</p>
   * @public
   */
  Maximum?: string | undefined;

  /**
   * <p>The value list of the <code>TopicConstantValue</code>.</p>
   * @public
   */
  ValueList?: CollectiveConstantEntry[] | undefined;
}

/**
 * <p>The definition for a <code>TopicIRFilterOption</code>.</p>
 * @public
 */
export interface TopicIRFilterOption {
  /**
   * <p>The filter type for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  FilterType?: TopicIRFilterType | undefined;

  /**
   * <p>The filter class for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  FilterClass?: FilterClass | undefined;

  /**
   * <p>The operand field for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  OperandField?: Identifier | undefined;

  /**
   * <p>The function for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  Function?: TopicIRFilterFunction | undefined;

  /**
   * <p>The constant for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  Constant?: TopicConstantValue | undefined;

  /**
   * <p>The inverse for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  Inverse?: boolean | undefined;

  /**
   * <p>The null filter for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  NullFilter?: NullFilterOption | undefined;

  /**
   * <p>The aggregation for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  Aggregation?: AggType | undefined;

  /**
   * <p>The aggregation function parameters for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  AggregationFunctionParameters?: Record<string, string> | undefined;

  /**
   * <p>The <code>AggregationPartitionBy</code> for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  AggregationPartitionBy?: AggregationPartitionBy[] | undefined;

  /**
   * <p>The range for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  Range?: TopicConstantValue | undefined;

  /**
   * <p>The inclusive for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  Inclusive?: boolean | undefined;

  /**
   * <p>The time granularity for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * <p>The last next offset for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  LastNextOffset?: TopicConstantValue | undefined;

  /**
   * <p>The agg metrics for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  AggMetrics?: FilterAggMetrics[] | undefined;

  /**
   * <p>The <code>TopBottomLimit</code> for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  TopBottomLimit?: TopicConstantValue | undefined;

  /**
   * <p>The sort direction for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  SortDirection?: TopicSortDirection | undefined;

  /**
   * <p>The anchor for the <code>TopicIRFilterOption</code>.</p>
   * @public
   */
  Anchor?: Anchor | undefined;
}

/**
 * <p>The definition for the <code>ContributionAnalysisTimeRanges</code>.</p>
 * @public
 */
export interface ContributionAnalysisTimeRanges {
  /**
   * <p>The start range for the <code>ContributionAnalysisTimeRanges</code>.</p>
   * @public
   */
  StartRange?: TopicIRFilterOption | undefined;

  /**
   * <p>The end range for the <code>ContributionAnalysisTimeRanges</code>.</p>
   * @public
   */
  EndRange?: TopicIRFilterOption | undefined;
}

/**
 * <p>The definition for a <code>TopicIRContributionAnalysis</code>.</p>
 * @public
 */
export interface TopicIRContributionAnalysis {
  /**
   * <p>The factors for a <code>TopicIRContributionAnalysis</code>.</p>
   * @public
   */
  Factors?: ContributionAnalysisFactor[] | undefined;

  /**
   * <p>The time ranges for the <code>TopicIRContributionAnalysis</code>.</p>
   * @public
   */
  TimeRanges?: ContributionAnalysisTimeRanges | undefined;

  /**
   * <p>The direction for the <code>TopicIRContributionAnalysis</code>.</p>
   * @public
   */
  Direction?: ContributionAnalysisDirection | undefined;

  /**
   * <p>The sort type for the <code>TopicIRContributionAnalysis</code>.</p>
   * @public
   */
  SortType?: ContributionAnalysisSortType | undefined;
}

/**
 * <p>A structure that represents a negative format.</p>
 * @public
 */
export interface NegativeFormat {
  /**
   * <p>The prefix for a negative format.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The suffix for a negative format.</p>
   * @public
   */
  Suffix?: string | undefined;
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
  UseBlankCellFormat?: boolean | undefined;

  /**
   * <p>Determines the blank cell format.</p>
   * @public
   */
  BlankCellFormat?: string | undefined;

  /**
   * <p>Determines the <code>DateTime</code> format.</p>
   * @public
   */
  DateFormat?: string | undefined;

  /**
   * <p>Determines the decimal separator.</p>
   * @public
   */
  DecimalSeparator?: TopicNumericSeparatorSymbol | undefined;

  /**
   * <p>Determines the grouping separator.</p>
   * @public
   */
  GroupingSeparator?: string | undefined;

  /**
   * <p>A Boolean value that indicates whether to use grouping.</p>
   * @public
   */
  UseGrouping?: boolean | undefined;

  /**
   * <p>Determines the number of fraction digits.</p>
   * @public
   */
  FractionDigits?: number | undefined;

  /**
   * <p>The prefix value for a display format.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The suffix value for a display format.</p>
   * @public
   */
  Suffix?: string | undefined;

  /**
   * <p>The unit scaler. Valid values for this structure are: <code>NONE</code>,
   *             <code>AUTO</code>, <code>THOUSANDS</code>, <code>MILLIONS</code>,
   *          <code>BILLIONS</code>,
   *          and <code>TRILLIONS</code>.</p>
   * @public
   */
  UnitScaler?: NumberScale | undefined;

  /**
   * <p>The negative format.</p>
   * @public
   */
  NegativeFormat?: NegativeFormat | undefined;

  /**
   * <p>The currency symbol, such as <code>USD</code>.</p>
   * @public
   */
  CurrencySymbol?: string | undefined;
}

/**
 * <p>The definition for a <code>NamedEntityRef</code>.</p>
 * @public
 */
export interface NamedEntityRef {
  /**
   * <p>The <code>NamedEntityName</code> for the <code>NamedEntityRef</code>.</p>
   * @public
   */
  NamedEntityName?: string | undefined;
}

/**
 * <p>The definition for a <code>TopicSortClause</code>.</p>
 * @public
 */
export interface TopicSortClause {
  /**
   * <p>The operand for a <code>TopicSortClause</code>.</p>
   * @public
   */
  Operand?: Identifier | undefined;

  /**
   * <p>The sort direction for the <code>TopicSortClause</code>.</p>
   * @public
   */
  SortDirection?: TopicSortDirection | undefined;
}

/**
 * <p>The definition for a <code>TopicIRGroupBy</code>.</p>
 * @public
 */
export interface TopicIRGroupBy {
  /**
   * <p>The field name for the <code>TopicIRGroupBy</code>.</p>
   * @public
   */
  FieldName?: Identifier | undefined;

  /**
   * <p>The time granularity for the <code>TopicIRGroupBy</code>.</p>
   * @public
   */
  TimeGranularity?: TopicTimeGranularity | undefined;

  /**
   * <p>The sort for the <code>TopicIRGroupBy</code>.</p>
   * @public
   */
  Sort?: TopicSortClause | undefined;

  /**
   * <p>The display format for the <code>TopicIRGroupBy</code>.</p>
   * @public
   */
  DisplayFormat?: DisplayFormat | undefined;

  /**
   * <p>A structure that represents additional options for display formatting.</p>
   * @public
   */
  DisplayFormatOptions?: DisplayFormatOptions | undefined;

  /**
   * <p>The named entity for the <code>TopicIRGroupBy</code>.</p>
   * @public
   */
  NamedEntity?: NamedEntityRef | undefined;
}

/**
 * <p>The definition of a <code>TopicIRComparisonMethod</code>.</p>
 * @public
 */
export interface TopicIRComparisonMethod {
  /**
   * <p>The type for the <code>TopicIRComparisonMethod</code>.</p>
   * @public
   */
  Type?: ComparisonMethodType | undefined;

  /**
   * <p>The period for the <code>TopicIRComparisonMethod</code>.</p>
   * @public
   */
  Period?: TopicTimeGranularity | undefined;

  /**
   * <p>The window size for the <code>TopicIRComparisonMethod</code>.</p>
   * @public
   */
  WindowSize?: number | undefined;
}

/**
 * <p>The definition for a <code>TopicIRMetric</code>.</p>
 * @public
 */
export interface TopicIRMetric {
  /**
   * <p>The metric ID for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  MetricId?: Identifier | undefined;

  /**
   * <p>The function for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  Function?: AggFunction | undefined;

  /**
   * <p>The operands for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  Operands?: Identifier[] | undefined;

  /**
   * <p>The comparison method for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  ComparisonMethod?: TopicIRComparisonMethod | undefined;

  /**
   * <p>The expression for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>The calculated field references for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  CalculatedFieldReferences?: Identifier[] | undefined;

  /**
   * <p>The display format for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  DisplayFormat?: DisplayFormat | undefined;

  /**
   * <p>A structure that represents additional options for display formatting.</p>
   * @public
   */
  DisplayFormatOptions?: DisplayFormatOptions | undefined;

  /**
   * <p>The named entity for the <code>TopicIRMetric</code>.</p>
   * @public
   */
  NamedEntity?: NamedEntityRef | undefined;
}

/**
 * <p>The definition for a <code>VisualOptions</code>.</p>
 * @public
 */
export interface VisualOptions {
  /**
   * <p>The type for a <code>VisualOptions</code>.</p>
   * @public
   */
  type?: string | undefined;
}

/**
 * <p>The definition for a <code>TopicIR</code>.</p>
 * @public
 */
export interface TopicIR {
  /**
   * <p>The metrics for the <code>TopicIR</code>.</p>
   * @public
   */
  Metrics?: TopicIRMetric[] | undefined;

  /**
   * <p>The GroupBy list for the <code>TopicIR</code>.</p>
   * @public
   */
  GroupByList?: TopicIRGroupBy[] | undefined;

  /**
   * <p>The filters for the <code>TopicIR</code>.</p>
   * @public
   */
  Filters?: TopicIRFilterOption[][] | undefined;

  /**
   * <p>The sort for the <code>TopicIR</code>.</p>
   * @public
   */
  Sort?: TopicSortClause | undefined;

  /**
   * <p>The contribution analysis for the <code>TopicIR</code>.</p>
   * @public
   */
  ContributionAnalysis?: TopicIRContributionAnalysis | undefined;

  /**
   * <p>The visual for the <code>TopicIR</code>.</p>
   * @public
   */
  Visual?: VisualOptions | undefined;
}

/**
 * <p>The definition for the slot.</p>
 * @public
 */
export interface Slot {
  /**
   * <p>The slot ID of the slot.</p>
   * @public
   */
  SlotId?: string | undefined;

  /**
   * <p>The visual ID for the slot.</p>
   * @public
   */
  VisualId?: string | undefined;
}

/**
 * <p>The definition for a <code>TopicTemplate</code>.</p>
 * @public
 */
export interface TopicTemplate {
  /**
   * <p>The template type for the <code>TopicTemplate</code>.</p>
   * @public
   */
  TemplateType?: string | undefined;

  /**
   * <p>The slots for the <code>TopicTemplate</code>.</p>
   * @public
   */
  Slots?: Slot[] | undefined;
}

/**
 * <p>The definition for a <code>InvalidTopicReviewedAnswer</code>.</p>
 * @public
 */
export interface InvalidTopicReviewedAnswer {
  /**
   * <p>The answer ID for the <code>InvalidTopicReviewedAnswer</code>.</p>
   * @public
   */
  AnswerId?: string | undefined;

  /**
   * <p>The error that is returned for the <code>InvalidTopicReviewedAnswer</code>.</p>
   * @public
   */
  Error?: ReviewedAnswerErrorCode | undefined;
}

/**
 * <p>The definition for a <code>SucceededTopicReviewedAnswer</code>.</p>
 * @public
 */
export interface SucceededTopicReviewedAnswer {
  /**
   * <p>The answer ID for the <code>SucceededTopicReviewedAnswer</code>.</p>
   * @public
   */
  AnswerId?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateTopicReviewedAnswerResponse {
  /**
   * <p>The ID for the topic reviewed answer that you want to create. This ID is unique per Amazon Web Services Region
   *          for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>The definition of Answers that are successfully created.</p>
   * @public
   */
  SucceededAnswers?: SucceededTopicReviewedAnswer[] | undefined;

  /**
   * <p>The definition of Answers that are invalid and not created.</p>
   * @public
   */
  InvalidAnswers?: InvalidTopicReviewedAnswer[] | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTopicReviewedAnswerRequest {
  /**
   * <p>The ID of the Amazon Web Services account that you want to delete a reviewed answers in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the topic reviewed answer that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;

  /**
   * <p>The Answer IDs of the Answers to be deleted.</p>
   * @public
   */
  AnswerIds?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTopicReviewedAnswerResponse {
  /**
   * <p>The ID of the topic reviewed answer that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>The definition of Answers that are successfully deleted.</p>
   * @public
   */
  SucceededAnswers?: SucceededTopicReviewedAnswer[] | undefined;

  /**
   * <p>The definition of Answers that are invalid and not deleted.</p>
   * @public
   */
  InvalidAnswers?: InvalidTopicReviewedAnswer[] | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

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
   * <p>The option to add color for tile borders for visuals.</p>
   * @public
   */
  Color?: string | undefined;

  /**
   * <p>The option to enable display of borders for visuals.</p>
   * @public
   */
  Show?: boolean | undefined;

  /**
   * <p>The option to set the width of tile borders for visuals.</p>
   * @public
   */
  Width?: string | undefined;
}

/**
 * <p>The source of the image.</p>
 * @public
 */
export type ImageSource = ImageSource.PublicUrlMember | ImageSource.S3UriMember | ImageSource.$UnknownMember;

/**
 * @public
 */
export namespace ImageSource {
  /**
   * <p>The public URL that points to the source image.</p>
   * @public
   */
  export interface PublicUrlMember {
    PublicUrl: string;
    S3Uri?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon S3 URI that points to the source image.</p>
   * @public
   */
  export interface S3UriMember {
    PublicUrl?: never;
    S3Uri: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PublicUrl?: never;
    S3Uri?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PublicUrl: (value: string) => T;
    S3Uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The logo image configuration.</p>
 * @public
 */
export interface ImageConfiguration {
  /**
   * <p>The source of the image.</p>
   * @public
   */
  Source?: ImageSource | undefined;
}

/**
 * <p>The image set configuration.</p>
 * @public
 */
export interface ImageSetConfiguration {
  /**
   * <p>The original image.</p>
   * @public
   */
  Original: ImageConfiguration | undefined;
}

/**
 * <p>The logo set configuration.</p>
 * @public
 */
export interface LogoSetConfiguration {
  /**
   * <p>The primary logo.</p>
   * @public
   */
  Primary: ImageSetConfiguration | undefined;

  /**
   * <p>The favicon logo.</p>
   * @public
   */
  Favicon?: ImageSetConfiguration | undefined;
}

/**
 * <p>The logo configuration.</p>
 * @public
 */
export interface LogoConfiguration {
  /**
   * <p>The alt text for the logo.</p>
   * @public
   */
  AltText: string | undefined;

  /**
   * <p>A set of configured logos.</p>
   * @public
   */
  LogoSet: LogoSetConfiguration | undefined;
}

/**
 * <p>The definition of the brand.</p>
 * @public
 */
export interface BrandDefinition {
  /**
   * <p>The name of the brand.</p>
   * @public
   */
  BrandName: string | undefined;

  /**
   * <p>The description of the brand.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The application theme of the brand.</p>
   * @public
   */
  ApplicationTheme?: ApplicationTheme | undefined;

  /**
   * <p>The logo configuration of the brand.</p>
   * @public
   */
  LogoConfiguration?: LogoConfiguration | undefined;
}

/**
 * <p>The logo image.</p>
 * @public
 */
export interface Image {
  /**
   * <p>The source of the logo image.</p>
   * @public
   */
  Source?: ImageSource | undefined;

  /**
   * <p>The URL that points to the generated logo image.</p>
   * @public
   */
  GeneratedImageUrl?: string | undefined;
}

/**
 * <p>The image set.</p>
 * @public
 */
export interface ImageSet {
  /**
   * <p>The original image.</p>
   * @public
   */
  Original: Image | undefined;

  /**
   * <p>The image with the height set to 64 pixels.</p>
   * @public
   */
  Height64?: Image | undefined;

  /**
   * <p>The image with the height set to 32 pixels.</p>
   * @public
   */
  Height32?: Image | undefined;
}

/**
 * <p>A set of logos.</p>
 * @public
 */
export interface LogoSet {
  /**
   * <p>The primary logo.</p>
   * @public
   */
  Primary: ImageSet | undefined;

  /**
   * <p>The favicon logo.</p>
   * @public
   */
  Favicon?: ImageSet | undefined;
}

/**
 * <p>The logo configuration.</p>
 * @public
 */
export interface Logo {
  /**
   * <p>The alt text for the logo.</p>
   * @public
   */
  AltText: string | undefined;

  /**
   * <p>A set of configured logos.</p>
   * @public
   */
  LogoSet: LogoSet | undefined;
}

/**
 * <p>The details of the brand.</p>
 * @public
 */
export interface BrandDetail {
  /**
   * <p>The ID of the Quick Suite brand.</p>
   * @public
   */
  BrandId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the brand.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The status of the brand.</p>
   * @public
   */
  BrandStatus?: BrandStatus | undefined;

  /**
   * <p>The time that the brand was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The last time the brand was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The ID of the version.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>The status of the version.</p>
   * @public
   */
  VersionStatus?: BrandVersionStatus | undefined;

  /**
   * <p>A list of errors that occurred during the most recent brand operation.</p>
   * @public
   */
  Errors?: string[] | undefined;

  /**
   * <p>The logo details.</p>
   * @public
   */
  Logo?: Logo | undefined;
}

/**
 * <p>A summary of the brand.</p>
 * @public
 */
export interface BrandSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the brand.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the Quick Suite brand.</p>
   * @public
   */
  BrandId?: string | undefined;

  /**
   * <p>The name of the brand.</p>
   * @public
   */
  BrandName?: string | undefined;

  /**
   * <p>The description of the brand.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the brand.</p>
   * @public
   */
  BrandStatus?: BrandStatus | undefined;

  /**
   * <p>The time that the brand was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The time when the brand was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
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
   *             of a calculated column matches that of an existing calculated column, Quick Sight
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
  Arn?: string | undefined;

  /**
   * <p>An ID for the ingestion.</p>
   * @public
   */
  IngestionId?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * <p>A set of actions that correspond to Amazon Quick Sight permissions.</p>
 * @public
 */
export interface Capabilities {
  /**
   * <p>The ability to export to CSV files from the UI.</p>
   * @public
   */
  ExportToCsv?: CapabilityState | undefined;

  /**
   * <p>The ability to export to Excel files from the UI.</p>
   * @public
   */
  ExportToExcel?: CapabilityState | undefined;

  /**
   * <p>The ability to export to PDF files from the UI.</p>
   * @public
   */
  ExportToPdf?: CapabilityState | undefined;

  /**
   * <p>The ability to print reports.</p>
   * @public
   */
  PrintReports?: CapabilityState | undefined;

  /**
   * <p>The ability to export to Create and Update themes.</p>
   * @public
   */
  CreateAndUpdateThemes?: CapabilityState | undefined;

  /**
   * <p>The ability to add or run anomaly detection.</p>
   * @public
   */
  AddOrRunAnomalyDetectionForAnalyses?: CapabilityState | undefined;

  /**
   * <p>The ability to share analyses.</p>
   * @public
   */
  ShareAnalyses?: CapabilityState | undefined;

  /**
   * <p>The ability to create and update datasets.</p>
   * @public
   */
  CreateAndUpdateDatasets?: CapabilityState | undefined;

  /**
   * <p>The ability to share datasets.</p>
   * @public
   */
  ShareDatasets?: CapabilityState | undefined;

  /**
   * <p>The ability to subscribe to email reports.</p>
   * @public
   */
  SubscribeDashboardEmailReports?: CapabilityState | undefined;

  /**
   * <p>The ability to create and update email reports.</p>
   * @public
   */
  CreateAndUpdateDashboardEmailReports?: CapabilityState | undefined;

  /**
   * <p>The ability to share dashboards.</p>
   * @public
   */
  ShareDashboards?: CapabilityState | undefined;

  /**
   * <p>The ability to create and update threshold alerts.</p>
   * @public
   */
  CreateAndUpdateThresholdAlerts?: CapabilityState | undefined;

  /**
   * <p>The ability to rename shared folders.</p>
   * @public
   */
  RenameSharedFolders?: CapabilityState | undefined;

  /**
   * <p>The ability to create shared folders.</p>
   * @public
   */
  CreateSharedFolders?: CapabilityState | undefined;

  /**
   * <p>The ability to create and update data sources.</p>
   * @public
   */
  CreateAndUpdateDataSources?: CapabilityState | undefined;

  /**
   * <p>The ability to share data sources.</p>
   * @public
   */
  ShareDataSources?: CapabilityState | undefined;

  /**
   * <p>The ability to view account SPICE capacity.</p>
   * @public
   */
  ViewAccountSPICECapacity?: CapabilityState | undefined;

  /**
   * <p>The ability to create a SPICE dataset.</p>
   * @public
   */
  CreateSPICEDataset?: CapabilityState | undefined;

  /**
   * <p>The ability to export to PDF files in scheduled email reports.</p>
   * @public
   */
  ExportToPdfInScheduledReports?: CapabilityState | undefined;

  /**
   * <p>The ability to export to CSV files in scheduled email reports.</p>
   * @public
   */
  ExportToCsvInScheduledReports?: CapabilityState | undefined;

  /**
   * <p>The ability to export to Excel files in scheduled email reports.</p>
   * @public
   */
  ExportToExcelInScheduledReports?: CapabilityState | undefined;

  /**
   * <p>The ability to include content in scheduled email reports.</p>
   * @public
   */
  IncludeContentInScheduledReportsEmail?: CapabilityState | undefined;

  /**
   * <p>The ability to perform dashboard-related actions.</p>
   * @public
   */
  Dashboard?: CapabilityState | undefined;

  /**
   * <p>The ability to perform analysis-related actions.</p>
   * @public
   */
  Analysis?: CapabilityState | undefined;

  /**
   * <p>The ability to perform automate-related actions.</p>
   * @public
   */
  Automate?: CapabilityState | undefined;

  /**
   * <p>The ability to perform flow-related actions.</p>
   * @public
   */
  Flow?: CapabilityState | undefined;

  /**
   * <p>The ability to enable approvals for flow share.</p>
   * @public
   */
  PublishWithoutApproval?: CapabilityState | undefined;

  /**
   * <p>The ability to use Bedrock models for general knowledge step in flows.</p>
   * @public
   */
  UseBedrockModels?: CapabilityState | undefined;

  /**
   * <p>The ability to use UI Agent step to perform tasks on public websites.</p>
   * @public
   */
  PerformFlowUiTask?: CapabilityState | undefined;

  /**
   * <p>The ability to use internet to enhance results in Chat Agents, Flows, and Quick Research.
   * 	          Web search queries will be processed securely in an Amazon Web Services region <code>us-east-1</code>.</p>
   * @public
   */
  UseAgentWebSearch?: CapabilityState | undefined;

  /**
   * <p>The ability to use knowledge bases to specify content from external applications.</p>
   * @public
   */
  KnowledgeBase?: CapabilityState | undefined;

  /**
   * <p>The ability to perform actions in external services through Action connectors. Actions allow users to interact with third-party systems.</p>
   * @public
   */
  Action?: CapabilityState | undefined;

  /**
   * <p>The ability to perform space-related actions.</p>
   * @public
   */
  Space?: CapabilityState | undefined;

  /**
   * <p>The ability to perform chat-related actions.</p>
   * @public
   */
  ChatAgent?: CapabilityState | undefined;

  /**
   * <p>The ability to create chat agents.</p>
   * @public
   */
  CreateChatAgents?: CapabilityState | undefined;

  /**
   * <p>The ability to perform research-related actions.</p>
   * @public
   */
  Research?: CapabilityState | undefined;
}

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
  SubType?: ColumnDataSubType | undefined;

  /**
   * <p>When casting a column from string to datetime type, you can supply a string in a
   *             format supported by Quick Sight to denote the source data format.</p>
   * @public
   */
  Format?: string | undefined;
}

/**
 * <p>A transform operation that changes the data types of one or more columns in the dataset.</p>
 * @public
 */
export interface CastColumnTypesOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The source transform operation that provides input data for the type casting.</p>
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * <p>The list of column type casting operations to perform.</p>
   * @public
   */
  CastColumnTypeOperations: CastColumnTypeOperation[] | undefined;
}

/**
 * <p>A structure that represents the cell value synonym.</p>
 * @public
 */
export interface CellValueSynonym {
  /**
   * <p>The cell value.</p>
   * @public
   */
  CellValue?: string | undefined;

  /**
   * <p>Other names or aliases for the cell value.</p>
   * @public
   */
  Synonyms?: string[] | undefined;
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
  ValueList?: string[] | undefined;
}

/**
 * <p>Metadata that contains a description for a column.</p>
 * @public
 */
export interface ColumnDescription {
  /**
   * <p>The text of a description for a column.</p>
   * @public
   */
  Text?: string | undefined;
}

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
  CountryCode?: GeoSpatialCountryCode | undefined;

  /**
   * <p>Columns in this hierarchy.</p>
   * @public
   */
  Columns: string[] | undefined;
}

/**
 * <p>Groupings of columns that work together in certain Quick Sight features. This is
 *             a variant type structure. For this structure to be valid, only one of the attributes can
 *             be non-null.</p>
 * @public
 */
export interface ColumnGroup {
  /**
   * <p>Geospatial column group that denotes a hierarchy.</p>
   * @public
   */
  GeoSpatialColumnGroup?: GeoSpatialColumnGroup | undefined;
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
  Name?: string | undefined;
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
  Name?: string | undefined;

  /**
   * <p>A structure containing the list of schemas for column group columns.</p>
   * @public
   */
  ColumnGroupColumnSchemaList?: ColumnGroupColumnSchema[] | undefined;
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
   * <p>An array of Amazon Resource Names (ARNs) for Quick Sight users or groups.</p>
   * @public
   */
  Principals?: string[] | undefined;

  /**
   * <p>An array of column names.</p>
   * @public
   */
  ColumnNames?: string[] | undefined;
}

/**
 * <p>The column schema.</p>
 * @public
 */
export interface ColumnSchema {
  /**
   * <p>The name of the column schema.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The data type of the column schema.</p>
   * @public
   */
  DataType?: string | undefined;

  /**
   * <p>The geographic role of the column schema.</p>
   * @public
   */
  GeographicRole?: string | undefined;
}

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
  ColumnGeographicRole?: GeoSpatialDataRole | undefined;

  /**
   * <p>A description for a column.</p>
   * @public
   */
  ColumnDescription?: ColumnDescription | undefined;
}

/**
 * <p>Specifies a column to be unpivoted, transforming it from a column into rows with associated values.</p>
 * @public
 */
export interface ColumnToUnpivot {
  /**
   * <p>The name of the column to unpivot from the source data.</p>
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * <p>The value to assign to this column in the unpivoted result, typically the column name or a descriptive label.</p>
   * @public
   */
  NewValue?: string | undefined;
}

/**
 * <p>A structure that represents a comparative order.</p>
 * @public
 */
export interface ComparativeOrder {
  /**
   * <p>The ordering type for a column. Valid values for this structure are <code>GREATER_IS_BETTER</code>, <code>LESSER_IS_BETTER</code> and <code>SPECIFIED</code>.</p>
   * @public
   */
  UseOrdering?: ColumnOrderingType | undefined;

  /**
   * <p>The list of columns to be used in the ordering.</p>
   * @public
   */
  SpecifedOrder?: string[] | undefined;

  /**
   * <p>The treat of undefined specified values. Valid values for this structure are <code>LEAST</code> and <code>MOST</code>.</p>
   * @public
   */
  TreatUndefinedSpecifiedValues?: UndefinedSpecifiedValueType | undefined;
}

/**
 * @public
 */
export interface CreateAccountCustomizationRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to customize Quick Sight for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Quick Sight namespace that you want to add customizations to.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The Quick Sight customizations you're adding. You can add
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
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAccountCustomizationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the customization that you created for this Amazon Web Services account.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that you want to customize Quick Sight for.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>The namespace associated with the customization you're creating. </p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The Quick Sight customizations you're adding. </p>
   * @public
   */
  AccountCustomization?: AccountCustomization | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface CreateAccountSubscriptionRequest {
  /**
   * <p>The edition of Amazon Quick Sight that you want your account to have. Currently, you can
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
  Edition?: Edition | undefined;

  /**
   * <p>The method that you want to use to authenticate your Quick Sight account.</p>
   *          <p>If you choose <code>ACTIVE_DIRECTORY</code>, provide an <code>ActiveDirectoryName</code>
   *             and an <code>AdminGroup</code> associated with your Active Directory.</p>
   *          <p>If you choose <code>IAM_IDENTITY_CENTER</code>, provide an <code>AdminGroup</code> associated with your IAM Identity Center account.</p>
   * @public
   */
  AuthenticationMethod: AuthenticationMethodOption | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account that you're using to create your Quick Sight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of your Amazon Quick Sight account. This name is unique over all of Amazon Web Services, and it appears only when users sign in. You can't change
   *                 <code>AccountName</code> value after the Amazon Quick Sight account is
   *             created.</p>
   * @public
   */
  AccountName: string | undefined;

  /**
   * <p>The email address that you want Quick Sight to send notifications to regarding your Quick Sight account or Quick Sight subscription.</p>
   * @public
   */
  NotificationEmail: string | undefined;

  /**
   * <p>The name of your Active Directory. This field is required if <code>ACTIVE_DIRECTORY</code> is the selected authentication method of the new Quick Sight account.</p>
   * @public
   */
  ActiveDirectoryName?: string | undefined;

  /**
   * <p>The realm of the Active Directory that is associated with your Quick Sight account. This field is required if <code>ACTIVE_DIRECTORY</code> is the selected authentication method of the new Quick Sight account.</p>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p>The ID of the Active Directory that is associated with your Quick Sight account.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The admin group associated with your Active Directory or IAM Identity Center account. Either this field or the <code>AdminProGroup</code> field is required if <code>ACTIVE_DIRECTORY</code> or <code>IAM_IDENTITY_CENTER</code> is the selected authentication method of the new Quick Sight account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide.</p>
   * @public
   */
  AdminGroup?: string[] | undefined;

  /**
   * <p>The author group associated with your Active Directory or IAM Identity Center account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide.</p>
   * @public
   */
  AuthorGroup?: string[] | undefined;

  /**
   * <p>The reader group associated with your Active Directory or IAM Identity Center account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide.</p>
   * @public
   */
  ReaderGroup?: string[] | undefined;

  /**
   * <p>The admin pro group associated with your Active Directory or IAM Identity Center account. Either this field or the <code>AdminGroup</code> field is required if <code>ACTIVE_DIRECTORY</code> or <code>IAM_IDENTITY_CENTER</code> is the selected authentication method of the new Quick Sight account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide.</p>
   * @public
   */
  AdminProGroup?: string[] | undefined;

  /**
   * <p>The author pro group associated with your Active Directory or IAM Identity Center account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide.</p>
   * @public
   */
  AuthorProGroup?: string[] | undefined;

  /**
   * <p>The reader pro group associated with your Active Directory or IAM Identity Center account.</p>
   *          <p>For more information about using IAM Identity Center in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html">Using IAM Identity Center with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with Amazon Quick Sight Enterprise Edition</a> in the Amazon Quick Sight User Guide.</p>
   * @public
   */
  ReaderProGroup?: string[] | undefined;

  /**
   * <p>The first name of the author of the Amazon Quick Sight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon Quick Sight account.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>The last name of the author of the Amazon Quick Sight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon Quick Sight account.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>The email address of the author of the Amazon Quick Sight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon Quick Sight account.</p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p>A 10-digit phone number for the author of the Amazon Quick Sight account to use for
   *             future communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the
   *             selected edition of the new Amazon Quick Sight account.</p>
   * @public
   */
  ContactNumber?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM Identity Center instance.</p>
   * @public
   */
  IAMIdentityCenterInstanceArn?: string | undefined;
}

/**
 * <p>A <code>SignupResponse</code> object that contains a summary of a newly created account.</p>
 * @public
 */
export interface SignupResponse {
  /**
   * <p>A Boolean that is <code>TRUE</code> if the Amazon Quick Sight uses IAM as an
   *             authentication method.</p>
   * @public
   */
  IAMUser?: boolean | undefined;

  /**
   * <p>The user login name for your Amazon Quick Sight account.</p>
   * @public
   */
  userLoginName?: string | undefined;

  /**
   * <p>The name of your Quick Sight account.</p>
   * @public
   */
  accountName?: string | undefined;

  /**
   * <p>The type of Active Directory that is being used to authenticate the Amazon Quick Sight
   *             account. Valid values are <code>SIMPLE_AD</code>, <code>AD_CONNECTOR</code>, and
   *                 <code>MICROSOFT_AD</code>.</p>
   * @public
   */
  directoryType?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountSubscriptionResponse {
  /**
   * <p>A <code>SignupResponse</code> object that returns information about a newly created Quick Sight account.</p>
   * @public
   */
  SignupResponse?: SignupResponse | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
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
   *                <p>The ARN of an Quick Sight user or group associated with a data source or dataset. (This is common.)</p>
   *             </li>
   *             <li>
   *                <p>The ARN of an Quick Sight user, group, or namespace associated with an analysis, dashboard, template, or theme. Namespace sharing is not supported for action connectors. (This is common.)</p>
   *             </li>
   *             <li>
   *                <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a Quick Sight
   *                     ARN. Use this option only to share resources (templates) across Amazon Web Services accounts. Account root sharing is not supported for action connectors.
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
 */
export interface CreateActionConnectorRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the action connector.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A unique identifier for the action connector. This ID must be unique within the Amazon Web Services account. The <code>ActionConnectorId</code> must not
   * 	          start with the prefix <code>quicksuite-</code>
   *          </p>
   * @public
   */
  ActionConnectorId: string | undefined;

  /**
   * <p>A descriptive name for the action connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of action connector.</p>
   * @public
   */
  Type: ActionConnectorType | undefined;

  /**
   * <p>The authentication configuration for connecting to the external service. This includes the authentication type, base URL, and authentication metadata such as client credentials or API keys.</p>
   * @public
   */
  AuthenticationConfig: AuthConfig | undefined;

  /**
   * <p>An optional description of the action connector.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The permissions configuration that defines which users, groups, or namespaces can access this action connector and what operations they can perform.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The ARN of the VPC connection to use for secure connectivity to the external service.</p>
   * @public
   */
  VpcConnectionArn?: string | undefined;

  /**
   * <p>A list of tags to apply to the action connector for resource management and organization.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateActionConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created action connector.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The creation status of the action connector.</p>
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

  /**
   * <p>The unique identifier of the created action connector.</p>
   * @public
   */
  ActionConnectorId?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status code of the request.</p>
   * @public
   */
  Status?: number | undefined;
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
 * <p>A list of Quick Sight parameters and the list's override values.</p>
 * @public
 */
export interface _Parameters {
  /**
   * <p>The parameters that have a data type of string.</p>
   * @public
   */
  StringParameters?: StringParameter[] | undefined;

  /**
   * <p>The parameters that have a data type of integer.</p>
   * @public
   */
  IntegerParameters?: IntegerParameter[] | undefined;

  /**
   * <p>The parameters that have a data type of decimal.</p>
   * @public
   */
  DecimalParameters?: DecimalParameter[] | undefined;

  /**
   * <p>The parameters that have a data type of date-time.</p>
   * @public
   */
  DateTimeParameters?: DateTimeParameter[] | undefined;
}

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
   *             analysis in the Amazon Quick Sight console. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The parameter names and override values that you want to use. An analysis can have
   *             any parameter type, and some parameters might accept multiple values. </p>
   * @public
   */
  Parameters?: _Parameters | undefined;

  /**
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis. You can use the <code>Permissions</code> structure to grant permissions by
   *             providing a list of Identity and Access Management (IAM) action information for each
   *             principal listed by Amazon Resource Name (ARN). </p>
   *          <p>To specify no permissions, omit <code>Permissions</code>.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>A source entity to use for the analysis that you're creating. This metadata structure
   *             contains details that describe a source template and one or more datasets.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   * @public
   */
  SourceEntity?: AnalysisSourceEntity | undefined;

  /**
   * <p>The ARN for the theme to apply to the analysis that you're creating. To see the theme
   *             in the Amazon Quick Sight console, make sure that you have access to it.</p>
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   *             analysis.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The definition of an analysis.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   * @public
   */
  Definition?: AnalysisDefinition | undefined;

  /**
   * <p>The option to relax the validation needed to create an analysis with definition objects. This skips the validation step for specific errors.</p>
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;

  /**
   * <p>When you create the analysis, Amazon Quick Sight adds the analysis to these folders.</p>
   * @public
   */
  FolderArns?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateAnalysisResponse {
  /**
   * <p>The ARN for the analysis.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the analysis.</p>
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * <p>The status of the creation of the analysis. </p>
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface CreateBrandRequest {
  /**
   * <p>The ID of the Amazon Web Services account that owns the brand.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the Quick Suite brand.</p>
   * @public
   */
  BrandId: string | undefined;

  /**
   * <p>The definition of the brand.</p>
   * @public
   */
  BrandDefinition?: BrandDefinition | undefined;

  /**
   * <p>A map of the key-value pairs that are assigned to the brand.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateBrandResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The details of the brand.</p>
   * @public
   */
  BrandDetail?: BrandDetail | undefined;

  /**
   * <p>The definition of the brand.</p>
   * @public
   */
  BrandDefinition?: BrandDefinition | undefined;
}

/**
 * <p>A transform operation that creates calculated columns. Columns created in one such
 *             operation form a lexical closure.</p>
 * @public
 */
export interface CreateColumnsOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias?: string | undefined;

  /**
   * <p>The source transform operation that provides input data for creating new calculated columns.</p>
   * @public
   */
  Source?: TransformOperationSource | undefined;

  /**
   * <p>Calculated columns to create.</p>
   * @public
   */
  Columns: CalculatedColumn[] | undefined;
}

/**
 * @public
 */
export interface CreateCustomPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that you want to create the custom permissions profile in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the custom permissions profile that you want to create.</p>
   * @public
   */
  CustomPermissionsName: string | undefined;

  /**
   * <p>A set of actions to include in the custom permissions profile.</p>
   * @public
   */
  Capabilities?: Capabilities | undefined;

  /**
   * <p>The tags to associate with the custom permissions profile.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCustomPermissionsResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom permissions profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
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
  AvailabilityStatus?: DashboardBehavior | undefined;
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
  AvailabilityStatus?: DashboardBehavior | undefined;
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
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>Adds Q&A capabilities to a dashboard. If no topic is linked, Dashboard Q&A uses the data values that are rendered on the dashboard. End users can use Dashboard Q&A to ask for different slices of the data that they see on the dashboard. If a topic is linked, Topic Q&A is enabled.</p>
 * @public
 */
export interface DataQAEnabledOption {
  /**
   * <p>The status of the Data Q&A option on the dashboard.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>Executive summary option.</p>
 * @public
 */
export interface DataStoriesSharingOption {
  /**
   * <p>Availability status.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>Data stories sharing option.</p>
 * @public
 */
export interface ExecutiveSummaryOption {
  /**
   * <p>Availability status.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
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
  AvailabilityStatus?: DashboardBehavior | undefined;
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
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>Determines if Actions in Amazon Quick Suite are enabled in a dashboard..</p>
 * @public
 */
export interface QuickSuiteActionsOption {
  /**
   * <p>Availability status.</p>
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * <p>Sheet controls option.</p>
 * @public
 */
export interface SheetControlsOption {
  /**
   * <p>Visibility state.</p>
   * @public
   */
  VisibilityState?: DashboardUIState | undefined;
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
  AvailabilityStatus?: DashboardBehavior | undefined;
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
  AvailabilityStatus?: DashboardBehavior | undefined;
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
  AvailabilityStatus?: DashboardBehavior | undefined;
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
  ExportHiddenFieldsOption?: ExportHiddenFieldsOption | undefined;
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
  AdHocFilteringOption?: AdHocFilteringOption | undefined;

  /**
   * <p>Export to .csv option.</p>
   * @public
   */
  ExportToCSVOption?: ExportToCSVOption | undefined;

  /**
   * <p>Sheet controls option.</p>
   * @public
   */
  SheetControlsOption?: SheetControlsOption | undefined;

  /**
   * <p>The visual publish options of a visual in a dashboard.</p>
   *
   * @deprecated VisualPublishOptions property will reach its end of standard support in a future release. To perform this action, use ExportWithHiddenFields.
   * @public
   */
  VisualPublishOptions?: DashboardVisualPublishOptions | undefined;

  /**
   * <p>The sheet layout maximization options of a dashbaord.</p>
   * @public
   */
  SheetLayoutElementMaximizationOption?: SheetLayoutElementMaximizationOption | undefined;

  /**
   * <p>The menu options of a visual in a dashboard.</p>
   * @public
   */
  VisualMenuOption?: VisualMenuOption | undefined;

  /**
   * <p>The axis sort options of a dashboard.</p>
   * @public
   */
  VisualAxisSortOption?: VisualAxisSortOption | undefined;

  /**
   * <p>Determines if hidden fields are exported with a dashboard.</p>
   * @public
   */
  ExportWithHiddenFieldsOption?: ExportWithHiddenFieldsOption | undefined;

  /**
   * <p>The drill-down options of data points in a dashboard.</p>
   * @public
   */
  DataPointDrillUpDownOption?: DataPointDrillUpDownOption | undefined;

  /**
   * <p>The data point menu label options of a dashboard.</p>
   * @public
   */
  DataPointMenuLabelOption?: DataPointMenuLabelOption | undefined;

  /**
   * <p>The data point tool tip options of a dashboard.</p>
   * @public
   */
  DataPointTooltipOption?: DataPointTooltipOption | undefined;

  /**
   * <p>Adds Q&A capabilities to an Quick Sight dashboard. If no topic is linked, Dashboard Q&A uses the data values that are rendered on the dashboard. End users can use Dashboard Q&A to ask for different slices of the data that they see on the dashboard. If a topic is linked, Topic Q&A is used.</p>
   * @public
   */
  DataQAEnabledOption?: DataQAEnabledOption | undefined;

  /**
   * <p>Determines if Actions in Amazon Quick Suite are enabled in a dashboard.</p>
   * @public
   */
  QuickSuiteActionsOption?: QuickSuiteActionsOption | undefined;

  /**
   * <p>Executive summary option.</p>
   * @public
   */
  ExecutiveSummaryOption?: ExecutiveSummaryOption | undefined;

  /**
   * <p>Data stories sharing option.</p>
   * @public
   */
  DataStoriesSharingOption?: DataStoriesSharingOption | undefined;
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
  Sheets?: SheetDefinition[] | undefined;

  /**
   * <p>An array of calculated field definitions for the dashboard.</p>
   * @public
   */
  CalculatedFields?: CalculatedField[] | undefined;

  /**
   * <p>The parameter declarations for a dashboard. Parameters are named variables that can transfer a value for use by an action or an object.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon Quick Sight</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  ParameterDeclarations?: ParameterDeclaration[] | undefined;

  /**
   * <p>The filter definitions for a dashboard.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html">Filtering Data in Amazon Quick Sight</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  FilterGroups?: FilterGroup[] | undefined;

  /**
   * <p>An array of dashboard-level column configurations. Column configurations
   *             are used to set the default formatting for a column that
   *             is used throughout a dashboard. </p>
   * @public
   */
  ColumnConfigurations?: ColumnConfiguration[] | undefined;

  /**
   * <p>The configuration for default analysis settings.</p>
   * @public
   */
  AnalysisDefaults?: AnalysisDefaults | undefined;

  /**
   * <p>An array of option definitions for a dashboard.</p>
   * @public
   */
  Options?: AssetOptions | undefined;

  /**
   * <p>The static files for the definition.</p>
   * @public
   */
  StaticFiles?: StaticFile[] | undefined;
}

/**
 * <p>A structure that contains the configuration of a shareable link to the
 *             dashboard.</p>
 * @public
 */
export interface LinkSharingConfiguration {
  /**
   * <p>A structure that contains the permissions of a shareable link.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;
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
  SourceTemplate?: DashboardSourceTemplate | undefined;
}

/**
 * @public
 */
export interface CreateDashboardRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you want to create the
   *             dashboard.</p>
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
  Parameters?: _Parameters | undefined;

  /**
   * <p>A structure that contains the permissions of the dashboard. You can use this structure
   *             for granting permissions by providing a list of IAM action information
   *             for each principal ARN. </p>
   *          <p>To specify no permissions, omit the permissions list.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The entity that you are using as a source when you create the dashboard. In
   *                 <code>SourceEntity</code>, you specify the type of object you're using as source.
   *             You can only create a dashboard from a template, so you use a
   *                 <code>SourceTemplate</code> entity. If you need to create a dashboard from an
   *             analysis, first convert the analysis to a template by using the <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>
   *             </code> API operation. For <code>SourceTemplate</code>,
   *             specify the Amazon Resource Name (ARN) of the source template. The
   *                 <code>SourceTemplate</code>ARN can contain any Amazon Web Services account and any
   *                 Amazon Quick Sight-supported Amazon Web Services Region. </p>
   *          <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> to
   *             list the replacement datasets for the placeholders listed in the original. The schema in
   *             each dataset must match its placeholder. </p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   * @public
   */
  SourceEntity?: DashboardSourceEntity | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   *             dashboard.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A description for the first version of the dashboard being created.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>Options for publishing the dashboard when you create it:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>AdHocFilteringOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. When this is
   *                     set to <code>DISABLED</code>, Amazon Quick Sight disables the left filter pane on
   *                     the published dashboard, which can be used for ad hoc (one-time) filtering. This
   *                     option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>ExportToCSVOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. The visual
   *                     option to export data to .CSV format isn't enabled when this is set to
   *                         <code>DISABLED</code>. This option is <code>ENABLED</code> by default.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VisibilityState</code> for <code>SheetControlsOption</code> - This
   *                     visibility state can be either <code>COLLAPSED</code> or <code>EXPANDED</code>.
   *                     This option is <code>COLLAPSED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>QuickSuiteActionsOption</code> -
   *                     This status can be either <code>ENABLED</code> or <code>DISABLED</code>.
   *                     Features related to Actions in Amazon Quick Suite on dashboards are disabled
   *                     when this is set to <code>DISABLED</code>. This option is <code>DISABLED</code>
   *                     by default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>ExecutiveSummaryOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. The option
   *                     to build an executive summary is disabled when this is set to
   *                         <code>DISABLED</code>. This option is <code>ENABLED</code> by
   *                     default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>DataStoriesSharingOption</code> -
   *                     This status can be either <code>ENABLED</code> or <code>DISABLED</code>. The
   *                     option to share a data story is disabled when this is set to
   *                         <code>DISABLED</code>. This option is <code>ENABLED</code> by
   *                     default.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DashboardPublishOptions?: DashboardPublishOptions | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If
   *             you add a value for this field, it overrides the value that is used in the source
   *             entity. The theme ARN must exist in the same Amazon Web Services account where you create
   *             the dashboard.</p>
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * <p>The definition of a dashboard.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   * @public
   */
  Definition?: DashboardVersionDefinition | undefined;

  /**
   * <p>The option to relax the validation needed to create a dashboard with definition
   *             objects. This option skips the validation step for specific errors.</p>
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;

  /**
   * <p>When you create the dashboard, Amazon Quick Sight adds the dashboard to these
   *             folders.</p>
   * @public
   */
  FolderArns?: string[] | undefined;

  /**
   * <p>A structure that contains the permissions of a shareable link to the dashboard.</p>
   * @public
   */
  LinkSharingConfiguration?: LinkSharingConfiguration | undefined;

  /**
   * <p>A list of analysis Amazon Resource Names (ARNs) to be linked to the dashboard.</p>
   * @public
   */
  LinkEntities?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDashboardResponse {
  /**
   * <p>The ARN of the dashboard.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ARN of the dashboard, including the version number of the first version that is
   *             created.</p>
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>The status of the dashboard creation request.</p>
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * <p>Specifies the source of data for a destination table, including the transform operation and column mappings.</p>
 * @public
 */
export interface DestinationTableSource {
  /**
   * <p>The identifier of the transform operation that provides data to the destination table.</p>
   * @public
   */
  TransformOperationId: string | undefined;
}

/**
 * <p>Defines a destination table in data preparation that receives the final transformed data.</p>
 * @public
 */
export interface DestinationTable {
  /**
   * <p>Alias for the destination table.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The source configuration that specifies which transform operation provides data to this destination table.</p>
   * @public
   */
  Source: DestinationTableSource | undefined;
}

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
   * <p>A unique identifier for the input column.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The data type of the column.</p>
   * @public
   */
  Type: InputColumnDataType | undefined;

  /**
   * <p>The sub data type of the column. Sub types are only available for decimal columns that are part of a SPICE dataset.</p>
   * @public
   */
  SubType?: ColumnDataSubType | undefined;
}

/**
 * <p>References a parent dataset that serves as a data source, including its columns and metadata.</p>
 * @public
 */
export interface ParentDataSet {
  /**
   * <p>The Amazon Resource Name (ARN) of the parent dataset.</p>
   * @public
   */
  DataSetArn: string | undefined;

  /**
   * <p>The list of input columns available from the parent dataset.</p>
   * @public
   */
  InputColumns: InputColumn[] | undefined;
}

/**
 * <p>A source table that provides initial data from either a physical table or parent dataset.</p>
 * @public
 */
export interface SourceTable {
  /**
   * <p>The identifier of the physical table that serves as the data source.</p>
   * @public
   */
  PhysicalTableId?: string | undefined;

  /**
   * <p>A parent dataset that serves as the data source instead of a physical table.</p>
   * @public
   */
  DataSet?: ParentDataSet | undefined;
}

/**
 * <p>Represents a date value used in filter conditions.</p>
 * @public
 */
export interface DataSetDateFilterValue {
  /**
   * <p>A static date value used for filtering.</p>
   * @public
   */
  StaticValue?: Date | undefined;
}

/**
 * <p>A filter condition that compares date values using operators like <code>BEFORE</code>, <code>AFTER</code>, or
 *            their inclusive variants.</p>
 * @public
 */
export interface DataSetDateComparisonFilterCondition {
  /**
   * <p>The comparison operator to use, such as <code>BEFORE</code>, <code>BEFORE_OR_EQUALS_TO</code>, <code>AFTER</code>,
   *            or <code>AFTER_OR_EQUALS_TO</code>.</p>
   * @public
   */
  Operator: DataSetDateComparisonFilterOperator | undefined;

  /**
   * <p>The date value to compare against.</p>
   * @public
   */
  Value?: DataSetDateFilterValue | undefined;
}

/**
 * <p>A filter condition that filters date values within a specified range.</p>
 * @public
 */
export interface DataSetDateRangeFilterCondition {
  /**
   * <p>The minimum date value for the range filter.</p>
   * @public
   */
  RangeMinimum?: DataSetDateFilterValue | undefined;

  /**
   * <p>The maximum date value for the range filter.</p>
   * @public
   */
  RangeMaximum?: DataSetDateFilterValue | undefined;

  /**
   * <p>Whether to include the minimum value in the filter range.</p>
   * @public
   */
  IncludeMinimum?: boolean | undefined;

  /**
   * <p>Whether to include the maximum value in the filter range.</p>
   * @public
   */
  IncludeMaximum?: boolean | undefined;
}

/**
 * <p>A filter condition for date columns, supporting both comparison and range-based filtering.</p>
 * @public
 */
export interface DataSetDateFilterCondition {
  /**
   * <p>The name of the date column to filter.</p>
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * <p>A comparison-based filter condition for the date column.</p>
   * @public
   */
  ComparisonFilterCondition?: DataSetDateComparisonFilterCondition | undefined;

  /**
   * <p>A range-based filter condition for the date column, filtering values between minimum and maximum dates.</p>
   * @public
   */
  RangeFilterCondition?: DataSetDateRangeFilterCondition | undefined;
}

/**
 * <p>Represents a numeric value used in filter conditions.</p>
 * @public
 */
export interface DataSetNumericFilterValue {
  /**
   * <p>A static numeric value used for filtering.</p>
   * @public
   */
  StaticValue?: number | undefined;
}

/**
 * <p>A filter condition that compares numeric values using operators like <code>EQUALS</code>, <code>GREATER_THAN</code>,
 *            or <code>LESS_THAN</code>.</p>
 * @public
 */
export interface DataSetNumericComparisonFilterCondition {
  /**
   * <p>The comparison operator to use, such as <code>EQUALS</code>, <code>GREATER_THAN</code>, <code>LESS_THAN</code>,
   *            or their variants.</p>
   * @public
   */
  Operator: DataSetNumericComparisonFilterOperator | undefined;

  /**
   * <p>The numeric value to compare against.</p>
   * @public
   */
  Value?: DataSetNumericFilterValue | undefined;
}

/**
 * <p>A filter condition that filters numeric values within a specified range.</p>
 * @public
 */
export interface DataSetNumericRangeFilterCondition {
  /**
   * <p>The minimum numeric value for the range filter.</p>
   * @public
   */
  RangeMinimum?: DataSetNumericFilterValue | undefined;

  /**
   * <p>The maximum numeric value for the range filter.</p>
   * @public
   */
  RangeMaximum?: DataSetNumericFilterValue | undefined;

  /**
   * <p>Whether to include the minimum value in the filter range.</p>
   * @public
   */
  IncludeMinimum?: boolean | undefined;

  /**
   * <p>Whether to include the maximum value in the filter range.</p>
   * @public
   */
  IncludeMaximum?: boolean | undefined;
}

/**
 * <p>A filter condition for numeric columns, supporting both comparison and range-based filtering.</p>
 * @public
 */
export interface DataSetNumericFilterCondition {
  /**
   * <p>The name of the numeric column to filter.</p>
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * <p>A comparison-based filter condition for the numeric column.</p>
   * @public
   */
  ComparisonFilterCondition?: DataSetNumericComparisonFilterCondition | undefined;

  /**
   * <p>A range-based filter condition for the numeric column, filtering values between minimum and maximum numbers.</p>
   * @public
   */
  RangeFilterCondition?: DataSetNumericRangeFilterCondition | undefined;
}

/**
 * <p>Represents a string value used in filter conditions.</p>
 * @public
 */
export interface DataSetStringFilterValue {
  /**
   * <p>A static string value used for filtering.</p>
   * @public
   */
  StaticValue?: string | undefined;
}

/**
 * <p>A filter condition that compares string values using operators like <code>EQUALS</code>, <code>CONTAINS</code>,
 *            or <code>STARTS_WITH</code>.</p>
 * @public
 */
export interface DataSetStringComparisonFilterCondition {
  /**
   * <p>The comparison operator to use, such as <code>EQUALS</code>, <code>CONTAINS</code>, <code>STARTS_WITH</code>,
   *            <code>ENDS_WITH</code>, or their negations.</p>
   * @public
   */
  Operator: DataSetStringComparisonFilterOperator | undefined;

  /**
   * <p>The string value to compare against.</p>
   * @public
   */
  Value?: DataSetStringFilterValue | undefined;
}

/**
 * <p>Represents a list of string values used in filter conditions.</p>
 * @public
 */
export interface DataSetStringListFilterValue {
  /**
   * <p>A list of static string values used for filtering.</p>
   * @public
   */
  StaticValues?: string[] | undefined;
}

/**
 * <p>A filter condition that includes or excludes string values from a specified list.</p>
 * @public
 */
export interface DataSetStringListFilterCondition {
  /**
   * <p>The list operator to use, either <code>INCLUDE</code> to match values in the list or <code>EXCLUDE</code> to
   *            filter out values in the list.</p>
   * @public
   */
  Operator: DataSetStringListFilterOperator | undefined;

  /**
   * <p>The list of string values to include or exclude in the filter.</p>
   * @public
   */
  Values?: DataSetStringListFilterValue | undefined;
}

/**
 * <p>A filter condition for string columns, supporting both comparison and list-based filtering.</p>
 * @public
 */
export interface DataSetStringFilterCondition {
  /**
   * <p>The name of the string column to filter.</p>
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * <p>A comparison-based filter condition for the string column.</p>
   * @public
   */
  ComparisonFilterCondition?: DataSetStringComparisonFilterCondition | undefined;

  /**
   * <p>A list-based filter condition that includes or excludes values from a specified list.</p>
   * @public
   */
  ListFilterCondition?: DataSetStringListFilterCondition | undefined;
}

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
  ConditionExpression?: string | undefined;

  /**
   * <p>A string-based filter condition within a filter operation.</p>
   * @public
   */
  StringFilterCondition?: DataSetStringFilterCondition | undefined;

  /**
   * <p>A numeric-based filter condition within a filter operation.</p>
   * @public
   */
  NumericFilterCondition?: DataSetNumericFilterCondition | undefined;

  /**
   * <p>A date-based filter condition within a filter operation.</p>
   * @public
   */
  DateFilterCondition?: DataSetDateFilterCondition | undefined;
}

/**
 * <p>A transform operation that applies one or more filter conditions.</p>
 * @public
 */
export interface FiltersOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The source transform operation that provides input data for filtering.</p>
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * <p>The list of filter operations to apply.</p>
   * @public
   */
  FilterOperations: FilterOperation[] | undefined;
}

/**
 * <p>Specifies the source table and column mappings for an import table operation.</p>
 * @public
 */
export interface ImportTableOperationSource {
  /**
   * <p>The identifier of the source table to import data from.</p>
   * @public
   */
  SourceTableId: string | undefined;

  /**
   * <p>The mappings between source column identifiers and target column identifiers during the import.</p>
   * @public
   */
  ColumnIdMappings?: DataSetColumnIdMapping[] | undefined;
}

/**
 * <p>A transform operation that imports data from a source table.</p>
 * @public
 */
export interface ImportTableOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The source configuration that specifies which source table to import and any column mappings.</p>
   * @public
   */
  Source: ImportTableOperationSource | undefined;
}

/**
 * <p>Specifies a mapping to override the name of an output column from a transform operation.</p>
 * @public
 */
export interface OutputColumnNameOverride {
  /**
   * <p>The original name of the column from the source transform operation.</p>
   * @public
   */
  SourceColumnName?: string | undefined;

  /**
   * <p>The new name to assign to the column in the output.</p>
   * @public
   */
  OutputColumnName: string | undefined;
}

/**
 * <p>Properties that control how columns are handled for a join operand, including column name overrides.</p>
 * @public
 */
export interface JoinOperandProperties {
  /**
   * <p>A list of column name overrides to apply to the join operand's output columns.</p>
   * @public
   */
  OutputColumnNameOverrides: OutputColumnNameOverride[] | undefined;
}

/**
 * <p>A transform operation that combines data from two sources based on specified join conditions.</p>
 * @public
 */
export interface JoinOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The left operand for the join operation.</p>
   * @public
   */
  LeftOperand: TransformOperationSource | undefined;

  /**
   * <p>The right operand for the join operation.</p>
   * @public
   */
  RightOperand: TransformOperationSource | undefined;

  /**
   * <p>The type of join to perform, such as <code>INNER</code>, <code>LEFT</code>, <code>RIGHT</code>, or <code>OUTER</code>.</p>
   * @public
   */
  Type: JoinOperationType | undefined;

  /**
   * <p>The join condition that specifies how to match rows between the left and right operands.</p>
   * @public
   */
  OnClause: string | undefined;

  /**
   * <p>Properties that control how the left operand's columns are handled in the join result.</p>
   * @public
   */
  LeftOperandProperties?: JoinOperandProperties | undefined;

  /**
   * <p>Properties that control how the right operand's columns are handled in the join result.</p>
   * @public
   */
  RightOperandProperties?: JoinOperandProperties | undefined;
}

/**
 * <p>Specifies a label value to be pivoted into a separate column, including the new column name and identifier.</p>
 * @public
 */
export interface PivotedLabel {
  /**
   * <p>The label value from the source data to be pivoted.</p>
   * @public
   */
  LabelName: string | undefined;

  /**
   * <p>The name for the new column created from this pivoted label.</p>
   * @public
   */
  NewColumnName: string | undefined;

  /**
   * <p>A unique identifier for the new column created from this pivoted label.</p>
   * @public
   */
  NewColumnId: string | undefined;
}

/**
 * <p>Configuration for a pivot operation, specifying which column contains labels and how to pivot them.</p>
 * @public
 */
export interface PivotConfiguration {
  /**
   * <p>The name of the column that contains the labels to be pivoted into separate columns.</p>
   * @public
   */
  LabelColumnName?: string | undefined;

  /**
   * <p>The list of specific label values to pivot into separate columns.</p>
   * @public
   */
  PivotedLabels: PivotedLabel[] | undefined;
}

/**
 * <p>Configuration for how to handle value columns in pivot operations, including aggregation settings.</p>
 * @public
 */
export interface ValueColumnConfiguration {
  /**
   * <p>The aggregation function to apply when multiple values map to the same pivoted cell.</p>
   * @public
   */
  AggregationFunction?: DataPrepAggregationFunction | undefined;
}

/**
 * <p>A transform operation that pivots data by converting row values into columns.</p>
 * @public
 */
export interface PivotOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The source transform operation that provides input data for pivoting.</p>
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * <p>The list of column names to group by when performing the pivot operation.</p>
   * @public
   */
  GroupByColumnNames?: string[] | undefined;

  /**
   * <p>Configuration for how to aggregate values when multiple rows map to the same pivoted column.</p>
   * @public
   */
  ValueColumnConfiguration: ValueColumnConfiguration | undefined;

  /**
   * <p>Configuration that specifies which labels to pivot and how to structure the resulting columns.</p>
   * @public
   */
  PivotConfiguration: PivotConfiguration | undefined;
}

/**
 * <p>A transform operation that projects columns. Operations that come after a projection
 *             can only refer to projected columns.</p>
 * @public
 */
export interface ProjectOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias?: string | undefined;

  /**
   * <p>The source transform operation that provides input data for column projection.</p>
   * @public
   */
  Source?: TransformOperationSource | undefined;

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
 * <p>A transform operation that renames one or more columns in the dataset.</p>
 * @public
 */
export interface RenameColumnsOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The source transform operation that provides input data for column renaming.</p>
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * <p>The list of column rename operations to perform, specifying old and new column names.</p>
   * @public
   */
  RenameColumnOperations: RenameColumnOperation[] | undefined;
}

/**
 * <p>A transform operation that converts columns into rows, normalizing the data structure.</p>
 * @public
 */
export interface UnpivotOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The source transform operation that provides input data for unpivoting.</p>
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * <p>The list of columns to unpivot from the source data.</p>
   * @public
   */
  ColumnsToUnpivot: ColumnToUnpivot[] | undefined;

  /**
   * <p>The name for the new column that will contain the unpivoted column names.</p>
   * @public
   */
  UnpivotedLabelColumnName: string | undefined;

  /**
   * <p>A unique identifier for the new column that will contain the unpivoted column names.</p>
   * @public
   */
  UnpivotedLabelColumnId: string | undefined;

  /**
   * <p>The name for the new column that will contain the unpivoted values.</p>
   * @public
   */
  UnpivotedValueColumnName: string | undefined;

  /**
   * <p>A unique identifier for the new column that will contain the unpivoted values.</p>
   * @public
   */
  UnpivotedValueColumnId: string | undefined;
}

/**
 * <p>A step in data preparation that performs a specific operation on the data.</p>
 * @public
 */
export interface TransformStep {
  /**
   * <p>A transform step that brings data from a source table.</p>
   * @public
   */
  ImportTableStep?: ImportTableOperation | undefined;

  /**
   * <p>A transform operation that projects columns. Operations that come after a projection
   *             can only refer to projected columns.</p>
   * @public
   */
  ProjectStep?: ProjectOperation | undefined;

  /**
   * <p>A transform step that applies filter conditions.</p>
   * @public
   */
  FiltersStep?: FiltersOperation | undefined;

  /**
   * <p>A transform operation that creates calculated columns. Columns created in one such
   *             operation form a lexical closure.</p>
   * @public
   */
  CreateColumnsStep?: CreateColumnsOperation | undefined;

  /**
   * <p>A transform step that changes the names of one or more columns.</p>
   * @public
   */
  RenameColumnsStep?: RenameColumnsOperation | undefined;

  /**
   * <p>A transform step that changes the data types of one or more columns.</p>
   * @public
   */
  CastColumnTypesStep?: CastColumnTypesOperation | undefined;

  /**
   * <p>A transform step that combines data from two sources based on specified join conditions.</p>
   * @public
   */
  JoinStep?: JoinOperation | undefined;

  /**
   * <p>A transform step that groups data and applies aggregation functions to calculate summary values.</p>
   * @public
   */
  AggregateStep?: AggregateOperation | undefined;

  /**
   * <p>A transform step that converts row values into columns to reshape the data structure.</p>
   * @public
   */
  PivotStep?: PivotOperation | undefined;

  /**
   * <p>A transform step that converts columns into rows to normalize the data structure.</p>
   * @public
   */
  UnpivotStep?: UnpivotOperation | undefined;

  /**
   * <p>A transform step that combines rows from multiple sources by stacking them vertically.</p>
   * @public
   */
  AppendStep?: AppendOperation | undefined;
}

/**
 * <p>Configuration for data preparation operations, defining the complete pipeline from source tables
 *            through transformations to destination tables.</p>
 * @public
 */
export interface DataPrepConfiguration {
  /**
   * <p>A map of source tables that provide information about underlying sources.</p>
   * @public
   */
  SourceTableMap: Record<string, SourceTable> | undefined;

  /**
   * <p>A map of transformation steps that process the data.</p>
   * @public
   */
  TransformStepMap: Record<string, TransformStep> | undefined;

  /**
   * <p>A map of destination tables that receive the final prepared data.</p>
   * @public
   */
  DestinationTableMap: Record<string, DestinationTable> | undefined;
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
  StaticValues?: Date[] | undefined;
}

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
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * <p>A list of default values for a given date time parameter. This structure only accepts static values.</p>
   * @public
   */
  DefaultValues?: DateTimeDatasetParameterDefaultValues | undefined;
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
  StaticValues?: number[] | undefined;
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
  DefaultValues?: DecimalDatasetParameterDefaultValues | undefined;
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
  StaticValues?: number[] | undefined;
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
  DefaultValues?: IntegerDatasetParameterDefaultValues | undefined;
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
  StaticValues?: string[] | undefined;
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
  DefaultValues?: StringDatasetParameterDefaultValues | undefined;
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
  StringDatasetParameter?: StringDatasetParameter | undefined;

  /**
   * <p>A decimal parameter that is created in the dataset.</p>
   * @public
   */
  DecimalDatasetParameter?: DecimalDatasetParameter | undefined;

  /**
   * <p>An integer parameter that is created in the dataset.</p>
   * @public
   */
  IntegerDatasetParameter?: IntegerDatasetParameter | undefined;

  /**
   * <p>A date time parameter that is created in the dataset.</p>
   * @public
   */
  DateTimeDatasetParameter?: DateTimeDatasetParameter | undefined;
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
  DisableUseAsDirectQuerySource?: boolean | undefined;

  /**
   * <p>An option that controls whether a child dataset that's stored in Quick Sight can use this dataset as a source.</p>
   * @public
   */
  DisableUseAsImportedSource?: boolean | undefined;
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
  description?: string | undefined;

  /**
   * <p>A folder has a list of columns. A column can only be in one folder.</p>
   * @public
   */
  columns?: string[] | undefined;
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
  StringStaticValues?: string[] | undefined;

  /**
   * <p>A list of static default values for a given decimal parameter.</p>
   * @public
   */
  DecimalStaticValues?: number[] | undefined;

  /**
   * <p>A list of static default values for a given date time parameter.</p>
   * @public
   */
  DateTimeStaticValues?: Date[] | undefined;

  /**
   * <p>A list of static default values for a given integer parameter.</p>
   * @public
   */
  IntegerStaticValues?: number[] | undefined;
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
  NewParameterName?: string | undefined;

  /**
   * <p>The new default values for the parameter.</p>
   * @public
   */
  NewDefaultValues?: NewDefaultValues | undefined;
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
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
}

/**
 * <p>Properties associated with the columns participating in a join.</p>
 * @public
 */
export interface JoinKeyProperties {
  /**
   * <p>A value that indicates that a row in a table is uniquely identified by the columns in
   *             a join key. This is used by Quick Sight to optimize query performance.</p>
   * @public
   */
  UniqueKey?: boolean | undefined;
}

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
  LeftJoinKeyProperties?: JoinKeyProperties | undefined;

  /**
   * <p>Join key properties of the right operand.</p>
   * @public
   */
  RightJoinKeyProperties?: JoinKeyProperties | undefined;

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
  JoinInstruction?: JoinInstruction | undefined;

  /**
   * <p>Physical table ID.</p>
   * @public
   */
  PhysicalTableId?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the parent dataset.</p>
   * @public
   */
  DataSetArn?: string | undefined;
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
  DataTransforms?: TransformOperation[] | undefined;

  /**
   * <p>Source of this logical table.</p>
   * @public
   */
  Source: LogicalTableSource | undefined;
}

/**
 * <p>A <code>UniqueKey</code> configuration that references a dataset column.</p>
 * @public
 */
export interface UniqueKey {
  /**
   * <p>The name of the column that is referenced in the <code>UniqueKey</code>
   * 			configuration.</p>
   * @public
   */
  ColumnNames: string[] | undefined;
}

/**
 * <p>The configuration for the performance optimization of the dataset that contains a
 * 				<code>UniqueKey</code> configuration.</p>
 * @public
 */
export interface PerformanceConfiguration {
  /**
   * <p>A <code>UniqueKey</code> configuration.</p>
   * @public
   */
  UniqueKeys?: UniqueKey[] | undefined;
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
  Columns?: InputColumn[] | undefined;
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
  Catalog?: string | undefined;

  /**
   * <p>The schema name. This name applies to certain relational database engines.</p>
   * @public
   */
  Schema?: string | undefined;

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
 * <p>Information about the format for a source file or files.</p>
 * @public
 */
export interface UploadSettings {
  /**
   * <p>File format.</p>
   * @public
   */
  Format?: FileFormat | undefined;

  /**
   * <p>A row number to start reading data from.</p>
   * @public
   */
  StartFromRow?: number | undefined;

  /**
   * <p>Whether the file has a header row, or the files each have a header row.</p>
   * @public
   */
  ContainsHeader?: boolean | undefined;

  /**
   * <p>Text qualifier.</p>
   * @public
   */
  TextQualifier?: TextQualifier | undefined;

  /**
   * <p>The delimiter between values in the file.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>A custom cell address range for Excel files, specifying which cells to import from the spreadsheet.</p>
   * @public
   */
  CustomCellAddressRange?: string | undefined;
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
  UploadSettings?: UploadSettings | undefined;

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
 * <p>An element in the hierarchical path to a table within a data source, containing both name and identifier.</p>
 * @public
 */
export interface TablePathElement {
  /**
   * <p>The name of the path element.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The unique identifier of the path element.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * <p>A table from a Software-as-a-Service (SaaS) data source, including connection details and column definitions.</p>
 * @public
 */
export interface SaaSTable {
  /**
   * <p>The Amazon Resource Name (ARN) of the SaaS data source.</p>
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * <p>The hierarchical path to the table within the SaaS data source.</p>
   * @public
   */
  TablePath: TablePathElement[] | undefined;

  /**
   * <p>The list of input columns available from the SaaS table.</p>
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
  | PhysicalTable.SaaSTableMember
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
    SaaSTable?: never;
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
    SaaSTable?: never;
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
    SaaSTable?: never;
    $unknown?: never;
  }

  /**
   * <p>A physical table type for Software-as-a-Service (SaaS) sources.</p>
   * @public
   */
  export interface SaaSTableMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source?: never;
    SaaSTable: SaaSTable;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source?: never;
    SaaSTable?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    RelationalTable: (value: RelationalTable) => T;
    CustomSql: (value: CustomSql) => T;
    S3Source: (value: S3Source) => T;
    SaaSTable: (value: SaaSTable) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Information about a dataset that contains permissions for row-level security (RLS).
 *             The permissions dataset maps fields to users or groups. For more information, see
 *             <a href="https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html">Using Row-Level Security (RLS) to Restrict Access to a Dataset</a> in the <i>Quick Sight User
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
  Namespace?: string | undefined;

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
  FormatVersion?: RowLevelPermissionFormatVersion | undefined;

  /**
   * <p>The status of the row-level security permission dataset. If enabled, the status is <code>ENABLED</code>. If disabled, the status is <code>DISABLED</code>.</p>
   * @public
   */
  Status?: Status | undefined;
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
  TagMultiValueDelimiter?: string | undefined;

  /**
   * <p>A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one. For example, you can use an asterisk as your match all value.</p>
   * @public
   */
  MatchAllValue?: string | undefined;
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
  Status?: Status | undefined;

  /**
   * <p>A set of rules associated with row-level security, such as the tag names and columns that they are assigned to.</p>
   * @public
   */
  TagRules: RowLevelPermissionTagRule[] | undefined;

  /**
   * <p>A list of tag configuration rules to apply to a dataset. All tag configurations have the OR condition. Tags within each tile will be joined (AND). At least one rule in this structure must have all tag values assigned to it to apply Row-level security (RLS) to the dataset.</p>
   * @public
   */
  TagRuleConfigurations?: string[][] | undefined;
}

/**
 * <p>Configuration for row level security.</p>
 * @public
 */
export interface RowLevelPermissionConfiguration {
  /**
   * <p>The configuration of tags on a dataset to set row-level security. </p>
   * @public
   */
  TagConfiguration?: RowLevelPermissionTagConfiguration | undefined;

  /**
   * <p>Information about a dataset that contains permissions for row-level security (RLS).
   *             The permissions dataset maps fields to users or groups. For more information, see
   *             <a href="https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html">Using Row-Level Security (RLS) to Restrict Access to a Dataset</a> in the <i>Quick Sight User
   *                 Guide</i>.</p>
   *          <p>The option to deny permissions by setting <code>PermissionPolicy</code> to <code>DENY_ACCESS</code> is
   *             not supported for new RLS datasets.</p>
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;
}

/**
 * <p>A semantic table that represents the final analytical structure of the data.</p>
 * @public
 */
export interface SemanticTable {
  /**
   * <p>Alias for the semantic table.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The identifier of the destination table from data preparation that provides data to this semantic table.</p>
   * @public
   */
  DestinationTableId: string | undefined;

  /**
   * <p>Configuration for row level security that control data access for this semantic table.</p>
   * @public
   */
  RowLevelPermissionConfiguration?: RowLevelPermissionConfiguration | undefined;
}

/**
 * <p>Configuration for the semantic model that defines how prepared data is structured for analysis and reporting.</p>
 * @public
 */
export interface SemanticModelConfiguration {
  /**
   * <p>A map of semantic tables that define the analytical structure.</p>
   * @public
   */
  TableMap?: Record<string, SemanticTable> | undefined;
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
   * <p>Configures the combination and transformation of the data from the physical
   * 			tables. This parameter is used with the legacy data preparation experience.</p>
   *
   * @deprecated Only used in the legacy data preparation experience.
   * @public
   */
  LogicalTableMap?: Record<string, LogicalTable> | undefined;

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   * @public
   */
  ImportMode: DataSetImportMode | undefined;

  /**
   * <p>Groupings of columns that work together in certain Amazon Quick Sight features.
   * 			Currently, only geospatial hierarchy is supported.</p>
   * @public
   */
  ColumnGroups?: ColumnGroup[] | undefined;

  /**
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   * @public
   */
  FieldFolders?: Record<string, FieldFolder> | undefined;

  /**
   * <p>A list of resource permissions on the dataset.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The row-level security configuration for the data that you want to create. This parameter is
   * 			used with the legacy data preparation experience.</p>
   *
   * @deprecated Only used in the legacy data preparation experience.
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;

  /**
   * <p>The configuration of tags on a dataset to set row-level security. Row-level security
   * 			tags are currently supported for anonymous embedding only. This parameter is
   * 			used with the legacy data preparation experience.</p>
   *
   * @deprecated Only used in the legacy data preparation experience.
   * @public
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration | undefined;

  /**
   * <p>A set of one or more definitions of a <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html">ColumnLevelPermissionRule</a>
   *             </code>.</p>
   * @public
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[] | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   * 			dataset.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
   * @public
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration | undefined;

  /**
   * <p>The parameter declarations of the dataset.</p>
   * @public
   */
  DatasetParameters?: DatasetParameter[] | undefined;

  /**
   * <p>When you create the dataset, Amazon Quick Sight adds the dataset to these
   * 			folders.</p>
   * @public
   */
  FolderArns?: string[] | undefined;

  /**
   * <p>The configuration for the performance optimization of the dataset that contains a
   * 				<code>UniqueKey</code> configuration.</p>
   * @public
   */
  PerformanceConfiguration?: PerformanceConfiguration | undefined;

  /**
   * <p>The usage of the dataset. <code>RLS_RULES</code> must be specified for RLS permission
   * 			datasets.</p>
   * @public
   */
  UseAs?: DataSetUseAs | undefined;

  /**
   * <p>The data preparation configuration for the dataset. This configuration defines the source tables,
   * 			transformation steps, and destination tables used to prepare the data.
   * 			Required when using the new data preparation experience.</p>
   * @public
   */
  DataPrepConfiguration?: DataPrepConfiguration | undefined;

  /**
   * <p>The semantic model configuration for the dataset. This configuration defines how the prepared
   * 			data is structured for an analysis, including table mappings and row-level security configurations.
   * 			Required when using the new data preparation experience.</p>
   * @public
   */
  SemanticModelConfiguration?: SemanticModelConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDataSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>The ARN for the ingestion, which is triggered as a result of dataset creation if the
   * 			import mode is SPICE.</p>
   * @public
   */
  IngestionArn?: string | undefined;

  /**
   * <p>The ID of the ingestion, which is triggered as a result of dataset creation if the
   * 			import mode is SPICE.</p>
   * @public
   */
  IngestionId?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
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
  AlternateDataSourceParameters?: DataSourceParameters[] | undefined;
}

/**
 * <p>The credentials for authenticating with a web proxy server.</p>
 * @public
 */
export interface WebProxyCredentials {
  /**
   * <p>The username for authenticating with the web proxy server.</p>
   * @public
   */
  WebProxyUsername: string | undefined;

  /**
   * <p>The password for authenticating with the web proxy server.</p>
   * @public
   */
  WebProxyPassword: string | undefined;
}
