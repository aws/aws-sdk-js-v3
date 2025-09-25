// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cD,
  _ch,
  _CSTV,
  _CSTVR,
  _CSTVRr,
  _cV,
  _d,
  _EV,
  _eV,
  _EVn,
  _GST,
  _GSTR,
  _GSTRe,
  _h,
  _lUD,
  _n,
  _pa,
  _PST,
  _PSTR,
  _PSTRu,
  _pSTS,
  _rCe,
  _STC,
  _sTC,
  _STCl,
  _STRC,
  _sy,
  _v,
  _va,
  _vSS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSlotTypeVersionRequest = struct(n0, _CSTVR, 0, [_n, _ch], [[0, 1], 0]);
export var CreateSlotTypeVersionResponse = struct(
  n0,
  _CSTVRr,
  0,
  [_n, _d, _eV, _lUD, _cD, _v, _ch, _vSS, _pSTS, _sTC],
  [0, 0, () => EnumerationValues, 4, 4, 0, 0, 0, 0, () => SlotTypeConfigurations]
);
export var EnumerationValue = struct(n0, _EV, 0, [_va, _sy], [0, 64 | 0]);
export var GetSlotTypeRequest = struct(
  n0,
  _GSTR,
  0,
  [_n, _v],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetSlotTypeResponse = struct(
  n0,
  _GSTRe,
  0,
  [_n, _d, _eV, _lUD, _cD, _v, _ch, _vSS, _pSTS, _sTC],
  [0, 0, () => EnumerationValues, 4, 4, 0, 0, 0, 0, () => SlotTypeConfigurations]
);
export var PutSlotTypeRequest = struct(
  n0,
  _PSTR,
  0,
  [_n, _d, _eV, _ch, _vSS, _cV, _pSTS, _sTC],
  [[0, 1], 0, () => EnumerationValues, 0, 0, 2, 0, () => SlotTypeConfigurations]
);
export var PutSlotTypeResponse = struct(
  n0,
  _PSTRu,
  0,
  [_n, _d, _eV, _lUD, _cD, _v, _ch, _vSS, _cV, _pSTS, _sTC],
  [0, 0, () => EnumerationValues, 4, 4, 0, 0, 0, 2, 0, () => SlotTypeConfigurations]
);
export var SlotTypeConfiguration = struct(n0, _STC, 0, [_rCe], [() => SlotTypeRegexConfiguration]);
export var SlotTypeRegexConfiguration = struct(n0, _STRC, 0, [_pa], [0]);
export var EnumerationValues = list(n0, _EVn, 0, () => EnumerationValue);
export var SlotTypeConfigurations = list(n0, _STCl, 0, () => SlotTypeConfiguration);
export var SynonymList = 64 | 0;

export var CreateSlotTypeVersion = op(
  n0,
  _CSTV,
  {
    [_h]: ["POST", "/slottypes/{name}/versions", 201],
  },
  () => CreateSlotTypeVersionRequest,
  () => CreateSlotTypeVersionResponse
);
export var GetSlotType = op(
  n0,
  _GST,
  {
    [_h]: ["GET", "/slottypes/{name}/versions/{version}", 200],
  },
  () => GetSlotTypeRequest,
  () => GetSlotTypeResponse
);
export var PutSlotType = op(
  n0,
  _PST,
  {
    [_h]: ["PUT", "/slottypes/{name}/versions/$LATEST", 200],
  },
  () => PutSlotTypeRequest,
  () => PutSlotTypeResponse
);
