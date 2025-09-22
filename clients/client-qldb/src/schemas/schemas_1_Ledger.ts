// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  LimitExceededException as __LimitExceededException,
  ResourceAlreadyExistsException as __ResourceAlreadyExistsException,
} from "../models/index";
import {
  _A,
  _Bu,
  _c,
  _CDT,
  _CL,
  _CLR,
  _CLRr,
  _CT,
  _DJKS,
  _DJKSR,
  _DJKSRe,
  _DJSE,
  _DJSER,
  _DJSERe,
  _DLe,
  _DLRe,
  _DLRes,
  _DP,
  _e,
  _EC,
  _ECn,
  _ECT,
  _ED,
  _EDn,
  _EET,
  _EI,
  _EJTS,
  _EJTSR,
  _EJTSRx,
  _ES,
  _h,
  _hE,
  _hQ,
  _IKKDT,
  _IST,
  _JKSD,
  _JKSDL,
  _JSE,
  _JSED,
  _JSEL,
  _KC,
  _KK,
  _KKA,
  _L,
  _LED,
  _LEE,
  _LJKSFL,
  _LJKSFLR,
  _LJKSFLRi,
  _LJSE,
  _LJSEFL,
  _LJSEFLR,
  _LJSEFLRi,
  _LJSER,
  _LJSERi,
  _LL,
  _LLi,
  _LLR,
  _LLRi,
  _LN,
  _LS,
  _M,
  _MR,
  _mr,
  _N,
  _NT,
  _nt,
  _OET,
  _OF,
  _PM,
  _Pr,
  _RA,
  _RAEE,
  _RN,
  _RT,
  _S,
  _SEC,
  _SECn,
  _SI,
  _SN,
  _St,
  _Sta,
  _Str,
  _T,
  _UL,
  _ULPM,
  _ULPMR,
  _ULPMRp,
  _ULR,
  _ULRp,
  n0,
} from "./schemas_0";
import { KinesisConfiguration } from "./schemas_2_Journal";
import { Tags } from "./schemas_3_Resource";

/* eslint no-var: 0 */

