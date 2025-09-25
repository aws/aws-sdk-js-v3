// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _AVF,
  _AVFR,
  _AVFRs,
  _cT,
  _d,
  _DF,
  _DFR,
  _DFRe,
  _DVF,
  _DVFR,
  _DVFRi,
  _fI,
  _fl,
  _FS,
  _fS,
  _GF,
  _GFR,
  _GFRe,
  _hQ,
  _ht,
  _i,
  _LF,
  _LFFV,
  _LFFVR,
  _LFFVRi,
  _LFR,
  _LFRi,
  _lMT,
  _lRS,
  _LVIF,
  _LVIFR,
  _LVIFRi,
  _mR,
  _nT,
  _sCA,
  _UF,
  _UFR,
  _UFRp,
  _v,
  _vN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateVehicleFleetRequest = struct(n0, _AVFR, 0, [_vN, _fI], [[0, 1], 0]);
export var AssociateVehicleFleetResponse = struct(n0, _AVFRs, 0, [], []);
export var DeleteFleetRequest = struct(n0, _DFR, 0, [_fI], [[0, 1]]);
export var DeleteFleetResponse = struct(n0, _DFRe, 0, [_i, _a], [0, 0]);
export var DisassociateVehicleFleetRequest = struct(n0, _DVFR, 0, [_vN, _fI], [[0, 1], 0]);
export var DisassociateVehicleFleetResponse = struct(n0, _DVFRi, 0, [], []);
export var FleetSummary = struct(n0, _FS, 0, [_i, _a, _d, _sCA, _cT, _lMT], [0, 0, 0, 0, 4, 4]);
export var GetFleetRequest = struct(n0, _GFR, 0, [_fI], [[0, 1]]);
export var GetFleetResponse = struct(n0, _GFRe, 0, [_i, _a, _d, _sCA, _cT, _lMT], [0, 0, 0, 0, 4, 4]);
export var ListFleetsForVehicleRequest = struct(
  n0,
  _LFFVR,
  0,
  [_vN, _nT, _mR],
  [
    [0, 1],
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
  ]
);
export var ListFleetsForVehicleResponse = struct(n0, _LFFVRi, 0, [_fl, _nT], [64 | 0, 0]);
export var ListFleetsRequest = struct(
  n0,
  _LFR,
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
export var ListFleetsResponse = struct(n0, _LFRi, 0, [_fS, _nT], [() => fleetSummaries, 0]);
export var ListVehiclesInFleetRequest = struct(
  n0,
  _LVIFR,
  0,
  [_fI, _nT, _mR],
  [
    [0, 1],
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
  ]
);
export var ListVehiclesInFleetResponse = struct(n0, _LVIFRi, 0, [_v, _nT], [64 | 0, 0]);
export var UpdateFleetRequest = struct(n0, _UFR, 0, [_fI, _d], [[0, 1], 0]);
export var UpdateFleetResponse = struct(n0, _UFRp, 0, [_i, _a], [0, 0]);
export var fleets = 64 | 0;

export var fleetSummaries = list(n0, _fS, 0, () => FleetSummary);
export var vehicles = 64 | 0;

export var AssociateVehicleFleet = op(
  n0,
  _AVF,
  {
    [_ht]: ["PUT", "/vehicles/{vehicleName}/associate", 204],
  },
  () => AssociateVehicleFleetRequest,
  () => AssociateVehicleFleetResponse
);
export var DeleteFleet = op(
  n0,
  _DF,
  {
    [_ht]: ["DELETE", "/fleets/{fleetId}", 200],
  },
  () => DeleteFleetRequest,
  () => DeleteFleetResponse
);
export var DisassociateVehicleFleet = op(
  n0,
  _DVF,
  {
    [_ht]: ["PUT", "/vehicles/{vehicleName}/disassociate", 204],
  },
  () => DisassociateVehicleFleetRequest,
  () => DisassociateVehicleFleetResponse
);
export var GetFleet = op(
  n0,
  _GF,
  {
    [_ht]: ["GET", "/fleets/{fleetId}", 200],
  },
  () => GetFleetRequest,
  () => GetFleetResponse
);
export var ListFleets = op(
  n0,
  _LF,
  {
    [_ht]: ["GET", "/fleets", 200],
  },
  () => ListFleetsRequest,
  () => ListFleetsResponse
);
export var ListFleetsForVehicle = op(
  n0,
  _LFFV,
  {
    [_ht]: ["GET", "/vehicles/{vehicleName}/fleets", 200],
  },
  () => ListFleetsForVehicleRequest,
  () => ListFleetsForVehicleResponse
);
export var ListVehiclesInFleet = op(
  n0,
  _LVIF,
  {
    [_ht]: ["GET", "/fleets/{fleetId}/vehicles", 200],
  },
  () => ListVehiclesInFleetRequest,
  () => ListVehiclesInFleetResponse
);
export var UpdateFleet = op(
  n0,
  _UF,
  {
    [_ht]: ["PATCH", "/fleets/{fleetId}", 204],
  },
  () => UpdateFleetRequest,
  () => UpdateFleetResponse
);
