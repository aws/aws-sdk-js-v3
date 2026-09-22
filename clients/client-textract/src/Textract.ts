// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AnalyzeDocumentCommandInput,
  type AnalyzeDocumentCommandOutput,
  AnalyzeDocumentCommand,
} from "./commands/AnalyzeDocumentCommand";
import {
  type AnalyzeExpenseCommandInput,
  type AnalyzeExpenseCommandOutput,
  AnalyzeExpenseCommand,
} from "./commands/AnalyzeExpenseCommand";
import { type AnalyzeIDCommandInput, type AnalyzeIDCommandOutput, AnalyzeIDCommand } from "./commands/AnalyzeIDCommand";
import {
  type CreateAdapterCommandInput,
  type CreateAdapterCommandOutput,
  CreateAdapterCommand,
} from "./commands/CreateAdapterCommand";
import {
  type CreateAdapterVersionCommandInput,
  type CreateAdapterVersionCommandOutput,
  CreateAdapterVersionCommand,
} from "./commands/CreateAdapterVersionCommand";
import {
  type DeleteAdapterCommandInput,
  type DeleteAdapterCommandOutput,
  DeleteAdapterCommand,
} from "./commands/DeleteAdapterCommand";
import {
  type DeleteAdapterVersionCommandInput,
  type DeleteAdapterVersionCommandOutput,
  DeleteAdapterVersionCommand,
} from "./commands/DeleteAdapterVersionCommand";
import {
  type DetectDocumentTextCommandInput,
  type DetectDocumentTextCommandOutput,
  DetectDocumentTextCommand,
} from "./commands/DetectDocumentTextCommand";
import {
  type GetAdapterCommandInput,
  type GetAdapterCommandOutput,
  GetAdapterCommand,
} from "./commands/GetAdapterCommand";
import {
  type GetAdapterVersionCommandInput,
  type GetAdapterVersionCommandOutput,
  GetAdapterVersionCommand,
} from "./commands/GetAdapterVersionCommand";
import {
  type GetDocumentAnalysisCommandInput,
  type GetDocumentAnalysisCommandOutput,
  GetDocumentAnalysisCommand,
} from "./commands/GetDocumentAnalysisCommand";
import {
  type GetDocumentTextDetectionCommandInput,
  type GetDocumentTextDetectionCommandOutput,
  GetDocumentTextDetectionCommand,
} from "./commands/GetDocumentTextDetectionCommand";
import {
  type GetExpenseAnalysisCommandInput,
  type GetExpenseAnalysisCommandOutput,
  GetExpenseAnalysisCommand,
} from "./commands/GetExpenseAnalysisCommand";
import {
  type GetLendingAnalysisCommandInput,
  type GetLendingAnalysisCommandOutput,
  GetLendingAnalysisCommand,
} from "./commands/GetLendingAnalysisCommand";
import {
  type GetLendingAnalysisSummaryCommandInput,
  type GetLendingAnalysisSummaryCommandOutput,
  GetLendingAnalysisSummaryCommand,
} from "./commands/GetLendingAnalysisSummaryCommand";
import {
  type ListAdaptersCommandInput,
  type ListAdaptersCommandOutput,
  ListAdaptersCommand,
} from "./commands/ListAdaptersCommand";
import {
  type ListAdapterVersionsCommandInput,
  type ListAdapterVersionsCommandOutput,
  ListAdapterVersionsCommand,
} from "./commands/ListAdapterVersionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type StartDocumentAnalysisCommandInput,
  type StartDocumentAnalysisCommandOutput,
  StartDocumentAnalysisCommand,
} from "./commands/StartDocumentAnalysisCommand";
import {
  type StartDocumentTextDetectionCommandInput,
  type StartDocumentTextDetectionCommandOutput,
  StartDocumentTextDetectionCommand,
} from "./commands/StartDocumentTextDetectionCommand";
import {
  type StartExpenseAnalysisCommandInput,
  type StartExpenseAnalysisCommandOutput,
  StartExpenseAnalysisCommand,
} from "./commands/StartExpenseAnalysisCommand";
import {
  type StartLendingAnalysisCommandInput,
  type StartLendingAnalysisCommandOutput,
  StartLendingAnalysisCommand,
} from "./commands/StartLendingAnalysisCommand";
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
  type UpdateAdapterCommandInput,
  type UpdateAdapterCommandOutput,
  UpdateAdapterCommand,
} from "./commands/UpdateAdapterCommand";
import { paginateListAdapters } from "./pagination/ListAdaptersPaginator";
import { paginateListAdapterVersions } from "./pagination/ListAdapterVersionsPaginator";
import { TextractClient } from "./TextractClient";

