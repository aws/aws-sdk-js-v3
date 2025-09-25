// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _CTS, _GCTS, _GCTSR, _GCTSRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetChangeTokenStatusRequest = struct(n0, _GCTSR, 0, [_CT], [0]);
export var GetChangeTokenStatusResponse = struct(n0, _GCTSRe, 0, [_CTS], [0]);
export var GetChangeTokenStatus = op(
  n0,
  _GCTS,
  0,
  () => GetChangeTokenStatusRequest,
  () => GetChangeTokenStatusResponse
);
