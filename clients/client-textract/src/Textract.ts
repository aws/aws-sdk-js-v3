// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AnalyzeDocumentCommand,
  AnalyzeDocumentCommandInput,
  AnalyzeDocumentCommandOutput,
} from "./commands/AnalyzeDocumentCommand";
import {
  AnalyzeExpenseCommand,
  AnalyzeExpenseCommandInput,
  AnalyzeExpenseCommandOutput,
} from "./commands/AnalyzeExpenseCommand";
import { AnalyzeIDCommand, AnalyzeIDCommandInput, AnalyzeIDCommandOutput } from "./commands/AnalyzeIDCommand";
import {
  CreateAdapterCommand,
  CreateAdapterCommandInput,
  CreateAdapterCommandOutput,
} from "./commands/CreateAdapterCommand";
import {
  CreateAdapterVersionCommand,
  CreateAdapterVersionCommandInput,
  CreateAdapterVersionCommandOutput,
} from "./commands/CreateAdapterVersionCommand";
import {
  DeleteAdapterCommand,
  DeleteAdapterCommandInput,
  DeleteAdapterCommandOutput,
} from "./commands/DeleteAdapterCommand";
import {
  DeleteAdapterVersionCommand,
  DeleteAdapterVersionCommandInput,
  DeleteAdapterVersionCommandOutput,
} from "./commands/DeleteAdapterVersionCommand";
import {
  DetectDocumentTextCommand,
  DetectDocumentTextCommandInput,
  DetectDocumentTextCommandOutput,
} from "./commands/DetectDocumentTextCommand";
import { GetAdapterCommand, GetAdapterCommandInput, GetAdapterCommandOutput } from "./commands/GetAdapterCommand";
import {
  GetAdapterVersionCommand,
  GetAdapterVersionCommandInput,
  GetAdapterVersionCommandOutput,
} from "./commands/GetAdapterVersionCommand";
import {
  GetDocumentAnalysisCommand,
  GetDocumentAnalysisCommandInput,
  GetDocumentAnalysisCommandOutput,
} from "./commands/GetDocumentAnalysisCommand";
import {
  GetDocumentTextDetectionCommand,
  GetDocumentTextDetectionCommandInput,
  GetDocumentTextDetectionCommandOutput,
} from "./commands/GetDocumentTextDetectionCommand";
import {
  GetExpenseAnalysisCommand,
  GetExpenseAnalysisCommandInput,
  GetExpenseAnalysisCommandOutput,
} from "./commands/GetExpenseAnalysisCommand";
import {
  GetLendingAnalysisCommand,
  GetLendingAnalysisCommandInput,
  GetLendingAnalysisCommandOutput,
} from "./commands/GetLendingAnalysisCommand";
import {
  GetLendingAnalysisSummaryCommand,
  GetLendingAnalysisSummaryCommandInput,
  GetLendingAnalysisSummaryCommandOutput,
} from "./commands/GetLendingAnalysisSummaryCommand";
import {
  ListAdaptersCommand,
  ListAdaptersCommandInput,
  ListAdaptersCommandOutput,
} from "./commands/ListAdaptersCommand";
import {
  ListAdapterVersionsCommand,
  ListAdapterVersionsCommandInput,
  ListAdapterVersionsCommandOutput,
} from "./commands/ListAdapterVersionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartDocumentAnalysisCommand,
  StartDocumentAnalysisCommandInput,
  StartDocumentAnalysisCommandOutput,
} from "./commands/StartDocumentAnalysisCommand";
import {
  StartDocumentTextDetectionCommand,
  StartDocumentTextDetectionCommandInput,
  StartDocumentTextDetectionCommandOutput,
} from "./commands/StartDocumentTextDetectionCommand";
import {
  StartExpenseAnalysisCommand,
  StartExpenseAnalysisCommandInput,
  StartExpenseAnalysisCommandOutput,
} from "./commands/StartExpenseAnalysisCommand";
import {
  StartLendingAnalysisCommand,
  StartLendingAnalysisCommandInput,
  StartLendingAnalysisCommandOutput,
} from "./commands/StartLendingAnalysisCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAdapterCommand,
  UpdateAdapterCommandInput,
  UpdateAdapterCommandOutput,
} from "./commands/UpdateAdapterCommand";
import { TextractClient, TextractClientConfig } from "./TextractClient";

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

