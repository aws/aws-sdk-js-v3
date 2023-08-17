// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchCreateCustomVocabularyItemCommand,
  BatchCreateCustomVocabularyItemCommandInput,
  BatchCreateCustomVocabularyItemCommandOutput,
} from "./commands/BatchCreateCustomVocabularyItemCommand";
import {
  BatchDeleteCustomVocabularyItemCommand,
  BatchDeleteCustomVocabularyItemCommandInput,
  BatchDeleteCustomVocabularyItemCommandOutput,
} from "./commands/BatchDeleteCustomVocabularyItemCommand";
import {
  BatchUpdateCustomVocabularyItemCommand,
  BatchUpdateCustomVocabularyItemCommandInput,
  BatchUpdateCustomVocabularyItemCommandOutput,
} from "./commands/BatchUpdateCustomVocabularyItemCommand";
import {
  BuildBotLocaleCommand,
  BuildBotLocaleCommandInput,
  BuildBotLocaleCommandOutput,
} from "./commands/BuildBotLocaleCommand";
import {
  CreateBotAliasCommand,
  CreateBotAliasCommandInput,
  CreateBotAliasCommandOutput,
} from "./commands/CreateBotAliasCommand";
import { CreateBotCommand, CreateBotCommandInput, CreateBotCommandOutput } from "./commands/CreateBotCommand";
import {
  CreateBotLocaleCommand,
  CreateBotLocaleCommandInput,
  CreateBotLocaleCommandOutput,
} from "./commands/CreateBotLocaleCommand";
import {
  CreateBotVersionCommand,
  CreateBotVersionCommandInput,
  CreateBotVersionCommandOutput,
} from "./commands/CreateBotVersionCommand";
import {
  CreateExportCommand,
  CreateExportCommandInput,
  CreateExportCommandOutput,
} from "./commands/CreateExportCommand";
import {
  CreateIntentCommand,
  CreateIntentCommandInput,
  CreateIntentCommandOutput,
} from "./commands/CreateIntentCommand";
import {
  CreateResourcePolicyCommand,
  CreateResourcePolicyCommandInput,
  CreateResourcePolicyCommandOutput,
} from "./commands/CreateResourcePolicyCommand";
import {
  CreateResourcePolicyStatementCommand,
  CreateResourcePolicyStatementCommandInput,
  CreateResourcePolicyStatementCommandOutput,
} from "./commands/CreateResourcePolicyStatementCommand";
import { CreateSlotCommand, CreateSlotCommandInput, CreateSlotCommandOutput } from "./commands/CreateSlotCommand";
import {
  CreateSlotTypeCommand,
  CreateSlotTypeCommandInput,
  CreateSlotTypeCommandOutput,
} from "./commands/CreateSlotTypeCommand";
import {
  CreateTestSetDiscrepancyReportCommand,
  CreateTestSetDiscrepancyReportCommandInput,
  CreateTestSetDiscrepancyReportCommandOutput,
} from "./commands/CreateTestSetDiscrepancyReportCommand";
import {
  CreateUploadUrlCommand,
  CreateUploadUrlCommandInput,
  CreateUploadUrlCommandOutput,
} from "./commands/CreateUploadUrlCommand";
import {
  DeleteBotAliasCommand,
  DeleteBotAliasCommandInput,
  DeleteBotAliasCommandOutput,
} from "./commands/DeleteBotAliasCommand";
import { DeleteBotCommand, DeleteBotCommandInput, DeleteBotCommandOutput } from "./commands/DeleteBotCommand";
import {
  DeleteBotLocaleCommand,
  DeleteBotLocaleCommandInput,
  DeleteBotLocaleCommandOutput,
} from "./commands/DeleteBotLocaleCommand";
import {
  DeleteBotVersionCommand,
  DeleteBotVersionCommandInput,
  DeleteBotVersionCommandOutput,
} from "./commands/DeleteBotVersionCommand";
import {
  DeleteCustomVocabularyCommand,
  DeleteCustomVocabularyCommandInput,
  DeleteCustomVocabularyCommandOutput,
} from "./commands/DeleteCustomVocabularyCommand";
import {
  DeleteExportCommand,
  DeleteExportCommandInput,
  DeleteExportCommandOutput,
} from "./commands/DeleteExportCommand";
import {
  DeleteImportCommand,
  DeleteImportCommandInput,
  DeleteImportCommandOutput,
} from "./commands/DeleteImportCommand";
import {
  DeleteIntentCommand,
  DeleteIntentCommandInput,
  DeleteIntentCommandOutput,
} from "./commands/DeleteIntentCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteResourcePolicyStatementCommand,
  DeleteResourcePolicyStatementCommandInput,
  DeleteResourcePolicyStatementCommandOutput,
} from "./commands/DeleteResourcePolicyStatementCommand";
import { DeleteSlotCommand, DeleteSlotCommandInput, DeleteSlotCommandOutput } from "./commands/DeleteSlotCommand";
import {
  DeleteSlotTypeCommand,
  DeleteSlotTypeCommandInput,
  DeleteSlotTypeCommandOutput,
} from "./commands/DeleteSlotTypeCommand";
import {
  DeleteTestSetCommand,
  DeleteTestSetCommandInput,
  DeleteTestSetCommandOutput,
} from "./commands/DeleteTestSetCommand";
import {
  DeleteUtterancesCommand,
  DeleteUtterancesCommandInput,
  DeleteUtterancesCommandOutput,
} from "./commands/DeleteUtterancesCommand";
import {
  DescribeBotAliasCommand,
  DescribeBotAliasCommandInput,
  DescribeBotAliasCommandOutput,
} from "./commands/DescribeBotAliasCommand";
import { DescribeBotCommand, DescribeBotCommandInput, DescribeBotCommandOutput } from "./commands/DescribeBotCommand";
import {
  DescribeBotLocaleCommand,
  DescribeBotLocaleCommandInput,
  DescribeBotLocaleCommandOutput,
} from "./commands/DescribeBotLocaleCommand";
import {
  DescribeBotRecommendationCommand,
  DescribeBotRecommendationCommandInput,
  DescribeBotRecommendationCommandOutput,
} from "./commands/DescribeBotRecommendationCommand";
import {
  DescribeBotVersionCommand,
  DescribeBotVersionCommandInput,
  DescribeBotVersionCommandOutput,
} from "./commands/DescribeBotVersionCommand";
import {
  DescribeCustomVocabularyMetadataCommand,
  DescribeCustomVocabularyMetadataCommandInput,
  DescribeCustomVocabularyMetadataCommandOutput,
} from "./commands/DescribeCustomVocabularyMetadataCommand";
import {
  DescribeExportCommand,
  DescribeExportCommandInput,
  DescribeExportCommandOutput,
} from "./commands/DescribeExportCommand";
import {
  DescribeImportCommand,
  DescribeImportCommandInput,
  DescribeImportCommandOutput,
} from "./commands/DescribeImportCommand";
import {
  DescribeIntentCommand,
  DescribeIntentCommandInput,
  DescribeIntentCommandOutput,
} from "./commands/DescribeIntentCommand";
import {
  DescribeResourcePolicyCommand,
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import {
  DescribeSlotCommand,
  DescribeSlotCommandInput,
  DescribeSlotCommandOutput,
} from "./commands/DescribeSlotCommand";
import {
  DescribeSlotTypeCommand,
  DescribeSlotTypeCommandInput,
  DescribeSlotTypeCommandOutput,
} from "./commands/DescribeSlotTypeCommand";
import {
  DescribeTestExecutionCommand,
  DescribeTestExecutionCommandInput,
  DescribeTestExecutionCommandOutput,
} from "./commands/DescribeTestExecutionCommand";
import {
  DescribeTestSetCommand,
  DescribeTestSetCommandInput,
  DescribeTestSetCommandOutput,
} from "./commands/DescribeTestSetCommand";
import {
  DescribeTestSetDiscrepancyReportCommand,
  DescribeTestSetDiscrepancyReportCommandInput,
  DescribeTestSetDiscrepancyReportCommandOutput,
} from "./commands/DescribeTestSetDiscrepancyReportCommand";
import {
  DescribeTestSetGenerationCommand,
  DescribeTestSetGenerationCommandInput,
  DescribeTestSetGenerationCommandOutput,
} from "./commands/DescribeTestSetGenerationCommand";
import {
  GetTestExecutionArtifactsUrlCommand,
  GetTestExecutionArtifactsUrlCommandInput,
  GetTestExecutionArtifactsUrlCommandOutput,
} from "./commands/GetTestExecutionArtifactsUrlCommand";
import {
  ListAggregatedUtterancesCommand,
  ListAggregatedUtterancesCommandInput,
  ListAggregatedUtterancesCommandOutput,
} from "./commands/ListAggregatedUtterancesCommand";
import {
  ListBotAliasesCommand,
  ListBotAliasesCommandInput,
  ListBotAliasesCommandOutput,
} from "./commands/ListBotAliasesCommand";
import {
  ListBotLocalesCommand,
  ListBotLocalesCommandInput,
  ListBotLocalesCommandOutput,
} from "./commands/ListBotLocalesCommand";
import {
  ListBotRecommendationsCommand,
  ListBotRecommendationsCommandInput,
  ListBotRecommendationsCommandOutput,
} from "./commands/ListBotRecommendationsCommand";
import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
import {
  ListBotVersionsCommand,
  ListBotVersionsCommandInput,
  ListBotVersionsCommandOutput,
} from "./commands/ListBotVersionsCommand";
import {
  ListBuiltInIntentsCommand,
  ListBuiltInIntentsCommandInput,
  ListBuiltInIntentsCommandOutput,
} from "./commands/ListBuiltInIntentsCommand";
import {
  ListBuiltInSlotTypesCommand,
  ListBuiltInSlotTypesCommandInput,
  ListBuiltInSlotTypesCommandOutput,
} from "./commands/ListBuiltInSlotTypesCommand";
import {
  ListCustomVocabularyItemsCommand,
  ListCustomVocabularyItemsCommandInput,
  ListCustomVocabularyItemsCommandOutput,
} from "./commands/ListCustomVocabularyItemsCommand";
import { ListExportsCommand, ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import { ListImportsCommand, ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import {
  ListIntentMetricsCommand,
  ListIntentMetricsCommandInput,
  ListIntentMetricsCommandOutput,
} from "./commands/ListIntentMetricsCommand";
import {
  ListIntentPathsCommand,
  ListIntentPathsCommandInput,
  ListIntentPathsCommandOutput,
} from "./commands/ListIntentPathsCommand";
import { ListIntentsCommand, ListIntentsCommandInput, ListIntentsCommandOutput } from "./commands/ListIntentsCommand";
import {
  ListIntentStageMetricsCommand,
  ListIntentStageMetricsCommandInput,
  ListIntentStageMetricsCommandOutput,
} from "./commands/ListIntentStageMetricsCommand";
import {
  ListRecommendedIntentsCommand,
  ListRecommendedIntentsCommandInput,
  ListRecommendedIntentsCommandOutput,
} from "./commands/ListRecommendedIntentsCommand";
import {
  ListSessionAnalyticsDataCommand,
  ListSessionAnalyticsDataCommandInput,
  ListSessionAnalyticsDataCommandOutput,
} from "./commands/ListSessionAnalyticsDataCommand";
import {
  ListSessionMetricsCommand,
  ListSessionMetricsCommandInput,
  ListSessionMetricsCommandOutput,
} from "./commands/ListSessionMetricsCommand";
import { ListSlotsCommand, ListSlotsCommandInput, ListSlotsCommandOutput } from "./commands/ListSlotsCommand";
import {
  ListSlotTypesCommand,
  ListSlotTypesCommandInput,
  ListSlotTypesCommandOutput,
} from "./commands/ListSlotTypesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTestExecutionResultItemsCommand,
  ListTestExecutionResultItemsCommandInput,
  ListTestExecutionResultItemsCommandOutput,
} from "./commands/ListTestExecutionResultItemsCommand";
import {
  ListTestExecutionsCommand,
  ListTestExecutionsCommandInput,
  ListTestExecutionsCommandOutput,
} from "./commands/ListTestExecutionsCommand";
import {
  ListTestSetRecordsCommand,
  ListTestSetRecordsCommandInput,
  ListTestSetRecordsCommandOutput,
} from "./commands/ListTestSetRecordsCommand";
import {
  ListTestSetsCommand,
  ListTestSetsCommandInput,
  ListTestSetsCommandOutput,
} from "./commands/ListTestSetsCommand";
import {
  ListUtteranceAnalyticsDataCommand,
  ListUtteranceAnalyticsDataCommandInput,
  ListUtteranceAnalyticsDataCommandOutput,
} from "./commands/ListUtteranceAnalyticsDataCommand";
import {
  ListUtteranceMetricsCommand,
  ListUtteranceMetricsCommandInput,
  ListUtteranceMetricsCommandOutput,
} from "./commands/ListUtteranceMetricsCommand";
import {
  SearchAssociatedTranscriptsCommand,
  SearchAssociatedTranscriptsCommandInput,
  SearchAssociatedTranscriptsCommandOutput,
} from "./commands/SearchAssociatedTranscriptsCommand";
import {
  StartBotRecommendationCommand,
  StartBotRecommendationCommandInput,
  StartBotRecommendationCommandOutput,
} from "./commands/StartBotRecommendationCommand";
import { StartImportCommand, StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import {
  StartTestExecutionCommand,
  StartTestExecutionCommandInput,
  StartTestExecutionCommandOutput,
} from "./commands/StartTestExecutionCommand";
import {
  StartTestSetGenerationCommand,
  StartTestSetGenerationCommandInput,
  StartTestSetGenerationCommandOutput,
} from "./commands/StartTestSetGenerationCommand";
import {
  StopBotRecommendationCommand,
  StopBotRecommendationCommandInput,
  StopBotRecommendationCommandOutput,
} from "./commands/StopBotRecommendationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateBotAliasCommand,
  UpdateBotAliasCommandInput,
  UpdateBotAliasCommandOutput,
} from "./commands/UpdateBotAliasCommand";
import { UpdateBotCommand, UpdateBotCommandInput, UpdateBotCommandOutput } from "./commands/UpdateBotCommand";
import {
  UpdateBotLocaleCommand,
  UpdateBotLocaleCommandInput,
  UpdateBotLocaleCommandOutput,
} from "./commands/UpdateBotLocaleCommand";
import {
  UpdateBotRecommendationCommand,
  UpdateBotRecommendationCommandInput,
  UpdateBotRecommendationCommandOutput,
} from "./commands/UpdateBotRecommendationCommand";
import {
  UpdateExportCommand,
  UpdateExportCommandInput,
  UpdateExportCommandOutput,
} from "./commands/UpdateExportCommand";
import {
  UpdateIntentCommand,
  UpdateIntentCommandInput,
  UpdateIntentCommandOutput,
} from "./commands/UpdateIntentCommand";
import {
  UpdateResourcePolicyCommand,
  UpdateResourcePolicyCommandInput,
  UpdateResourcePolicyCommandOutput,
} from "./commands/UpdateResourcePolicyCommand";
import { UpdateSlotCommand, UpdateSlotCommandInput, UpdateSlotCommandOutput } from "./commands/UpdateSlotCommand";
import {
  UpdateSlotTypeCommand,
  UpdateSlotTypeCommandInput,
  UpdateSlotTypeCommandOutput,
} from "./commands/UpdateSlotTypeCommand";
import {
  UpdateTestSetCommand,
  UpdateTestSetCommandInput,
  UpdateTestSetCommandOutput,
} from "./commands/UpdateTestSetCommand";
import { LexModelsV2Client, LexModelsV2ClientConfig } from "./LexModelsV2Client";

const commands = {
  BatchCreateCustomVocabularyItemCommand,
  BatchDeleteCustomVocabularyItemCommand,
  BatchUpdateCustomVocabularyItemCommand,
  BuildBotLocaleCommand,
  CreateBotCommand,
  CreateBotAliasCommand,
  CreateBotLocaleCommand,
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
  DeleteBotLocaleCommand,
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
  DescribeBotLocaleCommand,
  DescribeBotRecommendationCommand,
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
  GetTestExecutionArtifactsUrlCommand,
  ListAggregatedUtterancesCommand,
  ListBotAliasesCommand,
  ListBotLocalesCommand,
  ListBotRecommendationsCommand,
  ListBotsCommand,
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
  StartBotRecommendationCommand,
  StartImportCommand,
  StartTestExecutionCommand,
  StartTestSetGenerationCommand,
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

export interface LexModelsV2 {
  /**
   * @see {@link BatchCreateCustomVocabularyItemCommand}
   */
  batchCreateCustomVocabularyItem(
    args: BatchCreateCustomVocabularyItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateCustomVocabularyItemCommandOutput>;
  batchCreateCustomVocabularyItem(
    args: BatchCreateCustomVocabularyItemCommandInput,
    cb: (err: any, data?: BatchCreateCustomVocabularyItemCommandOutput) => void
  ): void;
  batchCreateCustomVocabularyItem(
    args: BatchCreateCustomVocabularyItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateCustomVocabularyItemCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteCustomVocabularyItemCommand}
   */
  batchDeleteCustomVocabularyItem(
    args: BatchDeleteCustomVocabularyItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteCustomVocabularyItemCommandOutput>;
  batchDeleteCustomVocabularyItem(
    args: BatchDeleteCustomVocabularyItemCommandInput,
    cb: (err: any, data?: BatchDeleteCustomVocabularyItemCommandOutput) => void
  ): void;
  batchDeleteCustomVocabularyItem(
    args: BatchDeleteCustomVocabularyItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteCustomVocabularyItemCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateCustomVocabularyItemCommand}
   */
  batchUpdateCustomVocabularyItem(
    args: BatchUpdateCustomVocabularyItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateCustomVocabularyItemCommandOutput>;
  batchUpdateCustomVocabularyItem(
    args: BatchUpdateCustomVocabularyItemCommandInput,
    cb: (err: any, data?: BatchUpdateCustomVocabularyItemCommandOutput) => void
  ): void;
  batchUpdateCustomVocabularyItem(
    args: BatchUpdateCustomVocabularyItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateCustomVocabularyItemCommandOutput) => void
  ): void;

  /**
   * @see {@link BuildBotLocaleCommand}
   */
  buildBotLocale(
    args: BuildBotLocaleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BuildBotLocaleCommandOutput>;
  buildBotLocale(args: BuildBotLocaleCommandInput, cb: (err: any, data?: BuildBotLocaleCommandOutput) => void): void;
  buildBotLocale(
    args: BuildBotLocaleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BuildBotLocaleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBotCommand}
   */
  createBot(args: CreateBotCommandInput, options?: __HttpHandlerOptions): Promise<CreateBotCommandOutput>;
  createBot(args: CreateBotCommandInput, cb: (err: any, data?: CreateBotCommandOutput) => void): void;
  createBot(
    args: CreateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBotAliasCommand}
   */
  createBotAlias(
    args: CreateBotAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBotAliasCommandOutput>;
  createBotAlias(args: CreateBotAliasCommandInput, cb: (err: any, data?: CreateBotAliasCommandOutput) => void): void;
  createBotAlias(
    args: CreateBotAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBotAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBotLocaleCommand}
   */
  createBotLocale(
    args: CreateBotLocaleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBotLocaleCommandOutput>;
  createBotLocale(args: CreateBotLocaleCommandInput, cb: (err: any, data?: CreateBotLocaleCommandOutput) => void): void;
  createBotLocale(
    args: CreateBotLocaleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBotLocaleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBotVersionCommand}
   */
  createBotVersion(
    args: CreateBotVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBotVersionCommandOutput>;
  createBotVersion(
    args: CreateBotVersionCommandInput,
    cb: (err: any, data?: CreateBotVersionCommandOutput) => void
  ): void;
  createBotVersion(
    args: CreateBotVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBotVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExportCommand}
   */
  createExport(args: CreateExportCommandInput, options?: __HttpHandlerOptions): Promise<CreateExportCommandOutput>;
  createExport(args: CreateExportCommandInput, cb: (err: any, data?: CreateExportCommandOutput) => void): void;
  createExport(
    args: CreateExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExportCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntentCommand}
   */
  createIntent(args: CreateIntentCommandInput, options?: __HttpHandlerOptions): Promise<CreateIntentCommandOutput>;
  createIntent(args: CreateIntentCommandInput, cb: (err: any, data?: CreateIntentCommandOutput) => void): void;
  createIntent(
    args: CreateIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourcePolicyCommand}
   */
  createResourcePolicy(
    args: CreateResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourcePolicyCommandOutput>;
  createResourcePolicy(
    args: CreateResourcePolicyCommandInput,
    cb: (err: any, data?: CreateResourcePolicyCommandOutput) => void
  ): void;
  createResourcePolicy(
    args: CreateResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourcePolicyStatementCommand}
   */
  createResourcePolicyStatement(
    args: CreateResourcePolicyStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourcePolicyStatementCommandOutput>;
  createResourcePolicyStatement(
    args: CreateResourcePolicyStatementCommandInput,
    cb: (err: any, data?: CreateResourcePolicyStatementCommandOutput) => void
  ): void;
  createResourcePolicyStatement(
    args: CreateResourcePolicyStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourcePolicyStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSlotCommand}
   */
  createSlot(args: CreateSlotCommandInput, options?: __HttpHandlerOptions): Promise<CreateSlotCommandOutput>;
  createSlot(args: CreateSlotCommandInput, cb: (err: any, data?: CreateSlotCommandOutput) => void): void;
  createSlot(
    args: CreateSlotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSlotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSlotTypeCommand}
   */
  createSlotType(
    args: CreateSlotTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSlotTypeCommandOutput>;
  createSlotType(args: CreateSlotTypeCommandInput, cb: (err: any, data?: CreateSlotTypeCommandOutput) => void): void;
  createSlotType(
    args: CreateSlotTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSlotTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTestSetDiscrepancyReportCommand}
   */
  createTestSetDiscrepancyReport(
    args: CreateTestSetDiscrepancyReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTestSetDiscrepancyReportCommandOutput>;
  createTestSetDiscrepancyReport(
    args: CreateTestSetDiscrepancyReportCommandInput,
    cb: (err: any, data?: CreateTestSetDiscrepancyReportCommandOutput) => void
  ): void;
  createTestSetDiscrepancyReport(
    args: CreateTestSetDiscrepancyReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTestSetDiscrepancyReportCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUploadUrlCommand}
   */
  createUploadUrl(
    args: CreateUploadUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUploadUrlCommandOutput>;
  createUploadUrl(args: CreateUploadUrlCommandInput, cb: (err: any, data?: CreateUploadUrlCommandOutput) => void): void;
  createUploadUrl(
    args: CreateUploadUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUploadUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBotCommand}
   */
  deleteBot(args: DeleteBotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBotCommandOutput>;
  deleteBot(args: DeleteBotCommandInput, cb: (err: any, data?: DeleteBotCommandOutput) => void): void;
  deleteBot(
    args: DeleteBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBotAliasCommand}
   */
  deleteBotAlias(
    args: DeleteBotAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBotAliasCommandOutput>;
  deleteBotAlias(args: DeleteBotAliasCommandInput, cb: (err: any, data?: DeleteBotAliasCommandOutput) => void): void;
  deleteBotAlias(
    args: DeleteBotAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBotAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBotLocaleCommand}
   */
  deleteBotLocale(
    args: DeleteBotLocaleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBotLocaleCommandOutput>;
  deleteBotLocale(args: DeleteBotLocaleCommandInput, cb: (err: any, data?: DeleteBotLocaleCommandOutput) => void): void;
  deleteBotLocale(
    args: DeleteBotLocaleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBotLocaleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBotVersionCommand}
   */
  deleteBotVersion(
    args: DeleteBotVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBotVersionCommandOutput>;
  deleteBotVersion(
    args: DeleteBotVersionCommandInput,
    cb: (err: any, data?: DeleteBotVersionCommandOutput) => void
  ): void;
  deleteBotVersion(
    args: DeleteBotVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBotVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomVocabularyCommand}
   */
  deleteCustomVocabulary(
    args: DeleteCustomVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomVocabularyCommandOutput>;
  deleteCustomVocabulary(
    args: DeleteCustomVocabularyCommandInput,
    cb: (err: any, data?: DeleteCustomVocabularyCommandOutput) => void
  ): void;
  deleteCustomVocabulary(
    args: DeleteCustomVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomVocabularyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExportCommand}
   */
  deleteExport(args: DeleteExportCommandInput, options?: __HttpHandlerOptions): Promise<DeleteExportCommandOutput>;
  deleteExport(args: DeleteExportCommandInput, cb: (err: any, data?: DeleteExportCommandOutput) => void): void;
  deleteExport(
    args: DeleteExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImportCommand}
   */
  deleteImport(args: DeleteImportCommandInput, options?: __HttpHandlerOptions): Promise<DeleteImportCommandOutput>;
  deleteImport(args: DeleteImportCommandInput, cb: (err: any, data?: DeleteImportCommandOutput) => void): void;
  deleteImport(
    args: DeleteImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImportCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntentCommand}
   */
  deleteIntent(args: DeleteIntentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIntentCommandOutput>;
  deleteIntent(args: DeleteIntentCommandInput, cb: (err: any, data?: DeleteIntentCommandOutput) => void): void;
  deleteIntent(
    args: DeleteIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntentCommandOutput) => void
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
   * @see {@link DeleteResourcePolicyStatementCommand}
   */
  deleteResourcePolicyStatement(
    args: DeleteResourcePolicyStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyStatementCommandOutput>;
  deleteResourcePolicyStatement(
    args: DeleteResourcePolicyStatementCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyStatementCommandOutput) => void
  ): void;
  deleteResourcePolicyStatement(
    args: DeleteResourcePolicyStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSlotCommand}
   */
  deleteSlot(args: DeleteSlotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSlotCommandOutput>;
  deleteSlot(args: DeleteSlotCommandInput, cb: (err: any, data?: DeleteSlotCommandOutput) => void): void;
  deleteSlot(
    args: DeleteSlotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSlotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSlotTypeCommand}
   */
  deleteSlotType(
    args: DeleteSlotTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSlotTypeCommandOutput>;
  deleteSlotType(args: DeleteSlotTypeCommandInput, cb: (err: any, data?: DeleteSlotTypeCommandOutput) => void): void;
  deleteSlotType(
    args: DeleteSlotTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSlotTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTestSetCommand}
   */
  deleteTestSet(args: DeleteTestSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTestSetCommandOutput>;
  deleteTestSet(args: DeleteTestSetCommandInput, cb: (err: any, data?: DeleteTestSetCommandOutput) => void): void;
  deleteTestSet(
    args: DeleteTestSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTestSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUtterancesCommand}
   */
  deleteUtterances(
    args: DeleteUtterancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUtterancesCommandOutput>;
  deleteUtterances(
    args: DeleteUtterancesCommandInput,
    cb: (err: any, data?: DeleteUtterancesCommandOutput) => void
  ): void;
  deleteUtterances(
    args: DeleteUtterancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUtterancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBotCommand}
   */
  describeBot(args: DescribeBotCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBotCommandOutput>;
  describeBot(args: DescribeBotCommandInput, cb: (err: any, data?: DescribeBotCommandOutput) => void): void;
  describeBot(
    args: DescribeBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBotCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBotAliasCommand}
   */
  describeBotAlias(
    args: DescribeBotAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBotAliasCommandOutput>;
  describeBotAlias(
    args: DescribeBotAliasCommandInput,
    cb: (err: any, data?: DescribeBotAliasCommandOutput) => void
  ): void;
  describeBotAlias(
    args: DescribeBotAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBotAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBotLocaleCommand}
   */
  describeBotLocale(
    args: DescribeBotLocaleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBotLocaleCommandOutput>;
  describeBotLocale(
    args: DescribeBotLocaleCommandInput,
    cb: (err: any, data?: DescribeBotLocaleCommandOutput) => void
  ): void;
  describeBotLocale(
    args: DescribeBotLocaleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBotLocaleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBotRecommendationCommand}
   */
  describeBotRecommendation(
    args: DescribeBotRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBotRecommendationCommandOutput>;
  describeBotRecommendation(
    args: DescribeBotRecommendationCommandInput,
    cb: (err: any, data?: DescribeBotRecommendationCommandOutput) => void
  ): void;
  describeBotRecommendation(
    args: DescribeBotRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBotRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBotVersionCommand}
   */
  describeBotVersion(
    args: DescribeBotVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBotVersionCommandOutput>;
  describeBotVersion(
    args: DescribeBotVersionCommandInput,
    cb: (err: any, data?: DescribeBotVersionCommandOutput) => void
  ): void;
  describeBotVersion(
    args: DescribeBotVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBotVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomVocabularyMetadataCommand}
   */
  describeCustomVocabularyMetadata(
    args: DescribeCustomVocabularyMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomVocabularyMetadataCommandOutput>;
  describeCustomVocabularyMetadata(
    args: DescribeCustomVocabularyMetadataCommandInput,
    cb: (err: any, data?: DescribeCustomVocabularyMetadataCommandOutput) => void
  ): void;
  describeCustomVocabularyMetadata(
    args: DescribeCustomVocabularyMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomVocabularyMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExportCommand}
   */
  describeExport(
    args: DescribeExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportCommandOutput>;
  describeExport(args: DescribeExportCommandInput, cb: (err: any, data?: DescribeExportCommandOutput) => void): void;
  describeExport(
    args: DescribeExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImportCommand}
   */
  describeImport(
    args: DescribeImportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImportCommandOutput>;
  describeImport(args: DescribeImportCommandInput, cb: (err: any, data?: DescribeImportCommandOutput) => void): void;
  describeImport(
    args: DescribeImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIntentCommand}
   */
  describeIntent(
    args: DescribeIntentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIntentCommandOutput>;
  describeIntent(args: DescribeIntentCommandInput, cb: (err: any, data?: DescribeIntentCommandOutput) => void): void;
  describeIntent(
    args: DescribeIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIntentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourcePolicyCommand}
   */
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourcePolicyCommandOutput>;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSlotCommand}
   */
  describeSlot(args: DescribeSlotCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSlotCommandOutput>;
  describeSlot(args: DescribeSlotCommandInput, cb: (err: any, data?: DescribeSlotCommandOutput) => void): void;
  describeSlot(
    args: DescribeSlotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSlotCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSlotTypeCommand}
   */
  describeSlotType(
    args: DescribeSlotTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSlotTypeCommandOutput>;
  describeSlotType(
    args: DescribeSlotTypeCommandInput,
    cb: (err: any, data?: DescribeSlotTypeCommandOutput) => void
  ): void;
  describeSlotType(
    args: DescribeSlotTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSlotTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTestExecutionCommand}
   */
  describeTestExecution(
    args: DescribeTestExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTestExecutionCommandOutput>;
  describeTestExecution(
    args: DescribeTestExecutionCommandInput,
    cb: (err: any, data?: DescribeTestExecutionCommandOutput) => void
  ): void;
  describeTestExecution(
    args: DescribeTestExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTestExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTestSetCommand}
   */
  describeTestSet(
    args: DescribeTestSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTestSetCommandOutput>;
  describeTestSet(args: DescribeTestSetCommandInput, cb: (err: any, data?: DescribeTestSetCommandOutput) => void): void;
  describeTestSet(
    args: DescribeTestSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTestSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTestSetDiscrepancyReportCommand}
   */
  describeTestSetDiscrepancyReport(
    args: DescribeTestSetDiscrepancyReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTestSetDiscrepancyReportCommandOutput>;
  describeTestSetDiscrepancyReport(
    args: DescribeTestSetDiscrepancyReportCommandInput,
    cb: (err: any, data?: DescribeTestSetDiscrepancyReportCommandOutput) => void
  ): void;
  describeTestSetDiscrepancyReport(
    args: DescribeTestSetDiscrepancyReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTestSetDiscrepancyReportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTestSetGenerationCommand}
   */
  describeTestSetGeneration(
    args: DescribeTestSetGenerationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTestSetGenerationCommandOutput>;
  describeTestSetGeneration(
    args: DescribeTestSetGenerationCommandInput,
    cb: (err: any, data?: DescribeTestSetGenerationCommandOutput) => void
  ): void;
  describeTestSetGeneration(
    args: DescribeTestSetGenerationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTestSetGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTestExecutionArtifactsUrlCommand}
   */
  getTestExecutionArtifactsUrl(
    args: GetTestExecutionArtifactsUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTestExecutionArtifactsUrlCommandOutput>;
  getTestExecutionArtifactsUrl(
    args: GetTestExecutionArtifactsUrlCommandInput,
    cb: (err: any, data?: GetTestExecutionArtifactsUrlCommandOutput) => void
  ): void;
  getTestExecutionArtifactsUrl(
    args: GetTestExecutionArtifactsUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTestExecutionArtifactsUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAggregatedUtterancesCommand}
   */
  listAggregatedUtterances(
    args: ListAggregatedUtterancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAggregatedUtterancesCommandOutput>;
  listAggregatedUtterances(
    args: ListAggregatedUtterancesCommandInput,
    cb: (err: any, data?: ListAggregatedUtterancesCommandOutput) => void
  ): void;
  listAggregatedUtterances(
    args: ListAggregatedUtterancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAggregatedUtterancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotAliasesCommand}
   */
  listBotAliases(
    args: ListBotAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBotAliasesCommandOutput>;
  listBotAliases(args: ListBotAliasesCommandInput, cb: (err: any, data?: ListBotAliasesCommandOutput) => void): void;
  listBotAliases(
    args: ListBotAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotLocalesCommand}
   */
  listBotLocales(
    args: ListBotLocalesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBotLocalesCommandOutput>;
  listBotLocales(args: ListBotLocalesCommandInput, cb: (err: any, data?: ListBotLocalesCommandOutput) => void): void;
  listBotLocales(
    args: ListBotLocalesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotLocalesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotRecommendationsCommand}
   */
  listBotRecommendations(
    args: ListBotRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBotRecommendationsCommandOutput>;
  listBotRecommendations(
    args: ListBotRecommendationsCommandInput,
    cb: (err: any, data?: ListBotRecommendationsCommandOutput) => void
  ): void;
  listBotRecommendations(
    args: ListBotRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotsCommand}
   */
  listBots(args: ListBotsCommandInput, options?: __HttpHandlerOptions): Promise<ListBotsCommandOutput>;
  listBots(args: ListBotsCommandInput, cb: (err: any, data?: ListBotsCommandOutput) => void): void;
  listBots(
    args: ListBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotVersionsCommand}
   */
  listBotVersions(
    args: ListBotVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBotVersionsCommandOutput>;
  listBotVersions(args: ListBotVersionsCommandInput, cb: (err: any, data?: ListBotVersionsCommandOutput) => void): void;
  listBotVersions(
    args: ListBotVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBuiltInIntentsCommand}
   */
  listBuiltInIntents(
    args: ListBuiltInIntentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBuiltInIntentsCommandOutput>;
  listBuiltInIntents(
    args: ListBuiltInIntentsCommandInput,
    cb: (err: any, data?: ListBuiltInIntentsCommandOutput) => void
  ): void;
  listBuiltInIntents(
    args: ListBuiltInIntentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuiltInIntentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBuiltInSlotTypesCommand}
   */
  listBuiltInSlotTypes(
    args: ListBuiltInSlotTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBuiltInSlotTypesCommandOutput>;
  listBuiltInSlotTypes(
    args: ListBuiltInSlotTypesCommandInput,
    cb: (err: any, data?: ListBuiltInSlotTypesCommandOutput) => void
  ): void;
  listBuiltInSlotTypes(
    args: ListBuiltInSlotTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuiltInSlotTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomVocabularyItemsCommand}
   */
  listCustomVocabularyItems(
    args: ListCustomVocabularyItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomVocabularyItemsCommandOutput>;
  listCustomVocabularyItems(
    args: ListCustomVocabularyItemsCommandInput,
    cb: (err: any, data?: ListCustomVocabularyItemsCommandOutput) => void
  ): void;
  listCustomVocabularyItems(
    args: ListCustomVocabularyItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomVocabularyItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExportsCommand}
   */
  listExports(args: ListExportsCommandInput, options?: __HttpHandlerOptions): Promise<ListExportsCommandOutput>;
  listExports(args: ListExportsCommandInput, cb: (err: any, data?: ListExportsCommandOutput) => void): void;
  listExports(
    args: ListExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImportsCommand}
   */
  listImports(args: ListImportsCommandInput, options?: __HttpHandlerOptions): Promise<ListImportsCommandOutput>;
  listImports(args: ListImportsCommandInput, cb: (err: any, data?: ListImportsCommandOutput) => void): void;
  listImports(
    args: ListImportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntentMetricsCommand}
   */
  listIntentMetrics(
    args: ListIntentMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIntentMetricsCommandOutput>;
  listIntentMetrics(
    args: ListIntentMetricsCommandInput,
    cb: (err: any, data?: ListIntentMetricsCommandOutput) => void
  ): void;
  listIntentMetrics(
    args: ListIntentMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIntentMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntentPathsCommand}
   */
  listIntentPaths(
    args: ListIntentPathsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIntentPathsCommandOutput>;
  listIntentPaths(args: ListIntentPathsCommandInput, cb: (err: any, data?: ListIntentPathsCommandOutput) => void): void;
  listIntentPaths(
    args: ListIntentPathsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIntentPathsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntentsCommand}
   */
  listIntents(args: ListIntentsCommandInput, options?: __HttpHandlerOptions): Promise<ListIntentsCommandOutput>;
  listIntents(args: ListIntentsCommandInput, cb: (err: any, data?: ListIntentsCommandOutput) => void): void;
  listIntents(
    args: ListIntentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIntentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntentStageMetricsCommand}
   */
  listIntentStageMetrics(
    args: ListIntentStageMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIntentStageMetricsCommandOutput>;
  listIntentStageMetrics(
    args: ListIntentStageMetricsCommandInput,
    cb: (err: any, data?: ListIntentStageMetricsCommandOutput) => void
  ): void;
  listIntentStageMetrics(
    args: ListIntentStageMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIntentStageMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendedIntentsCommand}
   */
  listRecommendedIntents(
    args: ListRecommendedIntentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendedIntentsCommandOutput>;
  listRecommendedIntents(
    args: ListRecommendedIntentsCommandInput,
    cb: (err: any, data?: ListRecommendedIntentsCommandOutput) => void
  ): void;
  listRecommendedIntents(
    args: ListRecommendedIntentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendedIntentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionAnalyticsDataCommand}
   */
  listSessionAnalyticsData(
    args: ListSessionAnalyticsDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSessionAnalyticsDataCommandOutput>;
  listSessionAnalyticsData(
    args: ListSessionAnalyticsDataCommandInput,
    cb: (err: any, data?: ListSessionAnalyticsDataCommandOutput) => void
  ): void;
  listSessionAnalyticsData(
    args: ListSessionAnalyticsDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSessionAnalyticsDataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionMetricsCommand}
   */
  listSessionMetrics(
    args: ListSessionMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSessionMetricsCommandOutput>;
  listSessionMetrics(
    args: ListSessionMetricsCommandInput,
    cb: (err: any, data?: ListSessionMetricsCommandOutput) => void
  ): void;
  listSessionMetrics(
    args: ListSessionMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSessionMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSlotsCommand}
   */
  listSlots(args: ListSlotsCommandInput, options?: __HttpHandlerOptions): Promise<ListSlotsCommandOutput>;
  listSlots(args: ListSlotsCommandInput, cb: (err: any, data?: ListSlotsCommandOutput) => void): void;
  listSlots(
    args: ListSlotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSlotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSlotTypesCommand}
   */
  listSlotTypes(args: ListSlotTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListSlotTypesCommandOutput>;
  listSlotTypes(args: ListSlotTypesCommandInput, cb: (err: any, data?: ListSlotTypesCommandOutput) => void): void;
  listSlotTypes(
    args: ListSlotTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSlotTypesCommandOutput) => void
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
   * @see {@link ListTestExecutionResultItemsCommand}
   */
  listTestExecutionResultItems(
    args: ListTestExecutionResultItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestExecutionResultItemsCommandOutput>;
  listTestExecutionResultItems(
    args: ListTestExecutionResultItemsCommandInput,
    cb: (err: any, data?: ListTestExecutionResultItemsCommandOutput) => void
  ): void;
  listTestExecutionResultItems(
    args: ListTestExecutionResultItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestExecutionResultItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestExecutionsCommand}
   */
  listTestExecutions(
    args: ListTestExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestExecutionsCommandOutput>;
  listTestExecutions(
    args: ListTestExecutionsCommandInput,
    cb: (err: any, data?: ListTestExecutionsCommandOutput) => void
  ): void;
  listTestExecutions(
    args: ListTestExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestSetRecordsCommand}
   */
  listTestSetRecords(
    args: ListTestSetRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestSetRecordsCommandOutput>;
  listTestSetRecords(
    args: ListTestSetRecordsCommandInput,
    cb: (err: any, data?: ListTestSetRecordsCommandOutput) => void
  ): void;
  listTestSetRecords(
    args: ListTestSetRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestSetRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestSetsCommand}
   */
  listTestSets(args: ListTestSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListTestSetsCommandOutput>;
  listTestSets(args: ListTestSetsCommandInput, cb: (err: any, data?: ListTestSetsCommandOutput) => void): void;
  listTestSets(
    args: ListTestSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUtteranceAnalyticsDataCommand}
   */
  listUtteranceAnalyticsData(
    args: ListUtteranceAnalyticsDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUtteranceAnalyticsDataCommandOutput>;
  listUtteranceAnalyticsData(
    args: ListUtteranceAnalyticsDataCommandInput,
    cb: (err: any, data?: ListUtteranceAnalyticsDataCommandOutput) => void
  ): void;
  listUtteranceAnalyticsData(
    args: ListUtteranceAnalyticsDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUtteranceAnalyticsDataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUtteranceMetricsCommand}
   */
  listUtteranceMetrics(
    args: ListUtteranceMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUtteranceMetricsCommandOutput>;
  listUtteranceMetrics(
    args: ListUtteranceMetricsCommandInput,
    cb: (err: any, data?: ListUtteranceMetricsCommandOutput) => void
  ): void;
  listUtteranceMetrics(
    args: ListUtteranceMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUtteranceMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAssociatedTranscriptsCommand}
   */
  searchAssociatedTranscripts(
    args: SearchAssociatedTranscriptsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAssociatedTranscriptsCommandOutput>;
  searchAssociatedTranscripts(
    args: SearchAssociatedTranscriptsCommandInput,
    cb: (err: any, data?: SearchAssociatedTranscriptsCommandOutput) => void
  ): void;
  searchAssociatedTranscripts(
    args: SearchAssociatedTranscriptsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAssociatedTranscriptsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBotRecommendationCommand}
   */
  startBotRecommendation(
    args: StartBotRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBotRecommendationCommandOutput>;
  startBotRecommendation(
    args: StartBotRecommendationCommandInput,
    cb: (err: any, data?: StartBotRecommendationCommandOutput) => void
  ): void;
  startBotRecommendation(
    args: StartBotRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBotRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImportCommand}
   */
  startImport(args: StartImportCommandInput, options?: __HttpHandlerOptions): Promise<StartImportCommandOutput>;
  startImport(args: StartImportCommandInput, cb: (err: any, data?: StartImportCommandOutput) => void): void;
  startImport(
    args: StartImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTestExecutionCommand}
   */
  startTestExecution(
    args: StartTestExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTestExecutionCommandOutput>;
  startTestExecution(
    args: StartTestExecutionCommandInput,
    cb: (err: any, data?: StartTestExecutionCommandOutput) => void
  ): void;
  startTestExecution(
    args: StartTestExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTestExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTestSetGenerationCommand}
   */
  startTestSetGeneration(
    args: StartTestSetGenerationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTestSetGenerationCommandOutput>;
  startTestSetGeneration(
    args: StartTestSetGenerationCommandInput,
    cb: (err: any, data?: StartTestSetGenerationCommandOutput) => void
  ): void;
  startTestSetGeneration(
    args: StartTestSetGenerationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTestSetGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopBotRecommendationCommand}
   */
  stopBotRecommendation(
    args: StopBotRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopBotRecommendationCommandOutput>;
  stopBotRecommendation(
    args: StopBotRecommendationCommandInput,
    cb: (err: any, data?: StopBotRecommendationCommandOutput) => void
  ): void;
  stopBotRecommendation(
    args: StopBotRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBotRecommendationCommandOutput) => void
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
   * @see {@link UpdateBotCommand}
   */
  updateBot(args: UpdateBotCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBotCommandOutput>;
  updateBot(args: UpdateBotCommandInput, cb: (err: any, data?: UpdateBotCommandOutput) => void): void;
  updateBot(
    args: UpdateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBotCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBotAliasCommand}
   */
  updateBotAlias(
    args: UpdateBotAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBotAliasCommandOutput>;
  updateBotAlias(args: UpdateBotAliasCommandInput, cb: (err: any, data?: UpdateBotAliasCommandOutput) => void): void;
  updateBotAlias(
    args: UpdateBotAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBotAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBotLocaleCommand}
   */
  updateBotLocale(
    args: UpdateBotLocaleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBotLocaleCommandOutput>;
  updateBotLocale(args: UpdateBotLocaleCommandInput, cb: (err: any, data?: UpdateBotLocaleCommandOutput) => void): void;
  updateBotLocale(
    args: UpdateBotLocaleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBotLocaleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBotRecommendationCommand}
   */
  updateBotRecommendation(
    args: UpdateBotRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBotRecommendationCommandOutput>;
  updateBotRecommendation(
    args: UpdateBotRecommendationCommandInput,
    cb: (err: any, data?: UpdateBotRecommendationCommandOutput) => void
  ): void;
  updateBotRecommendation(
    args: UpdateBotRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBotRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateExportCommand}
   */
  updateExport(args: UpdateExportCommandInput, options?: __HttpHandlerOptions): Promise<UpdateExportCommandOutput>;
  updateExport(args: UpdateExportCommandInput, cb: (err: any, data?: UpdateExportCommandOutput) => void): void;
  updateExport(
    args: UpdateExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExportCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntentCommand}
   */
  updateIntent(args: UpdateIntentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIntentCommandOutput>;
  updateIntent(args: UpdateIntentCommandInput, cb: (err: any, data?: UpdateIntentCommandOutput) => void): void;
  updateIntent(
    args: UpdateIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIntentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourcePolicyCommand}
   */
  updateResourcePolicy(
    args: UpdateResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourcePolicyCommandOutput>;
  updateResourcePolicy(
    args: UpdateResourcePolicyCommandInput,
    cb: (err: any, data?: UpdateResourcePolicyCommandOutput) => void
  ): void;
  updateResourcePolicy(
    args: UpdateResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSlotCommand}
   */
  updateSlot(args: UpdateSlotCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSlotCommandOutput>;
  updateSlot(args: UpdateSlotCommandInput, cb: (err: any, data?: UpdateSlotCommandOutput) => void): void;
  updateSlot(
    args: UpdateSlotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSlotCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSlotTypeCommand}
   */
  updateSlotType(
    args: UpdateSlotTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSlotTypeCommandOutput>;
  updateSlotType(args: UpdateSlotTypeCommandInput, cb: (err: any, data?: UpdateSlotTypeCommandOutput) => void): void;
  updateSlotType(
    args: UpdateSlotTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSlotTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTestSetCommand}
   */
  updateTestSet(args: UpdateTestSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTestSetCommandOutput>;
  updateTestSet(args: UpdateTestSetCommandInput, cb: (err: any, data?: UpdateTestSetCommandOutput) => void): void;
  updateTestSet(
    args: UpdateTestSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTestSetCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p></p>
 */
export class LexModelsV2 extends LexModelsV2Client implements LexModelsV2 {}
createAggregatedClient(commands, LexModelsV2);
