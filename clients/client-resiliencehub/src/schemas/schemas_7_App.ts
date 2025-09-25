// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aA,
  _AIS,
  _aIS,
  _AISL,
  _aISp,
  _aV,
  _cTl,
  _DAIS,
  _DAISR,
  _DAISRe,
  _eCA,
  _ESCN,
  _eSCN,
  _h,
  _iT,
  _LAIS,
  _LAISR,
  _LAISRi,
  _mR,
  _nam,
  _nT,
  _rC,
  _sA,
  _sN,
  _tS,
  n0,
} from "./schemas_0";
import { TerraformSource } from "./schemas_27_App";

/* eslint no-var: 0 */

export var AppInputSource = struct(
  n0,
  _AIS,
  0,
  [_sN, _iT, _sA, _tS, _rC, _eSCN],
  [0, 0, 0, () => TerraformSource, 1, () => EksSourceClusterNamespace]
);
export var DeleteAppInputSourceRequest = struct(
  n0,
  _DAISR,
  0,
  [_aA, _sA, _tS, _cTl, _eSCN],
  [0, 0, () => TerraformSource, [0, 4], () => EksSourceClusterNamespace]
);
export var DeleteAppInputSourceResponse = struct(n0, _DAISRe, 0, [_aA, _aIS], [0, () => AppInputSource]);
export var EksSourceClusterNamespace = struct(n0, _ESCN, 0, [_eCA, _nam], [0, 0]);
export var ListAppInputSourcesRequest = struct(n0, _LAISR, 0, [_aA, _aV, _nT, _mR], [0, 0, 0, 1]);
export var ListAppInputSourcesResponse = struct(n0, _LAISRi, 0, [_aISp, _nT], [() => AppInputSourceList, 0]);
export var AppInputSourceList = list(n0, _AISL, 0, () => AppInputSource);
export var DeleteAppInputSource = op(
  n0,
  _DAIS,
  {
    [_h]: ["POST", "/delete-app-input-source", 200],
  },
  () => DeleteAppInputSourceRequest,
  () => DeleteAppInputSourceResponse
);
export var ListAppInputSources = op(
  n0,
  _LAIS,
  {
    [_h]: ["POST", "/list-app-input-sources", 200],
  },
  () => ListAppInputSourcesRequest,
  () => ListAppInputSourcesResponse
);
