// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aN,
  _at,
  _aVt,
  _cT,
  _dMA,
  _hQ,
  _ht,
  _lMT,
  _lRS,
  _LV,
  _LVR,
  _LVRi,
  _mMA,
  _mR,
  _nT,
  _vN,
  _vS,
  _VSe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListVehiclesRequest = struct(
  n0,
  _LVR,
  0,
  [_mMA, _aN, _aVt, _nT, _mR, _lRS],
  [
    [
      0,
      {
        [_hQ]: _mMA,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _aN,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _aVt,
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
    [
      0,
      {
        [_hQ]: _lRS,
      },
    ],
  ]
);
export var ListVehiclesResponse = struct(n0, _LVRi, 0, [_vS, _nT], [() => vehicleSummaries, 0]);
export var VehicleSummary = struct(n0, _VSe, 0, [_vN, _a, _mMA, _dMA, _cT, _lMT, _at], [0, 0, 0, 0, 4, 4, 128 | 0]);
export var attributeNamesList = 64 | 0;

export var attributeValuesList = 64 | 0;

export var vehicleSummaries = list(n0, _vS, 0, () => VehicleSummary);
export var attributesMap = 128 | 0;

export var ListVehicles = op(
  n0,
  _LV,
  {
    [_ht]: ["GET", "/vehicles", 200],
  },
  () => ListVehiclesRequest,
  () => ListVehiclesResponse
);
