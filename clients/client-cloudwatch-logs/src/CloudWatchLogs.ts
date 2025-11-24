// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CloudWatchLogsClient, CloudWatchLogsClientConfig } from "./CloudWatchLogsClient";
import {
  AssociateKmsKeyCommand,
  AssociateKmsKeyCommandInput,
  AssociateKmsKeyCommandOutput,
} from "./commands/AssociateKmsKeyCommand";
import {
  CancelExportTaskCommand,
  CancelExportTaskCommandInput,
  CancelExportTaskCommandOutput,
} from "./commands/CancelExportTaskCommand";
import {
  CreateDeliveryCommand,
  CreateDeliveryCommandInput,
  CreateDeliveryCommandOutput,
} from "./commands/CreateDeliveryCommand";
import {
  CreateExportTaskCommand,
  CreateExportTaskCommandInput,
  CreateExportTaskCommandOutput,
} from "./commands/CreateExportTaskCommand";
import {
  CreateLogAnomalyDetectorCommand,
  CreateLogAnomalyDetectorCommandInput,
  CreateLogAnomalyDetectorCommandOutput,
} from "./commands/CreateLogAnomalyDetectorCommand";
import {
  CreateLogGroupCommand,
  CreateLogGroupCommandInput,
  CreateLogGroupCommandOutput,
} from "./commands/CreateLogGroupCommand";
import {
  CreateLogStreamCommand,
  CreateLogStreamCommandInput,
  CreateLogStreamCommandOutput,
} from "./commands/CreateLogStreamCommand";
import {
  CreateScheduledQueryCommand,
  CreateScheduledQueryCommandInput,
  CreateScheduledQueryCommandOutput,
} from "./commands/CreateScheduledQueryCommand";
import {
  DeleteAccountPolicyCommand,
  DeleteAccountPolicyCommandInput,
  DeleteAccountPolicyCommandOutput,
} from "./commands/DeleteAccountPolicyCommand";
import {
  DeleteDataProtectionPolicyCommand,
  DeleteDataProtectionPolicyCommandInput,
  DeleteDataProtectionPolicyCommandOutput,
} from "./commands/DeleteDataProtectionPolicyCommand";
import {
  DeleteDeliveryCommand,
  DeleteDeliveryCommandInput,
  DeleteDeliveryCommandOutput,
} from "./commands/DeleteDeliveryCommand";
import {
  DeleteDeliveryDestinationCommand,
  DeleteDeliveryDestinationCommandInput,
  DeleteDeliveryDestinationCommandOutput,
} from "./commands/DeleteDeliveryDestinationCommand";
import {
  DeleteDeliveryDestinationPolicyCommand,
  DeleteDeliveryDestinationPolicyCommandInput,
  DeleteDeliveryDestinationPolicyCommandOutput,
} from "./commands/DeleteDeliveryDestinationPolicyCommand";
import {
  DeleteDeliverySourceCommand,
  DeleteDeliverySourceCommandInput,
  DeleteDeliverySourceCommandOutput,
} from "./commands/DeleteDeliverySourceCommand";
import {
  DeleteDestinationCommand,
  DeleteDestinationCommandInput,
  DeleteDestinationCommandOutput,
} from "./commands/DeleteDestinationCommand";
import {
  DeleteIndexPolicyCommand,
  DeleteIndexPolicyCommandInput,
  DeleteIndexPolicyCommandOutput,
} from "./commands/DeleteIndexPolicyCommand";
import {
  DeleteIntegrationCommand,
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import {
  DeleteLogAnomalyDetectorCommand,
  DeleteLogAnomalyDetectorCommandInput,
  DeleteLogAnomalyDetectorCommandOutput,
} from "./commands/DeleteLogAnomalyDetectorCommand";
import {
  DeleteLogGroupCommand,
  DeleteLogGroupCommandInput,
  DeleteLogGroupCommandOutput,
} from "./commands/DeleteLogGroupCommand";
import {
  DeleteLogStreamCommand,
  DeleteLogStreamCommandInput,
  DeleteLogStreamCommandOutput,
} from "./commands/DeleteLogStreamCommand";
import {
  DeleteMetricFilterCommand,
  DeleteMetricFilterCommandInput,
  DeleteMetricFilterCommandOutput,
} from "./commands/DeleteMetricFilterCommand";
import {
  DeleteQueryDefinitionCommand,
  DeleteQueryDefinitionCommandInput,
  DeleteQueryDefinitionCommandOutput,
} from "./commands/DeleteQueryDefinitionCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteRetentionPolicyCommand,
  DeleteRetentionPolicyCommandInput,
  DeleteRetentionPolicyCommandOutput,
} from "./commands/DeleteRetentionPolicyCommand";
import {
  DeleteScheduledQueryCommand,
  DeleteScheduledQueryCommandInput,
  DeleteScheduledQueryCommandOutput,
} from "./commands/DeleteScheduledQueryCommand";
import {
  DeleteSubscriptionFilterCommand,
  DeleteSubscriptionFilterCommandInput,
  DeleteSubscriptionFilterCommandOutput,
} from "./commands/DeleteSubscriptionFilterCommand";
import {
  DeleteTransformerCommand,
  DeleteTransformerCommandInput,
  DeleteTransformerCommandOutput,
} from "./commands/DeleteTransformerCommand";
import {
  DescribeAccountPoliciesCommand,
  DescribeAccountPoliciesCommandInput,
  DescribeAccountPoliciesCommandOutput,
} from "./commands/DescribeAccountPoliciesCommand";
import {
  DescribeConfigurationTemplatesCommand,
  DescribeConfigurationTemplatesCommandInput,
  DescribeConfigurationTemplatesCommandOutput,
} from "./commands/DescribeConfigurationTemplatesCommand";
import {
  DescribeDeliveriesCommand,
  DescribeDeliveriesCommandInput,
  DescribeDeliveriesCommandOutput,
} from "./commands/DescribeDeliveriesCommand";
import {
  DescribeDeliveryDestinationsCommand,
  DescribeDeliveryDestinationsCommandInput,
  DescribeDeliveryDestinationsCommandOutput,
} from "./commands/DescribeDeliveryDestinationsCommand";
import {
  DescribeDeliverySourcesCommand,
  DescribeDeliverySourcesCommandInput,
  DescribeDeliverySourcesCommandOutput,
} from "./commands/DescribeDeliverySourcesCommand";
import {
  DescribeDestinationsCommand,
  DescribeDestinationsCommandInput,
  DescribeDestinationsCommandOutput,
} from "./commands/DescribeDestinationsCommand";
import {
  DescribeExportTasksCommand,
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "./commands/DescribeExportTasksCommand";
import {
  DescribeFieldIndexesCommand,
  DescribeFieldIndexesCommandInput,
  DescribeFieldIndexesCommandOutput,
} from "./commands/DescribeFieldIndexesCommand";
import {
  DescribeIndexPoliciesCommand,
  DescribeIndexPoliciesCommandInput,
  DescribeIndexPoliciesCommandOutput,
} from "./commands/DescribeIndexPoliciesCommand";
import {
  DescribeLogGroupsCommand,
  DescribeLogGroupsCommandInput,
  DescribeLogGroupsCommandOutput,
} from "./commands/DescribeLogGroupsCommand";
import {
  DescribeLogStreamsCommand,
  DescribeLogStreamsCommandInput,
  DescribeLogStreamsCommandOutput,
} from "./commands/DescribeLogStreamsCommand";
import {
  DescribeMetricFiltersCommand,
  DescribeMetricFiltersCommandInput,
  DescribeMetricFiltersCommandOutput,
} from "./commands/DescribeMetricFiltersCommand";
import {
  DescribeQueriesCommand,
  DescribeQueriesCommandInput,
  DescribeQueriesCommandOutput,
} from "./commands/DescribeQueriesCommand";
import {
  DescribeQueryDefinitionsCommand,
  DescribeQueryDefinitionsCommandInput,
  DescribeQueryDefinitionsCommandOutput,
} from "./commands/DescribeQueryDefinitionsCommand";
import {
  DescribeResourcePoliciesCommand,
  DescribeResourcePoliciesCommandInput,
  DescribeResourcePoliciesCommandOutput,
} from "./commands/DescribeResourcePoliciesCommand";
import {
  DescribeSubscriptionFiltersCommand,
  DescribeSubscriptionFiltersCommandInput,
  DescribeSubscriptionFiltersCommandOutput,
} from "./commands/DescribeSubscriptionFiltersCommand";
import {
  DisassociateKmsKeyCommand,
  DisassociateKmsKeyCommandInput,
  DisassociateKmsKeyCommandOutput,
} from "./commands/DisassociateKmsKeyCommand";
import {
  FilterLogEventsCommand,
  FilterLogEventsCommandInput,
  FilterLogEventsCommandOutput,
} from "./commands/FilterLogEventsCommand";
import {
  GetDataProtectionPolicyCommand,
  GetDataProtectionPolicyCommandInput,
  GetDataProtectionPolicyCommandOutput,
} from "./commands/GetDataProtectionPolicyCommand";
import { GetDeliveryCommand, GetDeliveryCommandInput, GetDeliveryCommandOutput } from "./commands/GetDeliveryCommand";
import {
  GetDeliveryDestinationCommand,
  GetDeliveryDestinationCommandInput,
  GetDeliveryDestinationCommandOutput,
} from "./commands/GetDeliveryDestinationCommand";
import {
  GetDeliveryDestinationPolicyCommand,
  GetDeliveryDestinationPolicyCommandInput,
  GetDeliveryDestinationPolicyCommandOutput,
} from "./commands/GetDeliveryDestinationPolicyCommand";
import {
  GetDeliverySourceCommand,
  GetDeliverySourceCommandInput,
  GetDeliverySourceCommandOutput,
} from "./commands/GetDeliverySourceCommand";
import {
  GetIntegrationCommand,
  GetIntegrationCommandInput,
  GetIntegrationCommandOutput,
} from "./commands/GetIntegrationCommand";
import {
  GetLogAnomalyDetectorCommand,
  GetLogAnomalyDetectorCommandInput,
  GetLogAnomalyDetectorCommandOutput,
} from "./commands/GetLogAnomalyDetectorCommand";
import {
  GetLogEventsCommand,
  GetLogEventsCommandInput,
  GetLogEventsCommandOutput,
} from "./commands/GetLogEventsCommand";
import {
  GetLogGroupFieldsCommand,
  GetLogGroupFieldsCommandInput,
  GetLogGroupFieldsCommandOutput,
} from "./commands/GetLogGroupFieldsCommand";
import {
  GetLogObjectCommand,
  GetLogObjectCommandInput,
  GetLogObjectCommandOutput,
} from "./commands/GetLogObjectCommand";
import {
  GetLogRecordCommand,
  GetLogRecordCommandInput,
  GetLogRecordCommandOutput,
} from "./commands/GetLogRecordCommand";
import {
  GetQueryResultsCommand,
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
} from "./commands/GetQueryResultsCommand";
import {
  GetScheduledQueryCommand,
  GetScheduledQueryCommandInput,
  GetScheduledQueryCommandOutput,
} from "./commands/GetScheduledQueryCommand";
import {
  GetScheduledQueryHistoryCommand,
  GetScheduledQueryHistoryCommandInput,
  GetScheduledQueryHistoryCommandOutput,
} from "./commands/GetScheduledQueryHistoryCommand";
import {
  GetTransformerCommand,
  GetTransformerCommandInput,
  GetTransformerCommandOutput,
} from "./commands/GetTransformerCommand";
import {
  ListAnomaliesCommand,
  ListAnomaliesCommandInput,
  ListAnomaliesCommandOutput,
} from "./commands/ListAnomaliesCommand";
import {
  ListIntegrationsCommand,
  ListIntegrationsCommandInput,
  ListIntegrationsCommandOutput,
} from "./commands/ListIntegrationsCommand";
import {
  ListLogAnomalyDetectorsCommand,
  ListLogAnomalyDetectorsCommandInput,
  ListLogAnomalyDetectorsCommandOutput,
} from "./commands/ListLogAnomalyDetectorsCommand";
import {
  ListLogGroupsCommand,
  ListLogGroupsCommandInput,
  ListLogGroupsCommandOutput,
} from "./commands/ListLogGroupsCommand";
import {
  ListLogGroupsForQueryCommand,
  ListLogGroupsForQueryCommandInput,
  ListLogGroupsForQueryCommandOutput,
} from "./commands/ListLogGroupsForQueryCommand";
import {
  ListScheduledQueriesCommand,
  ListScheduledQueriesCommandInput,
  ListScheduledQueriesCommandOutput,
} from "./commands/ListScheduledQueriesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTagsLogGroupCommand,
  ListTagsLogGroupCommandInput,
  ListTagsLogGroupCommandOutput,
} from "./commands/ListTagsLogGroupCommand";
import {
  PutAccountPolicyCommand,
  PutAccountPolicyCommandInput,
  PutAccountPolicyCommandOutput,
} from "./commands/PutAccountPolicyCommand";
import {
  PutDataProtectionPolicyCommand,
  PutDataProtectionPolicyCommandInput,
  PutDataProtectionPolicyCommandOutput,
} from "./commands/PutDataProtectionPolicyCommand";
import {
  PutDeliveryDestinationCommand,
  PutDeliveryDestinationCommandInput,
  PutDeliveryDestinationCommandOutput,
} from "./commands/PutDeliveryDestinationCommand";
import {
  PutDeliveryDestinationPolicyCommand,
  PutDeliveryDestinationPolicyCommandInput,
  PutDeliveryDestinationPolicyCommandOutput,
} from "./commands/PutDeliveryDestinationPolicyCommand";
import {
  PutDeliverySourceCommand,
  PutDeliverySourceCommandInput,
  PutDeliverySourceCommandOutput,
} from "./commands/PutDeliverySourceCommand";
import {
  PutDestinationCommand,
  PutDestinationCommandInput,
  PutDestinationCommandOutput,
} from "./commands/PutDestinationCommand";
import {
  PutDestinationPolicyCommand,
  PutDestinationPolicyCommandInput,
  PutDestinationPolicyCommandOutput,
} from "./commands/PutDestinationPolicyCommand";
import {
  PutIndexPolicyCommand,
  PutIndexPolicyCommandInput,
  PutIndexPolicyCommandOutput,
} from "./commands/PutIndexPolicyCommand";
import {
  PutIntegrationCommand,
  PutIntegrationCommandInput,
  PutIntegrationCommandOutput,
} from "./commands/PutIntegrationCommand";
import {
  PutLogEventsCommand,
  PutLogEventsCommandInput,
  PutLogEventsCommandOutput,
} from "./commands/PutLogEventsCommand";
import {
  PutLogGroupDeletionProtectionCommand,
  PutLogGroupDeletionProtectionCommandInput,
  PutLogGroupDeletionProtectionCommandOutput,
} from "./commands/PutLogGroupDeletionProtectionCommand";
import {
  PutMetricFilterCommand,
  PutMetricFilterCommandInput,
  PutMetricFilterCommandOutput,
} from "./commands/PutMetricFilterCommand";
import {
  PutQueryDefinitionCommand,
  PutQueryDefinitionCommandInput,
  PutQueryDefinitionCommandOutput,
} from "./commands/PutQueryDefinitionCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  PutRetentionPolicyCommand,
  PutRetentionPolicyCommandInput,
  PutRetentionPolicyCommandOutput,
} from "./commands/PutRetentionPolicyCommand";
import {
  PutSubscriptionFilterCommand,
  PutSubscriptionFilterCommandInput,
  PutSubscriptionFilterCommandOutput,
} from "./commands/PutSubscriptionFilterCommand";
import {
  PutTransformerCommand,
  PutTransformerCommandInput,
  PutTransformerCommandOutput,
} from "./commands/PutTransformerCommand";
import {
  StartLiveTailCommand,
  StartLiveTailCommandInput,
  StartLiveTailCommandOutput,
} from "./commands/StartLiveTailCommand";
import { StartQueryCommand, StartQueryCommandInput, StartQueryCommandOutput } from "./commands/StartQueryCommand";
import { StopQueryCommand, StopQueryCommandInput, StopQueryCommandOutput } from "./commands/StopQueryCommand";
import { TagLogGroupCommand, TagLogGroupCommandInput, TagLogGroupCommandOutput } from "./commands/TagLogGroupCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestMetricFilterCommand,
  TestMetricFilterCommandInput,
  TestMetricFilterCommandOutput,
} from "./commands/TestMetricFilterCommand";
import {
  TestTransformerCommand,
  TestTransformerCommandInput,
  TestTransformerCommandOutput,
} from "./commands/TestTransformerCommand";
import {
  UntagLogGroupCommand,
  UntagLogGroupCommandInput,
  UntagLogGroupCommandOutput,
} from "./commands/UntagLogGroupCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAnomalyCommand,
  UpdateAnomalyCommandInput,
  UpdateAnomalyCommandOutput,
} from "./commands/UpdateAnomalyCommand";
import {
  UpdateDeliveryConfigurationCommand,
  UpdateDeliveryConfigurationCommandInput,
  UpdateDeliveryConfigurationCommandOutput,
} from "./commands/UpdateDeliveryConfigurationCommand";
import {
  UpdateLogAnomalyDetectorCommand,
  UpdateLogAnomalyDetectorCommandInput,
  UpdateLogAnomalyDetectorCommandOutput,
} from "./commands/UpdateLogAnomalyDetectorCommand";
import {
  UpdateScheduledQueryCommand,
  UpdateScheduledQueryCommandInput,
  UpdateScheduledQueryCommandOutput,
} from "./commands/UpdateScheduledQueryCommand";

