// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EA, _VEI, _VEIR, _VEIRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var VerifyEmailIdentityRequest = struct(n0, _VEIR, 0, [_EA], [0]);
export var VerifyEmailIdentityResponse = struct(n0, _VEIRe, 0, [], []);
export var VerifyEmailIdentity = op(
  n0,
  _VEI,
  0,
  () => VerifyEmailIdentityRequest,
  () => VerifyEmailIdentityResponse
);
