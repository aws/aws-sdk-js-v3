// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _DIPS, _DIPSR, _DIPSRe, _IPSI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIPSetRequest = struct(n0, _DIPSR, 0, [_IPSI, _CT], [0, 0]);
export var DeleteIPSetResponse = struct(n0, _DIPSRe, 0, [_CT], [0]);
export var DeleteIPSet = op(
  n0,
  _DIPS,
  0,
  () => DeleteIPSetRequest,
  () => DeleteIPSetResponse
);