const commands = {
  AnalyzeDocumentCommand,
  AnalyzeExpenseCommand,
  AnalyzeIDCommand,
  CreateAdapterCommand,
  CreateAdapterVersionCommand,
  DeleteAdapterCommand,
  DeleteAdapterVersionCommand,
  DetectDocumentTextCommand,
  GetAdapterCommand,
  GetAdapterVersionCommand,
  GetDocumentAnalysisCommand,
  GetDocumentTextDetectionCommand,
  GetExpenseAnalysisCommand,
  GetLendingAnalysisCommand,
  GetLendingAnalysisSummaryCommand,
  ListAdaptersCommand,
  ListAdapterVersionsCommand,
  ListTagsForResourceCommand,
  StartDocumentAnalysisCommand,
  StartDocumentTextDetectionCommand,
  StartExpenseAnalysisCommand,
  StartLendingAnalysisCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAdapterCommand,
};
const paginators = {
  paginateListAdapters,
  paginateListAdapterVersions,
};

/**
 * @public
 */
export interface TextractRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Textract {
  /**
   * @see {@link AnalyzeDocumentCommand}
   */
  analyzeDocument(
    args: AnalyzeDocumentCommandInput,
    options?: TextractRequestOptions
  ): Promise<AnalyzeDocumentCommandOutput>;
  analyzeDocument(
    args: AnalyzeDocumentCommandInput,
    cb: (err: any, data?: AnalyzeDocumentCommandOutput) => void
  ): void;
  analyzeDocument(
    args: AnalyzeDocumentCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: AnalyzeDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link AnalyzeExpenseCommand}
   */
  analyzeExpense(
    args: AnalyzeExpenseCommandInput,
    options?: TextractRequestOptions
  ): Promise<AnalyzeExpenseCommandOutput>;
  analyzeExpense(
    args: AnalyzeExpenseCommandInput,
    cb: (err: any, data?: AnalyzeExpenseCommandOutput) => void
  ): void;
  analyzeExpense(
    args: AnalyzeExpenseCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: AnalyzeExpenseCommandOutput) => void
  ): void;

  /**
   * @see {@link AnalyzeIDCommand}
   */
  analyzeID(
    args: AnalyzeIDCommandInput,
    options?: TextractRequestOptions
  ): Promise<AnalyzeIDCommandOutput>;
  analyzeID(
    args: AnalyzeIDCommandInput,
    cb: (err: any, data?: AnalyzeIDCommandOutput) => void
  ): void;
  analyzeID(
    args: AnalyzeIDCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: AnalyzeIDCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAdapterCommand}
   */
  createAdapter(
    args: CreateAdapterCommandInput,
    options?: TextractRequestOptions
  ): Promise<CreateAdapterCommandOutput>;
  createAdapter(
    args: CreateAdapterCommandInput,
    cb: (err: any, data?: CreateAdapterCommandOutput) => void
  ): void;
  createAdapter(
    args: CreateAdapterCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: CreateAdapterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAdapterVersionCommand}
   */
  createAdapterVersion(
    args: CreateAdapterVersionCommandInput,
    options?: TextractRequestOptions
  ): Promise<CreateAdapterVersionCommandOutput>;
  createAdapterVersion(
    args: CreateAdapterVersionCommandInput,
    cb: (err: any, data?: CreateAdapterVersionCommandOutput) => void
  ): void;
  createAdapterVersion(
    args: CreateAdapterVersionCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: CreateAdapterVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAdapterCommand}
   */
  deleteAdapter(
    args: DeleteAdapterCommandInput,
    options?: TextractRequestOptions
  ): Promise<DeleteAdapterCommandOutput>;
  deleteAdapter(
    args: DeleteAdapterCommandInput,
    cb: (err: any, data?: DeleteAdapterCommandOutput) => void
  ): void;
  deleteAdapter(
    args: DeleteAdapterCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: DeleteAdapterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAdapterVersionCommand}
   */
  deleteAdapterVersion(
    args: DeleteAdapterVersionCommandInput,
    options?: TextractRequestOptions
  ): Promise<DeleteAdapterVersionCommandOutput>;
  deleteAdapterVersion(
    args: DeleteAdapterVersionCommandInput,
    cb: (err: any, data?: DeleteAdapterVersionCommandOutput) => void
  ): void;
  deleteAdapterVersion(
    args: DeleteAdapterVersionCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: DeleteAdapterVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectDocumentTextCommand}
   */
  detectDocumentText(
    args: DetectDocumentTextCommandInput,
    options?: TextractRequestOptions
  ): Promise<DetectDocumentTextCommandOutput>;
  detectDocumentText(
    args: DetectDocumentTextCommandInput,
    cb: (err: any, data?: DetectDocumentTextCommandOutput) => void
  ): void;
  detectDocumentText(
    args: DetectDocumentTextCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: DetectDocumentTextCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAdapterCommand}
   */
  getAdapter(
    args: GetAdapterCommandInput,
    options?: TextractRequestOptions
  ): Promise<GetAdapterCommandOutput>;
  getAdapter(
    args: GetAdapterCommandInput,
    cb: (err: any, data?: GetAdapterCommandOutput) => void
  ): void;
  getAdapter(
    args: GetAdapterCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: GetAdapterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAdapterVersionCommand}
   */
  getAdapterVersion(
    args: GetAdapterVersionCommandInput,
    options?: TextractRequestOptions
  ): Promise<GetAdapterVersionCommandOutput>;
  getAdapterVersion(
    args: GetAdapterVersionCommandInput,
    cb: (err: any, data?: GetAdapterVersionCommandOutput) => void
  ): void;
  getAdapterVersion(
    args: GetAdapterVersionCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: GetAdapterVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDocumentAnalysisCommand}
   */
  getDocumentAnalysis(
    args: GetDocumentAnalysisCommandInput,
    options?: TextractRequestOptions
  ): Promise<GetDocumentAnalysisCommandOutput>;
  getDocumentAnalysis(
    args: GetDocumentAnalysisCommandInput,
    cb: (err: any, data?: GetDocumentAnalysisCommandOutput) => void
  ): void;
  getDocumentAnalysis(
    args: GetDocumentAnalysisCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: GetDocumentAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDocumentTextDetectionCommand}
   */
  getDocumentTextDetection(
    args: GetDocumentTextDetectionCommandInput,
    options?: TextractRequestOptions
  ): Promise<GetDocumentTextDetectionCommandOutput>;
  getDocumentTextDetection(
    args: GetDocumentTextDetectionCommandInput,
    cb: (err: any, data?: GetDocumentTextDetectionCommandOutput) => void
  ): void;
  getDocumentTextDetection(
    args: GetDocumentTextDetectionCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: GetDocumentTextDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExpenseAnalysisCommand}
   */
  getExpenseAnalysis(
    args: GetExpenseAnalysisCommandInput,
    options?: TextractRequestOptions
  ): Promise<GetExpenseAnalysisCommandOutput>;
  getExpenseAnalysis(
    args: GetExpenseAnalysisCommandInput,
    cb: (err: any, data?: GetExpenseAnalysisCommandOutput) => void
  ): void;
  getExpenseAnalysis(
    args: GetExpenseAnalysisCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: GetExpenseAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLendingAnalysisCommand}
   */
  getLendingAnalysis(
    args: GetLendingAnalysisCommandInput,
    options?: TextractRequestOptions
  ): Promise<GetLendingAnalysisCommandOutput>;
  getLendingAnalysis(
    args: GetLendingAnalysisCommandInput,
    cb: (err: any, data?: GetLendingAnalysisCommandOutput) => void
  ): void;
  getLendingAnalysis(
    args: GetLendingAnalysisCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: GetLendingAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLendingAnalysisSummaryCommand}
   */
  getLendingAnalysisSummary(
    args: GetLendingAnalysisSummaryCommandInput,
    options?: TextractRequestOptions
  ): Promise<GetLendingAnalysisSummaryCommandOutput>;
  getLendingAnalysisSummary(
    args: GetLendingAnalysisSummaryCommandInput,
    cb: (err: any, data?: GetLendingAnalysisSummaryCommandOutput) => void
  ): void;
  getLendingAnalysisSummary(
    args: GetLendingAnalysisSummaryCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: GetLendingAnalysisSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAdaptersCommand}
   */
  listAdapters(): Promise<ListAdaptersCommandOutput>;
  listAdapters(
    args: ListAdaptersCommandInput,
    options?: TextractRequestOptions
  ): Promise<ListAdaptersCommandOutput>;
  listAdapters(
    args: ListAdaptersCommandInput,
    cb: (err: any, data?: ListAdaptersCommandOutput) => void
  ): void;
  listAdapters(
    args: ListAdaptersCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: ListAdaptersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAdapterVersionsCommand}
   */
  listAdapterVersions(): Promise<ListAdapterVersionsCommandOutput>;
  listAdapterVersions(
    args: ListAdapterVersionsCommandInput,
    options?: TextractRequestOptions
  ): Promise<ListAdapterVersionsCommandOutput>;
  listAdapterVersions(
    args: ListAdapterVersionsCommandInput,
    cb: (err: any, data?: ListAdapterVersionsCommandOutput) => void
  ): void;
  listAdapterVersions(
    args: ListAdapterVersionsCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: ListAdapterVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: TextractRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDocumentAnalysisCommand}
   */
  startDocumentAnalysis(
    args: StartDocumentAnalysisCommandInput,
    options?: TextractRequestOptions
  ): Promise<StartDocumentAnalysisCommandOutput>;
  startDocumentAnalysis(
    args: StartDocumentAnalysisCommandInput,
    cb: (err: any, data?: StartDocumentAnalysisCommandOutput) => void
  ): void;
  startDocumentAnalysis(
    args: StartDocumentAnalysisCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: StartDocumentAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDocumentTextDetectionCommand}
   */
  startDocumentTextDetection(
    args: StartDocumentTextDetectionCommandInput,
    options?: TextractRequestOptions
  ): Promise<StartDocumentTextDetectionCommandOutput>;
  startDocumentTextDetection(
    args: StartDocumentTextDetectionCommandInput,
    cb: (err: any, data?: StartDocumentTextDetectionCommandOutput) => void
  ): void;
  startDocumentTextDetection(
    args: StartDocumentTextDetectionCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: StartDocumentTextDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartExpenseAnalysisCommand}
   */
  startExpenseAnalysis(
    args: StartExpenseAnalysisCommandInput,
    options?: TextractRequestOptions
  ): Promise<StartExpenseAnalysisCommandOutput>;
  startExpenseAnalysis(
    args: StartExpenseAnalysisCommandInput,
    cb: (err: any, data?: StartExpenseAnalysisCommandOutput) => void
  ): void;
  startExpenseAnalysis(
    args: StartExpenseAnalysisCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: StartExpenseAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link StartLendingAnalysisCommand}
   */
  startLendingAnalysis(
    args: StartLendingAnalysisCommandInput,
    options?: TextractRequestOptions
  ): Promise<StartLendingAnalysisCommandOutput>;
  startLendingAnalysis(
    args: StartLendingAnalysisCommandInput,
    cb: (err: any, data?: StartLendingAnalysisCommandOutput) => void
  ): void;
  startLendingAnalysis(
    args: StartLendingAnalysisCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: StartLendingAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: TextractRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: TextractRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAdapterCommand}
   */
  updateAdapter(
    args: UpdateAdapterCommandInput,
    options?: TextractRequestOptions
  ): Promise<UpdateAdapterCommandOutput>;
  updateAdapter(
    args: UpdateAdapterCommandInput,
    cb: (err: any, data?: UpdateAdapterCommandOutput) => void
  ): void;
  updateAdapter(
    args: UpdateAdapterCommandInput,
    options: TextractRequestOptions,
    cb: (err: any, data?: UpdateAdapterCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAdaptersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAdaptersCommandOutput}.
   */
  paginateListAdapters(
    args?: ListAdaptersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAdaptersCommandOutput>;

  /**
   * @see {@link ListAdapterVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAdapterVersionsCommandOutput}.
   */
  paginateListAdapterVersions(
    args?: ListAdapterVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAdapterVersionsCommandOutput>;
}

/**
 * <p>Amazon Textract detects and analyzes text in documents and converts it
 *          into machine-readable text. This is the API reference documentation for
 *          Amazon Textract.</p>
 * @public
 */
export class Textract extends TextractClient implements Textract {}
createAggregatedClient(commands, Textract, { paginators });
