// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _pNo, _pVI, _SDPV, _SDPVR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var SetDefaultPolicyVersionRequest = struct(
  n0,
  _SDPVR,
  0,
  [_pNo, _pVI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var SetDefaultPolicyVersion = op(
  n0,
  _SDPV,
  {
    [_h]: ["PATCH", "/policies/{policyName}/version/{policyVersionId}", 200],
  },
  () => SetDefaultPolicyVersionRequest,
  () => Unit
);
