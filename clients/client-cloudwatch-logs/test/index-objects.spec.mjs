import {
  ActionStatus,
  AnomalyDetectorStatus,
  AssociateKmsKeyCommand,
  AssociateSourceToS3TableIntegrationCommand,
  CancelExportTaskCommand,
  CloudWatchLogs,
  CloudWatchLogsClient,
  CloudWatchLogsServiceException,
  CreateDeliveryCommand,
  CreateExportTaskCommand,
  CreateLogAnomalyDetectorCommand,
  CreateLogGroupCommand,
  CreateLogStreamCommand,
  CreateScheduledQueryCommand,
  DataProtectionStatus,
  DeleteAccountPolicyCommand,
  DeleteDataProtectionPolicyCommand,
  DeleteDeliveryCommand,
  DeleteDeliveryDestinationCommand,
  DeleteDeliveryDestinationPolicyCommand,
  DeleteDeliverySourceCommand,
  DeleteDestinationCommand,
  DeleteIndexPolicyCommand,
  DeleteIntegrationCommand,
  DeleteLogAnomalyDetectorCommand,
  DeleteLogGroupCommand,
  DeleteLogStreamCommand,
  DeleteMetricFilterCommand,
  DeleteQueryDefinitionCommand,
  DeleteResourcePolicyCommand,
  DeleteRetentionPolicyCommand,
  DeleteScheduledQueryCommand,
  DeleteSubscriptionFilterCommand,
  DeleteTransformerCommand,
  DeliveryDestinationType,
  DescribeAccountPoliciesCommand,
  DescribeConfigurationTemplatesCommand,
  DescribeDeliveriesCommand,
  DescribeDeliveryDestinationsCommand,
  DescribeDeliverySourcesCommand,
  DescribeDestinationsCommand,
  DescribeExportTasksCommand,
  DescribeFieldIndexesCommand,
  DescribeIndexPoliciesCommand,
  DescribeLogGroupsCommand,
  DescribeLogStreamsCommand,
  DescribeMetricFiltersCommand,
  DescribeQueriesCommand,
  DescribeQueryDefinitionsCommand,
  DescribeResourcePoliciesCommand,
  DescribeSubscriptionFiltersCommand,
  DisassociateKmsKeyCommand,
  DisassociateSourceFromS3TableIntegrationCommand,
  Distribution,
  EntityRejectionErrorType,
  EvaluationFrequency,
  EventSource,
  ExecutionStatus,
  ExportTaskStatusCode,
  FilterLogEventsCommand,
  FlattenedElement,
  GetDataProtectionPolicyCommand,
  GetDeliveryCommand,
  GetDeliveryDestinationCommand,
  GetDeliveryDestinationPolicyCommand,
  GetDeliverySourceCommand,
  GetIntegrationCommand,
  GetLogAnomalyDetectorCommand,
  GetLogEventsCommand,
  GetLogFieldsCommand,
  GetLogGroupFieldsCommand,
  GetLogObjectCommand,
  GetLogRecordCommand,
  GetQueryResultsCommand,
  GetScheduledQueryCommand,
  GetScheduledQueryHistoryCommand,
  GetTransformerCommand,
  IndexSource,
  IndexType,
  InheritedProperty,
  IntegrationStatus,
  IntegrationType,
  InternalStreamingException,
  ListAggregateLogGroupSummariesCommand,
  ListAggregateLogGroupSummariesGroupBy,
  ListAnomaliesCommand,
  ListIntegrationsCommand,
  ListLogAnomalyDetectorsCommand,
  ListLogGroupsCommand,
  ListLogGroupsForQueryCommand,
  ListScheduledQueriesCommand,
  ListSourcesForS3TableIntegrationCommand,
  ListTagsForResourceCommand,
  ListTagsLogGroupCommand,
  LogGroupClass,
  OCSFVersion,
  OpenSearchResourceStatusType,
  OrderBy,
  OutputFormat,
  PolicyScope,
  PolicyType,
  PutAccountPolicyCommand,
  PutDataProtectionPolicyCommand,
  PutDeliveryDestinationCommand,
  PutDeliveryDestinationPolicyCommand,
  PutDeliverySourceCommand,
  PutDestinationCommand,
  PutDestinationPolicyCommand,
  PutIndexPolicyCommand,
  PutIntegrationCommand,
  PutLogEventsCommand,
  PutLogGroupDeletionProtectionCommand,
  PutMetricFilterCommand,
  PutQueryDefinitionCommand,
  PutResourcePolicyCommand,
  PutRetentionPolicyCommand,
  PutSubscriptionFilterCommand,
  PutTransformerCommand,
  QueryLanguage,
  QueryStatus,
  S3TableIntegrationSourceStatus,
  ScheduledQueryDestinationType,
  ScheduledQueryState,
  Scope,
  SessionStreamingException,
  SessionTimeoutException,
  StandardUnit,
  StartLiveTailCommand,
  StartQueryCommand,
  State,
  StopQueryCommand,
  SuppressionState,
  SuppressionType,
  SuppressionUnit,
  TagLogGroupCommand,
  TagResourceCommand,
  TestMetricFilterCommand,
  TestTransformerCommand,
  Type,
  UntagLogGroupCommand,
  UntagResourceCommand,
  UpdateAnomalyCommand,
  UpdateDeliveryConfigurationCommand,
  UpdateLogAnomalyDetectorCommand,
  UpdateScheduledQueryCommand,
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
  paginateListAnomalies,
  paginateListLogAnomalyDetectors,
  paginateListLogGroupsForQuery,
  paginateListScheduledQueries,
  paginateListSourcesForS3TableIntegration,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudWatchLogsClient === "function")
