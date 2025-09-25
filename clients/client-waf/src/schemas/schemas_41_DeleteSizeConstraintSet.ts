// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _DSCS, _DSCSR, _DSCSRe, _SCSI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSizeConstraintSetRequest = struct(n0, _DSCSR, 0, [_SCSI, _CT], [0, 0]);
export var DeleteSizeConstraintSetResponse = struct(n0, _DSCSRe, 0, [_CT], [0]);
export var DeleteSizeConstraintSet = op(
  n0,
  _DSCS,
  0,
  () => DeleteSizeConstraintSetRequest,
  () => DeleteSizeConstraintSetResponse
);
