// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import {
  _aAu,
  _aP,
  _b,
  _bM,
  _CAP,
  _cAP,
  _dHP,
  _DPe,
  _dPe,
  _eDPA,
  _fil,
  _g,
  _h,
  _iPo,
  _L,
  _la,
  _lo,
  _loc,
  _loca,
  _nf,
  _nPA,
  _pa,
  _po,
  _R,
  _rad,
  _SRC,
  _SRT,
  _t,
  _tPA,
  _tSA,
  _vCA,
  _wi,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomerArtifactPaths = struct(n0, _CAP, 0, [_iPo, _aP, _dHP], [64 | 0, 64 | 0, 64 | 0]);
export var DeviceProxy = struct(n0, _DPe, 0, [_h, _po], [0, 1]);
export var Location = struct(n0, _L, 0, [_la, _lo], [1, 1]);
export var Radios = struct(n0, _R, 0, [_wi, _b, _nf, _g], [2, 2, 2, 2]);
export var ScheduleRunConfiguration = struct(
  n0,
  _SRC,
  0,
  [_eDPA, _nPA, _loc, _loca, _vCA, _dPe, _cAP, _rad, _aAu, _bM],
  [0, 0, 0, () => Location, 64 | 0, () => DeviceProxy, () => CustomerArtifactPaths, () => Radios, 64 | 0, 0]
);
export var ScheduleRunTest = struct(n0, _SRT, 0, [_t, _tPA, _tSA, _fil, _pa], [0, 0, 0, 0, 128 | 0]);
export var AmazonResourceNames = 64 | 0;

export var AndroidPaths = 64 | 0;

export var DeviceHostPaths = 64 | 0;

export var IosPaths = 64 | 0;

export var TestParameters = 128 | 0;