export interface Textract {
  /**
   * @see {@link AnalyzeDocumentCommand}
   */
  analyzeDocument(
    args: AnalyzeDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AnalyzeDocumentCommandOutput>;
  analyzeDocument(args: AnalyzeDocumentCommandInput, cb: (err: any, data?: AnalyzeDocumentCommandOutput) => void): void;
  analyzeDocument(
    args: AnalyzeDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AnalyzeDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link AnalyzeExpenseCommand}
   */
  analyzeExpense(
    args: AnalyzeExpenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AnalyzeExpenseCommandOutput>;
  analyzeExpense(args: AnalyzeExpenseCommandInput, cb: (err: any, data?: AnalyzeExpenseCommandOutput) => void): void;
  analyzeExpense(
    args: AnalyzeExpenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AnalyzeExpenseCommandOutput) => void
  ): void;

  /**
   * @see {@link AnalyzeIDCommand}
   */
  analyzeID(args: AnalyzeIDCommandInput, options?: __HttpHandlerOptions): Promise<AnalyzeIDCommandOutput>;
  analyzeID(args: AnalyzeIDCommandInput, cb: (err: any, data?: AnalyzeIDCommandOutput) => void): void;
  analyzeID(
    args: AnalyzeIDCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AnalyzeIDCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAdapterCommand}
   */
  createAdapter(args: CreateAdapterCommandInput, options?: __HttpHandlerOptions): Promise<CreateAdapterCommandOutput>;
  createAdapter(args: CreateAdapterCommandInput, cb: (err: any, data?: CreateAdapterCommandOutput) => void): void;
  createAdapter(
    args: CreateAdapterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAdapterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAdapterVersionCommand}
   */
  createAdapterVersion(
    args: CreateAdapterVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAdapterVersionCommandOutput>;
  createAdapterVersion(
    args: CreateAdapterVersionCommandInput,
    cb: (err: any, data?: CreateAdapterVersionCommandOutput) => void
  ): void;
  createAdapterVersion(
    args: CreateAdapterVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAdapterVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAdapterCommand}
   */
  deleteAdapter(args: DeleteAdapterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAdapterCommandOutput>;
  deleteAdapter(args: DeleteAdapterCommandInput, cb: (err: any, data?: DeleteAdapterCommandOutput) => void): void;
  deleteAdapter(
    args: DeleteAdapterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAdapterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAdapterVersionCommand}
   */
  deleteAdapterVersion(
    args: DeleteAdapterVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAdapterVersionCommandOutput>;
  deleteAdapterVersion(
    args: DeleteAdapterVersionCommandInput,
    cb: (err: any, data?: DeleteAdapterVersionCommandOutput) => void
  ): void;
  deleteAdapterVersion(
    args: DeleteAdapterVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAdapterVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectDocumentTextCommand}
   */
  detectDocumentText(
    args: DetectDocumentTextCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectDocumentTextCommandOutput>;
  detectDocumentText(
    args: DetectDocumentTextCommandInput,
    cb: (err: any, data?: DetectDocumentTextCommandOutput) => void
  ): void;
  detectDocumentText(
    args: DetectDocumentTextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectDocumentTextCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAdapterCommand}
   */
  getAdapter(args: GetAdapterCommandInput, options?: __HttpHandlerOptions): Promise<GetAdapterCommandOutput>;
  getAdapter(args: GetAdapterCommandInput, cb: (err: any, data?: GetAdapterCommandOutput) => void): void;
  getAdapter(
    args: GetAdapterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAdapterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAdapterVersionCommand}
   */
  getAdapterVersion(
    args: GetAdapterVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAdapterVersionCommandOutput>;
  getAdapterVersion(
    args: GetAdapterVersionCommandInput,
    cb: (err: any, data?: GetAdapterVersionCommandOutput) => void
  ): void;
  getAdapterVersion(
    args: GetAdapterVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAdapterVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDocumentAnalysisCommand}
   */
  getDocumentAnalysis(
    args: GetDocumentAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentAnalysisCommandOutput>;
  getDocumentAnalysis(
    args: GetDocumentAnalysisCommandInput,
    cb: (err: any, data?: GetDocumentAnalysisCommandOutput) => void
  ): void;
  getDocumentAnalysis(
    args: GetDocumentAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDocumentTextDetectionCommand}
   */
  getDocumentTextDetection(
    args: GetDocumentTextDetectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentTextDetectionCommandOutput>;
  getDocumentTextDetection(
    args: GetDocumentTextDetectionCommandInput,
    cb: (err: any, data?: GetDocumentTextDetectionCommandOutput) => void
  ): void;
  getDocumentTextDetection(
    args: GetDocumentTextDetectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentTextDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExpenseAnalysisCommand}
   */
  getExpenseAnalysis(
    args: GetExpenseAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExpenseAnalysisCommandOutput>;
  getExpenseAnalysis(
    args: GetExpenseAnalysisCommandInput,
    cb: (err: any, data?: GetExpenseAnalysisCommandOutput) => void
  ): void;
  getExpenseAnalysis(
    args: GetExpenseAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExpenseAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLendingAnalysisCommand}
   */
  getLendingAnalysis(
    args: GetLendingAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLendingAnalysisCommandOutput>;
  getLendingAnalysis(
    args: GetLendingAnalysisCommandInput,
    cb: (err: any, data?: GetLendingAnalysisCommandOutput) => void
  ): void;
  getLendingAnalysis(
    args: GetLendingAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLendingAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLendingAnalysisSummaryCommand}
   */
  getLendingAnalysisSummary(
    args: GetLendingAnalysisSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLendingAnalysisSummaryCommandOutput>;
  getLendingAnalysisSummary(
    args: GetLendingAnalysisSummaryCommandInput,
    cb: (err: any, data?: GetLendingAnalysisSummaryCommandOutput) => void
  ): void;
  getLendingAnalysisSummary(
    args: GetLendingAnalysisSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLendingAnalysisSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAdaptersCommand}
   */
  listAdapters(args: ListAdaptersCommandInput, options?: __HttpHandlerOptions): Promise<ListAdaptersCommandOutput>;
  listAdapters(args: ListAdaptersCommandInput, cb: (err: any, data?: ListAdaptersCommandOutput) => void): void;
  listAdapters(
    args: ListAdaptersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAdaptersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAdapterVersionsCommand}
   */
  listAdapterVersions(
    args: ListAdapterVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAdapterVersionsCommandOutput>;
  listAdapterVersions(
    args: ListAdapterVersionsCommandInput,
    cb: (err: any, data?: ListAdapterVersionsCommandOutput) => void
  ): void;
  listAdapterVersions(
    args: ListAdapterVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAdapterVersionsCommandOutput) => void
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
   * @see {@link StartDocumentAnalysisCommand}
   */
  startDocumentAnalysis(
    args: StartDocumentAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDocumentAnalysisCommandOutput>;
  startDocumentAnalysis(
    args: StartDocumentAnalysisCommandInput,
    cb: (err: any, data?: StartDocumentAnalysisCommandOutput) => void
  ): void;
  startDocumentAnalysis(
    args: StartDocumentAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDocumentAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDocumentTextDetectionCommand}
   */
  startDocumentTextDetection(
    args: StartDocumentTextDetectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDocumentTextDetectionCommandOutput>;
  startDocumentTextDetection(
    args: StartDocumentTextDetectionCommandInput,
    cb: (err: any, data?: StartDocumentTextDetectionCommandOutput) => void
  ): void;
  startDocumentTextDetection(
    args: StartDocumentTextDetectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDocumentTextDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartExpenseAnalysisCommand}
   */
  startExpenseAnalysis(
    args: StartExpenseAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExpenseAnalysisCommandOutput>;
  startExpenseAnalysis(
    args: StartExpenseAnalysisCommandInput,
    cb: (err: any, data?: StartExpenseAnalysisCommandOutput) => void
  ): void;
  startExpenseAnalysis(
    args: StartExpenseAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExpenseAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link StartLendingAnalysisCommand}
   */
  startLendingAnalysis(
    args: StartLendingAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartLendingAnalysisCommandOutput>;
  startLendingAnalysis(
    args: StartLendingAnalysisCommandInput,
    cb: (err: any, data?: StartLendingAnalysisCommandOutput) => void
  ): void;
  startLendingAnalysis(
    args: StartLendingAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartLendingAnalysisCommandOutput) => void
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
   * @see {@link UpdateAdapterCommand}
   */
  updateAdapter(args: UpdateAdapterCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAdapterCommandOutput>;
  updateAdapter(args: UpdateAdapterCommandInput, cb: (err: any, data?: UpdateAdapterCommandOutput) => void): void;
  updateAdapter(
    args: UpdateAdapterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAdapterCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Textract detects and analyzes text in documents and converts it
 *          into machine-readable text. This is the API reference documentation for
 *          Amazon Textract.</p>
 */
export class Textract extends TextractClient implements Textract {}
createAggregatedClient(commands, Textract);
