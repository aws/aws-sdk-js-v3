import { TextractClient } from "./TextractClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { AnalyzeDocumentInput } from "./types/AnalyzeDocumentInput";
import { AnalyzeDocumentOutput } from "./types/AnalyzeDocumentOutput";
import { BadDocumentException } from "./types/BadDocumentException";
import { DetectDocumentTextInput } from "./types/DetectDocumentTextInput";
import { DetectDocumentTextOutput } from "./types/DetectDocumentTextOutput";
import { DocumentTooLargeException } from "./types/DocumentTooLargeException";
import { GetDocumentAnalysisInput } from "./types/GetDocumentAnalysisInput";
import { GetDocumentAnalysisOutput } from "./types/GetDocumentAnalysisOutput";
import { GetDocumentTextDetectionInput } from "./types/GetDocumentTextDetectionInput";
import { GetDocumentTextDetectionOutput } from "./types/GetDocumentTextDetectionOutput";
import { IdempotentParameterMismatchException } from "./types/IdempotentParameterMismatchException";
import { InternalServerError } from "./types/InternalServerError";
import { InvalidJobIdException } from "./types/InvalidJobIdException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { InvalidS3ObjectException } from "./types/InvalidS3ObjectException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ProvisionedThroughputExceededException } from "./types/ProvisionedThroughputExceededException";
import { StartDocumentAnalysisInput } from "./types/StartDocumentAnalysisInput";
import { StartDocumentAnalysisOutput } from "./types/StartDocumentAnalysisOutput";
import { StartDocumentTextDetectionInput } from "./types/StartDocumentTextDetectionInput";
import { StartDocumentTextDetectionOutput } from "./types/StartDocumentTextDetectionOutput";
import { ThrottlingException } from "./types/ThrottlingException";
import { UnsupportedDocumentException } from "./types/UnsupportedDocumentException";
import { AnalyzeDocumentCommand } from "./commands/AnalyzeDocumentCommand";
import { DetectDocumentTextCommand } from "./commands/DetectDocumentTextCommand";
import { GetDocumentAnalysisCommand } from "./commands/GetDocumentAnalysisCommand";
import { GetDocumentTextDetectionCommand } from "./commands/GetDocumentTextDetectionCommand";
import { StartDocumentAnalysisCommand } from "./commands/StartDocumentAnalysisCommand";
import { StartDocumentTextDetectionCommand } from "./commands/StartDocumentTextDetectionCommand";

