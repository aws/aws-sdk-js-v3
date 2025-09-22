// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidRequestException as __InvalidRequestException } from "../models/index";
import {
  _BLSI,
  _c,
  _CAre,
  _De,
  _DQSBLe,
  _DQSBLRe,
  _DQSBLRes,
  _e,
  _EM,
  _FSB,
  _GSe,
  _GSR,
  _GSRe,
  _hE,
  _I,
  _ICt,
  _II,
  _In,
  _IRE,
  _LQSBL,
  _LQSBLR,
  _LQSBLRi,
  _M,
  _MR,
  _MT,
  _N,
  _NTe,
  _QSBLS,
  _QSBLSI,
  _RA,
  _SD,
  _SDH,
  _SDR,
  _SSP,
  _SSTF,
  _St,
  _UA,
  n0,
  S3Path,
} from "./schemas_0";
import { TimeRange } from "./schemas_23_";

/* eslint no-var: 0 */

export var DescribeQuerySuggestionsBlockListRequest = struct(n0, _DQSBLRe, 0, [_II, _I], [0, 0]);
export var DescribeQuerySuggestionsBlockListResponse = struct(
  n0,
  _DQSBLRes,
  0,
  [_II, _I, _N, _De, _St, _EM, _CAre, _UA, _SSP, _ICt, _FSB, _RA],
  [0, 0, 0, 0, 0, 0, 4, 4, () => S3Path, 1, 1, 0]
);
export var GetSnapshotsRequest = struct(n0, _GSR, 0, [_II, _In, _MT, _NTe, _MR], [0, 0, 0, 0, 1]);
export var GetSnapshotsResponse = struct(
  n0,
  _GSRe,
  0,
  [_SSTF, _SDH, _SD, _NTe],
  [() => TimeRange, 64 | 0, list(n0, _SDR, 0, 64 | 0), 0]
);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidRequestException
);
export var ListQuerySuggestionsBlockListsRequest = struct(n0, _LQSBLR, 0, [_II, _NTe, _MR], [0, 0, 1]);
export var ListQuerySuggestionsBlockListsResponse = struct(
  n0,
  _LQSBLRi,
  0,
  [_BLSI, _NTe],
  [() => QuerySuggestionsBlockListSummaryItems, 0]
);
export var QuerySuggestionsBlockListSummary = struct(
  n0,
  _QSBLS,
  0,
  [_I, _N, _St, _CAre, _UA, _ICt],
  [0, 0, 0, 4, 4, 1]
);
export var QuerySuggestionsBlockListSummaryItems = list(n0, _QSBLSI, 0, () => QuerySuggestionsBlockListSummary);
export var SnapshotsDataHeaderFields = 64 | 0;

export var SnapshotsDataRecord = 64 | 0;

export var SnapshotsDataRecords = list(n0, _SDR, 0, 64 | 0);
export var DescribeQuerySuggestionsBlockList = op(
  n0,
  _DQSBLe,
  0,
  () => DescribeQuerySuggestionsBlockListRequest,
  () => DescribeQuerySuggestionsBlockListResponse
);
export var GetSnapshots = op(
  n0,
  _GSe,
  0,
  () => GetSnapshotsRequest,
  () => GetSnapshotsResponse
);
export var ListQuerySuggestionsBlockLists = op(
  n0,
  _LQSBL,
  0,
  () => ListQuerySuggestionsBlockListsRequest,
  () => ListQuerySuggestionsBlockListsResponse
);
