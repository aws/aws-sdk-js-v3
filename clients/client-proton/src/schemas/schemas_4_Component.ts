// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ar,
  _C,
  _cA,
  _CCD,
  _CCDI,
  _CCDO,
  _cN,
  _co,
  _d,
  _DC,
  _DCI,
  _DCO,
  _dS,
  _dSM,
  _eN,
  _GC,
  _GCI,
  _GCO,
  _lADI,
  _lCRT,
  _lDAA,
  _lDSA,
  _lMA,
  _lSDI,
  _n,
  _sIN,
  _sN,
  _sS,
  Description,
  n0,
  SpecContents,
  StatusMessage,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelComponentDeploymentInput = struct(n0, _CCDI, 0, [_cN], [0]);
export var CancelComponentDeploymentOutput = struct(n0, _CCDO, 0, [_co], [[() => Component, 0]]);
export var Component = struct(
  n0,
  _C,
  0,
  [_n, _d, _ar, _eN, _sN, _sIN, _cA, _lMA, _lDAA, _lDSA, _dS, _dSM, _sS, _lCRT, _lADI, _lSDI],
  [0, [() => Description, 0], 0, 0, 0, 0, 4, 4, 4, 4, 0, [() => StatusMessage, 0], [() => SpecContents, 0], 0, 0, 0]
);
export var DeleteComponentInput = struct(n0, _DCI, 0, [_n], [0]);
export var DeleteComponentOutput = struct(n0, _DCO, 0, [_co], [[() => Component, 0]]);
export var GetComponentInput = struct(n0, _GCI, 0, [_n], [0]);
export var GetComponentOutput = struct(n0, _GCO, 0, [_co], [[() => Component, 0]]);
export var CancelComponentDeployment = op(
  n0,
  _CCD,
  0,
  () => CancelComponentDeploymentInput,
  () => CancelComponentDeploymentOutput
);
export var DeleteComponent = op(
  n0,
  _DC,
  2,
  () => DeleteComponentInput,
  () => DeleteComponentOutput
);
export var GetComponent = op(
  n0,
  _GC,
  0,
  () => GetComponentInput,
  () => GetComponentOutput
);
