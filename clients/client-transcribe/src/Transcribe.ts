// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateCallAnalyticsCategoryCommand,
  CreateCallAnalyticsCategoryCommandInput,
  CreateCallAnalyticsCategoryCommandOutput,
} from "./commands/CreateCallAnalyticsCategoryCommand";
import {
  CreateLanguageModelCommand,
  CreateLanguageModelCommandInput,
  CreateLanguageModelCommandOutput,
} from "./commands/CreateLanguageModelCommand";
import {
  CreateMedicalVocabularyCommand,
  CreateMedicalVocabularyCommandInput,
  CreateMedicalVocabularyCommandOutput,
} from "./commands/CreateMedicalVocabularyCommand";
import {
  CreateVocabularyCommand,
  CreateVocabularyCommandInput,
  CreateVocabularyCommandOutput,
} from "./commands/CreateVocabularyCommand";
import {
  CreateVocabularyFilterCommand,
  CreateVocabularyFilterCommandInput,
  CreateVocabularyFilterCommandOutput,
} from "./commands/CreateVocabularyFilterCommand";
import {
  DeleteCallAnalyticsCategoryCommand,
  DeleteCallAnalyticsCategoryCommandInput,
  DeleteCallAnalyticsCategoryCommandOutput,
} from "./commands/DeleteCallAnalyticsCategoryCommand";
import {
  DeleteCallAnalyticsJobCommand,
  DeleteCallAnalyticsJobCommandInput,
  DeleteCallAnalyticsJobCommandOutput,
} from "./commands/DeleteCallAnalyticsJobCommand";
import {
  DeleteLanguageModelCommand,
  DeleteLanguageModelCommandInput,
  DeleteLanguageModelCommandOutput,
} from "./commands/DeleteLanguageModelCommand";
import {
  DeleteMedicalTranscriptionJobCommand,
  DeleteMedicalTranscriptionJobCommandInput,
  DeleteMedicalTranscriptionJobCommandOutput,
} from "./commands/DeleteMedicalTranscriptionJobCommand";
import {
  DeleteMedicalVocabularyCommand,
  DeleteMedicalVocabularyCommandInput,
  DeleteMedicalVocabularyCommandOutput,
} from "./commands/DeleteMedicalVocabularyCommand";
import {
  DeleteTranscriptionJobCommand,
  DeleteTranscriptionJobCommandInput,
  DeleteTranscriptionJobCommandOutput,
} from "./commands/DeleteTranscriptionJobCommand";
import {
  DeleteVocabularyCommand,
  DeleteVocabularyCommandInput,
  DeleteVocabularyCommandOutput,
} from "./commands/DeleteVocabularyCommand";
import {
  DeleteVocabularyFilterCommand,
  DeleteVocabularyFilterCommandInput,
  DeleteVocabularyFilterCommandOutput,
} from "./commands/DeleteVocabularyFilterCommand";
import {
  DescribeLanguageModelCommand,
  DescribeLanguageModelCommandInput,
  DescribeLanguageModelCommandOutput,
} from "./commands/DescribeLanguageModelCommand";
import {
  GetCallAnalyticsCategoryCommand,
  GetCallAnalyticsCategoryCommandInput,
  GetCallAnalyticsCategoryCommandOutput,
} from "./commands/GetCallAnalyticsCategoryCommand";
import {
  GetCallAnalyticsJobCommand,
  GetCallAnalyticsJobCommandInput,
  GetCallAnalyticsJobCommandOutput,
} from "./commands/GetCallAnalyticsJobCommand";
import {
  GetMedicalTranscriptionJobCommand,
  GetMedicalTranscriptionJobCommandInput,
  GetMedicalTranscriptionJobCommandOutput,
} from "./commands/GetMedicalTranscriptionJobCommand";
import {
  GetMedicalVocabularyCommand,
  GetMedicalVocabularyCommandInput,
  GetMedicalVocabularyCommandOutput,
} from "./commands/GetMedicalVocabularyCommand";
import {
  GetTranscriptionJobCommand,
  GetTranscriptionJobCommandInput,
  GetTranscriptionJobCommandOutput,
} from "./commands/GetTranscriptionJobCommand";
import {
  GetVocabularyCommand,
  GetVocabularyCommandInput,
  GetVocabularyCommandOutput,
} from "./commands/GetVocabularyCommand";
import {
  GetVocabularyFilterCommand,
  GetVocabularyFilterCommandInput,
  GetVocabularyFilterCommandOutput,
} from "./commands/GetVocabularyFilterCommand";
import {
  ListCallAnalyticsCategoriesCommand,
  ListCallAnalyticsCategoriesCommandInput,
  ListCallAnalyticsCategoriesCommandOutput,
} from "./commands/ListCallAnalyticsCategoriesCommand";
import {
  ListCallAnalyticsJobsCommand,
  ListCallAnalyticsJobsCommandInput,
  ListCallAnalyticsJobsCommandOutput,
} from "./commands/ListCallAnalyticsJobsCommand";
import {
  ListLanguageModelsCommand,
  ListLanguageModelsCommandInput,
  ListLanguageModelsCommandOutput,
} from "./commands/ListLanguageModelsCommand";
import {
  ListMedicalTranscriptionJobsCommand,
  ListMedicalTranscriptionJobsCommandInput,
  ListMedicalTranscriptionJobsCommandOutput,
} from "./commands/ListMedicalTranscriptionJobsCommand";
import {
  ListMedicalVocabulariesCommand,
  ListMedicalVocabulariesCommandInput,
  ListMedicalVocabulariesCommandOutput,
} from "./commands/ListMedicalVocabulariesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTranscriptionJobsCommand,
  ListTranscriptionJobsCommandInput,
  ListTranscriptionJobsCommandOutput,
} from "./commands/ListTranscriptionJobsCommand";
import {
  ListVocabulariesCommand,
  ListVocabulariesCommandInput,
  ListVocabulariesCommandOutput,
} from "./commands/ListVocabulariesCommand";
import {
  ListVocabularyFiltersCommand,
  ListVocabularyFiltersCommandInput,
  ListVocabularyFiltersCommandOutput,
} from "./commands/ListVocabularyFiltersCommand";
import {
  StartCallAnalyticsJobCommand,
  StartCallAnalyticsJobCommandInput,
  StartCallAnalyticsJobCommandOutput,
} from "./commands/StartCallAnalyticsJobCommand";
import {
  StartMedicalTranscriptionJobCommand,
  StartMedicalTranscriptionJobCommandInput,
  StartMedicalTranscriptionJobCommandOutput,
} from "./commands/StartMedicalTranscriptionJobCommand";
import {
  StartTranscriptionJobCommand,
  StartTranscriptionJobCommandInput,
  StartTranscriptionJobCommandOutput,
} from "./commands/StartTranscriptionJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCallAnalyticsCategoryCommand,
  UpdateCallAnalyticsCategoryCommandInput,
  UpdateCallAnalyticsCategoryCommandOutput,
} from "./commands/UpdateCallAnalyticsCategoryCommand";
import {
  UpdateMedicalVocabularyCommand,
  UpdateMedicalVocabularyCommandInput,
  UpdateMedicalVocabularyCommandOutput,
} from "./commands/UpdateMedicalVocabularyCommand";
import {
  UpdateVocabularyCommand,
  UpdateVocabularyCommandInput,
  UpdateVocabularyCommandOutput,
} from "./commands/UpdateVocabularyCommand";
import {
  UpdateVocabularyFilterCommand,
  UpdateVocabularyFilterCommandInput,
  UpdateVocabularyFilterCommandOutput,
} from "./commands/UpdateVocabularyFilterCommand";
import { TranscribeClient, TranscribeClientConfig } from "./TranscribeClient";

