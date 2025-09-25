// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InternalServiceException as __InternalServiceException } from "../models/index";
import {
  _AM,
  _AV,
  _C,
  _c,
  _CTTL,
  _D,
  _De,
  _Dep,
  _DET,
  _DFN,
  _Di,
  _DM,
  _DMe,
  _DN,
  _DNe,
  _DR,
  _DRe,
  _DS,
  _DSe,
  _DSM,
  _DST,
  _e,
  _ED,
  _EDd,
  _EM,
  _EMd,
  _FHP,
  _GD,
  _GDR,
  _GDRe,
  _GDRet,
  _GDRR,
  _GDRRe,
  _h,
  _ISE,
  _LI,
  _LST,
  _M,
  _MH,
  _MM,
  _MN,
  _MNe,
  _Mo,
  _Mod,
  _MV,
  _RFR,
  _S,
  _SH,
  _SHR,
  _SR,
  _St,
  _Sta,
  _SU,
  _T,
  _Ti,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Checksum = struct(n0, _C, 0, [_T, _S], [0, 0]);
export var Definition = struct(n0, _D, 0, [_MH, _SU, _C, _St], [0, 0, () => Checksum, 0]);
export var DeploymentModel = struct(n0, _DM, 0, [_MH, _MN, _MV, _DS, _St, _Sta, _SR, _RFR], [0, 0, 0, 0, 0, 0, 0, 0]);
export var DeploymentResult = struct(
  n0,
  _DR,
  0,
  [_DN, _DSe, _DSM, _DST, _DET, _DMe],
  [0, 0, 0, 4, 4, () => DeploymentModels]
);
export var EdgeDeployment = struct(n0, _ED, 0, [_DN, _T, _FHP, _De], [0, 0, 0, () => Definitions]);
export var EdgeMetric = struct(n0, _EM, 0, [_Di, _MNe, _V, _Ti], [0, 0, 1, 4]);
export var GetDeploymentsRequest = struct(n0, _GDR, 0, [_DNe, _DFN], [0, 0]);
export var GetDeploymentsResult = struct(n0, _GDRe, 0, [_Dep], [() => EdgeDeployments]);
export var GetDeviceRegistrationRequest = struct(n0, _GDRR, 0, [_DNe, _DFN], [0, 0]);
export var GetDeviceRegistrationResult = struct(n0, _GDRRe, 0, [_DRe, _CTTL], [0, 0]);
export var InternalServiceException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InternalServiceException
);
export var Model = struct(n0, _Mo, 0, [_MN, _MV, _LST, _LI, _MM], [0, 0, 4, 4, () => EdgeMetrics]);
export var SendHeartbeatRequest = struct(
  n0,
  _SHR,
  0,
  [_AM, _Mod, _AV, _DNe, _DFN, _DR],
  [() => EdgeMetrics, () => Models, 0, 0, 0, () => DeploymentResult]
);
export var Unit = "unit" as const;

export var Definitions = list(n0, _De, 0, () => Definition);
export var DeploymentModels = list(n0, _DMe, 0, () => DeploymentModel);
export var EdgeDeployments = list(n0, _EDd, 0, () => EdgeDeployment);
export var EdgeMetrics = list(n0, _EMd, 0, () => EdgeMetric);
export var Models = list(n0, _Mod, 0, () => Model);
export var GetDeployments = op(
  n0,
  _GD,
  {
    [_h]: ["POST", "/GetDeployments", 200],
  },
  () => GetDeploymentsRequest,
  () => GetDeploymentsResult
);
export var GetDeviceRegistration = op(
  n0,
  _GDRet,
  {
    [_h]: ["POST", "/GetDeviceRegistration", 200],
  },
  () => GetDeviceRegistrationRequest,
  () => GetDeviceRegistrationResult
);
export var SendHeartbeat = op(
  n0,
  _SH,
  {
    [_h]: ["POST", "/SendHeartbeat", 200],
  },
  () => SendHeartbeatRequest,
  () => Unit
);
