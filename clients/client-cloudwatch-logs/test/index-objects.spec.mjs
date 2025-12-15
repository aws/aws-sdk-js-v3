import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountPolicy$,
  ActionStatus,
  AddKeyEntry$,
  AddKeys$,
  AggregateLogGroupSummary$,
  Anomaly$,
  AnomalyDetector$,
  AnomalyDetectorStatus,
  AssociateKmsKey$,
  AssociateKmsKeyCommand,
  AssociateKmsKeyRequest$,
  AssociateSourceToS3TableIntegration$,
  AssociateSourceToS3TableIntegrationCommand,
  AssociateSourceToS3TableIntegrationRequest$,
  AssociateSourceToS3TableIntegrationResponse$,
  CSV$,
  CancelExportTask$,
  CancelExportTaskCommand,
  CancelExportTaskRequest$,
  CancelImportTask$,
  CancelImportTaskCommand,
  CancelImportTaskRequest$,
  CancelImportTaskResponse$,
  CloudWatchLogs,
  CloudWatchLogsClient,
  CloudWatchLogsServiceException,
  ConfigurationTemplate$,
  ConfigurationTemplateDeliveryConfigValues$,
  ConflictException,
  ConflictException$,
  CopyValue$,
  CopyValueEntry$,
  CreateDelivery$,
  CreateDeliveryCommand,
  CreateDeliveryRequest$,
  CreateDeliveryResponse$,
  CreateExportTask$,
  CreateExportTaskCommand,
  CreateExportTaskRequest$,
  CreateExportTaskResponse$,
  CreateImportTask$,
  CreateImportTaskCommand,
  CreateImportTaskRequest$,
  CreateImportTaskResponse$,
  CreateLogAnomalyDetector$,
  CreateLogAnomalyDetectorCommand,
  CreateLogAnomalyDetectorRequest$,
  CreateLogAnomalyDetectorResponse$,
  CreateLogGroup$,
  CreateLogGroupCommand,
  CreateLogGroupRequest$,
  CreateLogStream$,
  CreateLogStreamCommand,
  CreateLogStreamRequest$,
  CreateScheduledQuery$,
  CreateScheduledQueryCommand,
  CreateScheduledQueryRequest$,
  CreateScheduledQueryResponse$,
  DataAlreadyAcceptedException,
  DataAlreadyAcceptedException$,
  DataProtectionStatus,
  DataSource$,
  DataSourceFilter$,
  DateTimeConverter$,
  DeleteAccountPolicy$,
  DeleteAccountPolicyCommand,
  DeleteAccountPolicyRequest$,
  DeleteDataProtectionPolicy$,
  DeleteDataProtectionPolicyCommand,
  DeleteDataProtectionPolicyRequest$,
  DeleteDelivery$,
  DeleteDeliveryCommand,
  DeleteDeliveryDestination$,
  DeleteDeliveryDestinationCommand,
  DeleteDeliveryDestinationPolicy$,
  DeleteDeliveryDestinationPolicyCommand,
  DeleteDeliveryDestinationPolicyRequest$,
  DeleteDeliveryDestinationRequest$,
  DeleteDeliveryRequest$,
  DeleteDeliverySource$,
  DeleteDeliverySourceCommand,
  DeleteDeliverySourceRequest$,
  DeleteDestination$,
  DeleteDestinationCommand,
  DeleteDestinationRequest$,
  DeleteIndexPolicy$,
  DeleteIndexPolicyCommand,
  DeleteIndexPolicyRequest$,
  DeleteIndexPolicyResponse$,
  DeleteIntegration$,
  DeleteIntegrationCommand,
  DeleteIntegrationRequest$,
  DeleteIntegrationResponse$,
  DeleteKeys$,
  DeleteLogAnomalyDetector$,
  DeleteLogAnomalyDetectorCommand,
  DeleteLogAnomalyDetectorRequest$,
  DeleteLogGroup$,
  DeleteLogGroupCommand,
  DeleteLogGroupRequest$,
  DeleteLogStream$,
  DeleteLogStreamCommand,
  DeleteLogStreamRequest$,
  DeleteMetricFilter$,
  DeleteMetricFilterCommand,
  DeleteMetricFilterRequest$,
  DeleteQueryDefinition$,
  DeleteQueryDefinitionCommand,
  DeleteQueryDefinitionRequest$,
  DeleteQueryDefinitionResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteRetentionPolicy$,
  DeleteRetentionPolicyCommand,
  DeleteRetentionPolicyRequest$,
  DeleteScheduledQuery$,
  DeleteScheduledQueryCommand,
  DeleteScheduledQueryRequest$,
  DeleteScheduledQueryResponse$,
  DeleteSubscriptionFilter$,
  DeleteSubscriptionFilterCommand,
  DeleteSubscriptionFilterRequest$,
  DeleteTransformer$,
  DeleteTransformerCommand,
  DeleteTransformerRequest$,
  Delivery$,
  DeliveryDestination$,
  DeliveryDestinationConfiguration$,
  DeliveryDestinationType,
  DeliverySource$,
  DescribeAccountPolicies$,
  DescribeAccountPoliciesCommand,
  DescribeAccountPoliciesRequest$,
  DescribeAccountPoliciesResponse$,
  DescribeConfigurationTemplates$,
  DescribeConfigurationTemplatesCommand,
  DescribeConfigurationTemplatesRequest$,
  DescribeConfigurationTemplatesResponse$,
  DescribeDeliveries$,
  DescribeDeliveriesCommand,
  DescribeDeliveriesRequest$,
  DescribeDeliveriesResponse$,
  DescribeDeliveryDestinations$,
  DescribeDeliveryDestinationsCommand,
  DescribeDeliveryDestinationsRequest$,
  DescribeDeliveryDestinationsResponse$,
  DescribeDeliverySources$,
  DescribeDeliverySourcesCommand,
  DescribeDeliverySourcesRequest$,
  DescribeDeliverySourcesResponse$,
  DescribeDestinations$,
  DescribeDestinationsCommand,
  DescribeDestinationsRequest$,
  DescribeDestinationsResponse$,
  DescribeExportTasks$,
  DescribeExportTasksCommand,
  DescribeExportTasksRequest$,
  DescribeExportTasksResponse$,
  DescribeFieldIndexes$,
  DescribeFieldIndexesCommand,
  DescribeFieldIndexesRequest$,
  DescribeFieldIndexesResponse$,
  DescribeImportTaskBatches$,
  DescribeImportTaskBatchesCommand,
  DescribeImportTaskBatchesRequest$,
  DescribeImportTaskBatchesResponse$,
  DescribeImportTasks$,
  DescribeImportTasksCommand,
  DescribeImportTasksRequest$,
  DescribeImportTasksResponse$,
  DescribeIndexPolicies$,
  DescribeIndexPoliciesCommand,
  DescribeIndexPoliciesRequest$,
  DescribeIndexPoliciesResponse$,
  DescribeLogGroups$,
  DescribeLogGroupsCommand,
  DescribeLogGroupsRequest$,
  DescribeLogGroupsResponse$,
  DescribeLogStreams$,
  DescribeLogStreamsCommand,
  DescribeLogStreamsRequest$,
  DescribeLogStreamsResponse$,
  DescribeMetricFilters$,
  DescribeMetricFiltersCommand,
  DescribeMetricFiltersRequest$,
  DescribeMetricFiltersResponse$,
  DescribeQueries$,
  DescribeQueriesCommand,
  DescribeQueriesRequest$,
  DescribeQueriesResponse$,
  DescribeQueryDefinitions$,
  DescribeQueryDefinitionsCommand,
  DescribeQueryDefinitionsRequest$,
  DescribeQueryDefinitionsResponse$,
  DescribeResourcePolicies$,
  DescribeResourcePoliciesCommand,
  DescribeResourcePoliciesRequest$,
  DescribeResourcePoliciesResponse$,
  DescribeSubscriptionFilters$,
  DescribeSubscriptionFiltersCommand,
  DescribeSubscriptionFiltersRequest$,
  DescribeSubscriptionFiltersResponse$,
  Destination$,
  DestinationConfiguration$,
  DisassociateKmsKey$,
  DisassociateKmsKeyCommand,
  DisassociateKmsKeyRequest$,
  DisassociateSourceFromS3TableIntegration$,
  DisassociateSourceFromS3TableIntegrationCommand,
  DisassociateSourceFromS3TableIntegrationRequest$,
  DisassociateSourceFromS3TableIntegrationResponse$,
  Distribution,
  Entity$,
  EntityRejectionErrorType,
  EvaluationFrequency,
  EventSource,
  ExecutionStatus,
  ExportTask$,
  ExportTaskExecutionInfo$,
  ExportTaskStatus$,
  ExportTaskStatusCode,
  FieldIndex$,
  FieldsData$,
  FilterLogEvents$,
  FilterLogEventsCommand,
  FilterLogEventsRequest$,
  FilterLogEventsResponse$,
  FilteredLogEvent$,
  FlattenedElement,
  GetDataProtectionPolicy$,
  GetDataProtectionPolicyCommand,
  GetDataProtectionPolicyRequest$,
  GetDataProtectionPolicyResponse$,
  GetDelivery$,
  GetDeliveryCommand,
  GetDeliveryDestination$,
  GetDeliveryDestinationCommand,
  GetDeliveryDestinationPolicy$,
  GetDeliveryDestinationPolicyCommand,
  GetDeliveryDestinationPolicyRequest$,
  GetDeliveryDestinationPolicyResponse$,
  GetDeliveryDestinationRequest$,
  GetDeliveryDestinationResponse$,
  GetDeliveryRequest$,
  GetDeliveryResponse$,
  GetDeliverySource$,
  GetDeliverySourceCommand,
  GetDeliverySourceRequest$,
  GetDeliverySourceResponse$,
  GetIntegration$,
  GetIntegrationCommand,
  GetIntegrationRequest$,
  GetIntegrationResponse$,
  GetLogAnomalyDetector$,
  GetLogAnomalyDetectorCommand,
  GetLogAnomalyDetectorRequest$,
  GetLogAnomalyDetectorResponse$,
  GetLogEvents$,
  GetLogEventsCommand,
  GetLogEventsRequest$,
  GetLogEventsResponse$,
  GetLogFields$,
  GetLogFieldsCommand,
  GetLogFieldsRequest$,
  GetLogFieldsResponse$,
  GetLogGroupFields$,
  GetLogGroupFieldsCommand,
  GetLogGroupFieldsRequest$,
  GetLogGroupFieldsResponse$,
  GetLogObject$,
  GetLogObjectCommand,
  GetLogObjectRequest$,
  GetLogObjectResponse$,
  GetLogObjectResponseStream$,
  GetLogRecord$,
  GetLogRecordCommand,
  GetLogRecordRequest$,
  GetLogRecordResponse$,
  GetQueryResults$,
  GetQueryResultsCommand,
  GetQueryResultsRequest$,
  GetQueryResultsResponse$,
  GetScheduledQuery$,
  GetScheduledQueryCommand,
  GetScheduledQueryHistory$,
  GetScheduledQueryHistoryCommand,
  GetScheduledQueryHistoryRequest$,
  GetScheduledQueryHistoryResponse$,
  GetScheduledQueryRequest$,
  GetScheduledQueryResponse$,
  GetTransformer$,
  GetTransformerCommand,
  GetTransformerRequest$,
  GetTransformerResponse$,
  Grok$,
  GroupingIdentifier$,
  Import$,
  ImportBatch$,
  ImportFilter$,
  ImportStatistics$,
  ImportStatus,
  IndexPolicy$,
  IndexSource,
  IndexType,
  InheritedProperty,
  InputLogEvent$,
  IntegrationDetails$,
  IntegrationStatus,
  IntegrationSummary$,
  IntegrationType,
  InternalServerException,
  InternalServerException$,
  InternalStreamingException,
  InternalStreamingException$,
  InvalidOperationException,
  InvalidOperationException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidSequenceTokenException,
  InvalidSequenceTokenException$,
  LimitExceededException,
  LimitExceededException$,
  ListAggregateLogGroupSummaries$,
  ListAggregateLogGroupSummariesCommand,
  ListAggregateLogGroupSummariesGroupBy,
  ListAggregateLogGroupSummariesRequest$,
  ListAggregateLogGroupSummariesResponse$,
  ListAnomalies$,
  ListAnomaliesCommand,
  ListAnomaliesRequest$,
  ListAnomaliesResponse$,
  ListIntegrations$,
  ListIntegrationsCommand,
  ListIntegrationsRequest$,
  ListIntegrationsResponse$,
  ListLogAnomalyDetectors$,
  ListLogAnomalyDetectorsCommand,
  ListLogAnomalyDetectorsRequest$,
  ListLogAnomalyDetectorsResponse$,
  ListLogGroups$,
  ListLogGroupsCommand,
  ListLogGroupsForQuery$,
  ListLogGroupsForQueryCommand,
  ListLogGroupsForQueryRequest$,
  ListLogGroupsForQueryResponse$,
  ListLogGroupsRequest$,
  ListLogGroupsResponse$,
  ListScheduledQueries$,
  ListScheduledQueriesCommand,
  ListScheduledQueriesRequest$,
  ListScheduledQueriesResponse$,
  ListSourcesForS3TableIntegration$,
  ListSourcesForS3TableIntegrationCommand,
  ListSourcesForS3TableIntegrationRequest$,
  ListSourcesForS3TableIntegrationResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTagsLogGroup$,
  ListTagsLogGroupCommand,
  ListTagsLogGroupRequest$,
  ListTagsLogGroupResponse$,
  ListToMap$,
  LiveTailSessionLogEvent$,
  LiveTailSessionMetadata$,
  LiveTailSessionStart$,
  LiveTailSessionUpdate$,
  LogEvent$,
  LogFieldType$,
  LogFieldsListItem$,
  LogGroup$,
  LogGroupClass,
  LogGroupField$,
  LogGroupSummary$,
  LogStream$,
  LowerCaseString$,
  MalformedQueryException,
  MalformedQueryException$,
  MetricFilter$,
  MetricFilterMatchRecord$,
  MetricTransformation$,
  MoveKeyEntry$,
  MoveKeys$,
  OCSFVersion,
  OpenSearchApplication$,
  OpenSearchCollection$,
  OpenSearchDataAccessPolicy$,
  OpenSearchDataSource$,
  OpenSearchEncryptionPolicy$,
  OpenSearchIntegrationDetails$,
  OpenSearchLifecyclePolicy$,
  OpenSearchNetworkPolicy$,
  OpenSearchResourceConfig$,
  OpenSearchResourceStatus$,
  OpenSearchResourceStatusType,
  OpenSearchWorkspace$,
  OperationAbortedException,
  OperationAbortedException$,
  OrderBy,
  OutputFormat,
  OutputLogEvent$,
  ParseCloudfront$,
  ParseJSON$,
  ParseKeyValue$,
  ParsePostgres$,
  ParseRoute53$,
  ParseToOCSF$,
  ParseVPC$,
  ParseWAF$,
  PatternToken$,
  Policy$,
  PolicyScope,
  PolicyType,
  Processor$,
  PutAccountPolicy$,
  PutAccountPolicyCommand,
  PutAccountPolicyRequest$,
  PutAccountPolicyResponse$,
  PutDataProtectionPolicy$,
  PutDataProtectionPolicyCommand,
  PutDataProtectionPolicyRequest$,
  PutDataProtectionPolicyResponse$,
  PutDeliveryDestination$,
  PutDeliveryDestinationCommand,
  PutDeliveryDestinationPolicy$,
  PutDeliveryDestinationPolicyCommand,
  PutDeliveryDestinationPolicyRequest$,
  PutDeliveryDestinationPolicyResponse$,
  PutDeliveryDestinationRequest$,
  PutDeliveryDestinationResponse$,
  PutDeliverySource$,
  PutDeliverySourceCommand,
  PutDeliverySourceRequest$,
  PutDeliverySourceResponse$,
  PutDestination$,
  PutDestinationCommand,
  PutDestinationPolicy$,
  PutDestinationPolicyCommand,
  PutDestinationPolicyRequest$,
  PutDestinationRequest$,
  PutDestinationResponse$,
  PutIndexPolicy$,
  PutIndexPolicyCommand,
  PutIndexPolicyRequest$,
  PutIndexPolicyResponse$,
  PutIntegration$,
  PutIntegrationCommand,
  PutIntegrationRequest$,
  PutIntegrationResponse$,
  PutLogEvents$,
  PutLogEventsCommand,
  PutLogEventsRequest$,
  PutLogEventsResponse$,
  PutLogGroupDeletionProtection$,
  PutLogGroupDeletionProtectionCommand,
  PutLogGroupDeletionProtectionRequest$,
  PutMetricFilter$,
  PutMetricFilterCommand,
  PutMetricFilterRequest$,
  PutQueryDefinition$,
  PutQueryDefinitionCommand,
  PutQueryDefinitionRequest$,
  PutQueryDefinitionResponse$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  PutRetentionPolicy$,
  PutRetentionPolicyCommand,
  PutRetentionPolicyRequest$,
  PutSubscriptionFilter$,
  PutSubscriptionFilterCommand,
  PutSubscriptionFilterRequest$,
  PutTransformer$,
  PutTransformerCommand,
  PutTransformerRequest$,
  QueryCompileError$,
  QueryCompileErrorLocation$,
  QueryDefinition$,
  QueryInfo$,
  QueryLanguage,
  QueryStatistics$,
  QueryStatus,
  RecordField$,
  RejectedEntityInfo$,
  RejectedLogEventsInfo$,
  RenameKeyEntry$,
  RenameKeys$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceConfig$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourcePolicy$,
  ResultField$,
  S3Configuration$,
  S3DeliveryConfiguration$,
  S3TableIntegrationSource$,
  S3TableIntegrationSourceStatus,
  ScheduledQueryDestination$,
  ScheduledQueryDestinationType,
  ScheduledQueryState,
  ScheduledQuerySummary$,
  Scope,
  SearchedLogStream$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SessionStreamingException,
  SessionStreamingException$,
  SessionTimeoutException,
  SessionTimeoutException$,
  SplitString$,
  SplitStringEntry$,
  StandardUnit,
  StartLiveTail$,
  StartLiveTailCommand,
  StartLiveTailRequest$,
  StartLiveTailResponse$,
  StartLiveTailResponseStream$,
  StartQuery$,
  StartQueryCommand,
  StartQueryRequest$,
  StartQueryResponse$,
  State,
  StopQuery$,
  StopQueryCommand,
  StopQueryRequest$,
  StopQueryResponse$,
  SubscriptionFilter$,
  SubstituteString$,
  SubstituteStringEntry$,
  SuppressionPeriod$,
  SuppressionState,
  SuppressionType,
  SuppressionUnit,
  TagLogGroup$,
  TagLogGroupCommand,
  TagLogGroupRequest$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TestMetricFilter$,
  TestMetricFilterCommand,
  TestMetricFilterRequest$,
  TestMetricFilterResponse$,
  TestTransformer$,
  TestTransformerCommand,
  TestTransformerRequest$,
  TestTransformerResponse$,
  ThrottlingException,
  ThrottlingException$,
  TooManyTagsException,
  TooManyTagsException$,
  TransformedLogRecord$,
  TriggerHistoryRecord$,
  TrimString$,
  Type,
  TypeConverter$,
  TypeConverterEntry$,
  UnrecognizedClientException,
  UnrecognizedClientException$,
  UntagLogGroup$,
  UntagLogGroupCommand,
  UntagLogGroupRequest$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateAnomaly$,
  UpdateAnomalyCommand,
  UpdateAnomalyRequest$,
  UpdateDeliveryConfiguration$,
  UpdateDeliveryConfigurationCommand,
  UpdateDeliveryConfigurationRequest$,
  UpdateDeliveryConfigurationResponse$,
  UpdateLogAnomalyDetector$,
  UpdateLogAnomalyDetectorCommand,
  UpdateLogAnomalyDetectorRequest$,
  UpdateScheduledQuery$,
  UpdateScheduledQueryCommand,
  UpdateScheduledQueryRequest$,
  UpdateScheduledQueryResponse$,
  UpperCaseString$,
  ValidationException,
  ValidationException$,
  paginateDescribeConfigurationTemplates,
  paginateDescribeDeliveries,
  paginateDescribeDeliveryDestinations,
  paginateDescribeDeliverySources,
  paginateDescribeDestinations,
  paginateDescribeLogGroups,
  paginateDescribeLogStreams,
  paginateDescribeMetricFilters,
  paginateDescribeSubscriptionFilters,
  paginateFilterLogEvents,
  paginateGetLogEvents,
  paginateGetScheduledQueryHistory,
  paginateListAggregateLogGroupSummaries,
  paginateListAnomalies,
  paginateListLogAnomalyDetectors,
  paginateListLogGroupsForQuery,
  paginateListScheduledQueries,
  paginateListSourcesForS3TableIntegration,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudWatchLogsClient === "function");
