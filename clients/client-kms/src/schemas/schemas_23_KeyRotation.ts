// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EKRn, _EKRR, _GKRS, _GKRSR, _GKRSRe, _KI, _KRE, _NRD, _ODRSD, _RPID, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableKeyRotationRequest = struct(n0, _EKRR, 0, [_KI, _RPID], [0, 1]);
export var GetKeyRotationStatusRequest = struct(n0, _GKRSR, 0, [_KI], [0]);
export var GetKeyRotationStatusResponse = struct(n0, _GKRSRe, 0, [_KRE, _KI, _RPID, _NRD, _ODRSD], [2, 0, 1, 4, 4]);
export var EnableKeyRotation = op(
  n0,
  _EKRn,
  0,
  () => EnableKeyRotationRequest,
  () => Unit
);
export var GetKeyRotationStatus = op(
  n0,
  _GKRS,
  0,
  () => GetKeyRotationStatusRequest,
  () => GetKeyRotationStatusResponse
);
