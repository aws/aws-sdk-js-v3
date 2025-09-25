// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _aD,
  _ar,
  _co,
  _DEAD,
  _DESC,
  _ECSC,
  _eCSC,
  _ht,
  _i,
  _pN,
  _sC,
  _SDES,
  _SDESR,
  _SDESRt,
  _sI,
  _sN,
  _SS,
  _sT,
  _sU,
  _tV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveString = sim(n0, _SS, 0, 8);
export var DevEnvironmentAccessDetails = struct(
  n0,
  _DEAD,
  8,
  [_sU, _tV],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
  ]
);
export var DevEnvironmentSessionConfiguration = struct(
  n0,
  _DESC,
  0,
  [_sT, _eCSC],
  [0, () => ExecuteCommandSessionConfiguration]
);
export var ExecuteCommandSessionConfiguration = struct(n0, _ECSC, 0, [_co, _ar], [0, 64 | 0]);
export var StartDevEnvironmentSessionRequest = struct(
  n0,
  _SDESR,
  0,
  [_sN, _pN, _i, _sC],
  [[0, 1], [0, 1], [0, 1], () => DevEnvironmentSessionConfiguration]
);
export var StartDevEnvironmentSessionResponse = struct(
  n0,
  _SDESRt,
  0,
  [_aD, _sI, _sN, _pN, _i],
  [[() => DevEnvironmentAccessDetails, 0], 0, 0, 0, 0]
);
export var ExecuteCommandSessionConfigurationArguments = 64 | 0;

export var StartDevEnvironmentSession = op(
  n0,
  _SDES,
  {
    [_ht]: ["PUT", "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session", 200],
  },
  () => StartDevEnvironmentSessionRequest,
  () => StartDevEnvironmentSessionResponse
);
