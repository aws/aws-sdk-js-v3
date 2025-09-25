// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _CT, _CTr, _GP, _GPR, _GPRe, _h, _I, _MT, _N, _OI, _P, _PI, _S, _SM, _SS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetProfileRequest = struct(n0, _GPR, 0, [_PI], [[0, 1]]);
export var GetProfileResponse = struct(n0, _GPRe, 0, [_P], [() => Profile]);
export var Profile = struct(n0, _P, 0, [_I, _A, _N, _OI, _S, _SM, _SS, _CTr, _MT, _CT], [0, 0, 0, 0, 0, 0, 0, 4, 4, 0]);
export var GetProfile = op(
  n0,
  _GP,
  {
    [_h]: ["GET", "/profile/{ProfileId}", 200],
  },
  () => GetProfileRequest,
  () => GetProfileResponse
);
