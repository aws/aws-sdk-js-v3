// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DACF, _DTe, _DTR, _DTRe, _RI, _SAe, _TI, _UTp, _UTR, _UTRp, _VT, _VTR, _VTRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTrustRequest = struct(n0, _DTR, 0, [_TI, _DACF], [0, 2]);
export var DeleteTrustResult = struct(n0, _DTRe, 0, [_TI], [0]);
export var UpdateTrustRequest = struct(n0, _UTR, 0, [_TI, _SAe], [0, 0]);
export var UpdateTrustResult = struct(n0, _UTRp, 0, [_RI, _TI], [0, 0]);
export var VerifyTrustRequest = struct(n0, _VTR, 0, [_TI], [0]);
export var VerifyTrustResult = struct(n0, _VTRe, 0, [_TI], [0]);
export var DeleteTrust = op(
  n0,
  _DTe,
  0,
  () => DeleteTrustRequest,
  () => DeleteTrustResult
);
export var UpdateTrust = op(
  n0,
  _UTp,
  0,
  () => UpdateTrustRequest,
  () => UpdateTrustResult
);
export var VerifyTrust = op(
  n0,
  _VT,
  0,
  () => VerifyTrustRequest,
  () => VerifyTrustResult
);
