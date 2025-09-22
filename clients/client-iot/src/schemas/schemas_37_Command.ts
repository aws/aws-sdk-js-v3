// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _B_,
  _BIN,
  _cAo,
  _cAr,
  _CC,
  _CCR,
  _CCRr,
  _cIo,
  _com,
  _con,
  _CP,
  _CPL,
  _cPNo,
  _CPo,
  _CPV,
  _CSL,
  _CSo,
  _cTo,
  _D,
  _d,
  _dep,
  _dN,
  _dV,
  _GCe,
  _GCRet,
  _GCReto,
  _h,
  _hQ,
  _I,
  _L,
  _LCi,
  _LCRis,
  _LCRist,
  _lUA,
  _mP,
  _mR,
  _n,
  _na,
  _nT,
  _pa,
  _pD,
  _rA,
  _S,
  _sO,
  _tag,
  _UL,
  _va,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CommandParameter = struct(
  n0,
  _CP,
  0,
  [_n, _va, _dV, _d],
  [0, () => CommandParameterValue, () => CommandParameterValue, 0]
);
export var CommandParameterValue = struct(n0, _CPV, 0, [_S, _B_, _I, _L, _D, _BIN, _UL], [0, 2, 1, 1, 1, 21, 0]);
export var CommandPayload = struct(n0, _CPo, 0, [_con, _cTo], [21, 0]);
export var CommandSummary = struct(n0, _CSo, 0, [_cAo, _cIo, _dN, _dep, _cAr, _lUA, _pD], [0, 0, 0, 2, 4, 4, 2]);
export var CreateCommandRequest = struct(
  n0,
  _CCR,
  0,
  [_cIo, _na, _dN, _d, _pa, _mP, _rA, _tag],
  [[0, 1], 0, 0, 0, () => CommandPayload, () => CommandParameterList, 0, () => TagList]
);
export var CreateCommandResponse = struct(n0, _CCRr, 0, [_cIo, _cAo], [0, 0]);
export var GetCommandRequest = struct(n0, _GCRet, 0, [_cIo], [[0, 1]]);
export var GetCommandResponse = struct(
  n0,
  _GCReto,
  0,
  [_cIo, _cAo, _na, _dN, _d, _mP, _pa, _rA, _cAr, _lUA, _dep, _pD],
  [0, 0, 0, 0, 0, () => CommandParameterList, () => CommandPayload, 0, 4, 4, 2, 2]
);
export var ListCommandsRequest = struct(
  n0,
  _LCRis,
  0,
  [_mR, _nT, _na, _cPNo, _sO],
  [
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
    [
      0,
      {
        [_hQ]: _na,
      },
    ],
    [
      0,
      {
        [_hQ]: _cPNo,
      },
    ],
    [
      0,
      {
        [_hQ]: _sO,
      },
    ],
  ]
);
export var ListCommandsResponse = struct(n0, _LCRist, 0, [_com, _nT], [() => CommandSummaryList, 0]);
export var CommandParameterList = list(n0, _CPL, 0, () => CommandParameter);
export var CommandSummaryList = list(n0, _CSL, 0, () => CommandSummary);
export var CreateCommand = op(
  n0,
  _CC,
  {
    [_h]: ["PUT", "/commands/{commandId}", 200],
  },
  () => CreateCommandRequest,
  () => CreateCommandResponse
);
export var GetCommand = op(
  n0,
  _GCe,
  {
    [_h]: ["GET", "/commands/{commandId}", 200],
  },
  () => GetCommandRequest,
  () => GetCommandResponse
);
export var ListCommands = op(
  n0,
  _LCi,
  {
    [_h]: ["GET", "/commands", 200],
  },
  () => ListCommandsRequest,
  () => ListCommandsResponse
);
