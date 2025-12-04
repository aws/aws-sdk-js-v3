import {
  ActionConnectorErrorType,
  ActionConnectorSearchFilterNameEnum,
  ActionConnectorType,
  AggType,
  AnalysisErrorType,
  AnalysisFilterAttribute,
  AnchorOption,
  AnchorType,
  AnonymousUserDashboardEmbeddingConfigurationDisabledFeature,
  AnonymousUserDashboardEmbeddingConfigurationEnabledFeature,
  ArcThickness,
  ArcThicknessOptions,
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
  AssignmentStatus,
  AuthenticationMethodOption,
  AuthenticationType,
  AuthorSpecifiedAggregation,
  AuthorizationCodeGrantCredentialsSource,
  AxisBinding,
  BarChartOrientation,
  BarsArrangement,
  BaseMapStyleType,
  BatchCreateTopicReviewedAnswerCommand,
  BatchDeleteTopicReviewedAnswerCommand,
  BoxPlotFillStyle,
  BrandStatus,
  BrandVersionStatus,
  CancelIngestionCommand,
  CapabilityState,
  CategoricalAggregationFunction,
  CategoryFilterFunction,
  CategoryFilterMatchOperator,
  CategoryFilterSelectAllOptions,
  CategoryFilterType,
  ClientCredentialsSource,
  ColorFillType,
  ColumnDataRole,
  ColumnDataSubType,
  ColumnDataType,
  ColumnOrderingType,
  ColumnRole,
  ColumnTagName,
  CommitMode,
  ComparisonMethod,
  ComparisonMethodType,
  ConditionalFormattingIconDisplayOption,
  ConditionalFormattingIconSetType,
  ConnectionAuthType,
  ConstantType,
  ContributionAnalysisDirection,
  ContributionAnalysisSortType,
  CreateAccountCustomizationCommand,
  CreateAccountSubscriptionCommand,
  CreateActionConnectorCommand,
  CreateAnalysisCommand,
  CreateBrandCommand,
  CreateCustomPermissionsCommand,
  CreateDashboardCommand,
  CreateDataSetCommand,
  CreateDataSourceCommand,
  CreateFolderCommand,
  CreateFolderMembershipCommand,
  CreateGroupCommand,
  CreateGroupMembershipCommand,
  CreateIAMPolicyAssignmentCommand,
  CreateIngestionCommand,
  CreateNamespaceCommand,
  CreateRefreshScheduleCommand,
  CreateRoleMembershipCommand,
  CreateTemplateAliasCommand,
  CreateTemplateCommand,
  CreateThemeAliasCommand,
  CreateThemeCommand,
  CreateTopicCommand,
  CreateTopicRefreshScheduleCommand,
  CreateVPCConnectionCommand,
  CrossDatasetTypes,
  CustomContentImageScalingConfiguration,
  CustomContentType,
  DashboardBehavior,
  DashboardErrorType,
  DashboardFilterAttribute,
  DashboardUIState,
  DashboardsQAStatus,
  DataLabelContent,
  DataLabelOverlap,
  DataLabelPosition,
  DataPrepSimpleAggregationFunctionType,
  DataSetDateComparisonFilterOperator,
  DataSetFilterAttribute,
  DataSetImportMode,
  DataSetNumericComparisonFilterOperator,
  DataSetStringComparisonFilterOperator,
  DataSetStringListFilterOperator,
  DataSetUseAs,
  DataSourceErrorInfoType,
  DataSourceFilterAttribute,
  DataSourceType,
  DatasetParameterValueType,
  DateAggregationFunction,
  DayOfTheWeek,
  DayOfWeek,
  DefaultAggregation,
  DeleteAccountCustomPermissionCommand,
  DeleteAccountCustomizationCommand,
  DeleteAccountSubscriptionCommand,
  DeleteActionConnectorCommand,
  DeleteAnalysisCommand,
  DeleteBrandAssignmentCommand,
  DeleteBrandCommand,
  DeleteCustomPermissionsCommand,
  DeleteDashboardCommand,
  DeleteDataSetCommand,
  DeleteDataSetRefreshPropertiesCommand,
  DeleteDataSourceCommand,
  DeleteDefaultQBusinessApplicationCommand,
  DeleteFolderCommand,
  DeleteFolderMembershipCommand,
  DeleteGroupCommand,
  DeleteGroupMembershipCommand,
  DeleteIAMPolicyAssignmentCommand,
  DeleteIdentityPropagationConfigCommand,
  DeleteNamespaceCommand,
  DeleteRefreshScheduleCommand,
  DeleteRoleCustomPermissionCommand,
  DeleteRoleMembershipCommand,
  DeleteTemplateAliasCommand,
  DeleteTemplateCommand,
  DeleteThemeAliasCommand,
  DeleteThemeCommand,
  DeleteTopicCommand,
  DeleteTopicRefreshScheduleCommand,
  DeleteUserByPrincipalIdCommand,
  DeleteUserCommand,
  DeleteUserCustomPermissionCommand,
  DeleteVPCConnectionCommand,
  DescribeAccountCustomPermissionCommand,
  DescribeAccountCustomizationCommand,
  DescribeAccountSettingsCommand,
  DescribeAccountSubscriptionCommand,
  DescribeActionConnectorCommand,
  DescribeActionConnectorPermissionsCommand,
  DescribeAnalysisCommand,
  DescribeAnalysisDefinitionCommand,
  DescribeAnalysisPermissionsCommand,
  DescribeAssetBundleExportJobCommand,
  DescribeAssetBundleImportJobCommand,
  DescribeBrandAssignmentCommand,
  DescribeBrandCommand,
  DescribeBrandPublishedVersionCommand,
  DescribeCustomPermissionsCommand,
  DescribeDashboardCommand,
  DescribeDashboardDefinitionCommand,
  DescribeDashboardPermissionsCommand,
  DescribeDashboardSnapshotJobCommand,
  DescribeDashboardSnapshotJobResultCommand,
  DescribeDashboardsQAConfigurationCommand,
  DescribeDataSetCommand,
  DescribeDataSetPermissionsCommand,
  DescribeDataSetRefreshPropertiesCommand,
  DescribeDataSourceCommand,
  DescribeDataSourcePermissionsCommand,
  DescribeDefaultQBusinessApplicationCommand,
  DescribeFolderCommand,
  DescribeFolderPermissionsCommand,
  DescribeFolderResolvedPermissionsCommand,
  DescribeGroupCommand,
  DescribeGroupMembershipCommand,
  DescribeIAMPolicyAssignmentCommand,
  DescribeIngestionCommand,
  DescribeIpRestrictionCommand,
  DescribeKeyRegistrationCommand,
  DescribeNamespaceCommand,
  DescribeQPersonalizationConfigurationCommand,
  DescribeQuickSightQSearchConfigurationCommand,
  DescribeRefreshScheduleCommand,
  DescribeRoleCustomPermissionCommand,
  DescribeTemplateAliasCommand,
  DescribeTemplateCommand,
  DescribeTemplateDefinitionCommand,
  DescribeTemplatePermissionsCommand,
  DescribeThemeAliasCommand,
  DescribeThemeCommand,
  DescribeThemePermissionsCommand,
  DescribeTopicCommand,
  DescribeTopicPermissionsCommand,
  DescribeTopicRefreshCommand,
  DescribeTopicRefreshScheduleCommand,
  DescribeUserCommand,
  DescribeVPCConnectionCommand,
  DigitGroupingStyle,
  DisplayFormat,
  Edition,
  EmbeddingIdentityType,
  FieldName,
  FileFormat,
  FilterClass,
  FilterNullOption,
  FilterOperator,
  FilterVisualScope,
  FlowPublishState,
  FolderFilterAttribute,
  FolderType,
  FontDecoration,
  FontStyle,
  FontWeightName,
  ForecastComputationSeasonality,
  FunnelChartMeasureDataLabelStyle,
  GenerateEmbedUrlForAnonymousUserCommand,
  GenerateEmbedUrlForRegisteredUserCommand,
  GenerateEmbedUrlForRegisteredUserWithIdentityCommand,
  GeneratedAnswerStatus,
  GeoSpatialCountryCode,
  GeoSpatialDataRole,
  GeospatialColorState,
  GeospatialLayerType,
  GeospatialMapNavigation,
  GeospatialSelectedPointStyle,
  GetDashboardEmbedUrlCommand,
  GetFlowMetadataCommand,
  GetFlowPermissionsCommand,
  GetSessionEmbedUrlCommand,
  GroupFilterAttribute,
  GroupFilterOperator,
  HistogramBinType,
  HorizontalTextAlignment,
  Icon,
  IdentityStore,
  IdentityType,
  ImageCustomActionTrigger,
  IncludeFolderMembers,
  IncludeGeneratedAnswer,
  IncludeQuickSightQIndex,
  IngestionErrorType,
  IngestionRequestSource,
  IngestionRequestType,
  IngestionStatus,
  IngestionType,
  InputColumnDataType,
  JoinOperationType,
  JoinType,
  KPISparklineType,
  KPIVisualStandardLayoutType,
  LayerCustomActionTrigger,
  LayoutElementType,
  LegendPosition,
  LineChartLineStyle,
  LineChartMarkerShape,
  LineChartType,
  LineInterpolation,
  ListActionConnectorsCommand,
  ListAnalysesCommand,
  ListAssetBundleExportJobsCommand,
  ListAssetBundleImportJobsCommand,
  ListBrandsCommand,
  ListCustomPermissionsCommand,
  ListDashboardVersionsCommand,
  ListDashboardsCommand,
  ListDataSetsCommand,
  ListDataSourcesCommand,
  ListFlowsCommand,
  ListFolderMembersCommand,
  ListFoldersCommand,
  ListFoldersForResourceCommand,
  ListGroupMembershipsCommand,
  ListGroupsCommand,
  ListIAMPolicyAssignmentsCommand,
  ListIAMPolicyAssignmentsForUserCommand,
  ListIdentityPropagationConfigsCommand,
  ListIngestionsCommand,
  ListNamespacesCommand,
  ListRefreshSchedulesCommand,
  ListRoleMembershipsCommand,
  ListTagsForResourceCommand,
  ListTemplateAliasesCommand,
  ListTemplateVersionsCommand,
  ListTemplatesCommand,
  ListThemeAliasesCommand,
  ListThemeVersionsCommand,
  ListThemesCommand,
  ListTopicRefreshSchedulesCommand,
  ListTopicReviewedAnswersCommand,
  ListTopicsCommand,
  ListUserGroupsCommand,
  ListUsersCommand,
  ListVPCConnectionsCommand,
  LookbackWindowSizeUnit,
  MapZoomMode,
  MaximumMinimumComputationType,
  MemberType,
  MissingDataTreatmentOption,
  NamedEntityAggType,
  NamedFilterAggType,
  NamedFilterType,
  NamespaceErrorType,
  NamespaceStatus,
  NegativeValueDisplayMode,
  NetworkInterfaceStatus,
  NullFilterOption,
  NullFilterType,
  NumberScale,
  NumericEqualityMatchOperator,
  NumericFilterSelectAllOptions,
  NumericSeparatorSymbol,
  OtherCategories,
  PanelBorderStyle,
  PaperOrientation,
  PaperSize,
  ParameterValueType,
  PersonalizationMode,
  PivotTableConditionalFormattingScopeRole,
  PivotTableDataPathType,
  PivotTableFieldCollapseState,
  PivotTableMetricPlacement,
  PivotTableRowsLayout,
  PivotTableSubtotalLevel,
  PluginVisualAxisName,
  PredictQAResultsCommand,
  PrimaryValueDisplayType,
  PropertyRole,
  PropertyUsage,
  PurchaseMode,
  PutDataSetRefreshPropertiesCommand,
  QAResultType,
  QBusinessInsightsStatus,
  QDataKeyType,
  QSearchStatus,
  QueryExecutionMode,
  QuickSight,
  QuickSightClient,
  QuickSightServiceException,
  RadarChartAxesRangeScale,
  RadarChartShape,
  ReferenceLineLabelHorizontalPosition,
  ReferenceLineLabelVerticalPosition,
  ReferenceLinePatternType,
  ReferenceLineSeriesType,
  ReferenceLineValueLabelRelativePosition,
  RefreshFailureAlertStatus,
  RefreshInterval,
  RegisterUserCommand,
  RelativeDateType,
  RelativeFontSize,
  ResizeOption,
  ResourceStatus,
  RestoreAnalysisCommand,
  ReviewedAnswerErrorCode,
  Role,
  RowLevelPermissionFormatVersion,
  RowLevelPermissionPolicy,
  SearchActionConnectorsCommand,
  SearchAnalysesCommand,
  SearchDashboardsCommand,
  SearchDataSetsCommand,
  SearchDataSourcesCommand,
  SearchFilterOperator,
  SearchFlowsCommand,
  SearchFoldersCommand,
  SearchGroupsCommand,
  SearchTopicsCommand,
  SectionPageBreakStatus,
  SelectAllValueOptions,
  SelectedFieldOptions,
  SelectedTooltipType,
  ServiceType,
  SharingModel,
  SheetContentType,
  SheetControlDateTimePickerType,
  SheetControlListType,
  SheetControlSliderType,
  SheetImageScalingType,
  SimpleAttributeAggregationFunction,
  SimpleNumericalAggregationFunction,
  SimpleTotalAggregationFunction,
  SingleYAxisOption,
  SmallMultiplesAxisPlacement,
  SmallMultiplesAxisScale,
  SnapshotFileFormatType,
  SnapshotFileSheetSelectionScope,
  SnapshotJobStatus,
  SortDirection,
  SpecialValue,
  StarburstProductType,
  StartAssetBundleExportJobCommand,
  StartAssetBundleImportJobCommand,
  StartDashboardSnapshotJobCommand,
  StartDashboardSnapshotJobScheduleCommand,
  Status,
  StyledCellType,
  TableBorderStyle,
  TableCellImageScalingConfiguration,
  TableFieldIconSetType,
  TableOrientation,
  TableTotalsPlacement,
  TableTotalsScrollStatus,
  TagResourceCommand,
  TargetVisualOptions,
  TemplateErrorType,
  TextQualifier,
  TextTransform,
  TextWrap,
  ThemeErrorType,
  ThemeType,
  TimeGranularity,
  TooltipTarget,
  TooltipTitleType,
  TopBottomComputationType,
  TopBottomSortOrder,
  TopicFilterAttribute,
  TopicFilterOperator,
  TopicIRFilterFunction,
  TopicIRFilterType,
  TopicNumericSeparatorSymbol,
  TopicRefreshStatus,
  TopicRelativeDateFilterFunction,
  TopicScheduleType,
  TopicSortDirection,
  TopicTimeGranularity,
  TopicUserExperienceVersion,
  TransposedColumnType,
  URLTargetConfiguration,
  UndefinedSpecifiedValueType,
  UntagResourceCommand,
  UpdateAccountCustomPermissionCommand,
  UpdateAccountCustomizationCommand,
  UpdateAccountSettingsCommand,
  UpdateActionConnectorCommand,
  UpdateActionConnectorPermissionsCommand,
  UpdateAnalysisCommand,
  UpdateAnalysisPermissionsCommand,
  UpdateApplicationWithTokenExchangeGrantCommand,
  UpdateBrandAssignmentCommand,
  UpdateBrandCommand,
  UpdateBrandPublishedVersionCommand,
  UpdateCustomPermissionsCommand,
  UpdateDashboardCommand,
  UpdateDashboardLinksCommand,
  UpdateDashboardPermissionsCommand,
  UpdateDashboardPublishedVersionCommand,
  UpdateDashboardsQAConfigurationCommand,
  UpdateDataSetCommand,
  UpdateDataSetPermissionsCommand,
  UpdateDataSourceCommand,
  UpdateDataSourcePermissionsCommand,
  UpdateDefaultQBusinessApplicationCommand,
  UpdateFlowPermissionsCommand,
  UpdateFolderCommand,
  UpdateFolderPermissionsCommand,
  UpdateGroupCommand,
  UpdateIAMPolicyAssignmentCommand,
  UpdateIdentityPropagationConfigCommand,
  UpdateIpRestrictionCommand,
  UpdateKeyRegistrationCommand,
  UpdatePublicSharingSettingsCommand,
  UpdateQPersonalizationConfigurationCommand,
  UpdateQuickSightQSearchConfigurationCommand,
  UpdateRefreshScheduleCommand,
  UpdateRoleCustomPermissionCommand,
  UpdateSPICECapacityConfigurationCommand,
  UpdateTemplateAliasCommand,
  UpdateTemplateCommand,
  UpdateTemplatePermissionsCommand,
  UpdateThemeAliasCommand,
  UpdateThemeCommand,
  UpdateThemePermissionsCommand,
  UpdateTopicCommand,
  UpdateTopicPermissionsCommand,
  UpdateTopicRefreshScheduleCommand,
  UpdateUserCommand,
  UpdateUserCustomPermissionCommand,
  UpdateVPCConnectionCommand,
  UserRole,
  VPCConnectionAvailabilityStatus,
  VPCConnectionResourceStatus,
  ValidationStrategyMode,
  ValueWhenUnsetOption,
  VerticalTextAlignment,
  Visibility,
  VisualCustomActionTrigger,
  VisualHighlightTrigger,
  VisualRole,
  WebCrawlerAuthType,
  WidgetStatus,
  WordCloudCloudLayout,
  WordCloudWordCasing,
  WordCloudWordOrientation,
  WordCloudWordPadding,
  WordCloudWordScaling,
  paginateDescribeFolderPermissions,
  paginateDescribeFolderResolvedPermissions,
  paginateListActionConnectors,
  paginateListAnalyses,
  paginateListAssetBundleExportJobs,
  paginateListAssetBundleImportJobs,
  paginateListBrands,
  paginateListCustomPermissions,
  paginateListDashboardVersions,
  paginateListDashboards,
  paginateListDataSets,
  paginateListDataSources,
  paginateListFlows,
  paginateListFolderMembers,
  paginateListFolders,
  paginateListFoldersForResource,
  paginateListGroupMemberships,
  paginateListGroups,
  paginateListIAMPolicyAssignments,
  paginateListIAMPolicyAssignmentsForUser,
  paginateListIngestions,
  paginateListNamespaces,
  paginateListRoleMemberships,
  paginateListTemplateAliases,
  paginateListTemplateVersions,
  paginateListTemplates,
  paginateListThemeVersions,
  paginateListThemes,
  paginateListTopics,
  paginateListUserGroups,
  paginateListUsers,
  paginateListVPCConnections,
  paginateSearchActionConnectors,
  paginateSearchAnalyses,
  paginateSearchDashboards,
  paginateSearchDataSets,
  paginateSearchDataSources,
  paginateSearchFlows,
  paginateSearchFolders,
  paginateSearchGroups,
  paginateSearchTopics,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof QuickSightClient === "function")
