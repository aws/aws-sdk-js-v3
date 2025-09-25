// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _EET,
  _ELRT,
  _ESA,
  _EST,
  _L,
  _LR,
  _LRR,
  _LRRi,
  _NP,
  _NT,
  _R,
  _Rep,
  _RET,
  _RL,
  _RN,
  _RST,
  _SR,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListReplaysRequest = struct(n0, _LRR, 0, [_NP, _St, _ESA, _NT, _L], [0, 0, 0, 0, 1]);
export var ListReplaysResponse = struct(n0, _LRRi, 0, [_R, _NT], [() => ReplayList, 0]);
export var Replay = struct(
  n0,
  _Rep,
  0,
  [_RN, _ESA, _St, _SR, _EST, _EET, _ELRT, _RST, _RET],
  [0, 0, 0, 0, 4, 4, 4, 4, 4]
);
export var ReplayList = list(n0, _RL, 0, () => Replay);
export var ListReplays = op(
  n0,
  _LR,
  0,
  () => ListReplaysRequest,
  () => ListReplaysResponse
);
