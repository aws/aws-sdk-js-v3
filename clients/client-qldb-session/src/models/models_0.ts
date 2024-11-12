// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { QLDBSessionServiceException as __BaseException } from "./QLDBSessionServiceException";

/**
 * <p>Contains the details of the transaction to abort.</p>
 * @public
 */
export interface AbortTransactionRequest {}

/**
 * <p>Contains server-side performance information for a command. Amazon QLDB captures timing
 *          information between the times when it receives the request and when it sends the
 *          corresponding response.</p>
 * @public
 */
export interface TimingInformation {
  /**
   * <p>The amount of time that QLDB spent on processing the command, measured in
   *          milliseconds.</p>
   * @public
   */
  ProcessingTimeMilliseconds?: number | undefined;
}

/**
 * <p>Contains the details of the aborted transaction.</p>
 * @public
 */
export interface AbortTransactionResult {
  /**
   * <p>Contains server-side performance information for the command.</p>
   * @public
   */
  TimingInformation?: TimingInformation | undefined;
}

/**
 * <p>Returned if the request is malformed or contains an error such as an invalid parameter
 *          value or a missing required parameter.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * <p>Returned when the request exceeds the processing capacity of the ledger.</p>
 * @public
 */
export class CapacityExceededException extends __BaseException {
  readonly name: "CapacityExceededException" = "CapacityExceededException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CapacityExceededException, __BaseException>) {
    super({
      name: "CapacityExceededException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, CapacityExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains the details of the transaction to commit.</p>
 * @public
 */
export interface CommitTransactionRequest {
  /**
   * <p>Specifies the transaction ID of the transaction to commit.</p>
   * @public
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
   * @public
   */
  CommitDigest: Uint8Array | undefined;
}

/**
 * <p>Contains I/O usage metrics for a command that was invoked.</p>
 * @public
 */
export interface IOUsage {
  /**
   * <p>The number of read I/O requests that the command made.</p>
   * @public
   */
  ReadIOs?: number | undefined;

  /**
   * <p>The number of write I/O requests that the command made.</p>
   * @public
   */
  WriteIOs?: number | undefined;
}

/**
 * <p>Contains the details of the committed transaction.</p>
 * @public
 */
export interface CommitTransactionResult {
  /**
   * <p>The transaction ID of the committed transaction.</p>
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * <p>The commit digest of the committed transaction.</p>
   * @public
   */
  CommitDigest?: Uint8Array | undefined;

  /**
   * <p>Contains server-side performance information for the command.</p>
   * @public
   */
  TimingInformation?: TimingInformation | undefined;

  /**
   * <p>Contains metrics about the number of I/O requests that were consumed.</p>
   * @public
   */
  ConsumedIOs?: IOUsage | undefined;
}

/**
 * <p>Specifies a request to end the session.</p>
 * @public
 */
export interface EndSessionRequest {}

/**
 * <p>Contains the details of the ended session.</p>
 * @public
 */
export interface EndSessionResult {
  /**
   * <p>Contains server-side performance information for the command.</p>
   * @public
   */
  TimingInformation?: TimingInformation | undefined;
}

/**
 * <p>A structure that can contain a value in multiple encoding formats.</p>
 * @public
 */
export interface ValueHolder {
  /**
   * <p>An Amazon Ion binary value contained in a <code>ValueHolder</code> structure.</p>
   * @public
   */
  IonBinary?: Uint8Array | undefined;

  /**
   * <p>An Amazon Ion plaintext value contained in a <code>ValueHolder</code> structure.</p>
   * @public
   */
  IonText?: string | undefined;
}

/**
 * <p>Specifies a request to execute a statement.</p>
 * @public
 */
export interface ExecuteStatementRequest {
  /**
   * <p>Specifies the transaction ID of the request.</p>
   * @public
   */
  TransactionId: string | undefined;

  /**
   * <p>Specifies the statement of the request.</p>
   * @public
   */
  Statement: string | undefined;

  /**
   * <p>Specifies the parameters for the parameterized statement in the request.</p>
   * @public
   */
  Parameters?: ValueHolder[] | undefined;
}

/**
 * <p>Contains details of the fetched page.</p>
 * @public
 */
export interface Page {
  /**
   * <p>A structure that contains values in multiple encoding formats.</p>
   * @public
   */
  Values?: ValueHolder[] | undefined;

  /**
   * <p>The token of the next page.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * <p>Contains the details of the executed statement.</p>
 * @public
 */
export interface ExecuteStatementResult {
  /**
   * <p>Contains the details of the first fetched page.</p>
   * @public
   */
  FirstPage?: Page | undefined;

  /**
   * <p>Contains server-side performance information for the command.</p>
   * @public
   */
  TimingInformation?: TimingInformation | undefined;

  /**
   * <p>Contains metrics about the number of I/O requests that were consumed.</p>
   * @public
   */
  ConsumedIOs?: IOUsage | undefined;
}

/**
 * <p>Specifies the details of the page to be fetched.</p>
 * @public
 */
export interface FetchPageRequest {
  /**
   * <p>Specifies the transaction ID of the page to be fetched.</p>
   * @public
   */
  TransactionId: string | undefined;

  /**
   * <p>Specifies the next page token of the page to be fetched.</p>
   * @public
   */
  NextPageToken: string | undefined;
}

/**
 * <p>Contains the page that was fetched.</p>
 * @public
 */
export interface FetchPageResult {
  /**
   * <p>Contains details of the fetched page.</p>
   * @public
   */
  Page?: Page | undefined;

  /**
   * <p>Contains server-side performance information for the command.</p>
   * @public
   */
  TimingInformation?: TimingInformation | undefined;

  /**
   * <p>Contains metrics about the number of I/O requests that were consumed.</p>
   * @public
   */
  ConsumedIOs?: IOUsage | undefined;
}

/**
 * <p>Returned if the session doesn't exist anymore because it timed out or expired.</p>
 * @public
 */
export class InvalidSessionException extends __BaseException {
  readonly name: "InvalidSessionException" = "InvalidSessionException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSessionException, __BaseException>) {
    super({
      name: "InvalidSessionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSessionException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * <p>Returned if a resource limit such as number of active sessions is exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned when a transaction cannot be written to the journal due to a failure in the
 *          verification phase of <i>optimistic concurrency control</i> (OCC).</p>
 * @public
 */
export class OccConflictException extends __BaseException {
  readonly name: "OccConflictException" = "OccConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OccConflictException, __BaseException>) {
    super({
      name: "OccConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OccConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned when the rate of requests exceeds the allowed throughput.</p>
 * @public
 */
export class RateExceededException extends __BaseException {
  readonly name: "RateExceededException" = "RateExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RateExceededException, __BaseException>) {
    super({
      name: "RateExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RateExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Specifies a request to start a new session.</p>
 * @public
 */
export interface StartSessionRequest {
  /**
   * <p>The name of the ledger to start a new session against.</p>
   * @public
   */
  LedgerName: string | undefined;
}

/**
 * <p>Specifies a request to start a transaction.</p>
 * @public
 */
export interface StartTransactionRequest {}

/**
 * @public
 */
export interface SendCommandRequest {
  /**
   * <p>Specifies the session token for the current command. A session token is constant
   *          throughout the life of the session.</p>
   *          <p>To obtain a session token, run the <code>StartSession</code> command. This
   *             <code>SessionToken</code> is required for every subsequent command that is issued during
   *          the current session.</p>
   * @public
   */
  SessionToken?: string | undefined;

  /**
   * <p>Command to start a new session. A session token is obtained as part of the
   *          response.</p>
   * @public
   */
  StartSession?: StartSessionRequest | undefined;

  /**
   * <p>Command to start a new transaction.</p>
   * @public
   */
  StartTransaction?: StartTransactionRequest | undefined;

  /**
   * <p>Command to end the current session.</p>
   * @public
   */
  EndSession?: EndSessionRequest | undefined;

  /**
   * <p>Command to commit the specified transaction.</p>
   * @public
   */
  CommitTransaction?: CommitTransactionRequest | undefined;

  /**
   * <p>Command to abort the current transaction.</p>
   * @public
   */
  AbortTransaction?: AbortTransactionRequest | undefined;

  /**
   * <p>Command to execute a statement in the specified transaction.</p>
   * @public
   */
  ExecuteStatement?: ExecuteStatementRequest | undefined;

  /**
   * <p>Command to fetch a page.</p>
   * @public
   */
  FetchPage?: FetchPageRequest | undefined;
}

/**
 * <p>Contains the details of the started session.</p>
 * @public
 */
export interface StartSessionResult {
  /**
   * <p>Session token of the started session. This <code>SessionToken</code> is required for
   *          every subsequent command that is issued during the current session.</p>
   * @public
   */
  SessionToken?: string | undefined;

  /**
   * <p>Contains server-side performance information for the command.</p>
   * @public
   */
  TimingInformation?: TimingInformation | undefined;
}

/**
 * <p>Contains the details of the started transaction.</p>
 * @public
 */
export interface StartTransactionResult {
  /**
   * <p>The transaction ID of the started transaction.</p>
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * <p>Contains server-side performance information for the command.</p>
   * @public
   */
  TimingInformation?: TimingInformation | undefined;
}

/**
 * @public
 */
export interface SendCommandResult {
  /**
   * <p>Contains the details of the started session that includes a session token. This
   *             <code>SessionToken</code> is required for every subsequent command that is issued during
   *          the current session.</p>
   * @public
   */
  StartSession?: StartSessionResult | undefined;

  /**
   * <p>Contains the details of the started transaction.</p>
   * @public
   */
  StartTransaction?: StartTransactionResult | undefined;

  /**
   * <p>Contains the details of the ended session.</p>
   * @public
   */
  EndSession?: EndSessionResult | undefined;

  /**
   * <p>Contains the details of the committed transaction.</p>
   * @public
   */
  CommitTransaction?: CommitTransactionResult | undefined;

  /**
   * <p>Contains the details of the aborted transaction.</p>
   * @public
   */
  AbortTransaction?: AbortTransactionResult | undefined;

  /**
   * <p>Contains the details of the executed statement.</p>
   * @public
   */
  ExecuteStatement?: ExecuteStatementResult | undefined;

  /**
   * <p>Contains the details of the fetched page.</p>
   * @public
   */
  FetchPage?: FetchPageResult | undefined;
}
