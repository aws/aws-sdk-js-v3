// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { QLDBSessionServiceException as __BaseException } from "./QLDBSessionServiceException";

/**
 * <p>Contains the details of the transaction to abort.</p>
 */
export interface AbortTransactionRequest {}

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

/**
 * <p>Contains the details of the aborted transaction.</p>
 */
export interface AbortTransactionResult {
  /**
   * <p>Contains server-side performance information for the command.</p>
   */
  TimingInformation?: TimingInformation;
}

/**
 * <p>Returned if the request is malformed or contains an error such as an invalid parameter
 *          value or a missing required parameter.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
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
 */
export class CapacityExceededException extends __BaseException {
  readonly name: "CapacityExceededException" = "CapacityExceededException";
  readonly $fault: "server" = "server";
  Message?: string;
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

/**
 * <p>Specifies a request to end the session.</p>
 */
export interface EndSessionRequest {}

/**
 * <p>Contains the details of the ended session.</p>
 */
export interface EndSessionResult {
  /**
   * <p>Contains server-side performance information for the command.</p>
   */
  TimingInformation?: TimingInformation;
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

/**
 * <p>Returned if the session doesn't exist anymore because it timed out or expired.</p>
 */
export class InvalidSessionException extends __BaseException {
  readonly name: "InvalidSessionException" = "InvalidSessionException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
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
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class OccConflictException extends __BaseException {
  readonly name: "OccConflictException" = "OccConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class RateExceededException extends __BaseException {
  readonly name: "RateExceededException" = "RateExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export interface StartSessionRequest {
  /**
   * <p>The name of the ledger to start a new session against.</p>
   */
  LedgerName: string | undefined;
}

/**
 * <p>Specifies a request to start a transaction.</p>
 */
export interface StartTransactionRequest {}

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

/**
 * @internal
 */
export const AbortTransactionRequestFilterSensitiveLog = (obj: AbortTransactionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimingInformationFilterSensitiveLog = (obj: TimingInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AbortTransactionResultFilterSensitiveLog = (obj: AbortTransactionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CommitTransactionRequestFilterSensitiveLog = (obj: CommitTransactionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IOUsageFilterSensitiveLog = (obj: IOUsage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CommitTransactionResultFilterSensitiveLog = (obj: CommitTransactionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndSessionRequestFilterSensitiveLog = (obj: EndSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndSessionResultFilterSensitiveLog = (obj: EndSessionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValueHolderFilterSensitiveLog = (obj: ValueHolder): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecuteStatementRequestFilterSensitiveLog = (obj: ExecuteStatementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PageFilterSensitiveLog = (obj: Page): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecuteStatementResultFilterSensitiveLog = (obj: ExecuteStatementResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FetchPageRequestFilterSensitiveLog = (obj: FetchPageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FetchPageResultFilterSensitiveLog = (obj: FetchPageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSessionRequestFilterSensitiveLog = (obj: StartSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartTransactionRequestFilterSensitiveLog = (obj: StartTransactionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendCommandRequestFilterSensitiveLog = (obj: SendCommandRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSessionResultFilterSensitiveLog = (obj: StartSessionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartTransactionResultFilterSensitiveLog = (obj: StartTransactionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendCommandResultFilterSensitiveLog = (obj: SendCommandResult): any => ({
  ...obj,
});
