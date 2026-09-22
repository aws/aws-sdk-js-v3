// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { CloudWatchLogsClient } from "./CloudWatchLogsClient";
import {
  type AssociateKmsKeyCommandInput,
  type AssociateKmsKeyCommandOutput,
  AssociateKmsKeyCommand,
} from "./commands/AssociateKmsKeyCommand";
import {
  type AssociateSourceToS3TableIntegrationCommandInput,
  type AssociateSourceToS3TableIntegrationCommandOutput,
  AssociateSourceToS3TableIntegrationCommand,
} from "./commands/AssociateSourceToS3TableIntegrationCommand";
import {
  type CancelExportTaskCommandInput,
  type CancelExportTaskCommandOutput,
  CancelExportTaskCommand,
} from "./commands/CancelExportTaskCommand";
import {
  type CancelImportTaskCommandInput,
  type CancelImportTaskCommandOutput,
  CancelImportTaskCommand,
} from "./commands/CancelImportTaskCommand";
import {
  type CreateDeliveryCommandInput,
  type CreateDeliveryCommandOutput,
  CreateDeliveryCommand,
} from "./commands/CreateDeliveryCommand";
import {
  type CreateExportTaskCommandInput,
  type CreateExportTaskCommandOutput,
  CreateExportTaskCommand,
} from "./commands/CreateExportTaskCommand";
import {
  type CreateImportTaskCommandInput,
  type CreateImportTaskCommandOutput,
  CreateImportTaskCommand,
} from "./commands/CreateImportTaskCommand";
import {
  type CreateLogAnomalyDetectorCommandInput,
  type CreateLogAnomalyDetectorCommandOutput,
  CreateLogAnomalyDetectorCommand,
} from "./commands/CreateLogAnomalyDetectorCommand";
import {
  type CreateLogGroupCommandInput,
  type CreateLogGroupCommandOutput,
  CreateLogGroupCommand,
} from "./commands/CreateLogGroupCommand";
import {
  type CreateLogStreamCommandInput,
  type CreateLogStreamCommandOutput,
  CreateLogStreamCommand,
} from "./commands/CreateLogStreamCommand";
import {
  type CreateLookupTableCommandInput,
  type CreateLookupTableCommandOutput,
  CreateLookupTableCommand,
} from "./commands/CreateLookupTableCommand";
import {
  type CreateScheduledQueryCommandInput,
  type CreateScheduledQueryCommandOutput,
  CreateScheduledQueryCommand,
} from "./commands/CreateScheduledQueryCommand";
import {
  type DeleteAccountPolicyCommandInput,
  type DeleteAccountPolicyCommandOutput,
  DeleteAccountPolicyCommand,
} from "./commands/DeleteAccountPolicyCommand";
import {
  type DeleteDataProtectionPolicyCommandInput,
  type DeleteDataProtectionPolicyCommandOutput,
  DeleteDataProtectionPolicyCommand,
} from "./commands/DeleteDataProtectionPolicyCommand";
import {
  type DeleteDeliveryCommandInput,
  type DeleteDeliveryCommandOutput,
  DeleteDeliveryCommand,
} from "./commands/DeleteDeliveryCommand";
import {
  type DeleteDeliveryDestinationCommandInput,
  type DeleteDeliveryDestinationCommandOutput,
  DeleteDeliveryDestinationCommand,
} from "./commands/DeleteDeliveryDestinationCommand";
import {
  type DeleteDeliveryDestinationPolicyCommandInput,
  type DeleteDeliveryDestinationPolicyCommandOutput,
  DeleteDeliveryDestinationPolicyCommand,
} from "./commands/DeleteDeliveryDestinationPolicyCommand";
import {
  type DeleteDeliverySourceCommandInput,
  type DeleteDeliverySourceCommandOutput,
  DeleteDeliverySourceCommand,
} from "./commands/DeleteDeliverySourceCommand";
import {
  type DeleteDestinationCommandInput,
  type DeleteDestinationCommandOutput,
  DeleteDestinationCommand,
} from "./commands/DeleteDestinationCommand";
import {
  type DeleteIndexPolicyCommandInput,
  type DeleteIndexPolicyCommandOutput,
  DeleteIndexPolicyCommand,
} from "./commands/DeleteIndexPolicyCommand";
import {
  type DeleteIntegrationCommandInput,
  type DeleteIntegrationCommandOutput,
  DeleteIntegrationCommand,
} from "./commands/DeleteIntegrationCommand";
import {
  type DeleteLogAnomalyDetectorCommandInput,
  type DeleteLogAnomalyDetectorCommandOutput,
  DeleteLogAnomalyDetectorCommand,
} from "./commands/DeleteLogAnomalyDetectorCommand";
import {
  type DeleteLogGroupCommandInput,
  type DeleteLogGroupCommandOutput,
  DeleteLogGroupCommand,
} from "./commands/DeleteLogGroupCommand";
import {
  type DeleteLogStreamCommandInput,
  type DeleteLogStreamCommandOutput,
  DeleteLogStreamCommand,
} from "./commands/DeleteLogStreamCommand";
import {
  type DeleteLookupTableCommandInput,
  type DeleteLookupTableCommandOutput,
  DeleteLookupTableCommand,
} from "./commands/DeleteLookupTableCommand";
import {
  type DeleteMetricFilterCommandInput,
  type DeleteMetricFilterCommandOutput,
  DeleteMetricFilterCommand,
} from "./commands/DeleteMetricFilterCommand";
import {
  type DeleteQueryDefinitionCommandInput,
  type DeleteQueryDefinitionCommandOutput,
  DeleteQueryDefinitionCommand,
} from "./commands/DeleteQueryDefinitionCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteRetentionPolicyCommandInput,
  type DeleteRetentionPolicyCommandOutput,
  DeleteRetentionPolicyCommand,
} from "./commands/DeleteRetentionPolicyCommand";
import {
  type DeleteScheduledQueryCommandInput,
  type DeleteScheduledQueryCommandOutput,
  DeleteScheduledQueryCommand,
} from "./commands/DeleteScheduledQueryCommand";
import {
  type DeleteSubscriptionFilterCommandInput,
  type DeleteSubscriptionFilterCommandOutput,
  DeleteSubscriptionFilterCommand,
} from "./commands/DeleteSubscriptionFilterCommand";
import {
  type DeleteSyslogConfigurationCommandInput,
  type DeleteSyslogConfigurationCommandOutput,
  DeleteSyslogConfigurationCommand,
} from "./commands/DeleteSyslogConfigurationCommand";
import {
  type DeleteTransformerCommandInput,
  type DeleteTransformerCommandOutput,
  DeleteTransformerCommand,
} from "./commands/DeleteTransformerCommand";
import {
  type DescribeAccountPoliciesCommandInput,
  type DescribeAccountPoliciesCommandOutput,
  DescribeAccountPoliciesCommand,
} from "./commands/DescribeAccountPoliciesCommand";
import {
  type DescribeConfigurationTemplatesCommandInput,
  type DescribeConfigurationTemplatesCommandOutput,
  DescribeConfigurationTemplatesCommand,
} from "./commands/DescribeConfigurationTemplatesCommand";
import {
  type DescribeDeliveriesCommandInput,
  type DescribeDeliveriesCommandOutput,
  DescribeDeliveriesCommand,
} from "./commands/DescribeDeliveriesCommand";
import {
  type DescribeDeliveryDestinationsCommandInput,
  type DescribeDeliveryDestinationsCommandOutput,
  DescribeDeliveryDestinationsCommand,
} from "./commands/DescribeDeliveryDestinationsCommand";
import {
  type DescribeDeliverySourcesCommandInput,
  type DescribeDeliverySourcesCommandOutput,
  DescribeDeliverySourcesCommand,
} from "./commands/DescribeDeliverySourcesCommand";
import {
  type DescribeDestinationsCommandInput,
  type DescribeDestinationsCommandOutput,
  DescribeDestinationsCommand,
} from "./commands/DescribeDestinationsCommand";
import {
  type DescribeExportTasksCommandInput,
  type DescribeExportTasksCommandOutput,
  DescribeExportTasksCommand,
} from "./commands/DescribeExportTasksCommand";
import {
  type DescribeFieldIndexesCommandInput,
  type DescribeFieldIndexesCommandOutput,
  DescribeFieldIndexesCommand,
} from "./commands/DescribeFieldIndexesCommand";
import {
  type DescribeImportTaskBatchesCommandInput,
  type DescribeImportTaskBatchesCommandOutput,
  DescribeImportTaskBatchesCommand,
} from "./commands/DescribeImportTaskBatchesCommand";
import {
  type DescribeImportTasksCommandInput,
  type DescribeImportTasksCommandOutput,
  DescribeImportTasksCommand,
} from "./commands/DescribeImportTasksCommand";
import {
  type DescribeIndexPoliciesCommandInput,
  type DescribeIndexPoliciesCommandOutput,
  DescribeIndexPoliciesCommand,
} from "./commands/DescribeIndexPoliciesCommand";
import {
  type DescribeLogGroupsCommandInput,
  type DescribeLogGroupsCommandOutput,
  DescribeLogGroupsCommand,
} from "./commands/DescribeLogGroupsCommand";
import {
  type DescribeLogStreamsCommandInput,
  type DescribeLogStreamsCommandOutput,
  DescribeLogStreamsCommand,
} from "./commands/DescribeLogStreamsCommand";
import {
  type DescribeLookupTablesCommandInput,
  type DescribeLookupTablesCommandOutput,
  DescribeLookupTablesCommand,
} from "./commands/DescribeLookupTablesCommand";
import {
  type DescribeMetricFiltersCommandInput,
  type DescribeMetricFiltersCommandOutput,
  DescribeMetricFiltersCommand,
} from "./commands/DescribeMetricFiltersCommand";
import {
  type DescribeQueriesCommandInput,
  type DescribeQueriesCommandOutput,
  DescribeQueriesCommand,
} from "./commands/DescribeQueriesCommand";
import {
  type DescribeQueryDefinitionsCommandInput,
  type DescribeQueryDefinitionsCommandOutput,
  DescribeQueryDefinitionsCommand,
} from "./commands/DescribeQueryDefinitionsCommand";
import {
  type DescribeResourcePoliciesCommandInput,
  type DescribeResourcePoliciesCommandOutput,
  DescribeResourcePoliciesCommand,
} from "./commands/DescribeResourcePoliciesCommand";
import {
  type DescribeSubscriptionFiltersCommandInput,
  type DescribeSubscriptionFiltersCommandOutput,
  DescribeSubscriptionFiltersCommand,
} from "./commands/DescribeSubscriptionFiltersCommand";
import {
  type DisassociateKmsKeyCommandInput,
  type DisassociateKmsKeyCommandOutput,
  DisassociateKmsKeyCommand,
} from "./commands/DisassociateKmsKeyCommand";
import {
  type DisassociateSourceFromS3TableIntegrationCommandInput,
  type DisassociateSourceFromS3TableIntegrationCommandOutput,
  DisassociateSourceFromS3TableIntegrationCommand,
} from "./commands/DisassociateSourceFromS3TableIntegrationCommand";
import {
  type FilterLogEventsCommandInput,
  type FilterLogEventsCommandOutput,
  FilterLogEventsCommand,
} from "./commands/FilterLogEventsCommand";
import {
  type GetDataProtectionPolicyCommandInput,
  type GetDataProtectionPolicyCommandOutput,
  GetDataProtectionPolicyCommand,
} from "./commands/GetDataProtectionPolicyCommand";
import {
  type GetDeliveryCommandInput,
  type GetDeliveryCommandOutput,
  GetDeliveryCommand,
} from "./commands/GetDeliveryCommand";
import {
  type GetDeliveryDestinationCommandInput,
  type GetDeliveryDestinationCommandOutput,
  GetDeliveryDestinationCommand,
} from "./commands/GetDeliveryDestinationCommand";
import {
  type GetDeliveryDestinationPolicyCommandInput,
  type GetDeliveryDestinationPolicyCommandOutput,
  GetDeliveryDestinationPolicyCommand,
} from "./commands/GetDeliveryDestinationPolicyCommand";
import {
  type GetDeliverySourceCommandInput,
  type GetDeliverySourceCommandOutput,
  GetDeliverySourceCommand,
} from "./commands/GetDeliverySourceCommand";
import {
  type GetIntegrationCommandInput,
  type GetIntegrationCommandOutput,
  GetIntegrationCommand,
} from "./commands/GetIntegrationCommand";
import {
  type GetLogAnomalyDetectorCommandInput,
  type GetLogAnomalyDetectorCommandOutput,
  GetLogAnomalyDetectorCommand,
} from "./commands/GetLogAnomalyDetectorCommand";
import {
  type GetLogEventsCommandInput,
  type GetLogEventsCommandOutput,
  GetLogEventsCommand,
} from "./commands/GetLogEventsCommand";
import {
  type GetLogFieldsCommandInput,
  type GetLogFieldsCommandOutput,
  GetLogFieldsCommand,
} from "./commands/GetLogFieldsCommand";
import {
  type GetLogGroupFieldsCommandInput,
  type GetLogGroupFieldsCommandOutput,
  GetLogGroupFieldsCommand,
} from "./commands/GetLogGroupFieldsCommand";
import {
  type GetLogObjectCommandInput,
  type GetLogObjectCommandOutput,
  GetLogObjectCommand,
} from "./commands/GetLogObjectCommand";
import {
  type GetLogRecordCommandInput,
  type GetLogRecordCommandOutput,
  GetLogRecordCommand,
} from "./commands/GetLogRecordCommand";
import {
  type GetLookupTableCommandInput,
  type GetLookupTableCommandOutput,
  GetLookupTableCommand,
} from "./commands/GetLookupTableCommand";
import {
  type GetQueryResultsCommandInput,
  type GetQueryResultsCommandOutput,
  GetQueryResultsCommand,
} from "./commands/GetQueryResultsCommand";
import {
  type GetScheduledQueryCommandInput,
  type GetScheduledQueryCommandOutput,
  GetScheduledQueryCommand,
} from "./commands/GetScheduledQueryCommand";
import {
  type GetScheduledQueryHistoryCommandInput,
  type GetScheduledQueryHistoryCommandOutput,
  GetScheduledQueryHistoryCommand,
} from "./commands/GetScheduledQueryHistoryCommand";
import {
  type GetStorageTierPolicyCommandInput,
  type GetStorageTierPolicyCommandOutput,
  GetStorageTierPolicyCommand,
} from "./commands/GetStorageTierPolicyCommand";
import {
  type GetTransformerCommandInput,
  type GetTransformerCommandOutput,
  GetTransformerCommand,
} from "./commands/GetTransformerCommand";
import {
  type ListAggregateLogGroupSummariesCommandInput,
  type ListAggregateLogGroupSummariesCommandOutput,
  ListAggregateLogGroupSummariesCommand,
} from "./commands/ListAggregateLogGroupSummariesCommand";
import {
  type ListAnomaliesCommandInput,
  type ListAnomaliesCommandOutput,
  ListAnomaliesCommand,
} from "./commands/ListAnomaliesCommand";
import {
  type ListIntegrationsCommandInput,
  type ListIntegrationsCommandOutput,
  ListIntegrationsCommand,
} from "./commands/ListIntegrationsCommand";
import {
  type ListLogAnomalyDetectorsCommandInput,
  type ListLogAnomalyDetectorsCommandOutput,
  ListLogAnomalyDetectorsCommand,
} from "./commands/ListLogAnomalyDetectorsCommand";
import {
  type ListLogGroupsCommandInput,
  type ListLogGroupsCommandOutput,
  ListLogGroupsCommand,
} from "./commands/ListLogGroupsCommand";
import {
  type ListLogGroupsForQueryCommandInput,
  type ListLogGroupsForQueryCommandOutput,
  ListLogGroupsForQueryCommand,
} from "./commands/ListLogGroupsForQueryCommand";
import {
  type ListScheduledQueriesCommandInput,
  type ListScheduledQueriesCommandOutput,
  ListScheduledQueriesCommand,
} from "./commands/ListScheduledQueriesCommand";
import {
  type ListSourcesForS3TableIntegrationCommandInput,
  type ListSourcesForS3TableIntegrationCommandOutput,
  ListSourcesForS3TableIntegrationCommand,
} from "./commands/ListSourcesForS3TableIntegrationCommand";
import {
  type ListSyslogConfigurationsCommandInput,
  type ListSyslogConfigurationsCommandOutput,
  ListSyslogConfigurationsCommand,
} from "./commands/ListSyslogConfigurationsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTagsLogGroupCommandInput,
  type ListTagsLogGroupCommandOutput,
  ListTagsLogGroupCommand,
} from "./commands/ListTagsLogGroupCommand";
import {
  type PutAccountPolicyCommandInput,
  type PutAccountPolicyCommandOutput,
  PutAccountPolicyCommand,
} from "./commands/PutAccountPolicyCommand";
import {
  type PutBearerTokenAuthenticationCommandInput,
  type PutBearerTokenAuthenticationCommandOutput,
  PutBearerTokenAuthenticationCommand,
} from "./commands/PutBearerTokenAuthenticationCommand";
import {
  type PutDataProtectionPolicyCommandInput,
  type PutDataProtectionPolicyCommandOutput,
  PutDataProtectionPolicyCommand,
} from "./commands/PutDataProtectionPolicyCommand";
import {
  type PutDeliveryDestinationCommandInput,
  type PutDeliveryDestinationCommandOutput,
  PutDeliveryDestinationCommand,
} from "./commands/PutDeliveryDestinationCommand";
import {
  type PutDeliveryDestinationPolicyCommandInput,
  type PutDeliveryDestinationPolicyCommandOutput,
  PutDeliveryDestinationPolicyCommand,
} from "./commands/PutDeliveryDestinationPolicyCommand";
import {
  type PutDeliverySourceCommandInput,
  type PutDeliverySourceCommandOutput,
  PutDeliverySourceCommand,
} from "./commands/PutDeliverySourceCommand";
import {
  type PutDestinationCommandInput,
  type PutDestinationCommandOutput,
  PutDestinationCommand,
} from "./commands/PutDestinationCommand";
import {
  type PutDestinationPolicyCommandInput,
  type PutDestinationPolicyCommandOutput,
  PutDestinationPolicyCommand,
} from "./commands/PutDestinationPolicyCommand";
import {
  type PutIndexPolicyCommandInput,
  type PutIndexPolicyCommandOutput,
  PutIndexPolicyCommand,
} from "./commands/PutIndexPolicyCommand";
import {
  type PutIntegrationCommandInput,
  type PutIntegrationCommandOutput,
  PutIntegrationCommand,
} from "./commands/PutIntegrationCommand";
import {
  type PutLogEventsCommandInput,
  type PutLogEventsCommandOutput,
  PutLogEventsCommand,
} from "./commands/PutLogEventsCommand";
import {
  type PutLogGroupDeletionProtectionCommandInput,
  type PutLogGroupDeletionProtectionCommandOutput,
  PutLogGroupDeletionProtectionCommand,
} from "./commands/PutLogGroupDeletionProtectionCommand";
import {
  type PutMetricFilterCommandInput,
  type PutMetricFilterCommandOutput,
  PutMetricFilterCommand,
} from "./commands/PutMetricFilterCommand";
import {
  type PutQueryDefinitionCommandInput,
  type PutQueryDefinitionCommandOutput,
  PutQueryDefinitionCommand,
} from "./commands/PutQueryDefinitionCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type PutRetentionPolicyCommandInput,
  type PutRetentionPolicyCommandOutput,
  PutRetentionPolicyCommand,
} from "./commands/PutRetentionPolicyCommand";
import {
  type PutStorageTierPolicyCommandInput,
  type PutStorageTierPolicyCommandOutput,
  PutStorageTierPolicyCommand,
} from "./commands/PutStorageTierPolicyCommand";
import {
  type PutSubscriptionFilterCommandInput,
  type PutSubscriptionFilterCommandOutput,
  PutSubscriptionFilterCommand,
} from "./commands/PutSubscriptionFilterCommand";
import {
  type PutSyslogConfigurationCommandInput,
  type PutSyslogConfigurationCommandOutput,
  PutSyslogConfigurationCommand,
} from "./commands/PutSyslogConfigurationCommand";
import {
  type PutTransformerCommandInput,
  type PutTransformerCommandOutput,
  PutTransformerCommand,
} from "./commands/PutTransformerCommand";
import {
  type StartLiveTailCommandInput,
  type StartLiveTailCommandOutput,
  StartLiveTailCommand,
} from "./commands/StartLiveTailCommand";
import {
  type StartQueryCommandInput,
  type StartQueryCommandOutput,
  StartQueryCommand,
} from "./commands/StartQueryCommand";
import { type StopQueryCommandInput, type StopQueryCommandOutput, StopQueryCommand } from "./commands/StopQueryCommand";
import {
  type TagLogGroupCommandInput,
  type TagLogGroupCommandOutput,
  TagLogGroupCommand,
} from "./commands/TagLogGroupCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TestMetricFilterCommandInput,
  type TestMetricFilterCommandOutput,
  TestMetricFilterCommand,
} from "./commands/TestMetricFilterCommand";
import {
  type TestTransformerCommandInput,
  type TestTransformerCommandOutput,
  TestTransformerCommand,
} from "./commands/TestTransformerCommand";
import {
  type UntagLogGroupCommandInput,
  type UntagLogGroupCommandOutput,
  UntagLogGroupCommand,
} from "./commands/UntagLogGroupCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAnomalyCommandInput,
  type UpdateAnomalyCommandOutput,
  UpdateAnomalyCommand,
} from "./commands/UpdateAnomalyCommand";
import {
  type UpdateDeliveryConfigurationCommandInput,
  type UpdateDeliveryConfigurationCommandOutput,
  UpdateDeliveryConfigurationCommand,
} from "./commands/UpdateDeliveryConfigurationCommand";
import {
  type UpdateLogAnomalyDetectorCommandInput,
  type UpdateLogAnomalyDetectorCommandOutput,
  UpdateLogAnomalyDetectorCommand,
} from "./commands/UpdateLogAnomalyDetectorCommand";
import {
  type UpdateLookupTableCommandInput,
  type UpdateLookupTableCommandOutput,
  UpdateLookupTableCommand,
} from "./commands/UpdateLookupTableCommand";
import {
  type UpdateScheduledQueryCommandInput,
  type UpdateScheduledQueryCommandOutput,
  UpdateScheduledQueryCommand,
} from "./commands/UpdateScheduledQueryCommand";
import { paginateDescribeConfigurationTemplates } from "./pagination/DescribeConfigurationTemplatesPaginator";
import { paginateDescribeDeliveries } from "./pagination/DescribeDeliveriesPaginator";
import { paginateDescribeDeliveryDestinations } from "./pagination/DescribeDeliveryDestinationsPaginator";
import { paginateDescribeDeliverySources } from "./pagination/DescribeDeliverySourcesPaginator";
import { paginateDescribeDestinations } from "./pagination/DescribeDestinationsPaginator";
import { paginateDescribeLogGroups } from "./pagination/DescribeLogGroupsPaginator";
import { paginateDescribeLogStreams } from "./pagination/DescribeLogStreamsPaginator";
import { paginateDescribeMetricFilters } from "./pagination/DescribeMetricFiltersPaginator";
import { paginateDescribeSubscriptionFilters } from "./pagination/DescribeSubscriptionFiltersPaginator";
import { paginateFilterLogEvents } from "./pagination/FilterLogEventsPaginator";
import { paginateGetLogEvents } from "./pagination/GetLogEventsPaginator";
import { paginateGetScheduledQueryHistory } from "./pagination/GetScheduledQueryHistoryPaginator";
import { paginateListAggregateLogGroupSummaries } from "./pagination/ListAggregateLogGroupSummariesPaginator";
import { paginateListAnomalies } from "./pagination/ListAnomaliesPaginator";
import { paginateListLogAnomalyDetectors } from "./pagination/ListLogAnomalyDetectorsPaginator";
import { paginateListLogGroupsForQuery } from "./pagination/ListLogGroupsForQueryPaginator";
import { paginateListScheduledQueries } from "./pagination/ListScheduledQueriesPaginator";
import { paginateListSourcesForS3TableIntegration } from "./pagination/ListSourcesForS3TableIntegrationPaginator";

