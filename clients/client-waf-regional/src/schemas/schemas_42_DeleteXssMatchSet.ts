// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _DXMS, _DXMSR, _DXMSRe, _XMSI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteXssMatchSetRequest = struct(n0, _DXMSR, 0, [_XMSI, _CT], [0, 0]);
export var DeleteXssMatchSetResponse = struct(n0, _DXMSRe, 0, [_CT], [0]);
export var DeleteXssMatchSet = op(
  n0,
  _DXMS,
  0,
  () => DeleteXssMatchSetRequest,
  () => DeleteXssMatchSetResponse
);
