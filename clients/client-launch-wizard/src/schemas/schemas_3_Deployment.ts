// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _DDS,
  _DDSL,
  _dep,
  _DF,
  _DFL,
  _f,
  _h,
  _i,
  _LD,
  _LDI,
  _LDO,
  _mR,
  _n,
  _nT,
  _pN,
  _st,
  _va,
  _wN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeploymentDataSummary = struct(n0, _DDS, 0, [_n, _i, _wN, _pN, _st, _cA], [0, 0, 0, 0, 0, 4]);
export var DeploymentFilter = struct(n0, _DF, 0, [_n, _va], [0, 64 | 0]);
export var ListDeploymentsInput = struct(n0, _LDI, 0, [_f, _mR, _nT], [() => DeploymentFilterList, 1, 0]);
export var ListDeploymentsOutput = struct(n0, _LDO, 0, [_dep, _nT], [() => DeploymentDataSummaryList, 0]);
export var Unit = "unit" as const;

export var DeploymentDataSummaryList = list(n0, _DDSL, 0, () => DeploymentDataSummary);
export var DeploymentFilterList = list(n0, _DFL, 0, () => DeploymentFilter);
export var DeploymentFilterValues = 64 | 0;

export var ListDeployments = op(
  n0,
  _LD,
  {
    [_h]: ["POST", "/listDeployments", 200],
  },
  () => ListDeploymentsInput,
  () => ListDeploymentsOutput
);
