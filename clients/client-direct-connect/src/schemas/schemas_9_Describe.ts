// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aD,
  _aDV,
  _aHC,
  _aLDI,
  _cB,
  _CL,
  _co,
  _DL,
  _DLR,
  _eM,
  _hLR,
  _jFC,
  _L,
  _l,
  _lI,
  _lN,
  _lS,
  _mL,
  _mSC,
  _mSK,
  _nOC,
  _oA,
  _pNr,
  _r,
  _t,
  _UL,
  _ULR,
  Connection,
  MacSecKeyList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLagRequest = struct(n0, _DLR, 0, [_lI], [0]);
export var Lag = struct(
  n0,
  _L,
  0,
  [_cB, _nOC, _lI, _oA, _lN, _lS, _l, _r, _mL, _aD, _aDV, _aLDI, _co, _aHC, _jFC, _hLR, _t, _pNr, _mSC, _eM, _mSK],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, () => ConnectionList, 2, 2, 0, () => TagList, 0, 2, 0, () => MacSecKeyList]
);
export var UpdateLagRequest = struct(n0, _ULR, 0, [_lI, _lN, _mL, _eM], [0, 0, 1, 0]);
export var ConnectionList = list(n0, _CL, 0, () => Connection);
export var DeleteLag = op(
  n0,
  _DL,
  0,
  () => DeleteLagRequest,
  () => Lag
);
export var UpdateLag = op(
  n0,
  _UL,
  0,
  () => UpdateLagRequest,
  () => Lag
);
