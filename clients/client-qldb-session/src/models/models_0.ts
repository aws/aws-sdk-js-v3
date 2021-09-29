import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Contains the details of the transaction to abort.</p>
 */
export interface AbortTransactionRequest {}

export namespace AbortTransactionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AbortTransactionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains server-side performance information for a command. Amazon QLDB captures timing
 *          information between the times when it receives the request and when it sends the
 *          corresponding response.</p>
 */
export interface TimingInformation {
  /**
   * <p>The amount of time that QLDB spent on processing the command, measured in
   *          milliseconds.</p>
   */
  ProcessingTimeMilliseconds?: number;
}

export namespace TimingInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimingInformation): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of the aborted transaction.</p>
 */
export interface AbortTransactionResult {
  /**
   * <p>Contains server-side performance information for the command.</p>
   */
  TimingInformation?: TimingInformation;
}

export namespace AbortTransactionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AbortTransactionResult): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>Returned when the request exceeds the processing capacity of the ledger.</p>
 */
export interface CapacityExceededException extends __SmithyException, $MetadataBearer {
  name: "CapacityExceededException";
  $fault: "server";
  Message?: string;
}

export namespace CapacityExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of the transaction to commit.</p>
 */
export interface CommitTransactionRequest {
  /**
   * <p>Specifies the transaction ID of the transaction to commit.</p>
   */
  TransactionId: string | undefined;

  /**
   * <p>Specifies the commit digest for the transaction to commit. For every active transaction,
   *          the commit digest must be passed. QLDB validates <code>CommitDigest</code> and rejects
   *          the commit with an error if the digest computed on the client does not match the digest
   *          computed by QLDB.</p>
   *          <p>The purpose of the <code>CommitDigest</code> parameter is to ensure that QLDB commits
   *          a transaction if and only if the server has processed the exact set of statements sent by
   *          the client, in the same order that client sent them, and with no duplicates.</p>
   */
  CommitDigest: Uint8Array | undefined;
}

export namespace CommitTransactionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CommitTransactionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains I/O usage metrics for a command that was invoked.</p>
 */
export interface IOUsage {
  /**
   * <p>The number of read I/O requests that the command made.</p>
   */
  ReadIOs?: number;

  /**
   * <p>The number of write I/O requests that the command made.</p>
   */
  WriteIOs?: number;
}

export namespace IOUsage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IOUsage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of the committed transaction.</p>
 */
export interface CommitTransactionResult {
  /**
   * <p>The transaction ID of the committed transaction.</p>
   */
  TransactionId?: string;

  /**
   * <p>The commit digest of the committed transaction.</p>
   */
  CommitDigest?: Uint8Array;

  /**
   * <p>Contains server-side performance information for the command.</p>
   */
  TimingInformation?: TimingInformation;

  /**
   * <p>Contains metrics about the number of I/O requests that were consumed.</p>
   */
  ConsumedIOs?: IOUsage;
}

export namespace CommitTransactionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CommitTransactionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a request to end the session.</p>
 */
export interface EndSessionRequest {}

export namespace EndSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndSessionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of the ended session.</p>
 */
export interface EndSessionResult {
  /**
   * <p>Contains server-side performance information for the command.</p>
   */
  TimingInformation?: TimingInformation;
}

export namespace EndSessionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndSessionResult): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that can contain a value in multiple encoding formats.</p>
 */
export interface ValueHolder {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValueHolder): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a request to execute a statement.</p>
 */
export interface ExecuteStatementRequest {
  /**
   * <p>Specifies the transaction ID of the request.</p>
   */
  TransactionId: string | undefined;

  /**
   * <p>Specifies the statement of the request.</p>
   */
  Statement: string | undefined;

  /**
   * <p>Specifies the parameters for the parameterized statement in the request.</p>
   */
  Parameters?: ValueHolder[];
}

export namespace ExecuteStatementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecuteStatementRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details of the fetched page.</p>
 */
export interface Page {
  /**
   * <p>A structure that contains values in multiple encoding formats.</p>
   */
  Values?: ValueHolder[];

  /**
   * <p>The token of the next page.</p>
   */
  NextPageToken?: string;
}

export namespace Page {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Page): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of the executed statement.</p>
 */
export interface ExecuteStatementResult {
  /**
   * <p>Contains the details of the first fetched page.</p>
   */
  FirstPage?: Page;

  /**
   * <p>Contains server-side performance information for the command.</p>
   */
  TimingInformation?: TimingInformation;

