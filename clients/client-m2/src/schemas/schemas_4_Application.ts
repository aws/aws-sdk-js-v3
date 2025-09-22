// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aA,
  _aI,
  _aV,
  _AVS,
  _CA,
  _CAR,
  _CARr,
  _cAV,
  _CD,
  _CDR,
  _CDRr,
  _con,
  _cT,
  _cTl,
  _D,
  _d,
  _dC,
  _de,
  _dI,
  _dV,
  _DVS,
  _eI,
  _eT,
  _GAe,
  _GAR,
  _GARe,
  _GAV,
  _GAVR,
  _GAVRe,
  _GD,
  _GDR,
  _GDRe,
  _h,
  _kKI,
  _lA,
  _lBDN,
  _lG,
  _lGN,
  _LGS,
  _LGSo,
  _lP,
  _lST,
  _lT,
  _lV,
  _n,
  _rA,
  _s,
  _sL,
  _sR,
  _t,
  _tGA,
  _UA,
  _UAR,
  _UARp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationVersionSummary = struct(n0, _AVS, 0, [_aV, _s, _sR, _cT], [1, 0, 0, 4]);
export var CreateApplicationRequest = struct(
  n0,
  _CAR,
  0,
  [_n, _d, _eT, _de, _t, _cTl, _kKI, _rA],
  [0, 0, 0, () => Definition, 128 | 0, [0, 4], 0, 0]
);
export var CreateApplicationResponse = struct(n0, _CARr, 0, [_aA, _aI, _aV], [0, 0, 1]);
export var CreateDeploymentRequest = struct(n0, _CDR, 0, [_eI, _aI, _aV, _cTl], [0, [0, 1], 1, [0, 4]]);
export var CreateDeploymentResponse = struct(n0, _CDRr, 0, [_dI], [0]);
export var DeployedVersionSummary = struct(n0, _DVS, 0, [_aV, _s, _sR], [1, 0, 0]);
export var GetApplicationRequest = struct(n0, _GAR, 0, [_aI], [[0, 1]]);
export var GetApplicationResponse = struct(
  n0,
  _GARe,
  0,
  [_n, _d, _aI, _aA, _s, _lV, _dV, _eT, _lG, _cT, _lST, _t, _eI, _tGA, _lA, _lP, _lBDN, _sR, _kKI, _rA],
  [
    0,
    0,
    0,
    0,
    0,
    () => ApplicationVersionSummary,
    () => DeployedVersionSummary,
    0,
    () => LogGroupSummaries,
    4,
    4,
    128 | 0,
    0,
    64 | 0,
    64 | 0,
    64 | 1,
    0,
    0,
    0,
    0,
  ]
);
export var GetApplicationVersionRequest = struct(
  n0,
  _GAVR,
  0,
  [_aI, _aV],
  [
    [0, 1],
    [1, 1],
  ]
);
export var GetApplicationVersionResponse = struct(
  n0,
  _GAVRe,
  0,
  [_n, _aV, _d, _dC, _s, _cT, _sR],
  [0, 1, 0, 0, 0, 4, 0]
);
export var GetDeploymentRequest = struct(
  n0,
  _GDR,
  0,
  [_dI, _aI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDeploymentResponse = struct(n0, _GDRe, 0, [_dI, _aI, _eI, _aV, _s, _cT, _sR], [0, 0, 0, 1, 0, 4, 0]);
export var LogGroupSummary = struct(n0, _LGS, 0, [_lT, _lGN], [0, 0]);
export var UpdateApplicationRequest = struct(n0, _UAR, 0, [_aI, _d, _cAV, _de], [[0, 1], 0, 1, () => Definition]);
export var UpdateApplicationResponse = struct(n0, _UARp, 0, [_aV], [1]);
export var ArnList = 64 | 0;

export var LogGroupSummaries = list(n0, _LGSo, 0, () => LogGroupSummary);
export var PortList = 64 | 1;

export var Definition = uni(n0, _D, 0, [_sL, _con], [0, 0]);
export var CreateApplication = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/applications", 200],
  },
  () => CreateApplicationRequest,
  () => CreateApplicationResponse
);
export var CreateDeployment = op(
  n0,
  _CD,
  {
    [_h]: ["POST", "/applications/{applicationId}/deployments", 200],
  },
  () => CreateDeploymentRequest,
  () => CreateDeploymentResponse
);
export var GetApplication = op(
  n0,
  _GAe,
  {
    [_h]: ["GET", "/applications/{applicationId}", 200],
  },
  () => GetApplicationRequest,
  () => GetApplicationResponse
);
export var GetApplicationVersion = op(
  n0,
  _GAV,
  {
    [_h]: ["GET", "/applications/{applicationId}/versions/{applicationVersion}", 200],
  },
  () => GetApplicationVersionRequest,
  () => GetApplicationVersionResponse
);
export var GetDeployment = op(
  n0,
  _GD,
  {
    [_h]: ["GET", "/applications/{applicationId}/deployments/{deploymentId}", 200],
  },
  () => GetDeploymentRequest,
  () => GetDeploymentResponse
);
export var UpdateApplication = op(
  n0,
  _UA,
  {
    [_h]: ["PATCH", "/applications/{applicationId}", 200],
  },
  () => UpdateApplicationRequest,
  () => UpdateApplicationResponse
);
