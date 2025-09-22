// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _AP, _DI, _DLi, _RP, _RR, _RSa, _RSadi, _RSS, _RTa, _SSh, _UR, _URR, _URRp, _USU, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RadiusSharedSecret = sim(n0, _RSS, 0, 8);
export var RadiusSettings = struct(
  n0,
  _RSa,
  0,
  [_RSadi, _RP, _RTa, _RR, _SSh, _AP, _DLi, _USU],
  [64 | 0, 1, 1, 1, [() => RadiusSharedSecret, 0], 0, 0, 2]
);
export var UpdateRadiusRequest = struct(n0, _URR, 0, [_DI, _RSa], [0, [() => RadiusSettings, 0]]);
export var UpdateRadiusResult = struct(n0, _URRp, 0, [], []);
export var Servers = 64 | 0;

export var UpdateRadius = op(
  n0,
  _UR,
  0,
  () => UpdateRadiusRequest,
  () => UpdateRadiusResult
);