  /**
   * <p>Contains metrics about the number of I/O requests that were consumed.</p>
   */
  ConsumedIOs?: IOUsage;
}

export namespace ExecuteStatementResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecuteStatementResult): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the details of the page to be fetched.</p>
 */
export interface FetchPageRequest {
  /**
   * <p>Specifies the transaction ID of the page to be fetched.</p>
   */
  TransactionId: string | undefined;

  /**
   * <p>Specifies the next page token of the page to be fetched.</p>
   */
  NextPageToken: string | undefined;
}

export namespace FetchPageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FetchPageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the page that was fetched.</p>
 */
export interface FetchPageResult {
  /**
   * <p>Contains details of the fetched page.</p>
   */
  Page?: Page;

  /**
   * <p>Contains server-side performance information for the command.</p>
   */
  TimingInformation?: TimingInformation;

  /**
   * <p>Contains metrics about the number of I/O requests that were consumed.</p>
   */
  ConsumedIOs?: IOUsage;
}

export namespace FetchPageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FetchPageResult): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the session doesn't exist anymore because it timed out or expired.</p>
 */
export interface InvalidSessionException extends __SmithyException, $MetadataBearer {
  name: "InvalidSessionException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace InvalidSessionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidSessionException): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OccConflictException): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RateExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a request to start a new session.</p>
 */
export interface StartSessionRequest {
  /**
   * <p>The name of the ledger to start a new session against.</p>
   */
  LedgerName: string | undefined;
}

export namespace StartSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSessionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a request to start a transaction.</p>
 */
export interface StartTransactionRequest {}

export namespace StartTransactionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTransactionRequest): any => ({
    ...obj,
  });
}

export interface SendCommandRequest {
  /**
   * <p>Specifies the session token for the current command. A session token is constant
   *          throughout the life of the session.</p>
   *          <p>To obtain a session token, run the <code>StartSession</code> command. This
   *             <code>SessionToken</code> is required for every subsequent command that is issued during
   *          the current session.</p>
   */
  SessionToken?: string;

  /**
   * <p>Command to start a new session. A session token is obtained as part of the
   *          response.</p>
   */
  StartSession?: StartSessionRequest;

  /**
   * <p>Command to start a new transaction.</p>
   */
  StartTransaction?: StartTransactionRequest;

  /**
   * <p>Command to end the current session.</p>
   */
  EndSession?: EndSessionRequest;

  /**
   * <p>Command to commit the specified transaction.</p>
   */
  CommitTransaction?: CommitTransactionRequest;

  /**
   * <p>Command to abort the current transaction.</p>
   */
  AbortTransaction?: AbortTransactionRequest;

  /**
   * <p>Command to execute a statement in the specified transaction.</p>
   */
  ExecuteStatement?: ExecuteStatementRequest;

  /**
   * <p>Command to fetch a page.</p>
   */
  FetchPage?: FetchPageRequest;
}

export namespace SendCommandRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendCommandRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of the started session.</p>
 */
export interface StartSessionResult {
  /**
   * <p>Session token of the started session. This <code>SessionToken</code> is required for
   *          every subsequent command that is issued during the current session.</p>
   */
  SessionToken?: string;

  /**
   * <p>Contains server-side performance information for the command.</p>
   */
  TimingInformation?: TimingInformation;
}

export namespace StartSessionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSessionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of the started transaction.</p>
 */
export interface StartTransactionResult {
  /**
   * <p>The transaction ID of the started transaction.</p>
   */
  TransactionId?: string;

  /**
   * <p>Contains server-side performance information for the command.</p>
   */
  TimingInformation?: TimingInformation;
}

export namespace StartTransactionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTransactionResult): any => ({
    ...obj,
  });
}

export interface SendCommandResult {
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
   * <p>Contains the details of the ended session.</p>
   */
  EndSession?: EndSessionResult;

  /**
   * <p>Contains the details of the committed transaction.</p>
   */
  CommitTransaction?: CommitTransactionResult;

  /**
   * <p>Contains the details of the aborted transaction.</p>
   */
  AbortTransaction?: AbortTransactionResult;

  /**
   * <p>Contains the details of the executed statement.</p>
   */
  ExecuteStatement?: ExecuteStatementResult;

  /**
   * <p>Contains the details of the fetched page.</p>
   */
  FetchPage?: FetchPageResult;
}

export namespace SendCommandResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendCommandResult): any => ({
    ...obj,
  });
}
