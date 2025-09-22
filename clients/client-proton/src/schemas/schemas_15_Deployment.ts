// smithy-typescript generated code
import { op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _ar,
  _cA,
  _cAom,
  _cN,
  _co,
  _CS,
  _DD,
  _DDI,
  _DDO,
  _De,
  _de,
  _dS,
  _DSe,
  _dSM,
  _eN,
  _en,
  _ES,
  _GD,
  _GDI,
  _GDO,
  _i,
  _iS,
  _lADI,
  _lMA,
  _lSCDI,
  _lSDI,
  _lSEDI,
  _lSSPDI,
  _mT,
  _s,
  _sI,
  _sIN,
  _SIS,
  _sN,
  _sP,
  _sp,
  _SPS,
  _sS,
  _tA,
  _tF,
  _TFC,
  _tMV,
  _tMVe,
  _tN,
  _tRCA,
  _tRT,
  _tS,
  n0,
  SpecContents,
  StatusMessage,
} from "./schemas_0";

/* eslint no-var: 0 */

export var TemplateFileContents = sim(n0, _TFC, 0, {
  [_mT]: _a,
  [_s]: 1,
});
export var ComponentState = struct(
  n0,
  _CS,
  0,
  [_sN, _sIN, _sS, _tF],
  [0, 0, [() => SpecContents, 0], [() => TemplateFileContents, 0]]
);
export var DeleteDeploymentInput = struct(n0, _DDI, 0, [_i], [0]);
export var DeleteDeploymentOutput = struct(n0, _DDO, 0, [_de], [[() => Deployment, 0]]);
export var Deployment = struct(
  n0,
  _De,
  0,
  [_i, _ar, _tA, _tRCA, _tRT, _eN, _sN, _sIN, _cN, _dS, _dSM, _cA, _lMA, _cAom, _lADI, _lSDI, _iS, _tS],
  [
    0,
    0,
    0,
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    [() => StatusMessage, 0],
    4,
    4,
    4,
    0,
    0,
    [() => DeploymentState, 0],
    [() => DeploymentState, 0],
  ]
);
export var EnvironmentState = struct(n0, _ES, 0, [_sp, _tN, _tMV, _tMVe], [[() => SpecContents, 0], 0, 0, 0]);
export var GetDeploymentInput = struct(n0, _GDI, 0, [_i, _eN, _sN, _sIN, _cN], [0, 0, 0, 0, 0]);
export var GetDeploymentOutput = struct(n0, _GDO, 0, [_de], [[() => Deployment, 0]]);
export var ServiceInstanceState = struct(
  n0,
  _SIS,
  0,
  [_sp, _tN, _tMV, _tMVe, _lSCDI, _lSEDI, _lSSPDI],
  [[() => SpecContents, 0], 0, 0, 0, 64 | 0, 0, 0]
);
export var ServicePipelineState = struct(n0, _SPS, 0, [_sp, _tN, _tMV, _tMVe], [[() => SpecContents, 0], 0, 0, 0]);
export var ComponentDeploymentIdList = 64 | 0;

export var DeploymentState = uni(
  n0,
  _DSe,
  0,
  [_sI, _en, _sP, _co],
  [
    [() => ServiceInstanceState, 0],
    [() => EnvironmentState, 0],
    [() => ServicePipelineState, 0],
    [() => ComponentState, 0],
  ]
);
export var DeleteDeployment = op(
  n0,
  _DD,
  2,
  () => DeleteDeploymentInput,
  () => DeleteDeploymentOutput
);
export var GetDeployment = op(
  n0,
  _GD,
  0,
  () => GetDeploymentInput,
  () => GetDeploymentOutput
);
