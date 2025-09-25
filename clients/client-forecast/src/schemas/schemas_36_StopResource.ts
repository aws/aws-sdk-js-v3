// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _RA, _SR, _SRR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopResourceRequest = struct(n0, _SRR, 0, [_RA], [0]);
export var StopResource = op(
  n0,
  _SR,
  2,
  () => StopResourceRequest,
  () => Unit
);
