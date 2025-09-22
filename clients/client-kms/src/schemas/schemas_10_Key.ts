// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GKP, _GKPR, _GKPRe, _KI, _P, _PN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetKeyPolicyRequest = struct(n0, _GKPR, 0, [_KI, _PN], [0, 0]);
export var GetKeyPolicyResponse = struct(n0, _GKPRe, 0, [_P, _PN], [0, 0]);
export var GetKeyPolicy = op(
  n0,
  _GKP,
  0,
  () => GetKeyPolicyRequest,
  () => GetKeyPolicyResponse
);
