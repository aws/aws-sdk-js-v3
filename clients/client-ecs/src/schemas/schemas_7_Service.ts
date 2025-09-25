// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _al,
  _aN,
  _bTIM,
  _DA,
  _DC,
  _DCB,
  _dCB,
  _DLH,
  _DLHL,
  _EBSTS,
  _EBSTSa,
  _enab,
  _ex,
  _fie,
  _hD,
  _hTA,
  _lH,
  _lSi,
  _mHP,
  _mPa,
  _PC,
  _PCl,
  _PS,
  _PSl,
  _pTr,
  _rA,
  _rol,
  _rT,
  _str,
  _t,
  _ta,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeploymentAlarms = struct(n0, _DA, 0, [_aN, _rol, _enab], [64 | 0, 2, 2]);
export var DeploymentCircuitBreaker = struct(n0, _DCB, 0, [_enab, _rol], [2, 2]);
export var DeploymentConfiguration = struct(
  n0,
  _DC,
  0,
  [_dCB, _mPa, _mHP, _al, _str, _bTIM, _lH],
  [() => DeploymentCircuitBreaker, 1, 1, () => DeploymentAlarms, 0, 1, () => DeploymentLifecycleHookList]
);
export var DeploymentLifecycleHook = struct(n0, _DLH, 0, [_hTA, _rA, _lSi, _hD], [0, 0, 64 | 0, 15]);
export var EBSTagSpecification = struct(n0, _EBSTS, 0, [_rT, _ta, _pTr], [0, () => Tags, 0]);
export var PlacementConstraint = struct(n0, _PC, 0, [_t, _ex], [0, 0]);
export var PlacementStrategy = struct(n0, _PS, 0, [_t, _fie], [0, 0]);
export var DeploymentLifecycleHookList = list(n0, _DLHL, 0, () => DeploymentLifecycleHook);
export var DeploymentLifecycleHookStageList = 64 | 0;

export var EBSTagSpecifications = list(n0, _EBSTSa, 0, () => EBSTagSpecification);
export var PlacementConstraints = list(n0, _PCl, 0, () => PlacementConstraint);
export var PlacementStrategies = list(n0, _PSl, 0, () => PlacementStrategy);
