// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cAr,
  _en,
  _h,
  _hQ,
  _LR,
  _LS,
  _lSA,
  _LSR,
  _nT,
  _pS,
  _sAu,
  _sI,
  _SS,
  _SSu,
  _su,
  _uA,
  _xS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListRequest = struct(
  n0,
  _LR,
  0,
  [_nT, _pS],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _pS,
      },
    ],
  ]
);
export var ListSubjectsResponse = struct(n0, _LSR, 0, [_su, _nT], [() => SubjectSummaries, 0]);
export var SubjectSummary = struct(n0, _SS, 0, [_sAu, _sI, _en, _xS, _lSA, _cAr, _uA], [0, 0, 2, 0, 5, 5, 5]);
export var SubjectSummaries = list(n0, _SSu, 0, () => SubjectSummary);
export var ListSubjects = op(
  n0,
  _LS,
  {
    [_h]: ["GET", "/subjects", 200],
  },
  () => ListRequest,
  () => ListSubjectsResponse
);
