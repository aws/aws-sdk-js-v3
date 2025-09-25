// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AII,
  _AIITR,
  _CAI,
  _CAIR,
  _CAIRr,
  _D,
  _DRCD,
  _h,
  _MOP,
  _MP,
  _N,
  _NII,
  _NSL,
  _NSo,
  _NSod,
  _PD,
  _RAI,
  _RAIR,
  _RAIRe,
  _RRA,
  _SAINI,
  _SAINIR,
  _SAINIRi,
  _Si,
  _T,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateApplicationInstanceRequest = struct(
  n0,
  _CAIR,
  0,
  [_N, _D, _MP, _MOP, _AIITR, _RRA, _DRCD, _T],
  [0, 0, () => ManifestPayload, () => ManifestOverridesPayload, 0, 0, 0, 128 | 0]
);
export var CreateApplicationInstanceResponse = struct(n0, _CAIRr, 0, [_AII], [0]);
export var NodeSignal = struct(n0, _NSo, 0, [_NII, _Si], [0, 0]);
export var RemoveApplicationInstanceRequest = struct(n0, _RAIR, 0, [_AII], [[0, 1]]);
export var RemoveApplicationInstanceResponse = struct(n0, _RAIRe, 0, [], []);
export var SignalApplicationInstanceNodeInstancesRequest = struct(
  n0,
  _SAINIR,
  0,
  [_AII, _NSod],
  [[0, 1], () => NodeSignalList]
);
export var SignalApplicationInstanceNodeInstancesResponse = struct(n0, _SAINIRi, 0, [_AII], [0]);
export var NodeSignalList = list(n0, _NSL, 0, () => NodeSignal);
export var ManifestOverridesPayload = uni(n0, _MOP, 0, [_PD], [0]);
export var ManifestPayload = uni(n0, _MP, 0, [_PD], [0]);
export var CreateApplicationInstance = op(
  n0,
  _CAI,
  {
    [_h]: ["POST", "/application-instances", 200],
  },
  () => CreateApplicationInstanceRequest,
  () => CreateApplicationInstanceResponse
);
export var RemoveApplicationInstance = op(
  n0,
  _RAI,
  {
    [_h]: ["DELETE", "/application-instances/{ApplicationInstanceId}", 200],
  },
  () => RemoveApplicationInstanceRequest,
  () => RemoveApplicationInstanceResponse
);
export var SignalApplicationInstanceNodeInstances = op(
  n0,
  _SAINI,
  {
    [_h]: ["PUT", "/application-instances/{ApplicationInstanceId}/node-signals", 200],
  },
  () => SignalApplicationInstanceNodeInstancesRequest,
  () => SignalApplicationInstanceNodeInstancesResponse
);