assert(typeof QuickSight === "function")
// commands
assert(typeof BatchCreateTopicReviewedAnswerCommand === "function")
assert(typeof BatchDeleteTopicReviewedAnswerCommand === "function")
assert(typeof CancelIngestionCommand === "function")
assert(typeof CreateAccountCustomizationCommand === "function")
assert(typeof CreateAccountSubscriptionCommand === "function")
assert(typeof CreateActionConnectorCommand === "function")
assert(typeof CreateAnalysisCommand === "function")
assert(typeof CreateBrandCommand === "function")
assert(typeof CreateCustomPermissionsCommand === "function")
assert(typeof CreateDashboardCommand === "function")
assert(typeof CreateDataSetCommand === "function")
assert(typeof CreateDataSourceCommand === "function")
assert(typeof CreateFolderCommand === "function")
assert(typeof CreateFolderMembershipCommand === "function")
assert(typeof CreateGroupCommand === "function")
assert(typeof CreateGroupMembershipCommand === "function")
assert(typeof CreateIAMPolicyAssignmentCommand === "function")
assert(typeof CreateIngestionCommand === "function")
assert(typeof CreateNamespaceCommand === "function")
assert(typeof CreateRefreshScheduleCommand === "function")
assert(typeof CreateRoleMembershipCommand === "function")
assert(typeof CreateTemplateCommand === "function")
assert(typeof CreateTemplateAliasCommand === "function")
assert(typeof CreateThemeCommand === "function")
assert(typeof CreateThemeAliasCommand === "function")
assert(typeof CreateTopicCommand === "function")
assert(typeof CreateTopicRefreshScheduleCommand === "function")
assert(typeof CreateVPCConnectionCommand === "function")
assert(typeof DeleteAccountCustomizationCommand === "function")
assert(typeof DeleteAccountCustomPermissionCommand === "function")
assert(typeof DeleteAccountSubscriptionCommand === "function")
assert(typeof DeleteActionConnectorCommand === "function")
assert(typeof DeleteAnalysisCommand === "function")
assert(typeof DeleteBrandCommand === "function")
assert(typeof DeleteBrandAssignmentCommand === "function")
assert(typeof DeleteCustomPermissionsCommand === "function")
assert(typeof DeleteDashboardCommand === "function")
assert(typeof DeleteDataSetCommand === "function")
assert(typeof DeleteDataSetRefreshPropertiesCommand === "function")
assert(typeof DeleteDataSourceCommand === "function")
assert(typeof DeleteDefaultQBusinessApplicationCommand === "function")
assert(typeof DeleteFolderCommand === "function")
assert(typeof DeleteFolderMembershipCommand === "function")
assert(typeof DeleteGroupCommand === "function")
assert(typeof DeleteGroupMembershipCommand === "function")
assert(typeof DeleteIAMPolicyAssignmentCommand === "function")
assert(typeof DeleteIdentityPropagationConfigCommand === "function")
assert(typeof DeleteNamespaceCommand === "function")
assert(typeof DeleteRefreshScheduleCommand === "function")
assert(typeof DeleteRoleCustomPermissionCommand === "function")
assert(typeof DeleteRoleMembershipCommand === "function")
assert(typeof DeleteTemplateCommand === "function")
assert(typeof DeleteTemplateAliasCommand === "function")
assert(typeof DeleteThemeCommand === "function")
assert(typeof DeleteThemeAliasCommand === "function")
assert(typeof DeleteTopicCommand === "function")
assert(typeof DeleteTopicRefreshScheduleCommand === "function")
assert(typeof DeleteUserCommand === "function")
assert(typeof DeleteUserByPrincipalIdCommand === "function")
assert(typeof DeleteUserCustomPermissionCommand === "function")
assert(typeof DeleteVPCConnectionCommand === "function")
assert(typeof DescribeAccountCustomizationCommand === "function")
assert(typeof DescribeAccountCustomPermissionCommand === "function")
assert(typeof DescribeAccountSettingsCommand === "function")
assert(typeof DescribeAccountSubscriptionCommand === "function")
assert(typeof DescribeActionConnectorCommand === "function")
assert(typeof DescribeActionConnectorPermissionsCommand === "function")
assert(typeof DescribeAnalysisCommand === "function")
assert(typeof DescribeAnalysisDefinitionCommand === "function")
assert(typeof DescribeAnalysisPermissionsCommand === "function")
assert(typeof DescribeAssetBundleExportJobCommand === "function")
assert(typeof DescribeAssetBundleImportJobCommand === "function")
assert(typeof DescribeBrandCommand === "function")
assert(typeof DescribeBrandAssignmentCommand === "function")
assert(typeof DescribeBrandPublishedVersionCommand === "function")
assert(typeof DescribeCustomPermissionsCommand === "function")
assert(typeof DescribeDashboardCommand === "function")
assert(typeof DescribeDashboardDefinitionCommand === "function")
assert(typeof DescribeDashboardPermissionsCommand === "function")
assert(typeof DescribeDashboardSnapshotJobCommand === "function")
assert(typeof DescribeDashboardSnapshotJobResultCommand === "function")
assert(typeof DescribeDashboardsQAConfigurationCommand === "function")
assert(typeof DescribeDataSetCommand === "function")
assert(typeof DescribeDataSetPermissionsCommand === "function")
assert(typeof DescribeDataSetRefreshPropertiesCommand === "function")
assert(typeof DescribeDataSourceCommand === "function")
assert(typeof DescribeDataSourcePermissionsCommand === "function")
assert(typeof DescribeDefaultQBusinessApplicationCommand === "function")
assert(typeof DescribeFolderCommand === "function")
assert(typeof DescribeFolderPermissionsCommand === "function")
assert(typeof DescribeFolderResolvedPermissionsCommand === "function")
assert(typeof DescribeGroupCommand === "function")
assert(typeof DescribeGroupMembershipCommand === "function")
assert(typeof DescribeIAMPolicyAssignmentCommand === "function")
assert(typeof DescribeIngestionCommand === "function")
assert(typeof DescribeIpRestrictionCommand === "function")
assert(typeof DescribeKeyRegistrationCommand === "function")
assert(typeof DescribeNamespaceCommand === "function")
assert(typeof DescribeQPersonalizationConfigurationCommand === "function")
assert(typeof DescribeQuickSightQSearchConfigurationCommand === "function")
assert(typeof DescribeRefreshScheduleCommand === "function")
assert(typeof DescribeRoleCustomPermissionCommand === "function")
assert(typeof DescribeTemplateCommand === "function")
assert(typeof DescribeTemplateAliasCommand === "function")
assert(typeof DescribeTemplateDefinitionCommand === "function")
assert(typeof DescribeTemplatePermissionsCommand === "function")
assert(typeof DescribeThemeCommand === "function")
assert(typeof DescribeThemeAliasCommand === "function")
assert(typeof DescribeThemePermissionsCommand === "function")
assert(typeof DescribeTopicCommand === "function")
assert(typeof DescribeTopicPermissionsCommand === "function")
assert(typeof DescribeTopicRefreshCommand === "function")
assert(typeof DescribeTopicRefreshScheduleCommand === "function")
assert(typeof DescribeUserCommand === "function")
assert(typeof DescribeVPCConnectionCommand === "function")
assert(typeof GenerateEmbedUrlForAnonymousUserCommand === "function")
assert(typeof GenerateEmbedUrlForRegisteredUserCommand === "function")
assert(typeof GenerateEmbedUrlForRegisteredUserWithIdentityCommand === "function")
assert(typeof GetDashboardEmbedUrlCommand === "function")
assert(typeof GetFlowMetadataCommand === "function")
assert(typeof GetFlowPermissionsCommand === "function")
assert(typeof GetSessionEmbedUrlCommand === "function")
assert(typeof ListActionConnectorsCommand === "function")
assert(typeof ListAnalysesCommand === "function")
assert(typeof ListAssetBundleExportJobsCommand === "function")
assert(typeof ListAssetBundleImportJobsCommand === "function")
assert(typeof ListBrandsCommand === "function")
assert(typeof ListCustomPermissionsCommand === "function")
assert(typeof ListDashboardsCommand === "function")
assert(typeof ListDashboardVersionsCommand === "function")
assert(typeof ListDataSetsCommand === "function")
assert(typeof ListDataSourcesCommand === "function")
assert(typeof ListFlowsCommand === "function")
assert(typeof ListFolderMembersCommand === "function")
assert(typeof ListFoldersCommand === "function")
assert(typeof ListFoldersForResourceCommand === "function")
assert(typeof ListGroupMembershipsCommand === "function")
assert(typeof ListGroupsCommand === "function")
assert(typeof ListIAMPolicyAssignmentsCommand === "function")
assert(typeof ListIAMPolicyAssignmentsForUserCommand === "function")
assert(typeof ListIdentityPropagationConfigsCommand === "function")
assert(typeof ListIngestionsCommand === "function")
assert(typeof ListNamespacesCommand === "function")
assert(typeof ListRefreshSchedulesCommand === "function")
assert(typeof ListRoleMembershipsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTemplateAliasesCommand === "function")
assert(typeof ListTemplatesCommand === "function")
assert(typeof ListTemplateVersionsCommand === "function")
assert(typeof ListThemeAliasesCommand === "function")
assert(typeof ListThemesCommand === "function")
assert(typeof ListThemeVersionsCommand === "function")
assert(typeof ListTopicRefreshSchedulesCommand === "function")
assert(typeof ListTopicReviewedAnswersCommand === "function")
assert(typeof ListTopicsCommand === "function")
assert(typeof ListUserGroupsCommand === "function")
assert(typeof ListUsersCommand === "function")
assert(typeof ListVPCConnectionsCommand === "function")
assert(typeof PredictQAResultsCommand === "function")
assert(typeof PutDataSetRefreshPropertiesCommand === "function")
assert(typeof RegisterUserCommand === "function")
assert(typeof RestoreAnalysisCommand === "function")
assert(typeof SearchActionConnectorsCommand === "function")
assert(typeof SearchAnalysesCommand === "function")
assert(typeof SearchDashboardsCommand === "function")
assert(typeof SearchDataSetsCommand === "function")
assert(typeof SearchDataSourcesCommand === "function")
assert(typeof SearchFlowsCommand === "function")
assert(typeof SearchFoldersCommand === "function")
assert(typeof SearchGroupsCommand === "function")
assert(typeof SearchTopicsCommand === "function")
assert(typeof StartAssetBundleExportJobCommand === "function")
assert(typeof StartAssetBundleImportJobCommand === "function")
assert(typeof StartDashboardSnapshotJobCommand === "function")
assert(typeof StartDashboardSnapshotJobScheduleCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAccountCustomizationCommand === "function")
assert(typeof UpdateAccountCustomPermissionCommand === "function")
assert(typeof UpdateAccountSettingsCommand === "function")
assert(typeof UpdateActionConnectorCommand === "function")
assert(typeof UpdateActionConnectorPermissionsCommand === "function")
assert(typeof UpdateAnalysisCommand === "function")
assert(typeof UpdateAnalysisPermissionsCommand === "function")
assert(typeof UpdateApplicationWithTokenExchangeGrantCommand === "function")
assert(typeof UpdateBrandCommand === "function")
assert(typeof UpdateBrandAssignmentCommand === "function")
assert(typeof UpdateBrandPublishedVersionCommand === "function")
assert(typeof UpdateCustomPermissionsCommand === "function")
assert(typeof UpdateDashboardCommand === "function")
assert(typeof UpdateDashboardLinksCommand === "function")
assert(typeof UpdateDashboardPermissionsCommand === "function")
assert(typeof UpdateDashboardPublishedVersionCommand === "function")
assert(typeof UpdateDashboardsQAConfigurationCommand === "function")
assert(typeof UpdateDataSetCommand === "function")
assert(typeof UpdateDataSetPermissionsCommand === "function")
assert(typeof UpdateDataSourceCommand === "function")
assert(typeof UpdateDataSourcePermissionsCommand === "function")
assert(typeof UpdateDefaultQBusinessApplicationCommand === "function")
assert(typeof UpdateFlowPermissionsCommand === "function")
assert(typeof UpdateFolderCommand === "function")
assert(typeof UpdateFolderPermissionsCommand === "function")
assert(typeof UpdateGroupCommand === "function")
assert(typeof UpdateIAMPolicyAssignmentCommand === "function")
assert(typeof UpdateIdentityPropagationConfigCommand === "function")
assert(typeof UpdateIpRestrictionCommand === "function")
assert(typeof UpdateKeyRegistrationCommand === "function")
assert(typeof UpdatePublicSharingSettingsCommand === "function")
assert(typeof UpdateQPersonalizationConfigurationCommand === "function")
assert(typeof UpdateQuickSightQSearchConfigurationCommand === "function")
assert(typeof UpdateRefreshScheduleCommand === "function")
assert(typeof UpdateRoleCustomPermissionCommand === "function")
assert(typeof UpdateSPICECapacityConfigurationCommand === "function")
assert(typeof UpdateTemplateCommand === "function")
assert(typeof UpdateTemplateAliasCommand === "function")
assert(typeof UpdateTemplatePermissionsCommand === "function")
assert(typeof UpdateThemeCommand === "function")
assert(typeof UpdateThemeAliasCommand === "function")
assert(typeof UpdateThemePermissionsCommand === "function")
assert(typeof UpdateTopicCommand === "function")
assert(typeof UpdateTopicPermissionsCommand === "function")
assert(typeof UpdateTopicRefreshScheduleCommand === "function")
assert(typeof UpdateUserCommand === "function")
assert(typeof UpdateUserCustomPermissionCommand === "function")
assert(typeof UpdateVPCConnectionCommand === "function")
// enums
assert(typeof ActionConnectorErrorType === "object");
assert(typeof ActionConnectorSearchFilterNameEnum === "object");
assert(typeof ActionConnectorType === "object");
assert(typeof AggType === "object");
assert(typeof AnalysisErrorType === "object");
assert(typeof AnalysisFilterAttribute === "object");
assert(typeof AnchorOption === "object");
assert(typeof AnchorType === "object");
assert(typeof AnonymousUserDashboardEmbeddingConfigurationDisabledFeature === "object");
assert(typeof AnonymousUserDashboardEmbeddingConfigurationEnabledFeature === "object");
assert(typeof ArcThickness === "object");
assert(typeof ArcThicknessOptions === "object");
assert(typeof AssetBundleExportFormat === "object");
assert(typeof AssetBundleExportJobAnalysisPropertyToOverride === "object");
assert(typeof AssetBundleExportJobDashboardPropertyToOverride === "object");
assert(typeof AssetBundleExportJobDataSetPropertyToOverride === "object");
assert(typeof AssetBundleExportJobDataSourcePropertyToOverride === "object");
assert(typeof AssetBundleExportJobFolderPropertyToOverride === "object");
assert(typeof AssetBundleExportJobRefreshSchedulePropertyToOverride === "object");
assert(typeof AssetBundleExportJobStatus === "object");
assert(typeof AssetBundleExportJobThemePropertyToOverride === "object");
assert(typeof AssetBundleExportJobVPCConnectionPropertyToOverride === "object");
assert(typeof AssetBundleImportFailureAction === "object");
assert(typeof AssetBundleImportJobStatus === "object");
assert(typeof AssignmentStatus === "object");
assert(typeof AuthenticationMethodOption === "object");
assert(typeof AuthenticationType === "object");
assert(typeof AuthorizationCodeGrantCredentialsSource === "object");
assert(typeof AuthorSpecifiedAggregation === "object");
assert(typeof AxisBinding === "object");
assert(typeof BarChartOrientation === "object");
assert(typeof BarsArrangement === "object");
assert(typeof BaseMapStyleType === "object");
assert(typeof BoxPlotFillStyle === "object");
assert(typeof BrandStatus === "object");
assert(typeof BrandVersionStatus === "object");
assert(typeof CapabilityState === "object");
assert(typeof CategoricalAggregationFunction === "object");
assert(typeof CategoryFilterFunction === "object");
assert(typeof CategoryFilterMatchOperator === "object");
assert(typeof CategoryFilterSelectAllOptions === "object");
assert(typeof CategoryFilterType === "object");
assert(typeof ClientCredentialsSource === "object");
assert(typeof ColorFillType === "object");
assert(typeof ColumnDataRole === "object");
assert(typeof ColumnDataSubType === "object");
assert(typeof ColumnDataType === "object");
assert(typeof ColumnOrderingType === "object");
assert(typeof ColumnRole === "object");
assert(typeof ColumnTagName === "object");
assert(typeof CommitMode === "object");
assert(typeof ComparisonMethod === "object");
assert(typeof ComparisonMethodType === "object");
assert(typeof ConditionalFormattingIconDisplayOption === "object");
assert(typeof ConditionalFormattingIconSetType === "object");
assert(typeof ConnectionAuthType === "object");
assert(typeof ConstantType === "object");
assert(typeof ContributionAnalysisDirection === "object");
assert(typeof ContributionAnalysisSortType === "object");
assert(typeof CrossDatasetTypes === "object");
assert(typeof CustomContentImageScalingConfiguration === "object");
assert(typeof CustomContentType === "object");
assert(typeof DashboardBehavior === "object");
assert(typeof DashboardErrorType === "object");
assert(typeof DashboardFilterAttribute === "object");
assert(typeof DashboardsQAStatus === "object");
assert(typeof DashboardUIState === "object");
assert(typeof DataLabelContent === "object");
assert(typeof DataLabelOverlap === "object");
assert(typeof DataLabelPosition === "object");
assert(typeof DataPrepSimpleAggregationFunctionType === "object");
assert(typeof DataSetDateComparisonFilterOperator === "object");
assert(typeof DataSetFilterAttribute === "object");
assert(typeof DataSetImportMode === "object");
assert(typeof DataSetNumericComparisonFilterOperator === "object");
assert(typeof DatasetParameterValueType === "object");
assert(typeof DataSetStringComparisonFilterOperator === "object");
assert(typeof DataSetStringListFilterOperator === "object");
assert(typeof DataSetUseAs === "object");
assert(typeof DataSourceErrorInfoType === "object");
assert(typeof DataSourceFilterAttribute === "object");
assert(typeof DataSourceType === "object");
assert(typeof DateAggregationFunction === "object");
assert(typeof DayOfTheWeek === "object");
assert(typeof DayOfWeek === "object");
assert(typeof DefaultAggregation === "object");
assert(typeof DigitGroupingStyle === "object");
assert(typeof DisplayFormat === "object");
assert(typeof Edition === "object");
assert(typeof EmbeddingIdentityType === "object");
assert(typeof FieldName === "object");
assert(typeof FileFormat === "object");
assert(typeof FilterClass === "object");
assert(typeof FilterNullOption === "object");
assert(typeof FilterOperator === "object");
assert(typeof FilterVisualScope === "object");
assert(typeof FlowPublishState === "object");
assert(typeof FolderFilterAttribute === "object");
assert(typeof FolderType === "object");
assert(typeof FontDecoration === "object");
assert(typeof FontStyle === "object");
assert(typeof FontWeightName === "object");
assert(typeof ForecastComputationSeasonality === "object");
assert(typeof FunnelChartMeasureDataLabelStyle === "object");
assert(typeof GeneratedAnswerStatus === "object");
assert(typeof GeospatialColorState === "object");
assert(typeof GeoSpatialCountryCode === "object");
assert(typeof GeoSpatialDataRole === "object");
assert(typeof GeospatialLayerType === "object");
assert(typeof GeospatialMapNavigation === "object");
assert(typeof GeospatialSelectedPointStyle === "object");
assert(typeof GroupFilterAttribute === "object");
assert(typeof GroupFilterOperator === "object");
assert(typeof HistogramBinType === "object");
assert(typeof HorizontalTextAlignment === "object");
assert(typeof Icon === "object");
assert(typeof IdentityStore === "object");
assert(typeof IdentityType === "object");
assert(typeof ImageCustomActionTrigger === "object");
assert(typeof IncludeFolderMembers === "object");
assert(typeof IncludeGeneratedAnswer === "object");
assert(typeof IncludeQuickSightQIndex === "object");
assert(typeof IngestionErrorType === "object");
assert(typeof IngestionRequestSource === "object");
assert(typeof IngestionRequestType === "object");
assert(typeof IngestionStatus === "object");
assert(typeof IngestionType === "object");
assert(typeof InputColumnDataType === "object");
assert(typeof JoinOperationType === "object");
assert(typeof JoinType === "object");
assert(typeof KPISparklineType === "object");
assert(typeof KPIVisualStandardLayoutType === "object");
assert(typeof LayerCustomActionTrigger === "object");
assert(typeof LayoutElementType === "object");
assert(typeof LegendPosition === "object");
assert(typeof LineChartLineStyle === "object");
assert(typeof LineChartMarkerShape === "object");
assert(typeof LineChartType === "object");
assert(typeof LineInterpolation === "object");
assert(typeof LookbackWindowSizeUnit === "object");
assert(typeof MapZoomMode === "object");
assert(typeof MaximumMinimumComputationType === "object");
assert(typeof MemberType === "object");
assert(typeof MissingDataTreatmentOption === "object");
assert(typeof NamedEntityAggType === "object");
assert(typeof NamedFilterAggType === "object");
assert(typeof NamedFilterType === "object");
assert(typeof NamespaceErrorType === "object");
assert(typeof NamespaceStatus === "object");
assert(typeof NegativeValueDisplayMode === "object");
assert(typeof NetworkInterfaceStatus === "object");
assert(typeof NullFilterOption === "object");
assert(typeof NullFilterType === "object");
assert(typeof NumberScale === "object");
assert(typeof NumericEqualityMatchOperator === "object");
assert(typeof NumericFilterSelectAllOptions === "object");
assert(typeof NumericSeparatorSymbol === "object");
assert(typeof OtherCategories === "object");
assert(typeof PanelBorderStyle === "object");
assert(typeof PaperOrientation === "object");
assert(typeof PaperSize === "object");
assert(typeof ParameterValueType === "object");
assert(typeof PersonalizationMode === "object");
assert(typeof PivotTableConditionalFormattingScopeRole === "object");
assert(typeof PivotTableDataPathType === "object");
assert(typeof PivotTableFieldCollapseState === "object");
assert(typeof PivotTableMetricPlacement === "object");
assert(typeof PivotTableRowsLayout === "object");
assert(typeof PivotTableSubtotalLevel === "object");
assert(typeof PluginVisualAxisName === "object");
assert(typeof PrimaryValueDisplayType === "object");
assert(typeof PropertyRole === "object");
assert(typeof PropertyUsage === "object");
assert(typeof PurchaseMode === "object");
assert(typeof QAResultType === "object");
assert(typeof QBusinessInsightsStatus === "object");
assert(typeof QDataKeyType === "object");
assert(typeof QSearchStatus === "object");
assert(typeof QueryExecutionMode === "object");
assert(typeof RadarChartAxesRangeScale === "object");
assert(typeof RadarChartShape === "object");
assert(typeof ReferenceLineLabelHorizontalPosition === "object");
assert(typeof ReferenceLineLabelVerticalPosition === "object");
assert(typeof ReferenceLinePatternType === "object");
assert(typeof ReferenceLineSeriesType === "object");
assert(typeof ReferenceLineValueLabelRelativePosition === "object");
assert(typeof RefreshFailureAlertStatus === "object");
assert(typeof RefreshInterval === "object");
assert(typeof RelativeDateType === "object");
assert(typeof RelativeFontSize === "object");
assert(typeof ResizeOption === "object");
assert(typeof ResourceStatus === "object");
assert(typeof ReviewedAnswerErrorCode === "object");
assert(typeof Role === "object");
assert(typeof RowLevelPermissionFormatVersion === "object");
assert(typeof RowLevelPermissionPolicy === "object");
assert(typeof SearchFilterOperator === "object");
assert(typeof SectionPageBreakStatus === "object");
assert(typeof SelectAllValueOptions === "object");
assert(typeof SelectedFieldOptions === "object");
assert(typeof SelectedTooltipType === "object");
assert(typeof ServiceType === "object");
assert(typeof SharingModel === "object");
assert(typeof SheetContentType === "object");
assert(typeof SheetControlDateTimePickerType === "object");
assert(typeof SheetControlListType === "object");
assert(typeof SheetControlSliderType === "object");
assert(typeof SheetImageScalingType === "object");
assert(typeof SimpleAttributeAggregationFunction === "object");
assert(typeof SimpleNumericalAggregationFunction === "object");
assert(typeof SimpleTotalAggregationFunction === "object");
assert(typeof SingleYAxisOption === "object");
assert(typeof SmallMultiplesAxisPlacement === "object");
assert(typeof SmallMultiplesAxisScale === "object");
assert(typeof SnapshotFileFormatType === "object");
assert(typeof SnapshotFileSheetSelectionScope === "object");
assert(typeof SnapshotJobStatus === "object");
assert(typeof SortDirection === "object");
assert(typeof SpecialValue === "object");
assert(typeof StarburstProductType === "object");
assert(typeof Status === "object");
assert(typeof StyledCellType === "object");
assert(typeof TableBorderStyle === "object");
assert(typeof TableCellImageScalingConfiguration === "object");
assert(typeof TableFieldIconSetType === "object");
assert(typeof TableOrientation === "object");
assert(typeof TableTotalsPlacement === "object");
assert(typeof TableTotalsScrollStatus === "object");
assert(typeof TargetVisualOptions === "object");
assert(typeof TemplateErrorType === "object");
assert(typeof TextQualifier === "object");
assert(typeof TextTransform === "object");
assert(typeof TextWrap === "object");
assert(typeof ThemeErrorType === "object");
assert(typeof ThemeType === "object");
assert(typeof TimeGranularity === "object");
assert(typeof TooltipTarget === "object");
assert(typeof TooltipTitleType === "object");
assert(typeof TopBottomComputationType === "object");
assert(typeof TopBottomSortOrder === "object");
assert(typeof TopicFilterAttribute === "object");
assert(typeof TopicFilterOperator === "object");
assert(typeof TopicIRFilterFunction === "object");
assert(typeof TopicIRFilterType === "object");
assert(typeof TopicNumericSeparatorSymbol === "object");
assert(typeof TopicRefreshStatus === "object");
assert(typeof TopicRelativeDateFilterFunction === "object");
assert(typeof TopicScheduleType === "object");
assert(typeof TopicSortDirection === "object");
assert(typeof TopicTimeGranularity === "object");
assert(typeof TopicUserExperienceVersion === "object");
assert(typeof TransposedColumnType === "object");
assert(typeof UndefinedSpecifiedValueType === "object");
assert(typeof URLTargetConfiguration === "object");
assert(typeof UserRole === "object");
assert(typeof ValidationStrategyMode === "object");
assert(typeof ValueWhenUnsetOption === "object");
assert(typeof VerticalTextAlignment === "object");
assert(typeof Visibility === "object");
assert(typeof VisualCustomActionTrigger === "object");
assert(typeof VisualHighlightTrigger === "object");
assert(typeof VisualRole === "object");
assert(typeof VPCConnectionAvailabilityStatus === "object");
assert(typeof VPCConnectionResourceStatus === "object");
assert(typeof WebCrawlerAuthType === "object");
assert(typeof WidgetStatus === "object");
assert(typeof WordCloudCloudLayout === "object");
assert(typeof WordCloudWordCasing === "object");
assert(typeof WordCloudWordOrientation === "object");
assert(typeof WordCloudWordPadding === "object");
assert(typeof WordCloudWordScaling === "object");
// errors
assert(QuickSightServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeFolderPermissions === "function")
assert(typeof paginateDescribeFolderResolvedPermissions === "function")
assert(typeof paginateListActionConnectors === "function")
assert(typeof paginateListAnalyses === "function")
assert(typeof paginateListAssetBundleExportJobs === "function")
assert(typeof paginateListAssetBundleImportJobs === "function")
assert(typeof paginateListBrands === "function")
assert(typeof paginateListCustomPermissions === "function")
assert(typeof paginateListDashboardVersions === "function")
assert(typeof paginateListDashboards === "function")
assert(typeof paginateListDataSets === "function")
assert(typeof paginateListDataSources === "function")
assert(typeof paginateListFlows === "function")
assert(typeof paginateListFolderMembers === "function")
assert(typeof paginateListFolders === "function")
assert(typeof paginateListFoldersForResource === "function")
assert(typeof paginateListGroupMemberships === "function")
assert(typeof paginateListGroups === "function")
assert(typeof paginateListIAMPolicyAssignments === "function")
assert(typeof paginateListIAMPolicyAssignmentsForUser === "function")
assert(typeof paginateListIngestions === "function")
assert(typeof paginateListNamespaces === "function")
assert(typeof paginateListRoleMemberships === "function")
assert(typeof paginateListTemplateAliases === "function")
assert(typeof paginateListTemplateVersions === "function")
assert(typeof paginateListTemplates === "function")
assert(typeof paginateListThemeVersions === "function")
assert(typeof paginateListThemes === "function")
assert(typeof paginateListTopics === "function")
assert(typeof paginateListUserGroups === "function")
assert(typeof paginateListUsers === "function")
assert(typeof paginateListVPCConnections === "function")
assert(typeof paginateSearchActionConnectors === "function")
assert(typeof paginateSearchAnalyses === "function")
assert(typeof paginateSearchDashboards === "function")
assert(typeof paginateSearchDataSets === "function")
assert(typeof paginateSearchDataSources === "function")
assert(typeof paginateSearchFlows === "function")
assert(typeof paginateSearchFolders === "function")
assert(typeof paginateSearchGroups === "function")
assert(typeof paginateSearchTopics === "function")
console.log(`QuickSight index test passed.`);