export var CreateLedgerRequest = struct(n0, _CLR, 0, [_N, _T, _PM, _DP, _KK], [0, [() => Tags, 0], 0, 2, 0]);
export var CreateLedgerResponse = struct(n0, _CLRr, 0, [_N, _A, _S, _CDT, _PM, _DP, _KKA], [0, 0, 0, 4, 0, 2, 0]);
export var DescribeJournalKinesisStreamRequest = struct(
  n0,
  _DJKSR,
  0,
  [_LN, _SI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeJournalKinesisStreamResponse = struct(
  n0,
  _DJKSRe,
  0,
  [_St],
  [() => JournalKinesisStreamDescription]
);
export var DescribeJournalS3ExportRequest = struct(
  n0,
  _DJSER,
  0,
  [_N, _EI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeJournalS3ExportResponse = struct(n0, _DJSERe, 0, [_ED], [() => JournalS3ExportDescription]);
export var DescribeLedgerRequest = struct(n0, _DLRe, 0, [_N], [[0, 1]]);
export var DescribeLedgerResponse = struct(
  n0,
  _DLRes,
  0,
  [_N, _A, _S, _CDT, _PM, _DP, _EDn],
  [0, 0, 0, 4, 0, 2, () => LedgerEncryptionDescription]
);
export var ExportJournalToS3Request = struct(
  n0,
  _EJTSR,
  0,
  [_N, _IST, _EET, _SEC, _RA, _OF],
  [[0, 1], 4, 4, () => S3ExportConfiguration, 0, 0]
);
export var ExportJournalToS3Response = struct(n0, _EJTSRx, 0, [_EI], [0]);
export var JournalKinesisStreamDescription = struct(
  n0,
  _JKSD,
  0,
  [_LN, _CT, _IST, _EET, _RA, _SI, _A, _Sta, _KC, _EC, _SN],
  [0, 4, 4, 4, 0, 0, 0, 0, () => KinesisConfiguration, 0, 0]
);
export var JournalS3ExportDescription = struct(
  n0,
  _JSED,
  0,
  [_LN, _EI, _ECT, _Sta, _IST, _EET, _SEC, _RA, _OF],
  [0, 0, 4, 0, 4, 4, () => S3ExportConfiguration, 0, 0]
);
export var LedgerEncryptionDescription = struct(n0, _LED, 0, [_KKA, _ES, _IKKDT], [0, 0, 4]);
export var LedgerSummary = struct(n0, _LS, 0, [_N, _S, _CDT], [0, 0, 4]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _RT],
  [0, 0],

  __LimitExceededException
);
export var ListJournalKinesisStreamsForLedgerRequest = struct(
  n0,
  _LJKSFLR,
  0,
  [_LN, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListJournalKinesisStreamsForLedgerResponse = struct(
  n0,
  _LJKSFLRi,
  0,
  [_Str, _NT],
  [() => JournalKinesisStreamDescriptionList, 0]
);
export var ListJournalS3ExportsForLedgerRequest = struct(
  n0,
  _LJSEFLR,
  0,
  [_N, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListJournalS3ExportsForLedgerResponse = struct(
  n0,
  _LJSEFLRi,
  0,
  [_JSE, _NT],
  [() => JournalS3ExportList, 0]
);
export var ListJournalS3ExportsRequest = struct(
  n0,
  _LJSER,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListJournalS3ExportsResponse = struct(n0, _LJSERi, 0, [_JSE, _NT], [() => JournalS3ExportList, 0]);
export var ListLedgersRequest = struct(
  n0,
  _LLR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListLedgersResponse = struct(n0, _LLRi, 0, [_L, _NT], [() => LedgerList, 0]);
export var ResourceAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _RT, _RN],
  [0, 0, 0],

  __ResourceAlreadyExistsException
);
export var S3EncryptionConfiguration = struct(n0, _SECn, 0, [_OET, _KKA], [0, 0]);
export var S3ExportConfiguration = struct(n0, _SEC, 0, [_Bu, _Pr, _ECn], [0, 0, () => S3EncryptionConfiguration]);
export var UpdateLedgerPermissionsModeRequest = struct(n0, _ULPMR, 0, [_N, _PM], [[0, 1], 0]);
export var UpdateLedgerPermissionsModeResponse = struct(n0, _ULPMRp, 0, [_N, _A, _PM], [0, 0, 0]);
export var UpdateLedgerRequest = struct(n0, _ULR, 0, [_N, _DP, _KK], [[0, 1], 2, 0]);
export var UpdateLedgerResponse = struct(
  n0,
  _ULRp,
  0,
  [_N, _A, _S, _CDT, _DP, _EDn],
  [0, 0, 0, 4, 2, () => LedgerEncryptionDescription]
);
export var Unit = "unit" as const;

export var JournalKinesisStreamDescriptionList = list(n0, _JKSDL, 0, () => JournalKinesisStreamDescription);
export var JournalS3ExportList = list(n0, _JSEL, 0, () => JournalS3ExportDescription);
export var LedgerList = list(n0, _LL, 0, () => LedgerSummary);
export var CreateLedger = op(
  n0,
  _CL,
  {
    [_h]: ["POST", "/ledgers", 200],
  },
  () => CreateLedgerRequest,
  () => CreateLedgerResponse
);
export var DescribeJournalKinesisStream = op(
  n0,
  _DJKS,
  {
    [_h]: ["GET", "/ledgers/{LedgerName}/journal-kinesis-streams/{StreamId}", 200],
  },
  () => DescribeJournalKinesisStreamRequest,
  () => DescribeJournalKinesisStreamResponse
);
export var DescribeJournalS3Export = op(
  n0,
  _DJSE,
  {
    [_h]: ["GET", "/ledgers/{Name}/journal-s3-exports/{ExportId}", 200],
  },
  () => DescribeJournalS3ExportRequest,
  () => DescribeJournalS3ExportResponse
);
export var DescribeLedger = op(
  n0,
  _DLe,
  {
    [_h]: ["GET", "/ledgers/{Name}", 200],
  },
  () => DescribeLedgerRequest,
  () => DescribeLedgerResponse
);
export var ExportJournalToS3 = op(
  n0,
  _EJTS,
  {
    [_h]: ["POST", "/ledgers/{Name}/journal-s3-exports", 200],
  },
  () => ExportJournalToS3Request,
  () => ExportJournalToS3Response
);
export var ListJournalKinesisStreamsForLedger = op(
  n0,
  _LJKSFL,
  {
    [_h]: ["GET", "/ledgers/{LedgerName}/journal-kinesis-streams", 200],
  },
  () => ListJournalKinesisStreamsForLedgerRequest,
  () => ListJournalKinesisStreamsForLedgerResponse
);
export var ListJournalS3Exports = op(
  n0,
  _LJSE,
  {
    [_h]: ["GET", "/journal-s3-exports", 200],
  },
  () => ListJournalS3ExportsRequest,
  () => ListJournalS3ExportsResponse
);
export var ListJournalS3ExportsForLedger = op(
  n0,
  _LJSEFL,
  {
    [_h]: ["GET", "/ledgers/{Name}/journal-s3-exports", 200],
  },
  () => ListJournalS3ExportsForLedgerRequest,
  () => ListJournalS3ExportsForLedgerResponse
);
export var ListLedgers = op(
  n0,
  _LLi,
  {
    [_h]: ["GET", "/ledgers", 200],
  },
  () => ListLedgersRequest,
  () => ListLedgersResponse
);
export var UpdateLedger = op(
  n0,
  _UL,
  {
    [_h]: ["PATCH", "/ledgers/{Name}", 200],
  },
  () => UpdateLedgerRequest,
  () => UpdateLedgerResponse
);
export var UpdateLedgerPermissionsMode = op(
  n0,
  _ULPM,
  {
    [_h]: ["PATCH", "/ledgers/{Name}/permissions-mode", 200],
  },
  () => UpdateLedgerPermissionsModeRequest,
  () => UpdateLedgerPermissionsModeResponse
);
