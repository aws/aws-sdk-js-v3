// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTS, _DTSR, _h, _tSI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTestSetRequest = struct(n0, _DTSR, 0, [_tSI], [[0, 1]]);
export var DeleteTestSet = op(
  n0,
  _DTS,
  {
    [_h]: ["DELETE", "/testsets/{testSetId}", 204],
  },
  () => DeleteTestSetRequest,
  () => Unit
);
