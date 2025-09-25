// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AEAC,
  _AEACI,
  _AEACO,
  _ar,
  _CEAC,
  _CEACI,
  _CEACO,
  _cRA,
  _cRAo,
  _cT,
  _DEAC,
  _DEACI,
  _DEACO,
  _EAC,
  _eAC,
  _eAI,
  _eN,
  _GEAC,
  _GEACI,
  _GEACO,
  _i,
  _lMA,
  _mAI,
  _rA,
  _rAe,
  _REAC,
  _REACI,
  _REACO,
  _st,
  _t,
  _UEAC,
  _UEACI,
  _UEACO,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_20_Create";

/* eslint no-var: 0 */

export var AcceptEnvironmentAccountConnectionInput = struct(n0, _AEACI, 0, [_i], [0]);
export var AcceptEnvironmentAccountConnectionOutput = struct(
  n0,
  _AEACO,
  0,
  [_eAC],
  [() => EnvironmentAccountConnection]
);
export var CreateEnvironmentAccountConnectionInput = struct(
  n0,
  _CEACI,
  0,
  [_cT, _mAI, _rA, _eN, _t, _cRA, _cRAo],
  [[0, 4], 0, 0, 0, () => TagList, 0, 0]
);
export var CreateEnvironmentAccountConnectionOutput = struct(
  n0,
  _CEACO,
  0,
  [_eAC],
  [() => EnvironmentAccountConnection]
);
export var DeleteEnvironmentAccountConnectionInput = struct(n0, _DEACI, 0, [_i], [0]);
export var DeleteEnvironmentAccountConnectionOutput = struct(
  n0,
  _DEACO,
  0,
  [_eAC],
  [() => EnvironmentAccountConnection]
);
export var EnvironmentAccountConnection = struct(
  n0,
  _EAC,
  0,
  [_i, _ar, _mAI, _eAI, _rA, _eN, _rAe, _lMA, _st, _cRA, _cRAo],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0]
);
export var GetEnvironmentAccountConnectionInput = struct(n0, _GEACI, 0, [_i], [0]);
export var GetEnvironmentAccountConnectionOutput = struct(n0, _GEACO, 0, [_eAC], [() => EnvironmentAccountConnection]);
export var RejectEnvironmentAccountConnectionInput = struct(n0, _REACI, 0, [_i], [0]);
export var RejectEnvironmentAccountConnectionOutput = struct(
  n0,
  _REACO,
  0,
  [_eAC],
  [() => EnvironmentAccountConnection]
);
export var UpdateEnvironmentAccountConnectionInput = struct(n0, _UEACI, 0, [_i, _rA, _cRA, _cRAo], [0, 0, 0, 0]);
export var UpdateEnvironmentAccountConnectionOutput = struct(
  n0,
  _UEACO,
  0,
  [_eAC],
  [() => EnvironmentAccountConnection]
);
export var AcceptEnvironmentAccountConnection = op(
  n0,
  _AEAC,
  2,
  () => AcceptEnvironmentAccountConnectionInput,
  () => AcceptEnvironmentAccountConnectionOutput
);
export var CreateEnvironmentAccountConnection = op(
  n0,
  _CEAC,
  2,
  () => CreateEnvironmentAccountConnectionInput,
  () => CreateEnvironmentAccountConnectionOutput
);
export var DeleteEnvironmentAccountConnection = op(
  n0,
  _DEAC,
  2,
  () => DeleteEnvironmentAccountConnectionInput,
  () => DeleteEnvironmentAccountConnectionOutput
);
export var GetEnvironmentAccountConnection = op(
  n0,
  _GEAC,
  0,
  () => GetEnvironmentAccountConnectionInput,
  () => GetEnvironmentAccountConnectionOutput
);
export var RejectEnvironmentAccountConnection = op(
  n0,
  _REAC,
  2,
  () => RejectEnvironmentAccountConnectionInput,
  () => RejectEnvironmentAccountConnectionOutput
);
export var UpdateEnvironmentAccountConnection = op(
  n0,
  _UEAC,
  2,
  () => UpdateEnvironmentAccountConnectionInput,
  () => UpdateEnvironmentAccountConnectionOutput
);
