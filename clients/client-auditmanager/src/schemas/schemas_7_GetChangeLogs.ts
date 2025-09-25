// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ac,
  _aI,
  _cA,
  _cB,
  _cI,
  _CL,
  _cL,
  _CLh,
  _cSI,
  _GCL,
  _GCLR,
  _GCLRe,
  _h,
  _hQ,
  _mR,
  _nT,
  _oN,
  _oT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChangeLog = struct(n0, _CL, 0, [_oT, _oN, _ac, _cA, _cB], [0, 0, 0, 4, 0]);
export var GetChangeLogsRequest = struct(
  n0,
  _GCLR,
  0,
  [_aI, _cSI, _cI, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cSI,
      },
    ],
    [
      0,
      {
        [_hQ]: _cI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var GetChangeLogsResponse = struct(n0, _GCLRe, 0, [_cL, _nT], [() => ChangeLogs, 0]);
export var ChangeLogs = list(n0, _CLh, 0, () => ChangeLog);
export var GetChangeLogs = op(
  n0,
  _GCL,
  {
    [_h]: ["GET", "/assessments/{assessmentId}/changelogs", 200],
  },
  () => GetChangeLogsRequest,
  () => GetChangeLogsResponse
);