export class Textract extends TextractClient {
  /**
   * <p>Analyzes an input document for relationships between detected items. </p> <p>The types of information returned are as follows: </p> <ul> <li> <p>Words and lines that are related to nearby lines and words. The related information is returned in two <a>Block</a> objects each of type <code>KEY_VALUE_SET</code>: a KEY Block object and a VALUE Block object. For example, <i>Name: Ana Silva Carolina</i> contains a key and value. <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is the value.</p> </li> <li> <p>Table and table cell data. A TABLE Block object contains information about a detected table. A CELL Block object is returned for each cell in a table.</p> </li> <li> <p>Selectable elements such as checkboxes and radio buttons. A SELECTION_ELEMENT Block object contains information about a selectable element.</p> </li> <li> <p>Lines and words of text. A LINE Block object contains one or more WORD Block objects.</p> </li> </ul> <p>You can choose which type of analysis to perform by specifying the <code>FeatureTypes</code> list. </p> <p>The output is returned in a list of <code>BLOCK</code> objects.</p> <p> <code>AnalyzeDocument</code> is a synchronous operation. To analyze documents asynchronously, use <a>StartDocumentAnalysis</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>An input parameter violated a constraint. For example, in synchronous operations, an <code>InvalidParameterException</code> exception occurs when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code> request parameter. Validate your parameter before calling the API operation again.</p>
   *   - {InvalidS3ObjectException} <p>Amazon Textract is unable to access the S3 object that's specified in the request.</p>
   *   - {UnsupportedDocumentException} <p>The format of the input document isn't supported. Amazon Textract supports documents that are .png or .jpg format.</p>
   *   - {DocumentTooLargeException} <p>The document can't be processed because it's too large. The maximum document size for synchronous operations 5 MB. The maximum document size for asynchronous operations is 500 MB for PDF format files.</p>
   *   - {BadDocumentException} <p>Amazon Textract isn't able to read the document.</p>
   *   - {AccessDeniedException} <p>You aren't authorized to perform the action.</p>
   *   - {ProvisionedThroughputExceededException} <p>The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Textract.</p>
   *   - {InternalServerError} <p>Amazon Textract experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public analyzeDocument(
    args: AnalyzeDocumentInput
  ): Promise<AnalyzeDocumentOutput>;
  public analyzeDocument(
    args: AnalyzeDocumentInput,
    cb: (err: any, data?: AnalyzeDocumentOutput) => void
  ): void;
  public analyzeDocument(
    args: AnalyzeDocumentInput,
    cb?: (err: any, data?: AnalyzeDocumentOutput) => void
  ): Promise<AnalyzeDocumentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AnalyzeDocumentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detects text in the input document. Amazon Textract can detect lines of text and the words that make up a line of text. The input document must be an image in JPG or PNG format. <code>DetectDocumentText</code> returns the detected text in an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p> <code>DetectDocumentText</code> is a synchronous operation. To analyze documents asynchronously, use <a>StartDocumentTextDetection</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>An input parameter violated a constraint. For example, in synchronous operations, an <code>InvalidParameterException</code> exception occurs when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code> request parameter. Validate your parameter before calling the API operation again.</p>
   *   - {InvalidS3ObjectException} <p>Amazon Textract is unable to access the S3 object that's specified in the request.</p>
   *   - {UnsupportedDocumentException} <p>The format of the input document isn't supported. Amazon Textract supports documents that are .png or .jpg format.</p>
   *   - {DocumentTooLargeException} <p>The document can't be processed because it's too large. The maximum document size for synchronous operations 5 MB. The maximum document size for asynchronous operations is 500 MB for PDF format files.</p>
   *   - {BadDocumentException} <p>Amazon Textract isn't able to read the document.</p>
   *   - {AccessDeniedException} <p>You aren't authorized to perform the action.</p>
   *   - {ProvisionedThroughputExceededException} <p>The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Textract.</p>
   *   - {InternalServerError} <p>Amazon Textract experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detectDocumentText(
    args: DetectDocumentTextInput
  ): Promise<DetectDocumentTextOutput>;
  public detectDocumentText(
    args: DetectDocumentTextInput,
    cb: (err: any, data?: DetectDocumentTextOutput) => void
  ): void;
  public detectDocumentText(
    args: DetectDocumentTextInput,
    cb?: (err: any, data?: DetectDocumentTextOutput) => void
  ): Promise<DetectDocumentTextOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetectDocumentTextCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a document.</p> <p>You start asynchronous text analysis by calling <a>StartDocumentAnalysis</a>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartDocumentAnalysis</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p> <code>GetDocumentAnalysis</code> returns an array of <a>Block</a> objects. The following types of information are returned: </p> <ul> <li> <p>Words and lines that are related to nearby lines and words. The related information is returned in two <a>Block</a> objects each of type <code>KEY_VALUE_SET</code>: a KEY Block object and a VALUE Block object. For example, <i>Name: Ana Silva Carolina</i> contains a key and value. <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is the value.</p> </li> <li> <p>Table and table cell data. A TABLE Block object contains information about a detected table. A CELL Block object is returned for each cell in a table.</p> </li> <li> <p>Selectable elements such as checkboxes and radio buttons. A SELECTION_ELEMENT Block object contains information about a selectable element.</p> </li> <li> <p>Lines and words of text. A LINE Block object contains one or more WORD Block objects.</p> </li> </ul> <p>Use the <code>MaxResults</code> parameter to limit the number of blocks returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentAnalysis</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetDocumentAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>An input parameter violated a constraint. For example, in synchronous operations, an <code>InvalidParameterException</code> exception occurs when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code> request parameter. Validate your parameter before calling the API operation again.</p>
   *   - {AccessDeniedException} <p>You aren't authorized to perform the action.</p>
   *   - {ProvisionedThroughputExceededException} <p>The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Textract.</p>
   *   - {InvalidJobIdException} <p>An invalid job identifier was passed to <a>GetDocumentAnalysis</a> or to <a>GetDocumentAnalysis</a>.</p>
   *   - {InternalServerError} <p>Amazon Textract experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDocumentAnalysis(
    args: GetDocumentAnalysisInput
  ): Promise<GetDocumentAnalysisOutput>;
  public getDocumentAnalysis(
    args: GetDocumentAnalysisInput,
    cb: (err: any, data?: GetDocumentAnalysisOutput) => void
  ): void;
  public getDocumentAnalysis(
    args: GetDocumentAnalysisInput,
    cb?: (err: any, data?: GetDocumentAnalysisOutput) => void
  ): Promise<GetDocumentAnalysisOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDocumentAnalysisCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the results for an Amazon Textract asynchronous operation that detects text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p>You start asynchronous text detection by calling <a>StartDocumentTextDetection</a>, which returns a job identifier (<code>JobId</code>). When the text detection operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartDocumentTextDetection</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentTextDetection</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p> <code>GetDocumentTextDetection</code> returns an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentTextDetection</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>An input parameter violated a constraint. For example, in synchronous operations, an <code>InvalidParameterException</code> exception occurs when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code> request parameter. Validate your parameter before calling the API operation again.</p>
   *   - {AccessDeniedException} <p>You aren't authorized to perform the action.</p>
   *   - {ProvisionedThroughputExceededException} <p>The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Textract.</p>
   *   - {InvalidJobIdException} <p>An invalid job identifier was passed to <a>GetDocumentAnalysis</a> or to <a>GetDocumentAnalysis</a>.</p>
   *   - {InternalServerError} <p>Amazon Textract experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDocumentTextDetection(
    args: GetDocumentTextDetectionInput
  ): Promise<GetDocumentTextDetectionOutput>;
  public getDocumentTextDetection(
    args: GetDocumentTextDetectionInput,
    cb: (err: any, data?: GetDocumentTextDetectionOutput) => void
  ): void;
  public getDocumentTextDetection(
    args: GetDocumentTextDetectionInput,
    cb?: (err: any, data?: GetDocumentTextDetectionOutput) => void
  ): Promise<GetDocumentTextDetectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDocumentTextDetectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts asynchronous analysis of an input document for relationships between detected items such as key and value pairs, tables, and selection elements.</p> <p> <code>StartDocumentAnalysis</code> can analyze text in documents that are in JPG, PNG, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartDocumentAnalysis</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentAnalysis</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>An input parameter violated a constraint. For example, in synchronous operations, an <code>InvalidParameterException</code> exception occurs when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code> request parameter. Validate your parameter before calling the API operation again.</p>
   *   - {InvalidS3ObjectException} <p>Amazon Textract is unable to access the S3 object that's specified in the request.</p>
   *   - {UnsupportedDocumentException} <p>The format of the input document isn't supported. Amazon Textract supports documents that are .png or .jpg format.</p>
   *   - {DocumentTooLargeException} <p>The document can't be processed because it's too large. The maximum document size for synchronous operations 5 MB. The maximum document size for asynchronous operations is 500 MB for PDF format files.</p>
   *   - {BadDocumentException} <p>Amazon Textract isn't able to read the document.</p>
   *   - {AccessDeniedException} <p>You aren't authorized to perform the action.</p>
   *   - {ProvisionedThroughputExceededException} <p>The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Textract.</p>
   *   - {InternalServerError} <p>Amazon Textract experienced a service issue. Try your call again.</p>
   *   - {IdempotentParameterMismatchException} <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at least one of the other input parameters is different from the previous call to the operation. </p>
   *   - {ThrottlingException} <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
   *   - {LimitExceededException} <p>An Amazon Textract service limit was exceeded. For example, if you start too many asynchronous jobs concurrently, calls to start operations (<code>StartDocumentTextDetection</code>, for example) raise a LimitExceededException exception (HTTP status code: 400) until the number of concurrently running jobs is below the Amazon Textract service limit. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startDocumentAnalysis(
    args: StartDocumentAnalysisInput
  ): Promise<StartDocumentAnalysisOutput>;
  public startDocumentAnalysis(
    args: StartDocumentAnalysisInput,
    cb: (err: any, data?: StartDocumentAnalysisOutput) => void
  ): void;
  public startDocumentAnalysis(
    args: StartDocumentAnalysisInput,
    cb?: (err: any, data?: StartDocumentAnalysisOutput) => void
  ): Promise<StartDocumentAnalysisOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartDocumentAnalysisCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts the asynchronous detection of text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p> <code>StartDocumentTextDetection</code> can analyze text in documents that are in JPG, PNG, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartTextDetection</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text detection is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentTextDetection</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>An input parameter violated a constraint. For example, in synchronous operations, an <code>InvalidParameterException</code> exception occurs when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code> request parameter. Validate your parameter before calling the API operation again.</p>
   *   - {InvalidS3ObjectException} <p>Amazon Textract is unable to access the S3 object that's specified in the request.</p>
   *   - {UnsupportedDocumentException} <p>The format of the input document isn't supported. Amazon Textract supports documents that are .png or .jpg format.</p>
   *   - {DocumentTooLargeException} <p>The document can't be processed because it's too large. The maximum document size for synchronous operations 5 MB. The maximum document size for asynchronous operations is 500 MB for PDF format files.</p>
   *   - {BadDocumentException} <p>Amazon Textract isn't able to read the document.</p>
   *   - {AccessDeniedException} <p>You aren't authorized to perform the action.</p>
   *   - {ProvisionedThroughputExceededException} <p>The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Textract.</p>
   *   - {InternalServerError} <p>Amazon Textract experienced a service issue. Try your call again.</p>
   *   - {IdempotentParameterMismatchException} <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at least one of the other input parameters is different from the previous call to the operation. </p>
   *   - {ThrottlingException} <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
   *   - {LimitExceededException} <p>An Amazon Textract service limit was exceeded. For example, if you start too many asynchronous jobs concurrently, calls to start operations (<code>StartDocumentTextDetection</code>, for example) raise a LimitExceededException exception (HTTP status code: 400) until the number of concurrently running jobs is below the Amazon Textract service limit. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startDocumentTextDetection(
    args: StartDocumentTextDetectionInput
  ): Promise<StartDocumentTextDetectionOutput>;
  public startDocumentTextDetection(
    args: StartDocumentTextDetectionInput,
    cb: (err: any, data?: StartDocumentTextDetectionOutput) => void
  ): void;
  public startDocumentTextDetection(
    args: StartDocumentTextDetectionInput,
    cb?: (err: any, data?: StartDocumentTextDetectionOutput) => void
  ): Promise<StartDocumentTextDetectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartDocumentTextDetectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