const commands = {
  CreateCallAnalyticsCategoryCommand,
  CreateLanguageModelCommand,
  CreateMedicalVocabularyCommand,
  CreateVocabularyCommand,
  CreateVocabularyFilterCommand,
  DeleteCallAnalyticsCategoryCommand,
  DeleteCallAnalyticsJobCommand,
  DeleteLanguageModelCommand,
  DeleteMedicalTranscriptionJobCommand,
  DeleteMedicalVocabularyCommand,
  DeleteTranscriptionJobCommand,
  DeleteVocabularyCommand,
  DeleteVocabularyFilterCommand,
  DescribeLanguageModelCommand,
  GetCallAnalyticsCategoryCommand,
  GetCallAnalyticsJobCommand,
  GetMedicalTranscriptionJobCommand,
  GetMedicalVocabularyCommand,
  GetTranscriptionJobCommand,
  GetVocabularyCommand,
  GetVocabularyFilterCommand,
  ListCallAnalyticsCategoriesCommand,
  ListCallAnalyticsJobsCommand,
  ListLanguageModelsCommand,
  ListMedicalTranscriptionJobsCommand,
  ListMedicalVocabulariesCommand,
  ListTagsForResourceCommand,
  ListTranscriptionJobsCommand,
  ListVocabulariesCommand,
  ListVocabularyFiltersCommand,
  StartCallAnalyticsJobCommand,
  StartMedicalTranscriptionJobCommand,
  StartTranscriptionJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCallAnalyticsCategoryCommand,
  UpdateMedicalVocabularyCommand,
  UpdateVocabularyCommand,
  UpdateVocabularyFilterCommand,
};

