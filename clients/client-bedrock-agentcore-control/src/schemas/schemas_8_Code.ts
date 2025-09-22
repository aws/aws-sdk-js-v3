// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _bA,
  _bI,
  _BS,
  _bS,
  _BSr,
  _cA,
  _cIA,
  _cII,
  _CIS,
  _cIS,
  _CISo,
  _d,
  _h,
  _hQ,
  _LB,
  _LBR,
  _LBRi,
  _LCI,
  _LCIR,
  _LCIRi,
  _lUA,
  _mR,
  _n,
  _nT,
  _s,
  _ty,
  Description,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BrowserSummary = struct(
  n0,
  _BS,
  0,
  [_bI, _bA, _n, _d, _s, _cA, _lUA],
  [0, 0, 0, [() => Description, 0], 0, 5, 5]
);
export var CodeInterpreterSummary = struct(
  n0,
  _CIS,
  0,
  [_cII, _cIA, _n, _d, _s, _cA, _lUA],
  [0, 0, 0, [() => Description, 0], 0, 5, 5]
);
export var ListBrowsersRequest = struct(
  n0,
  _LBR,
  0,
  [_mR, _nT, _ty],
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
        [_hQ]: _ty,
      },
    ],
  ]
);
export var ListBrowsersResponse = struct(n0, _LBRi, 0, [_bS, _nT], [[() => BrowserSummaries, 0], 0]);
export var ListCodeInterpretersRequest = struct(
  n0,
  _LCIR,
  0,
  [_mR, _nT, _ty],
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
        [_hQ]: _ty,
      },
    ],
  ]
);
export var ListCodeInterpretersResponse = struct(n0, _LCIRi, 0, [_cIS, _nT], [[() => CodeInterpreterSummaries, 0], 0]);
export var BrowserSummaries = list(n0, _BSr, 0, [() => BrowserSummary, 0]);
export var CodeInterpreterSummaries = list(n0, _CISo, 0, [() => CodeInterpreterSummary, 0]);
export var ListBrowsers = op(
  n0,
  _LB,
  {
    [_h]: ["POST", "/browsers", 200],
  },
  () => ListBrowsersRequest,
  () => ListBrowsersResponse
);
export var ListCodeInterpreters = op(
  n0,
  _LCI,
  {
    [_h]: ["POST", "/code-interpreters", 200],
  },
  () => ListCodeInterpretersRequest,
  () => ListCodeInterpretersResponse
);
