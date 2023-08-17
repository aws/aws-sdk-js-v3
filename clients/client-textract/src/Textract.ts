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
  DetectDocumentTextCommand,
  DetectDocumentTextCommandInput,
  DetectDocumentTextCommandOutput,
} from "./commands/DetectDocumentTextCommand";
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
import { TextractClient, TextractClientConfig } from "./TextractClient";

const commands = {
  AnalyzeDocumentCommand,
  AnalyzeExpenseCommand,
  AnalyzeIDCommand,
  DetectDocumentTextCommand,
  GetDocumentAnalysisCommand,
  GetDocumentTextDetectionCommand,
  GetExpenseAnalysisCommand,
  GetLendingAnalysisCommand,
  GetLendingAnalysisSummaryCommand,
  StartDocumentAnalysisCommand,
  StartDocumentTextDetectionCommand,
  StartExpenseAnalysisCommand,
  StartLendingAnalysisCommand,
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
}

/**
 * @public
 * <p>Amazon Textract detects and analyzes text in documents and converts it
 *          into machine-readable text. This is the API reference documentation for
 *          Amazon Textract.</p>
 */
export class Textract extends TextractClient implements Textract {}
createAggregatedClient(commands, Textract);
