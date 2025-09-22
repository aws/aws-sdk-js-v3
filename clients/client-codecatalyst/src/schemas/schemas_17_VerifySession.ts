// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _ide, _VS, _VSR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var VerifySessionResponse = struct(n0, _VSR, 0, [_ide], [0]);
export var VerifySession = op(
  n0,
  _VS,
  {
    [_ht]: ["GET", "/session", 200],
  },
  () => Unit,
  () => VerifySessionResponse
);
