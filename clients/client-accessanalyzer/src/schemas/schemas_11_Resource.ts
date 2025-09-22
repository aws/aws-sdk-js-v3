// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aA, _h, _rA, _rOA, _SRS, _SRSR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StartResourceScanRequest = struct(n0, _SRSR, 0, [_aA, _rA, _rOA], [0, 0, 0]);
export var StartResourceScan = op(
  n0,
  _SRS,
  {
    [_h]: ["POST", "/resource/scan", 200],
  },
  () => StartResourceScanRequest,
  () => Unit
);
