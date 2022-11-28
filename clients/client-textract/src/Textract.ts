// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { TextractClient } from "./TextractClient";

/**
 * <p>Amazon Textract detects and analyzes text in documents and converts it
 *          into machine-readable text. This is the API reference documentation for
 *          Amazon Textract.</p>
 */
export class Textract extends TextractClient {
  /**
   * <p>Analyzes an input document for relationships between detected items. </p>
   *          <p>The types of information returned are as follows: </p>
   *          <ul>
   *             <li>
   *                <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY
   *                   <code>Block</code> object and a VALUE <code>Block</code> object. For example,
   *                   <i>Name: Ana Silva Carolina</i> contains a key and value.
   *                   <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is
   *                the value.</p>
   *             </li>
   *             <li>
   *                <p>Table and table cell data. A TABLE <code>Block</code> object contains information
   *                about a detected table. A CELL <code>Block</code> object is returned for each cell in
   *                a table.</p>
   *             </li>
   *             <li>
   *                <p>Lines and words of text. A LINE <code>Block</code> object contains one or more
   *                WORD <code>Block</code> objects. All lines and words that are detected in the
   *                document are returned (including text that doesn't have a relationship with the value
   *                of <code>FeatureTypes</code>). </p>
   *             </li>
   *             <li>
   *                <p>Signatures. A SIGNATURE <code>Block</code> object contains the location information
   *                of a signature in a document. If used in conjunction with forms or tables, a signature
   *                can be given a Key-Value pairing or be detected in the cell of a table.</p>
   *             </li>
   *             <li>
   *                <p>Query. A QUERY Block object contains the query text, alias and link to the
   *                associated Query results block object.</p>
   *             </li>
   *             <li>
   *                <p>Query Result. A QUERY_RESULT Block object contains the answer to the query and an
   *                ID that connects it to the query asked. This Block also contains a confidence
   *                score.</p>
   *             </li>
   *          </ul>
   *
   *          <p>Selection elements such as check boxes and option buttons (radio buttons) can be
   *          detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains
   *          information about a selection element, including the selection status.</p>
   *
   *          <p>You can choose which type of analysis to perform by specifying the
   *             <code>FeatureTypes</code> list. </p>
   *          <p>The output is returned in a list of <code>Block</code> objects.</p>
   *          <p>
   *             <code>AnalyzeDocument</code> is a synchronous operation. To analyze documents
   *          asynchronously, use <a>StartDocumentAnalysis</a>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text
   *          Analysis</a>.</p>
   */
  public analyzeDocument(
    args: AnalyzeDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AnalyzeDocumentCommandOutput>;
  public analyzeDocument(
    args: AnalyzeDocumentCommandInput,
    cb: (err: any, data?: AnalyzeDocumentCommandOutput) => void
  ): void;
  public analyzeDocument(
    args: AnalyzeDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AnalyzeDocumentCommandOutput) => void
  ): void;
  public analyzeDocument(
    args: AnalyzeDocumentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AnalyzeDocumentCommandOutput) => void),
    cb?: (err: any, data?: AnalyzeDocumentCommandOutput) => void
  ): Promise<AnalyzeDocumentCommandOutput> | void {
    const command = new AnalyzeDocumentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *             <code>AnalyzeExpense</code> synchronously analyzes an input document for financially
   *          related relationships between text.</p>
   *          <p>Information is returned as <code>ExpenseDocuments</code> and seperated as
   *          follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LineItemGroups</code>- A data set containing <code>LineItems</code> which
   *                store information about the lines of text, such as an item purchased and its price on
   *                a receipt.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SummaryFields</code>- Contains all other information a receipt, such as
   *                header information or the vendors name.</p>
   *             </li>
   *          </ul>
   */
  public analyzeExpense(
    args: AnalyzeExpenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AnalyzeExpenseCommandOutput>;
  public analyzeExpense(
    args: AnalyzeExpenseCommandInput,
    cb: (err: any, data?: AnalyzeExpenseCommandOutput) => void
  ): void;
  public analyzeExpense(
    args: AnalyzeExpenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AnalyzeExpenseCommandOutput) => void
  ): void;
  public analyzeExpense(
    args: AnalyzeExpenseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AnalyzeExpenseCommandOutput) => void),
    cb?: (err: any, data?: AnalyzeExpenseCommandOutput) => void
  ): Promise<AnalyzeExpenseCommandOutput> | void {
    const command = new AnalyzeExpenseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Analyzes identity documents for relevant information. This information is extracted and
   *          returned as <code>IdentityDocumentFields</code>, which records both the normalized field
   *          and value of the extracted text.Unlike other Amazon Textract operations,
   *             <code>AnalyzeID</code> doesn't return any Geometry data.</p>
   */
  public analyzeID(args: AnalyzeIDCommandInput, options?: __HttpHandlerOptions): Promise<AnalyzeIDCommandOutput>;
  public analyzeID(args: AnalyzeIDCommandInput, cb: (err: any, data?: AnalyzeIDCommandOutput) => void): void;
  public analyzeID(
    args: AnalyzeIDCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AnalyzeIDCommandOutput) => void
  ): void;
  public analyzeID(
    args: AnalyzeIDCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AnalyzeIDCommandOutput) => void),
    cb?: (err: any, data?: AnalyzeIDCommandOutput) => void
  ): Promise<AnalyzeIDCommandOutput> | void {
    const command = new AnalyzeIDCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detects text in the input document. Amazon Textract can detect lines of text and the
   *          words that make up a line of text. The input document must be in one of the following image
   *          formats:  JPEG, PNG, PDF, or TIFF. <code>DetectDocumentText</code> returns the detected
   *          text in an array of <a>Block</a> objects. </p>
   *          <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object
   *          is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is
   *          a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p>
   *
   *          <p>
   *             <code>DetectDocumentText</code> is a synchronous operation. To analyze documents
   *          asynchronously, use <a>StartDocumentTextDetection</a>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
   */
  public detectDocumentText(
    args: DetectDocumentTextCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectDocumentTextCommandOutput>;
  public detectDocumentText(
    args: DetectDocumentTextCommandInput,
    cb: (err: any, data?: DetectDocumentTextCommandOutput) => void
  ): void;
  public detectDocumentText(
    args: DetectDocumentTextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectDocumentTextCommandOutput) => void
  ): void;
  public detectDocumentText(
    args: DetectDocumentTextCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetectDocumentTextCommandOutput) => void),
    cb?: (err: any, data?: DetectDocumentTextCommandOutput) => void
  ): Promise<DetectDocumentTextCommandOutput> | void {
    const command = new DetectDocumentTextCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a
   *          document.</p>
   *          <p>You start asynchronous text analysis by calling <a>StartDocumentAnalysis</a>,
   *          which returns a job identifier (<code>JobId</code>). When the text analysis operation
   *          finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic
   *          that's registered in the initial call to <code>StartDocumentAnalysis</code>. To get the
   *          results of the text-detection operation, first check that the status value published to the
   *          Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentAnalysis</code>, and
   *          pass the job identifier (<code>JobId</code>) from the initial call to
   *             <code>StartDocumentAnalysis</code>.</p>
   *          <p>
   *             <code>GetDocumentAnalysis</code> returns an array of <a>Block</a> objects.
   *          The following types of information are returned: </p>
   *          <ul>
   *             <li>
   *                <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY
   *                   <code>Block</code> object and a VALUE <code>Block</code> object. For example,
   *                   <i>Name: Ana Silva Carolina</i> contains a key and value.
   *                   <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is
   *                the value.</p>
   *             </li>
   *             <li>
   *                <p>Table and table cell data. A TABLE <code>Block</code> object contains information
   *                about a detected table. A CELL <code>Block</code> object is returned for each cell in
   *                a table.</p>
   *             </li>
   *             <li>
   *                <p>Lines and words of text. A LINE <code>Block</code> object contains one or more
   *                WORD <code>Block</code> objects. All lines and words that are detected in the
   *                document are returned (including text that doesn't have a relationship with the value
   *                of the <code>StartDocumentAnalysis</code>
   *                   <code>FeatureTypes</code> input parameter). </p>
   *             </li>
   *             <li>
   *                <p>Query. A QUERY Block object contains the query text, alias and link to the
   *                associated Query results block object.</p>
   *             </li>
   *             <li>
   *                <p>Query Results. A QUERY_RESULT Block object contains the answer to the query and an
   *                ID that connects it to the query asked. This Block also contains a confidence
   *                score.</p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>While processing a document with queries, look out for
   *                <code>INVALID_REQUEST_PARAMETERS</code> output. This indicates that either the per
   *             page query limit has been exceeded or that the operation is trying to query a page in
   *             the document which doesn’t exist. </p>
   *          </note>
   *
   *          <p>Selection elements such as check boxes and option buttons (radio buttons) can be
   *          detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains
   *          information about a selection element, including the selection status.</p>
   *
   *
   *          <p>Use the <code>MaxResults</code> parameter to limit the number of blocks that are
   *          returned. If there are more results than specified in <code>MaxResults</code>, the value of
   *             <code>NextToken</code> in the operation response contains a pagination token for getting
   *          the next set of results. To get the next page of results, call
   *             <code>GetDocumentAnalysis</code>, and populate the <code>NextToken</code> request
   *          parameter with the token value that's returned from the previous call to
   *             <code>GetDocumentAnalysis</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text
   *          Analysis</a>.</p>
   */
  public getDocumentAnalysis(
    args: GetDocumentAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentAnalysisCommandOutput>;
  public getDocumentAnalysis(
    args: GetDocumentAnalysisCommandInput,
    cb: (err: any, data?: GetDocumentAnalysisCommandOutput) => void
  ): void;
  public getDocumentAnalysis(
    args: GetDocumentAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentAnalysisCommandOutput) => void
  ): void;
  public getDocumentAnalysis(
    args: GetDocumentAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDocumentAnalysisCommandOutput) => void),
    cb?: (err: any, data?: GetDocumentAnalysisCommandOutput) => void
  ): Promise<GetDocumentAnalysisCommandOutput> | void {
    const command = new GetDocumentAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the results for an Amazon Textract asynchronous operation that detects text in a document.
   *      Amazon Textract can detect lines of text and the words that make up a line of text.</p>
   *          <p>You start asynchronous text detection by calling <a>StartDocumentTextDetection</a>, which returns a job identifier
   *             (<code>JobId</code>). When the text detection operation finishes, Amazon Textract publishes a
   *          completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to
   *             <code>StartDocumentTextDetection</code>. To get the results of the text-detection
   *          operation, first check that the status value published to the Amazon SNS topic is
   *             <code>SUCCEEDED</code>. If so, call <code>GetDocumentTextDetection</code>, and pass the
   *          job identifier (<code>JobId</code>) from the initial call to
   *             <code>StartDocumentTextDetection</code>.</p>
   *          <p>
   *             <code>GetDocumentTextDetection</code> returns an array of <a>Block</a>
   *          objects. </p>
   *          <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object
   *         is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is
   *         a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p>
   *
   *          <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there
   *          are more results than specified in <code>MaxResults</code>, the value of
   *             <code>NextToken</code> in the operation response contains a pagination token for getting
   *          the next set of results. To get the next page of results, call
   *             <code>GetDocumentTextDetection</code>, and populate the <code>NextToken</code> request
   *          parameter with the token value that's returned from the previous call to
   *             <code>GetDocumentTextDetection</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
   */
  public getDocumentTextDetection(
    args: GetDocumentTextDetectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentTextDetectionCommandOutput>;
  public getDocumentTextDetection(
    args: GetDocumentTextDetectionCommandInput,
    cb: (err: any, data?: GetDocumentTextDetectionCommandOutput) => void
  ): void;
  public getDocumentTextDetection(
    args: GetDocumentTextDetectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentTextDetectionCommandOutput) => void
  ): void;
  public getDocumentTextDetection(
    args: GetDocumentTextDetectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDocumentTextDetectionCommandOutput) => void),
    cb?: (err: any, data?: GetDocumentTextDetectionCommandOutput) => void
  ): Promise<GetDocumentTextDetectionCommandOutput> | void {
    const command = new GetDocumentTextDetectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the results for an Amazon Textract asynchronous operation that analyzes invoices and
   *    receipts. Amazon Textract finds contact information, items purchased, and vendor name, from input
   *    invoices and receipts.</p>
   *          <p>You start asynchronous invoice/receipt analysis by calling <a>StartExpenseAnalysis</a>, which returns a job identifier (<code>JobId</code>). Upon
   *    completion of the invoice/receipt analysis, Amazon Textract publishes the completion status to the
   *    Amazon Simple Notification Service (Amazon SNS) topic. This topic must be registered in the initial call to
   *     <code>StartExpenseAnalysis</code>. To get the results of the invoice/receipt analysis operation,
   *    first ensure that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so,
   *    call <code>GetExpenseAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the
   *    initial call to <code>StartExpenseAnalysis</code>.</p>
   *          <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are
   *    more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in
   *    the operation response contains a pagination token for getting the next set of results. To get
   *    the next page of results, call <code>GetExpenseAnalysis</code>, and populate the
   *     <code>NextToken</code> request parameter with the token value that's returned from the previous
   *    call to <code>GetExpenseAnalysis</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoices-receipts.html">Analyzing Invoices and Receipts</a>.</p>
   */
  public getExpenseAnalysis(
    args: GetExpenseAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExpenseAnalysisCommandOutput>;
  public getExpenseAnalysis(
    args: GetExpenseAnalysisCommandInput,
    cb: (err: any, data?: GetExpenseAnalysisCommandOutput) => void
  ): void;
  public getExpenseAnalysis(
    args: GetExpenseAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExpenseAnalysisCommandOutput) => void
  ): void;
  public getExpenseAnalysis(
    args: GetExpenseAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetExpenseAnalysisCommandOutput) => void),
    cb?: (err: any, data?: GetExpenseAnalysisCommandOutput) => void
  ): Promise<GetExpenseAnalysisCommandOutput> | void {
    const command = new GetExpenseAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a
   *             lending document. </p>
   *         <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>,
   *             which returns a job identifier (<code>JobId</code>). When the text analysis operation
   *             finishes, Amazon Textract publishes a completion status to the Amazon Simple
   *             Notification Service (Amazon SNS) topic that's registered in the initial call to
   *                 <code>StartLendingAnalysis</code>. </p>
   *         <p>To get the results of the text analysis operation, first check that the status value
   *             published to the Amazon SNS topic is SUCCEEDED. If so, call GetLendingAnalysis, and pass
   *             the job identifier (<code>JobId</code>) from the initial call to
   *                 <code>StartLendingAnalysis</code>.</p>
   */
  public getLendingAnalysis(
    args: GetLendingAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLendingAnalysisCommandOutput>;
  public getLendingAnalysis(
    args: GetLendingAnalysisCommandInput,
    cb: (err: any, data?: GetLendingAnalysisCommandOutput) => void
  ): void;
  public getLendingAnalysis(
    args: GetLendingAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLendingAnalysisCommandOutput) => void
  ): void;
  public getLendingAnalysis(
    args: GetLendingAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLendingAnalysisCommandOutput) => void),
    cb?: (err: any, data?: GetLendingAnalysisCommandOutput) => void
  ): Promise<GetLendingAnalysisCommandOutput> | void {
    const command = new GetLendingAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets summarized results for the <code>StartLendingAnalysis</code> operation, which analyzes
   *    text in a lending document. The returned summary consists of information about documents grouped
   *    together by a common document type. Information like detected signatures, page numbers, and split
   *    documents is returned with respect to the type of grouped document. </p>
   *          <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>, which
   *    returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon
   *    Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS)
   *    topic that's registered in the initial call to <code>StartLendingAnalysis</code>. </p>
   *          <p>To get the results of the text analysis operation, first check that the status value
   *    published to the Amazon SNS topic is SUCCEEDED. If so, call
   *     <code>GetLendingAnalysisSummary</code>, and pass the job identifier (<code>JobId</code>) from
   *    the initial call to <code>StartLendingAnalysis</code>.</p>
   */
  public getLendingAnalysisSummary(
    args: GetLendingAnalysisSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLendingAnalysisSummaryCommandOutput>;
  public getLendingAnalysisSummary(
    args: GetLendingAnalysisSummaryCommandInput,
    cb: (err: any, data?: GetLendingAnalysisSummaryCommandOutput) => void
  ): void;
  public getLendingAnalysisSummary(
    args: GetLendingAnalysisSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLendingAnalysisSummaryCommandOutput) => void
  ): void;
  public getLendingAnalysisSummary(
    args: GetLendingAnalysisSummaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLendingAnalysisSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetLendingAnalysisSummaryCommandOutput) => void
  ): Promise<GetLendingAnalysisSummaryCommandOutput> | void {
    const command = new GetLendingAnalysisSummaryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts the asynchronous analysis of an input document for relationships between detected
   *          items such as key-value pairs, tables, and selection elements.</p>
   *
   *          <p>
   *             <code>StartDocumentAnalysis</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The
   *          documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name
   *          of the document.
   *          </p>
   *          <p>
   *             <code>StartDocumentAnalysis</code> returns a job identifier
   *             (<code>JobId</code>) that you use to get the results of the operation. When text
   *          analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS)
   *          topic that you specify in <code>NotificationChannel</code>. To get the results of the text
   *          analysis operation, first check that the status value published to the Amazon SNS topic is
   *             <code>SUCCEEDED</code>. If so, call <a>GetDocumentAnalysis</a>, and pass
   *          the job identifier (<code>JobId</code>) from the initial call to
   *             <code>StartDocumentAnalysis</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
   */
  public startDocumentAnalysis(
    args: StartDocumentAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDocumentAnalysisCommandOutput>;
  public startDocumentAnalysis(
    args: StartDocumentAnalysisCommandInput,
    cb: (err: any, data?: StartDocumentAnalysisCommandOutput) => void
  ): void;
  public startDocumentAnalysis(
    args: StartDocumentAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDocumentAnalysisCommandOutput) => void
  ): void;
  public startDocumentAnalysis(
    args: StartDocumentAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDocumentAnalysisCommandOutput) => void),
    cb?: (err: any, data?: StartDocumentAnalysisCommandOutput) => void
  ): Promise<StartDocumentAnalysisCommandOutput> | void {
    const command = new StartDocumentAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts the asynchronous detection of text in a document. Amazon Textract can detect lines of
   *          text and the words that make up a line of text.</p>
   *          <p>
   *             <code>StartDocumentTextDetection</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The
   *         documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name
   *         of the document.
   *      </p>
   *          <p>
   *             <code>StartTextDetection</code> returns a job identifier
   *             (<code>JobId</code>) that you use to get the results of the operation. When text
   *          detection is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS)
   *          topic that you specify in <code>NotificationChannel</code>. To get the results of the text
   *          detection operation, first check that the status value published to the Amazon SNS topic is
   *             <code>SUCCEEDED</code>. If so, call <a>GetDocumentTextDetection</a>, and
   *          pass the job identifier (<code>JobId</code>) from the initial call to
   *             <code>StartDocumentTextDetection</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
   */
  public startDocumentTextDetection(
    args: StartDocumentTextDetectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDocumentTextDetectionCommandOutput>;
  public startDocumentTextDetection(
    args: StartDocumentTextDetectionCommandInput,
    cb: (err: any, data?: StartDocumentTextDetectionCommandOutput) => void
  ): void;
  public startDocumentTextDetection(
    args: StartDocumentTextDetectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDocumentTextDetectionCommandOutput) => void
  ): void;
  public startDocumentTextDetection(
    args: StartDocumentTextDetectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDocumentTextDetectionCommandOutput) => void),
    cb?: (err: any, data?: StartDocumentTextDetectionCommandOutput) => void
  ): Promise<StartDocumentTextDetectionCommandOutput> | void {
    const command = new StartDocumentTextDetectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts the asynchronous analysis of invoices or receipts for data like contact information,
   *    items purchased, and vendor names.</p>
   *
   *          <p>
   *             <code>StartExpenseAnalysis</code> can analyze text in documents that are in JPEG, PNG, and
   *    PDF format. The documents must be stored in an Amazon S3 bucket. Use the <a>DocumentLocation</a> parameter to specify the name of your S3 bucket and the name of the
   *    document in that bucket. </p>
   *          <p>
   *             <code>StartExpenseAnalysis</code> returns a job identifier (<code>JobId</code>) that you
   *    will provide to <code>GetExpenseAnalysis</code> to retrieve the results of the operation. When
   *    the analysis of the input invoices/receipts is finished, Amazon Textract publishes a completion
   *    status to the Amazon Simple Notification Service (Amazon SNS) topic that you provide to the <code>NotificationChannel</code>.
   *    To obtain the results of the invoice and receipt analysis operation, ensure that the status value
   *    published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetExpenseAnalysis</a>, and pass the job identifier (<code>JobId</code>) that was
   *    returned by your call to <code>StartExpenseAnalysis</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoice-receipts.html">Analyzing Invoices and Receipts</a>.</p>
   */
  public startExpenseAnalysis(
    args: StartExpenseAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExpenseAnalysisCommandOutput>;
  public startExpenseAnalysis(
    args: StartExpenseAnalysisCommandInput,
    cb: (err: any, data?: StartExpenseAnalysisCommandOutput) => void
  ): void;
  public startExpenseAnalysis(
    args: StartExpenseAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExpenseAnalysisCommandOutput) => void
  ): void;
  public startExpenseAnalysis(
    args: StartExpenseAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartExpenseAnalysisCommandOutput) => void),
    cb?: (err: any, data?: StartExpenseAnalysisCommandOutput) => void
  ): Promise<StartExpenseAnalysisCommandOutput> | void {
    const command = new StartExpenseAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts the classification and analysis of an input document.
   *     <code>StartLendingAnalysis</code> initiates the classification and analysis of a packet of
   *    lending documents. <code>StartLendingAnalysis</code> operates on a document file located in an
   *    Amazon S3 bucket.</p>
   *          <p>
   *             <code>StartLendingAnalysis</code> can analyze text in documents that are in one of the
   *    following formats: JPEG, PNG, TIFF, PDF. Use <code>DocumentLocation</code> to specify the bucket
   *    name and the file name of the document. </p>
   *          <p>
   *             <code>StartLendingAnalysis</code> returns a job identifier (<code>JobId</code>) that you use
   *    to get the results of the operation. When the text analysis is finished, Amazon Textract
   *    publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that
   *    you specify in <code>NotificationChannel</code>. To get the results of the text analysis
   *    operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If
   *    the status is SUCCEEDED you can call either <code>GetLendingAnalysis</code> or
   *     <code>GetLendingAnalysisSummary</code> and provide the <code>JobId</code> to obtain the results
   *    of the analysis.</p>
   *          <p>If using <code>OutputConfig</code> to specify an Amazon S3 bucket, the output will be contained
   *    within the specified prefix in a directory labeled with the job-id. In the directory there are 3
   *    sub-directories: </p>
   *          <ul>
   *             <li>
   *                <p>detailedResponse (contains the GetLendingAnalysis response)</p>
   *             </li>
   *             <li>
   *                <p>summaryResponse (for the GetLendingAnalysisSummary response)</p>
   *             </li>
   *             <li>
   *                <p>splitDocuments (documents split across logical boundaries)</p>
   *             </li>
   *          </ul>
   */
  public startLendingAnalysis(
    args: StartLendingAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartLendingAnalysisCommandOutput>;
  public startLendingAnalysis(
    args: StartLendingAnalysisCommandInput,
    cb: (err: any, data?: StartLendingAnalysisCommandOutput) => void
  ): void;
  public startLendingAnalysis(
    args: StartLendingAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartLendingAnalysisCommandOutput) => void
  ): void;
  public startLendingAnalysis(
    args: StartLendingAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartLendingAnalysisCommandOutput) => void),
    cb?: (err: any, data?: StartLendingAnalysisCommandOutput) => void
  ): Promise<StartLendingAnalysisCommandOutput> | void {
    const command = new StartLendingAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
