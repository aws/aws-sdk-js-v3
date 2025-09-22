// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _CSID,
  _CSIDI,
  _CSIDO,
  _dS,
  _dSM,
  _eN,
  _GSIe,
  _GSII,
  _GSIO,
  _lADI,
  _lCRT,
  _lDAA,
  _lDSA,
  _lSDI,
  _n,
  _SI,
  _sI,
  _sIN,
  _sN,
  _sp,
  _tMV,
  _tMVe,
  _tN,
  n0,
  SpecContents,
  StatusMessage,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelServiceInstanceDeploymentInput = struct(n0, _CSIDI, 0, [_sIN, _sN], [0, 0]);
export var CancelServiceInstanceDeploymentOutput = struct(n0, _CSIDO, 0, [_sI], [[() => ServiceInstance, 0]]);
export var GetServiceInstanceInput = struct(n0, _GSII, 0, [_n, _sN], [0, 0]);
export var GetServiceInstanceOutput = struct(n0, _GSIO, 0, [_sI], [[() => ServiceInstance, 0]]);
export var ServiceInstance = struct(
  n0,
  _SI,
  0,
  [_n, _ar, _cA, _lDAA, _lDSA, _sN, _eN, _tN, _tMV, _tMVe, _dS, _dSM, _sp, _lCRT, _lADI, _lSDI],
  [0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, [() => StatusMessage, 0], [() => SpecContents, 0], 0, 0, 0]
);
export var CancelServiceInstanceDeployment = op(
  n0,
  _CSID,
  0,
  () => CancelServiceInstanceDeploymentInput,
  () => CancelServiceInstanceDeploymentOutput
);
export var GetServiceInstance = op(
  n0,
  _GSIe,
  0,
  () => GetServiceInstanceInput,
  () => GetServiceInstanceOutput
);
