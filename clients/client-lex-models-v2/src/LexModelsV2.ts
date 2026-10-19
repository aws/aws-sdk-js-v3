// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type BatchCreateCustomVocabularyItemCommandInput,
  type BatchCreateCustomVocabularyItemCommandOutput,
  BatchCreateCustomVocabularyItemCommand,
} from "./commands/BatchCreateCustomVocabularyItemCommand";
import {
  type BatchDeleteCustomVocabularyItemCommandInput,
  type BatchDeleteCustomVocabularyItemCommandOutput,
  BatchDeleteCustomVocabularyItemCommand,
} from "./commands/BatchDeleteCustomVocabularyItemCommand";
import {
  type BatchUpdateCustomVocabularyItemCommandInput,
  type BatchUpdateCustomVocabularyItemCommandOutput,
  BatchUpdateCustomVocabularyItemCommand,
} from "./commands/BatchUpdateCustomVocabularyItemCommand";
import {
  type BuildBotLocaleCommandInput,
  type BuildBotLocaleCommandOutput,
  BuildBotLocaleCommand,
} from "./commands/BuildBotLocaleCommand";
import {
  type CreateBotAliasCommandInput,
  type CreateBotAliasCommandOutput,
  CreateBotAliasCommand,
} from "./commands/CreateBotAliasCommand";
import { type CreateBotCommandInput, type CreateBotCommandOutput, CreateBotCommand } from "./commands/CreateBotCommand";
import {
  type CreateBotLocaleCommandInput,
  type CreateBotLocaleCommandOutput,
  CreateBotLocaleCommand,
} from "./commands/CreateBotLocaleCommand";
import {
  type CreateBotReplicaCommandInput,
  type CreateBotReplicaCommandOutput,
  CreateBotReplicaCommand,
} from "./commands/CreateBotReplicaCommand";
import {
  type CreateBotVersionCommandInput,
  type CreateBotVersionCommandOutput,
  CreateBotVersionCommand,
} from "./commands/CreateBotVersionCommand";
import {
  type CreateExportCommandInput,
  type CreateExportCommandOutput,
  CreateExportCommand,
} from "./commands/CreateExportCommand";
import {
  type CreateIntentCommandInput,
  type CreateIntentCommandOutput,
  CreateIntentCommand,
} from "./commands/CreateIntentCommand";
import {
  type CreateResourcePolicyCommandInput,
  type CreateResourcePolicyCommandOutput,
  CreateResourcePolicyCommand,
} from "./commands/CreateResourcePolicyCommand";
import {
  type CreateResourcePolicyStatementCommandInput,
  type CreateResourcePolicyStatementCommandOutput,
  CreateResourcePolicyStatementCommand,
} from "./commands/CreateResourcePolicyStatementCommand";
import {
  type CreateSlotCommandInput,
  type CreateSlotCommandOutput,
  CreateSlotCommand,
} from "./commands/CreateSlotCommand";
import {
  type CreateSlotTypeCommandInput,
  type CreateSlotTypeCommandOutput,
  CreateSlotTypeCommand,
} from "./commands/CreateSlotTypeCommand";
import {
  type CreateTestSetDiscrepancyReportCommandInput,
  type CreateTestSetDiscrepancyReportCommandOutput,
  CreateTestSetDiscrepancyReportCommand,
} from "./commands/CreateTestSetDiscrepancyReportCommand";
import {
  type CreateUploadUrlCommandInput,
  type CreateUploadUrlCommandOutput,
  CreateUploadUrlCommand,
} from "./commands/CreateUploadUrlCommand";
import {
  type DeleteBotAliasCommandInput,
  type DeleteBotAliasCommandOutput,
  DeleteBotAliasCommand,
} from "./commands/DeleteBotAliasCommand";
import {
  type DeleteBotAnalyzerRecommendationCommandInput,
  type DeleteBotAnalyzerRecommendationCommandOutput,
  DeleteBotAnalyzerRecommendationCommand,
} from "./commands/DeleteBotAnalyzerRecommendationCommand";
import { type DeleteBotCommandInput, type DeleteBotCommandOutput, DeleteBotCommand } from "./commands/DeleteBotCommand";
import {
  type DeleteBotLocaleCommandInput,
  type DeleteBotLocaleCommandOutput,
  DeleteBotLocaleCommand,
} from "./commands/DeleteBotLocaleCommand";
import {
  type DeleteBotReplicaCommandInput,
  type DeleteBotReplicaCommandOutput,
  DeleteBotReplicaCommand,
} from "./commands/DeleteBotReplicaCommand";
import {
  type DeleteBotVersionCommandInput,
  type DeleteBotVersionCommandOutput,
  DeleteBotVersionCommand,
} from "./commands/DeleteBotVersionCommand";
import {
  type DeleteCustomVocabularyCommandInput,
  type DeleteCustomVocabularyCommandOutput,
  DeleteCustomVocabularyCommand,
} from "./commands/DeleteCustomVocabularyCommand";
import {
  type DeleteExportCommandInput,
  type DeleteExportCommandOutput,
  DeleteExportCommand,
} from "./commands/DeleteExportCommand";
import {
  type DeleteImportCommandInput,
  type DeleteImportCommandOutput,
  DeleteImportCommand,
} from "./commands/DeleteImportCommand";
import {
  type DeleteIntentCommandInput,
  type DeleteIntentCommandOutput,
  DeleteIntentCommand,
} from "./commands/DeleteIntentCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteResourcePolicyStatementCommandInput,
  type DeleteResourcePolicyStatementCommandOutput,
  DeleteResourcePolicyStatementCommand,
} from "./commands/DeleteResourcePolicyStatementCommand";
import {
  type DeleteSlotCommandInput,
  type DeleteSlotCommandOutput,
  DeleteSlotCommand,
} from "./commands/DeleteSlotCommand";
import {
  type DeleteSlotTypeCommandInput,
  type DeleteSlotTypeCommandOutput,
  DeleteSlotTypeCommand,
} from "./commands/DeleteSlotTypeCommand";
import {
  type DeleteTestSetCommandInput,
  type DeleteTestSetCommandOutput,
  DeleteTestSetCommand,
} from "./commands/DeleteTestSetCommand";
import {
  type DeleteUtterancesCommandInput,
  type DeleteUtterancesCommandOutput,
  DeleteUtterancesCommand,
} from "./commands/DeleteUtterancesCommand";
import {
  type DescribeBotAliasCommandInput,
  type DescribeBotAliasCommandOutput,
  DescribeBotAliasCommand,
} from "./commands/DescribeBotAliasCommand";
import {
  type DescribeBotAnalyzerRecommendationCommandInput,
  type DescribeBotAnalyzerRecommendationCommandOutput,
  DescribeBotAnalyzerRecommendationCommand,
} from "./commands/DescribeBotAnalyzerRecommendationCommand";
import {
  type DescribeBotCommandInput,
  type DescribeBotCommandOutput,
  DescribeBotCommand,
} from "./commands/DescribeBotCommand";
import {
  type DescribeBotLocaleCommandInput,
  type DescribeBotLocaleCommandOutput,
  DescribeBotLocaleCommand,
} from "./commands/DescribeBotLocaleCommand";
import {
  type DescribeBotRecommendationCommandInput,
  type DescribeBotRecommendationCommandOutput,
  DescribeBotRecommendationCommand,
} from "./commands/DescribeBotRecommendationCommand";
import {
  type DescribeBotReplicaCommandInput,
  type DescribeBotReplicaCommandOutput,
  DescribeBotReplicaCommand,
} from "./commands/DescribeBotReplicaCommand";
import {
  type DescribeBotResourceGenerationCommandInput,
  type DescribeBotResourceGenerationCommandOutput,
  DescribeBotResourceGenerationCommand,
} from "./commands/DescribeBotResourceGenerationCommand";
import {
  type DescribeBotVersionCommandInput,
  type DescribeBotVersionCommandOutput,
  DescribeBotVersionCommand,
} from "./commands/DescribeBotVersionCommand";
import {
  type DescribeCustomVocabularyMetadataCommandInput,
  type DescribeCustomVocabularyMetadataCommandOutput,
  DescribeCustomVocabularyMetadataCommand,
} from "./commands/DescribeCustomVocabularyMetadataCommand";
import {
  type DescribeExportCommandInput,
  type DescribeExportCommandOutput,
  DescribeExportCommand,
} from "./commands/DescribeExportCommand";
import {
  type DescribeImportCommandInput,
  type DescribeImportCommandOutput,
  DescribeImportCommand,
} from "./commands/DescribeImportCommand";
import {
  type DescribeIntentCommandInput,
  type DescribeIntentCommandOutput,
  DescribeIntentCommand,
} from "./commands/DescribeIntentCommand";
import {
  type DescribeResourcePolicyCommandInput,
  type DescribeResourcePolicyCommandOutput,
  DescribeResourcePolicyCommand,
} from "./commands/DescribeResourcePolicyCommand";
import {
  type DescribeSlotCommandInput,
  type DescribeSlotCommandOutput,
  DescribeSlotCommand,
} from "./commands/DescribeSlotCommand";
import {
  type DescribeSlotTypeCommandInput,
  type DescribeSlotTypeCommandOutput,
  DescribeSlotTypeCommand,
} from "./commands/DescribeSlotTypeCommand";
import {
  type DescribeTestExecutionCommandInput,
  type DescribeTestExecutionCommandOutput,
  DescribeTestExecutionCommand,
} from "./commands/DescribeTestExecutionCommand";
import {
  type DescribeTestSetCommandInput,
  type DescribeTestSetCommandOutput,
  DescribeTestSetCommand,
} from "./commands/DescribeTestSetCommand";
import {
  type DescribeTestSetDiscrepancyReportCommandInput,
  type DescribeTestSetDiscrepancyReportCommandOutput,
  DescribeTestSetDiscrepancyReportCommand,
} from "./commands/DescribeTestSetDiscrepancyReportCommand";
import {
  type DescribeTestSetGenerationCommandInput,
  type DescribeTestSetGenerationCommandOutput,
  DescribeTestSetGenerationCommand,
} from "./commands/DescribeTestSetGenerationCommand";
import {
  type GenerateBotElementCommandInput,
  type GenerateBotElementCommandOutput,
  GenerateBotElementCommand,
} from "./commands/GenerateBotElementCommand";
import {
  type GetTestExecutionArtifactsUrlCommandInput,
  type GetTestExecutionArtifactsUrlCommandOutput,
  GetTestExecutionArtifactsUrlCommand,
} from "./commands/GetTestExecutionArtifactsUrlCommand";
import {
  type ListAggregatedUtterancesCommandInput,
  type ListAggregatedUtterancesCommandOutput,
  ListAggregatedUtterancesCommand,
} from "./commands/ListAggregatedUtterancesCommand";
import {
  type ListBotAliasesCommandInput,
  type ListBotAliasesCommandOutput,
  ListBotAliasesCommand,
} from "./commands/ListBotAliasesCommand";
import {
  type ListBotAliasReplicasCommandInput,
  type ListBotAliasReplicasCommandOutput,
  ListBotAliasReplicasCommand,
} from "./commands/ListBotAliasReplicasCommand";
import {
  type ListBotAnalyzerHistoryCommandInput,
  type ListBotAnalyzerHistoryCommandOutput,
  ListBotAnalyzerHistoryCommand,
} from "./commands/ListBotAnalyzerHistoryCommand";
import {
  type ListBotLocalesCommandInput,
  type ListBotLocalesCommandOutput,
  ListBotLocalesCommand,
} from "./commands/ListBotLocalesCommand";
import {
  type ListBotRecommendationsCommandInput,
  type ListBotRecommendationsCommandOutput,
  ListBotRecommendationsCommand,
} from "./commands/ListBotRecommendationsCommand";
import {
  type ListBotReplicasCommandInput,
  type ListBotReplicasCommandOutput,
  ListBotReplicasCommand,
} from "./commands/ListBotReplicasCommand";
import {
  type ListBotResourceGenerationsCommandInput,
  type ListBotResourceGenerationsCommandOutput,
  ListBotResourceGenerationsCommand,
} from "./commands/ListBotResourceGenerationsCommand";
import { type ListBotsCommandInput, type ListBotsCommandOutput, ListBotsCommand } from "./commands/ListBotsCommand";
import {
  type ListBotVersionReplicasCommandInput,
  type ListBotVersionReplicasCommandOutput,
  ListBotVersionReplicasCommand,
} from "./commands/ListBotVersionReplicasCommand";
import {
  type ListBotVersionsCommandInput,
  type ListBotVersionsCommandOutput,
  ListBotVersionsCommand,
} from "./commands/ListBotVersionsCommand";
import {
  type ListBuiltInIntentsCommandInput,
  type ListBuiltInIntentsCommandOutput,
  ListBuiltInIntentsCommand,
} from "./commands/ListBuiltInIntentsCommand";
import {
  type ListBuiltInSlotTypesCommandInput,
  type ListBuiltInSlotTypesCommandOutput,
  ListBuiltInSlotTypesCommand,
} from "./commands/ListBuiltInSlotTypesCommand";
import {
  type ListCustomVocabularyItemsCommandInput,
  type ListCustomVocabularyItemsCommandOutput,
  ListCustomVocabularyItemsCommand,
} from "./commands/ListCustomVocabularyItemsCommand";
import {
  type ListExportsCommandInput,
  type ListExportsCommandOutput,
  ListExportsCommand,
} from "./commands/ListExportsCommand";
import {
  type ListImportsCommandInput,
  type ListImportsCommandOutput,
  ListImportsCommand,
} from "./commands/ListImportsCommand";
import {
  type ListIntentMetricsCommandInput,
  type ListIntentMetricsCommandOutput,
  ListIntentMetricsCommand,
} from "./commands/ListIntentMetricsCommand";
import {
  type ListIntentPathsCommandInput,
  type ListIntentPathsCommandOutput,
  ListIntentPathsCommand,
} from "./commands/ListIntentPathsCommand";
import {
  type ListIntentsCommandInput,
  type ListIntentsCommandOutput,
  ListIntentsCommand,
} from "./commands/ListIntentsCommand";
import {
  type ListIntentStageMetricsCommandInput,
  type ListIntentStageMetricsCommandOutput,
  ListIntentStageMetricsCommand,
} from "./commands/ListIntentStageMetricsCommand";
import {
  type ListRecommendedIntentsCommandInput,
  type ListRecommendedIntentsCommandOutput,
  ListRecommendedIntentsCommand,
} from "./commands/ListRecommendedIntentsCommand";
import {
  type ListSessionAnalyticsDataCommandInput,
  type ListSessionAnalyticsDataCommandOutput,
  ListSessionAnalyticsDataCommand,
} from "./commands/ListSessionAnalyticsDataCommand";
import {
  type ListSessionMetricsCommandInput,
  type ListSessionMetricsCommandOutput,
  ListSessionMetricsCommand,
} from "./commands/ListSessionMetricsCommand";
import { type ListSlotsCommandInput, type ListSlotsCommandOutput, ListSlotsCommand } from "./commands/ListSlotsCommand";
import {
  type ListSlotTypesCommandInput,
  type ListSlotTypesCommandOutput,
  ListSlotTypesCommand,
} from "./commands/ListSlotTypesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTestExecutionResultItemsCommandInput,
  type ListTestExecutionResultItemsCommandOutput,
  ListTestExecutionResultItemsCommand,
} from "./commands/ListTestExecutionResultItemsCommand";
import {
  type ListTestExecutionsCommandInput,
  type ListTestExecutionsCommandOutput,
  ListTestExecutionsCommand,
} from "./commands/ListTestExecutionsCommand";
import {
  type ListTestSetRecordsCommandInput,
  type ListTestSetRecordsCommandOutput,
  ListTestSetRecordsCommand,
} from "./commands/ListTestSetRecordsCommand";
import {
  type ListTestSetsCommandInput,
  type ListTestSetsCommandOutput,
  ListTestSetsCommand,
} from "./commands/ListTestSetsCommand";
import {
  type ListUtteranceAnalyticsDataCommandInput,
  type ListUtteranceAnalyticsDataCommandOutput,
  ListUtteranceAnalyticsDataCommand,
} from "./commands/ListUtteranceAnalyticsDataCommand";
import {
  type ListUtteranceMetricsCommandInput,
  type ListUtteranceMetricsCommandOutput,
  ListUtteranceMetricsCommand,
} from "./commands/ListUtteranceMetricsCommand";
import {
  type SearchAssociatedTranscriptsCommandInput,
  type SearchAssociatedTranscriptsCommandOutput,
  SearchAssociatedTranscriptsCommand,
} from "./commands/SearchAssociatedTranscriptsCommand";
import {
  type StartBotAnalyzerCommandInput,
  type StartBotAnalyzerCommandOutput,
  StartBotAnalyzerCommand,
} from "./commands/StartBotAnalyzerCommand";
import {
  type StartBotRecommendationCommandInput,
  type StartBotRecommendationCommandOutput,
  StartBotRecommendationCommand,
} from "./commands/StartBotRecommendationCommand";
import {
  type StartBotResourceGenerationCommandInput,
  type StartBotResourceGenerationCommandOutput,
  StartBotResourceGenerationCommand,
} from "./commands/StartBotResourceGenerationCommand";
import {
  type StartImportCommandInput,
  type StartImportCommandOutput,
  StartImportCommand,
} from "./commands/StartImportCommand";
import {
  type StartTestExecutionCommandInput,
  type StartTestExecutionCommandOutput,
  StartTestExecutionCommand,
} from "./commands/StartTestExecutionCommand";
import {
  type StartTestSetGenerationCommandInput,
  type StartTestSetGenerationCommandOutput,
  StartTestSetGenerationCommand,
} from "./commands/StartTestSetGenerationCommand";
import {
  type StopBotAnalyzerCommandInput,
  type StopBotAnalyzerCommandOutput,
  StopBotAnalyzerCommand,
} from "./commands/StopBotAnalyzerCommand";
import {
  type StopBotRecommendationCommandInput,
  type StopBotRecommendationCommandOutput,
  StopBotRecommendationCommand,
} from "./commands/StopBotRecommendationCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateBotAliasCommandInput,
  type UpdateBotAliasCommandOutput,
  UpdateBotAliasCommand,
} from "./commands/UpdateBotAliasCommand";
import { type UpdateBotCommandInput, type UpdateBotCommandOutput, UpdateBotCommand } from "./commands/UpdateBotCommand";
import {
  type UpdateBotLocaleCommandInput,
  type UpdateBotLocaleCommandOutput,
  UpdateBotLocaleCommand,
} from "./commands/UpdateBotLocaleCommand";
import {
  type UpdateBotRecommendationCommandInput,
  type UpdateBotRecommendationCommandOutput,
  UpdateBotRecommendationCommand,
} from "./commands/UpdateBotRecommendationCommand";
import {
  type UpdateExportCommandInput,
  type UpdateExportCommandOutput,
  UpdateExportCommand,
} from "./commands/UpdateExportCommand";
import {
  type UpdateIntentCommandInput,
  type UpdateIntentCommandOutput,
  UpdateIntentCommand,
} from "./commands/UpdateIntentCommand";
import {
  type UpdateResourcePolicyCommandInput,
  type UpdateResourcePolicyCommandOutput,
  UpdateResourcePolicyCommand,
} from "./commands/UpdateResourcePolicyCommand";
import {
  type UpdateSlotCommandInput,
  type UpdateSlotCommandOutput,
  UpdateSlotCommand,
} from "./commands/UpdateSlotCommand";
import {
  type UpdateSlotTypeCommandInput,
  type UpdateSlotTypeCommandOutput,
  UpdateSlotTypeCommand,
} from "./commands/UpdateSlotTypeCommand";
import {
  type UpdateTestSetCommandInput,
  type UpdateTestSetCommandOutput,
  UpdateTestSetCommand,
} from "./commands/UpdateTestSetCommand";
import { LexModelsV2Client } from "./LexModelsV2Client";
import type { LexModelsV2ServiceException } from "./models/LexModelsV2ServiceException";
import { paginateDescribeBotAnalyzerRecommendation } from "./pagination/DescribeBotAnalyzerRecommendationPaginator";
import { paginateListAggregatedUtterances } from "./pagination/ListAggregatedUtterancesPaginator";
import { paginateListBotAliases } from "./pagination/ListBotAliasesPaginator";
import { paginateListBotAliasReplicas } from "./pagination/ListBotAliasReplicasPaginator";
import { paginateListBotAnalyzerHistory } from "./pagination/ListBotAnalyzerHistoryPaginator";
import { paginateListBotLocales } from "./pagination/ListBotLocalesPaginator";
import { paginateListBotRecommendations } from "./pagination/ListBotRecommendationsPaginator";
import { paginateListBotResourceGenerations } from "./pagination/ListBotResourceGenerationsPaginator";
import { paginateListBots } from "./pagination/ListBotsPaginator";
import { paginateListBotVersionReplicas } from "./pagination/ListBotVersionReplicasPaginator";
import { paginateListBotVersions } from "./pagination/ListBotVersionsPaginator";
import { paginateListBuiltInIntents } from "./pagination/ListBuiltInIntentsPaginator";
import { paginateListBuiltInSlotTypes } from "./pagination/ListBuiltInSlotTypesPaginator";
import { paginateListCustomVocabularyItems } from "./pagination/ListCustomVocabularyItemsPaginator";
import { paginateListExports } from "./pagination/ListExportsPaginator";
import { paginateListImports } from "./pagination/ListImportsPaginator";
import { paginateListIntentMetrics } from "./pagination/ListIntentMetricsPaginator";
import { paginateListIntents } from "./pagination/ListIntentsPaginator";
import { paginateListIntentStageMetrics } from "./pagination/ListIntentStageMetricsPaginator";
import { paginateListRecommendedIntents } from "./pagination/ListRecommendedIntentsPaginator";
import { paginateListSessionAnalyticsData } from "./pagination/ListSessionAnalyticsDataPaginator";
import { paginateListSessionMetrics } from "./pagination/ListSessionMetricsPaginator";
import { paginateListSlots } from "./pagination/ListSlotsPaginator";
import { paginateListSlotTypes } from "./pagination/ListSlotTypesPaginator";
import { paginateListTestExecutionResultItems } from "./pagination/ListTestExecutionResultItemsPaginator";
import { paginateListTestExecutions } from "./pagination/ListTestExecutionsPaginator";
import { paginateListTestSetRecords } from "./pagination/ListTestSetRecordsPaginator";
import { paginateListTestSets } from "./pagination/ListTestSetsPaginator";
import { paginateListUtteranceAnalyticsData } from "./pagination/ListUtteranceAnalyticsDataPaginator";
import { paginateListUtteranceMetrics } from "./pagination/ListUtteranceMetricsPaginator";
import { waitUntilBotAliasAvailable } from "./waiters/waitForBotAliasAvailable";
import { waitUntilBotAvailable } from "./waiters/waitForBotAvailable";
import { waitUntilBotExportCompleted } from "./waiters/waitForBotExportCompleted";
import { waitUntilBotImportCompleted } from "./waiters/waitForBotImportCompleted";
import { waitUntilBotLocaleBuilt } from "./waiters/waitForBotLocaleBuilt";
import { waitUntilBotLocaleCreated } from "./waiters/waitForBotLocaleCreated";
import { waitUntilBotLocaleExpressTestingAvailable } from "./waiters/waitForBotLocaleExpressTestingAvailable";
import { waitUntilBotVersionAvailable } from "./waiters/waitForBotVersionAvailable";

