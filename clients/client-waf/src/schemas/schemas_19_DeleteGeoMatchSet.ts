// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _DGMS, _DGMSR, _DGMSRe, _GMSI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGeoMatchSetRequest = struct(n0, _DGMSR, 0, [_GMSI, _CT], [0, 0]);
export var DeleteGeoMatchSetResponse = struct(n0, _DGMSRe, 0, [_CT], [0]);
export var DeleteGeoMatchSet = op(
  n0,
  _DGMS,
  0,
  () => DeleteGeoMatchSetRequest,
  () => DeleteGeoMatchSetResponse
);
