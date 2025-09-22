// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _CPo, _DI, _DSi, _DSRi, _DSRis, _ES, _ESR, _ESRn, _P, _UN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectPassword = sim(n0, _CPo, 0, 8);
export var DisableSsoRequest = struct(n0, _DSRi, 0, [_DI, _UN, _P], [0, 0, [() => ConnectPassword, 0]]);
export var DisableSsoResult = struct(n0, _DSRis, 0, [], []);
export var EnableSsoRequest = struct(n0, _ESR, 0, [_DI, _UN, _P], [0, 0, [() => ConnectPassword, 0]]);
export var EnableSsoResult = struct(n0, _ESRn, 0, [], []);
export var DisableSso = op(
  n0,
  _DSi,
  0,
  () => DisableSsoRequest,
  () => DisableSsoResult
);
export var EnableSso = op(
  n0,
  _ES,
  0,
  () => EnableSsoRequest,
  () => EnableSsoResult
);
