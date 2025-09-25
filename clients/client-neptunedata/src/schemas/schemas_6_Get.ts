// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _d,
  _dEV,
  _dQE,
  _ePP,
  _er,
  _f,
  _g,
  _GES,
  _GESO,
  _GLJS,
  _GLJSI,
  _GLJSO,
  _h,
  _hQ,
  _lI,
  _lM,
  _op,
  _p,
  _pag,
  _QLV,
  _rBTC,
  _rBTEST,
  _ro,
  _s,
  _set,
  _sp,
  _sT,
  _ve,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_1_Get";

/* eslint no-var: 0 */

export var GetEngineStatusOutput = struct(
  n0,
  _GESO,
  0,
  [_s, _sT, _dEV, _ro, _dQE, _g, _sp, _op, _lM, _rBTC, _rBTEST, _f, _set],
  [
    0,
    0,
    0,
    0,
    0,
    () => QueryLanguageVersion,
    () => QueryLanguageVersion,
    () => QueryLanguageVersion,
    128 | 0,
    1,
    0,
    128 | 15,
    128 | 0,
  ]
);
export var GetLoaderJobStatusInput = struct(
  n0,
  _GLJSI,
  0,
  [_lI, _d, _er, _pag, _ePP],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _d,
      },
    ],
    [
      2,
      {
        [_hQ]: _er,
      },
    ],
    [
      1,
      {
        [_hQ]: _pag,
      },
    ],
    [
      1,
      {
        [_hQ]: _ePP,
      },
    ],
  ]
);
export var GetLoaderJobStatusOutput = struct(n0, _GLJSO, 0, [_s, _p], [0, 15]);
export var QueryLanguageVersion = struct(n0, _QLV, 0, [_ve], [0]);
export var DocumentValuedMap = 128 | 15;

export var GetEngineStatus = op(
  n0,
  _GES,
  {
    [_h]: ["GET", "/status", 200],
  },
  () => Unit,
  () => GetEngineStatusOutput
);
export var GetLoaderJobStatus = op(
  n0,
  _GLJS,
  {
    [_h]: ["GET", "/loader/{loadId}", 200],
  },
  () => GetLoaderJobStatusInput,
  () => GetLoaderJobStatusOutput
);