const commands = {
  BatchCreateCustomVocabularyItemCommand,
  BatchDeleteCustomVocabularyItemCommand,
  BatchUpdateCustomVocabularyItemCommand,
  BuildBotLocaleCommand,
  CreateBotCommand,
  CreateBotAliasCommand,
  CreateBotLocaleCommand,
  CreateBotReplicaCommand,
  CreateBotVersionCommand,
  CreateExportCommand,
  CreateIntentCommand,
  CreateResourcePolicyCommand,
  CreateResourcePolicyStatementCommand,
  CreateSlotCommand,
  CreateSlotTypeCommand,
  CreateTestSetDiscrepancyReportCommand,
  CreateUploadUrlCommand,
  DeleteBotCommand,
  DeleteBotAliasCommand,
  DeleteBotAnalyzerRecommendationCommand,
  DeleteBotLocaleCommand,
  DeleteBotReplicaCommand,
  DeleteBotVersionCommand,
  DeleteCustomVocabularyCommand,
  DeleteExportCommand,
  DeleteImportCommand,
  DeleteIntentCommand,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyStatementCommand,
  DeleteSlotCommand,
  DeleteSlotTypeCommand,
  DeleteTestSetCommand,
  DeleteUtterancesCommand,
  DescribeBotCommand,
  DescribeBotAliasCommand,
  DescribeBotAnalyzerRecommendationCommand,
  DescribeBotLocaleCommand,
  DescribeBotRecommendationCommand,
  DescribeBotReplicaCommand,
  DescribeBotResourceGenerationCommand,
  DescribeBotVersionCommand,
  DescribeCustomVocabularyMetadataCommand,
  DescribeExportCommand,
  DescribeImportCommand,
  DescribeIntentCommand,
  DescribeResourcePolicyCommand,
  DescribeSlotCommand,
  DescribeSlotTypeCommand,
  DescribeTestExecutionCommand,
  DescribeTestSetCommand,
  DescribeTestSetDiscrepancyReportCommand,
  DescribeTestSetGenerationCommand,
  GenerateBotElementCommand,
  GetTestExecutionArtifactsUrlCommand,
  ListAggregatedUtterancesCommand,
  ListBotAliasesCommand,
  ListBotAliasReplicasCommand,
  ListBotAnalyzerHistoryCommand,
  ListBotLocalesCommand,
  ListBotRecommendationsCommand,
  ListBotReplicasCommand,
  ListBotResourceGenerationsCommand,
  ListBotsCommand,
  ListBotVersionReplicasCommand,
  ListBotVersionsCommand,
  ListBuiltInIntentsCommand,
  ListBuiltInSlotTypesCommand,
  ListCustomVocabularyItemsCommand,
  ListExportsCommand,
  ListImportsCommand,
  ListIntentMetricsCommand,
  ListIntentPathsCommand,
  ListIntentsCommand,
  ListIntentStageMetricsCommand,
  ListRecommendedIntentsCommand,
  ListSessionAnalyticsDataCommand,
  ListSessionMetricsCommand,
  ListSlotsCommand,
  ListSlotTypesCommand,
  ListTagsForResourceCommand,
  ListTestExecutionResultItemsCommand,
  ListTestExecutionsCommand,
  ListTestSetRecordsCommand,
  ListTestSetsCommand,
  ListUtteranceAnalyticsDataCommand,
  ListUtteranceMetricsCommand,
  SearchAssociatedTranscriptsCommand,
  StartBotAnalyzerCommand,
  StartBotRecommendationCommand,
  StartBotResourceGenerationCommand,
  StartImportCommand,
  StartTestExecutionCommand,
  StartTestSetGenerationCommand,
  StopBotAnalyzerCommand,
  StopBotRecommendationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBotCommand,
  UpdateBotAliasCommand,
  UpdateBotLocaleCommand,
  UpdateBotRecommendationCommand,
  UpdateExportCommand,
  UpdateIntentCommand,
  UpdateResourcePolicyCommand,
  UpdateSlotCommand,
  UpdateSlotTypeCommand,
  UpdateTestSetCommand,
};
const paginators = {
  paginateDescribeBotAnalyzerRecommendation,
  paginateListAggregatedUtterances,
  paginateListBotAliases,
  paginateListBotAliasReplicas,
  paginateListBotAnalyzerHistory,
  paginateListBotLocales,
  paginateListBotRecommendations,
  paginateListBotResourceGenerations,
  paginateListBots,
  paginateListBotVersionReplicas,
  paginateListBotVersions,
  paginateListBuiltInIntents,
  paginateListBuiltInSlotTypes,
  paginateListCustomVocabularyItems,
  paginateListExports,
  paginateListImports,
  paginateListIntentMetrics,
  paginateListIntents,
  paginateListIntentStageMetrics,
  paginateListRecommendedIntents,
  paginateListSessionAnalyticsData,
  paginateListSessionMetrics,
  paginateListSlots,
  paginateListSlotTypes,
  paginateListTestExecutionResultItems,
  paginateListTestExecutions,
  paginateListTestSetRecords,
  paginateListTestSets,
  paginateListUtteranceAnalyticsData,
  paginateListUtteranceMetrics,
};
const waiters = {
  waitUntilBotAvailable,
  waitUntilBotAliasAvailable,
  waitUntilBotLocaleBuilt,
  waitUntilBotLocaleCreated,
  waitUntilBotLocaleExpressTestingAvailable,
  waitUntilBotVersionAvailable,
  waitUntilBotExportCompleted,
  waitUntilBotImportCompleted,
};

