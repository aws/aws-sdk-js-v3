export const _AT = "AbortTransaction";
export const _ATR = "AbortTransactionRequest";
export const _ATRb = "AbortTransactionResult";
export const _BRE = "BadRequestException";
export const _C = "Code";
export const _CD = "CommitDigest";
export const _CEE = "CapacityExceededException";
export const _CIO = "ConsumedIOs";
export const _CT = "CommitTransaction";
export const _CTR = "CommitTransactionRequest";
export const _CTRo = "CommitTransactionResult";
export const _ES = "EndSession";
export const _ESR = "EndSessionRequest";
export const _ESRn = "EndSessionResult";
export const _ESRx = "ExecuteStatementRequest";
export const _ESRxe = "ExecuteStatementResult";
export const _ESx = "ExecuteStatement";
export const _FP = "FirstPage";
export const _FPR = "FetchPageRequest";
export const _FPRe = "FetchPageResult";
export const _FPe = "FetchPage";
export const _IB = "IonBinary";
export const _IOU = "IOUsage";
export const _ISE = "InvalidSessionException";
export const _IT = "IonText";
export const _LEE = "LimitExceededException";
export const _LN = "LedgerName";
export const _M = "Message";
export const _NPT = "NextPageToken";
export const _OCE = "OccConflictException";
export const _P = "Parameters";
export const _PTM = "ProcessingTimeMilliseconds";
export const _Pa = "Page";
export const _REE = "RateExceededException";
export const _RIO = "ReadIOs";
export const _S = "Statement";
export const _SC = "SendCommand";
export const _SCR = "SendCommandRequest";
export const _SCRe = "SendCommandResult";
export const _SP = "StatementParameters";
export const _SS = "StartSession";
export const _SSR = "StartSessionRequest";
export const _SSRt = "StartSessionResult";
export const _ST = "SessionToken";
export const _STR = "StartTransactionRequest";
export const _STRt = "StartTransactionResult";
export const _STt = "StartTransaction";
export const _TI = "TimingInformation";
export const _TIr = "TransactionId";
export const _V = "Values";
export const _VH = "ValueHolder";
export const _VHa = "ValueHolders";
export const _WIO = "WriteIOs";
export const _c = "client";
export const _e = "error";
export const _hE = "httpError";
export const _s = "server";
export const n0 = "com.amazonaws.qldbsession";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { QLDBSessionServiceException as __QLDBSessionServiceException } from "../models/QLDBSessionServiceException";

/* eslint no-var: 0 */

export var QLDBSessionServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.qldbsession",
  "QLDBSessionServiceException",
  0,
  [],
  [],
  __QLDBSessionServiceException
);
