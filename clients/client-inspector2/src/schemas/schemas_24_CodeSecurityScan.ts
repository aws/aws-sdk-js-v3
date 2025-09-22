// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aI,
  _cAr,
  _CSRo,
  _cT,
  _GCSS,
  _GCSSR,
  _GCSSRe,
  _ht,
  _lCI,
  _pI,
  _r,
  _s,
  _SCSS,
  _SCSSR,
  _SCSSRt,
  _sIc,
  _sR,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetCodeSecurityScanRequest = struct(n0, _GCSSR, 0, [_r, _sIc], [() => CodeSecurityResource, 0]);
export var GetCodeSecurityScanResponse = struct(
  n0,
  _GCSSRe,
  0,
  [_sIc, _r, _aI, _s, _sR, _cAr, _uA, _lCI],
  [0, () => CodeSecurityResource, 0, 0, 0, 4, 4, 0]
);
export var StartCodeSecurityScanRequest = struct(n0, _SCSSR, 0, [_cT, _r], [[0, 4], () => CodeSecurityResource]);
export var StartCodeSecurityScanResponse = struct(n0, _SCSSRt, 0, [_sIc, _s], [0, 0]);
export var CodeSecurityResource = uni(n0, _CSRo, 0, [_pI], [0]);
export var GetCodeSecurityScan = op(
  n0,
  _GCSS,
  {
    [_ht]: ["POST", "/codesecurity/scan/get", 200],
  },
  () => GetCodeSecurityScanRequest,
  () => GetCodeSecurityScanResponse
);
export var StartCodeSecurityScan = op(
  n0,
  _SCSS,
  {
    [_ht]: ["POST", "/codesecurity/scan/start", 200],
  },
  () => StartCodeSecurityScanRequest,
  () => StartCodeSecurityScanResponse
);