const commands = {
  AssociateKmsKeyCommand,
  CancelExportTaskCommand,
  CreateDeliveryCommand,
  CreateExportTaskCommand,
  CreateLogAnomalyDetectorCommand,
  CreateLogGroupCommand,
  CreateLogStreamCommand,
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
  DeleteMetricFilterCommand,
  DeleteQueryDefinitionCommand,
  DeleteResourcePolicyCommand,
  DeleteRetentionPolicyCommand,
  DeleteScheduledQueryCommand,
  DeleteSubscriptionFilterCommand,
  DeleteTransformerCommand,
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
  FilterLogEventsCommand,
  GetDataProtectionPolicyCommand,
  GetDeliveryCommand,
  GetDeliveryDestinationCommand,
  GetDeliveryDestinationPolicyCommand,
  GetDeliverySourceCommand,
  GetIntegrationCommand,
  GetLogAnomalyDetectorCommand,
  GetLogEventsCommand,
  GetLogGroupFieldsCommand,
  GetLogObjectCommand,
  GetLogRecordCommand,
  GetQueryResultsCommand,
  GetScheduledQueryCommand,
  GetScheduledQueryHistoryCommand,
  GetTransformerCommand,
  ListAnomaliesCommand,
  ListIntegrationsCommand,
  ListLogAnomalyDetectorsCommand,
  ListLogGroupsCommand,
  ListLogGroupsForQueryCommand,
  ListScheduledQueriesCommand,
  ListTagsForResourceCommand,
  ListTagsLogGroupCommand,
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
  UpdateScheduledQueryCommand,
};

