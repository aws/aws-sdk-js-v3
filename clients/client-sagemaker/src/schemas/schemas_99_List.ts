// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CTA,
  _CTB,
  _DFA,
  _DFN,
  _DFNC,
  _DFS,
  _DFSe,
  _EDF,
  _EDP,
  _EDPA,
  _EDPN,
  _EDPS,
  _EDPSd,
  _EDS,
  _LDF,
  _LDFR,
  _LDFRi,
  _LEDP,
  _LEDPR,
  _LEDPRi,
  _LMT,
  _LMTA,
  _LMTB,
  _MR,
  _NCa,
  _NT,
  _SBo,
  _SO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeviceFleetSummary = struct(n0, _DFS, 0, [_DFA, _DFN, _CT, _LMT], [0, 0, 4, 4]);
export var EdgeDeploymentPlanSummary = struct(
  n0,
  _EDPS,
  0,
  [_EDPA, _EDPN, _DFN, _EDS, _EDP, _EDF, _CT, _LMT],
  [0, 0, 0, 1, 1, 1, 4, 4]
);
export var ListDeviceFleetsRequest = struct(
  n0,
  _LDFR,
  0,
  [_NT, _MR, _CTA, _CTB, _LMTA, _LMTB, _NCa, _SBo, _SO],
  [0, 1, 4, 4, 4, 4, 0, 0, 0]
);
export var ListDeviceFleetsResponse = struct(n0, _LDFRi, 0, [_DFSe, _NT], [() => DeviceFleetSummaries, 0]);
export var ListEdgeDeploymentPlansRequest = struct(
  n0,
  _LEDPR,
  0,
  [_NT, _MR, _CTA, _CTB, _LMTA, _LMTB, _NCa, _DFNC, _SBo, _SO],
  [0, 1, 4, 4, 4, 4, 0, 0, 0, 0]
);
export var ListEdgeDeploymentPlansResponse = struct(
  n0,
  _LEDPRi,
  0,
  [_EDPSd, _NT],
  [() => EdgeDeploymentPlanSummaries, 0]
);
export var DeviceFleetSummaries = list(n0, _DFSe, 0, () => DeviceFleetSummary);
export var EdgeDeploymentPlanSummaries = list(n0, _EDPSd, 0, () => EdgeDeploymentPlanSummary);
export var ListDeviceFleets = op(
  n0,
  _LDF,
  0,
  () => ListDeviceFleetsRequest,
  () => ListDeviceFleetsResponse
);
export var ListEdgeDeploymentPlans = op(
  n0,
  _LEDP,
  0,
  () => ListEdgeDeploymentPlansRequest,
  () => ListEdgeDeploymentPlansResponse
);
