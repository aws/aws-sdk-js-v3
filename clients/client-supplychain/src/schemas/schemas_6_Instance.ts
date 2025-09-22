// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aAI,
  _cTr,
  _DI,
  _DIR,
  _DIRe,
  _eM,
  _GI,
  _GIR,
  _GIRe,
  _h,
  _hQ,
  _I,
  _i,
  _iD,
  _iI,
  _IL,
  _iN,
  _in,
  _iNF,
  _iSF,
  _kKA,
  _LI,
  _LIR,
  _LIRi,
  _lMT,
  _mR,
  _nT,
  _st,
  _UI,
  _UIR,
  _UIRp,
  _vN,
  _wADD,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInstanceRequest = struct(n0, _DIR, 0, [_iI], [[0, 1]]);
export var DeleteInstanceResponse = struct(n0, _DIRe, 0, [_i], [() => Instance]);
export var GetInstanceRequest = struct(n0, _GIR, 0, [_iI], [[0, 1]]);
export var GetInstanceResponse = struct(n0, _GIRe, 0, [_i], [() => Instance]);
export var Instance = struct(
  n0,
  _I,
  0,
  [_iI, _aAI, _st, _eM, _wADD, _cTr, _lMT, _iN, _iD, _kKA, _vN],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 1]
);
export var ListInstancesRequest = struct(
  n0,
  _LIR,
  0,
  [_nT, _mR, _iNF, _iSF],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _iNF,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _iSF,
      },
    ],
  ]
);
export var ListInstancesResponse = struct(n0, _LIRi, 0, [_in, _nT], [() => InstanceList, 0]);
export var UpdateInstanceRequest = struct(n0, _UIR, 0, [_iI, _iN, _iD], [[0, 1], 0, 0]);
export var UpdateInstanceResponse = struct(n0, _UIRp, 0, [_i], [() => Instance]);
export var InstanceList = list(n0, _IL, 0, () => Instance);
export var InstanceNameList = 64 | 0;

export var InstanceStateList = 64 | 0;

export var DeleteInstance = op(
  n0,
  _DI,
  {
    [_h]: ["DELETE", "/api/instance/{instanceId}", 200],
  },
  () => DeleteInstanceRequest,
  () => DeleteInstanceResponse
);
export var GetInstance = op(
  n0,
  _GI,
  {
    [_h]: ["GET", "/api/instance/{instanceId}", 200],
  },
  () => GetInstanceRequest,
  () => GetInstanceResponse
);
export var ListInstances = op(
  n0,
  _LI,
  {
    [_h]: ["GET", "/api/instance", 200],
  },
  () => ListInstancesRequest,
  () => ListInstancesResponse
);
export var UpdateInstance = op(
  n0,
  _UI,
  {
    [_h]: ["PATCH", "/api/instance/{instanceId}", 200],
  },
  () => UpdateInstanceRequest,
  () => UpdateInstanceResponse
);