export interface Transcribe {
  /**
   * @see {@link CreateCallAnalyticsCategoryCommand}
   */
  createCallAnalyticsCategory(
    args: CreateCallAnalyticsCategoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCallAnalyticsCategoryCommandOutput>;
  createCallAnalyticsCategory(
    args: CreateCallAnalyticsCategoryCommandInput,
    cb: (err: any, data?: CreateCallAnalyticsCategoryCommandOutput) => void
  ): void;
  createCallAnalyticsCategory(
    args: CreateCallAnalyticsCategoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCallAnalyticsCategoryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLanguageModelCommand}
   */
  createLanguageModel(
    args: CreateLanguageModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLanguageModelCommandOutput>;
  createLanguageModel(
    args: CreateLanguageModelCommandInput,
    cb: (err: any, data?: CreateLanguageModelCommandOutput) => void
  ): void;
  createLanguageModel(
    args: CreateLanguageModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLanguageModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMedicalVocabularyCommand}
   */
  createMedicalVocabulary(
    args: CreateMedicalVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMedicalVocabularyCommandOutput>;
  createMedicalVocabulary(
    args: CreateMedicalVocabularyCommandInput,
    cb: (err: any, data?: CreateMedicalVocabularyCommandOutput) => void
  ): void;
  createMedicalVocabulary(
    args: CreateMedicalVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMedicalVocabularyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVocabularyCommand}
   */
  createVocabulary(
    args: CreateVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVocabularyCommandOutput>;
  createVocabulary(
    args: CreateVocabularyCommandInput,
    cb: (err: any, data?: CreateVocabularyCommandOutput) => void
  ): void;
  createVocabulary(
    args: CreateVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVocabularyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVocabularyFilterCommand}
   */
  createVocabularyFilter(
    args: CreateVocabularyFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVocabularyFilterCommandOutput>;
  createVocabularyFilter(
    args: CreateVocabularyFilterCommandInput,
    cb: (err: any, data?: CreateVocabularyFilterCommandOutput) => void
  ): void;
  createVocabularyFilter(
    args: CreateVocabularyFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVocabularyFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCallAnalyticsCategoryCommand}
   */
  deleteCallAnalyticsCategory(
    args: DeleteCallAnalyticsCategoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCallAnalyticsCategoryCommandOutput>;
  deleteCallAnalyticsCategory(
    args: DeleteCallAnalyticsCategoryCommandInput,
    cb: (err: any, data?: DeleteCallAnalyticsCategoryCommandOutput) => void
  ): void;
  deleteCallAnalyticsCategory(
    args: DeleteCallAnalyticsCategoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCallAnalyticsCategoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCallAnalyticsJobCommand}
   */
  deleteCallAnalyticsJob(
    args: DeleteCallAnalyticsJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCallAnalyticsJobCommandOutput>;
  deleteCallAnalyticsJob(
    args: DeleteCallAnalyticsJobCommandInput,
    cb: (err: any, data?: DeleteCallAnalyticsJobCommandOutput) => void
  ): void;
  deleteCallAnalyticsJob(
    args: DeleteCallAnalyticsJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCallAnalyticsJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLanguageModelCommand}
   */
  deleteLanguageModel(
    args: DeleteLanguageModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLanguageModelCommandOutput>;
  deleteLanguageModel(
    args: DeleteLanguageModelCommandInput,
    cb: (err: any, data?: DeleteLanguageModelCommandOutput) => void
  ): void;
  deleteLanguageModel(
    args: DeleteLanguageModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLanguageModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMedicalTranscriptionJobCommand}
   */
  deleteMedicalTranscriptionJob(
    args: DeleteMedicalTranscriptionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMedicalTranscriptionJobCommandOutput>;
  deleteMedicalTranscriptionJob(
    args: DeleteMedicalTranscriptionJobCommandInput,
    cb: (err: any, data?: DeleteMedicalTranscriptionJobCommandOutput) => void
  ): void;
  deleteMedicalTranscriptionJob(
    args: DeleteMedicalTranscriptionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMedicalTranscriptionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMedicalVocabularyCommand}
   */
  deleteMedicalVocabulary(
    args: DeleteMedicalVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMedicalVocabularyCommandOutput>;
  deleteMedicalVocabulary(
    args: DeleteMedicalVocabularyCommandInput,
    cb: (err: any, data?: DeleteMedicalVocabularyCommandOutput) => void
  ): void;
  deleteMedicalVocabulary(
    args: DeleteMedicalVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMedicalVocabularyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTranscriptionJobCommand}
   */
  deleteTranscriptionJob(
    args: DeleteTranscriptionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTranscriptionJobCommandOutput>;
  deleteTranscriptionJob(
    args: DeleteTranscriptionJobCommandInput,
    cb: (err: any, data?: DeleteTranscriptionJobCommandOutput) => void
  ): void;
  deleteTranscriptionJob(
    args: DeleteTranscriptionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTranscriptionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVocabularyCommand}
   */
  deleteVocabulary(
    args: DeleteVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVocabularyCommandOutput>;
  deleteVocabulary(
    args: DeleteVocabularyCommandInput,
    cb: (err: any, data?: DeleteVocabularyCommandOutput) => void
  ): void;
  deleteVocabulary(
    args: DeleteVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVocabularyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVocabularyFilterCommand}
   */
  deleteVocabularyFilter(
    args: DeleteVocabularyFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVocabularyFilterCommandOutput>;
  deleteVocabularyFilter(
    args: DeleteVocabularyFilterCommandInput,
    cb: (err: any, data?: DeleteVocabularyFilterCommandOutput) => void
  ): void;
  deleteVocabularyFilter(
    args: DeleteVocabularyFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVocabularyFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLanguageModelCommand}
   */
  describeLanguageModel(
    args: DescribeLanguageModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLanguageModelCommandOutput>;
  describeLanguageModel(
    args: DescribeLanguageModelCommandInput,
    cb: (err: any, data?: DescribeLanguageModelCommandOutput) => void
  ): void;
  describeLanguageModel(
    args: DescribeLanguageModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLanguageModelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCallAnalyticsCategoryCommand}
   */
  getCallAnalyticsCategory(
    args: GetCallAnalyticsCategoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCallAnalyticsCategoryCommandOutput>;
  getCallAnalyticsCategory(
    args: GetCallAnalyticsCategoryCommandInput,
    cb: (err: any, data?: GetCallAnalyticsCategoryCommandOutput) => void
  ): void;
  getCallAnalyticsCategory(
    args: GetCallAnalyticsCategoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCallAnalyticsCategoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCallAnalyticsJobCommand}
   */
  getCallAnalyticsJob(
    args: GetCallAnalyticsJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCallAnalyticsJobCommandOutput>;
  getCallAnalyticsJob(
    args: GetCallAnalyticsJobCommandInput,
    cb: (err: any, data?: GetCallAnalyticsJobCommandOutput) => void
  ): void;
  getCallAnalyticsJob(
    args: GetCallAnalyticsJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCallAnalyticsJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMedicalTranscriptionJobCommand}
   */
  getMedicalTranscriptionJob(
    args: GetMedicalTranscriptionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMedicalTranscriptionJobCommandOutput>;
  getMedicalTranscriptionJob(
    args: GetMedicalTranscriptionJobCommandInput,
    cb: (err: any, data?: GetMedicalTranscriptionJobCommandOutput) => void
  ): void;
  getMedicalTranscriptionJob(
    args: GetMedicalTranscriptionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMedicalTranscriptionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMedicalVocabularyCommand}
   */
  getMedicalVocabulary(
    args: GetMedicalVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMedicalVocabularyCommandOutput>;
  getMedicalVocabulary(
    args: GetMedicalVocabularyCommandInput,
    cb: (err: any, data?: GetMedicalVocabularyCommandOutput) => void
  ): void;
  getMedicalVocabulary(
    args: GetMedicalVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMedicalVocabularyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTranscriptionJobCommand}
   */
  getTranscriptionJob(
    args: GetTranscriptionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTranscriptionJobCommandOutput>;
  getTranscriptionJob(
    args: GetTranscriptionJobCommandInput,
    cb: (err: any, data?: GetTranscriptionJobCommandOutput) => void
  ): void;
  getTranscriptionJob(
    args: GetTranscriptionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTranscriptionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVocabularyCommand}
   */
  getVocabulary(args: GetVocabularyCommandInput, options?: __HttpHandlerOptions): Promise<GetVocabularyCommandOutput>;
  getVocabulary(args: GetVocabularyCommandInput, cb: (err: any, data?: GetVocabularyCommandOutput) => void): void;
  getVocabulary(
    args: GetVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVocabularyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVocabularyFilterCommand}
   */
  getVocabularyFilter(
    args: GetVocabularyFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVocabularyFilterCommandOutput>;
  getVocabularyFilter(
    args: GetVocabularyFilterCommandInput,
    cb: (err: any, data?: GetVocabularyFilterCommandOutput) => void
  ): void;
  getVocabularyFilter(
    args: GetVocabularyFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVocabularyFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCallAnalyticsCategoriesCommand}
   */
  listCallAnalyticsCategories(
    args: ListCallAnalyticsCategoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCallAnalyticsCategoriesCommandOutput>;
  listCallAnalyticsCategories(
    args: ListCallAnalyticsCategoriesCommandInput,
    cb: (err: any, data?: ListCallAnalyticsCategoriesCommandOutput) => void
  ): void;
  listCallAnalyticsCategories(
    args: ListCallAnalyticsCategoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCallAnalyticsCategoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCallAnalyticsJobsCommand}
   */
  listCallAnalyticsJobs(
    args: ListCallAnalyticsJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCallAnalyticsJobsCommandOutput>;
  listCallAnalyticsJobs(
    args: ListCallAnalyticsJobsCommandInput,
    cb: (err: any, data?: ListCallAnalyticsJobsCommandOutput) => void
  ): void;
  listCallAnalyticsJobs(
    args: ListCallAnalyticsJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCallAnalyticsJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLanguageModelsCommand}
   */
  listLanguageModels(
    args: ListLanguageModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLanguageModelsCommandOutput>;
  listLanguageModels(
    args: ListLanguageModelsCommandInput,
    cb: (err: any, data?: ListLanguageModelsCommandOutput) => void
  ): void;
  listLanguageModels(
    args: ListLanguageModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLanguageModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMedicalTranscriptionJobsCommand}
   */
  listMedicalTranscriptionJobs(
    args: ListMedicalTranscriptionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMedicalTranscriptionJobsCommandOutput>;
  listMedicalTranscriptionJobs(
    args: ListMedicalTranscriptionJobsCommandInput,
    cb: (err: any, data?: ListMedicalTranscriptionJobsCommandOutput) => void
  ): void;
  listMedicalTranscriptionJobs(
    args: ListMedicalTranscriptionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMedicalTranscriptionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMedicalVocabulariesCommand}
   */
  listMedicalVocabularies(
    args: ListMedicalVocabulariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMedicalVocabulariesCommandOutput>;
  listMedicalVocabularies(
    args: ListMedicalVocabulariesCommandInput,
    cb: (err: any, data?: ListMedicalVocabulariesCommandOutput) => void
  ): void;
  listMedicalVocabularies(
    args: ListMedicalVocabulariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMedicalVocabulariesCommandOutput) => void
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
   * @see {@link ListTranscriptionJobsCommand}
   */
  listTranscriptionJobs(
    args: ListTranscriptionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTranscriptionJobsCommandOutput>;
  listTranscriptionJobs(
    args: ListTranscriptionJobsCommandInput,
    cb: (err: any, data?: ListTranscriptionJobsCommandOutput) => void
  ): void;
  listTranscriptionJobs(
    args: ListTranscriptionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTranscriptionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVocabulariesCommand}
   */
  listVocabularies(
    args: ListVocabulariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVocabulariesCommandOutput>;
  listVocabularies(
    args: ListVocabulariesCommandInput,
    cb: (err: any, data?: ListVocabulariesCommandOutput) => void
  ): void;
  listVocabularies(
    args: ListVocabulariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVocabulariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVocabularyFiltersCommand}
   */
  listVocabularyFilters(
    args: ListVocabularyFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVocabularyFiltersCommandOutput>;
  listVocabularyFilters(
    args: ListVocabularyFiltersCommandInput,
    cb: (err: any, data?: ListVocabularyFiltersCommandOutput) => void
  ): void;
  listVocabularyFilters(
    args: ListVocabularyFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVocabularyFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCallAnalyticsJobCommand}
   */
  startCallAnalyticsJob(
    args: StartCallAnalyticsJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCallAnalyticsJobCommandOutput>;
  startCallAnalyticsJob(
    args: StartCallAnalyticsJobCommandInput,
    cb: (err: any, data?: StartCallAnalyticsJobCommandOutput) => void
  ): void;
  startCallAnalyticsJob(
    args: StartCallAnalyticsJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCallAnalyticsJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMedicalTranscriptionJobCommand}
   */
  startMedicalTranscriptionJob(
    args: StartMedicalTranscriptionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMedicalTranscriptionJobCommandOutput>;
  startMedicalTranscriptionJob(
    args: StartMedicalTranscriptionJobCommandInput,
    cb: (err: any, data?: StartMedicalTranscriptionJobCommandOutput) => void
  ): void;
  startMedicalTranscriptionJob(
    args: StartMedicalTranscriptionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMedicalTranscriptionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTranscriptionJobCommand}
   */
  startTranscriptionJob(
    args: StartTranscriptionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTranscriptionJobCommandOutput>;
  startTranscriptionJob(
    args: StartTranscriptionJobCommandInput,
    cb: (err: any, data?: StartTranscriptionJobCommandOutput) => void
  ): void;
  startTranscriptionJob(
    args: StartTranscriptionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTranscriptionJobCommandOutput) => void
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
   * @see {@link UpdateCallAnalyticsCategoryCommand}
   */
  updateCallAnalyticsCategory(
    args: UpdateCallAnalyticsCategoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCallAnalyticsCategoryCommandOutput>;
  updateCallAnalyticsCategory(
    args: UpdateCallAnalyticsCategoryCommandInput,
    cb: (err: any, data?: UpdateCallAnalyticsCategoryCommandOutput) => void
  ): void;
  updateCallAnalyticsCategory(
    args: UpdateCallAnalyticsCategoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCallAnalyticsCategoryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMedicalVocabularyCommand}
   */
  updateMedicalVocabulary(
    args: UpdateMedicalVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMedicalVocabularyCommandOutput>;
  updateMedicalVocabulary(
    args: UpdateMedicalVocabularyCommandInput,
    cb: (err: any, data?: UpdateMedicalVocabularyCommandOutput) => void
  ): void;
  updateMedicalVocabulary(
    args: UpdateMedicalVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMedicalVocabularyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVocabularyCommand}
   */
  updateVocabulary(
    args: UpdateVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVocabularyCommandOutput>;
  updateVocabulary(
    args: UpdateVocabularyCommandInput,
    cb: (err: any, data?: UpdateVocabularyCommandOutput) => void
  ): void;
  updateVocabulary(
    args: UpdateVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVocabularyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVocabularyFilterCommand}
   */
  updateVocabularyFilter(
    args: UpdateVocabularyFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVocabularyFilterCommandOutput>;
  updateVocabularyFilter(
    args: UpdateVocabularyFilterCommandInput,
    cb: (err: any, data?: UpdateVocabularyFilterCommandOutput) => void
  ): void;
  updateVocabularyFilter(
    args: UpdateVocabularyFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVocabularyFilterCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Transcribe offers three main types of batch transcription: <b>Standard</b>, <b>Medical</b>, and
 *                 <b>Call Analytics</b>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Standard transcriptions</b> are the most common
 *                     option. Refer to  for details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Medical transcriptions</b> are tailored to
 *                     medical professionals and incorporate medical terms. A common use case for this
 *                     service is transcribing doctor-patient dialogue into after-visit notes. Refer to
 *                          for details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Call Analytics transcriptions</b> are designed
 *                     for use with call center audio on two different channels; if you're looking for
 *                     insight into customer service calls, use this option. Refer to  for details.</p>
 *             </li>
 *          </ul>
 */
export class Transcribe extends TranscribeClient implements Transcribe {}
createAggregatedClient(commands, Transcribe);
