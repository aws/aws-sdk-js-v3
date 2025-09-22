// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cT,
  _ht,
  _i,
  _IC,
  _ICL,
  _id,
  _iT,
  _iTM,
  _n,
  _pN,
  _ru,
  _SDE,
  _SDER,
  _SDERt,
  _sN,
  _st,
  _UDE,
  _UDER,
  _UDERp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var IdeConfiguration = struct(n0, _IC, 0, [_ru, _n], [0, 0]);
export var StartDevEnvironmentRequest = struct(
  n0,
  _SDER,
  0,
  [_sN, _pN, _i, _id, _iT, _iTM],
  [[0, 1], [0, 1], [0, 1], () => IdeConfigurationList, 0, 1]
);
export var StartDevEnvironmentResponse = struct(n0, _SDERt, 0, [_sN, _pN, _i, _st], [0, 0, 0, 0]);
export var UpdateDevEnvironmentRequest = struct(
  n0,
  _UDER,
  0,
  [_sN, _pN, _i, _a, _id, _iT, _iTM, _cT],
  [[0, 1], [0, 1], [0, 1], 0, () => IdeConfigurationList, 0, 1, 0]
);
export var UpdateDevEnvironmentResponse = struct(
  n0,
  _UDERp,
  0,
  [_i, _sN, _pN, _a, _id, _iT, _iTM, _cT],
  [0, 0, 0, 0, () => IdeConfigurationList, 0, 1, 0]
);
export var IdeConfigurationList = list(n0, _ICL, 0, () => IdeConfiguration);
export var StartDevEnvironment = op(
  n0,
  _SDE,
  {
    [_ht]: ["PUT", "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/start", 200],
  },
  () => StartDevEnvironmentRequest,
  () => StartDevEnvironmentResponse
);
export var UpdateDevEnvironment = op(
  n0,
  _UDE,
  {
    [_ht]: ["PATCH", "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}", 200],
  },
  () => UpdateDevEnvironmentRequest,
  () => UpdateDevEnvironmentResponse
);