assert(typeof CloudWatchLogs === "function")
// commands
assert(typeof AssociateKmsKeyCommand === "function")
assert(typeof AssociateSourceToS3TableIntegrationCommand === "function")
assert(typeof CancelExportTaskCommand === "function")
assert(typeof CreateDeliveryCommand === "function")
assert(typeof CreateExportTaskCommand === "function")
assert(typeof CreateLogAnomalyDetectorCommand === "function")
assert(typeof CreateLogGroupCommand === "function")
assert(typeof CreateLogStreamCommand === "function")
assert(typeof CreateScheduledQueryCommand === "function")
assert(typeof DeleteAccountPolicyCommand === "function")
assert(typeof DeleteDataProtectionPolicyCommand === "function")
assert(typeof DeleteDeliveryCommand === "function")
assert(typeof DeleteDeliveryDestinationCommand === "function")
assert(typeof DeleteDeliveryDestinationPolicyCommand === "function")
assert(typeof DeleteDeliverySourceCommand === "function")
assert(typeof DeleteDestinationCommand === "function")
assert(typeof DeleteIndexPolicyCommand === "function")
assert(typeof DeleteIntegrationCommand === "function")
assert(typeof DeleteLogAnomalyDetectorCommand === "function")
assert(typeof DeleteLogGroupCommand === "function")
assert(typeof DeleteLogStreamCommand === "function")
assert(typeof DeleteMetricFilterCommand === "function")
assert(typeof DeleteQueryDefinitionCommand === "function")
assert(typeof DeleteResourcePolicyCommand === "function")
assert(typeof DeleteRetentionPolicyCommand === "function")
assert(typeof DeleteScheduledQueryCommand === "function")
assert(typeof DeleteSubscriptionFilterCommand === "function")
assert(typeof DeleteTransformerCommand === "function")
assert(typeof DescribeAccountPoliciesCommand === "function")
assert(typeof DescribeConfigurationTemplatesCommand === "function")
assert(typeof DescribeDeliveriesCommand === "function")
assert(typeof DescribeDeliveryDestinationsCommand === "function")
assert(typeof DescribeDeliverySourcesCommand === "function")
assert(typeof DescribeDestinationsCommand === "function")
assert(typeof DescribeExportTasksCommand === "function")
assert(typeof DescribeFieldIndexesCommand === "function")
assert(typeof DescribeIndexPoliciesCommand === "function")
assert(typeof DescribeLogGroupsCommand === "function")
assert(typeof DescribeLogStreamsCommand === "function")
assert(typeof DescribeMetricFiltersCommand === "function")
assert(typeof DescribeQueriesCommand === "function")
assert(typeof DescribeQueryDefinitionsCommand === "function")
assert(typeof DescribeResourcePoliciesCommand === "function")
assert(typeof DescribeSubscriptionFiltersCommand === "function")
assert(typeof DisassociateKmsKeyCommand === "function")
assert(typeof DisassociateSourceFromS3TableIntegrationCommand === "function")
assert(typeof FilterLogEventsCommand === "function")
assert(typeof GetDataProtectionPolicyCommand === "function")
assert(typeof GetDeliveryCommand === "function")
assert(typeof GetDeliveryDestinationCommand === "function")
assert(typeof GetDeliveryDestinationPolicyCommand === "function")
assert(typeof GetDeliverySourceCommand === "function")
assert(typeof GetIntegrationCommand === "function")
assert(typeof GetLogAnomalyDetectorCommand === "function")
assert(typeof GetLogEventsCommand === "function")
assert(typeof GetLogFieldsCommand === "function")
assert(typeof GetLogGroupFieldsCommand === "function")
assert(typeof GetLogObjectCommand === "function")
assert(typeof GetLogRecordCommand === "function")
assert(typeof GetQueryResultsCommand === "function")
assert(typeof GetScheduledQueryCommand === "function")
assert(typeof GetScheduledQueryHistoryCommand === "function")
assert(typeof GetTransformerCommand === "function")
assert(typeof ListAggregateLogGroupSummariesCommand === "function")
assert(typeof ListAnomaliesCommand === "function")
assert(typeof ListIntegrationsCommand === "function")
assert(typeof ListLogAnomalyDetectorsCommand === "function")
assert(typeof ListLogGroupsCommand === "function")
assert(typeof ListLogGroupsForQueryCommand === "function")
assert(typeof ListScheduledQueriesCommand === "function")
assert(typeof ListSourcesForS3TableIntegrationCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTagsLogGroupCommand === "function")
assert(typeof PutAccountPolicyCommand === "function")
assert(typeof PutDataProtectionPolicyCommand === "function")
assert(typeof PutDeliveryDestinationCommand === "function")
assert(typeof PutDeliveryDestinationPolicyCommand === "function")
assert(typeof PutDeliverySourceCommand === "function")
assert(typeof PutDestinationCommand === "function")
assert(typeof PutDestinationPolicyCommand === "function")
assert(typeof PutIndexPolicyCommand === "function")
assert(typeof PutIntegrationCommand === "function")
assert(typeof PutLogEventsCommand === "function")
assert(typeof PutLogGroupDeletionProtectionCommand === "function")
assert(typeof PutMetricFilterCommand === "function")
assert(typeof PutQueryDefinitionCommand === "function")
assert(typeof PutResourcePolicyCommand === "function")
assert(typeof PutRetentionPolicyCommand === "function")
assert(typeof PutSubscriptionFilterCommand === "function")
assert(typeof PutTransformerCommand === "function")
assert(typeof StartLiveTailCommand === "function")
assert(typeof StartQueryCommand === "function")
assert(typeof StopQueryCommand === "function")
assert(typeof TagLogGroupCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof TestMetricFilterCommand === "function")
assert(typeof TestTransformerCommand === "function")
assert(typeof UntagLogGroupCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAnomalyCommand === "function")
assert(typeof UpdateDeliveryConfigurationCommand === "function")
assert(typeof UpdateLogAnomalyDetectorCommand === "function")
assert(typeof UpdateScheduledQueryCommand === "function")
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
assert(InternalStreamingException.prototype instanceof CloudWatchLogsServiceException)
assert(SessionStreamingException.prototype instanceof CloudWatchLogsServiceException)
assert(SessionTimeoutException.prototype instanceof CloudWatchLogsServiceException)
assert(CloudWatchLogsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeConfigurationTemplates === "function")
assert(typeof paginateDescribeDeliveries === "function")
assert(typeof paginateDescribeDeliveryDestinations === "function")
assert(typeof paginateDescribeDeliverySources === "function")
assert(typeof paginateDescribeDestinations === "function")
assert(typeof paginateDescribeLogGroups === "function")
assert(typeof paginateDescribeLogStreams === "function")
assert(typeof paginateDescribeMetricFilters === "function")
assert(typeof paginateDescribeSubscriptionFilters === "function")
assert(typeof paginateFilterLogEvents === "function")
assert(typeof paginateGetLogEvents === "function")
assert(typeof paginateGetScheduledQueryHistory === "function")
assert(typeof paginateListAnomalies === "function")
assert(typeof paginateListLogAnomalyDetectors === "function")
assert(typeof paginateListLogGroupsForQuery === "function")
assert(typeof paginateListScheduledQueries === "function")
assert(typeof paginateListSourcesForS3TableIntegration === "function")
console.log(`CloudWatchLogs index test passed.`);
