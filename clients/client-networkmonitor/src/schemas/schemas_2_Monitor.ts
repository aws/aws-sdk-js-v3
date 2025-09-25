// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _aP,
  _c,
  _CE,
  _CM,
  _CMI,
  _CMO,
  _CMPI,
  _CMPIL,
  _cT,
  _d,
  _dP,
  _e,
  _h,
  _hE,
  _hQ,
  _LM,
  _LMI,
  _LMO,
  _m,
  _mA,
  _ML,
  _mN,
  _mo,
  _mR,
  _MS,
  _nT,
  _p,
  _pr,
  _pS,
  _pT,
  _s,
  _sA,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateMonitorInput = struct(
  n0,
  _CMI,
  0,
  [_mN, _p, _aP, _cT, _t],
  [0, () => CreateMonitorProbeInputList, 1, [0, 4], 128 | 0]
);
export var CreateMonitorOutput = struct(n0, _CMO, 0, [_mA, _mN, _s, _aP, _t], [0, 0, 0, 1, 128 | 0]);
export var CreateMonitorProbeInput = struct(n0, _CMPI, 0, [_sA, _d, _dP, _pr, _pS, _pT], [0, 0, 1, 0, 1, 128 | 0]);
export var ListMonitorsInput = struct(
  n0,
  _LMI,
  0,
  [_nT, _mR, _s],
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
        [_hQ]: _s,
      },
    ],
  ]
);
export var ListMonitorsOutput = struct(n0, _LMO, 0, [_mo, _nT], [() => MonitorList, 0]);
export var MonitorSummary = struct(n0, _MS, 0, [_mA, _mN, _s, _aP, _t], [0, 0, 0, 1, 128 | 0]);
export var Unit = "unit" as const;

export var CreateMonitorProbeInputList = list(n0, _CMPIL, 0, () => CreateMonitorProbeInput);
export var MonitorList = list(n0, _ML, 0, () => MonitorSummary);
export var TagMap = 128 | 0;

export var CreateMonitor = op(
  n0,
  _CM,
  {
    [_h]: ["POST", "/monitors", 200],
  },
  () => CreateMonitorInput,
  () => CreateMonitorOutput
);
export var ListMonitors = op(
  n0,
  _LM,
  {
    [_h]: ["GET", "/monitors", 200],
  },
  () => ListMonitorsInput,
  () => ListMonitorsOutput
);
