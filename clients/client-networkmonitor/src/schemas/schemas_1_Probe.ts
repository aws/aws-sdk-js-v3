// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import {
  _aF,
  _aP,
  _c,
  _cA,
  _CP,
  _CPI,
  _CPO,
  _cT,
  _d,
  _DM,
  _DMI,
  _DMO,
  _DP,
  _dP,
  _DPI,
  _DPO,
  _e,
  _GM,
  _GMI,
  _GMO,
  _GP,
  _GPI,
  _GPO,
  _h,
  _hE,
  _hQ,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _m,
  _mA,
  _mAo,
  _mN,
  _P,
  _p,
  _pA,
  _PI,
  _pI,
  _PL,
  _pr,
  _pro,
  _pS,
  _rA,
  _RNFE,
  _s,
  _sA,
  _t,
  _tK,
  _TR,
  _TRI,
  _TRO,
  _UM,
  _UMI,
  _UMO,
  _UP,
  _UPI,
  _UPO,
  _UR,
  _URI,
  _URO,
  _vI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateProbeInput = struct(n0, _CPI, 0, [_mN, _pro, _cT, _t], [[0, 1], () => ProbeInput, [0, 4], 128 | 0]);
export var CreateProbeOutput = struct(
  n0,
  _CPO,
  0,
  [_pI, _pA, _sA, _d, _dP, _pr, _pS, _aF, _vI, _s, _cA, _mAo, _t],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 4, 4, 128 | 0]
);
export var DeleteMonitorInput = struct(n0, _DMI, 0, [_mN], [[0, 1]]);
export var DeleteMonitorOutput = struct(n0, _DMO, 0, [], []);
export var DeleteProbeInput = struct(
  n0,
  _DPI,
  0,
  [_mN, _pI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteProbeOutput = struct(n0, _DPO, 0, [], []);
export var GetMonitorInput = struct(n0, _GMI, 0, [_mN], [[0, 1]]);
export var GetMonitorOutput = struct(
  n0,
  _GMO,
  0,
  [_mA, _mN, _s, _aP, _t, _p, _cA, _mAo],
  [0, 0, 0, 1, 128 | 0, () => ProbeList, 4, 4]
);
export var GetProbeInput = struct(
  n0,
  _GPI,
  0,
  [_mN, _pI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetProbeOutput = struct(
  n0,
  _GPO,
  0,
  [_pI, _pA, _sA, _d, _dP, _pr, _pS, _aF, _vI, _s, _cA, _mAo, _t],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 4, 4, 128 | 0]
);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_t], [128 | 0]);
export var Probe = struct(
  n0,
  _P,
  0,
  [_pI, _pA, _sA, _d, _dP, _pr, _pS, _aF, _vI, _s, _cA, _mAo, _t],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 4, 4, 128 | 0]
);
export var ProbeInput = struct(n0, _PI, 0, [_sA, _d, _dP, _pr, _pS, _t], [0, 0, 1, 0, 1, 128 | 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var TagResourceInput = struct(n0, _TRI, 0, [_rA, _t], [[0, 1], 128 | 0]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var UpdateMonitorInput = struct(n0, _UMI, 0, [_mN, _aP], [[0, 1], 1]);
export var UpdateMonitorOutput = struct(n0, _UMO, 0, [_mA, _mN, _s, _aP, _t], [0, 0, 0, 1, 128 | 0]);
export var UpdateProbeInput = struct(n0, _UPI, 0, [_mN, _pI, _s, _d, _dP, _pr, _pS], [[0, 1], [0, 1], 0, 0, 1, 0, 1]);
export var UpdateProbeOutput = struct(
  n0,
  _UPO,
  0,
  [_pI, _pA, _sA, _d, _dP, _pr, _pS, _aF, _vI, _s, _cA, _mAo, _t],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 4, 4, 128 | 0]
);
export var ProbeList = list(n0, _PL, 0, () => Probe);
export var TagKeyList = 64 | 0;

export var CreateProbe = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/monitors/{monitorName}/probes", 200],
  },
  () => CreateProbeInput,
  () => CreateProbeOutput
);
export var DeleteMonitor = op(
  n0,
  _DM,
  {
    [_h]: ["DELETE", "/monitors/{monitorName}", 200],
  },
  () => DeleteMonitorInput,
  () => DeleteMonitorOutput
);
export var DeleteProbe = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/monitors/{monitorName}/probes/{probeId}", 200],
  },
  () => DeleteProbeInput,
  () => DeleteProbeOutput
);
export var GetMonitor = op(
  n0,
  _GM,
  {
    [_h]: ["GET", "/monitors/{monitorName}", 200],
  },
  () => GetMonitorInput,
  () => GetMonitorOutput
);
export var GetProbe = op(
  n0,
  _GP,
  {
    [_h]: ["GET", "/monitors/{monitorName}/probes/{probeId}", 200],
  },
  () => GetProbeInput,
  () => GetProbeOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);
export var UpdateMonitor = op(
  n0,
  _UM,
  {
    [_h]: ["PATCH", "/monitors/{monitorName}", 200],
  },
  () => UpdateMonitorInput,
  () => UpdateMonitorOutput
);
export var UpdateProbe = op(
  n0,
  _UP,
  {
    [_h]: ["PATCH", "/monitors/{monitorName}/probes/{probeId}", 200],
  },
  () => UpdateProbeInput,
  () => UpdateProbeOutput
);
