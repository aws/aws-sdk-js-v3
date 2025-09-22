// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GES, _GESR, _GESRe, _lUT, _mAE, _nOMAOI, _s, _sR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetEnrollmentStatusRequest = struct(n0, _GESR, 0, [], []);
export var GetEnrollmentStatusResponse = struct(n0, _GESRe, 0, [_s, _sR, _mAE, _lUT, _nOMAOI], [0, 0, 2, 4, 1]);
export var GetEnrollmentStatus = op(
  n0,
  _GES,
  0,
  () => GetEnrollmentStatusRequest,
  () => GetEnrollmentStatusResponse
);
