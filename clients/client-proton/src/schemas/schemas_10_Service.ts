// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ar,
  _bN,
  _cA,
  _CSI,
  _CSO,
  _CSPD,
  _CSPDI,
  _CSPDO,
  _CSr,
  _d,
  _dS,
  _DSel,
  _DSI,
  _dSM,
  _DSO,
  _dT,
  _GS,
  _GSI,
  _GSO,
  _lADI,
  _lDAA,
  _lDSA,
  _lMA,
  _lSDI,
  _n,
  _p,
  _rCA,
  _rI,
  _S,
  _ser,
  _sM,
  _sN,
  _SP,
  _sp,
  _st,
  _t,
  _tMV,
  _tMVe,
  _tN,
  _US,
  _USI,
  _USO,
  _USP,
  _USPI,
  _USPO,
  Description,
  n0,
  SpecContents,
  StatusMessage,
} from "./schemas_0";
import { TagList } from "./schemas_20_Create";

/* eslint no-var: 0 */

export var CancelServicePipelineDeploymentInput = struct(n0, _CSPDI, 0, [_sN], [0]);
export var CancelServicePipelineDeploymentOutput = struct(n0, _CSPDO, 0, [_p], [[() => ServicePipeline, 0]]);
export var CreateServiceInput = struct(
  n0,
  _CSI,
  0,
  [_n, _d, _tN, _tMV, _tMVe, _sp, _rCA, _rI, _bN, _t],
  [0, [() => Description, 0], 0, 0, 0, [() => SpecContents, 0], 0, 0, 0, () => TagList]
);
export var CreateServiceOutput = struct(n0, _CSO, 0, [_ser], [[() => Service, 0]]);
export var DeleteServiceInput = struct(n0, _DSI, 0, [_n], [0]);
export var DeleteServiceOutput = struct(n0, _DSO, 0, [_ser], [[() => Service, 0]]);
export var GetServiceInput = struct(n0, _GSI, 0, [_n], [0]);
export var GetServiceOutput = struct(n0, _GSO, 0, [_ser], [[() => Service, 0]]);
export var Service = struct(
  n0,
  _S,
  0,
  [_n, _d, _ar, _tN, _cA, _lMA, _st, _sM, _sp, _p, _rCA, _rI, _bN],
  [
    0,
    [() => Description, 0],
    0,
    0,
    4,
    4,
    0,
    [() => StatusMessage, 0],
    [() => SpecContents, 0],
    [() => ServicePipeline, 0],
    0,
    0,
    0,
  ]
);
export var ServicePipeline = struct(
  n0,
  _SP,
  0,
  [_ar, _cA, _lDAA, _lDSA, _tN, _tMV, _tMVe, _dS, _dSM, _sp, _lADI, _lSDI],
  [0, 4, 4, 4, 0, 0, 0, 0, [() => StatusMessage, 0], [() => SpecContents, 0], 0, 0]
);
export var UpdateServiceInput = struct(
  n0,
  _USI,
  0,
  [_n, _d, _sp],
  [0, [() => Description, 0], [() => SpecContents, 0]]
);
export var UpdateServiceOutput = struct(n0, _USO, 0, [_ser], [[() => Service, 0]]);
export var UpdateServicePipelineInput = struct(
  n0,
  _USPI,
  0,
  [_sN, _sp, _dT, _tMV, _tMVe],
  [0, [() => SpecContents, 0], 0, 0, 0]
);
export var UpdateServicePipelineOutput = struct(n0, _USPO, 0, [_p], [[() => ServicePipeline, 0]]);
export var CancelServicePipelineDeployment = op(
  n0,
  _CSPD,
  0,
  () => CancelServicePipelineDeploymentInput,
  () => CancelServicePipelineDeploymentOutput
);
export var CreateService = op(
  n0,
  _CSr,
  2,
  () => CreateServiceInput,
  () => CreateServiceOutput
);
export var DeleteService = op(
  n0,
  _DSel,
  2,
  () => DeleteServiceInput,
  () => DeleteServiceOutput
);
export var GetService = op(
  n0,
  _GS,
  0,
  () => GetServiceInput,
  () => GetServiceOutput
);
export var UpdateService = op(
  n0,
  _US,
  0,
  () => UpdateServiceInput,
  () => UpdateServiceOutput
);
export var UpdateServicePipeline = op(
  n0,
  _USP,
  0,
  () => UpdateServicePipelineInput,
  () => UpdateServicePipelineOutput
);
