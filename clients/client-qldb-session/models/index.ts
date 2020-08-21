import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Contains the details of the transaction to abort.</p>
 */
export interface AbortTransactionRequest {
  __type?: "AbortTransactionRequest";
}

export namespace AbortTransactionRequest {
  export const filterSensitiveLog = (obj: AbortTransactionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AbortTransactionRequest => __isa(o, "AbortTransactionRequest");
}

/**
 * <p>Contains the details of the aborted transaction.</p>
 */
export interface AbortTransactionResult {
  __type?: "AbortTransactionResult";
}

export namespace AbortTransactionResult {
  export const filterSensitiveLog = (obj: AbortTransactionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AbortTransactionResult => __isa(o, "AbortTransactionResult");
}

/**
 * <p>Returned if the request is malformed or contains an error such as an invalid parameter
 *          value or a missing required parameter.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BadRequestException => __isa(o, "BadRequestException");
}

/**
 * <p>Contains the details of the transaction to commit.</p>
 */
export interface CommitTransactionRequest {
  __type?: "CommitTransactionRequest";
  /**
   * <p>Specifies the transaction ID of the transaction to commit.</p>
   */
  TransactionId: string | undefined;

  /**
   * <p>Specifies the commit digest for the transaction to commit. For every active transaction,
   *          the commit digest must be passed. QLDB validates <code>CommitDigest</code> and rejects
   *          the commit with an error if the digest computed on the client does not match the digest
   *          computed by QLDB.</p>
   */
  CommitDigest: Uint8Array | undefined;
}

export namespace CommitTransactionRequest {
  export const filterSensitiveLog = (obj: CommitTransactionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CommitTransactionRequest => __isa(o, "CommitTransactionRequest");
}

/**
 * <p>Contains the details of the committed transaction.</p>
 */
export interface CommitTransactionResult {
  __type?: "CommitTransactionResult";
  /**
   * <p>The transaction ID of the committed transaction.</p>
   */
  TransactionId?: string;

  /**
   * <p>The commit digest of the committed transaction.</p>
   */
  CommitDigest?: Uint8Array;
}

export namespace CommitTransactionResult {
  export const filterSensitiveLog = (obj: CommitTransactionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CommitTransactionResult => __isa(o, "CommitTransactionResult");
}

/**
 * <p>Specifies a request to end the session.</p>
 */
export interface EndSessionRequest {
  __type?: "EndSessionRequest";
}

export namespace EndSessionRequest {
  export const filterSensitiveLog = (obj: EndSessionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndSessionRequest => __isa(o, "EndSessionRequest");
}

/**
 * <p>Contains the details of the ended session.</p>
 */
export interface EndSessionResult {
  __type?: "EndSessionResult";
}

export namespace EndSessionResult {
  export const filterSensitiveLog = (obj: EndSessionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndSessionResult => __isa(o, "EndSessionResult");
}

/**
 * <p>Specifies a request to execute a statement.</p>
 */
export interface ExecuteStatementRequest {
  __type?: "ExecuteStatementRequest";
  /**
   * <p>Specifies the parameters for the parameterized statement in the request.</p>
   */
  Parameters?: ValueHolder[];

  /**
   * <p>Specifies the transaction ID of the request.</p>
   */
  TransactionId: string | undefined;

  /**
   * <p>Specifies the statement of the request.</p>
   */
  Statement: string | undefined;
}

export namespace ExecuteStatementRequest {
  export const filterSensitiveLog = (obj: ExecuteStatementRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExecuteStatementRequest => __isa(o, "ExecuteStatementRequest");
}

/**
 * <p>Contains the details of the executed statement.</p>
 */
export interface ExecuteStatementResult {
  __type?: "ExecuteStatementResult";
  /**
   * <p>Contains the details of the first fetched page.</p>
   */
  FirstPage?: Page;
}

export namespace ExecuteStatementResult {
  export const filterSensitiveLog = (obj: ExecuteStatementResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExecuteStatementResult => __isa(o, "ExecuteStatementResult");
}

/**
 * <p>Specifies the details of the page to be fetched.</p>
 */
export interface FetchPageRequest {
  __type?: "FetchPageRequest";
  /**
   * <p>Specifies the next page token of the page to be fetched.</p>
   */
  NextPageToken: string | undefined;

  /**
   * <p>Specifies the transaction ID of the page to be fetched.</p>
   */
  TransactionId: string | undefined;
}

export namespace FetchPageRequest {
  export const filterSensitiveLog = (obj: FetchPageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FetchPageRequest => __isa(o, "FetchPageRequest");
}

/**
 * <p>Contains the page that was fetched.</p>
 */
export interface FetchPageResult {
  __type?: "FetchPageResult";
  /**
   * <p>Contains details of the fetched page.</p>
   */
  Page?: Page;
}

export namespace FetchPageResult {
  export const filterSensitiveLog = (obj: FetchPageResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FetchPageResult => __isa(o, "FetchPageResult");
}

/**
 * <p>Returned if the session doesn't exist anymore because it timed out or expired.</p>
 */
export interface InvalidSessionException extends __SmithyException, $MetadataBearer {
  name: "InvalidSessionException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace InvalidSessionException {
  export const filterSensitiveLog = (obj: InvalidSessionException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidSessionException => __isa(o, "InvalidSessionException");
}

/**
 * <p>Returned if a resource limit such as number of active sessions is exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LimitExceededException => __isa(o, "LimitExceededException");
}

/**
 * <p>Returned when a transaction cannot be written to the journal due to a failure in the
 *          verification phase of <i>optimistic concurrency control</i> (OCC).</p>
 */
export interface OccConflictException extends __SmithyException, $MetadataBearer {
  name: "OccConflictException";
  $fault: "client";
  Message?: string;
}

export namespace OccConflictException {
  export const filterSensitiveLog = (obj: OccConflictException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OccConflictException => __isa(o, "OccConflictException");
}

/**
 * <p>Contains details of the fetched page.</p>
 */
export interface Page {
  __type?: "Page";
  /**
   * <p>The token of the next page.</p>
   */
  NextPageToken?: string;

