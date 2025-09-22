// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _PVSOV, _PVSOVR, _PVSOVRu, _vI, _vS, _vSD, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutVerificationStateOnViolationRequest = struct(n0, _PVSOVR, 0, [_vI, _vS, _vSD], [[0, 1], 0, 0]);
export var PutVerificationStateOnViolationResponse = struct(n0, _PVSOVRu, 0, [], []);
export var PutVerificationStateOnViolation = op(
  n0,
  _PVSOV,
  {
    [_h]: ["POST", "/violations/verification-state/{violationId}", 200],
  },
  () => PutVerificationStateOnViolationRequest,
  () => PutVerificationStateOnViolationResponse
);
