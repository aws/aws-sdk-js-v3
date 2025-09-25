// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _DRMS, _DRMSR, _DRMSRe, _RMSI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRegexMatchSetRequest = struct(n0, _DRMSR, 0, [_RMSI, _CT], [0, 0]);
export var DeleteRegexMatchSetResponse = struct(n0, _DRMSRe, 0, [_CT], [0]);
export var DeleteRegexMatchSet = op(
  n0,
  _DRMS,
  0,
  () => DeleteRegexMatchSetRequest,
  () => DeleteRegexMatchSetResponse
);
