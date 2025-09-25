// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _iMA, _s, _sR, _UES, _UESR, _UESRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateEnrollmentStatusRequest = struct(n0, _UESR, 0, [_s, _iMA], [0, 2]);
export var UpdateEnrollmentStatusResponse = struct(n0, _UESRp, 0, [_s, _sR], [0, 0]);
export var UpdateEnrollmentStatus = op(
  n0,
  _UES,
  0,
  () => UpdateEnrollmentStatusRequest,
  () => UpdateEnrollmentStatusResponse
);
