// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _Ac, _GCI, _GCIR, _GCIRe, _UI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetCallerIdentityRequest = struct(n0, _GCIR, 0, [], []);
export var GetCallerIdentityResponse = struct(n0, _GCIRe, 0, [_UI, _Ac, _A], [0, 0, 0]);
export var GetCallerIdentity = op(
  n0,
  _GCI,
  0,
  () => GetCallerIdentityRequest,
  () => GetCallerIdentityResponse
);
