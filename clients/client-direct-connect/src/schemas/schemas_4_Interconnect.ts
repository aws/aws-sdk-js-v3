// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ACOI,
  _ACOIR,
  _aD,
  _aDV,
  _aLDI,
  _b,
  _cN,
  _DI,
  _DIL,
  _DILR,
  _DILRe,
  _DIR,
  _DIRe,
  _eM,
  _hLR,
  _I,
  _iI,
  _iN,
  _iS,
  _jFC,
  _l,
  _lCT,
  _lI,
  _lIT,
  _lo,
  _mSC,
  _mSK,
  _oA,
  _pES,
  _pNr,
  _r,
  _t,
  _v,
  Connection,
  MacSecKeyList,
  n0,
  TagList,
} from "./schemas_0";
import { Loa } from "./schemas_11_Describe";

/* eslint no-var: 0 */

export var AllocateConnectionOnInterconnectRequest = struct(n0, _ACOIR, 0, [_b, _cN, _oA, _iI, _v], [0, 0, 0, 0, 1]);
export var DeleteInterconnectRequest = struct(n0, _DIR, 0, [_iI], [0]);
export var DeleteInterconnectResponse = struct(n0, _DIRe, 0, [_iS], [0]);
export var DescribeInterconnectLoaRequest = struct(n0, _DILR, 0, [_iI, _pNr, _lCT], [0, 0, 0]);
export var DescribeInterconnectLoaResponse = struct(n0, _DILRe, 0, [_lo], [() => Loa]);
export var Interconnect = struct(
  n0,
  _I,
  0,
  [_iI, _iN, _iS, _r, _l, _b, _lIT, _lI, _aD, _jFC, _aDV, _aLDI, _hLR, _t, _pNr, _mSC, _pES, _eM, _mSK],
  [0, 0, 0, 0, 0, 0, 4, 0, 0, 2, 0, 0, 0, () => TagList, 0, 2, 0, 0, () => MacSecKeyList]
);
export var AllocateConnectionOnInterconnect = op(
  n0,
  _ACOI,
  0,
  () => AllocateConnectionOnInterconnectRequest,
  () => Connection
);
export var DeleteInterconnect = op(
  n0,
  _DI,
  0,
  () => DeleteInterconnectRequest,
  () => DeleteInterconnectResponse
);
export var DescribeInterconnectLoa = op(
  n0,
  _DIL,
  0,
  () => DescribeInterconnectLoaRequest,
  () => DescribeInterconnectLoaResponse
);
