// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _aBI,
  _ar,
  _BGUAT,
  _BGUATR,
  _BGUATRa,
  _E,
  _e,
  _eC,
  _eM,
  _em,
  _h,
  _hQ,
  _IL,
  _in,
  _IS,
  _LI,
  _LIR,
  _LIRi,
  _mR,
  _nT,
  _rS,
  _SS,
  _st,
  _SUAT,
  _SUATR,
  _SUATRt,
  _tDN,
  _TE,
  _tE,
  _tI,
  _tIa,
  _tIL,
  _UARI,
  _UARL,
  _uARL,
  _UATI,
  _UATL,
  _uATL,
  _uFN,
  _uFNs,
  _uI,
  _uLN,
  _uS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Email = sim(n0, _E, 0, 8);
export var SensitiveString2048 = sim(n0, _SS, 0, 8);
export var BatchGetUserAccessTasksRequest = struct(n0, _BGUATR, 0, [_aBI, _tIL], [0, 64 | 0]);
export var BatchGetUserAccessTasksResponse = struct(n0, _BGUATRa, 0, [_uARL], [[() => UserAccessResultsList, 0]]);
export var IngestionSummary = struct(n0, _IS, 0, [_ar, _a, _tI, _st], [0, 0, 0, 0]);
export var ListIngestionsRequest = struct(
  n0,
  _LIR,
  0,
  [_aBI, _mR, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListIngestionsResponse = struct(n0, _LIRi, 0, [_in, _nT], [() => IngestionList, 0]);
export var StartUserAccessTasksRequest = struct(n0, _SUATR, 0, [_aBI, _em], [0, [() => Email, 0]]);
export var StartUserAccessTasksResponse = struct(n0, _SUATRt, 0, [_uATL], [() => UserAccessTasksList]);
export var TaskError = struct(n0, _TE, 0, [_eC, _eM], [0, 0]);
export var UserAccessResultItem = struct(
  n0,
  _UARI,
  0,
  [_a, _tI, _tDN, _tIa, _rS, _em, _uI, _uFN, _uFNs, _uLN, _uS, _tE],
  [
    0,
    0,
    0,
    0,
    0,
    [() => Email, 0],
    [() => SensitiveString2048, 0],
    [() => SensitiveString2048, 0],
    [() => SensitiveString2048, 0],
    [() => SensitiveString2048, 0],
    0,
    () => TaskError,
  ]
);
export var UserAccessTaskItem = struct(n0, _UATI, 0, [_a, _tI, _tIa, _e], [0, 0, 0, () => TaskError]);
export var IngestionList = list(n0, _IL, 0, () => IngestionSummary);
export var TaskIdList = 64 | 0;

export var UserAccessResultsList = list(n0, _UARL, 0, [() => UserAccessResultItem, 0]);
export var UserAccessTasksList = list(n0, _UATL, 0, () => UserAccessTaskItem);
export var BatchGetUserAccessTasks = op(
  n0,
  _BGUAT,
  {
    [_h]: ["POST", "/useraccess/batchget", 200],
  },
  () => BatchGetUserAccessTasksRequest,
  () => BatchGetUserAccessTasksResponse
);
export var ListIngestions = op(
  n0,
  _LI,
  {
    [_h]: ["GET", "/appbundles/{appBundleIdentifier}/ingestions", 200],
  },
  () => ListIngestionsRequest,
  () => ListIngestionsResponse
);
export var StartUserAccessTasks = op(
  n0,
  _SUAT,
  {
    [_h]: ["POST", "/useraccess/start", 201],
  },
  () => StartUserAccessTasksRequest,
  () => StartUserAccessTasksResponse
);
