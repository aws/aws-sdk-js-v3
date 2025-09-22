// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DL, _DLR, _DLRe, _dS, _eT, _h, _l, _p, _rea, _SLRto, _SLRtop, _SLto, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLaunchRequest = struct(
  n0,
  _DLR,
  0,
  [_p, _l],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteLaunchResponse = struct(n0, _DLRe, 0, [], []);
export var StopLaunchRequest = struct(n0, _SLRto, 0, [_p, _l, _dS, _rea], [[0, 1], [0, 1], 0, 0]);
export var StopLaunchResponse = struct(n0, _SLRtop, 0, [_eT], [4]);
export var DeleteLaunch = op(
  n0,
  _DL,
  {
    [_h]: ["DELETE", "/projects/{project}/launches/{launch}", 200],
  },
  () => DeleteLaunchRequest,
  () => DeleteLaunchResponse
);
export var StopLaunch = op(
  n0,
  _SLto,
  {
    [_h]: ["POST", "/projects/{project}/launches/{launch}/cancel", 200],
  },
  () => StopLaunchRequest,
  () => StopLaunchResponse
);