export interface CloudWatchLogs {
  /**
   * @see {@link AssociateKmsKeyCommand}
   */
  associateKmsKey(
    args: AssociateKmsKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateKmsKeyCommandOutput>;
  associateKmsKey(args: AssociateKmsKeyCommandInput, cb: (err: any, data?: AssociateKmsKeyCommandOutput) => void): void;
  associateKmsKey(
    args: AssociateKmsKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateKmsKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelExportTaskCommand}
   */
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelExportTaskCommandOutput>;
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeliveryCommand}
   */
  createDelivery(
    args: CreateDeliveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeliveryCommandOutput>;
  createDelivery(args: CreateDeliveryCommandInput, cb: (err: any, data?: CreateDeliveryCommandOutput) => void): void;
  createDelivery(
    args: CreateDeliveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeliveryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExportTaskCommand}
   */
  createExportTask(
    args: CreateExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExportTaskCommandOutput>;
  createExportTask(
    args: CreateExportTaskCommandInput,
    cb: (err: any, data?: CreateExportTaskCommandOutput) => void
  ): void;
  createExportTask(
    args: CreateExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLogAnomalyDetectorCommand}
   */
  createLogAnomalyDetector(
    args: CreateLogAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLogAnomalyDetectorCommandOutput>;
  createLogAnomalyDetector(
    args: CreateLogAnomalyDetectorCommandInput,
    cb: (err: any, data?: CreateLogAnomalyDetectorCommandOutput) => void
  ): void;
  createLogAnomalyDetector(
    args: CreateLogAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLogAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLogGroupCommand}
   */
  createLogGroup(
    args: CreateLogGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLogGroupCommandOutput>;
  createLogGroup(args: CreateLogGroupCommandInput, cb: (err: any, data?: CreateLogGroupCommandOutput) => void): void;
  createLogGroup(
    args: CreateLogGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLogGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLogStreamCommand}
   */
  createLogStream(
    args: CreateLogStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLogStreamCommandOutput>;
  createLogStream(args: CreateLogStreamCommandInput, cb: (err: any, data?: CreateLogStreamCommandOutput) => void): void;
  createLogStream(
    args: CreateLogStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLogStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScheduledQueryCommand}
   */
  createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScheduledQueryCommandOutput>;
  createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    cb: (err: any, data?: CreateScheduledQueryCommandOutput) => void
  ): void;
  createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScheduledQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountPolicyCommand}
   */
  deleteAccountPolicy(
    args: DeleteAccountPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountPolicyCommandOutput>;
  deleteAccountPolicy(
    args: DeleteAccountPolicyCommandInput,
    cb: (err: any, data?: DeleteAccountPolicyCommandOutput) => void
  ): void;
  deleteAccountPolicy(
    args: DeleteAccountPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataProtectionPolicyCommand}
   */
  deleteDataProtectionPolicy(
    args: DeleteDataProtectionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataProtectionPolicyCommandOutput>;
  deleteDataProtectionPolicy(
    args: DeleteDataProtectionPolicyCommandInput,
    cb: (err: any, data?: DeleteDataProtectionPolicyCommandOutput) => void
  ): void;
  deleteDataProtectionPolicy(
    args: DeleteDataProtectionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataProtectionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeliveryCommand}
   */
  deleteDelivery(
    args: DeleteDeliveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeliveryCommandOutput>;
  deleteDelivery(args: DeleteDeliveryCommandInput, cb: (err: any, data?: DeleteDeliveryCommandOutput) => void): void;
  deleteDelivery(
    args: DeleteDeliveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeliveryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeliveryDestinationCommand}
   */
  deleteDeliveryDestination(
    args: DeleteDeliveryDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeliveryDestinationCommandOutput>;
  deleteDeliveryDestination(
    args: DeleteDeliveryDestinationCommandInput,
    cb: (err: any, data?: DeleteDeliveryDestinationCommandOutput) => void
  ): void;
  deleteDeliveryDestination(
    args: DeleteDeliveryDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeliveryDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeliveryDestinationPolicyCommand}
   */
  deleteDeliveryDestinationPolicy(
    args: DeleteDeliveryDestinationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeliveryDestinationPolicyCommandOutput>;
  deleteDeliveryDestinationPolicy(
    args: DeleteDeliveryDestinationPolicyCommandInput,
    cb: (err: any, data?: DeleteDeliveryDestinationPolicyCommandOutput) => void
  ): void;
  deleteDeliveryDestinationPolicy(
    args: DeleteDeliveryDestinationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeliveryDestinationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeliverySourceCommand}
   */
  deleteDeliverySource(
    args: DeleteDeliverySourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeliverySourceCommandOutput>;
  deleteDeliverySource(
    args: DeleteDeliverySourceCommandInput,
    cb: (err: any, data?: DeleteDeliverySourceCommandOutput) => void
  ): void;
  deleteDeliverySource(
    args: DeleteDeliverySourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeliverySourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDestinationCommand}
   */
  deleteDestination(
    args: DeleteDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDestinationCommandOutput>;
  deleteDestination(
    args: DeleteDestinationCommandInput,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;
  deleteDestination(
    args: DeleteDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIndexPolicyCommand}
   */
  deleteIndexPolicy(
    args: DeleteIndexPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIndexPolicyCommandOutput>;
  deleteIndexPolicy(
    args: DeleteIndexPolicyCommandInput,
    cb: (err: any, data?: DeleteIndexPolicyCommandOutput) => void
  ): void;
  deleteIndexPolicy(
    args: DeleteIndexPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIndexPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLogAnomalyDetectorCommand}
   */
  deleteLogAnomalyDetector(
    args: DeleteLogAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLogAnomalyDetectorCommandOutput>;
  deleteLogAnomalyDetector(
    args: DeleteLogAnomalyDetectorCommandInput,
    cb: (err: any, data?: DeleteLogAnomalyDetectorCommandOutput) => void
  ): void;
  deleteLogAnomalyDetector(
    args: DeleteLogAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLogAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLogGroupCommand}
   */
  deleteLogGroup(
    args: DeleteLogGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLogGroupCommandOutput>;
  deleteLogGroup(args: DeleteLogGroupCommandInput, cb: (err: any, data?: DeleteLogGroupCommandOutput) => void): void;
  deleteLogGroup(
    args: DeleteLogGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLogGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLogStreamCommand}
   */
  deleteLogStream(
    args: DeleteLogStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLogStreamCommandOutput>;
  deleteLogStream(args: DeleteLogStreamCommandInput, cb: (err: any, data?: DeleteLogStreamCommandOutput) => void): void;
  deleteLogStream(
    args: DeleteLogStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLogStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMetricFilterCommand}
   */
  deleteMetricFilter(
    args: DeleteMetricFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMetricFilterCommandOutput>;
  deleteMetricFilter(
    args: DeleteMetricFilterCommandInput,
    cb: (err: any, data?: DeleteMetricFilterCommandOutput) => void
  ): void;
  deleteMetricFilter(
    args: DeleteMetricFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMetricFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueryDefinitionCommand}
   */
  deleteQueryDefinition(
    args: DeleteQueryDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueryDefinitionCommandOutput>;
  deleteQueryDefinition(
    args: DeleteQueryDefinitionCommandInput,
    cb: (err: any, data?: DeleteQueryDefinitionCommandOutput) => void
  ): void;
  deleteQueryDefinition(
    args: DeleteQueryDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueryDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRetentionPolicyCommand}
   */
  deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRetentionPolicyCommandOutput>;
  deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    cb: (err: any, data?: DeleteRetentionPolicyCommandOutput) => void
  ): void;
  deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRetentionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduledQueryCommand}
   */
  deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduledQueryCommandOutput>;
  deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    cb: (err: any, data?: DeleteScheduledQueryCommandOutput) => void
  ): void;
  deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduledQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubscriptionFilterCommand}
   */
  deleteSubscriptionFilter(
    args: DeleteSubscriptionFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriptionFilterCommandOutput>;
  deleteSubscriptionFilter(
    args: DeleteSubscriptionFilterCommandInput,
    cb: (err: any, data?: DeleteSubscriptionFilterCommandOutput) => void
  ): void;
  deleteSubscriptionFilter(
    args: DeleteSubscriptionFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriptionFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTransformerCommand}
   */
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransformerCommandOutput>;
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    cb: (err: any, data?: DeleteTransformerCommandOutput) => void
  ): void;
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransformerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountPoliciesCommand}
   */
  describeAccountPolicies(
    args: DescribeAccountPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountPoliciesCommandOutput>;
  describeAccountPolicies(
    args: DescribeAccountPoliciesCommandInput,
    cb: (err: any, data?: DescribeAccountPoliciesCommandOutput) => void
  ): void;
  describeAccountPolicies(
    args: DescribeAccountPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationTemplatesCommand}
   */
  describeConfigurationTemplates(): Promise<DescribeConfigurationTemplatesCommandOutput>;
  describeConfigurationTemplates(
    args: DescribeConfigurationTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationTemplatesCommandOutput>;
  describeConfigurationTemplates(
    args: DescribeConfigurationTemplatesCommandInput,
    cb: (err: any, data?: DescribeConfigurationTemplatesCommandOutput) => void
  ): void;
  describeConfigurationTemplates(
    args: DescribeConfigurationTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeliveriesCommand}
   */
  describeDeliveries(): Promise<DescribeDeliveriesCommandOutput>;
  describeDeliveries(
    args: DescribeDeliveriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeliveriesCommandOutput>;
  describeDeliveries(
    args: DescribeDeliveriesCommandInput,
    cb: (err: any, data?: DescribeDeliveriesCommandOutput) => void
  ): void;
  describeDeliveries(
    args: DescribeDeliveriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeliveriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeliveryDestinationsCommand}
   */
  describeDeliveryDestinations(): Promise<DescribeDeliveryDestinationsCommandOutput>;
  describeDeliveryDestinations(
    args: DescribeDeliveryDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeliveryDestinationsCommandOutput>;
  describeDeliveryDestinations(
    args: DescribeDeliveryDestinationsCommandInput,
    cb: (err: any, data?: DescribeDeliveryDestinationsCommandOutput) => void
  ): void;
  describeDeliveryDestinations(
    args: DescribeDeliveryDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeliveryDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeliverySourcesCommand}
   */
  describeDeliverySources(): Promise<DescribeDeliverySourcesCommandOutput>;
  describeDeliverySources(
    args: DescribeDeliverySourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeliverySourcesCommandOutput>;
  describeDeliverySources(
    args: DescribeDeliverySourcesCommandInput,
    cb: (err: any, data?: DescribeDeliverySourcesCommandOutput) => void
  ): void;
  describeDeliverySources(
    args: DescribeDeliverySourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeliverySourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDestinationsCommand}
   */
  describeDestinations(): Promise<DescribeDestinationsCommandOutput>;
  describeDestinations(
    args: DescribeDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDestinationsCommandOutput>;
  describeDestinations(
    args: DescribeDestinationsCommandInput,
    cb: (err: any, data?: DescribeDestinationsCommandOutput) => void
  ): void;
  describeDestinations(
    args: DescribeDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExportTasksCommand}
   */
  describeExportTasks(): Promise<DescribeExportTasksCommandOutput>;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportTasksCommandOutput>;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFieldIndexesCommand}
   */
  describeFieldIndexes(
    args: DescribeFieldIndexesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFieldIndexesCommandOutput>;
  describeFieldIndexes(
    args: DescribeFieldIndexesCommandInput,
    cb: (err: any, data?: DescribeFieldIndexesCommandOutput) => void
  ): void;
  describeFieldIndexes(
    args: DescribeFieldIndexesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFieldIndexesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIndexPoliciesCommand}
   */
  describeIndexPolicies(
    args: DescribeIndexPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIndexPoliciesCommandOutput>;
  describeIndexPolicies(
    args: DescribeIndexPoliciesCommandInput,
    cb: (err: any, data?: DescribeIndexPoliciesCommandOutput) => void
  ): void;
  describeIndexPolicies(
    args: DescribeIndexPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIndexPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLogGroupsCommand}
   */
  describeLogGroups(): Promise<DescribeLogGroupsCommandOutput>;
  describeLogGroups(
    args: DescribeLogGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLogGroupsCommandOutput>;
  describeLogGroups(
    args: DescribeLogGroupsCommandInput,
    cb: (err: any, data?: DescribeLogGroupsCommandOutput) => void
  ): void;
  describeLogGroups(
    args: DescribeLogGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLogGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLogStreamsCommand}
   */
  describeLogStreams(): Promise<DescribeLogStreamsCommandOutput>;
  describeLogStreams(
    args: DescribeLogStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLogStreamsCommandOutput>;
  describeLogStreams(
    args: DescribeLogStreamsCommandInput,
    cb: (err: any, data?: DescribeLogStreamsCommandOutput) => void
  ): void;
  describeLogStreams(
    args: DescribeLogStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLogStreamsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMetricFiltersCommand}
   */
  describeMetricFilters(): Promise<DescribeMetricFiltersCommandOutput>;
  describeMetricFilters(
    args: DescribeMetricFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMetricFiltersCommandOutput>;
  describeMetricFilters(
    args: DescribeMetricFiltersCommandInput,
    cb: (err: any, data?: DescribeMetricFiltersCommandOutput) => void
  ): void;
  describeMetricFilters(
    args: DescribeMetricFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMetricFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQueriesCommand}
   */
  describeQueries(): Promise<DescribeQueriesCommandOutput>;
  describeQueries(
    args: DescribeQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQueriesCommandOutput>;
  describeQueries(args: DescribeQueriesCommandInput, cb: (err: any, data?: DescribeQueriesCommandOutput) => void): void;
  describeQueries(
    args: DescribeQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQueriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQueryDefinitionsCommand}
   */
  describeQueryDefinitions(): Promise<DescribeQueryDefinitionsCommandOutput>;
  describeQueryDefinitions(
    args: DescribeQueryDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQueryDefinitionsCommandOutput>;
  describeQueryDefinitions(
    args: DescribeQueryDefinitionsCommandInput,
    cb: (err: any, data?: DescribeQueryDefinitionsCommandOutput) => void
  ): void;
  describeQueryDefinitions(
    args: DescribeQueryDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQueryDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourcePoliciesCommand}
   */
  describeResourcePolicies(): Promise<DescribeResourcePoliciesCommandOutput>;
  describeResourcePolicies(
    args: DescribeResourcePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourcePoliciesCommandOutput>;
  describeResourcePolicies(
    args: DescribeResourcePoliciesCommandInput,
    cb: (err: any, data?: DescribeResourcePoliciesCommandOutput) => void
  ): void;
  describeResourcePolicies(
    args: DescribeResourcePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourcePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSubscriptionFiltersCommand}
   */
  describeSubscriptionFilters(
    args: DescribeSubscriptionFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSubscriptionFiltersCommandOutput>;
  describeSubscriptionFilters(
    args: DescribeSubscriptionFiltersCommandInput,
    cb: (err: any, data?: DescribeSubscriptionFiltersCommandOutput) => void
  ): void;
  describeSubscriptionFilters(
    args: DescribeSubscriptionFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSubscriptionFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateKmsKeyCommand}
   */
  disassociateKmsKey(): Promise<DisassociateKmsKeyCommandOutput>;
  disassociateKmsKey(
    args: DisassociateKmsKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateKmsKeyCommandOutput>;
  disassociateKmsKey(
    args: DisassociateKmsKeyCommandInput,
    cb: (err: any, data?: DisassociateKmsKeyCommandOutput) => void
  ): void;
  disassociateKmsKey(
    args: DisassociateKmsKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateKmsKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link FilterLogEventsCommand}
   */
  filterLogEvents(): Promise<FilterLogEventsCommandOutput>;
  filterLogEvents(
    args: FilterLogEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FilterLogEventsCommandOutput>;
  filterLogEvents(args: FilterLogEventsCommandInput, cb: (err: any, data?: FilterLogEventsCommandOutput) => void): void;
  filterLogEvents(
    args: FilterLogEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FilterLogEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataProtectionPolicyCommand}
   */
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataProtectionPolicyCommandOutput>;
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    cb: (err: any, data?: GetDataProtectionPolicyCommandOutput) => void
  ): void;
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataProtectionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeliveryCommand}
   */
  getDelivery(args: GetDeliveryCommandInput, options?: __HttpHandlerOptions): Promise<GetDeliveryCommandOutput>;
  getDelivery(args: GetDeliveryCommandInput, cb: (err: any, data?: GetDeliveryCommandOutput) => void): void;
  getDelivery(
    args: GetDeliveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliveryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeliveryDestinationCommand}
   */
  getDeliveryDestination(
    args: GetDeliveryDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeliveryDestinationCommandOutput>;
  getDeliveryDestination(
    args: GetDeliveryDestinationCommandInput,
    cb: (err: any, data?: GetDeliveryDestinationCommandOutput) => void
  ): void;
  getDeliveryDestination(
    args: GetDeliveryDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliveryDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeliveryDestinationPolicyCommand}
   */
  getDeliveryDestinationPolicy(
    args: GetDeliveryDestinationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeliveryDestinationPolicyCommandOutput>;
  getDeliveryDestinationPolicy(
    args: GetDeliveryDestinationPolicyCommandInput,
    cb: (err: any, data?: GetDeliveryDestinationPolicyCommandOutput) => void
  ): void;
  getDeliveryDestinationPolicy(
    args: GetDeliveryDestinationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliveryDestinationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeliverySourceCommand}
   */
  getDeliverySource(
    args: GetDeliverySourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeliverySourceCommandOutput>;
  getDeliverySource(
    args: GetDeliverySourceCommandInput,
    cb: (err: any, data?: GetDeliverySourceCommandOutput) => void
  ): void;
  getDeliverySource(
    args: GetDeliverySourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliverySourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntegrationCommand}
   */
  getIntegration(
    args: GetIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationCommandOutput>;
  getIntegration(args: GetIntegrationCommandInput, cb: (err: any, data?: GetIntegrationCommandOutput) => void): void;
  getIntegration(
    args: GetIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLogAnomalyDetectorCommand}
   */
  getLogAnomalyDetector(
    args: GetLogAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLogAnomalyDetectorCommandOutput>;
  getLogAnomalyDetector(
    args: GetLogAnomalyDetectorCommandInput,
    cb: (err: any, data?: GetLogAnomalyDetectorCommandOutput) => void
  ): void;
  getLogAnomalyDetector(
    args: GetLogAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLogAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLogEventsCommand}
   */
  getLogEvents(args: GetLogEventsCommandInput, options?: __HttpHandlerOptions): Promise<GetLogEventsCommandOutput>;
  getLogEvents(args: GetLogEventsCommandInput, cb: (err: any, data?: GetLogEventsCommandOutput) => void): void;
  getLogEvents(
    args: GetLogEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLogEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLogGroupFieldsCommand}
   */
  getLogGroupFields(): Promise<GetLogGroupFieldsCommandOutput>;
  getLogGroupFields(
    args: GetLogGroupFieldsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLogGroupFieldsCommandOutput>;
  getLogGroupFields(
    args: GetLogGroupFieldsCommandInput,
    cb: (err: any, data?: GetLogGroupFieldsCommandOutput) => void
  ): void;
  getLogGroupFields(
    args: GetLogGroupFieldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLogGroupFieldsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLogObjectCommand}
   */
  getLogObject(args: GetLogObjectCommandInput, options?: __HttpHandlerOptions): Promise<GetLogObjectCommandOutput>;
  getLogObject(args: GetLogObjectCommandInput, cb: (err: any, data?: GetLogObjectCommandOutput) => void): void;
  getLogObject(
    args: GetLogObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLogObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLogRecordCommand}
   */
  getLogRecord(args: GetLogRecordCommandInput, options?: __HttpHandlerOptions): Promise<GetLogRecordCommandOutput>;
  getLogRecord(args: GetLogRecordCommandInput, cb: (err: any, data?: GetLogRecordCommandOutput) => void): void;
  getLogRecord(
    args: GetLogRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLogRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryResultsCommand}
   */
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryResultsCommandOutput>;
  getQueryResults(args: GetQueryResultsCommandInput, cb: (err: any, data?: GetQueryResultsCommandOutput) => void): void;
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScheduledQueryCommand}
   */
  getScheduledQuery(
    args: GetScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetScheduledQueryCommandOutput>;
  getScheduledQuery(
    args: GetScheduledQueryCommandInput,
    cb: (err: any, data?: GetScheduledQueryCommandOutput) => void
  ): void;
  getScheduledQuery(
    args: GetScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetScheduledQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScheduledQueryHistoryCommand}
   */
  getScheduledQueryHistory(
    args: GetScheduledQueryHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetScheduledQueryHistoryCommandOutput>;
  getScheduledQueryHistory(
    args: GetScheduledQueryHistoryCommandInput,
    cb: (err: any, data?: GetScheduledQueryHistoryCommandOutput) => void
  ): void;
  getScheduledQueryHistory(
    args: GetScheduledQueryHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetScheduledQueryHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransformerCommand}
   */
  getTransformer(
    args: GetTransformerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransformerCommandOutput>;
  getTransformer(args: GetTransformerCommandInput, cb: (err: any, data?: GetTransformerCommandOutput) => void): void;
  getTransformer(
    args: GetTransformerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransformerCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnomaliesCommand}
   */
  listAnomalies(): Promise<ListAnomaliesCommandOutput>;
  listAnomalies(args: ListAnomaliesCommandInput, options?: __HttpHandlerOptions): Promise<ListAnomaliesCommandOutput>;
  listAnomalies(args: ListAnomaliesCommandInput, cb: (err: any, data?: ListAnomaliesCommandOutput) => void): void;
  listAnomalies(
    args: ListAnomaliesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnomaliesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntegrationsCommand}
   */
  listIntegrations(): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLogAnomalyDetectorsCommand}
   */
  listLogAnomalyDetectors(): Promise<ListLogAnomalyDetectorsCommandOutput>;
  listLogAnomalyDetectors(
    args: ListLogAnomalyDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLogAnomalyDetectorsCommandOutput>;
  listLogAnomalyDetectors(
    args: ListLogAnomalyDetectorsCommandInput,
    cb: (err: any, data?: ListLogAnomalyDetectorsCommandOutput) => void
  ): void;
  listLogAnomalyDetectors(
    args: ListLogAnomalyDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLogAnomalyDetectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLogGroupsCommand}
   */
  listLogGroups(): Promise<ListLogGroupsCommandOutput>;
  listLogGroups(args: ListLogGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListLogGroupsCommandOutput>;
  listLogGroups(args: ListLogGroupsCommandInput, cb: (err: any, data?: ListLogGroupsCommandOutput) => void): void;
  listLogGroups(
    args: ListLogGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLogGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLogGroupsForQueryCommand}
   */
  listLogGroupsForQuery(
    args: ListLogGroupsForQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLogGroupsForQueryCommandOutput>;
  listLogGroupsForQuery(
    args: ListLogGroupsForQueryCommandInput,
    cb: (err: any, data?: ListLogGroupsForQueryCommandOutput) => void
  ): void;
  listLogGroupsForQuery(
    args: ListLogGroupsForQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLogGroupsForQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScheduledQueriesCommand}
   */
  listScheduledQueries(): Promise<ListScheduledQueriesCommandOutput>;
  listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListScheduledQueriesCommandOutput>;
  listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    cb: (err: any, data?: ListScheduledQueriesCommandOutput) => void
  ): void;
  listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScheduledQueriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsLogGroupCommand}
   */
  listTagsLogGroup(
    args: ListTagsLogGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsLogGroupCommandOutput>;
  listTagsLogGroup(
    args: ListTagsLogGroupCommandInput,
    cb: (err: any, data?: ListTagsLogGroupCommandOutput) => void
  ): void;
  listTagsLogGroup(
    args: ListTagsLogGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsLogGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccountPolicyCommand}
   */
  putAccountPolicy(
    args: PutAccountPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountPolicyCommandOutput>;
  putAccountPolicy(
    args: PutAccountPolicyCommandInput,
    cb: (err: any, data?: PutAccountPolicyCommandOutput) => void
  ): void;
  putAccountPolicy(
    args: PutAccountPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDataProtectionPolicyCommand}
   */
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDataProtectionPolicyCommandOutput>;
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    cb: (err: any, data?: PutDataProtectionPolicyCommandOutput) => void
  ): void;
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDataProtectionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDeliveryDestinationCommand}
   */
  putDeliveryDestination(
    args: PutDeliveryDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDeliveryDestinationCommandOutput>;
  putDeliveryDestination(
    args: PutDeliveryDestinationCommandInput,
    cb: (err: any, data?: PutDeliveryDestinationCommandOutput) => void
  ): void;
  putDeliveryDestination(
    args: PutDeliveryDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDeliveryDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDeliveryDestinationPolicyCommand}
   */
  putDeliveryDestinationPolicy(
    args: PutDeliveryDestinationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDeliveryDestinationPolicyCommandOutput>;
  putDeliveryDestinationPolicy(
    args: PutDeliveryDestinationPolicyCommandInput,
    cb: (err: any, data?: PutDeliveryDestinationPolicyCommandOutput) => void
  ): void;
  putDeliveryDestinationPolicy(
    args: PutDeliveryDestinationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDeliveryDestinationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDeliverySourceCommand}
   */
  putDeliverySource(
    args: PutDeliverySourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDeliverySourceCommandOutput>;
  putDeliverySource(
    args: PutDeliverySourceCommandInput,
    cb: (err: any, data?: PutDeliverySourceCommandOutput) => void
  ): void;
  putDeliverySource(
    args: PutDeliverySourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDeliverySourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDestinationCommand}
   */
  putDestination(
    args: PutDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDestinationCommandOutput>;
  putDestination(args: PutDestinationCommandInput, cb: (err: any, data?: PutDestinationCommandOutput) => void): void;
  putDestination(
    args: PutDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDestinationPolicyCommand}
   */
  putDestinationPolicy(
    args: PutDestinationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDestinationPolicyCommandOutput>;
  putDestinationPolicy(
    args: PutDestinationPolicyCommandInput,
    cb: (err: any, data?: PutDestinationPolicyCommandOutput) => void
  ): void;
  putDestinationPolicy(
    args: PutDestinationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDestinationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutIndexPolicyCommand}
   */
  putIndexPolicy(
    args: PutIndexPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIndexPolicyCommandOutput>;
  putIndexPolicy(args: PutIndexPolicyCommandInput, cb: (err: any, data?: PutIndexPolicyCommandOutput) => void): void;
  putIndexPolicy(
    args: PutIndexPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIndexPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutIntegrationCommand}
   */
  putIntegration(
    args: PutIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIntegrationCommandOutput>;
  putIntegration(args: PutIntegrationCommandInput, cb: (err: any, data?: PutIntegrationCommandOutput) => void): void;
  putIntegration(
    args: PutIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLogEventsCommand}
   */
  putLogEvents(args: PutLogEventsCommandInput, options?: __HttpHandlerOptions): Promise<PutLogEventsCommandOutput>;
  putLogEvents(args: PutLogEventsCommandInput, cb: (err: any, data?: PutLogEventsCommandOutput) => void): void;
  putLogEvents(
    args: PutLogEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLogEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLogGroupDeletionProtectionCommand}
   */
  putLogGroupDeletionProtection(
    args: PutLogGroupDeletionProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLogGroupDeletionProtectionCommandOutput>;
  putLogGroupDeletionProtection(
    args: PutLogGroupDeletionProtectionCommandInput,
    cb: (err: any, data?: PutLogGroupDeletionProtectionCommandOutput) => void
  ): void;
  putLogGroupDeletionProtection(
    args: PutLogGroupDeletionProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLogGroupDeletionProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMetricFilterCommand}
   */
  putMetricFilter(
    args: PutMetricFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMetricFilterCommandOutput>;
  putMetricFilter(args: PutMetricFilterCommandInput, cb: (err: any, data?: PutMetricFilterCommandOutput) => void): void;
  putMetricFilter(
    args: PutMetricFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMetricFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link PutQueryDefinitionCommand}
   */
  putQueryDefinition(
    args: PutQueryDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutQueryDefinitionCommandOutput>;
  putQueryDefinition(
    args: PutQueryDefinitionCommandInput,
    cb: (err: any, data?: PutQueryDefinitionCommandOutput) => void
  ): void;
  putQueryDefinition(
    args: PutQueryDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutQueryDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRetentionPolicyCommand}
   */
  putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRetentionPolicyCommandOutput>;
  putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    cb: (err: any, data?: PutRetentionPolicyCommandOutput) => void
  ): void;
  putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRetentionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSubscriptionFilterCommand}
   */
  putSubscriptionFilter(
    args: PutSubscriptionFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSubscriptionFilterCommandOutput>;
  putSubscriptionFilter(
    args: PutSubscriptionFilterCommandInput,
    cb: (err: any, data?: PutSubscriptionFilterCommandOutput) => void
  ): void;
  putSubscriptionFilter(
    args: PutSubscriptionFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSubscriptionFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTransformerCommand}
   */
  putTransformer(
    args: PutTransformerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTransformerCommandOutput>;
  putTransformer(args: PutTransformerCommandInput, cb: (err: any, data?: PutTransformerCommandOutput) => void): void;
  putTransformer(
    args: PutTransformerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTransformerCommandOutput) => void
  ): void;

  /**
   * @see {@link StartLiveTailCommand}
   */
  startLiveTail(args: StartLiveTailCommandInput, options?: __HttpHandlerOptions): Promise<StartLiveTailCommandOutput>;
  startLiveTail(args: StartLiveTailCommandInput, cb: (err: any, data?: StartLiveTailCommandOutput) => void): void;
  startLiveTail(
    args: StartLiveTailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartLiveTailCommandOutput) => void
  ): void;

  /**
   * @see {@link StartQueryCommand}
   */
  startQuery(args: StartQueryCommandInput, options?: __HttpHandlerOptions): Promise<StartQueryCommandOutput>;
  startQuery(args: StartQueryCommandInput, cb: (err: any, data?: StartQueryCommandOutput) => void): void;
  startQuery(
    args: StartQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link StopQueryCommand}
   */
  stopQuery(args: StopQueryCommandInput, options?: __HttpHandlerOptions): Promise<StopQueryCommandOutput>;
  stopQuery(args: StopQueryCommandInput, cb: (err: any, data?: StopQueryCommandOutput) => void): void;
  stopQuery(
    args: StopQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link TagLogGroupCommand}
   */
  tagLogGroup(args: TagLogGroupCommandInput, options?: __HttpHandlerOptions): Promise<TagLogGroupCommandOutput>;
  tagLogGroup(args: TagLogGroupCommandInput, cb: (err: any, data?: TagLogGroupCommandOutput) => void): void;
  tagLogGroup(
    args: TagLogGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagLogGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestMetricFilterCommand}
   */
  testMetricFilter(
    args: TestMetricFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestMetricFilterCommandOutput>;
  testMetricFilter(
    args: TestMetricFilterCommandInput,
    cb: (err: any, data?: TestMetricFilterCommandOutput) => void
  ): void;
  testMetricFilter(
    args: TestMetricFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestMetricFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link TestTransformerCommand}
   */
  testTransformer(
    args: TestTransformerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestTransformerCommandOutput>;
  testTransformer(args: TestTransformerCommandInput, cb: (err: any, data?: TestTransformerCommandOutput) => void): void;
  testTransformer(
    args: TestTransformerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestTransformerCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagLogGroupCommand}
   */
  untagLogGroup(args: UntagLogGroupCommandInput, options?: __HttpHandlerOptions): Promise<UntagLogGroupCommandOutput>;
  untagLogGroup(args: UntagLogGroupCommandInput, cb: (err: any, data?: UntagLogGroupCommandOutput) => void): void;
  untagLogGroup(
    args: UntagLogGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagLogGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnomalyCommand}
   */
  updateAnomaly(args: UpdateAnomalyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAnomalyCommandOutput>;
  updateAnomaly(args: UpdateAnomalyCommandInput, cb: (err: any, data?: UpdateAnomalyCommandOutput) => void): void;
  updateAnomaly(
    args: UpdateAnomalyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnomalyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDeliveryConfigurationCommand}
   */
  updateDeliveryConfiguration(
    args: UpdateDeliveryConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeliveryConfigurationCommandOutput>;
  updateDeliveryConfiguration(
    args: UpdateDeliveryConfigurationCommandInput,
    cb: (err: any, data?: UpdateDeliveryConfigurationCommandOutput) => void
  ): void;
  updateDeliveryConfiguration(
    args: UpdateDeliveryConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeliveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLogAnomalyDetectorCommand}
   */
  updateLogAnomalyDetector(
    args: UpdateLogAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLogAnomalyDetectorCommandOutput>;
  updateLogAnomalyDetector(
    args: UpdateLogAnomalyDetectorCommandInput,
    cb: (err: any, data?: UpdateLogAnomalyDetectorCommandOutput) => void
  ): void;
  updateLogAnomalyDetector(
    args: UpdateLogAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLogAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScheduledQueryCommand}
   */
  updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScheduledQueryCommandOutput>;
  updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    cb: (err: any, data?: UpdateScheduledQueryCommandOutput) => void
  ): void;
  updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScheduledQueryCommandOutput) => void
  ): void;
}

/**
 * <p>You can use Amazon CloudWatch Logs to monitor, store, and access your log files from
 *       EC2 instances, CloudTrail, and other sources. You can then retrieve the associated
 *       log data from CloudWatch Logs using the CloudWatch console. Alternatively, you can use
 *       CloudWatch Logs commands in the Amazon Web Services CLI, CloudWatch Logs API, or CloudWatch
 *       Logs SDK.</p>
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
 * @public
 */
export class CloudWatchLogs extends CloudWatchLogsClient implements CloudWatchLogs {}
createAggregatedClient(commands, CloudWatchLogs);