const commands = {
  AssociateKmsKeyCommand,
  AssociateSourceToS3TableIntegrationCommand,
  CancelExportTaskCommand,
  CancelImportTaskCommand,
  CreateDeliveryCommand,
  CreateExportTaskCommand,
  CreateImportTaskCommand,
  CreateLogAnomalyDetectorCommand,
  CreateLogGroupCommand,
  CreateLogStreamCommand,
  CreateLookupTableCommand,
  CreateScheduledQueryCommand,
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
  DeleteLookupTableCommand,
  DeleteMetricFilterCommand,
  DeleteQueryDefinitionCommand,
  DeleteResourcePolicyCommand,
  DeleteRetentionPolicyCommand,
  DeleteScheduledQueryCommand,
  DeleteSubscriptionFilterCommand,
  DeleteSyslogConfigurationCommand,
  DeleteTransformerCommand,
  DescribeAccountPoliciesCommand,
  DescribeConfigurationTemplatesCommand,
  DescribeDeliveriesCommand,
  DescribeDeliveryDestinationsCommand,
  DescribeDeliverySourcesCommand,
  DescribeDestinationsCommand,
  DescribeExportTasksCommand,
  DescribeFieldIndexesCommand,
  DescribeImportTaskBatchesCommand,
  DescribeImportTasksCommand,
  DescribeIndexPoliciesCommand,
  DescribeLogGroupsCommand,
  DescribeLogStreamsCommand,
  DescribeLookupTablesCommand,
  DescribeMetricFiltersCommand,
  DescribeQueriesCommand,
  DescribeQueryDefinitionsCommand,
  DescribeResourcePoliciesCommand,
  DescribeSubscriptionFiltersCommand,
  DisassociateKmsKeyCommand,
  DisassociateSourceFromS3TableIntegrationCommand,
  FilterLogEventsCommand,
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
  GetLookupTableCommand,
  GetQueryResultsCommand,
  GetScheduledQueryCommand,
  GetScheduledQueryHistoryCommand,
  GetStorageTierPolicyCommand,
  GetTransformerCommand,
  ListAggregateLogGroupSummariesCommand,
  ListAnomaliesCommand,
  ListIntegrationsCommand,
  ListLogAnomalyDetectorsCommand,
  ListLogGroupsCommand,
  ListLogGroupsForQueryCommand,
  ListScheduledQueriesCommand,
  ListSourcesForS3TableIntegrationCommand,
  ListSyslogConfigurationsCommand,
  ListTagsForResourceCommand,
  ListTagsLogGroupCommand,
  PutAccountPolicyCommand,
  PutBearerTokenAuthenticationCommand,
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
  PutStorageTierPolicyCommand,
  PutSubscriptionFilterCommand,
  PutSyslogConfigurationCommand,
  PutTransformerCommand,
  StartLiveTailCommand,
  StartQueryCommand,
  StopQueryCommand,
  TagLogGroupCommand,
  TagResourceCommand,
  TestMetricFilterCommand,
  TestTransformerCommand,
  UntagLogGroupCommand,
  UntagResourceCommand,
  UpdateAnomalyCommand,
  UpdateDeliveryConfigurationCommand,
  UpdateLogAnomalyDetectorCommand,
  UpdateLookupTableCommand,
  UpdateScheduledQueryCommand,
};
const paginators = {
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
};

