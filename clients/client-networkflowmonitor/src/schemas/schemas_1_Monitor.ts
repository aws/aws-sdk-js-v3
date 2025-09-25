// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _cAo,
  _cI,
  _CM,
  _CMI,
  _CMO,
  _cT,
  _cTo,
  _dC,
  _dI,
  _DM,
  _DMI,
  _DMO,
  _eT,
  _GM,
  _GMI,
  _GMO,
  _GQRMTC,
  _GQRMTCI,
  _GQRMTCO,
  _GQSMTC,
  _GQSMTCI,
  _GQSMTCO,
  _h,
  _hQ,
  _i,
  _KM,
  _kM,
  _l,
  _lA,
  _lI,
  _lIA,
  _lII,
  _LM,
  _LMI,
  _LMO,
  _lPN,
  _lPNo,
  _lR,
  _lRo,
  _lRTA,
  _lRTR,
  _lSA,
  _lSI,
  _lSN,
  _lVA,
  _lVI,
  _mA,
  _mAo,
  _ML,
  _MLR,
  _MLRo,
  _mN,
  _mNe,
  _mo,
  _mR,
  _MRR,
  _MRRo,
  _MS,
  _mS,
  _MTCR,
  _MTCRL,
  _nT,
  _qI,
  _rAe,
  _rI,
  _rIA,
  _rII,
  _rPN,
  _rPNe,
  _rR,
  _rRe,
  _rRTA,
  _rRTR,
  _rSA,
  _rSI,
  _rSN,
  _rVA,
  _rVI,
  _s,
  _sA,
  _sIn,
  _sN,
  _SQMTC,
  _SQMTCI,
  _SQMTCIt,
  _SQMTCO,
  _SQMTCOt,
  _SQMTCt,
  _sT,
  _t,
  _TC,
  _tC,
  _TCL,
  _tCr,
  _tP,
  _ty,
  _u,
  _UM,
  _UMI,
  _UMO,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateMonitorInput = struct(
  n0,
  _CMI,
  0,
  [_mN, _lR, _rR, _sA, _cT, _t],
  [0, () => MonitorLocalResources, () => MonitorRemoteResources, 0, [0, 4], 128 | 0]
);
export var CreateMonitorOutput = struct(
  n0,
  _CMO,
  0,
  [_mA, _mN, _mS, _lR, _rR, _cA, _mAo, _t],
  [0, 0, 0, () => MonitorLocalResources, () => MonitorRemoteResources, 4, 4, 128 | 0]
);
export var DeleteMonitorInput = struct(n0, _DMI, 0, [_mN], [[0, 1]]);
export var DeleteMonitorOutput = struct(n0, _DMO, 0, [], []);
export var GetMonitorInput = struct(n0, _GMI, 0, [_mN], [[0, 1]]);
export var GetMonitorOutput = struct(
  n0,
  _GMO,
  0,
  [_mA, _mN, _mS, _lR, _rR, _cA, _mAo, _t],
  [0, 0, 0, () => MonitorLocalResources, () => MonitorRemoteResources, 4, 4, 128 | 0]
);
export var GetQueryResultsMonitorTopContributorsInput = struct(
  n0,
  _GQRMTCI,
  0,
  [_mN, _qI, _nT, _mR],
  [
    [0, 1],
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
export var GetQueryResultsMonitorTopContributorsOutput = struct(
  n0,
  _GQRMTCO,
  0,
  [_u, _tC, _nT],
  [0, () => MonitorTopContributorsRowList, 0]
);
export var GetQueryStatusMonitorTopContributorsInput = struct(
  n0,
  _GQSMTCI,
  0,
  [_mN, _qI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetQueryStatusMonitorTopContributorsOutput = struct(n0, _GQSMTCO, 0, [_s], [0]);
export var KubernetesMetadata = struct(n0, _KM, 0, [_lSN, _lPN, _lPNo, _rSN, _rPN, _rPNe], [0, 0, 0, 0, 0, 0]);
export var ListMonitorsInput = struct(
  n0,
  _LMI,
  0,
  [_nT, _mR, _mS],
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
        [_hQ]: _mS,
      },
    ],
  ]
);
export var ListMonitorsOutput = struct(n0, _LMO, 0, [_mo, _nT], [() => MonitorList, 0]);
export var MonitorLocalResource = struct(n0, _MLR, 0, [_ty, _i], [0, 0]);
export var MonitorRemoteResource = struct(n0, _MRR, 0, [_ty, _i], [0, 0]);
export var MonitorSummary = struct(n0, _MS, 0, [_mA, _mN, _mS], [0, 0, 0]);
export var MonitorTopContributorsRow = struct(
  n0,
  _MTCR,
  0,
  [
    _lI,
    _sIn,
    _lII,
    _lVI,
    _lRo,
    _lA,
    _lSI,
    _tP,
    _dC,
    _rVI,
    _rRe,
    _rAe,
    _rSI,
    _rII,
    _rI,
    _dI,
    _v,
    _tCr,
    _kM,
    _lIA,
    _lSA,
    _lVA,
    _rIA,
    _rSA,
    _rVA,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    () => TraversedConstructsList,
    () => KubernetesMetadata,
    0,
    0,
    0,
    0,
    0,
    0,
  ]
);
export var StartQueryMonitorTopContributorsInput = struct(
  n0,
  _SQMTCI,
  0,
  [_mN, _sT, _eT, _mNe, _dC, _l],
  [[0, 1], 5, 5, 0, 0, 1]
);
export var StartQueryMonitorTopContributorsOutput = struct(n0, _SQMTCO, 0, [_qI], [0]);
export var StopQueryMonitorTopContributorsInput = struct(
  n0,
  _SQMTCIt,
  0,
  [_mN, _qI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StopQueryMonitorTopContributorsOutput = struct(n0, _SQMTCOt, 0, [], []);
export var TraversedComponent = struct(n0, _TC, 0, [_cI, _cTo, _cAo, _sN], [0, 0, 0, 0]);
export var UpdateMonitorInput = struct(
  n0,
  _UMI,
  0,
  [_mN, _lRTA, _lRTR, _rRTA, _rRTR, _cT],
  [
    [0, 1],
    () => MonitorLocalResources,
    () => MonitorLocalResources,
    () => MonitorRemoteResources,
    () => MonitorRemoteResources,
    [0, 4],
  ]
);
export var UpdateMonitorOutput = struct(
  n0,
  _UMO,
  0,
  [_mA, _mN, _mS, _lR, _rR, _cA, _mAo, _t],
  [0, 0, 0, () => MonitorLocalResources, () => MonitorRemoteResources, 4, 4, 128 | 0]
);
export var MonitorList = list(n0, _ML, 0, () => MonitorSummary);
export var MonitorLocalResources = list(n0, _MLRo, 0, () => MonitorLocalResource);
export var MonitorRemoteResources = list(n0, _MRRo, 0, () => MonitorRemoteResource);
export var MonitorTopContributorsRowList = list(n0, _MTCRL, 0, () => MonitorTopContributorsRow);
export var TraversedConstructsList = list(n0, _TCL, 0, () => TraversedComponent);
export var CreateMonitor = op(
  n0,
  _CM,
  {
    [_h]: ["POST", "/monitors", 200],
  },
  () => CreateMonitorInput,
  () => CreateMonitorOutput
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
export var GetMonitor = op(
  n0,
  _GM,
  {
    [_h]: ["GET", "/monitors/{monitorName}", 200],
  },
  () => GetMonitorInput,
  () => GetMonitorOutput
);
export var GetQueryResultsMonitorTopContributors = op(
  n0,
  _GQRMTC,
  {
    [_h]: ["GET", "/monitors/{monitorName}/topContributorsQueries/{queryId}/results", 200],
  },
  () => GetQueryResultsMonitorTopContributorsInput,
  () => GetQueryResultsMonitorTopContributorsOutput
);
export var GetQueryStatusMonitorTopContributors = op(
  n0,
  _GQSMTC,
  {
    [_h]: ["GET", "/monitors/{monitorName}/topContributorsQueries/{queryId}/status", 200],
  },
  () => GetQueryStatusMonitorTopContributorsInput,
  () => GetQueryStatusMonitorTopContributorsOutput
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
export var StartQueryMonitorTopContributors = op(
  n0,
  _SQMTC,
  {
    [_h]: ["POST", "/monitors/{monitorName}/topContributorsQueries", 200],
  },
  () => StartQueryMonitorTopContributorsInput,
  () => StartQueryMonitorTopContributorsOutput
);
export var StopQueryMonitorTopContributors = op(
  n0,
  _SQMTCt,
  {
    [_h]: ["DELETE", "/monitors/{monitorName}/topContributorsQueries/{queryId}", 200],
  },
  () => StopQueryMonitorTopContributorsInput,
  () => StopQueryMonitorTopContributorsOutput
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