/**
 * @public
 */
export interface LexModelsV2RequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface LexModelsV2 {
  /**
   * @see {@link BatchCreateCustomVocabularyItemCommand}
   */
  batchCreateCustomVocabularyItem(
    args: BatchCreateCustomVocabularyItemCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<BatchCreateCustomVocabularyItemCommandOutput>;
  batchCreateCustomVocabularyItem(
    args: BatchCreateCustomVocabularyItemCommandInput,
    cb: (err: any, data?: BatchCreateCustomVocabularyItemCommandOutput) => void
  ): void;
  batchCreateCustomVocabularyItem(
    args: BatchCreateCustomVocabularyItemCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: BatchCreateCustomVocabularyItemCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteCustomVocabularyItemCommand}
   */
  batchDeleteCustomVocabularyItem(
    args: BatchDeleteCustomVocabularyItemCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<BatchDeleteCustomVocabularyItemCommandOutput>;
  batchDeleteCustomVocabularyItem(
    args: BatchDeleteCustomVocabularyItemCommandInput,
    cb: (err: any, data?: BatchDeleteCustomVocabularyItemCommandOutput) => void
  ): void;
  batchDeleteCustomVocabularyItem(
    args: BatchDeleteCustomVocabularyItemCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: BatchDeleteCustomVocabularyItemCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateCustomVocabularyItemCommand}
   */
  batchUpdateCustomVocabularyItem(
    args: BatchUpdateCustomVocabularyItemCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<BatchUpdateCustomVocabularyItemCommandOutput>;
  batchUpdateCustomVocabularyItem(
    args: BatchUpdateCustomVocabularyItemCommandInput,
    cb: (err: any, data?: BatchUpdateCustomVocabularyItemCommandOutput) => void
  ): void;
  batchUpdateCustomVocabularyItem(
    args: BatchUpdateCustomVocabularyItemCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: BatchUpdateCustomVocabularyItemCommandOutput) => void
  ): void;

  /**
   * @see {@link BuildBotLocaleCommand}
   */
  buildBotLocale(
    args: BuildBotLocaleCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<BuildBotLocaleCommandOutput>;
  buildBotLocale(
    args: BuildBotLocaleCommandInput,
    cb: (err: any, data?: BuildBotLocaleCommandOutput) => void
  ): void;
  buildBotLocale(
    args: BuildBotLocaleCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: BuildBotLocaleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBotCommand}
   */
  createBot(
    args: CreateBotCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<CreateBotCommandOutput>;
  createBot(
    args: CreateBotCommandInput,
    cb: (err: any, data?: CreateBotCommandOutput) => void
  ): void;
  createBot(
    args: CreateBotCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: CreateBotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBotAliasCommand}
   */
  createBotAlias(
    args: CreateBotAliasCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<CreateBotAliasCommandOutput>;
  createBotAlias(
    args: CreateBotAliasCommandInput,
    cb: (err: any, data?: CreateBotAliasCommandOutput) => void
  ): void;
  createBotAlias(
    args: CreateBotAliasCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: CreateBotAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBotLocaleCommand}
   */
  createBotLocale(
    args: CreateBotLocaleCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<CreateBotLocaleCommandOutput>;
  createBotLocale(
    args: CreateBotLocaleCommandInput,
    cb: (err: any, data?: CreateBotLocaleCommandOutput) => void
  ): void;
  createBotLocale(
    args: CreateBotLocaleCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: CreateBotLocaleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBotReplicaCommand}
   */
  createBotReplica(
    args: CreateBotReplicaCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<CreateBotReplicaCommandOutput>;
  createBotReplica(
    args: CreateBotReplicaCommandInput,
    cb: (err: any, data?: CreateBotReplicaCommandOutput) => void
  ): void;
  createBotReplica(
    args: CreateBotReplicaCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: CreateBotReplicaCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBotVersionCommand}
   */
  createBotVersion(
    args: CreateBotVersionCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<CreateBotVersionCommandOutput>;
  createBotVersion(
    args: CreateBotVersionCommandInput,
    cb: (err: any, data?: CreateBotVersionCommandOutput) => void
  ): void;
  createBotVersion(
    args: CreateBotVersionCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: CreateBotVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExportCommand}
   */
  createExport(
    args: CreateExportCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<CreateExportCommandOutput>;
  createExport(
    args: CreateExportCommandInput,
    cb: (err: any, data?: CreateExportCommandOutput) => void
  ): void;
  createExport(
    args: CreateExportCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: CreateExportCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntentCommand}
   */
  createIntent(
    args: CreateIntentCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<CreateIntentCommandOutput>;
  createIntent(
    args: CreateIntentCommandInput,
    cb: (err: any, data?: CreateIntentCommandOutput) => void
  ): void;
  createIntent(
    args: CreateIntentCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: CreateIntentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourcePolicyCommand}
   */
  createResourcePolicy(
    args: CreateResourcePolicyCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<CreateResourcePolicyCommandOutput>;
  createResourcePolicy(
    args: CreateResourcePolicyCommandInput,
    cb: (err: any, data?: CreateResourcePolicyCommandOutput) => void
  ): void;
  createResourcePolicy(
    args: CreateResourcePolicyCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: CreateResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourcePolicyStatementCommand}
   */
  createResourcePolicyStatement(
    args: CreateResourcePolicyStatementCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<CreateResourcePolicyStatementCommandOutput>;
  createResourcePolicyStatement(
    args: CreateResourcePolicyStatementCommandInput,
    cb: (err: any, data?: CreateResourcePolicyStatementCommandOutput) => void
  ): void;
  createResourcePolicyStatement(
    args: CreateResourcePolicyStatementCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: CreateResourcePolicyStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSlotCommand}
   */
  createSlot(
    args: CreateSlotCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<CreateSlotCommandOutput>;
  createSlot(
    args: CreateSlotCommandInput,
    cb: (err: any, data?: CreateSlotCommandOutput) => void
  ): void;
  createSlot(
    args: CreateSlotCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: CreateSlotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSlotTypeCommand}
   */
  createSlotType(
    args: CreateSlotTypeCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<CreateSlotTypeCommandOutput>;
  createSlotType(
    args: CreateSlotTypeCommandInput,
    cb: (err: any, data?: CreateSlotTypeCommandOutput) => void
  ): void;
  createSlotType(
    args: CreateSlotTypeCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: CreateSlotTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTestSetDiscrepancyReportCommand}
   */
  createTestSetDiscrepancyReport(
    args: CreateTestSetDiscrepancyReportCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<CreateTestSetDiscrepancyReportCommandOutput>;
  createTestSetDiscrepancyReport(
    args: CreateTestSetDiscrepancyReportCommandInput,
    cb: (err: any, data?: CreateTestSetDiscrepancyReportCommandOutput) => void
  ): void;
  createTestSetDiscrepancyReport(
    args: CreateTestSetDiscrepancyReportCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: CreateTestSetDiscrepancyReportCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUploadUrlCommand}
   */
  createUploadUrl(): Promise<CreateUploadUrlCommandOutput>;
  createUploadUrl(
    args: CreateUploadUrlCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<CreateUploadUrlCommandOutput>;
  createUploadUrl(
    args: CreateUploadUrlCommandInput,
    cb: (err: any, data?: CreateUploadUrlCommandOutput) => void
  ): void;
  createUploadUrl(
    args: CreateUploadUrlCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: CreateUploadUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBotCommand}
   */
  deleteBot(
    args: DeleteBotCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteBotCommandOutput>;
  deleteBot(
    args: DeleteBotCommandInput,
    cb: (err: any, data?: DeleteBotCommandOutput) => void
  ): void;
  deleteBot(
    args: DeleteBotCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteBotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBotAliasCommand}
   */
  deleteBotAlias(
    args: DeleteBotAliasCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteBotAliasCommandOutput>;
  deleteBotAlias(
    args: DeleteBotAliasCommandInput,
    cb: (err: any, data?: DeleteBotAliasCommandOutput) => void
  ): void;
  deleteBotAlias(
    args: DeleteBotAliasCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteBotAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBotAnalyzerRecommendationCommand}
   */
  deleteBotAnalyzerRecommendation(
    args: DeleteBotAnalyzerRecommendationCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteBotAnalyzerRecommendationCommandOutput>;
  deleteBotAnalyzerRecommendation(
    args: DeleteBotAnalyzerRecommendationCommandInput,
    cb: (err: any, data?: DeleteBotAnalyzerRecommendationCommandOutput) => void
  ): void;
  deleteBotAnalyzerRecommendation(
    args: DeleteBotAnalyzerRecommendationCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteBotAnalyzerRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBotLocaleCommand}
   */
  deleteBotLocale(
    args: DeleteBotLocaleCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteBotLocaleCommandOutput>;
  deleteBotLocale(
    args: DeleteBotLocaleCommandInput,
    cb: (err: any, data?: DeleteBotLocaleCommandOutput) => void
  ): void;
  deleteBotLocale(
    args: DeleteBotLocaleCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteBotLocaleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBotReplicaCommand}
   */
  deleteBotReplica(
    args: DeleteBotReplicaCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteBotReplicaCommandOutput>;
  deleteBotReplica(
    args: DeleteBotReplicaCommandInput,
    cb: (err: any, data?: DeleteBotReplicaCommandOutput) => void
  ): void;
  deleteBotReplica(
    args: DeleteBotReplicaCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteBotReplicaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBotVersionCommand}
   */
  deleteBotVersion(
    args: DeleteBotVersionCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteBotVersionCommandOutput>;
  deleteBotVersion(
    args: DeleteBotVersionCommandInput,
    cb: (err: any, data?: DeleteBotVersionCommandOutput) => void
  ): void;
  deleteBotVersion(
    args: DeleteBotVersionCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteBotVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomVocabularyCommand}
   */
  deleteCustomVocabulary(
    args: DeleteCustomVocabularyCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteCustomVocabularyCommandOutput>;
  deleteCustomVocabulary(
    args: DeleteCustomVocabularyCommandInput,
    cb: (err: any, data?: DeleteCustomVocabularyCommandOutput) => void
  ): void;
  deleteCustomVocabulary(
    args: DeleteCustomVocabularyCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteCustomVocabularyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExportCommand}
   */
  deleteExport(
    args: DeleteExportCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteExportCommandOutput>;
  deleteExport(
    args: DeleteExportCommandInput,
    cb: (err: any, data?: DeleteExportCommandOutput) => void
  ): void;
  deleteExport(
    args: DeleteExportCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImportCommand}
   */
  deleteImport(
    args: DeleteImportCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteImportCommandOutput>;
  deleteImport(
    args: DeleteImportCommandInput,
    cb: (err: any, data?: DeleteImportCommandOutput) => void
  ): void;
  deleteImport(
    args: DeleteImportCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteImportCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntentCommand}
   */
  deleteIntent(
    args: DeleteIntentCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteIntentCommandOutput>;
  deleteIntent(
    args: DeleteIntentCommandInput,
    cb: (err: any, data?: DeleteIntentCommandOutput) => void
  ): void;
  deleteIntent(
    args: DeleteIntentCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteIntentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyStatementCommand}
   */
  deleteResourcePolicyStatement(
    args: DeleteResourcePolicyStatementCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteResourcePolicyStatementCommandOutput>;
  deleteResourcePolicyStatement(
    args: DeleteResourcePolicyStatementCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyStatementCommandOutput) => void
  ): void;
  deleteResourcePolicyStatement(
    args: DeleteResourcePolicyStatementCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSlotCommand}
   */
  deleteSlot(
    args: DeleteSlotCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteSlotCommandOutput>;
  deleteSlot(
    args: DeleteSlotCommandInput,
    cb: (err: any, data?: DeleteSlotCommandOutput) => void
  ): void;
  deleteSlot(
    args: DeleteSlotCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteSlotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSlotTypeCommand}
   */
  deleteSlotType(
    args: DeleteSlotTypeCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteSlotTypeCommandOutput>;
  deleteSlotType(
    args: DeleteSlotTypeCommandInput,
    cb: (err: any, data?: DeleteSlotTypeCommandOutput) => void
  ): void;
  deleteSlotType(
    args: DeleteSlotTypeCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteSlotTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTestSetCommand}
   */
  deleteTestSet(
    args: DeleteTestSetCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteTestSetCommandOutput>;
  deleteTestSet(
    args: DeleteTestSetCommandInput,
    cb: (err: any, data?: DeleteTestSetCommandOutput) => void
  ): void;
  deleteTestSet(
    args: DeleteTestSetCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteTestSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUtterancesCommand}
   */
  deleteUtterances(
    args: DeleteUtterancesCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DeleteUtterancesCommandOutput>;
  deleteUtterances(
    args: DeleteUtterancesCommandInput,
    cb: (err: any, data?: DeleteUtterancesCommandOutput) => void
  ): void;
  deleteUtterances(
    args: DeleteUtterancesCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DeleteUtterancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBotCommand}
   */
  describeBot(
    args: DescribeBotCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeBotCommandOutput>;
  describeBot(
    args: DescribeBotCommandInput,
    cb: (err: any, data?: DescribeBotCommandOutput) => void
  ): void;
  describeBot(
    args: DescribeBotCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeBotCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBotAliasCommand}
   */
  describeBotAlias(
    args: DescribeBotAliasCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeBotAliasCommandOutput>;
  describeBotAlias(
    args: DescribeBotAliasCommandInput,
    cb: (err: any, data?: DescribeBotAliasCommandOutput) => void
  ): void;
  describeBotAlias(
    args: DescribeBotAliasCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeBotAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBotAnalyzerRecommendationCommand}
   */
  describeBotAnalyzerRecommendation(
    args: DescribeBotAnalyzerRecommendationCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeBotAnalyzerRecommendationCommandOutput>;
  describeBotAnalyzerRecommendation(
    args: DescribeBotAnalyzerRecommendationCommandInput,
    cb: (err: any, data?: DescribeBotAnalyzerRecommendationCommandOutput) => void
  ): void;
  describeBotAnalyzerRecommendation(
    args: DescribeBotAnalyzerRecommendationCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeBotAnalyzerRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBotLocaleCommand}
   */
  describeBotLocale(
    args: DescribeBotLocaleCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeBotLocaleCommandOutput>;
  describeBotLocale(
    args: DescribeBotLocaleCommandInput,
    cb: (err: any, data?: DescribeBotLocaleCommandOutput) => void
  ): void;
  describeBotLocale(
    args: DescribeBotLocaleCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeBotLocaleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBotRecommendationCommand}
   */
  describeBotRecommendation(
    args: DescribeBotRecommendationCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeBotRecommendationCommandOutput>;
  describeBotRecommendation(
    args: DescribeBotRecommendationCommandInput,
    cb: (err: any, data?: DescribeBotRecommendationCommandOutput) => void
  ): void;
  describeBotRecommendation(
    args: DescribeBotRecommendationCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeBotRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBotReplicaCommand}
   */
  describeBotReplica(
    args: DescribeBotReplicaCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeBotReplicaCommandOutput>;
  describeBotReplica(
    args: DescribeBotReplicaCommandInput,
    cb: (err: any, data?: DescribeBotReplicaCommandOutput) => void
  ): void;
  describeBotReplica(
    args: DescribeBotReplicaCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeBotReplicaCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBotResourceGenerationCommand}
   */
  describeBotResourceGeneration(
    args: DescribeBotResourceGenerationCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeBotResourceGenerationCommandOutput>;
  describeBotResourceGeneration(
    args: DescribeBotResourceGenerationCommandInput,
    cb: (err: any, data?: DescribeBotResourceGenerationCommandOutput) => void
  ): void;
  describeBotResourceGeneration(
    args: DescribeBotResourceGenerationCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeBotResourceGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBotVersionCommand}
   */
  describeBotVersion(
    args: DescribeBotVersionCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeBotVersionCommandOutput>;
  describeBotVersion(
    args: DescribeBotVersionCommandInput,
    cb: (err: any, data?: DescribeBotVersionCommandOutput) => void
  ): void;
  describeBotVersion(
    args: DescribeBotVersionCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeBotVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomVocabularyMetadataCommand}
   */
  describeCustomVocabularyMetadata(
    args: DescribeCustomVocabularyMetadataCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeCustomVocabularyMetadataCommandOutput>;
  describeCustomVocabularyMetadata(
    args: DescribeCustomVocabularyMetadataCommandInput,
    cb: (err: any, data?: DescribeCustomVocabularyMetadataCommandOutput) => void
  ): void;
  describeCustomVocabularyMetadata(
    args: DescribeCustomVocabularyMetadataCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeCustomVocabularyMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExportCommand}
   */
  describeExport(
    args: DescribeExportCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeExportCommandOutput>;
  describeExport(
    args: DescribeExportCommandInput,
    cb: (err: any, data?: DescribeExportCommandOutput) => void
  ): void;
  describeExport(
    args: DescribeExportCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImportCommand}
   */
  describeImport(
    args: DescribeImportCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeImportCommandOutput>;
  describeImport(
    args: DescribeImportCommandInput,
    cb: (err: any, data?: DescribeImportCommandOutput) => void
  ): void;
  describeImport(
    args: DescribeImportCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeImportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIntentCommand}
   */
  describeIntent(
    args: DescribeIntentCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeIntentCommandOutput>;
  describeIntent(
    args: DescribeIntentCommandInput,
    cb: (err: any, data?: DescribeIntentCommandOutput) => void
  ): void;
  describeIntent(
    args: DescribeIntentCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeIntentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourcePolicyCommand}
   */
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeResourcePolicyCommandOutput>;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSlotCommand}
   */
  describeSlot(
    args: DescribeSlotCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeSlotCommandOutput>;
  describeSlot(
    args: DescribeSlotCommandInput,
    cb: (err: any, data?: DescribeSlotCommandOutput) => void
  ): void;
  describeSlot(
    args: DescribeSlotCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeSlotCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSlotTypeCommand}
   */
  describeSlotType(
    args: DescribeSlotTypeCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeSlotTypeCommandOutput>;
  describeSlotType(
    args: DescribeSlotTypeCommandInput,
    cb: (err: any, data?: DescribeSlotTypeCommandOutput) => void
  ): void;
  describeSlotType(
    args: DescribeSlotTypeCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeSlotTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTestExecutionCommand}
   */
  describeTestExecution(
    args: DescribeTestExecutionCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeTestExecutionCommandOutput>;
  describeTestExecution(
    args: DescribeTestExecutionCommandInput,
    cb: (err: any, data?: DescribeTestExecutionCommandOutput) => void
  ): void;
  describeTestExecution(
    args: DescribeTestExecutionCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeTestExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTestSetCommand}
   */
  describeTestSet(
    args: DescribeTestSetCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeTestSetCommandOutput>;
  describeTestSet(
    args: DescribeTestSetCommandInput,
    cb: (err: any, data?: DescribeTestSetCommandOutput) => void
  ): void;
  describeTestSet(
    args: DescribeTestSetCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeTestSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTestSetDiscrepancyReportCommand}
   */
  describeTestSetDiscrepancyReport(
    args: DescribeTestSetDiscrepancyReportCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeTestSetDiscrepancyReportCommandOutput>;
  describeTestSetDiscrepancyReport(
    args: DescribeTestSetDiscrepancyReportCommandInput,
    cb: (err: any, data?: DescribeTestSetDiscrepancyReportCommandOutput) => void
  ): void;
  describeTestSetDiscrepancyReport(
    args: DescribeTestSetDiscrepancyReportCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeTestSetDiscrepancyReportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTestSetGenerationCommand}
   */
  describeTestSetGeneration(
    args: DescribeTestSetGenerationCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<DescribeTestSetGenerationCommandOutput>;
  describeTestSetGeneration(
    args: DescribeTestSetGenerationCommandInput,
    cb: (err: any, data?: DescribeTestSetGenerationCommandOutput) => void
  ): void;
  describeTestSetGeneration(
    args: DescribeTestSetGenerationCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: DescribeTestSetGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateBotElementCommand}
   */
  generateBotElement(
    args: GenerateBotElementCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<GenerateBotElementCommandOutput>;
  generateBotElement(
    args: GenerateBotElementCommandInput,
    cb: (err: any, data?: GenerateBotElementCommandOutput) => void
  ): void;
  generateBotElement(
    args: GenerateBotElementCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: GenerateBotElementCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTestExecutionArtifactsUrlCommand}
   */
  getTestExecutionArtifactsUrl(
    args: GetTestExecutionArtifactsUrlCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<GetTestExecutionArtifactsUrlCommandOutput>;
  getTestExecutionArtifactsUrl(
    args: GetTestExecutionArtifactsUrlCommandInput,
    cb: (err: any, data?: GetTestExecutionArtifactsUrlCommandOutput) => void
  ): void;
  getTestExecutionArtifactsUrl(
    args: GetTestExecutionArtifactsUrlCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: GetTestExecutionArtifactsUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAggregatedUtterancesCommand}
   */
  listAggregatedUtterances(
    args: ListAggregatedUtterancesCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListAggregatedUtterancesCommandOutput>;
  listAggregatedUtterances(
    args: ListAggregatedUtterancesCommandInput,
    cb: (err: any, data?: ListAggregatedUtterancesCommandOutput) => void
  ): void;
  listAggregatedUtterances(
    args: ListAggregatedUtterancesCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListAggregatedUtterancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotAliasesCommand}
   */
  listBotAliases(
    args: ListBotAliasesCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListBotAliasesCommandOutput>;
  listBotAliases(
    args: ListBotAliasesCommandInput,
    cb: (err: any, data?: ListBotAliasesCommandOutput) => void
  ): void;
  listBotAliases(
    args: ListBotAliasesCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListBotAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotAliasReplicasCommand}
   */
  listBotAliasReplicas(
    args: ListBotAliasReplicasCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListBotAliasReplicasCommandOutput>;
  listBotAliasReplicas(
    args: ListBotAliasReplicasCommandInput,
    cb: (err: any, data?: ListBotAliasReplicasCommandOutput) => void
  ): void;
  listBotAliasReplicas(
    args: ListBotAliasReplicasCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListBotAliasReplicasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotAnalyzerHistoryCommand}
   */
  listBotAnalyzerHistory(
    args: ListBotAnalyzerHistoryCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListBotAnalyzerHistoryCommandOutput>;
  listBotAnalyzerHistory(
    args: ListBotAnalyzerHistoryCommandInput,
    cb: (err: any, data?: ListBotAnalyzerHistoryCommandOutput) => void
  ): void;
  listBotAnalyzerHistory(
    args: ListBotAnalyzerHistoryCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListBotAnalyzerHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotLocalesCommand}
   */
  listBotLocales(
    args: ListBotLocalesCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListBotLocalesCommandOutput>;
  listBotLocales(
    args: ListBotLocalesCommandInput,
    cb: (err: any, data?: ListBotLocalesCommandOutput) => void
  ): void;
  listBotLocales(
    args: ListBotLocalesCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListBotLocalesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotRecommendationsCommand}
   */
  listBotRecommendations(
    args: ListBotRecommendationsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListBotRecommendationsCommandOutput>;
  listBotRecommendations(
    args: ListBotRecommendationsCommandInput,
    cb: (err: any, data?: ListBotRecommendationsCommandOutput) => void
  ): void;
  listBotRecommendations(
    args: ListBotRecommendationsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListBotRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotReplicasCommand}
   */
  listBotReplicas(
    args: ListBotReplicasCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListBotReplicasCommandOutput>;
  listBotReplicas(
    args: ListBotReplicasCommandInput,
    cb: (err: any, data?: ListBotReplicasCommandOutput) => void
  ): void;
  listBotReplicas(
    args: ListBotReplicasCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListBotReplicasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotResourceGenerationsCommand}
   */
  listBotResourceGenerations(
    args: ListBotResourceGenerationsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListBotResourceGenerationsCommandOutput>;
  listBotResourceGenerations(
    args: ListBotResourceGenerationsCommandInput,
    cb: (err: any, data?: ListBotResourceGenerationsCommandOutput) => void
  ): void;
  listBotResourceGenerations(
    args: ListBotResourceGenerationsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListBotResourceGenerationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotsCommand}
   */
  listBots(): Promise<ListBotsCommandOutput>;
  listBots(
    args: ListBotsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListBotsCommandOutput>;
  listBots(
    args: ListBotsCommandInput,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;
  listBots(
    args: ListBotsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotVersionReplicasCommand}
   */
  listBotVersionReplicas(
    args: ListBotVersionReplicasCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListBotVersionReplicasCommandOutput>;
  listBotVersionReplicas(
    args: ListBotVersionReplicasCommandInput,
    cb: (err: any, data?: ListBotVersionReplicasCommandOutput) => void
  ): void;
  listBotVersionReplicas(
    args: ListBotVersionReplicasCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListBotVersionReplicasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotVersionsCommand}
   */
  listBotVersions(
    args: ListBotVersionsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListBotVersionsCommandOutput>;
  listBotVersions(
    args: ListBotVersionsCommandInput,
    cb: (err: any, data?: ListBotVersionsCommandOutput) => void
  ): void;
  listBotVersions(
    args: ListBotVersionsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListBotVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBuiltInIntentsCommand}
   */
  listBuiltInIntents(
    args: ListBuiltInIntentsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListBuiltInIntentsCommandOutput>;
  listBuiltInIntents(
    args: ListBuiltInIntentsCommandInput,
    cb: (err: any, data?: ListBuiltInIntentsCommandOutput) => void
  ): void;
  listBuiltInIntents(
    args: ListBuiltInIntentsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListBuiltInIntentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBuiltInSlotTypesCommand}
   */
  listBuiltInSlotTypes(
    args: ListBuiltInSlotTypesCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListBuiltInSlotTypesCommandOutput>;
  listBuiltInSlotTypes(
    args: ListBuiltInSlotTypesCommandInput,
    cb: (err: any, data?: ListBuiltInSlotTypesCommandOutput) => void
  ): void;
  listBuiltInSlotTypes(
    args: ListBuiltInSlotTypesCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListBuiltInSlotTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomVocabularyItemsCommand}
   */
  listCustomVocabularyItems(
    args: ListCustomVocabularyItemsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListCustomVocabularyItemsCommandOutput>;
  listCustomVocabularyItems(
    args: ListCustomVocabularyItemsCommandInput,
    cb: (err: any, data?: ListCustomVocabularyItemsCommandOutput) => void
  ): void;
  listCustomVocabularyItems(
    args: ListCustomVocabularyItemsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListCustomVocabularyItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExportsCommand}
   */
  listExports(): Promise<ListExportsCommandOutput>;
  listExports(
    args: ListExportsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListExportsCommandOutput>;
  listExports(
    args: ListExportsCommandInput,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;
  listExports(
    args: ListExportsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImportsCommand}
   */
  listImports(): Promise<ListImportsCommandOutput>;
  listImports(
    args: ListImportsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListImportsCommandOutput>;
  listImports(
    args: ListImportsCommandInput,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;
  listImports(
    args: ListImportsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntentMetricsCommand}
   */
  listIntentMetrics(
    args: ListIntentMetricsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListIntentMetricsCommandOutput>;
  listIntentMetrics(
    args: ListIntentMetricsCommandInput,
    cb: (err: any, data?: ListIntentMetricsCommandOutput) => void
  ): void;
  listIntentMetrics(
    args: ListIntentMetricsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListIntentMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntentPathsCommand}
   */
  listIntentPaths(
    args: ListIntentPathsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListIntentPathsCommandOutput>;
  listIntentPaths(
    args: ListIntentPathsCommandInput,
    cb: (err: any, data?: ListIntentPathsCommandOutput) => void
  ): void;
  listIntentPaths(
    args: ListIntentPathsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListIntentPathsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntentsCommand}
   */
  listIntents(
    args: ListIntentsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListIntentsCommandOutput>;
  listIntents(
    args: ListIntentsCommandInput,
    cb: (err: any, data?: ListIntentsCommandOutput) => void
  ): void;
  listIntents(
    args: ListIntentsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListIntentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntentStageMetricsCommand}
   */
  listIntentStageMetrics(
    args: ListIntentStageMetricsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListIntentStageMetricsCommandOutput>;
  listIntentStageMetrics(
    args: ListIntentStageMetricsCommandInput,
    cb: (err: any, data?: ListIntentStageMetricsCommandOutput) => void
  ): void;
  listIntentStageMetrics(
    args: ListIntentStageMetricsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListIntentStageMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendedIntentsCommand}
   */
  listRecommendedIntents(
    args: ListRecommendedIntentsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListRecommendedIntentsCommandOutput>;
  listRecommendedIntents(
    args: ListRecommendedIntentsCommandInput,
    cb: (err: any, data?: ListRecommendedIntentsCommandOutput) => void
  ): void;
  listRecommendedIntents(
    args: ListRecommendedIntentsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListRecommendedIntentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionAnalyticsDataCommand}
   */
  listSessionAnalyticsData(
    args: ListSessionAnalyticsDataCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListSessionAnalyticsDataCommandOutput>;
  listSessionAnalyticsData(
    args: ListSessionAnalyticsDataCommandInput,
    cb: (err: any, data?: ListSessionAnalyticsDataCommandOutput) => void
  ): void;
  listSessionAnalyticsData(
    args: ListSessionAnalyticsDataCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListSessionAnalyticsDataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionMetricsCommand}
   */
  listSessionMetrics(
    args: ListSessionMetricsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListSessionMetricsCommandOutput>;
  listSessionMetrics(
    args: ListSessionMetricsCommandInput,
    cb: (err: any, data?: ListSessionMetricsCommandOutput) => void
  ): void;
  listSessionMetrics(
    args: ListSessionMetricsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListSessionMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSlotsCommand}
   */
  listSlots(
    args: ListSlotsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListSlotsCommandOutput>;
  listSlots(
    args: ListSlotsCommandInput,
    cb: (err: any, data?: ListSlotsCommandOutput) => void
  ): void;
  listSlots(
    args: ListSlotsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListSlotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSlotTypesCommand}
   */
  listSlotTypes(
    args: ListSlotTypesCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListSlotTypesCommandOutput>;
  listSlotTypes(
    args: ListSlotTypesCommandInput,
    cb: (err: any, data?: ListSlotTypesCommandOutput) => void
  ): void;
  listSlotTypes(
    args: ListSlotTypesCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListSlotTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestExecutionResultItemsCommand}
   */
  listTestExecutionResultItems(
    args: ListTestExecutionResultItemsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListTestExecutionResultItemsCommandOutput>;
  listTestExecutionResultItems(
    args: ListTestExecutionResultItemsCommandInput,
    cb: (err: any, data?: ListTestExecutionResultItemsCommandOutput) => void
  ): void;
  listTestExecutionResultItems(
    args: ListTestExecutionResultItemsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListTestExecutionResultItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestExecutionsCommand}
   */
  listTestExecutions(): Promise<ListTestExecutionsCommandOutput>;
  listTestExecutions(
    args: ListTestExecutionsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListTestExecutionsCommandOutput>;
  listTestExecutions(
    args: ListTestExecutionsCommandInput,
    cb: (err: any, data?: ListTestExecutionsCommandOutput) => void
  ): void;
  listTestExecutions(
    args: ListTestExecutionsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListTestExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestSetRecordsCommand}
   */
  listTestSetRecords(
    args: ListTestSetRecordsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListTestSetRecordsCommandOutput>;
  listTestSetRecords(
    args: ListTestSetRecordsCommandInput,
    cb: (err: any, data?: ListTestSetRecordsCommandOutput) => void
  ): void;
  listTestSetRecords(
    args: ListTestSetRecordsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListTestSetRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestSetsCommand}
   */
  listTestSets(): Promise<ListTestSetsCommandOutput>;
  listTestSets(
    args: ListTestSetsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListTestSetsCommandOutput>;
  listTestSets(
    args: ListTestSetsCommandInput,
    cb: (err: any, data?: ListTestSetsCommandOutput) => void
  ): void;
  listTestSets(
    args: ListTestSetsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListTestSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUtteranceAnalyticsDataCommand}
   */
  listUtteranceAnalyticsData(
    args: ListUtteranceAnalyticsDataCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListUtteranceAnalyticsDataCommandOutput>;
  listUtteranceAnalyticsData(
    args: ListUtteranceAnalyticsDataCommandInput,
    cb: (err: any, data?: ListUtteranceAnalyticsDataCommandOutput) => void
  ): void;
  listUtteranceAnalyticsData(
    args: ListUtteranceAnalyticsDataCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListUtteranceAnalyticsDataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUtteranceMetricsCommand}
   */
  listUtteranceMetrics(
    args: ListUtteranceMetricsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<ListUtteranceMetricsCommandOutput>;
  listUtteranceMetrics(
    args: ListUtteranceMetricsCommandInput,
    cb: (err: any, data?: ListUtteranceMetricsCommandOutput) => void
  ): void;
  listUtteranceMetrics(
    args: ListUtteranceMetricsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: ListUtteranceMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAssociatedTranscriptsCommand}
   */
  searchAssociatedTranscripts(
    args: SearchAssociatedTranscriptsCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<SearchAssociatedTranscriptsCommandOutput>;
  searchAssociatedTranscripts(
    args: SearchAssociatedTranscriptsCommandInput,
    cb: (err: any, data?: SearchAssociatedTranscriptsCommandOutput) => void
  ): void;
  searchAssociatedTranscripts(
    args: SearchAssociatedTranscriptsCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: SearchAssociatedTranscriptsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBotAnalyzerCommand}
   */
  startBotAnalyzer(
    args: StartBotAnalyzerCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<StartBotAnalyzerCommandOutput>;
  startBotAnalyzer(
    args: StartBotAnalyzerCommandInput,
    cb: (err: any, data?: StartBotAnalyzerCommandOutput) => void
  ): void;
  startBotAnalyzer(
    args: StartBotAnalyzerCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: StartBotAnalyzerCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBotRecommendationCommand}
   */
  startBotRecommendation(
    args: StartBotRecommendationCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<StartBotRecommendationCommandOutput>;
  startBotRecommendation(
    args: StartBotRecommendationCommandInput,
    cb: (err: any, data?: StartBotRecommendationCommandOutput) => void
  ): void;
  startBotRecommendation(
    args: StartBotRecommendationCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: StartBotRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBotResourceGenerationCommand}
   */
  startBotResourceGeneration(
    args: StartBotResourceGenerationCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<StartBotResourceGenerationCommandOutput>;
  startBotResourceGeneration(
    args: StartBotResourceGenerationCommandInput,
    cb: (err: any, data?: StartBotResourceGenerationCommandOutput) => void
  ): void;
  startBotResourceGeneration(
    args: StartBotResourceGenerationCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: StartBotResourceGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImportCommand}
   */
  startImport(
    args: StartImportCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<StartImportCommandOutput>;
  startImport(
    args: StartImportCommandInput,
    cb: (err: any, data?: StartImportCommandOutput) => void
  ): void;
  startImport(
    args: StartImportCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: StartImportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTestExecutionCommand}
   */
  startTestExecution(
    args: StartTestExecutionCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<StartTestExecutionCommandOutput>;
  startTestExecution(
    args: StartTestExecutionCommandInput,
    cb: (err: any, data?: StartTestExecutionCommandOutput) => void
  ): void;
  startTestExecution(
    args: StartTestExecutionCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: StartTestExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTestSetGenerationCommand}
   */
  startTestSetGeneration(
    args: StartTestSetGenerationCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<StartTestSetGenerationCommandOutput>;
  startTestSetGeneration(
    args: StartTestSetGenerationCommandInput,
    cb: (err: any, data?: StartTestSetGenerationCommandOutput) => void
  ): void;
  startTestSetGeneration(
    args: StartTestSetGenerationCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: StartTestSetGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopBotAnalyzerCommand}
   */
  stopBotAnalyzer(
    args: StopBotAnalyzerCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<StopBotAnalyzerCommandOutput>;
  stopBotAnalyzer(
    args: StopBotAnalyzerCommandInput,
    cb: (err: any, data?: StopBotAnalyzerCommandOutput) => void
  ): void;
  stopBotAnalyzer(
    args: StopBotAnalyzerCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: StopBotAnalyzerCommandOutput) => void
  ): void;

  /**
   * @see {@link StopBotRecommendationCommand}
   */
  stopBotRecommendation(
    args: StopBotRecommendationCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<StopBotRecommendationCommandOutput>;
  stopBotRecommendation(
    args: StopBotRecommendationCommandInput,
    cb: (err: any, data?: StopBotRecommendationCommandOutput) => void
  ): void;
  stopBotRecommendation(
    args: StopBotRecommendationCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: StopBotRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBotCommand}
   */
  updateBot(
    args: UpdateBotCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<UpdateBotCommandOutput>;
  updateBot(
    args: UpdateBotCommandInput,
    cb: (err: any, data?: UpdateBotCommandOutput) => void
  ): void;
  updateBot(
    args: UpdateBotCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: UpdateBotCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBotAliasCommand}
   */
  updateBotAlias(
    args: UpdateBotAliasCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<UpdateBotAliasCommandOutput>;
  updateBotAlias(
    args: UpdateBotAliasCommandInput,
    cb: (err: any, data?: UpdateBotAliasCommandOutput) => void
  ): void;
  updateBotAlias(
    args: UpdateBotAliasCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: UpdateBotAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBotLocaleCommand}
   */
  updateBotLocale(
    args: UpdateBotLocaleCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<UpdateBotLocaleCommandOutput>;
  updateBotLocale(
    args: UpdateBotLocaleCommandInput,
    cb: (err: any, data?: UpdateBotLocaleCommandOutput) => void
  ): void;
  updateBotLocale(
    args: UpdateBotLocaleCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: UpdateBotLocaleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBotRecommendationCommand}
   */
  updateBotRecommendation(
    args: UpdateBotRecommendationCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<UpdateBotRecommendationCommandOutput>;
  updateBotRecommendation(
    args: UpdateBotRecommendationCommandInput,
    cb: (err: any, data?: UpdateBotRecommendationCommandOutput) => void
  ): void;
  updateBotRecommendation(
    args: UpdateBotRecommendationCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: UpdateBotRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateExportCommand}
   */
  updateExport(
    args: UpdateExportCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<UpdateExportCommandOutput>;
  updateExport(
    args: UpdateExportCommandInput,
    cb: (err: any, data?: UpdateExportCommandOutput) => void
  ): void;
  updateExport(
    args: UpdateExportCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: UpdateExportCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntentCommand}
   */
  updateIntent(
    args: UpdateIntentCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<UpdateIntentCommandOutput>;
  updateIntent(
    args: UpdateIntentCommandInput,
    cb: (err: any, data?: UpdateIntentCommandOutput) => void
  ): void;
  updateIntent(
    args: UpdateIntentCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: UpdateIntentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourcePolicyCommand}
   */
  updateResourcePolicy(
    args: UpdateResourcePolicyCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<UpdateResourcePolicyCommandOutput>;
  updateResourcePolicy(
    args: UpdateResourcePolicyCommandInput,
    cb: (err: any, data?: UpdateResourcePolicyCommandOutput) => void
  ): void;
  updateResourcePolicy(
    args: UpdateResourcePolicyCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: UpdateResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSlotCommand}
   */
  updateSlot(
    args: UpdateSlotCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<UpdateSlotCommandOutput>;
  updateSlot(
    args: UpdateSlotCommandInput,
    cb: (err: any, data?: UpdateSlotCommandOutput) => void
  ): void;
  updateSlot(
    args: UpdateSlotCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: UpdateSlotCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSlotTypeCommand}
   */
  updateSlotType(
    args: UpdateSlotTypeCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<UpdateSlotTypeCommandOutput>;
  updateSlotType(
    args: UpdateSlotTypeCommandInput,
    cb: (err: any, data?: UpdateSlotTypeCommandOutput) => void
  ): void;
  updateSlotType(
    args: UpdateSlotTypeCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: UpdateSlotTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTestSetCommand}
   */
  updateTestSet(
    args: UpdateTestSetCommandInput,
    options?: LexModelsV2RequestOptions
  ): Promise<UpdateTestSetCommandOutput>;
  updateTestSet(
    args: UpdateTestSetCommandInput,
    cb: (err: any, data?: UpdateTestSetCommandOutput) => void
  ): void;
  updateTestSet(
    args: UpdateTestSetCommandInput,
    options: LexModelsV2RequestOptions,
    cb: (err: any, data?: UpdateTestSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBotAnalyzerRecommendationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeBotAnalyzerRecommendationCommandOutput}.
   */
  paginateDescribeBotAnalyzerRecommendation(
    args: DescribeBotAnalyzerRecommendationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeBotAnalyzerRecommendationCommandOutput>;

  /**
   * @see {@link ListAggregatedUtterancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAggregatedUtterancesCommandOutput}.
   */
  paginateListAggregatedUtterances(
    args: ListAggregatedUtterancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAggregatedUtterancesCommandOutput>;

  /**
   * @see {@link ListBotAliasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBotAliasesCommandOutput}.
   */
  paginateListBotAliases(
    args: ListBotAliasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBotAliasesCommandOutput>;

  /**
   * @see {@link ListBotAliasReplicasCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBotAliasReplicasCommandOutput}.
   */
  paginateListBotAliasReplicas(
    args: ListBotAliasReplicasCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBotAliasReplicasCommandOutput>;

  /**
   * @see {@link ListBotAnalyzerHistoryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBotAnalyzerHistoryCommandOutput}.
   */
  paginateListBotAnalyzerHistory(
    args: ListBotAnalyzerHistoryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBotAnalyzerHistoryCommandOutput>;

  /**
   * @see {@link ListBotLocalesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBotLocalesCommandOutput}.
   */
  paginateListBotLocales(
    args: ListBotLocalesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBotLocalesCommandOutput>;

  /**
   * @see {@link ListBotRecommendationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBotRecommendationsCommandOutput}.
   */
  paginateListBotRecommendations(
    args: ListBotRecommendationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBotRecommendationsCommandOutput>;

  /**
   * @see {@link ListBotResourceGenerationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBotResourceGenerationsCommandOutput}.
   */
  paginateListBotResourceGenerations(
    args: ListBotResourceGenerationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBotResourceGenerationsCommandOutput>;

  /**
   * @see {@link ListBotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBotsCommandOutput}.
   */
  paginateListBots(
    args?: ListBotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBotsCommandOutput>;

  /**
   * @see {@link ListBotVersionReplicasCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBotVersionReplicasCommandOutput}.
   */
  paginateListBotVersionReplicas(
    args: ListBotVersionReplicasCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBotVersionReplicasCommandOutput>;

  /**
   * @see {@link ListBotVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBotVersionsCommandOutput}.
   */
  paginateListBotVersions(
    args: ListBotVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBotVersionsCommandOutput>;

  /**
   * @see {@link ListBuiltInIntentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBuiltInIntentsCommandOutput}.
   */
  paginateListBuiltInIntents(
    args: ListBuiltInIntentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBuiltInIntentsCommandOutput>;

  /**
   * @see {@link ListBuiltInSlotTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBuiltInSlotTypesCommandOutput}.
   */
  paginateListBuiltInSlotTypes(
    args: ListBuiltInSlotTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBuiltInSlotTypesCommandOutput>;

  /**
   * @see {@link ListCustomVocabularyItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCustomVocabularyItemsCommandOutput}.
   */
  paginateListCustomVocabularyItems(
    args: ListCustomVocabularyItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCustomVocabularyItemsCommandOutput>;

  /**
   * @see {@link ListExportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExportsCommandOutput}.
   */
  paginateListExports(
    args?: ListExportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExportsCommandOutput>;

  /**
   * @see {@link ListImportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListImportsCommandOutput}.
   */
  paginateListImports(
    args?: ListImportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListImportsCommandOutput>;

  /**
   * @see {@link ListIntentMetricsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIntentMetricsCommandOutput}.
   */
  paginateListIntentMetrics(
    args: ListIntentMetricsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIntentMetricsCommandOutput>;

  /**
   * @see {@link ListIntentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIntentsCommandOutput}.
   */
  paginateListIntents(
    args: ListIntentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIntentsCommandOutput>;

  /**
   * @see {@link ListIntentStageMetricsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIntentStageMetricsCommandOutput}.
   */
  paginateListIntentStageMetrics(
    args: ListIntentStageMetricsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIntentStageMetricsCommandOutput>;

  /**
   * @see {@link ListRecommendedIntentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecommendedIntentsCommandOutput}.
   */
  paginateListRecommendedIntents(
    args: ListRecommendedIntentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecommendedIntentsCommandOutput>;

  /**
   * @see {@link ListSessionAnalyticsDataCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSessionAnalyticsDataCommandOutput}.
   */
  paginateListSessionAnalyticsData(
    args: ListSessionAnalyticsDataCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSessionAnalyticsDataCommandOutput>;

  /**
   * @see {@link ListSessionMetricsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSessionMetricsCommandOutput}.
   */
  paginateListSessionMetrics(
    args: ListSessionMetricsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSessionMetricsCommandOutput>;

  /**
   * @see {@link ListSlotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSlotsCommandOutput}.
   */
  paginateListSlots(
    args: ListSlotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSlotsCommandOutput>;

  /**
   * @see {@link ListSlotTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSlotTypesCommandOutput}.
   */
  paginateListSlotTypes(
    args: ListSlotTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSlotTypesCommandOutput>;

  /**
   * @see {@link ListTestExecutionResultItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTestExecutionResultItemsCommandOutput}.
   */
  paginateListTestExecutionResultItems(
    args: ListTestExecutionResultItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTestExecutionResultItemsCommandOutput>;

  /**
   * @see {@link ListTestExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTestExecutionsCommandOutput}.
   */
  paginateListTestExecutions(
    args?: ListTestExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTestExecutionsCommandOutput>;

  /**
   * @see {@link ListTestSetRecordsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTestSetRecordsCommandOutput}.
   */
  paginateListTestSetRecords(
    args: ListTestSetRecordsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTestSetRecordsCommandOutput>;

  /**
   * @see {@link ListTestSetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTestSetsCommandOutput}.
   */
  paginateListTestSets(
    args?: ListTestSetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTestSetsCommandOutput>;

  /**
   * @see {@link ListUtteranceAnalyticsDataCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUtteranceAnalyticsDataCommandOutput}.
   */
  paginateListUtteranceAnalyticsData(
    args: ListUtteranceAnalyticsDataCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUtteranceAnalyticsDataCommandOutput>;

  /**
   * @see {@link ListUtteranceMetricsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUtteranceMetricsCommandOutput}.
   */
  paginateListUtteranceMetrics(
    args: ListUtteranceMetricsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUtteranceMetricsCommandOutput>;

  /**
   * @see {@link DescribeBotCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilBotAvailable(
    args: DescribeBotCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LexModelsV2>, "client">
  ): Promise<WaiterResult<DescribeBotCommandOutput>>;

  /**
   * @see {@link DescribeBotAliasCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilBotAliasAvailable(
    args: DescribeBotAliasCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LexModelsV2>, "client">
  ): Promise<WaiterResult<DescribeBotAliasCommandOutput>>;

  /**
   * @see {@link DescribeBotLocaleCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilBotLocaleBuilt(
    args: DescribeBotLocaleCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LexModelsV2>, "client">
  ): Promise<WaiterResult<DescribeBotLocaleCommandOutput>>;

  /**
   * @see {@link DescribeBotLocaleCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilBotLocaleCreated(
    args: DescribeBotLocaleCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LexModelsV2>, "client">
  ): Promise<WaiterResult<DescribeBotLocaleCommandOutput>>;

  /**
   * @see {@link DescribeBotLocaleCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilBotLocaleExpressTestingAvailable(
    args: DescribeBotLocaleCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LexModelsV2>, "client">
  ): Promise<WaiterResult<DescribeBotLocaleCommandOutput>>;

  /**
   * @see {@link DescribeBotVersionCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilBotVersionAvailable(
    args: DescribeBotVersionCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LexModelsV2>, "client">
  ): Promise<WaiterResult<DescribeBotVersionCommandOutput>>;

  /**
   * @see {@link DescribeExportCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilBotExportCompleted(
    args: DescribeExportCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LexModelsV2>, "client">
  ): Promise<WaiterResult<DescribeExportCommandOutput>>;

  /**
   * @see {@link DescribeImportCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilBotImportCompleted(
    args: DescribeImportCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LexModelsV2>, "client">
  ): Promise<WaiterResult<DescribeImportCommandOutput>>;
}

/**
 * <p>This document provides detailed information about the Amazon Lex V2 API actions and their parameters.</p>
 *          <p>For information about the IAM access control permissions you need to use this API, see
 *         <a href="https://docs.aws.amazon.com/lexv2/latest/dg/security_iam_service-with-iam.html">Identity-based policies for Amazon Lex V2</a>.</p>
 *          <p>Amazon Lex V2 Model Building V2 operations let you build and manage bots.</p>
 *          <p>If you use a custom HTTP client to call Amazon Lex Model Building
 *         V2 operations, you must set the "Content-Type" HTTP header to
 *         "application/x-amz-json-1.1". Otherwise, you receive an HTTP 404 -
 *         UnknownOperationException in the response.</p>
 *          <p>Amazon Lex Model Building V2 operations return the responses with
 *         the "application/x-amz-json-1.1" content type.</p>
 *          <p>You can use <a href="http://aws.amazon.com/tools/#sdk">Amazon Web Services SDKs</a> to access Amazon Lex V2 APIs using your favorite programming language.
 *         The SDKs automatically perform useful tasks for you, such as:</p>
 *          <ul>
 *             <li>
 *                <p>Cryptographically sign your service requests</p>
 *             </li>
 *             <li>
 *                <p>Retry requests</p>
 *             </li>
 *             <li>
 *                <p>Handle error responses</p>
 *             </li>
 *          </ul>
 *          <p>The following resources provide additional information about the Amazon Lex V2 Model Building API.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Amazon Web Services General Reference</i>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/general/latest/gr/lex.html">Amazon Lex V2 Endpoints for each region</a>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Command Line Interface</i>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/cli/latest/reference/lexv2-models/index.html">
 *                     Amazon Lex Model Building V2 CLI commands</a>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 * @public
 */
export class LexModelsV2 extends LexModelsV2Client implements LexModelsV2 {}
createAggregatedClient(commands, LexModelsV2, { paginators, waiters });
