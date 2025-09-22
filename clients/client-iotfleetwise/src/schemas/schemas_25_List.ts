// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cT,
  _d,
  _hQ,
  _ht,
  _i,
  _lMT,
  _lRS,
  _LST,
  _LSTR,
  _LSTRi,
  _mR,
  _n,
  _nT,
  _sCA,
  _STS,
  _STSt,
  _su,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListStateTemplatesRequest = struct(
  n0,
  _LSTR,
  0,
  [_nT, _mR, _lRS],
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
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _lRS,
      },
    ],
  ]
);
export var ListStateTemplatesResponse = struct(n0, _LSTRi, 0, [_su, _nT], [() => StateTemplateSummaries, 0]);
export var StateTemplateSummary = struct(n0, _STS, 0, [_n, _a, _sCA, _d, _cT, _lMT, _i], [0, 0, 0, 0, 4, 4, 0]);
export var StateTemplateSummaries = list(n0, _STSt, 0, () => StateTemplateSummary);
export var ListStateTemplates = op(
  n0,
  _LST,
  {
    [_ht]: ["GET", "/state-templates", 200],
  },
  () => ListStateTemplatesRequest,
  () => ListStateTemplatesResponse
);