/**
 * @public
 */
export interface CloudWatchLogsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface CloudWatchLogs {
  /**
   * @see {@link AssociateKmsKeyCommand}
   */
  associateKmsKey(
    args: AssociateKmsKeyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<AssociateKmsKeyCommandOutput>;
  associateKmsKey(
    args: AssociateKmsKeyCommandInput,
    cb: (err: any, data?: AssociateKmsKeyCommandOutput) => void
  ): void;
  associateKmsKey(
    args: AssociateKmsKeyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: AssociateKmsKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSourceToS3TableIntegrationCommand}
   */
  associateSourceToS3TableIntegration(
    args: AssociateSourceToS3TableIntegrationCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<AssociateSourceToS3TableIntegrationCommandOutput>;
  associateSourceToS3TableIntegration(
    args: AssociateSourceToS3TableIntegrationCommandInput,
    cb: (err: any, data?: AssociateSourceToS3TableIntegrationCommandOutput) => void
  ): void;
  associateSourceToS3TableIntegration(
    args: AssociateSourceToS3TableIntegrationCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: AssociateSourceToS3TableIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelExportTaskCommand}
   */
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<CancelExportTaskCommandOutput>;
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelImportTaskCommand}
   */
  cancelImportTask(
    args: CancelImportTaskCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<CancelImportTaskCommandOutput>;
  cancelImportTask(
    args: CancelImportTaskCommandInput,
    cb: (err: any, data?: CancelImportTaskCommandOutput) => void
  ): void;
  cancelImportTask(
    args: CancelImportTaskCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: CancelImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeliveryCommand}
   */
  createDelivery(
    args: CreateDeliveryCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<CreateDeliveryCommandOutput>;
  createDelivery(
    args: CreateDeliveryCommandInput,
    cb: (err: any, data?: CreateDeliveryCommandOutput) => void
  ): void;
  createDelivery(
    args: CreateDeliveryCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: CreateDeliveryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExportTaskCommand}
   */
  createExportTask(
    args: CreateExportTaskCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<CreateExportTaskCommandOutput>;
  createExportTask(
    args: CreateExportTaskCommandInput,
    cb: (err: any, data?: CreateExportTaskCommandOutput) => void
  ): void;
  createExportTask(
    args: CreateExportTaskCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: CreateExportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateImportTaskCommand}
   */
  createImportTask(
    args: CreateImportTaskCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<CreateImportTaskCommandOutput>;
  createImportTask(
    args: CreateImportTaskCommandInput,
    cb: (err: any, data?: CreateImportTaskCommandOutput) => void
  ): void;
  createImportTask(
    args: CreateImportTaskCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: CreateImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLogAnomalyDetectorCommand}
   */
  createLogAnomalyDetector(
    args: CreateLogAnomalyDetectorCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<CreateLogAnomalyDetectorCommandOutput>;
  createLogAnomalyDetector(
    args: CreateLogAnomalyDetectorCommandInput,
    cb: (err: any, data?: CreateLogAnomalyDetectorCommandOutput) => void
  ): void;
  createLogAnomalyDetector(
    args: CreateLogAnomalyDetectorCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: CreateLogAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLogGroupCommand}
   */
  createLogGroup(
    args: CreateLogGroupCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<CreateLogGroupCommandOutput>;
  createLogGroup(
    args: CreateLogGroupCommandInput,
    cb: (err: any, data?: CreateLogGroupCommandOutput) => void
  ): void;
  createLogGroup(
    args: CreateLogGroupCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: CreateLogGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLogStreamCommand}
   */
  createLogStream(
    args: CreateLogStreamCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<CreateLogStreamCommandOutput>;
  createLogStream(
    args: CreateLogStreamCommandInput,
    cb: (err: any, data?: CreateLogStreamCommandOutput) => void
  ): void;
  createLogStream(
    args: CreateLogStreamCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: CreateLogStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLookupTableCommand}
   */
  createLookupTable(
    args: CreateLookupTableCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<CreateLookupTableCommandOutput>;
  createLookupTable(
    args: CreateLookupTableCommandInput,
    cb: (err: any, data?: CreateLookupTableCommandOutput) => void
  ): void;
  createLookupTable(
    args: CreateLookupTableCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: CreateLookupTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScheduledQueryCommand}
   */
  createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<CreateScheduledQueryCommandOutput>;
  createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    cb: (err: any, data?: CreateScheduledQueryCommandOutput) => void
  ): void;
  createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: CreateScheduledQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountPolicyCommand}
   */
  deleteAccountPolicy(
    args: DeleteAccountPolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteAccountPolicyCommandOutput>;
  deleteAccountPolicy(
    args: DeleteAccountPolicyCommandInput,
    cb: (err: any, data?: DeleteAccountPolicyCommandOutput) => void
  ): void;
  deleteAccountPolicy(
    args: DeleteAccountPolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteAccountPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataProtectionPolicyCommand}
   */
  deleteDataProtectionPolicy(
    args: DeleteDataProtectionPolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteDataProtectionPolicyCommandOutput>;
  deleteDataProtectionPolicy(
    args: DeleteDataProtectionPolicyCommandInput,
    cb: (err: any, data?: DeleteDataProtectionPolicyCommandOutput) => void
  ): void;
  deleteDataProtectionPolicy(
    args: DeleteDataProtectionPolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteDataProtectionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeliveryCommand}
   */
  deleteDelivery(
    args: DeleteDeliveryCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteDeliveryCommandOutput>;
  deleteDelivery(
    args: DeleteDeliveryCommandInput,
    cb: (err: any, data?: DeleteDeliveryCommandOutput) => void
  ): void;
  deleteDelivery(
    args: DeleteDeliveryCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteDeliveryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeliveryDestinationCommand}
   */
  deleteDeliveryDestination(
    args: DeleteDeliveryDestinationCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteDeliveryDestinationCommandOutput>;
  deleteDeliveryDestination(
    args: DeleteDeliveryDestinationCommandInput,
    cb: (err: any, data?: DeleteDeliveryDestinationCommandOutput) => void
  ): void;
  deleteDeliveryDestination(
    args: DeleteDeliveryDestinationCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteDeliveryDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeliveryDestinationPolicyCommand}
   */
  deleteDeliveryDestinationPolicy(
    args: DeleteDeliveryDestinationPolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteDeliveryDestinationPolicyCommandOutput>;
  deleteDeliveryDestinationPolicy(
    args: DeleteDeliveryDestinationPolicyCommandInput,
    cb: (err: any, data?: DeleteDeliveryDestinationPolicyCommandOutput) => void
  ): void;
  deleteDeliveryDestinationPolicy(
    args: DeleteDeliveryDestinationPolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteDeliveryDestinationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeliverySourceCommand}
   */
  deleteDeliverySource(
    args: DeleteDeliverySourceCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteDeliverySourceCommandOutput>;
  deleteDeliverySource(
    args: DeleteDeliverySourceCommandInput,
    cb: (err: any, data?: DeleteDeliverySourceCommandOutput) => void
  ): void;
  deleteDeliverySource(
    args: DeleteDeliverySourceCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteDeliverySourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDestinationCommand}
   */
  deleteDestination(
    args: DeleteDestinationCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteDestinationCommandOutput>;
  deleteDestination(
    args: DeleteDestinationCommandInput,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;
  deleteDestination(
    args: DeleteDestinationCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIndexPolicyCommand}
   */
  deleteIndexPolicy(
    args: DeleteIndexPolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteIndexPolicyCommandOutput>;
  deleteIndexPolicy(
    args: DeleteIndexPolicyCommandInput,
    cb: (err: any, data?: DeleteIndexPolicyCommandOutput) => void
  ): void;
  deleteIndexPolicy(
    args: DeleteIndexPolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteIndexPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLogAnomalyDetectorCommand}
   */
  deleteLogAnomalyDetector(
    args: DeleteLogAnomalyDetectorCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteLogAnomalyDetectorCommandOutput>;
  deleteLogAnomalyDetector(
    args: DeleteLogAnomalyDetectorCommandInput,
    cb: (err: any, data?: DeleteLogAnomalyDetectorCommandOutput) => void
  ): void;
  deleteLogAnomalyDetector(
    args: DeleteLogAnomalyDetectorCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteLogAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLogGroupCommand}
   */
  deleteLogGroup(
    args: DeleteLogGroupCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteLogGroupCommandOutput>;
  deleteLogGroup(
    args: DeleteLogGroupCommandInput,
    cb: (err: any, data?: DeleteLogGroupCommandOutput) => void
  ): void;
  deleteLogGroup(
    args: DeleteLogGroupCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteLogGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLogStreamCommand}
   */
  deleteLogStream(
    args: DeleteLogStreamCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteLogStreamCommandOutput>;
  deleteLogStream(
    args: DeleteLogStreamCommandInput,
    cb: (err: any, data?: DeleteLogStreamCommandOutput) => void
  ): void;
  deleteLogStream(
    args: DeleteLogStreamCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteLogStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLookupTableCommand}
   */
  deleteLookupTable(
    args: DeleteLookupTableCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteLookupTableCommandOutput>;
  deleteLookupTable(
    args: DeleteLookupTableCommandInput,
    cb: (err: any, data?: DeleteLookupTableCommandOutput) => void
  ): void;
  deleteLookupTable(
    args: DeleteLookupTableCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteLookupTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMetricFilterCommand}
   */
  deleteMetricFilter(
    args: DeleteMetricFilterCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteMetricFilterCommandOutput>;
  deleteMetricFilter(
    args: DeleteMetricFilterCommandInput,
    cb: (err: any, data?: DeleteMetricFilterCommandOutput) => void
  ): void;
  deleteMetricFilter(
    args: DeleteMetricFilterCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteMetricFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueryDefinitionCommand}
   */
  deleteQueryDefinition(
    args: DeleteQueryDefinitionCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteQueryDefinitionCommandOutput>;
  deleteQueryDefinition(
    args: DeleteQueryDefinitionCommandInput,
    cb: (err: any, data?: DeleteQueryDefinitionCommandOutput) => void
  ): void;
  deleteQueryDefinition(
    args: DeleteQueryDefinitionCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteQueryDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRetentionPolicyCommand}
   */
  deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteRetentionPolicyCommandOutput>;
  deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    cb: (err: any, data?: DeleteRetentionPolicyCommandOutput) => void
  ): void;
  deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteRetentionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduledQueryCommand}
   */
  deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteScheduledQueryCommandOutput>;
  deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    cb: (err: any, data?: DeleteScheduledQueryCommandOutput) => void
  ): void;
  deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteScheduledQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubscriptionFilterCommand}
   */
  deleteSubscriptionFilter(
    args: DeleteSubscriptionFilterCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteSubscriptionFilterCommandOutput>;
  deleteSubscriptionFilter(
    args: DeleteSubscriptionFilterCommandInput,
    cb: (err: any, data?: DeleteSubscriptionFilterCommandOutput) => void
  ): void;
  deleteSubscriptionFilter(
    args: DeleteSubscriptionFilterCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteSubscriptionFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSyslogConfigurationCommand}
   */
  deleteSyslogConfiguration(
    args: DeleteSyslogConfigurationCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteSyslogConfigurationCommandOutput>;
  deleteSyslogConfiguration(
    args: DeleteSyslogConfigurationCommandInput,
    cb: (err: any, data?: DeleteSyslogConfigurationCommandOutput) => void
  ): void;
  deleteSyslogConfiguration(
    args: DeleteSyslogConfigurationCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteSyslogConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTransformerCommand}
   */
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DeleteTransformerCommandOutput>;
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    cb: (err: any, data?: DeleteTransformerCommandOutput) => void
  ): void;
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DeleteTransformerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountPoliciesCommand}
   */
  describeAccountPolicies(
    args: DescribeAccountPoliciesCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeAccountPoliciesCommandOutput>;
  describeAccountPolicies(
    args: DescribeAccountPoliciesCommandInput,
    cb: (err: any, data?: DescribeAccountPoliciesCommandOutput) => void
  ): void;
  describeAccountPolicies(
    args: DescribeAccountPoliciesCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeAccountPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationTemplatesCommand}
   */
  describeConfigurationTemplates(): Promise<DescribeConfigurationTemplatesCommandOutput>;
  describeConfigurationTemplates(
    args: DescribeConfigurationTemplatesCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeConfigurationTemplatesCommandOutput>;
  describeConfigurationTemplates(
    args: DescribeConfigurationTemplatesCommandInput,
    cb: (err: any, data?: DescribeConfigurationTemplatesCommandOutput) => void
  ): void;
  describeConfigurationTemplates(
    args: DescribeConfigurationTemplatesCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeConfigurationTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeliveriesCommand}
   */
  describeDeliveries(): Promise<DescribeDeliveriesCommandOutput>;
  describeDeliveries(
    args: DescribeDeliveriesCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeDeliveriesCommandOutput>;
  describeDeliveries(
    args: DescribeDeliveriesCommandInput,
    cb: (err: any, data?: DescribeDeliveriesCommandOutput) => void
  ): void;
  describeDeliveries(
    args: DescribeDeliveriesCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeDeliveriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeliveryDestinationsCommand}
   */
  describeDeliveryDestinations(): Promise<DescribeDeliveryDestinationsCommandOutput>;
  describeDeliveryDestinations(
    args: DescribeDeliveryDestinationsCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeDeliveryDestinationsCommandOutput>;
  describeDeliveryDestinations(
    args: DescribeDeliveryDestinationsCommandInput,
    cb: (err: any, data?: DescribeDeliveryDestinationsCommandOutput) => void
  ): void;
  describeDeliveryDestinations(
    args: DescribeDeliveryDestinationsCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeDeliveryDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeliverySourcesCommand}
   */
  describeDeliverySources(): Promise<DescribeDeliverySourcesCommandOutput>;
  describeDeliverySources(
    args: DescribeDeliverySourcesCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeDeliverySourcesCommandOutput>;
  describeDeliverySources(
    args: DescribeDeliverySourcesCommandInput,
    cb: (err: any, data?: DescribeDeliverySourcesCommandOutput) => void
  ): void;
  describeDeliverySources(
    args: DescribeDeliverySourcesCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeDeliverySourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDestinationsCommand}
   */
  describeDestinations(): Promise<DescribeDestinationsCommandOutput>;
  describeDestinations(
    args: DescribeDestinationsCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeDestinationsCommandOutput>;
  describeDestinations(
    args: DescribeDestinationsCommandInput,
    cb: (err: any, data?: DescribeDestinationsCommandOutput) => void
  ): void;
  describeDestinations(
    args: DescribeDestinationsCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExportTasksCommand}
   */
  describeExportTasks(): Promise<DescribeExportTasksCommandOutput>;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeExportTasksCommandOutput>;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFieldIndexesCommand}
   */
  describeFieldIndexes(
    args: DescribeFieldIndexesCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeFieldIndexesCommandOutput>;
  describeFieldIndexes(
    args: DescribeFieldIndexesCommandInput,
    cb: (err: any, data?: DescribeFieldIndexesCommandOutput) => void
  ): void;
  describeFieldIndexes(
    args: DescribeFieldIndexesCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeFieldIndexesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImportTaskBatchesCommand}
   */
  describeImportTaskBatches(
    args: DescribeImportTaskBatchesCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeImportTaskBatchesCommandOutput>;
  describeImportTaskBatches(
    args: DescribeImportTaskBatchesCommandInput,
    cb: (err: any, data?: DescribeImportTaskBatchesCommandOutput) => void
  ): void;
  describeImportTaskBatches(
    args: DescribeImportTaskBatchesCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeImportTaskBatchesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImportTasksCommand}
   */
  describeImportTasks(): Promise<DescribeImportTasksCommandOutput>;
  describeImportTasks(
    args: DescribeImportTasksCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeImportTasksCommandOutput>;
  describeImportTasks(
    args: DescribeImportTasksCommandInput,
    cb: (err: any, data?: DescribeImportTasksCommandOutput) => void
  ): void;
  describeImportTasks(
    args: DescribeImportTasksCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeImportTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIndexPoliciesCommand}
   */
  describeIndexPolicies(
    args: DescribeIndexPoliciesCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeIndexPoliciesCommandOutput>;
  describeIndexPolicies(
    args: DescribeIndexPoliciesCommandInput,
    cb: (err: any, data?: DescribeIndexPoliciesCommandOutput) => void
  ): void;
  describeIndexPolicies(
    args: DescribeIndexPoliciesCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeIndexPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLogGroupsCommand}
   */
  describeLogGroups(): Promise<DescribeLogGroupsCommandOutput>;
  describeLogGroups(
    args: DescribeLogGroupsCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeLogGroupsCommandOutput>;
  describeLogGroups(
    args: DescribeLogGroupsCommandInput,
    cb: (err: any, data?: DescribeLogGroupsCommandOutput) => void
  ): void;
  describeLogGroups(
    args: DescribeLogGroupsCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeLogGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLogStreamsCommand}
   */
  describeLogStreams(): Promise<DescribeLogStreamsCommandOutput>;
  describeLogStreams(
    args: DescribeLogStreamsCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeLogStreamsCommandOutput>;
  describeLogStreams(
    args: DescribeLogStreamsCommandInput,
    cb: (err: any, data?: DescribeLogStreamsCommandOutput) => void
  ): void;
  describeLogStreams(
    args: DescribeLogStreamsCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeLogStreamsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLookupTablesCommand}
   */
  describeLookupTables(): Promise<DescribeLookupTablesCommandOutput>;
  describeLookupTables(
    args: DescribeLookupTablesCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeLookupTablesCommandOutput>;
  describeLookupTables(
    args: DescribeLookupTablesCommandInput,
    cb: (err: any, data?: DescribeLookupTablesCommandOutput) => void
  ): void;
  describeLookupTables(
    args: DescribeLookupTablesCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeLookupTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMetricFiltersCommand}
   */
  describeMetricFilters(): Promise<DescribeMetricFiltersCommandOutput>;
  describeMetricFilters(
    args: DescribeMetricFiltersCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeMetricFiltersCommandOutput>;
  describeMetricFilters(
    args: DescribeMetricFiltersCommandInput,
    cb: (err: any, data?: DescribeMetricFiltersCommandOutput) => void
  ): void;
  describeMetricFilters(
    args: DescribeMetricFiltersCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeMetricFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQueriesCommand}
   */
  describeQueries(): Promise<DescribeQueriesCommandOutput>;
  describeQueries(
    args: DescribeQueriesCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeQueriesCommandOutput>;
  describeQueries(
    args: DescribeQueriesCommandInput,
    cb: (err: any, data?: DescribeQueriesCommandOutput) => void
  ): void;
  describeQueries(
    args: DescribeQueriesCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeQueriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQueryDefinitionsCommand}
   */
  describeQueryDefinitions(): Promise<DescribeQueryDefinitionsCommandOutput>;
  describeQueryDefinitions(
    args: DescribeQueryDefinitionsCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeQueryDefinitionsCommandOutput>;
  describeQueryDefinitions(
    args: DescribeQueryDefinitionsCommandInput,
    cb: (err: any, data?: DescribeQueryDefinitionsCommandOutput) => void
  ): void;
  describeQueryDefinitions(
    args: DescribeQueryDefinitionsCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeQueryDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourcePoliciesCommand}
   */
  describeResourcePolicies(): Promise<DescribeResourcePoliciesCommandOutput>;
  describeResourcePolicies(
    args: DescribeResourcePoliciesCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeResourcePoliciesCommandOutput>;
  describeResourcePolicies(
    args: DescribeResourcePoliciesCommandInput,
    cb: (err: any, data?: DescribeResourcePoliciesCommandOutput) => void
  ): void;
  describeResourcePolicies(
    args: DescribeResourcePoliciesCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeResourcePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSubscriptionFiltersCommand}
   */
  describeSubscriptionFilters(
    args: DescribeSubscriptionFiltersCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DescribeSubscriptionFiltersCommandOutput>;
  describeSubscriptionFilters(
    args: DescribeSubscriptionFiltersCommandInput,
    cb: (err: any, data?: DescribeSubscriptionFiltersCommandOutput) => void
  ): void;
  describeSubscriptionFilters(
    args: DescribeSubscriptionFiltersCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DescribeSubscriptionFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateKmsKeyCommand}
   */
  disassociateKmsKey(): Promise<DisassociateKmsKeyCommandOutput>;
  disassociateKmsKey(
    args: DisassociateKmsKeyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DisassociateKmsKeyCommandOutput>;
  disassociateKmsKey(
    args: DisassociateKmsKeyCommandInput,
    cb: (err: any, data?: DisassociateKmsKeyCommandOutput) => void
  ): void;
  disassociateKmsKey(
    args: DisassociateKmsKeyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DisassociateKmsKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSourceFromS3TableIntegrationCommand}
   */
  disassociateSourceFromS3TableIntegration(
    args: DisassociateSourceFromS3TableIntegrationCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<DisassociateSourceFromS3TableIntegrationCommandOutput>;
  disassociateSourceFromS3TableIntegration(
    args: DisassociateSourceFromS3TableIntegrationCommandInput,
    cb: (err: any, data?: DisassociateSourceFromS3TableIntegrationCommandOutput) => void
  ): void;
  disassociateSourceFromS3TableIntegration(
    args: DisassociateSourceFromS3TableIntegrationCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: DisassociateSourceFromS3TableIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link FilterLogEventsCommand}
   */
  filterLogEvents(): Promise<FilterLogEventsCommandOutput>;
  filterLogEvents(
    args: FilterLogEventsCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<FilterLogEventsCommandOutput>;
  filterLogEvents(
    args: FilterLogEventsCommandInput,
    cb: (err: any, data?: FilterLogEventsCommandOutput) => void
  ): void;
  filterLogEvents(
    args: FilterLogEventsCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: FilterLogEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataProtectionPolicyCommand}
   */
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetDataProtectionPolicyCommandOutput>;
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    cb: (err: any, data?: GetDataProtectionPolicyCommandOutput) => void
  ): void;
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetDataProtectionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeliveryCommand}
   */
  getDelivery(
    args: GetDeliveryCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetDeliveryCommandOutput>;
  getDelivery(
    args: GetDeliveryCommandInput,
    cb: (err: any, data?: GetDeliveryCommandOutput) => void
  ): void;
  getDelivery(
    args: GetDeliveryCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetDeliveryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeliveryDestinationCommand}
   */
  getDeliveryDestination(
    args: GetDeliveryDestinationCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetDeliveryDestinationCommandOutput>;
  getDeliveryDestination(
    args: GetDeliveryDestinationCommandInput,
    cb: (err: any, data?: GetDeliveryDestinationCommandOutput) => void
  ): void;
  getDeliveryDestination(
    args: GetDeliveryDestinationCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetDeliveryDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeliveryDestinationPolicyCommand}
   */
  getDeliveryDestinationPolicy(
    args: GetDeliveryDestinationPolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetDeliveryDestinationPolicyCommandOutput>;
  getDeliveryDestinationPolicy(
    args: GetDeliveryDestinationPolicyCommandInput,
    cb: (err: any, data?: GetDeliveryDestinationPolicyCommandOutput) => void
  ): void;
  getDeliveryDestinationPolicy(
    args: GetDeliveryDestinationPolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetDeliveryDestinationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeliverySourceCommand}
   */
  getDeliverySource(
    args: GetDeliverySourceCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetDeliverySourceCommandOutput>;
  getDeliverySource(
    args: GetDeliverySourceCommandInput,
    cb: (err: any, data?: GetDeliverySourceCommandOutput) => void
  ): void;
  getDeliverySource(
    args: GetDeliverySourceCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetDeliverySourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntegrationCommand}
   */
  getIntegration(
    args: GetIntegrationCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetIntegrationCommandOutput>;
  getIntegration(
    args: GetIntegrationCommandInput,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
  getIntegration(
    args: GetIntegrationCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLogAnomalyDetectorCommand}
   */
  getLogAnomalyDetector(
    args: GetLogAnomalyDetectorCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetLogAnomalyDetectorCommandOutput>;
  getLogAnomalyDetector(
    args: GetLogAnomalyDetectorCommandInput,
    cb: (err: any, data?: GetLogAnomalyDetectorCommandOutput) => void
  ): void;
  getLogAnomalyDetector(
    args: GetLogAnomalyDetectorCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetLogAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLogEventsCommand}
   */
  getLogEvents(
    args: GetLogEventsCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetLogEventsCommandOutput>;
  getLogEvents(
    args: GetLogEventsCommandInput,
    cb: (err: any, data?: GetLogEventsCommandOutput) => void
  ): void;
  getLogEvents(
    args: GetLogEventsCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetLogEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLogFieldsCommand}
   */
  getLogFields(
    args: GetLogFieldsCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetLogFieldsCommandOutput>;
  getLogFields(
    args: GetLogFieldsCommandInput,
    cb: (err: any, data?: GetLogFieldsCommandOutput) => void
  ): void;
  getLogFields(
    args: GetLogFieldsCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetLogFieldsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLogGroupFieldsCommand}
   */
  getLogGroupFields(): Promise<GetLogGroupFieldsCommandOutput>;
  getLogGroupFields(
    args: GetLogGroupFieldsCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetLogGroupFieldsCommandOutput>;
  getLogGroupFields(
    args: GetLogGroupFieldsCommandInput,
    cb: (err: any, data?: GetLogGroupFieldsCommandOutput) => void
  ): void;
  getLogGroupFields(
    args: GetLogGroupFieldsCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetLogGroupFieldsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLogObjectCommand}
   */
  getLogObject(
    args: GetLogObjectCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetLogObjectCommandOutput>;
  getLogObject(
    args: GetLogObjectCommandInput,
    cb: (err: any, data?: GetLogObjectCommandOutput) => void
  ): void;
  getLogObject(
    args: GetLogObjectCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetLogObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLogRecordCommand}
   */
  getLogRecord(
    args: GetLogRecordCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetLogRecordCommandOutput>;
  getLogRecord(
    args: GetLogRecordCommandInput,
    cb: (err: any, data?: GetLogRecordCommandOutput) => void
  ): void;
  getLogRecord(
    args: GetLogRecordCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetLogRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLookupTableCommand}
   */
  getLookupTable(
    args: GetLookupTableCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetLookupTableCommandOutput>;
  getLookupTable(
    args: GetLookupTableCommandInput,
    cb: (err: any, data?: GetLookupTableCommandOutput) => void
  ): void;
  getLookupTable(
    args: GetLookupTableCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetLookupTableCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryResultsCommand}
   */
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetQueryResultsCommandOutput>;
  getQueryResults(
    args: GetQueryResultsCommandInput,
    cb: (err: any, data?: GetQueryResultsCommandOutput) => void
  ): void;
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetQueryResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScheduledQueryCommand}
   */
  getScheduledQuery(
    args: GetScheduledQueryCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetScheduledQueryCommandOutput>;
  getScheduledQuery(
    args: GetScheduledQueryCommandInput,
    cb: (err: any, data?: GetScheduledQueryCommandOutput) => void
  ): void;
  getScheduledQuery(
    args: GetScheduledQueryCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetScheduledQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScheduledQueryHistoryCommand}
   */
  getScheduledQueryHistory(
    args: GetScheduledQueryHistoryCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetScheduledQueryHistoryCommandOutput>;
  getScheduledQueryHistory(
    args: GetScheduledQueryHistoryCommandInput,
    cb: (err: any, data?: GetScheduledQueryHistoryCommandOutput) => void
  ): void;
  getScheduledQueryHistory(
    args: GetScheduledQueryHistoryCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetScheduledQueryHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStorageTierPolicyCommand}
   */
  getStorageTierPolicy(): Promise<GetStorageTierPolicyCommandOutput>;
  getStorageTierPolicy(
    args: GetStorageTierPolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetStorageTierPolicyCommandOutput>;
  getStorageTierPolicy(
    args: GetStorageTierPolicyCommandInput,
    cb: (err: any, data?: GetStorageTierPolicyCommandOutput) => void
  ): void;
  getStorageTierPolicy(
    args: GetStorageTierPolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetStorageTierPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransformerCommand}
   */
  getTransformer(
    args: GetTransformerCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<GetTransformerCommandOutput>;
  getTransformer(
    args: GetTransformerCommandInput,
    cb: (err: any, data?: GetTransformerCommandOutput) => void
  ): void;
  getTransformer(
    args: GetTransformerCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: GetTransformerCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAggregateLogGroupSummariesCommand}
   */
  listAggregateLogGroupSummaries(
    args: ListAggregateLogGroupSummariesCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<ListAggregateLogGroupSummariesCommandOutput>;
  listAggregateLogGroupSummaries(
    args: ListAggregateLogGroupSummariesCommandInput,
    cb: (err: any, data?: ListAggregateLogGroupSummariesCommandOutput) => void
  ): void;
  listAggregateLogGroupSummaries(
    args: ListAggregateLogGroupSummariesCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: ListAggregateLogGroupSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnomaliesCommand}
   */
  listAnomalies(): Promise<ListAnomaliesCommandOutput>;
  listAnomalies(
    args: ListAnomaliesCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<ListAnomaliesCommandOutput>;
  listAnomalies(
    args: ListAnomaliesCommandInput,
    cb: (err: any, data?: ListAnomaliesCommandOutput) => void
  ): void;
  listAnomalies(
    args: ListAnomaliesCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: ListAnomaliesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntegrationsCommand}
   */
  listIntegrations(): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLogAnomalyDetectorsCommand}
   */
  listLogAnomalyDetectors(): Promise<ListLogAnomalyDetectorsCommandOutput>;
  listLogAnomalyDetectors(
    args: ListLogAnomalyDetectorsCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<ListLogAnomalyDetectorsCommandOutput>;
  listLogAnomalyDetectors(
    args: ListLogAnomalyDetectorsCommandInput,
    cb: (err: any, data?: ListLogAnomalyDetectorsCommandOutput) => void
  ): void;
  listLogAnomalyDetectors(
    args: ListLogAnomalyDetectorsCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: ListLogAnomalyDetectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLogGroupsCommand}
   */
  listLogGroups(): Promise<ListLogGroupsCommandOutput>;
  listLogGroups(
    args: ListLogGroupsCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<ListLogGroupsCommandOutput>;
  listLogGroups(
    args: ListLogGroupsCommandInput,
    cb: (err: any, data?: ListLogGroupsCommandOutput) => void
  ): void;
  listLogGroups(
    args: ListLogGroupsCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: ListLogGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLogGroupsForQueryCommand}
   */
  listLogGroupsForQuery(
    args: ListLogGroupsForQueryCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<ListLogGroupsForQueryCommandOutput>;
  listLogGroupsForQuery(
    args: ListLogGroupsForQueryCommandInput,
    cb: (err: any, data?: ListLogGroupsForQueryCommandOutput) => void
  ): void;
  listLogGroupsForQuery(
    args: ListLogGroupsForQueryCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: ListLogGroupsForQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScheduledQueriesCommand}
   */
  listScheduledQueries(): Promise<ListScheduledQueriesCommandOutput>;
  listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<ListScheduledQueriesCommandOutput>;
  listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    cb: (err: any, data?: ListScheduledQueriesCommandOutput) => void
  ): void;
  listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: ListScheduledQueriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSourcesForS3TableIntegrationCommand}
   */
  listSourcesForS3TableIntegration(
    args: ListSourcesForS3TableIntegrationCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<ListSourcesForS3TableIntegrationCommandOutput>;
  listSourcesForS3TableIntegration(
    args: ListSourcesForS3TableIntegrationCommandInput,
    cb: (err: any, data?: ListSourcesForS3TableIntegrationCommandOutput) => void
  ): void;
  listSourcesForS3TableIntegration(
    args: ListSourcesForS3TableIntegrationCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: ListSourcesForS3TableIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSyslogConfigurationsCommand}
   */
  listSyslogConfigurations(): Promise<ListSyslogConfigurationsCommandOutput>;
  listSyslogConfigurations(
    args: ListSyslogConfigurationsCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<ListSyslogConfigurationsCommandOutput>;
  listSyslogConfigurations(
    args: ListSyslogConfigurationsCommandInput,
    cb: (err: any, data?: ListSyslogConfigurationsCommandOutput) => void
  ): void;
  listSyslogConfigurations(
    args: ListSyslogConfigurationsCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: ListSyslogConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsLogGroupCommand}
   */
  listTagsLogGroup(
    args: ListTagsLogGroupCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<ListTagsLogGroupCommandOutput>;
  listTagsLogGroup(
    args: ListTagsLogGroupCommandInput,
    cb: (err: any, data?: ListTagsLogGroupCommandOutput) => void
  ): void;
  listTagsLogGroup(
    args: ListTagsLogGroupCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: ListTagsLogGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccountPolicyCommand}
   */
  putAccountPolicy(
    args: PutAccountPolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutAccountPolicyCommandOutput>;
  putAccountPolicy(
    args: PutAccountPolicyCommandInput,
    cb: (err: any, data?: PutAccountPolicyCommandOutput) => void
  ): void;
  putAccountPolicy(
    args: PutAccountPolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutAccountPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBearerTokenAuthenticationCommand}
   */
  putBearerTokenAuthentication(
    args: PutBearerTokenAuthenticationCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutBearerTokenAuthenticationCommandOutput>;
  putBearerTokenAuthentication(
    args: PutBearerTokenAuthenticationCommandInput,
    cb: (err: any, data?: PutBearerTokenAuthenticationCommandOutput) => void
  ): void;
  putBearerTokenAuthentication(
    args: PutBearerTokenAuthenticationCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutBearerTokenAuthenticationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDataProtectionPolicyCommand}
   */
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutDataProtectionPolicyCommandOutput>;
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    cb: (err: any, data?: PutDataProtectionPolicyCommandOutput) => void
  ): void;
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutDataProtectionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDeliveryDestinationCommand}
   */
  putDeliveryDestination(
    args: PutDeliveryDestinationCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutDeliveryDestinationCommandOutput>;
  putDeliveryDestination(
    args: PutDeliveryDestinationCommandInput,
    cb: (err: any, data?: PutDeliveryDestinationCommandOutput) => void
  ): void;
  putDeliveryDestination(
    args: PutDeliveryDestinationCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutDeliveryDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDeliveryDestinationPolicyCommand}
   */
  putDeliveryDestinationPolicy(
    args: PutDeliveryDestinationPolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutDeliveryDestinationPolicyCommandOutput>;
  putDeliveryDestinationPolicy(
    args: PutDeliveryDestinationPolicyCommandInput,
    cb: (err: any, data?: PutDeliveryDestinationPolicyCommandOutput) => void
  ): void;
  putDeliveryDestinationPolicy(
    args: PutDeliveryDestinationPolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutDeliveryDestinationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDeliverySourceCommand}
   */
  putDeliverySource(
    args: PutDeliverySourceCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutDeliverySourceCommandOutput>;
  putDeliverySource(
    args: PutDeliverySourceCommandInput,
    cb: (err: any, data?: PutDeliverySourceCommandOutput) => void
  ): void;
  putDeliverySource(
    args: PutDeliverySourceCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutDeliverySourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDestinationCommand}
   */
  putDestination(
    args: PutDestinationCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutDestinationCommandOutput>;
  putDestination(
    args: PutDestinationCommandInput,
    cb: (err: any, data?: PutDestinationCommandOutput) => void
  ): void;
  putDestination(
    args: PutDestinationCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDestinationPolicyCommand}
   */
  putDestinationPolicy(
    args: PutDestinationPolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutDestinationPolicyCommandOutput>;
  putDestinationPolicy(
    args: PutDestinationPolicyCommandInput,
    cb: (err: any, data?: PutDestinationPolicyCommandOutput) => void
  ): void;
  putDestinationPolicy(
    args: PutDestinationPolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutDestinationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutIndexPolicyCommand}
   */
  putIndexPolicy(
    args: PutIndexPolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutIndexPolicyCommandOutput>;
  putIndexPolicy(
    args: PutIndexPolicyCommandInput,
    cb: (err: any, data?: PutIndexPolicyCommandOutput) => void
  ): void;
  putIndexPolicy(
    args: PutIndexPolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutIndexPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutIntegrationCommand}
   */
  putIntegration(
    args: PutIntegrationCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutIntegrationCommandOutput>;
  putIntegration(
    args: PutIntegrationCommandInput,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;
  putIntegration(
    args: PutIntegrationCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLogEventsCommand}
   */
  putLogEvents(
    args: PutLogEventsCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutLogEventsCommandOutput>;
  putLogEvents(
    args: PutLogEventsCommandInput,
    cb: (err: any, data?: PutLogEventsCommandOutput) => void
  ): void;
  putLogEvents(
    args: PutLogEventsCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutLogEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLogGroupDeletionProtectionCommand}
   */
  putLogGroupDeletionProtection(
    args: PutLogGroupDeletionProtectionCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutLogGroupDeletionProtectionCommandOutput>;
  putLogGroupDeletionProtection(
    args: PutLogGroupDeletionProtectionCommandInput,
    cb: (err: any, data?: PutLogGroupDeletionProtectionCommandOutput) => void
  ): void;
  putLogGroupDeletionProtection(
    args: PutLogGroupDeletionProtectionCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutLogGroupDeletionProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMetricFilterCommand}
   */
  putMetricFilter(
    args: PutMetricFilterCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutMetricFilterCommandOutput>;
  putMetricFilter(
    args: PutMetricFilterCommandInput,
    cb: (err: any, data?: PutMetricFilterCommandOutput) => void
  ): void;
  putMetricFilter(
    args: PutMetricFilterCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutMetricFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link PutQueryDefinitionCommand}
   */
  putQueryDefinition(
    args: PutQueryDefinitionCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutQueryDefinitionCommandOutput>;
  putQueryDefinition(
    args: PutQueryDefinitionCommandInput,
    cb: (err: any, data?: PutQueryDefinitionCommandOutput) => void
  ): void;
  putQueryDefinition(
    args: PutQueryDefinitionCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutQueryDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRetentionPolicyCommand}
   */
  putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutRetentionPolicyCommandOutput>;
  putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    cb: (err: any, data?: PutRetentionPolicyCommandOutput) => void
  ): void;
  putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutRetentionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutStorageTierPolicyCommand}
   */
  putStorageTierPolicy(
    args: PutStorageTierPolicyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutStorageTierPolicyCommandOutput>;
  putStorageTierPolicy(
    args: PutStorageTierPolicyCommandInput,
    cb: (err: any, data?: PutStorageTierPolicyCommandOutput) => void
  ): void;
  putStorageTierPolicy(
    args: PutStorageTierPolicyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutStorageTierPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSubscriptionFilterCommand}
   */
  putSubscriptionFilter(
    args: PutSubscriptionFilterCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutSubscriptionFilterCommandOutput>;
  putSubscriptionFilter(
    args: PutSubscriptionFilterCommandInput,
    cb: (err: any, data?: PutSubscriptionFilterCommandOutput) => void
  ): void;
  putSubscriptionFilter(
    args: PutSubscriptionFilterCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutSubscriptionFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSyslogConfigurationCommand}
   */
  putSyslogConfiguration(
    args: PutSyslogConfigurationCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutSyslogConfigurationCommandOutput>;
  putSyslogConfiguration(
    args: PutSyslogConfigurationCommandInput,
    cb: (err: any, data?: PutSyslogConfigurationCommandOutput) => void
  ): void;
  putSyslogConfiguration(
    args: PutSyslogConfigurationCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutSyslogConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTransformerCommand}
   */
  putTransformer(
    args: PutTransformerCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<PutTransformerCommandOutput>;
  putTransformer(
    args: PutTransformerCommandInput,
    cb: (err: any, data?: PutTransformerCommandOutput) => void
  ): void;
  putTransformer(
    args: PutTransformerCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: PutTransformerCommandOutput) => void
  ): void;

  /**
   * @see {@link StartLiveTailCommand}
   */
  startLiveTail(
    args: StartLiveTailCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<StartLiveTailCommandOutput>;
  startLiveTail(
    args: StartLiveTailCommandInput,
    cb: (err: any, data?: StartLiveTailCommandOutput) => void
  ): void;
  startLiveTail(
    args: StartLiveTailCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: StartLiveTailCommandOutput) => void
  ): void;

  /**
   * @see {@link StartQueryCommand}
   */
  startQuery(
    args: StartQueryCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<StartQueryCommandOutput>;
  startQuery(
    args: StartQueryCommandInput,
    cb: (err: any, data?: StartQueryCommandOutput) => void
  ): void;
  startQuery(
    args: StartQueryCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: StartQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link StopQueryCommand}
   */
  stopQuery(
    args: StopQueryCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<StopQueryCommandOutput>;
  stopQuery(
    args: StopQueryCommandInput,
    cb: (err: any, data?: StopQueryCommandOutput) => void
  ): void;
  stopQuery(
    args: StopQueryCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: StopQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link TagLogGroupCommand}
   */
  tagLogGroup(
    args: TagLogGroupCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<TagLogGroupCommandOutput>;
  tagLogGroup(
    args: TagLogGroupCommandInput,
    cb: (err: any, data?: TagLogGroupCommandOutput) => void
  ): void;
  tagLogGroup(
    args: TagLogGroupCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: TagLogGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestMetricFilterCommand}
   */
  testMetricFilter(
    args: TestMetricFilterCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<TestMetricFilterCommandOutput>;
  testMetricFilter(
    args: TestMetricFilterCommandInput,
    cb: (err: any, data?: TestMetricFilterCommandOutput) => void
  ): void;
  testMetricFilter(
    args: TestMetricFilterCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: TestMetricFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link TestTransformerCommand}
   */
  testTransformer(
    args: TestTransformerCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<TestTransformerCommandOutput>;
  testTransformer(
    args: TestTransformerCommandInput,
    cb: (err: any, data?: TestTransformerCommandOutput) => void
  ): void;
  testTransformer(
    args: TestTransformerCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: TestTransformerCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagLogGroupCommand}
   */
  untagLogGroup(
    args: UntagLogGroupCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<UntagLogGroupCommandOutput>;
  untagLogGroup(
    args: UntagLogGroupCommandInput,
    cb: (err: any, data?: UntagLogGroupCommandOutput) => void
  ): void;
  untagLogGroup(
    args: UntagLogGroupCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: UntagLogGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnomalyCommand}
   */
  updateAnomaly(
    args: UpdateAnomalyCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<UpdateAnomalyCommandOutput>;
  updateAnomaly(
    args: UpdateAnomalyCommandInput,
    cb: (err: any, data?: UpdateAnomalyCommandOutput) => void
  ): void;
  updateAnomaly(
    args: UpdateAnomalyCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: UpdateAnomalyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDeliveryConfigurationCommand}
   */
  updateDeliveryConfiguration(
    args: UpdateDeliveryConfigurationCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<UpdateDeliveryConfigurationCommandOutput>;
  updateDeliveryConfiguration(
    args: UpdateDeliveryConfigurationCommandInput,
    cb: (err: any, data?: UpdateDeliveryConfigurationCommandOutput) => void
  ): void;
  updateDeliveryConfiguration(
    args: UpdateDeliveryConfigurationCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: UpdateDeliveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLogAnomalyDetectorCommand}
   */
  updateLogAnomalyDetector(
    args: UpdateLogAnomalyDetectorCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<UpdateLogAnomalyDetectorCommandOutput>;
  updateLogAnomalyDetector(
    args: UpdateLogAnomalyDetectorCommandInput,
    cb: (err: any, data?: UpdateLogAnomalyDetectorCommandOutput) => void
  ): void;
  updateLogAnomalyDetector(
    args: UpdateLogAnomalyDetectorCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: UpdateLogAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLookupTableCommand}
   */
  updateLookupTable(
    args: UpdateLookupTableCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<UpdateLookupTableCommandOutput>;
  updateLookupTable(
    args: UpdateLookupTableCommandInput,
    cb: (err: any, data?: UpdateLookupTableCommandOutput) => void
  ): void;
  updateLookupTable(
    args: UpdateLookupTableCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: UpdateLookupTableCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScheduledQueryCommand}
   */
  updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    options?: CloudWatchLogsRequestOptions
  ): Promise<UpdateScheduledQueryCommandOutput>;
  updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    cb: (err: any, data?: UpdateScheduledQueryCommandOutput) => void
  ): void;
  updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    options: CloudWatchLogsRequestOptions,
    cb: (err: any, data?: UpdateScheduledQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeConfigurationTemplatesCommandOutput}.
   */
  paginateDescribeConfigurationTemplates(
    args?: DescribeConfigurationTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeConfigurationTemplatesCommandOutput>;

  /**
   * @see {@link DescribeDeliveriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDeliveriesCommandOutput}.
   */
  paginateDescribeDeliveries(
    args?: DescribeDeliveriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDeliveriesCommandOutput>;

  /**
   * @see {@link DescribeDeliveryDestinationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDeliveryDestinationsCommandOutput}.
   */
  paginateDescribeDeliveryDestinations(
    args?: DescribeDeliveryDestinationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDeliveryDestinationsCommandOutput>;

  /**
   * @see {@link DescribeDeliverySourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDeliverySourcesCommandOutput}.
   */
  paginateDescribeDeliverySources(
    args?: DescribeDeliverySourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDeliverySourcesCommandOutput>;

  /**
   * @see {@link DescribeDestinationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDestinationsCommandOutput}.
   */
  paginateDescribeDestinations(
    args?: DescribeDestinationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDestinationsCommandOutput>;

  /**
   * @see {@link DescribeLogGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeLogGroupsCommandOutput}.
   */
  paginateDescribeLogGroups(
    args?: DescribeLogGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeLogGroupsCommandOutput>;

  /**
   * @see {@link DescribeLogStreamsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeLogStreamsCommandOutput}.
   */
  paginateDescribeLogStreams(
    args?: DescribeLogStreamsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeLogStreamsCommandOutput>;

  /**
   * @see {@link DescribeMetricFiltersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeMetricFiltersCommandOutput}.
   */
  paginateDescribeMetricFilters(
    args?: DescribeMetricFiltersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeMetricFiltersCommandOutput>;

  /**
   * @see {@link DescribeSubscriptionFiltersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeSubscriptionFiltersCommandOutput}.
   */
  paginateDescribeSubscriptionFilters(
    args: DescribeSubscriptionFiltersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeSubscriptionFiltersCommandOutput>;

  /**
   * @see {@link FilterLogEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link FilterLogEventsCommandOutput}.
   */
  paginateFilterLogEvents(
    args?: FilterLogEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<FilterLogEventsCommandOutput>;

  /**
   * @see {@link GetLogEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetLogEventsCommandOutput}.
   */
  paginateGetLogEvents(
    args: GetLogEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetLogEventsCommandOutput>;

  /**
   * @see {@link GetScheduledQueryHistoryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetScheduledQueryHistoryCommandOutput}.
   */
  paginateGetScheduledQueryHistory(
    args: GetScheduledQueryHistoryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetScheduledQueryHistoryCommandOutput>;

  /**
   * @see {@link ListAggregateLogGroupSummariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAggregateLogGroupSummariesCommandOutput}.
   */
  paginateListAggregateLogGroupSummaries(
    args: ListAggregateLogGroupSummariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAggregateLogGroupSummariesCommandOutput>;

  /**
   * @see {@link ListAnomaliesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAnomaliesCommandOutput}.
   */
  paginateListAnomalies(
    args?: ListAnomaliesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAnomaliesCommandOutput>;

  /**
   * @see {@link ListLogAnomalyDetectorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLogAnomalyDetectorsCommandOutput}.
   */
  paginateListLogAnomalyDetectors(
    args?: ListLogAnomalyDetectorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLogAnomalyDetectorsCommandOutput>;

  /**
   * @see {@link ListLogGroupsForQueryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLogGroupsForQueryCommandOutput}.
   */
  paginateListLogGroupsForQuery(
    args: ListLogGroupsForQueryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLogGroupsForQueryCommandOutput>;

  /**
   * @see {@link ListScheduledQueriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListScheduledQueriesCommandOutput}.
   */
  paginateListScheduledQueries(
    args?: ListScheduledQueriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListScheduledQueriesCommandOutput>;

  /**
   * @see {@link ListSourcesForS3TableIntegrationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSourcesForS3TableIntegrationCommandOutput}.
   */
  paginateListSourcesForS3TableIntegration(
    args: ListSourcesForS3TableIntegrationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSourcesForS3TableIntegrationCommandOutput>;
}

/**
 * <p>You can use Amazon CloudWatch Logs to monitor, store, and access your log files from
 *       EC2 instances, CloudTrail, and other sources. You can then retrieve the associated
 *       log data from CloudWatch Logs using the CloudWatch console. Alternatively, you can use
 *       CloudWatch Logs commands in the Amazon Web Services CLI, CloudWatch Logs API, or CloudWatch
 *       Logs SDK.</p>
 *          <p>For more information about CloudWatch Logs features, see the
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html">Amazon CloudWatch Logs User Guide</a>.</p>
 *          <p>You can use CloudWatch Logs to:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Monitor logs from EC2 instances in real time</b>: You
 *           can use CloudWatch Logs to monitor applications and systems using log data. For example,
 *           CloudWatch Logs can track the number of errors that occur in your application logs. Then,
 *           it can send you a notification whenever the rate of errors exceeds a threshold that you
 *           specify. CloudWatch Logs uses your log data for monitoring so no code changes are
 *           required. For example, you can monitor application logs for specific literal terms (such
 *           as "NullReferenceException"). You can also count the number of occurrences of a literal
 *           term at a particular position in log data (such as "404" status codes in an Apache access
 *           log). When the term you are searching for is found, CloudWatch Logs reports the data to a
 *           CloudWatch metric that you specify.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Monitor CloudTrail logged events</b>: You
 *           can create alarms in CloudWatch and receive notifications of particular API activity as
 *           captured by CloudTrail. You can use the notification to perform troubleshooting.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Archive log data</b>: You can use CloudWatch Logs to
 *           store your log data in highly durable storage. You can change the log retention setting so
 *           that any log events earlier than this setting are automatically deleted. The CloudWatch
 *           Logs agent helps to quickly send both rotated and non-rotated log data off of a host and
 *           into the log service. You can then access the raw log data when you need it.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>CloudWatch Logs might log request contents for fields that aren't considered
 *         sensitive, such as API request parameters for CloudWatch Logs actions. This provides
 *         debugging information for failed API requests.</p>
 *          </note>
 * @public
 */
export class CloudWatchLogs extends CloudWatchLogsClient implements CloudWatchLogs {}
createAggregatedClient(commands, CloudWatchLogs, { paginators });
