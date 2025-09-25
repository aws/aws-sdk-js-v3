// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _DIR, _DIRe, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIdentityRequest = struct(n0, _DIR, 0, [_I], [0]);
export var DeleteIdentityResponse = struct(n0, _DIRe, 0, [], []);
export var DeleteIdentity = op(
  n0,
  _DI,
  0,
  () => DeleteIdentityRequest,
  () => DeleteIdentityResponse
);