  /**
   * <p>A structure that contains values in multiple encoding formats.</p>
   */
  Values?: ValueHolder[];
}

export namespace Page {
  export const filterSensitiveLog = (obj: Page): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Page => __isa(o, "Page");
}

/**
 * <p>Returned when the rate of requests exceeds the allowed throughput.</p>
 */
export interface RateExceededException extends __SmithyException, $MetadataBearer {
  name: "RateExceededException";
  $fault: "client";
  Message?: string;
}

export namespace RateExceededException {
  export const filterSensitiveLog = (obj: RateExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RateExceededException => __isa(o, "RateExceededException");
}

export interface SendCommandRequest {
  __type?: "SendCommandRequest";
  /**
   * <p>Command to start a new session. A session token is obtained as part of the
   *          response.</p>
   */
  StartSession?: StartSessionRequest;

  /**
   * <p>Command to commit the specified transaction.</p>
   */
  CommitTransaction?: CommitTransactionRequest;

  /**
   * <p>Command to end the current session.</p>
   */
  EndSession?: EndSessionRequest;

  /**
   * <p>Command to start a new transaction.</p>
   */
  StartTransaction?: StartTransactionRequest;

  /**
   * <p>Command to abort the current transaction.</p>
   */
  AbortTransaction?: AbortTransactionRequest;

  /**
   * <p>Command to fetch a page.</p>
   */
  FetchPage?: FetchPageRequest;

  /**
   * <p>Specifies the session token for the current command. A session token is constant
   *          throughout the life of the session.</p>
   *          <p>To obtain a session token, run the <code>StartSession</code> command. This
   *             <code>SessionToken</code> is required for every subsequent command that is issued during
   *          the current session.</p>
   */
  SessionToken?: string;

  /**
   * <p>Command to execute a statement in the specified transaction.</p>
   */
  ExecuteStatement?: ExecuteStatementRequest;
}

export namespace SendCommandRequest {
  export const filterSensitiveLog = (obj: SendCommandRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendCommandRequest => __isa(o, "SendCommandRequest");
}

export interface SendCommandResult {
  __type?: "SendCommandResult";
  /**
   * <p>Contains the details of the ended session.</p>
   */
  EndSession?: EndSessionResult;

  /**
   * <p>Contains the details of the fetched page.</p>
   */
  FetchPage?: FetchPageResult;

  /**
   * <p>Contains the details of the aborted transaction.</p>
   */
  AbortTransaction?: AbortTransactionResult;

  /**
   * <p>Contains the details of the started session that includes a session token. This
   *             <code>SessionToken</code> is required for every subsequent command that is issued during
   *          the current session.</p>
   */
  StartSession?: StartSessionResult;

  /**
   * <p>Contains the details of the started transaction.</p>
   */
  StartTransaction?: StartTransactionResult;

  /**
   * <p>Contains the details of the committed transaction.</p>
   */
  CommitTransaction?: CommitTransactionResult;

  /**
   * <p>Contains the details of the executed statement.</p>
   */
  ExecuteStatement?: ExecuteStatementResult;
}

export namespace SendCommandResult {
  export const filterSensitiveLog = (obj: SendCommandResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendCommandResult => __isa(o, "SendCommandResult");
}

/**
 * <p>Specifies a request to start a new session.</p>
 */
export interface StartSessionRequest {
  __type?: "StartSessionRequest";
  /**
   * <p>The name of the ledger to start a new session against.</p>
   */
  LedgerName: string | undefined;
}

export namespace StartSessionRequest {
  export const filterSensitiveLog = (obj: StartSessionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartSessionRequest => __isa(o, "StartSessionRequest");
}

/**
 * <p>Contains the details of the started session.</p>
 */
export interface StartSessionResult {
  __type?: "StartSessionResult";
  /**
   * <p>Session token of the started session. This <code>SessionToken</code> is required for
   *          every subsequent command that is issued during the current session.</p>
   */
  SessionToken?: string;
}

export namespace StartSessionResult {
  export const filterSensitiveLog = (obj: StartSessionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartSessionResult => __isa(o, "StartSessionResult");
}

/**
 * <p>Specifies a request to start a transaction.</p>
 */
export interface StartTransactionRequest {
  __type?: "StartTransactionRequest";
}

export namespace StartTransactionRequest {
  export const filterSensitiveLog = (obj: StartTransactionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartTransactionRequest => __isa(o, "StartTransactionRequest");
}

/**
 * <p>Contains the details of the started transaction.</p>
 */
export interface StartTransactionResult {
  __type?: "StartTransactionResult";
  /**
   * <p>The transaction ID of the started transaction.</p>
   */
  TransactionId?: string;
}

export namespace StartTransactionResult {
  export const filterSensitiveLog = (obj: StartTransactionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartTransactionResult => __isa(o, "StartTransactionResult");
}

/**
 * <p>A structure that can contain an Amazon Ion value in multiple encoding formats.</p>
 */
export interface ValueHolder {
  __type?: "ValueHolder";
  /**
   * <p>An Amazon Ion binary value contained in a <code>ValueHolder</code> structure.</p>
   */
  IonBinary?: Uint8Array;

  /**
   * <p>An Amazon Ion plaintext value contained in a <code>ValueHolder</code> structure.</p>
   */
  IonText?: string;
}

export namespace ValueHolder {
  export const filterSensitiveLog = (obj: ValueHolder): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ValueHolder => __isa(o, "ValueHolder");
}
