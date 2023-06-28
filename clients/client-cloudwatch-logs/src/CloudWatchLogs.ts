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
  CreateExportTaskCommand,
  CreateExportTaskCommandInput,
  CreateExportTaskCommandOutput,
} from "./commands/CreateExportTaskCommand";
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
  DeleteDestinationCommand,
  DeleteDestinationCommandInput,
  DeleteDestinationCommandOutput,
} from "./commands/DeleteDestinationCommand";
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
  DeleteSubscriptionFilterCommand,
  DeleteSubscriptionFilterCommandInput,
  DeleteSubscriptionFilterCommandOutput,
} from "./commands/DeleteSubscriptionFilterCommand";
import {
  DescribeAccountPoliciesCommand,
  DescribeAccountPoliciesCommandInput,
  DescribeAccountPoliciesCommandOutput,
} from "./commands/DescribeAccountPoliciesCommand";
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
  PutLogEventsCommand,
  PutLogEventsCommandInput,
  PutLogEventsCommandOutput,
} from "./commands/PutLogEventsCommand";
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
  UntagLogGroupCommand,
  UntagLogGroupCommandInput,
  UntagLogGroupCommandOutput,
} from "./commands/UntagLogGroupCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";

const commands = {
  AssociateKmsKeyCommand,
  CancelExportTaskCommand,
  CreateExportTaskCommand,
  CreateLogGroupCommand,
  CreateLogStreamCommand,
  DeleteAccountPolicyCommand,
  DeleteDataProtectionPolicyCommand,
  DeleteDestinationCommand,
  DeleteLogGroupCommand,
  DeleteLogStreamCommand,
  DeleteMetricFilterCommand,
  DeleteQueryDefinitionCommand,
  DeleteResourcePolicyCommand,
  DeleteRetentionPolicyCommand,
  DeleteSubscriptionFilterCommand,
  DescribeAccountPoliciesCommand,
  DescribeDestinationsCommand,
  DescribeExportTasksCommand,
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
  GetLogEventsCommand,
  GetLogGroupFieldsCommand,
  GetLogRecordCommand,
  GetQueryResultsCommand,
  ListTagsForResourceCommand,
  ListTagsLogGroupCommand,
  PutAccountPolicyCommand,
  PutDataProtectionPolicyCommand,
  PutDestinationCommand,
  PutDestinationPolicyCommand,
  PutLogEventsCommand,
  PutMetricFilterCommand,
  PutQueryDefinitionCommand,
  PutResourcePolicyCommand,
  PutRetentionPolicyCommand,
  PutSubscriptionFilterCommand,
  StartQueryCommand,
  StopQueryCommand,
  TagLogGroupCommand,
  TagResourceCommand,
  TestMetricFilterCommand,
  UntagLogGroupCommand,
  UntagResourceCommand,
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
   * @see {@link DescribeDestinationsCommand}
   */
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
   * @see {@link DescribeLogGroupsCommand}
   */
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
}

/**
 * @public
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
 *                   <b>Monitor CloudTrail logged events</b>: You can
 *           create alarms in CloudWatch and receive notifications of particular API activity as
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
 */
export class CloudWatchLogs extends CloudWatchLogsClient implements CloudWatchLogs {}
createAggregatedClient(commands, CloudWatchLogs);