assert(typeof CloudWatchLogs === "function");
// commands
assert(typeof AssociateKmsKeyCommand === "function");
assert(typeof AssociateKmsKey$ === "object");
assert(typeof AssociateSourceToS3TableIntegrationCommand === "function");
assert(typeof AssociateSourceToS3TableIntegration$ === "object");
assert(typeof CancelExportTaskCommand === "function");
assert(typeof CancelExportTask$ === "object");
assert(typeof CancelImportTaskCommand === "function");
assert(typeof CancelImportTask$ === "object");
assert(typeof CreateDeliveryCommand === "function");
assert(typeof CreateDelivery$ === "object");
assert(typeof CreateExportTaskCommand === "function");
assert(typeof CreateExportTask$ === "object");
assert(typeof CreateImportTaskCommand === "function");
assert(typeof CreateImportTask$ === "object");
assert(typeof CreateLogAnomalyDetectorCommand === "function");
assert(typeof CreateLogAnomalyDetector$ === "object");
assert(typeof CreateLogGroupCommand === "function");
assert(typeof CreateLogGroup$ === "object");
assert(typeof CreateLogStreamCommand === "function");
assert(typeof CreateLogStream$ === "object");
assert(typeof CreateScheduledQueryCommand === "function");
assert(typeof CreateScheduledQuery$ === "object");
assert(typeof DeleteAccountPolicyCommand === "function");
assert(typeof DeleteAccountPolicy$ === "object");
assert(typeof DeleteDataProtectionPolicyCommand === "function");
assert(typeof DeleteDataProtectionPolicy$ === "object");
assert(typeof DeleteDeliveryCommand === "function");
assert(typeof DeleteDelivery$ === "object");
assert(typeof DeleteDeliveryDestinationCommand === "function");
assert(typeof DeleteDeliveryDestination$ === "object");
assert(typeof DeleteDeliveryDestinationPolicyCommand === "function");
assert(typeof DeleteDeliveryDestinationPolicy$ === "object");
assert(typeof DeleteDeliverySourceCommand === "function");
assert(typeof DeleteDeliverySource$ === "object");
assert(typeof DeleteDestinationCommand === "function");
assert(typeof DeleteDestination$ === "object");
assert(typeof DeleteIndexPolicyCommand === "function");
assert(typeof DeleteIndexPolicy$ === "object");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteIntegration$ === "object");
assert(typeof DeleteLogAnomalyDetectorCommand === "function");
assert(typeof DeleteLogAnomalyDetector$ === "object");
assert(typeof DeleteLogGroupCommand === "function");
assert(typeof DeleteLogGroup$ === "object");
assert(typeof DeleteLogStreamCommand === "function");
assert(typeof DeleteLogStream$ === "object");
assert(typeof DeleteMetricFilterCommand === "function");
assert(typeof DeleteMetricFilter$ === "object");
assert(typeof DeleteQueryDefinitionCommand === "function");
assert(typeof DeleteQueryDefinition$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteRetentionPolicyCommand === "function");
assert(typeof DeleteRetentionPolicy$ === "object");
assert(typeof DeleteScheduledQueryCommand === "function");
assert(typeof DeleteScheduledQuery$ === "object");
assert(typeof DeleteSubscriptionFilterCommand === "function");
assert(typeof DeleteSubscriptionFilter$ === "object");
assert(typeof DeleteTransformerCommand === "function");
assert(typeof DeleteTransformer$ === "object");
assert(typeof DescribeAccountPoliciesCommand === "function");
assert(typeof DescribeAccountPolicies$ === "object");
assert(typeof DescribeConfigurationTemplatesCommand === "function");
assert(typeof DescribeConfigurationTemplates$ === "object");
assert(typeof DescribeDeliveriesCommand === "function");
assert(typeof DescribeDeliveries$ === "object");
assert(typeof DescribeDeliveryDestinationsCommand === "function");
assert(typeof DescribeDeliveryDestinations$ === "object");
assert(typeof DescribeDeliverySourcesCommand === "function");
assert(typeof DescribeDeliverySources$ === "object");
assert(typeof DescribeDestinationsCommand === "function");
assert(typeof DescribeDestinations$ === "object");
assert(typeof DescribeExportTasksCommand === "function");
assert(typeof DescribeExportTasks$ === "object");
assert(typeof DescribeFieldIndexesCommand === "function");
assert(typeof DescribeFieldIndexes$ === "object");
assert(typeof DescribeImportTaskBatchesCommand === "function");
assert(typeof DescribeImportTaskBatches$ === "object");
assert(typeof DescribeImportTasksCommand === "function");
assert(typeof DescribeImportTasks$ === "object");
assert(typeof DescribeIndexPoliciesCommand === "function");
assert(typeof DescribeIndexPolicies$ === "object");
assert(typeof DescribeLogGroupsCommand === "function");
assert(typeof DescribeLogGroups$ === "object");
assert(typeof DescribeLogStreamsCommand === "function");
assert(typeof DescribeLogStreams$ === "object");
assert(typeof DescribeMetricFiltersCommand === "function");
assert(typeof DescribeMetricFilters$ === "object");
assert(typeof DescribeQueriesCommand === "function");
assert(typeof DescribeQueries$ === "object");
assert(typeof DescribeQueryDefinitionsCommand === "function");
assert(typeof DescribeQueryDefinitions$ === "object");
assert(typeof DescribeResourcePoliciesCommand === "function");
assert(typeof DescribeResourcePolicies$ === "object");
assert(typeof DescribeSubscriptionFiltersCommand === "function");
assert(typeof DescribeSubscriptionFilters$ === "object");
assert(typeof DisassociateKmsKeyCommand === "function");
assert(typeof DisassociateKmsKey$ === "object");
assert(typeof DisassociateSourceFromS3TableIntegrationCommand === "function");
assert(typeof DisassociateSourceFromS3TableIntegration$ === "object");
assert(typeof FilterLogEventsCommand === "function");
assert(typeof FilterLogEvents$ === "object");
assert(typeof GetDataProtectionPolicyCommand === "function");
assert(typeof GetDataProtectionPolicy$ === "object");
assert(typeof GetDeliveryCommand === "function");
assert(typeof GetDelivery$ === "object");
assert(typeof GetDeliveryDestinationCommand === "function");
assert(typeof GetDeliveryDestination$ === "object");
assert(typeof GetDeliveryDestinationPolicyCommand === "function");
assert(typeof GetDeliveryDestinationPolicy$ === "object");
assert(typeof GetDeliverySourceCommand === "function");
assert(typeof GetDeliverySource$ === "object");
assert(typeof GetIntegrationCommand === "function");
assert(typeof GetIntegration$ === "object");
assert(typeof GetLogAnomalyDetectorCommand === "function");
assert(typeof GetLogAnomalyDetector$ === "object");
assert(typeof GetLogEventsCommand === "function");
assert(typeof GetLogEvents$ === "object");
assert(typeof GetLogFieldsCommand === "function");
assert(typeof GetLogFields$ === "object");
assert(typeof GetLogGroupFieldsCommand === "function");
assert(typeof GetLogGroupFields$ === "object");
assert(typeof GetLogObjectCommand === "function");
assert(typeof GetLogObject$ === "object");
assert(typeof GetLogRecordCommand === "function");
assert(typeof GetLogRecord$ === "object");
assert(typeof GetQueryResultsCommand === "function");
assert(typeof GetQueryResults$ === "object");
assert(typeof GetScheduledQueryCommand === "function");
assert(typeof GetScheduledQuery$ === "object");
assert(typeof GetScheduledQueryHistoryCommand === "function");
assert(typeof GetScheduledQueryHistory$ === "object");
assert(typeof GetTransformerCommand === "function");
assert(typeof GetTransformer$ === "object");
assert(typeof ListAggregateLogGroupSummariesCommand === "function");
assert(typeof ListAggregateLogGroupSummaries$ === "object");
assert(typeof ListAnomaliesCommand === "function");
assert(typeof ListAnomalies$ === "object");
assert(typeof ListIntegrationsCommand === "function");
assert(typeof ListIntegrations$ === "object");
assert(typeof ListLogAnomalyDetectorsCommand === "function");
assert(typeof ListLogAnomalyDetectors$ === "object");
assert(typeof ListLogGroupsCommand === "function");
assert(typeof ListLogGroups$ === "object");
assert(typeof ListLogGroupsForQueryCommand === "function");
assert(typeof ListLogGroupsForQuery$ === "object");
assert(typeof ListScheduledQueriesCommand === "function");
assert(typeof ListScheduledQueries$ === "object");
assert(typeof ListSourcesForS3TableIntegrationCommand === "function");
assert(typeof ListSourcesForS3TableIntegration$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTagsLogGroupCommand === "function");
assert(typeof ListTagsLogGroup$ === "object");
assert(typeof PutAccountPolicyCommand === "function");
assert(typeof PutAccountPolicy$ === "object");
assert(typeof PutDataProtectionPolicyCommand === "function");
assert(typeof PutDataProtectionPolicy$ === "object");
assert(typeof PutDeliveryDestinationCommand === "function");
assert(typeof PutDeliveryDestination$ === "object");
assert(typeof PutDeliveryDestinationPolicyCommand === "function");
assert(typeof PutDeliveryDestinationPolicy$ === "object");
assert(typeof PutDeliverySourceCommand === "function");
assert(typeof PutDeliverySource$ === "object");
assert(typeof PutDestinationCommand === "function");
assert(typeof PutDestination$ === "object");
assert(typeof PutDestinationPolicyCommand === "function");
assert(typeof PutDestinationPolicy$ === "object");
assert(typeof PutIndexPolicyCommand === "function");
assert(typeof PutIndexPolicy$ === "object");
assert(typeof PutIntegrationCommand === "function");
assert(typeof PutIntegration$ === "object");
assert(typeof PutLogEventsCommand === "function");
assert(typeof PutLogEvents$ === "object");
assert(typeof PutLogGroupDeletionProtectionCommand === "function");
assert(typeof PutLogGroupDeletionProtection$ === "object");
assert(typeof PutMetricFilterCommand === "function");
assert(typeof PutMetricFilter$ === "object");
assert(typeof PutQueryDefinitionCommand === "function");
assert(typeof PutQueryDefinition$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof PutRetentionPolicyCommand === "function");
assert(typeof PutRetentionPolicy$ === "object");
assert(typeof PutSubscriptionFilterCommand === "function");
assert(typeof PutSubscriptionFilter$ === "object");
assert(typeof PutTransformerCommand === "function");
assert(typeof PutTransformer$ === "object");
assert(typeof StartLiveTailCommand === "function");
assert(typeof StartLiveTail$ === "object");
assert(typeof StartQueryCommand === "function");
assert(typeof StartQuery$ === "object");
assert(typeof StopQueryCommand === "function");
assert(typeof StopQuery$ === "object");
assert(typeof TagLogGroupCommand === "function");
assert(typeof TagLogGroup$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestMetricFilterCommand === "function");
assert(typeof TestMetricFilter$ === "object");
assert(typeof TestTransformerCommand === "function");
assert(typeof TestTransformer$ === "object");
assert(typeof UntagLogGroupCommand === "function");
assert(typeof UntagLogGroup$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAnomalyCommand === "function");
assert(typeof UpdateAnomaly$ === "object");
assert(typeof UpdateDeliveryConfigurationCommand === "function");
assert(typeof UpdateDeliveryConfiguration$ === "object");
assert(typeof UpdateLogAnomalyDetectorCommand === "function");
assert(typeof UpdateLogAnomalyDetector$ === "object");
assert(typeof UpdateScheduledQueryCommand === "function");
assert(typeof UpdateScheduledQuery$ === "object");
// structural schemas
assert(typeof AccountPolicy$ === "object");
assert(typeof AddKeyEntry$ === "object");
assert(typeof AddKeys$ === "object");
assert(typeof AggregateLogGroupSummary$ === "object");
assert(typeof Anomaly$ === "object");
assert(typeof AnomalyDetector$ === "object");
assert(typeof AssociateKmsKeyRequest$ === "object");
assert(typeof AssociateSourceToS3TableIntegrationRequest$ === "object");
assert(typeof AssociateSourceToS3TableIntegrationResponse$ === "object");
assert(typeof CancelExportTaskRequest$ === "object");
assert(typeof CancelImportTaskRequest$ === "object");
assert(typeof CancelImportTaskResponse$ === "object");
assert(typeof ConfigurationTemplate$ === "object");
assert(typeof ConfigurationTemplateDeliveryConfigValues$ === "object");
assert(typeof CopyValue$ === "object");
assert(typeof CopyValueEntry$ === "object");
assert(typeof CreateDeliveryRequest$ === "object");
assert(typeof CreateDeliveryResponse$ === "object");
assert(typeof CreateExportTaskRequest$ === "object");
assert(typeof CreateExportTaskResponse$ === "object");
assert(typeof CreateImportTaskRequest$ === "object");
assert(typeof CreateImportTaskResponse$ === "object");
assert(typeof CreateLogAnomalyDetectorRequest$ === "object");
assert(typeof CreateLogAnomalyDetectorResponse$ === "object");
assert(typeof CreateLogGroupRequest$ === "object");
assert(typeof CreateLogStreamRequest$ === "object");
assert(typeof CreateScheduledQueryRequest$ === "object");
assert(typeof CreateScheduledQueryResponse$ === "object");
assert(typeof CSV$ === "object");
assert(typeof DataSource$ === "object");
assert(typeof DataSourceFilter$ === "object");
assert(typeof DateTimeConverter$ === "object");
assert(typeof DeleteAccountPolicyRequest$ === "object");
assert(typeof DeleteDataProtectionPolicyRequest$ === "object");
assert(typeof DeleteDeliveryDestinationPolicyRequest$ === "object");
assert(typeof DeleteDeliveryDestinationRequest$ === "object");
assert(typeof DeleteDeliveryRequest$ === "object");
assert(typeof DeleteDeliverySourceRequest$ === "object");
assert(typeof DeleteDestinationRequest$ === "object");
assert(typeof DeleteIndexPolicyRequest$ === "object");
assert(typeof DeleteIndexPolicyResponse$ === "object");
assert(typeof DeleteIntegrationRequest$ === "object");
assert(typeof DeleteIntegrationResponse$ === "object");
assert(typeof DeleteKeys$ === "object");
assert(typeof DeleteLogAnomalyDetectorRequest$ === "object");
assert(typeof DeleteLogGroupRequest$ === "object");
assert(typeof DeleteLogStreamRequest$ === "object");
assert(typeof DeleteMetricFilterRequest$ === "object");
assert(typeof DeleteQueryDefinitionRequest$ === "object");
assert(typeof DeleteQueryDefinitionResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteRetentionPolicyRequest$ === "object");
assert(typeof DeleteScheduledQueryRequest$ === "object");
assert(typeof DeleteScheduledQueryResponse$ === "object");
assert(typeof DeleteSubscriptionFilterRequest$ === "object");
assert(typeof DeleteTransformerRequest$ === "object");
assert(typeof Delivery$ === "object");
assert(typeof DeliveryDestination$ === "object");
assert(typeof DeliveryDestinationConfiguration$ === "object");
assert(typeof DeliverySource$ === "object");
assert(typeof DescribeAccountPoliciesRequest$ === "object");
assert(typeof DescribeAccountPoliciesResponse$ === "object");
assert(typeof DescribeConfigurationTemplatesRequest$ === "object");
assert(typeof DescribeConfigurationTemplatesResponse$ === "object");
assert(typeof DescribeDeliveriesRequest$ === "object");
assert(typeof DescribeDeliveriesResponse$ === "object");
assert(typeof DescribeDeliveryDestinationsRequest$ === "object");
assert(typeof DescribeDeliveryDestinationsResponse$ === "object");
assert(typeof DescribeDeliverySourcesRequest$ === "object");
assert(typeof DescribeDeliverySourcesResponse$ === "object");
assert(typeof DescribeDestinationsRequest$ === "object");
assert(typeof DescribeDestinationsResponse$ === "object");
assert(typeof DescribeExportTasksRequest$ === "object");
assert(typeof DescribeExportTasksResponse$ === "object");
assert(typeof DescribeFieldIndexesRequest$ === "object");
assert(typeof DescribeFieldIndexesResponse$ === "object");
assert(typeof DescribeImportTaskBatchesRequest$ === "object");
assert(typeof DescribeImportTaskBatchesResponse$ === "object");
assert(typeof DescribeImportTasksRequest$ === "object");
assert(typeof DescribeImportTasksResponse$ === "object");
assert(typeof DescribeIndexPoliciesRequest$ === "object");
assert(typeof DescribeIndexPoliciesResponse$ === "object");
assert(typeof DescribeLogGroupsRequest$ === "object");
assert(typeof DescribeLogGroupsResponse$ === "object");
assert(typeof DescribeLogStreamsRequest$ === "object");
assert(typeof DescribeLogStreamsResponse$ === "object");
assert(typeof DescribeMetricFiltersRequest$ === "object");
assert(typeof DescribeMetricFiltersResponse$ === "object");
assert(typeof DescribeQueriesRequest$ === "object");
assert(typeof DescribeQueriesResponse$ === "object");
assert(typeof DescribeQueryDefinitionsRequest$ === "object");
assert(typeof DescribeQueryDefinitionsResponse$ === "object");
assert(typeof DescribeResourcePoliciesRequest$ === "object");
assert(typeof DescribeResourcePoliciesResponse$ === "object");
assert(typeof DescribeSubscriptionFiltersRequest$ === "object");
assert(typeof DescribeSubscriptionFiltersResponse$ === "object");
assert(typeof Destination$ === "object");
assert(typeof DestinationConfiguration$ === "object");
assert(typeof DisassociateKmsKeyRequest$ === "object");
assert(typeof DisassociateSourceFromS3TableIntegrationRequest$ === "object");
assert(typeof DisassociateSourceFromS3TableIntegrationResponse$ === "object");
assert(typeof Entity$ === "object");
assert(typeof ExportTask$ === "object");
assert(typeof ExportTaskExecutionInfo$ === "object");
assert(typeof ExportTaskStatus$ === "object");
assert(typeof FieldIndex$ === "object");
assert(typeof FieldsData$ === "object");
assert(typeof FilteredLogEvent$ === "object");
assert(typeof FilterLogEventsRequest$ === "object");
assert(typeof FilterLogEventsResponse$ === "object");
assert(typeof GetDataProtectionPolicyRequest$ === "object");
assert(typeof GetDataProtectionPolicyResponse$ === "object");
assert(typeof GetDeliveryDestinationPolicyRequest$ === "object");
assert(typeof GetDeliveryDestinationPolicyResponse$ === "object");
assert(typeof GetDeliveryDestinationRequest$ === "object");
assert(typeof GetDeliveryDestinationResponse$ === "object");
assert(typeof GetDeliveryRequest$ === "object");
assert(typeof GetDeliveryResponse$ === "object");
assert(typeof GetDeliverySourceRequest$ === "object");
assert(typeof GetDeliverySourceResponse$ === "object");
assert(typeof GetIntegrationRequest$ === "object");
assert(typeof GetIntegrationResponse$ === "object");
assert(typeof GetLogAnomalyDetectorRequest$ === "object");
assert(typeof GetLogAnomalyDetectorResponse$ === "object");
assert(typeof GetLogEventsRequest$ === "object");
assert(typeof GetLogEventsResponse$ === "object");
assert(typeof GetLogFieldsRequest$ === "object");
assert(typeof GetLogFieldsResponse$ === "object");
assert(typeof GetLogGroupFieldsRequest$ === "object");
assert(typeof GetLogGroupFieldsResponse$ === "object");
assert(typeof GetLogObjectRequest$ === "object");
assert(typeof GetLogObjectResponse$ === "object");
assert(typeof GetLogObjectResponseStream$ === "object");
assert(typeof GetLogRecordRequest$ === "object");
assert(typeof GetLogRecordResponse$ === "object");
assert(typeof GetQueryResultsRequest$ === "object");
assert(typeof GetQueryResultsResponse$ === "object");
assert(typeof GetScheduledQueryHistoryRequest$ === "object");
assert(typeof GetScheduledQueryHistoryResponse$ === "object");
assert(typeof GetScheduledQueryRequest$ === "object");
assert(typeof GetScheduledQueryResponse$ === "object");
assert(typeof GetTransformerRequest$ === "object");
assert(typeof GetTransformerResponse$ === "object");
assert(typeof Grok$ === "object");
assert(typeof GroupingIdentifier$ === "object");
assert(typeof Import$ === "object");
assert(typeof ImportBatch$ === "object");
assert(typeof ImportFilter$ === "object");
assert(typeof ImportStatistics$ === "object");
assert(typeof IndexPolicy$ === "object");
assert(typeof InputLogEvent$ === "object");
assert(typeof IntegrationDetails$ === "object");
assert(typeof IntegrationSummary$ === "object");
assert(typeof ListAggregateLogGroupSummariesRequest$ === "object");
assert(typeof ListAggregateLogGroupSummariesResponse$ === "object");
assert(typeof ListAnomaliesRequest$ === "object");
assert(typeof ListAnomaliesResponse$ === "object");
assert(typeof ListIntegrationsRequest$ === "object");
assert(typeof ListIntegrationsResponse$ === "object");
assert(typeof ListLogAnomalyDetectorsRequest$ === "object");
assert(typeof ListLogAnomalyDetectorsResponse$ === "object");
assert(typeof ListLogGroupsForQueryRequest$ === "object");
assert(typeof ListLogGroupsForQueryResponse$ === "object");
assert(typeof ListLogGroupsRequest$ === "object");
assert(typeof ListLogGroupsResponse$ === "object");
assert(typeof ListScheduledQueriesRequest$ === "object");
assert(typeof ListScheduledQueriesResponse$ === "object");
assert(typeof ListSourcesForS3TableIntegrationRequest$ === "object");
assert(typeof ListSourcesForS3TableIntegrationResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTagsLogGroupRequest$ === "object");
assert(typeof ListTagsLogGroupResponse$ === "object");
assert(typeof ListToMap$ === "object");
assert(typeof LiveTailSessionLogEvent$ === "object");
assert(typeof LiveTailSessionMetadata$ === "object");
assert(typeof LiveTailSessionStart$ === "object");
assert(typeof LiveTailSessionUpdate$ === "object");
assert(typeof LogEvent$ === "object");
assert(typeof LogFieldsListItem$ === "object");
assert(typeof LogFieldType$ === "object");
assert(typeof LogGroup$ === "object");
assert(typeof LogGroupField$ === "object");
assert(typeof LogGroupSummary$ === "object");
assert(typeof LogStream$ === "object");
assert(typeof LowerCaseString$ === "object");
assert(typeof MetricFilter$ === "object");
assert(typeof MetricFilterMatchRecord$ === "object");
assert(typeof MetricTransformation$ === "object");
assert(typeof MoveKeyEntry$ === "object");
assert(typeof MoveKeys$ === "object");
assert(typeof OpenSearchApplication$ === "object");
assert(typeof OpenSearchCollection$ === "object");
assert(typeof OpenSearchDataAccessPolicy$ === "object");
assert(typeof OpenSearchDataSource$ === "object");
assert(typeof OpenSearchEncryptionPolicy$ === "object");
assert(typeof OpenSearchIntegrationDetails$ === "object");
assert(typeof OpenSearchLifecyclePolicy$ === "object");
assert(typeof OpenSearchNetworkPolicy$ === "object");
assert(typeof OpenSearchResourceConfig$ === "object");
assert(typeof OpenSearchResourceStatus$ === "object");
assert(typeof OpenSearchWorkspace$ === "object");
assert(typeof OutputLogEvent$ === "object");
assert(typeof ParseCloudfront$ === "object");
assert(typeof ParseJSON$ === "object");
assert(typeof ParseKeyValue$ === "object");
assert(typeof ParsePostgres$ === "object");
assert(typeof ParseRoute53$ === "object");
assert(typeof ParseToOCSF$ === "object");
assert(typeof ParseVPC$ === "object");
assert(typeof ParseWAF$ === "object");
assert(typeof PatternToken$ === "object");
assert(typeof Policy$ === "object");
assert(typeof Processor$ === "object");
assert(typeof PutAccountPolicyRequest$ === "object");
assert(typeof PutAccountPolicyResponse$ === "object");
assert(typeof PutDataProtectionPolicyRequest$ === "object");
assert(typeof PutDataProtectionPolicyResponse$ === "object");
assert(typeof PutDeliveryDestinationPolicyRequest$ === "object");
assert(typeof PutDeliveryDestinationPolicyResponse$ === "object");
assert(typeof PutDeliveryDestinationRequest$ === "object");
assert(typeof PutDeliveryDestinationResponse$ === "object");
assert(typeof PutDeliverySourceRequest$ === "object");
assert(typeof PutDeliverySourceResponse$ === "object");
assert(typeof PutDestinationPolicyRequest$ === "object");
assert(typeof PutDestinationRequest$ === "object");
assert(typeof PutDestinationResponse$ === "object");
assert(typeof PutIndexPolicyRequest$ === "object");
assert(typeof PutIndexPolicyResponse$ === "object");
assert(typeof PutIntegrationRequest$ === "object");
assert(typeof PutIntegrationResponse$ === "object");
assert(typeof PutLogEventsRequest$ === "object");
assert(typeof PutLogEventsResponse$ === "object");
assert(typeof PutLogGroupDeletionProtectionRequest$ === "object");
assert(typeof PutMetricFilterRequest$ === "object");
assert(typeof PutQueryDefinitionRequest$ === "object");
assert(typeof PutQueryDefinitionResponse$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof PutRetentionPolicyRequest$ === "object");
assert(typeof PutSubscriptionFilterRequest$ === "object");
assert(typeof PutTransformerRequest$ === "object");
assert(typeof QueryCompileError$ === "object");
assert(typeof QueryCompileErrorLocation$ === "object");
assert(typeof QueryDefinition$ === "object");
assert(typeof QueryInfo$ === "object");
assert(typeof QueryStatistics$ === "object");
assert(typeof RecordField$ === "object");
assert(typeof RejectedEntityInfo$ === "object");
assert(typeof RejectedLogEventsInfo$ === "object");
assert(typeof RenameKeyEntry$ === "object");
assert(typeof RenameKeys$ === "object");
assert(typeof ResourceConfig$ === "object");
assert(typeof ResourcePolicy$ === "object");
assert(typeof ResultField$ === "object");
assert(typeof S3Configuration$ === "object");
assert(typeof S3DeliveryConfiguration$ === "object");
assert(typeof S3TableIntegrationSource$ === "object");
assert(typeof ScheduledQueryDestination$ === "object");
assert(typeof ScheduledQuerySummary$ === "object");
assert(typeof SearchedLogStream$ === "object");
assert(typeof SplitString$ === "object");
assert(typeof SplitStringEntry$ === "object");
assert(typeof StartLiveTailRequest$ === "object");
assert(typeof StartLiveTailResponse$ === "object");
assert(typeof StartLiveTailResponseStream$ === "object");
assert(typeof StartQueryRequest$ === "object");
assert(typeof StartQueryResponse$ === "object");
assert(typeof StopQueryRequest$ === "object");
assert(typeof StopQueryResponse$ === "object");
assert(typeof SubscriptionFilter$ === "object");
assert(typeof SubstituteString$ === "object");
assert(typeof SubstituteStringEntry$ === "object");
assert(typeof SuppressionPeriod$ === "object");
assert(typeof TagLogGroupRequest$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TestMetricFilterRequest$ === "object");
assert(typeof TestMetricFilterResponse$ === "object");
assert(typeof TestTransformerRequest$ === "object");
assert(typeof TestTransformerResponse$ === "object");
assert(typeof TransformedLogRecord$ === "object");
assert(typeof TriggerHistoryRecord$ === "object");
assert(typeof TrimString$ === "object");
assert(typeof TypeConverter$ === "object");
assert(typeof TypeConverterEntry$ === "object");
assert(typeof UntagLogGroupRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateAnomalyRequest$ === "object");
assert(typeof UpdateDeliveryConfigurationRequest$ === "object");
assert(typeof UpdateDeliveryConfigurationResponse$ === "object");
assert(typeof UpdateLogAnomalyDetectorRequest$ === "object");
assert(typeof UpdateScheduledQueryRequest$ === "object");
assert(typeof UpdateScheduledQueryResponse$ === "object");
assert(typeof UpperCaseString$ === "object");
// enums
assert(typeof ActionStatus === "object");
assert(typeof AnomalyDetectorStatus === "object");
assert(typeof DataProtectionStatus === "object");
assert(typeof DeliveryDestinationType === "object");
assert(typeof Distribution === "object");
assert(typeof EntityRejectionErrorType === "object");
assert(typeof EvaluationFrequency === "object");
assert(typeof EventSource === "object");
assert(typeof ExecutionStatus === "object");
assert(typeof ExportTaskStatusCode === "object");
assert(typeof FlattenedElement === "object");
assert(typeof ImportStatus === "object");
assert(typeof IndexSource === "object");
assert(typeof IndexType === "object");
assert(typeof InheritedProperty === "object");
assert(typeof IntegrationStatus === "object");
assert(typeof IntegrationType === "object");
assert(typeof ListAggregateLogGroupSummariesGroupBy === "object");
assert(typeof LogGroupClass === "object");
assert(typeof OCSFVersion === "object");
assert(typeof OpenSearchResourceStatusType === "object");
assert(typeof OrderBy === "object");
assert(typeof OutputFormat === "object");
assert(typeof PolicyScope === "object");
assert(typeof PolicyType === "object");
assert(typeof QueryLanguage === "object");
assert(typeof QueryStatus === "object");
assert(typeof S3TableIntegrationSourceStatus === "object");
assert(typeof ScheduledQueryDestinationType === "object");
assert(typeof ScheduledQueryState === "object");
assert(typeof Scope === "object");
assert(typeof StandardUnit === "object");
assert(typeof State === "object");
assert(typeof SuppressionState === "object");
assert(typeof SuppressionType === "object");
assert(typeof SuppressionUnit === "object");
assert(typeof Type === "object");
// errors
assert(AccessDeniedException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof ConflictException$ === "object");
assert(DataAlreadyAcceptedException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof DataAlreadyAcceptedException$ === "object");
assert(InternalServerException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof InternalServerException$ === "object");
assert(InternalStreamingException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof InternalStreamingException$ === "object");
assert(InvalidOperationException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof InvalidOperationException$ === "object");
assert(InvalidParameterException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidSequenceTokenException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof InvalidSequenceTokenException$ === "object");
assert(LimitExceededException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MalformedQueryException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof MalformedQueryException$ === "object");
assert(OperationAbortedException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof OperationAbortedException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(SessionStreamingException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof SessionStreamingException$ === "object");
assert(SessionTimeoutException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof SessionTimeoutException$ === "object");
assert(ThrottlingException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyTagsException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(UnrecognizedClientException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof UnrecognizedClientException$ === "object");
assert(ValidationException.prototype instanceof CloudWatchLogsServiceException);
assert(typeof ValidationException$ === "object");
assert(CloudWatchLogsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeConfigurationTemplates === "function");
assert(typeof paginateDescribeDeliveries === "function");
assert(typeof paginateDescribeDeliveryDestinations === "function");
assert(typeof paginateDescribeDeliverySources === "function");
assert(typeof paginateDescribeDestinations === "function");
assert(typeof paginateDescribeLogGroups === "function");
assert(typeof paginateDescribeLogStreams === "function");
assert(typeof paginateDescribeMetricFilters === "function");
assert(typeof paginateDescribeSubscriptionFilters === "function");
assert(typeof paginateFilterLogEvents === "function");
assert(typeof paginateGetLogEvents === "function");
assert(typeof paginateGetScheduledQueryHistory === "function");
assert(typeof paginateListAggregateLogGroupSummaries === "function");
assert(typeof paginateListAnomalies === "function");
assert(typeof paginateListLogAnomalyDetectors === "function");
assert(typeof paginateListLogGroupsForQuery === "function");
assert(typeof paginateListScheduledQueries === "function");
assert(typeof paginateListSourcesForS3TableIntegration === "function");
console.log(`CloudWatchLogs index test passed.`);
